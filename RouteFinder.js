module.exports = function(seven, taxiRou){


var record = [];

seven.forEach(function(obj){
if (obj.RegistrationNumber == taxiRou) {
record.push(obj.Route)

}
});
console.log(record);
return record;

}
