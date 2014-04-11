//:include tagsdk-current.js
var version = "";
var classPath = "rocketfuel.homepage" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Home Page",
		async: true,
		description: "Place on the site's home page. Intended to fire once per session - requires custom implementation to enforce this.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/rocketfuel.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "RocketFuel Merchant ID",
			description: "The ID assigned to you by RocketFuel",
			token: "merchant_id",
			uv: ""
		}, {
			name: "RocketFuel Campaign ID",
			description: "The campaign ID for the specific campaign this tag applies to.",
			token: "campaign_id",
			uv: ""
		}, {
			name: "Random Number",
			description: "Random number for use as a cachebuster",
			token: "random",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var img = new Image();
		img.src = "//" + this.valueForToken("campaign_id") +
			"p.rfihub.com/ca.gif?rb=" + this.valueForToken("merchant_id") + "&ca=" +
			this.valueForToken("campaign_id") + "&ra=" + this.valueForToken("random") +
			""

		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});