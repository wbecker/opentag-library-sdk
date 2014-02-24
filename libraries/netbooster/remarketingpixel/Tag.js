//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("netbooster.remarketingpixel.Tag", {
    config: {
      /*DATA*/
	id: 24674,
	name: "Re-Marketing Pixel",
	async: true,
	description: "",
	html: "",
	imageUrl: "http://www.netbooster.co.uk/images/netbooster-logo.png",
	locationDetail: "",
	priv: false,
	url: "segment-pixel.invitemedia.com/pixel?pixelID=${pixel_id}&partnerID=${partner_id}&clientID=${client_id}&key=segment&returnType=js",
	usesDocWrite: false,
	parameters: [
	{
		id: 24225,
		name: "Pixel ID",
		description: "",
		token: "pixel_id",
		uv: ""
	},
	{
		id: 24226,
		name: "Partner ID",
		description: "",
		token: "partner_id",
		uv: ""
	},
	{
		id: 24227,
		name: "Client ID",
		description: "",
		token: "client_id",
		uv: ""
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
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
