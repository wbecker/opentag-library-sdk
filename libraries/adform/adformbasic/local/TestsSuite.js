/**ignore at merge**/
//:include tagsdk-current.js
//:include adform/adformbasic/Tag.js

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
  }
});

TestsSuite.beforeEach = function(test) {
  tag = new adform.adformbasic.Tag({
    name: "Specify a name here"
  });
};

TestsSuite.afterEach = function(test) {

};

qubit.opentag.Utils.namespace('adform.adformbasic.local.TestsSuite', TestsSuite);
