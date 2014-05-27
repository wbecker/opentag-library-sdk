//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("rocketfuel.conversionpixel.v1.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Pixel",
		async: true,
		description: "To be placed on confirmation page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/rocketfuel.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "RocketFuel Merchant ID",
			description: "The ID assigned to you by RocketFuel",
			token: "merchant_id",
			uv: ""
		}, {
			name: "RocketFuel Campaign ID",
			description: "The ID specific to the campaign this tag is intended for",
			token: "campaign_id",
			uv: ""
		}, {
			name: "Random Number",
			description: "A random number for use as a cachebuster",
			token: "random",
			uv: ""
		}, {
			name: "Order Total",
			description: "The value paid by the customer for this order",
			token: "order_total",
			uv: "universal_variable.transaction.subtotal"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var img = new Image();
		img.src = "//" +
			this.valueForToken("campaign_id") + "p.rfihub.com/ca.gif?rb=" +
			this.valueForToken("merchant_id") + "&ca=" +
			this.valueForToken("campaign_id") + "&ra=" +
			this.valueForToken("random") + "&basket=" +
			this.valueForToken("order_total");

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