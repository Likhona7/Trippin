module.exports = function(totalList){

var total = 0;

totalList.forEach(function(hub){

   total += hub.Trips;

});
console.log(total);
  return total;
}
