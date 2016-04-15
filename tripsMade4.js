// module.exports = function(totalist)

module.exports = function(tripsList, RegNum){


var result = 0;

tripsList.forEach(function(obj){
if (obj.RegistrationNumber == RegNum) {
result = result + obj.Trips;

}
});
console.log(result);
return result;

}
