//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("intelliad.SEOTracking", {
    config: {/*DATA*/
	id: 39670,
	name: "SEO Tracking",
	async: true,
	description: "The intelliAd SEO tracking allows you to track organic Google traffic as well as other search engine traffic, direct traffic, type-in traffic and referrer traffic from backlinks.",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "t13.intelliad.de/cl/${client_id}.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 38702,
		name: "IntelliAd Client ID",
		description: "The identifier that relates you to IntelliAd",
		token: "client_id",
		uv: ""
	},
	{
		id: 38703,
		name: "Optional Campaign / Main Category Name",
		description: "You have the option to categorise your SEO traffic / web pages into main categories.",
		token: "campaign_id",
		uv: ""
	},
	{
		id: 38704,
		name: "Optional AdGroup / Sub Category Name",
		description: "You have the option to categorise your SEO traffic / web pages into sub categories",
		token: "ad_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var ia_tc = "" + this.getValueForToken("campaign_id") + "";
var ia_sc = "" + this.getValueForToken("ad_id") + "";
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
