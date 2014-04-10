/**ignore at merge**/
//:include tagsdk-current.js
//:include adform/adformbasic/v2r3/Tag.js

var tag = null;

/*
 * This is a simple tests suite, all that tests must do is to pass or fail.
 * Only one test will be run at the time, untill pass or fail method will 
 * be called - test will block runner to wait for test.
 */
var TestsSuite = new Suite({

  "it shall fail as true is never falsy...": function() {
    this.fail(true, "Failed.");
  },

  "it shall not fail as true is naturally true...": function() {
    this.pass(true, "Passed.");
  },

  "it shall again not fail as true is naturally true...": function() {
    this.pass(true, "Passed again.");
  },

  "it shall fail later, in two seconds": function() {
    var _this = this;
    setTimeout(function() {
      _this.fail(true, "failed after 2 seconds");
    }, 2000);
  }
});

TestsSuite.beforeEach = function(test) {
  tag = new adform.adformbasic.v2r3.Tag({
    name: "Specify a name here"
  });
};

TestsSuite.afterEach = function(test) {

};

qubit.opentag.Utils.namespace('adform.adformbasic.v2r3.local.TestsSuite', TestsSuite);