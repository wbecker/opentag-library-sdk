//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("coremetrics.coremetricsproductpages.Tag", {
	config: {
		/*DATA*/
		name: "CoreMetrics - Product pages",
		async: true,
		description: "To be used on product pages.",
		html: "",
		imageUrl: "libs.coremetrics.com/eluminate.js",
		locationDetail: "",
		priv: false,
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
			name: "Data collection method",
			description: "Boolean. true indicates Client Managed, false indicates Coremetrics Managed.",
			token: "data_collection_method",
			uv: ""
		},
		{
			name: "Data collection domain",
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
		},
		{
			name: "Product ID",
			description: "",
			token: "product_id",
			uv: "universal_variable.product.id"
		},
		{
			name: "Product Name",
			description: "",
			token: "product_name",
			uv: "universal_variable.product.name"
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
    "" + this.getValueForToken("category_id") + ""
  );

  // Product View
  window.cmCreateProductviewTag(
    "" + this.getValueForToken("product_id") + "",
    "" + this.getValueForToken("product_name") + "",
    "" + this.getValueForToken("category_id") + ""
  );

}());
		/*~POST*/
	}
});
