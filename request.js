request = require('request-json');
var client = request.newClient('http://127.0.0.1:3000');

const  userAddr = '0xf7aa24e730bF9b980876b7CA734DB90aDAD70c6d'
var data = {count:20,addr:userAddr ,token : "555"};
client.post('/charge', data, function(err, res, body) {
    console.log(res.statusCode,body);
});



