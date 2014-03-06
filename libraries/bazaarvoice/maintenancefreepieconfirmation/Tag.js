//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("bazaarvoice.maintenancefreepieconfirmation.Tag", {
	config: {
		/*DATA*/
		name: "Maintenance Free PIE - Confirmation",
		async: true,
		description: "Bazaarvoice will collect encrypted transaction/interaction data directly from your site using this interaction tagging\nmethod. You can enable this feature by applying a small amount of JavaScript (JS) code, called the ROI beacon, to\nyour order confirmation page. Once the beacon tag is integrated, Bazaarvoice will collect the data needed to\ngenerate your PIEs.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "${client_code}.ugc.bazaarvoice.com/static/${display_code}/bvapi.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "Client Code",
			description: "The code that relates the client to Bazaarvoice",
			token: "client_code",
			uv: ""
		},
		{
			name: "Display Code",
			description: "The display code given to you by Bazaarvoice",
			token: "display_code",
			uv: ""
		},
		{
			name: "Transaction Order ID",
			description: "The ID for the transaction",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Transaction Order Total",
			description: "The total amount of the order excluding shipping + tax",
			token: "order_total",
			uv: "universal_variable.transaction.subtotal"
		},
		{
			name: "User Email",
			description: "The email of the user",
			token: "user_email",
			uv: "universal_variable.user.email"
		},
		{
			name: "Product SKU List",
			description: "The list of SKUs for products in the order",
			token: "product_sku_list",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		},
		{
			name: "Product Quantity List",
			description: "The list of quantities for products in the transaction",
			token: "product_quantity_list",
			uv: "universal_variable.transaction.line_items[#].quantity"
		},
		{
			name: "Product Price List",
			description: "The list of product prices in the order",
			token: "product_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
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
(function () {
  var data = {
    "orderId": "" + this.getValueForToken("order_id") + "",
    "total": this.getValueForToken("order_total"),
    "email": "" + this.getValueForToken("user_email") + "",
    "items": []
  };

  for (var i = 0; i < this.getValueForToken("product_sku_list").length; i++) {
    data.items.push({
      "sku": this.getValueForToken("product_sku_list")[i],
      "quantity": this.getValueForToken("product_quantity_list")[i],
      "price": this.getValueForToken("product_prices")[i]
    });
  }

  $BV.SI.trackTransactionPageView(data);
})();
		/*~POST*/
	}
});
