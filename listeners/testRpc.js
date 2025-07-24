const { ethers } = require('ethers');
require('dotenv').config();

async function test() {
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const block = await provider.getBlockNumber();
  console.log('Current block number:', block);
}
test();
