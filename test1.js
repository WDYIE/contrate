var path = require('path');
let Web3 = require("Web3");
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

//Fish.json 是通过truffle complie 得来，可以直接使用truffle migrate --reset 命令部署合约，返回合约地址 contractAddr 和 发布该合约的账户地址。

const contractPath = path.resolve(__dirname, './build/contracts/Fish.json');
//获取json中的abi, bytecode的值，
const { abi, bytecode } = require(contractPath);

//合约地址用于下文创建合约指定合约在链上的位置，账户地址为合约调用时的msg.sender。部署合约时返回值
const contractAddr = '0xb0d0974ea326AbcE94912Cc5326786C6DC19B7E6';
const acountAddr = '0xcC936528d4d57f22Fd33493c7D1E89aBc09ADA16';
//创建合约
var myContract = new web3.eth.Contract(abi,contractAddr,{from:acountAddr});

//调用查询接口
// myContract.methods.getTest().call((error, result) => {
//     console.log(result)
// });

//调用赋值接口
// using the event emitter
// myContract.methods.updateJewel(12,'0xf7aa24e730bF9b980876b7CA734DB90aDAD70c6d').send({from: acountAddr})
//     .on('transactionHash', (hash) => {
//
//     })
//     .on('confirmation', (confirmationNumber, receipt) => {
//     })
//     .on('receipt', (receipt) => {
//         console.log(receipt);
//     })
//     .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.

//查询对应账号的jewel

myContract.methods.getJewel('0xf7aa24e730bF9b980876b7CA734DB90aDAD70c6d').call((error, result) => {
    console.log(result)
});
myContract.methods.getCoinbase().call((error, result) => {
    console.log(result)
});