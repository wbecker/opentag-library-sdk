//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("coremetrics.coremetricsgenericpages.Tag", {
	config: {
		/*DATA*/
		name: "CoreMetrics - Generic pages",
		async: true,
		description: "To be used on all pages that are not product, transactional, or conversion based.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/coremetrics.gif",
		locationDetail: "",
		isPrivate: false,
		url: "libs.coremetrics.com/eluminate.js",
		usesDocWrite: true,
		parameters: [
		{
			name: "Client ID",
			description: "Unique 8-digit Coremetrics-assigned account code.",
			token: "client_id",
			uv: ""
		},
		{
			name: "Data Collection Method",
			description: "Boolean. true indicates Client Managed, false indicates Coremetrics Managed.",
			token: "data_collection_method",
			uv: ""
		},
		{
			name: "Data Collection Domain",
			description: "The target domain for Coremetrics data collection requests.",
			token: "data_collection_domain",
			uv: ""
		},
		{
			name: "Cookie Domain",
			description: "Should be set to the 2nd level site domain (“thesite.com”) of the domain.",
			token: "cookie_domain",
			uv: ""
		},
		{
			name: "Page ID",
			description: "Uniquely identifies the 256 given ‘page’ in Coremetrics. Can be any alphanumeric string.",
			token: "page_id",
			uv: ""
		},
		{
			name: "Category ID",
			description: "Category ID for the leaf 256 node to which this page belongs. Should match the id from a CDF file.",
			token: "category_id",
			uv: ""
		}
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
(function() {

  // Top level settings  
  window.cmSetClientID(
    "" + this.valueForToken("client_id") + "",
    this.valueForToken("data_collection_method"),
    "" + this.valueForToken("data_collection_domain") + "",
    "" + this.valueForToken("cookie_domain") + ""
  );

  // Track pageviews with whatever data we have
  window.cmCreatePageviewTag(
    "" + this.valueForToken("page_id") + "",
    "" + this.valueForToken("category_id") + ""
  );

}());
		/*~POST*/
	}
});
