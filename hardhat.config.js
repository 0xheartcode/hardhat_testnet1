require("dotenv").config()
// Import confidential .env files


require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { INFURA_API_KEY, MNEMONIC, snowtraceApiKey } = process.env;


module.exports = {
  solidity: "0.8.9",
  networks: {
    fuji: {
	    url: INFURA_API_KEY,
	    chainId: 43113,
	    accounts: { mnemonic: MNEMONIC },     
    }
  },
	etherscan: {
		apiKey: snowtraceApiKey,
	},
};
