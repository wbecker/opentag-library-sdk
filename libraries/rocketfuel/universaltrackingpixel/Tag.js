//:include tagsdk-current.js
var version = "";
var classPath = "rocketfuel.universaltrackingpixel" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Universal Tracking Pixel",
		async: true,
		description: "This tag is to fire on every page to provide general pageview tracking.",
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
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			var cachebust = (Math.random() + "").substr(2);
			var img = new Image();
			img.src = "//" + this.valueForToken("campaign_id") +
				"p.rfihub.com/ca.gif?rb=" + this.valueForToken("merchant_id") + "&ca=" +
				this.valueForToken("campaign_id") + "&ra=" + cachebust;
		})();
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