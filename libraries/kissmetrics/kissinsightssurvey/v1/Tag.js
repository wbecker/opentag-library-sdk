//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("kissmetrics.kissinsightssurvey.v1.Tag", {
	config: {
		/*DATA*/
		name: "KissInsights Survey",
		async: true,
		description: "KISSInsights customer survey slider",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "s3.amazonaws.com/ki.js/${account_id}/${website_id}.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account Id",
			description: "The account id of your KISS subscription - the first number in the URL",
			token: "account_id",
			uv: ""
		}, {
			name: "Website Id",
			description: "The id of the particular website - the last part of the URL before ''.js",
			token: "website_id",
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
		window._kiq = window._kiq || [];

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});