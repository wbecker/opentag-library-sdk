//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("bizrate.bizratenonbuyersurvey.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "BizRate Non-Buyer Survey",
		async: true,
		description: "Survey presented to visitors as they browse the site.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "eval.bizrate.com/js/survey_${merchant_id}_1.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "BizRate Merchant ID",
			description: "The identifier that corresponds to the merchant.",
			token: "merchant_id",
			uv: ""
		}]
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