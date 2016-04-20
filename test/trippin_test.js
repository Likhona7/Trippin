var trippin = require("../trippin");
var minimum = require("../minimum");
var recordsFinder = require("../recordsFinder");
var tripsMade4 = require("../tripsMade4");
var RouteFinder = require("../RouteFinder");
var totalearnings = require("../totalearnings");
var eachTaxi = require("../eachTaxi");
var assert = require("assert");

var durbanTaxis = [{
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 18
}, {
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 15
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 20
}];
var capeTownTaxis = [{
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Bellville",
  "Fare": 13,
  "Trips": 9
}, {
  "RegistrationNumber": "CA 234 567",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Langa",
  "Fare": 8,
  "Trips": 13
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Cape Town",
  "Fare": 13,
  "Trips": 10
}];
describe('test for trippin capeTownTaxis function', function() {

  it('should give every total of Cape Town trippin taxi', function() {
    var result = trippin(capeTownTaxis);
    assert.equal(result, 54);
  });

  it('should Find the minimum of one CapeTownTaxis attribute in a list of objects', function() {
    var result = minimum(capeTownTaxis);
    assert.equal(result, 9);

  })
  it('should Find all the objects matching a specific condition', function() {
    var taxiObj = [{
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Bellville",
      "Fare": 13,
      "Trips": 9
    }, {
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Gugulethu",
      "Fare": 12,
      "Trips": 11
    }];
    var result = recordsFinder(taxiObj, "CA 123 456");
    assert.deepEqual(result, taxiObj);

  });
  it('should Find the total of one attribute for objects in a list matching a condition CA 234 567 ', function() {
    var result = tripsMade4(capeTownTaxis, "CA 234 567");
    assert.deepEqual(result, 11);

  })
  it('should Find all the values of one attribute of objects matching a condition ', function() {
    var vee = ["Cape Town - Langa", "Cape Town - Cape Town"];
    var result = RouteFinder(capeTownTaxis, "CA 345 678");
    assert.deepEqual(result, vee);

  })
  it("should perform a calculation on capeTownTaxis attributes of objects matching a condition CA 234 567 ", function() {
    var result = totalearnings(capeTownTaxis, "CA 234 567");
    assert.deepEqual(result, 132);

  })
  it("Perform a calculation on attributes of capeTownTaxis grouped of objects", function() {
    var revenues = {
      "CA 123 456": 249,
      "CA 234 567": 132,
      "CA 345 678": 234
    };
    var result = eachTaxi(capeTownTaxis);
    assert.deepEqual(result, revenues);

  });
});

describe('test for trippin durbanTaxis function', function() {

  it('should give every total of Durban trippin taxi', function() {
    var result = trippin(durbanTaxis);
    assert.equal(result, 117);
  })

  it('should Find the minimum of one DurbanTaxis attribute in a list of objects', function() {
    var result = minimum(durbanTaxis);
    assert.equal(result, 9);
  })

  it('should Find all the objects matching a specific condition', function() {
    var taxiObj = [{
      "RegistrationNumber": "ND 123 456",
      "Route": "Durban - University of KZN",
      "Fare": 7,
      "Trips": 14
    }, {
      "RegistrationNumber": "ND 123 456",
      "Route": "Durban - Umbilo",
      "Fare": 8,
      "Trips": 15
    }];
    var result = recordsFinder(taxiObj, "ND 123 456");
  });
  it('should Find the total of one attribute for objects in a list matching a condition CA 234 567 ', function() {
    var result = tripsMade4(durbanTaxis, "ND 234 567");
    assert.deepEqual(result, 36);
  })
  it('should Find all the values of one attribute of objects matching a condition ', function() {
    var vee = ["Durban - Umbilo", "Durban - University of KZN", "Durban - Umlazi Station"];
    var result = RouteFinder(durbanTaxis, "ND 345 678");
    assert.deepEqual(result, vee);
  })
  it("should perform a calculation on durbanTaxis attributes of objects matching a condition ND 234 567", function() {
    var result = totalearnings(durbanTaxis, "ND 234 567");
    assert.deepEqual(result, 387);
  })
  it("Perform a calculation on attributes of durbanTaxis grouped of objects", function() {
    var revenues = {
      "ND 123 456": 218,
      "ND 234 567": 387,
      "ND 345 678": 518
    };
    var result = eachTaxi(durbanTaxis);
    assert.deepEqual(result, revenues);

  });


});
