//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("become.roi.v1.Tag", {
	config: {
		/*DATA*/
		name: "ROI",
		async: true,
		description: "ROI script to be placed on the Confirmation Page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Merchant ID",
			description: "The ID specific to the merchant using the Become tag",
			token: "become_merchant_id",
			uv: ""
		}, {
			name: "Transaction Order ID",
			description: "The transaction order identifier for the purchase",
			token: "order_number",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Transaction Product Quantity List",
			description: "A list of quantities for all purchased items in the transaction",
			token: "product_quantity_list",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Transaction Product ID List",
			description: "A list of product IDs on the transaction page",
			token: "product_id_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Transaction Product Category List",
			description: "A list of product categories on the transaction page",
			token: "product_category_list",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Transaction Product Price List",
			description: "A list of the prices for items in the transaction page (unit sale price)",
			token: "product_price_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window.become_merchant_id = '' + this.valueForToken("become_merchant_id");
		window.become_order_num = '' + this.valueForToken("order_number");
		window.become_purchased_items = [];

		for (var i = 0; i < this.valueForToken("product_quantity_list").length; i++) {
			var become_item = {
				productid: this.valueForToken("product_id_list")[i],
				category: this.valueForToken("product_category_list")[i],
				price: this.valueForToken("product_price_list")[i],
				quantity: this.valueForToken("product_quantity_list")[i]
			};
			become_purchased_items.push(become_item);
		}

		var script = document.createElement("script");
		script.src = "https://partner.become.com/roi-tracker2/conversion.js";
		document.body.appendChild(script);

		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});