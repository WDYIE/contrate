var Contract = require('./test1.js');
var myContract = new Contract();
async  function handlAsync(){
    await myContract.addJewel('0xcC936528d4d57f22Fd33493c7D1E89aBc09ADA16',20).then(function (result) {
        console.log(result);
    });
   await myContract.getJewel('0xcC936528d4d57f22Fd33493c7D1E89aBc09ADA16').then(function (result) {
       console.log(result);
   },function (error) {
       console.log(error);
   });
}
handlAsync();

