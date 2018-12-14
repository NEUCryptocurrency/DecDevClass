pragma solidity ^0.4.25;
contract DAO {

    mapping(address=>uint) shares;
    struct Prop {
        string proposal;
        uint votesFor;
        uint totalVotes;
    }
    Prop[] public proposals;

    struct Bid {
        uint price;
        uint shares;
        address bidder;
        bool fulfilled;
    }
    Bid[] public bids;

    string[] public passedProposals;
    string public charter;
    string public name;
    address founder;
    address[] board;
    uint totalShares;
    uint proposalFee;
    uint sharesToVote;
    uint votesForProp;

    constructor(string _name, string _charter, uint _totalShares, uint pf, uint stv, uint vfp) public {
        name = _name;
        charter = _charter;
        founder = msg.sender;
        board.push(founder);
        totalShares = _totalShares;
        proposalFee = pf;
        sharesToVote = stv;
        votesForProp = vfp;
        shares[founder] = totalShares;
    }

    function submitBid(uint howMany) public returns(bool success) {
        uint pps = msg.value/howMany;
        bids.push(Bid(pps, howMany, msg.sender, false));
    }

    function fulfillBid(uint index) public returns(bool success) {
        require(shares[msg.sender] >= bids[index].shares);
        require(bids[index].fulfilled == false);
        shares[msg.sender] -= bids[index].shares;
        shares[bids[index].bidder] += bids[index].shares;
        msg.sender.transfer(bids[index].price * bids[index].shares);
        bids[index].fulfilled = true;
    }

    function getShares(address owner) public view returns (uint) {
        return shares[owner];
    }

    function submitProposal(string p) public payable {
        require(msg.value >= proposalFee);
        proposals.push(Prop(p, 0, 0));
    }

    function implementProposal(uint index) {
        require(proposals[index].totalVotes >= votesForProp);
        if(proposals[index].votesFor >= proposals[index].totalVotes / 2)
            passedProposals.push(proposals[index].proposal);
    }

    function vote(bool _vote, uint index) public returns (bool passed){
        require(getShares(msg.sender) >= sharesToVote);
        if(_vote)
            proposals[index].votesFor++;
        proposals[index].totalVotes++;
    }
}
