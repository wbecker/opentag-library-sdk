//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("criteo.onetagconfirmation.Tag", {
    config: {
      /*DATA*/
	name: "OneTag - Confirmation",
	async: true,
	description: "This is a mandatory tag and must be executed on the confirmation page after user makes a payment.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
	locationDetail: "",
	priv: false,
	url: "static.criteo.net/js/ld/ld.js",
	usesDocWrite: false,
	parameters: [
	{
		name: "Criteo Partner ID",
		description: "The ID assigned to you by Criteo",
		token: "partner_id",
		uv: ""
	},
	{
		name: "Customer ID",
		description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
		token: "customer_id",
		uv: "universal_variable.user.user_id"
	},
	{
		name: "Site Type",
		description: "\"m\" for mobile or \"t\" for tablet or \"d\" for  desktop",
		token: "site_type",
		uv: ""
	},
	{
		name: "Order ID",
		description: "The completed order's ID",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Returning Customer",
		description: "A boolean value, false if this is a first-time buyer.",
		token: "old_customer",
		uv: "universal_variable.user.returning"
	},
	{
		name: "Criteo Referral",
		description: "\"1\" if this customer was referred via Criteo, \"0\" if not. Use \"1\" if deduplication is not used.",
		token: "criteo_referral",
		uv: ""
	},
	{
		name: "Product ID List",
		description: "List of Product IDs for all products in the user's order",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		name: "Product Price List",
		description: "List of prices for each product in the user's order",
		token: "product_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		name: "Product Quantity List",
		description: "List of quantities for each product in the user's order",
		token: "product_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
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

  var products = [];

  for (var i=0; i<this.getValueForToken("product_ids").length; i++) {
    products.push({
      id: this.getValueForToken("product_ids")[i],
      price: this.getValueForToken("product_prices")[i],
      quantity: this.getValueForToken("product_quantities")[i]
    });
  }

  var user_id = "" + this.getValueForToken("customer_id") + "";
  //Remove email if present.
  if (user_id.indexOf("@") > -1){
    user_id = "";
  }

  var ret = (function(){
    if (typeof this.getValueForToken("old_customer") === "undefined" || this.getValueForToken("old_customer") === null){
      return "";
    }else{
      return Number(!this.getValueForToken("old_customer"));
    }
  })();

  window.criteo_q = window.criteo_q || [];
  window.criteo_q.push(
    { event: "setAccount", account: this.getValueForToken("partner_id") },
    { event: "setCustomerId", id: user_id },
    { event: "setSiteType", type: "" + this.getValueForToken("site_type") + "" },
    { event: "trackTransaction", id: "" + this.getValueForToken("order_id") + "", new_customer: ret, deduplication: this.getValueForToken("criteo_referral"), product: products }
  );

}());
      /*~POST*/
    }
});
