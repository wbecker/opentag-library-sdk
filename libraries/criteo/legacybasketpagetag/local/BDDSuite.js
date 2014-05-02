/**ignore at merge**/
//:include tagsdk-current.js
//:include criteo/legacybasketpagetag/Tag.js

/*
 * BDD tests are well known unit tests supporting API used by mocha and
 * other test runners. Please see more info about how to use them online.
 */
var suite = describe("when song has been paused", function() {

  var tag = null;

  beforeEach(function() {
    tag = new criteo.legacybasketpagetag.Tag({
      name: "Specify a name here"
    });
  });

  afterEach(function() {

  });

  it("tag should execute as all parameters are set.", function () {
    tag.getParameterByTokenName("wi").variable = {value: "value a"};
    tag.getParameterByTokenName("call_parameter").variable = {value: "value b"};
    tag.getParameterByTokenName("product_ids").variable = {value: "value c"};
    tag.getParameterByTokenName("product_unit_prices").variable = {value: "value d"};
    //tag.setParameterByTokenName("product_unit_prices", "value d");
    tag.getParameterByTokenName("quantities").variable = {value: "value e"};

    tag.run();

    expect(tag.scriptExecuted > 0).to.be(true);
  });

});

qubit.opentag.Utils.namespace('criteo.legacybasketpagetag.local.BDDSuite', suite);