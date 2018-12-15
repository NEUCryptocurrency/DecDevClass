Key takeaways are:

1. Nick Szabo created the concept of smart contracts in 1998, contracts that are immutably recorded and therefore automatically trustworthy and enforceable, given some mechanism to search for contracts as their "due dates" pass or relevant events occur

2. Vitalik Buterin, among others at the Ethereum Foundation, realised that a blockchain was the perfect data structure for recording contract information and consent immutably. If you can record contracts and their relevant events in an objective manner, you can let people record their contract's on-chain and search for contracts every block using a Virtual Machine.

3. Vitalik and co. decided to represent contracts in a code-like manner, using a language they wrote called Solidity. The compiled bytecode of these contracts (the same kind of bytecode which all code compiles to, which a machine can understand) could be associated with an address on the network, allowing the Ethereum Virtual Machine to search for contract code and execute the contract's terms where applicable.

4. In order to stop people from spamming useless contracts onto the network, in an attempt to stop Ethereum smart contracts from executing, Ethereum demands a small fee for every computational step your contract takes - this is called gas. Everyone who interacts with your contract must pay gas to do so. This means that we should work hard to make our contracts as computationally efficient as possible.

5. In order to stop people from stalling the Ethereum network by submitting a contract with never-ending loops, Ethereum requires you to set a gas limit on your contract. As the EVM executes your contract, if it reaches your contract's gas limit, it will quit execution immediately.

6. In order to make interacting with smart contracts more user-friendly, the Ethereum Foundation built a command-line console called geth which allows us to interact with public or local Ethereum instances. They also built Metamask, a browser extension to help users understand their account and transaction activity. Finally, they built the web3.js library, a Javascript library allowing website front-ends to interface with Ethereum. 
