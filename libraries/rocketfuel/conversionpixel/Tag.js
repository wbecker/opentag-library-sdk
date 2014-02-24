//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("rocketfuel.conversionpixel.Tag", {
    config: {/*DATA*/
	id: 36162,
	name: "Conversion Pixel",
	async: true,
	description: "To be placed on confirmation page.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/rocketfuel.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35192,
		name: "RocketFuel Merchant ID",
		description: "The ID assigned to you by RocketFuel",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 35193,
		name: "RocketFuel Campaign ID",
		description: "The ID specific to the campaign this tag is intended for",
		token: "campaign_id",
		uv: ""
	},
	{
		id: 35194,
		name: "Random Number",
		description: "A random number for use as a cachebuster",
		token: "random",
		uv: ""
	},
	{
		id: 35195,
		name: "Order Total",
		description: "The value paid by the customer for this order",
		token: "order_total",
		uv: "universal_variable.transaction.subtotal"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

  var img = new Image();
  img.src = "//" + this.getValueForToken("campaign_id") + "p.rfihub.com/ca.gif?rb=" + this.getValueForToken("merchant_id") + "&ca=" + this.getValueForToken("campaign_id") + "&ra=" + this.getValueForToken("random") + "&basket=" + this.getValueForToken("order_total") + "";


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
