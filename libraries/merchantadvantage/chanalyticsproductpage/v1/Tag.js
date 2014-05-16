//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"merchantadvantage.chanalyticsproductpage.v1.Tag", {
		config: {
			/*DATA*/
			name: "Chanalytics - Product Page",
			async: true,
			description: "To be placed on all product pages for MerchantAdvantage's Chanalytics tracking.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/merchantadvantage.gif",
			locationDetail: "",
			isPrivate: false,
			url: "http://chanalytics.merchantadvantage.com/inchannel/maq.js",
			usesDocWrite: true,
			parameters: [

			]
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