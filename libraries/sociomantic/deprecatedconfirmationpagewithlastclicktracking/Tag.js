//:include tagsdk-current.js
var version = "";
var classPath = "sociomantic.deprecatedconfirmationpagewithlastclicktracking" +
	version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "{DEPRECATED} Confirmation Page (with last click tracking)",
		async: true,
		description: "As confirmation page tag, but with last click tracking",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiser_id}",
		usesDocWrite: false,
		parameters: [{
			name: "Product ID List",
			description: "A list of product IDs on the confirmation page",
			token: "product_id_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Amounts",
			description: "A list of transaction line item amounts",
			token: "amt_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Currency",
			description: "The currency of the transaction",
			token: "trans_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Quantities",
			description: "A list of transaction line item quantities",
			token: "qty_list",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Advertiser ID",
			description: "The ID relating to the client",
			token: "advertiser_id",
			uv: ""
		}, {
			name: "Transaction ID",
			description: "The ID relating to the transaction",
			token: "trans_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Checkout Total",
			description: "The total value of items at checkout",
			token: "trans_total",
			uv: "universal_variable.transaction.subtotal"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.sale = {
			confirmed: true
		};

		window.basket = {
			products: []
		};

		for (var i = 0, ii = this.valueForToken("product_id_list").length; i < ii; i++) {
			basket.products.push({
				identifier: this.valueForToken("product_id_list")[i],
				amount: this.valueForToken("amt_list")[i],
				currency: '' + this.valueForToken("trans_currency"),
				quantity: this.valueForToken("qty_list")[i]
			});
		}

		basket.transaction = '' + this.valueForToken("trans_id");
		basket.amount = '' + this.valueForToken("trans_total");
		basket.currency = '' + this.valueForToken("trans_currency");
		window.basket = basket;
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});