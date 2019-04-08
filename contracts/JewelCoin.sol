pragma solidity >=0.4.22 <0.6.0;

contract JewelCoin {
    event TransferJewel(address,uint256);
    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    /* Initializes contract with initial supply tokens to the creator of the contract */
    constructor( ) public {
        balanceOf[msg.sender] = 2000000;              // Give the creator all initial tokens
    }

    /* Send coins */
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);           // Check if the sender has enough
        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows
        balanceOf[msg.sender] -= _value;                    // Subtract from the sender
        balanceOf[_to] += _value;                           // Add the same to the recipient
        return true;
    }
    /* Send coins */
    function use(address _user, uint256 _value) public returns (bool success) {
        require(balanceOf[_user] >= _value);           // Check if the sender has enough
        balanceOf[msg.sender] += _value;                    // Subtract from the sender
        balanceOf[_user] -= _value;                           // Add the same to the recipient
        return true;
    }
}
