//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("coremetrics.coremetricssearchpages.Tag", {
    config: {
      /*DATA*/
	id: 35167,
	name: "CoreMetrics - Search Pages",
	async: true,
	description: "To be used on search pages.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/coremetrics.gif",
	locationDetail: "",
	priv: false,
	url: "libs.coremetrics.com/eluminate.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 34213,
		name: "Client ID",
		description: "Unique 8-digit Coremetrics-assigned account code.",
		token: "client_id",
		uv: ""
	},
	{
		id: 34214,
		name: "Data collection method",
		description: "Boolean. true indicates Client Managed, false indicates Coremetrics Managed.",
		token: "data_collection_method",
		uv: ""
	},
	{
		id: 34215,
		name: "Data collection domain",
		description: "The target domain for Coremetrics data collection requests.",
		token: "data_collection_domain",
		uv: ""
	},
	{
		id: 34216,
		name: "Cookie Domain",
		description: "Should be set to the 2nd level site domain (“thesite.com”) of the domain.",
		token: "cookie_domain",
		uv: ""
	},
	{
		id: 34217,
		name: "Page ID",
		description: "Uniquely identifies the 256 given ‘page’ in Coremetrics. Can be any alphanumeric string.",
		token: "page_id",
		uv: ""
	},
	{
		id: 34218,
		name: "Category ID",
		description: "Category ID for the leaf 256 node to which this page belongs. Should match the id from a CDF file.",
		token: "category_id",
		uv: ""
	},
	{
		id: 34219,
		name: "Search query",
		description: "The search query. Set as blank if not a search page.",
		token: "search_query",
		uv: "universal_variable.listing.query"
	},
	{
		id: 34220,
		name: "Number of Search Results",
		description: "Number of search results (new parameter, set as blank if not available)",
		token: "number_results",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
(function() {

  // Client Setup
  window.cmSetClientID(
    "" + this.getValueForToken("client_id") + "",
    this.getValueForToken("data_collection_method"),
    "" + this.getValueForToken("data_collection_domain") + "",
    "" + this.getValueForToken("cookie_domain") + ""
  );

  // Page View
  window.cmCreatePageviewTag(
    "" + this.getValueForToken("page_id") + "",
    "" + this.getValueForToken("category_id") + "",
    "" + this.getValueForToken("search_query") + "",
    "" + this.getValueForToken("number_results") + ""
  );


}());
      /*~POST*/
    }
});
