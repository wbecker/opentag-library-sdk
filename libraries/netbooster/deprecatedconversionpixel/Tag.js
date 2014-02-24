//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("netbooster.deprecatedconversionpixel.Tag", {
    config: {/*DATA*/
	id: 24673,
	name: "[DEPRECATED] Conversion Pixel",
	async: true,
	description: "",
	html: "",
	imageUrl: "http://www.netbooster.co.uk/images/netbooster-logo.png",
	locationDetail: "",
	priv: false,
	url: "conversion-pixel.invitemedia.com/pixel?pixelID=${pixel_id}&partnerID=${partner_id}&clientID=${client_id}&key=conv&returnType=js",
	usesDocWrite: false,
	parameters: [
	{
		id: 24221,
		name: "Pixel ID",
		description: "",
		token: "pixel_id",
		uv: ""
	},
	{
		id: 24223,
		name: "Partner ID",
		description: "",
		token: "partner_id",
		uv: ""
	},
	{
		id: 24224,
		name: "Client ID",
		description: "",
		token: "client_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
