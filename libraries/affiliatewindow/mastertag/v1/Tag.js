//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("affiliatewindow.mastertag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Master Tag",
		async: true,
		description: "The Affiliate Window Master Tag should run on all pages.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AffiliateWindow.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "www.dwin1.com/${MERCHANT_ID}.js",
		usesDocWrite: true,
		parameters: [{
			name: "Affiliate Window Merchant ID",
			description: "Affiliate Window Merchant ID",
			token: "MERCHANT_ID",
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