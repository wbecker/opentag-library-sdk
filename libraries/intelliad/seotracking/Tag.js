//:include tagsdk-current.js
var tagVersion = "";
var classPath = "intelliad.seotracking" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "SEO Tracking",
		async: true,
		description: "The intelliAd SEO tracking allows you to track organic Google traffic as well as other search engine traffic, direct traffic, type-in traffic and referrer traffic from backlinks.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "t13.intelliad.de/cl/${client_id}.js",
		usesDocWrite: false,
		parameters: [{
			name: "IntelliAd Client ID",
			description: "The identifier that relates you to IntelliAd",
			token: "client_id",
			uv: ""
		}, {
			name: "Optional Campaign / Main Category Name",
			description: "You have the option to categorise your SEO traffic / web pages into main categories.",
			token: "campaign_id",
			uv: ""
		}, {
			name: "Optional AdGroup / Sub Category Name",
			description: "You have the option to categorise your SEO traffic / web pages into sub categories",
			token: "ad_id",
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
		window.ia_tc = "" + this.valueForToken("campaign_id");
		window.ia_sc = "" + this.valueForToken("ad_id");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});