

const providerHttpUrl = 'http://localhost:7545';
const relativeConractPath = './build/contracts/JewelCoin.json';
const contractAddr = '0x71d5eac43418cc974d48aC18FC158aaE6E0902c8';
const deployAccountAddr = '0xcC936528d4d57f22Fd33493c7D1E89aBc09ADA16'

const testBAccountAddr = '0xf7aa24e730bF9b980876b7CA734DB90aDAD70c6d'
function JewelContract() {

    var path = require('path');
    var Web3 = require("Web3");
    const web3 = new Web3(new Web3.providers.HttpProvider(providerHttpUrl));

//Fish.json 是通过truffle complie 得来，可以直接使用truffle migrate --reset 命令部署合约，返回合约地址 contractAddr 和 发布该合约的账户地址。

    const contractPath = path.resolve(__dirname, relativeConractPath);
//获取json中的abi, bytecode的值，
    const {abi, bytecode} = require(contractPath);

    var myContract = new web3.eth.Contract(abi, contractAddr, {from: deployAccountAddr});

    myContract.events.TransferJewel((err,events)=>{
        console.log(events)
    }).on('data',(event)=>{
        console.log(event)
    }).on('changed', (event) => {
            // remove event from local database
    }).on('error', console.error);
    this.getBalance = async function (accountAddr) {
        return new Promise(resolve => {

            myContract.methods.balanceOf(accountAddr).call((error, result) => {
                if (error){
                    reject(error);
                }else {
                    resolve(result);
                }
            });
        });
    }

    this.transfer = async function (accountAddr,count) {
        return new Promise(resolve => {

            myContract.methods.transfer(accountAddr,count).send((error, result) => {
                if (error){
                    reject(error);
                }else {
                    resolve(result);
                }
            });
        });
    }

}
module.exports = JewelContract;