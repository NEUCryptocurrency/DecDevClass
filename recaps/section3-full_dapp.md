1) First, we built a smart contract to manage an organisation via smart contract - a [Decentralised Autonomous Organisation](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization). We constructed the smart contract together by defining what users were involved (including specific roles within the DAO), then considering what actions they will need to take, then building functionality for those actions - permissioned around the roles we defined. Take a look at the source code [here](https://github.com/NEUCryptocurrency/DecDevClass/blob/master/Nov10/ourDAO.sol).

2) Next, we conceptually designed our front end for this DAO. We decided to separate it into two sections. We want to show users their financial standing (ie shares they own, latest price offer for a share, ETH they have available) on one side, with options to take action as well - take on a bid offer, etc. On the other side, we display information about proposals before the DAO - passed and pending - and clicking on a proposal should display more information about it (votes so far, time-frame, budget, etc).

3) Lastly, we began implementing the front end we designed. It is composed of two files - an [html file](https://github.com/NEUCryptocurrency/DecDevClass/blob/master/Nov10/index.html) that imports web3, and a [javascript file](https://github.com/NEUCryptocurrency/DecDevClass/blob/master/Nov10/dapp.js) which does all the real work. As a class, we built out some basic functionality for reading information from the contract - calling dao.proposals(), and passing it the fallback function that web3 uses to give it information back from the blockchain.

4) And for homework, I assigned you all to follow the pattern laid out from class on reading from the blockchain to read more information (such as shares for our user, available bids, etc) and to even implement writing functionality - letting our user actually submit their own proposals from our front-end, for example. And as the most ambitious piece of homework, I asked you all to consider designing around blockchain when attempting this homework - anticipating, for example, that your attempt to write to the smart contract will take several minutes to confirm, and keeping your user informed on what's going on when that delay occurs.