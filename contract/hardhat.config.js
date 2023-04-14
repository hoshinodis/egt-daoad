require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const etherscanKey = process.env.ETHERSCAN_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "zkEVM_test",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`0x${privateKey}`],
      gas: 500000,
      gasPrice: 1000000000,
    },
    // zkEVM_test: {
    //   url: `https://rpc.public.zkevm-test.net`,
    //   accounts: [`0x${privateKey}`],
    //   gas: 500000,
    //   gasPrice: 1000000000,
    // },
  },
  etherscan: {
    apiKey: etherscanKey,
  },
  solidity: {
    version: "0.8.18",
  },
};
