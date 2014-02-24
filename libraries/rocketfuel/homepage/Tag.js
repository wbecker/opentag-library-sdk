//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("rocketfuel.homepage.Tag", {
    config: {
      /*DATA*/
	id: 36160,
	name: "Home Page",
	async: true,
	description: "Place on the site's home page. Intended to fire once per session - requires custom implementation to enforce this.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/rocketfuel.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35185,
		name: "RocketFuel Merchant ID",
		description: "The ID assigned to you by RocketFuel",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 35186,
		name: "RocketFuel Campaign ID",
		description: "The campaign ID for the specific campaign this tag applies to.",
		token: "campaign_id",
		uv: ""
	},
	{
		id: 35187,
		name: "Random Number",
		description: "Random number for use as a cachebuster",
		token: "random",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

  var img = new Image();
  img.src = "//" + this.getValueForToken("campaign_id") + "p.rfihub.com/ca.gif?rb=" + this.getValueForToken("merchant_id") + "&ca=" + this.getValueForToken("campaign_id") + "&ra=" + this.getValueForToken("random") + ""


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
