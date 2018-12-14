window.addEventListener('load', async () => {

  // Default message - if a user doesn't have metamask, this will remain
  document.getElementById("dashboard").innerHTML = "<h1>DAO Dashboard is a dapp built on the Ethereum blockchain. You need an Ethereum wallet to use it - we recommend metamask, which you can install <a href = \'https://metamask.io\'>here</a></h1>";

  // check for metamask
  if(typeof web3 !== 'undefined') {
    await ethereum.enable();
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Try to get their account
  try {
    userAccount = web3.eth.accounts[0];
    document.getElementById("dashboard").innerHTML = "";
  } catch (e) {
    console.error(e);
  }

  // Web3 info
  var daoContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"proposal","type":"string"},{"name":"votesFor","type":"uint256"},{"name":"totalVotes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_vote","type":"bool"},{"name":"index","type":"uint256"}],"name":"vote","outputs":[{"name":"passed","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"p","type":"string"}],"name":"submitProposal","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bids","outputs":[{"name":"price","type":"uint256"},{"name":"shares","type":"uint256"},{"name":"bidder","type":"address"},{"name":"fulfilled","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"howMany","type":"uint256"}],"name":"submitBid","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"implementProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"fulfillBid","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"charter","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"passedProposals","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"getShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_charter","type":"string"},{"name":"_totalShares","type":"uint256"},{"name":"pf","type":"uint256"},{"name":"stv","type":"uint256"},{"name":"vfp","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

  dao = daoContract.at("0x5f24aca0f492b897dec04a69a95a6c757107d6e8");

  // Set up skeleton
  document.getElementById("dashboard").innerHTML += "<div id = \"proposals\"><h1>Proposals</h1></div>";
  document.getElementById("proposals").innerHTML += "<div id = \"pending-props\"><h3>Pending proposals</h3></div>";
  document.getElementById("proposals").innerHTML += "<div id = \"passed-props\"><h3>Passed proposals</h3></div>";

  // Some ideas for info we'll get
  getPendingProposal(0);
  getPassedProposal(0);
  getShares(userAccount);
  getBid(0);

});

function getPendingProposal(index) {
  dao.proposals(index, function(err, result) {
    if (!err)
      document.getElementById("pending-props").innerHTML += "<p>Pending Proposal " + index + ": " + result[0] + "</p>";
    else
      console.error(err);
  });
}

function getPassedProposal(index) {
  dao.passedProposals(index, function(err, result) {
    if (!err)
      document.getElementById("passed-props").innerHTML += "<p>Passed Proposal " + index + ": " + result + "</p>";
    else
      //console.error(err);
      document.getElementById("passed-props").innerHTML += "<p>No proposals have been passed yet</p>";
  });
}
