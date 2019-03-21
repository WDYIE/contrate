request = require('request-json');
var client = request.newClient('http://127.0.0.1:3000');

var data = {count:20,addr:"hello beihang" ,token : "555"};
client.post('/setJewel', data, function(err, res, body) {
    console.log(res.statusCode,body);
});
