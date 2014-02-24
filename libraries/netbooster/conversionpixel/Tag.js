//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("netbooster.conversionpixel.Tag", {
    config: {/*DATA*/
	id: 29668,
	name: "Conversion pixel",
	async: true,
	description: "",
	html: "\n",
	imageUrl: "http://www.netbooster.co.uk/images/netbooster-logo.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 28726,
		name: "Pixel ID",
		description: "",
		token: "pixel_id",
		uv: ""
	},
	{
		id: 28727,
		name: "Client ID",
		description: "",
		token: "client_id",
		uv: ""
	},
	{
		id: 28728,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 28729,
		name: "Partner ID",
		description: "",
		token: "partner_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

   img = new Image(); 
   img.src = "//conversion-pixel.invitemedia.com/pixel?pixelID=" + this.getValueForToken("pixel_id") + "&clientID=" + this.getValueForToken("client_id") + "&partnerID=" + this.getValueForToken("partner_id") + "&key=conv&orderID=" + this.getValueForToken("order_id") + "&returnType=js";


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
