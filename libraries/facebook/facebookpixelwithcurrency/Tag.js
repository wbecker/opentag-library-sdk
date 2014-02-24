//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("facebook.facebookpixelwithcurrency.Tag", {
    config: {
      /*DATA*/
	id: 37171,
	name: "Facebook Pixel with Currency",
	async: true,
	description: "",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/FacebookLogo.png",
	locationDetail: "",
	priv: false,
	url: "connect.facebook.net/${countrycode}/fp.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 36197,
		name: "Country Code",
		description: "",
		token: "countrycode",
		uv: ""
	},
	{
		id: 36198,
		name: "Pixel ID",
		description: "",
		token: "pixel_id",
		uv: ""
	},
	{
		id: 36199,
		name: "Order Total",
		description: "",
		token: "order_value",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 36200,
		name: "Order Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
var fb_param = {};
fb_param.pixel_id = '' + this.getValueForToken("pixel_id") + '';
fb_param.value = '' + this.getValueForToken("order_value") + '';
fb_param.currency = '' + this.getValueForToken("currency") + '';
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
