/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
const { mnemonic } = require('./secrets.json');
require("@nomiclabs/hardhat-etherscan");
module.exports = {
  solidity: "0.8.17",
 
  networks: {
         mainnetCofinex: {
          url: `https://mainnet.cofinex.io`,
          accounts: { mnemonic: mnemonic },
        },
      },
      etherscan: {
        apiKey: {
          mainnetCofinex: "1234"
        },
        customChains: [
          {
            network: "mainnetCofinex",
            chainId: 1338,
            urls: {
              apiURL: "https://mainnet.cofinex.io",
              browserURL: "https://scanner.cofinex.io"
            }
          }
        ]
      }
    
};
