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
  var daoContract = "get from remix!"
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
