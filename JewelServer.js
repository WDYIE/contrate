var express = require('express');
var app = express();

//var Contract = require('./JewelContract.js');
// var myContract = new Contract();
var myContract = null;

var usetDic = {kk:'0xf7aa24e730bF9b980876b7CA734DB90aDAD70c6d'}
app.post("/charge", function (req,res) {
    var  data = [];
    req.on('data',chunk=>{
        data.push(chunk);
    });
    req.on('end',()=>{
        obj = JSON.parse(data);
        var count = obj.count;
        var addr = obj.addr;
        console.log(count,addr);
        myContract.transfer(addr,count).then(function (result) {

            //todo 写数据库
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ addJewel: result}));
        });
    })
});

app.post("/use", function (req,res) {
    var  data = [];
    req.on('data',chunk=>{
        data.push(chunk);
    });
    req.on('end',()=>{
         obj = JSON.parse(data);
        // var count = obj.count;
        // var addr = usetDic[obj.openid];
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ addJewel: true}));
        // myContract.use(addr,obj.amount).then(function (result) {
        //     res.setHeader('Content-Type', 'application/json');
        //     res.end(JSON.stringify({ addJewel: result}));
        // });
    })
});

var  server = app.listen(3040,function () {
    console.log("应用实例启动");
});
