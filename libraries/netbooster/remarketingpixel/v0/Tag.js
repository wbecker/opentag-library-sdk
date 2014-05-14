//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("netbooster.remarketingpixel.v0.Tag", {
	config: {
		/*DATA*/
		name: "Re-Marketing Pixel",
		async: true,
		description: "",
		html: "",
		imageUrl: "http://www.netbooster.co.uk/images/netbooster-logo.png",
		locationDetail: "",
		isPrivate: false,
		url: "segment-pixel.invitemedia.com/pixel?pixelID=${pixel_id}&partnerID=${partner_id}&clientID=${client_id}&key=segment&returnType=js",
		usesDocWrite: false,
		parameters: [{
			name: "Pixel ID",
			description: "",
			token: "pixel_id",
			uv: ""
		}, {
			name: "Partner ID",
			description: "",
			token: "partner_id",
			uv: ""
		}, {
			name: "Client ID",
			description: "",
			token: "client_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
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
