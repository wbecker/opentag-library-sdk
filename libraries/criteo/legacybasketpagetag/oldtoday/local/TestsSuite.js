/**ignore at merge**/
//:include tagsdk-current.js
//:include criteo/legacybasketpagetag/Tag.js

// var tag = null;

// /*
//  * This is a simple tests suite, all that tests must do is to pass or fail.
//  * Only one test will be run at the time, untill pass or fail method will 
//  * be called - test will block runner to wait for test.
//  */
// var TestsSuite = new Suite({

//   "it should run as all parameters are set.": function () {
//     tag.getParameterByTokenName("wi").variable = {value: "value a"};
//     tag.getParameterByTokenName("call_parameter").variable = {value: "value b"};
//     tag.getParameterByTokenName("product_ids").variable = {value: "value c"};
//     tag.getParameterByTokenName("product_unit_prices").variable = {value: "value d"};
//     tag.getParameterByTokenName("quantities").variable = {value: "value e"};
//     tag.run();
//     this.pass(tag.scriptExecuted > 0, "Script is run.");
//   },

//   "it shall fail later, in two seconds": function () {
//     tag.getParameterByTokenName("wi").variable = {value: "value a"};
//     tag.getParameterByTokenName("call_parameter").variable = {value: "value b"};
//     tag.getParameterByTokenName("product_ids").variable = {value: "value c"};
//     tag.getParameterByTokenName("product_unit_prices").variable = {value: "value d"};
//     tag.run();

//     var _this = this;
//     setTimeout(function () {
//       _this.fail(tag.scriptExecuted < 0, "must be un-run after timeout as one value is missing.");
//     }, tag.config.timeout + 1000);
//   }
// });

// TestsSuite.beforeEach = function(test) {
//   tag = new criteo.legacybasketpagetag.Tag({
//     name: "Test"
//   });
//   tag.unergister();
  
// };

// TestsSuite.afterEach = function(test) {

// };

//qubit.opentag.Utils.namespace('criteo.legacybasketpagetag.local.TestsSuite', TestsSuite);