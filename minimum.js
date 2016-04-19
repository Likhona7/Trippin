module.exports = function(min1) {
  var min = 1000;
  min1.forEach(function(obj) {

    if (obj.Trips < min) {
        min =  obj.Trips;
      //  console.log(obj);
    }
    //console.log(min)

  });
  console.log(min)
  return min;
}
