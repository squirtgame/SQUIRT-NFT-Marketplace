/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

module.exports = {
	  defaultNetwork: "hardhat",
	  networks: {
		      hardhat: {
			            chainId: 1337
			          },
		      bsc: {
			            url: "https://bsc-dataseed.binance.org/",
			            gasPrice: 470000000000,
			      	    chainId: 56,
			            accounts: [privateKey]
			          }
		    },
	  solidity: {
		      version: "0.8.4",
		      settings: {
			            optimizer: {
					            enabled: true,
					            runs: 200
					          }
			          }
		    }
}
