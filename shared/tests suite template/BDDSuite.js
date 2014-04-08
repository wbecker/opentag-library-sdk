/**ignore at merge**/
//:include tagsdk-current.js
//:include _TAGPATH_

/*
 * BDD tests are well known unit tests supporting API used by mocha and
 * other test runners. Please see more info about how to use them online.
 */
var suite = describe("when song has been paused", function() {

  var tag = null;

  beforeEach(function() {
    tag = new _TAG_({
      name: "Specify a name here"
    });
  });

  afterEach(function() {

  });

  it("shall fail as true is never falsy...", function() {
    expect(true).to.be(false);
  });

  it("it shall not fail as true is naturally true...", function() {
    expect(true).to.be(true);
  });

  it("it will throw an exception...", function() {
    throw "exception!";
  });
});

qubit.opentag.Utils.namespace('_PACKAGE_.local.BDDSuite', suite);
