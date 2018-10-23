pragma solidity ^0.4.21;
contract Storage {
    
    uint public stored;
    address deployer;
    address[] setters;
    
    function Storage(uint _stored) public {
        stored = _stored;
        deployer = msg.sender;
        setters.push(deployer);
    }
    
    function setStored(uint newStored) public returns(bool) {
        bool allowed = false;
        for(uint i = 0; i < setters.length; i++) {
            if(setters[i] == msg.sender) {
                allowed = true;
            }
        }
        require(allowed);
        stored = newStored;
        return true;
    }
    
    function addSetter(address newSetter) public {
        require(msg.sender == deployer);
        setters.push(newSetter);
    }
    
}

