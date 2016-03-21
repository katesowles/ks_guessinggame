var assert = require('assert');
var app = require('../js/app.js');
var compute = require('../js/compute.js');

describe('my first test', function() {
  it('should check first question', function() {
    assert.deepEqual(compute.getQuestion(0), "first");
  });
  it('should check third question', function() {
    assert.deepEqual(compute.getQuestion(2), "third");
  });

  it('Should increment 0 to get 5',         function() { assert(compute.addFive(    0),     5); });
  it('Should increment 4 to get 9',         function() { assert(compute.addFive(    4),     9); });
  it('Should increment -1008 to get -1003', function() { assert(compute.addFive(-1008), -1003); });

  // test the "is even" function
  it('Checking to see if 2 is even',         function() { assert(true == compute.isEven(2)); });
  it('Checking to see if 5 is even',         function() { assert(true != compute.isEven(5)); });

  //test the "multiple of three" function
  it('Checking to see if 20 is a multiple of three',     function() { assert(true != compute.multThree(20)); });
  it('Checking to see if 15 is a multiple of three',     function() { assert(true == compute.multThree(15)); });

  //test the "multiple of six" function
  it('Checking to see if 18 is a multiple of six',     function() { assert(true == compute.multSix(18)); });
  it('Checking to see if 14 is a multiple of six',     function() { assert(true != compute.multSix(14)); });


});
