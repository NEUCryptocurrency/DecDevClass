pragma solidity ^0.4.21;
contract Storage {
    
    uint public stored;
    
    function Storage(uint _stored) public {
        stored = _stored;
    }

}
