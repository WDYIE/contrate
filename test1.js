//调用赋值接口
// using the event emitter

//查询对应账号的jewel




function Contract() {

    var path = require('path');
    let Web3 = require("Web3");
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

//Fish.json 是通过truffle complie 得来，可以直接使用truffle migrate --reset 命令部署合约，返回合约地址 contractAddr 和 发布该合约的账户地址。

    const contractPath = path.resolve(__dirname, './build/contracts/Fish.json');
//获取json中的abi, bytecode的值，
    const {abi, bytecode} = require(contractPath);

//合约地址用于下文创建合约指定合约在链上的位置，账户地址为合约调用时的msg.sender。部署合约时返回值
    const contractAddr = '0x05e5185B48fE4aa9024938eaD6C74D2bc03b3829';
    const acountAddr = '0xcC936528d4d57f22Fd33493c7D1E89aBc09ADA16';
//创建合约
    var myContract = new web3.eth.Contract(abi, contractAddr, {from: acountAddr});

    this.getTest = function () {
        //调用查询接口
        myContract.methods.getTest().call((error, result) => {
            console.log(result)
        });
    };
    this.getCoinbase = function () {
        myContract.methods.getCoinbase().call((error, result) => {
            console.log(result)
        });
    };
    this.getJewel =async function ( accountAddr) {


        return new Promise(resolve => {

            myContract.methods.getJewel(accountAddr).call((error, result) => {
               if (error){
                   reject(error);
               }else {
                   resolve(result);
               }
            });
        });
    };
    this.addJewel = function (accountAddr, count) {

        return new Promise(resolve => {
            myContract.methods.updateJewel(count,accountAddr).send({from: acountAddr})
                .on('transactionHash', (hash) => {
                    resolve(hash);
                }).on('error', console.error);
        });
    };
    this.sayHello = function () {
        console.log("hello");
    }


}

module.exports = Contract;