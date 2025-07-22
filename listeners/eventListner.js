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
        target: ethers.utils.formatEther(targetAmount), // or store as string
        deadline: deadline.toString(),
        creator: owner,
        tx_hash: event.transactionHash,
      },
    ]);
    console.log('Inserted campaign into Supabase:', title);
  }
);
