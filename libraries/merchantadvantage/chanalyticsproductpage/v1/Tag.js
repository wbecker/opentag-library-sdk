//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"merchantadvantage.chanalyticsproductpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Chanalytics - Product Page",
			async: true,
			description: "To be placed on all product pages for MerchantAdvantage's Chanalytics tracking.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "http://chanalytics.merchantadvantage.com/inchannel/maq.js",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [

			]
			/*~DATA*/
		};
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