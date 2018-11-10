window.addEventListener('load', async () => {

  document.getElementById("dashboard").innerHTML = "<h1>DAO Dashboard is a dapp built on the Ethereum blockchain. You need an Ethereum wallet to use it - we recommend metamask, which you can install <a href = \'https://metamask.io\'>here</a></h1>";

  // check for metamask
  if(typeof web3 !== 'undefined') {
    await ethereum.enable();
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  try {
    userAccount = web3.eth.accounts[0];
    document.getElementById("dashboard").innerHTML = userAccount;
  } catch (e) {
    console.error(e);
  }

});
