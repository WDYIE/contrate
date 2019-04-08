const Migrations = artifacts.require("Migrations");
//const Fish = artifacts.require("Fish")
const Jewel = artifacts.require('JewelCoin')

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Jewel);
};
