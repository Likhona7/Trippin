module.exports = function(totalList){

var total = 0;

totalList.forEach(function(hub){

   total += hub.Trips;

});
  return total;
}
