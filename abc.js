Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0]
web3.personal.unlockAccount(web3.eth.defaultAccount)

candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

// Here's how we would access our contract:
var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"name":"Voting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
var userTokenContract = web3.eth.contract(abi)
var contractAddress = '0xe721126fc21ee59de94b1a23a4c8892f316eb7e7';
var ZombieFactory = userTokenContract.at(contractAddress)
// `ZombieFactory` has access to our contract's public functions and events
// some sort of event listener to take the text input:
function myFunction() {
  
  
  ZombieFactory.voteForCandidate("Nick", {from: web3.eth.accounts[0]}, function() {
    
    console.log(ZombieFactory.totalVotesFor.call("Nick", {from: web3.eth.accounts[0]}).toString());
});   
}
