/*
 * 
 * Good tests framework. It does simple: passes or fails with asynchronous support.
 * Make your suite, add tests, run it.
 * 
 * Scenariono, create file that will contain your Suite object and test, for example:
 * 
 * var ASuite = new Suite([
 *  function () {
 *    this.name = "I am a very nice test";
 *    //and write your execution code
 *    pass(true, "This test just passed.");
 *  }
 * ]);
 * 
 * ASuite.onFinished = function () {
 *    for(var x = 0; x < this.tests.length; x++) {
 *      if (this.test[x].passed) {
 *        console.log("Test " + this.test[x].name + " has passed");
 *      }
 *    }
 * };
 * 
 * to run tests, simply:
 * 
 * ASuite.run();
 * 
 * 
 * 
 * @author peter fronc <peter.fronc@qubitdigital.com>
 */

/**
 * Test Suite class
 * @param {type} tests
 * @param {type} onfinished
 * @returns {Suite}
 */
function Suite (tests, onfinished) {
  this.tests = tests;
  
  this._onFinished = function () {
    try {
      if (this.onFinished) {
        this.onFinished();
      }
    } finally {
      if (onfinished) {
        onfinished(this);
      }
    }
  };
  
  this.run = function () {
    for (var q = 0; q < this.tests.length; q++) {
      var test = this.tests[q];
      new Test(test).run();
    }
    
    this.waitForResults();
  };
  
  this.raport = function () {};
  
  this.waitForResults = function () {
    this.finishedTests = [];
    this.unfinishedTests = [];
    var notDone = false;
    
    for (var i = 0; i < this.tests.length; i++) {
      if (!this.tests[i].finished()) {
        notDone = true;
        this.finishedTests.push(this.tests[i]);
      } else {
        this.unfinishedTests.push(this.tests[i]);
      }
    }
    
    if (notDone) {
      var _this = this;
      setTimeout(function () {_this.waitForResults();}, 50);
    } else {
      this._onFinished();
    }
  };
}

/**
 * Fail
 * @param {type} condition
 * @param {type} message
 * @returns {undefined}
 */
function fail(condition, message) {
  pass(!condition, message);
}

/**
 * Pass
 * @param {type} condition
 * @param {type} message
 * @returns {pass}
 */
function pass(condition, message) {
  if (condition) {
    this.passMessage = message;
    this.passed = new Date().valueOf();
  } else {
    this.failMessage = message;
    this.failed = new Date().valueOf();
  }
}

/**
 * Single test class
 * @param {type} test
 * @returns {Test}
 */
function Test(test) {
  this.test = test;
  this.run = function () {
    try {
      test.call(this);
    } catch (ex) {
      this.exception = ex;
    }
  };
  
  this.finished = function () {
    if (this.hasOwnProperty('passMessage') ||
        this.hasOwnProperty('failMessage')){
      return true;
    }
    return false;
  };
}