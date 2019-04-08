var express = require('express');
var app = express();

var Contract = require('./test1.js');
const  deployerAccountAddr ='0xcC936528d4d57f22Fd33493c7D1E89aBc09ADA16';
var myContract = new Contract(deployerAccountAddr);


app.post("/setJewel", function (req,res) {
    let  data = [];
    req.on('data',chunk=>{
        data.push(chunk);
    });
    req.on('end',()=>{
        obj = JSON.parse(data);
        var count = obj.count;
        var addr = obj.addr;
        console.log(count,addr);
        myContract.addJewel('0xcC936528d4d57f22Fd33493c7D1E89aBc09ADA16',20).then(function (result) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ addJewel: result}));
        });
    })
});
app.post("/getJewel",function (req,res) {
    let  data = [];
    req.on('data',chunk=>{
        data.push(chunk);
    });
    req.on('end',()=>{
        obj = JSON.parse(data);
        var addr = obj.addr;
        console.log(addr);
        myContract.getJewel(addr);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ addJewel: 1 }));

    })
});
app.post("/charge",function (req,res) {
    let  data = [];
    req.on('data',chunk=>{
        data.push(chunk);
    });
    req.on('end',()=>{
        obj = JSON.parse(data);
        var count = obj.count;
        var addr = obj.addr;
        console.log(count,addr);
        myContract.addJewel('0xcC936528d4d57f22Fd33493c7D1E89aBc09ADA16',20).then(function (result) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ addJewel: result}));
        });
    })
});


var  server = app.listen(3010,function () {
   console.log("应用实例启动");
});

