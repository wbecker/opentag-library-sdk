/**ignore at merge**/
//:include tagsdk-current.js
//:include qtest.js

qubit.opentag.Utils.namespace('google.googleadwordsconversionasync.local');

var TestSuite = new Suite([
  function () {
    this.name = "Test number 1.";
    pass(true, "Passed.");
    fail(true, "Or not passed!");
  },
  function () {
    this.name = "Test number 2.";
    pass(true, "Passed!");
  }
]);