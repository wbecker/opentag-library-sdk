//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("coremetrics.coremetricsgenericpages.Tag", {
    config: {/*DATA*/
	id: 35168,
	name: "CoreMetrics - Generic pages",
	async: true,
	description: "To be used on all pages that are not product, transactional, or conversion based.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/coremetrics.gif",
	locationDetail: "",
	priv: false,
	url: "libs.coremetrics.com/eluminate.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 34221,
		name: "Client ID",
		description: "Unique 8-digit Coremetrics-assigned account code.",
		token: "client_id",
		uv: ""
	},
	{
		id: 34222,
		name: "Data Collection Method",
		description: "Boolean. true indicates Client Managed, false indicates Coremetrics Managed.",
		token: "data_collection_method",
		uv: ""
	},
	{
		id: 34223,
		name: "Data Collection Domain",
		description: "The target domain for Coremetrics data collection requests.",
		token: "data_collection_domain",
		uv: ""
	},
	{
		id: 34224,
		name: "Cookie Domain",
		description: "Should be set to the 2nd level site domain (“thesite.com”) of the domain.",
		token: "cookie_domain",
		uv: ""
	},
	{
		id: 34225,
		name: "Page ID",
		description: "Uniquely identifies the 256 given ‘page’ in Coremetrics. Can be any alphanumeric string.",
		token: "page_id",
		uv: ""
	},
	{
		id: 34226,
		name: "Category ID",
		description: "Category ID for the leaf 256 node to which this page belongs. Should match the id from a CDF file.",
		token: "category_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
(function() {

  // Top level settings  
  window.cmSetClientID(
    "" + this.getValueForToken("client_id") + "",
    this.getValueForToken("data_collection_method"),
    "" + this.getValueForToken("data_collection_domain") + "",
    "" + this.getValueForToken("cookie_domain") + ""
  );

  // Track pageviews with whatever data we have
  window.cmCreatePageviewTag(
    "" + this.getValueForToken("page_id") + "",
    "" + this.getValueForToken("category_id") + ""
  );

}());
    }/*~POST*/
});
