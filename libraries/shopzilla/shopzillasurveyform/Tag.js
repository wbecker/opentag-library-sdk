//:include tagsdk-current.js
var version = "";
var classPath = "shopzilla.shopzillasurveyform" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Shopzilla Survey Form",
		async: true,
		description: "The buyer survey comes in two parts – the point of sale survey, which collects feedback from customers that buy from your store, and the fulfilment survey, which follows up after goods have been delivered.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/shopzilla.png",
		locationDetail: "",
		isPrivate: false,
		url: "evaleu.shopzilla.com/js/pos_${account}.js",
		usesDocWrite: true,
		parameters: [{
			name: "Account Number",
			description: "The number at the end of Shopzilla script. e.g. 0000 in evaleu.shopzilla.com/js/pos_0000.js",
			token: "account",
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