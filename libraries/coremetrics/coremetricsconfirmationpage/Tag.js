//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("coremetrics.coremetricsconfirmationpage.Tag", {
	config: {
		/*DATA*/
		name: "CoreMetrics - Confirmation page",
		async: true,
		description: "To be placed on the confirmation page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/coremetrics.gif",
		locationDetail: "",
		priv: false,
		url: "libs.coremetrics.com/eluminate.js",
		usesDocWrite: false,
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
			name: "Product Ids",
			description: "",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "Product Names",
			description: "",
			token: "product_names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		},
		{
			name: "Product Quantities",
			description: "",
			token: "product_quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		},
		{
			name: "Product Unit Sale Prices",
			description: "",
			token: "product_unit_sale_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "Registration ID",
			description: "The unique id of the user making the transaction.",
			token: "registration_id",
			uv: "universal_variable.user.user_id"
		},
		{
			name: "City",
			description: "",
			token: "city",
			uv: "universal_variable.transaction.billing.city"
		},
		{
			name: "State",
			description: "",
			token: "state",
			uv: "universal_variable.transaction.billing.state"
		},
		{
			name: "Postcode",
			description: "",
			token: "post_code",
			uv: "universal_variable.transaction.billing.postcode"
		},
		{
			name: "User Email",
			description: "",
			token: "email",
			uv: "universal_variable.user.email"
		},
		{
			name: "Country",
			description: "",
			token: "country",
			uv: "universal_variable.transaction.billing.country"
		},
		{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Order Subtotal",
			description: "",
			token: "order_subtotal",
			uv: "universal_variable.transaction.subtotal"
		},
		{
			name: "Shipping cost",
			description: "",
			token: "shipping_cost",
			uv: "universal_variable.transaction.shipping_cost"
		},
		{
			name: "Product Category ID List",
			description: "List of all the product categories.",
			token: "product_category_id_list",
			uv: "universal_variable.transaction.line_items[#].product.category"
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

  var i = 0, ii = this.getValueForToken("product_ids").length;

  // Client Setup
  window.cmSetClientID(
    "" + this.getValueForToken("client_id") + "",
    this.getValueForToken("data_collection_method"),
    "" + this.getValueForToken("data_collection_domain") + "",
    "" + this.getValueForToken("cookie_domain") + ""
  );

  // Pageview
  window.cmCreatePageviewTag(
    "" + this.getValueForToken("page_id") + "",
    "" + this.getValueForToken("category_id") + ""
  );



  // Track each product purchased
  for (; i < ii; i++) {
    window.cmCreateShopAction9Tag(
      this.getValueForToken("product_ids")[i],
      this.getValueForToken("product_names")[i],
      this.getValueForToken("product_quantities")[i],
      this.getValueForToken("product_unit_sale_prices")[i],
      "" + this.getValueForToken("registration_id") + "",
      "" + this.getValueForToken("order_id") + "",
      "" + this.getValueForToken("order_subtotal") + "",
      this.getValueForToken("product_category_id_list")[i]
    );
  };

  // Needs to be called after the createShopAction5Tag is fully called
  window.cmDisplayShops();

  // Track the transaction
  window.cmCreateOrderTag(
    "" + this.getValueForToken("order_id") + "",
    "" + this.getValueForToken("order_subtotal") + "",
    "" + this.getValueForToken("shipping_cost") + "",
    "" + this.getValueForToken("registration_id") + "",
    "" + this.getValueForToken("city") + "",
    "" + this.getValueForToken("state") + "",
    "" + this.getValueForToken("post_code") + ""
  );

  // Connect the user who's just purchased with the session cookie
  window.cmCreateRegistrationTag(
    "' + this.getValueForToken("registration_id") + '",
    "' + this.getValueForToken("email") + '",
    "' + this.getValueForToken("city") + '",
    "' + this.getValueForToken("state") + '",
    "' + this.getValueForToken("post_code") + '",
    "' + this.getValueForToken("country") + '"
  );

}());
		/*~POST*/
	}
});
