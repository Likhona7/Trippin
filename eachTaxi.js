module.exports = function(taxiList){

var record = {};
taxiList.forEach(function(obj){

var regNo = obj.RegistrationNumber;
var earn =  obj.Fare * obj.Trips;
//console.log(regNo);
//console.log(regNo);
if(record[regNo] === undefined){
 record[regNo] = 0;
}


record[regNo] += earn;
});
console.log(record);
return record;
}
