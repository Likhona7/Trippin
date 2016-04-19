module.exports = function(totaList, RegNum) {

var result = 0;

totaList.forEach(function(obj){
if (obj.RegistrationNumber == RegNum) {
result = result + obj.Trips * obj.Fare;

}
});
console.log(result);
return result;

}
