//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagothersearchresultspage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Advertiser Tag - Other Search Results Page",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [

			]
			/*~DATA*/
      };
  },
		script: function() {
			/*SCRIPT*/
			(new Image()).src = "https://beacon.sojern.com/p/10";
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