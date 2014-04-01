/**ignore at merge**/
//:include tagsdk-current.js
//:include qtest.js

var TestsSuite = new Suite({
    "Test number 1." : function () {
      this.pass(true, "Passed.");
    },
    "Test number 2." : function () {
      this.pass(true, "Passed!");
    },
    "Test number 3." : function () {
      this.fail(false, "NOT Failed!");
    }
});

TestsSuite.before = function () {
  //something before
};

TestsSuite.after = function () {
  //something after
};

qubit.opentag.Utils.namespace('google.googleadwordsconversionsynchronousdeprecated.local.TestsSuite', TestsSuite);
