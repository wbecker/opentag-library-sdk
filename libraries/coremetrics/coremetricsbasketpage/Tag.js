//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("coremetrics.coremetricsbasketpage.Tag", {
    config: {/*DATA*/
	id: 35170,
	name: "CoreMetrics - Basket page",
	async: true,
	description: "The shop action 5 tag, to be placed on basket pages.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/coremetrics.gif",
	locationDetail: "",
	priv: false,
	url: "libs.coremetrics.com/eluminate.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 34235,
		name: "Client ID",
		description: "Unique 8-digit Coremetrics-assigned account code.",
		token: "client_id",
		uv: ""
	},
	{
		id: 34236,
		name: "Data collection method",
		description: "Boolean. true indicates Client Managed, false indicates Coremetrics Managed.",
		token: "data_collection_method",
		uv: ""
	},
	{
		id: 34237,
		name: "Data collection domain",
		description: "The target domain for Coremetrics data collection requests.",
		token: "data_collection_domain",
		uv: ""
	},
	{
		id: 34238,
		name: "Cookie Domain",
		description: "Should be set to the 2nd level site domain (“thesite.com”) of the domain.",
		token: "cookie_domain",
		uv: ""
	},
	{
		id: 34239,
		name: "Page ID",
		description: "Uniquely identifies the 256 given ‘page’ in Coremetrics. Can be any alphanumeric string.",
		token: "page_id",
		uv: ""
	},
	{
		id: 34240,
		name: "Category ID",
		description: "Category ID for the leaf 256 node to which this page belongs. Should match the id from a CDF file.",
		token: "category_id",
		uv: ""
	},
	{
		id: 34241,
		name: "Product Ids",
		description: "",
		token: "product_ids",
		uv: "universal_variable.basket.line_items[#].product.id"
	},
	{
		id: 34242,
		name: "Product Names",
		description: "",
		token: "product_names",
		uv: "universal_variable.basket.line_items[#].product.name"
	},
	{
		id: 34243,
		name: "Product Quantities",
		description: "",
		token: "product_quantities",
		uv: "universal_variable.basket.line_items[#].quantity"
	},
	{
		id: 34244,
		name: "Product Unit Sale Prices",
		description: "",
		token: "product_unit_sale_prices",
		uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
	},
	{
		id: 34397,
		name: "Product Category IDs",
		description: "A list of all the category ids the products belong to. Uses line_items[].product.category by default",
		token: "product_category_id_list",
		uv: "universal_variable.basket.line_items[#].product.category"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
(function() {

  var i = 0, ii = this.getValueForToken("product_ids").length;

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



  // Products
  for (; i < ii; i++) {
    window.cmCreateShopAction5Tag(
      this.getValueForToken("product_ids")[i],
      this.getValueForToken("product_names")[i],
      this.getValueForToken("product_quantities")[i],
      this.getValueForToken("product_unit_sale_prices")[i],
      this.getValueForToken("product_category_id_list")[i]
    );
  };

  window.cmDisplayShops();

}());
    }/*~POST*/
});
