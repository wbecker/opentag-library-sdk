//:include tagsdk-current.js
var tagVersion = "";
var classPath = "sociomantic.deprecatedconfirmationpagetag" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "{DEPRECATED} Confirmation Page Tag",
		async: true,
		description: "The transaction ID is required on the Confirmation page along with extra information such as currency, amounts, quantities, checkout total and product IDs",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiserid}",
		usesDocWrite: false,
		parameters: [{
			name: "Products Ids",
			description: "A list of product IDs currently in the basket",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Amounts",
			description: "A list of prices of items currently in the basket",
			token: "amounts",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Currency",
			description: "The current currency in the basket",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Quantities",
			description: "A list of the respective quantities of corresponding items currently in the basket.",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Advertiser ID",
			description: "Identifier relating to the specific client",
			token: "advertiserid",
			uv: ""
		}, {
			name: "Transaction ID",
			description: "Identifier relating to the current transaction",
			token: "transaction_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Checkout Total",
			description: "The total value of items at checkout",
			token: "checkout_total",
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
		window.basket = {
			products: []
		};

		for (var i = 0, ii = this.valueForToken("product_ids").length; i < ii; i++) {
			basket.products.push({
				identifier: this.valueForToken("product_ids")[i],
				amount: this.valueForToken("amounts")[i],
				currency: '' + this.valueForToken("currency"),
				quantity: this.valueForToken("quantities")[i]
			});
		}

		basket.transaction = '' + this.valueForToken("transaction_id");
		basket.amount = '' + this.valueForToken("checkout_total");
		basket.currency = '' + this.valueForToken("currency");
		window.basket = basket;
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});