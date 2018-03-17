var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

abi = JSON.parse('[{"constant":false,"inputs":[],"name":"useCharity","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_work","type":"string"},{"name":"_amount","type":"uint256"}],"name":"setGoal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"donatedMoney","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"check","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_value","type":"uint256"}],"name":"donate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[],"name":"WorkDone","type":"event"},{"anonymous":false,"inputs":[],"name":"WorkNotDone","type":"event"}]');
VotingContract = web3.eth.contract(abi);
web3.eth.defaultAccount =  web3.eth.accounts[0];
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0xdce63ec45209e5b5f53ce88f9ee2c26aa7445b17');
//candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

function foo() {
       // donatedMoney();

 var Name = document.getElementById("Name").value;
 var Amount = document.getElementById("Amount").value;
// console.log(Name);
//console.log(Amount);
  candidateName = $("#candidate").val();
contractInstance.donate(Name,Amount,{from:web3.eth.accounts[0], gas: 470000});
alert("Thanks "+Name+" for donating " + Amount +" . ");

//console.log( contractInstance.donatedMoney.call({from: web3.eth.accounts[0], gas: 470000}));

 
}

function foo1() {
        var goal = document.getElementById("Goal1").value;
        var amount = document.getElementById("Amount1").value;
        var message = document.getElementById("Message1").value;
        console.log(goal);
        console.log(amount);
        console.log(message);
        contractInstance.setGoal(goal,amount,{from: web3.eth.accounts[1], gas: 470000}); 
}

function donatedMoney(){
         var v = contractInstance. donatedMoney.call({from: web3.eth.accounts[0], gas: 470000});
         console.log(v['c']);
         alert("Your total Donation is "+v['c']);
         //var el = document.getElementById("youDonated").innerHTML = v['c'].toString();
         
}

function workInfo(){
        var v = document.getElementById("workdone");
        var m = document.getElementById("workdone").value;
        //m = m+ "\n";
        
        var WorkAmount = contractInstance.check.call({from: web3.eth.accounts[1], gas: 470000});
        var work = WorkAmount[0];
        var amount = WorkAmount[1]['c'][0];
        v.innerHTML = m+" " +work+" amount "+amount+" . \n * ";
        console.log( m+" " +work+" amount "+amount+" ." );
        
}

function useCharity(){
        contractInstance.useCharity({from: web3.eth.accounts[1], gas: 470000});
}
