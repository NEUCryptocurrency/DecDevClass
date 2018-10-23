pragma solidity ^0.4.21;
contract Storage {
    
    uint public stored;
    address deployer;
    
    function Storage(uint _stored) public {
        stored = _stored;
        deployer = msg.sender;
    }
    
    function setStored(uint newStored) public returns(bool) {
        require(msg.sender == deployer);
        stored = newStored;
    }
}

