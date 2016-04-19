module.exports = function(taxiList, RegNum){

var result = 0;

taxiList.forEach(function(obj){
if (obj.RegistrationNumber == RegNum) {
result = result + obj.Trips * obj.Fare;

}
});
console.log(result);
return result;




}
