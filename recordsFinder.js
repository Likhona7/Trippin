module.exports = function(taxiObj, recordsFinder){


var record = [];

taxiObj.forEach(function(obj){
if (obj.RegistrationNumber == recordsFinder) {
record.push(obj)

}
});
console.log(record);
return record;

}
