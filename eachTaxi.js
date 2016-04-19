module.exports = function(taxiList, RegNum){

var record = []
var result = 0;
taxiList.forEach(function(obj){
if (obj.RegistrationNumber == RegNum) {
  //console.log(obj.RegistrationNumber);
  record.push(obj.RegistrationNumber)
 result = result + obj.Trips * obj.Fare;

}
});
console.log(record);
return record;




}
// var record = [];
//
// seven.forEach(function(obj){
// if (obj.RegistrationNumber == taxiList) {
// record.push(obj.Route)
//
// }
// });
// console.log(record);
// return record;
//
// }
