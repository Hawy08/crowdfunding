require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('@matterlabs/hardhat-zksync-solc');
require('@matterlabs/hardhat-zksync-verify');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: '1.4.1',
    compilerSource: 'binary',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    zkSyncSepoliaTestnet: {
      url: 'https://sepolia.era.zksync.dev',
      ethNetwork: 'sepolia',
      zksync: true,
      chainId: 300,
      accounts: [process.env.PRIVATE_KEY],
      verifyURL:
        'https://explorer.sepolia.era.zksync.dev/contract_verification',
    },
    zkSyncMainnet: {
      url: 'https://mainnet.era.zksync.io',
      ethNetwork: 'mainnet',
      zksync: true,
      chainId: 324,
      accounts: [process.env.PRIVATE_KEY],
      verifyURL:
        'https://zksync2-mainnet-explorer.zksync.io/contract_verification',
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },

  solidity: {
    version: '0.8.23',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache-zk',
    artifacts: './artifacts-zk',
  },
};
