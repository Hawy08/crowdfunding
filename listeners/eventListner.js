require('dotenv').config();
const { ethers } = require('ethers');
const { createClient } = require('@supabase/supabase-js');
const ABI = require('./CampaignABI.json');

const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  ABI,
  provider
);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function backfillCampaigns() {
  const filter = contract.filters.CampaignCreated();
  const latestBlock = await provider.getBlockNumber();
  const batchSize = 500;
  let allEvents = [];

  const deploymentBlock = 8817030;
  for (let fromBlock = deploymentBlock; fromBlock <= latestBlock; fromBlock += batchSize) {
    const toBlock = Math.min(fromBlock + batchSize - 1, latestBlock);
    const events = await contract.queryFilter(filter, fromBlock, toBlock);
    allEvents = allEvents.concat(events);
  }

  for (const event of allEvents) {
    const { args, transactionHash } = event;
    const [id, owner, title, description, targetAmount, deadline, imageUrl] = args;

    // Check if campaign already exists in Supabase (optional, to avoid duplicates)
    const { data: existing, error } = await supabase
      .from('campaigns')
      .select('id')
      .eq('id', id.toString());

    if (!existing || existing.length === 0) {
      await supabase.from('campaigns').insert([
        {
          id: id.toString(),
          title,
          description,
          image: imageUrl,
          target: ethers.formatEther(targetAmount),
          deadline: deadline.toString(),
          creator: owner,
          tx_hash: transactionHash,
        },
      ]);
      console.log('Backfilled campaign:', title);
    }
  }
}

// Run backfill before starting the event listener
console.log('Starting backfill...');
backfillCampaigns().then(() => {
  console.log('Done backfilling.');
  console.log('Listening for new campaigns...');
  // Listen for the correct event name: "CampaignCreated"
  contract.on(
    'CampaignCreated',
    async (
      id,
      owner,
      title,
      description,
      targetAmount,
      deadline,
      imageUrl,
      event
    ) => {
      // Convert BigNumber to string/number as needed
      await supabase.from('campaigns').insert([
        {
          id: id.toString(),
          title,
          description,
          image: imageUrl,
          target: ethers.formatEther(targetAmount), // or store as string
          deadline: deadline.toString(),
          creator: owner,
          tx_hash: event.transactionHash,
        },
      ]);
      console.log('Inserted campaign into Supabase:', title);
    }
  );
}).catch((err) => {
  console.error('Error during backfilling:', err);
});
