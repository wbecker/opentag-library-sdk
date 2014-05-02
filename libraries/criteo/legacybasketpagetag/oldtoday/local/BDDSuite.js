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
    tag.setParameterByTokenName("wi", "value a");
    tag.setParameterByTokenName("call_parameter", "value b");
    tag.setParameterByTokenName("product_ids", "value c");
    tag.setParameterByTokenName("product_unit_prices", "value d");
    tag.setParameterByTokenName("quantities", "value e");

    tag.run();
    expect(tag.scriptExecuted > 0).to.be(true);
  });

});

qubit.opentag.Utils.namespace('criteo.legacybasketpagetag.local.BDDSuite', suite);
