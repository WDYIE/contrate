pragma solidity >=0.4.22<0.6.0;

contract Fish {
    uint256 jewel;
    address [] public players;
    mapping(address => uint256) players_jewel;
    address coinbase;
    constructor()public{
        coinbase = msg.sender;
    }
    function updateJewel(uint256 jewel_count, address toPalyer) public {
        require(msg.sender == coinbase);
        players_jewel[toPalyer] = players_jewel[toPalyer] + jewel_count;
    }

    function getJewel(address player) public view returns (uint256){
        return players_jewel[player];
    }

    function getTest() public view returns (uint256){
        return 20;
    }
    function getCoinbase() public view returns (address){
        return coinbase;
    }

}
