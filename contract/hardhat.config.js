require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      persistent: true,
      network_id: "1337",  // Ensure unique network id
      saveDeployments: true,
      state: "./state",  // Specify a custom path
    },
  },


};
