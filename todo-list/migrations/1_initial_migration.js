const Migrations = artifacts.require("Migrations");
const TodoList = artifacts.require("TodoList");
//const smContract = artifacts.require("smContract1");
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TodoList);
  // deployer.deploy(smContract);

};
