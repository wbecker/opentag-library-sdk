//:include tagsdk-current.js
var version = "";
var classPath = "adform.adformbasic" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "AdForm - Basic",
		async: true,
		description: "Updated value ! :) To be placed on any page except order confirmation pages.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adform.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "xxxxxx",
			description: "xxxxxx",
			token: "xxxxxx",
			uv: "universal_variable.user.username"
		}, {
			name: "Adform Campaign ID",
			description: "The unique client ID for the AdForm tracking script",
			token: "campaignid",
			uv: ""
		}, {
			name: "AdForm Point ID",
			description: "Point ID for the tag. Usually unique to page type.",
			token: "pointid",
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
		(function() {

			window._adftrack = {
				pm: this.valueForToken("campaignid"),
				id: this.valueForToken("pointid")
			};

		})();

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});