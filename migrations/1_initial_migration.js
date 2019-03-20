const Migrations = artifacts.require("Migrations");
const Fish = artifacts.require("Fish")

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Fish)
};
