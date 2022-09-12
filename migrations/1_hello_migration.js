var Hello = artifacts.require("Hello");

module.exports = function(deployer) {
  // Deploy the Hello contract as our only task
  deployer.deploy(Hello);
};
