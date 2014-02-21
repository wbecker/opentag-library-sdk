//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("rocketfuel.UniversalTrackingPixel", {
    config: {/*DATA*/
	id: 36174,
	name: "Universal Tracking Pixel",
	async: true,
	description: "This tag is to fire on every page to provide general pageview tracking.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/rocketfuel.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35239,
		name: "RocketFuel Merchant ID",
		description: "The ID assigned to you by RocketFuel",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 35240,
		name: "RocketFuel Campaign ID",
		description: "The campaign ID for the specific campaign this tag applies to.",
		token: "campaign_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function ()
{
  var cachebust = (Math.random() + "").substr(2);
  var img = new Image();
  img.src ="//" + this.getValueForToken("campaign_id") + "p.rfihub.com/ca.gif?rb=" + this.getValueForToken("merchant_id") + "&ca=" + this.getValueForToken("campaign_id") + "&ra=" + cachebust;
})();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
