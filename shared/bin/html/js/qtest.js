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
 *    this.pass(true, "This test just passed.");
 *  }
 * ]);
 * 
 * ASuite.onFinished = function () {
 *    for(var x = 0; x < this.tests.length; x++) {
 *      if (this.test[x].passed) {
 *        console.log("Test " + this.test[x].name + " has passed.");
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
function Suite(tests, onfinished) {
  this.tests = [];

  this.log = function(msg) {
    try {
      console.log("Suite: " + msg);
    } catch (ex) {}
  };

  if (tests) {
    for (var q = 0; q < tests.length; q++) {
      this.tests.push(new Test(tests[q]));
    }
  }

  this._onFinished = function() {
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

  this.run = function() {
    this.log("Running tests...");
    for (var q = 0; q < this.tests.length; q++) {
      this.tests[q].run();
    }

    this.waitForResults();
  };

  this.raport = function() {
  };

  this.waitForResults = function() {
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
      setTimeout(function() {
        _this.waitForResults();
      }, 50);
    } else {
      this.log("tests are finished.");
      this._onFinished();
    }
  };
}

/**
 * Single test class
 * @param {type} test
 * @returns {Test}
 */
function Test(test) {
  this.test = test;
  
  this.log = function(msg) {
    try {
      console.log("Test["+ this.name + "] " + msg);
    } catch (ex) {}
  };
  
  /**
   * 
   * @returns {undefined}
   */
  this.run = function() {
    try {
      test.call(this);
    } catch (ex) {
      this.failed = new Date().valueOf();
      this.log("exception occured: " + ex);
      this.exception = ex;
    }
  };

  /**
   * 
   * @returns {Boolean}
   */
  this.finished = function() {
    if (this.passed !== undefined ||
            this.failed !== undefined) {
      return true;
    }
    return false;
  };

  /**
   * Fail
   * @param {type} condition
   * @param {type} message
   * @returns {undefined}
   */
  this.fail = function(condition, message) {
    this.pass(!condition, message);
  };

  /**
   * Pass
   * @param {type} condition
   * @param {type} message
   * @returns {pass}
   */
  this.pass = function(condition, message) {
    if (condition) {
      this.log("passed: " + message);
    } else {
      this.log("failed: " + message);
      this.failed = new Date().valueOf();
    }
    
    if (!this.failed && !this.passed) {
      this.log("Test failed !");
      this.passed = new Date().valueOf();
    }
  };
}