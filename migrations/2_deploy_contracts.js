var DWKToken = artifacts.require("DWKToken");

module.exports = function(deployer) {
    deployer.deploy(DWKToken, 100000);
}