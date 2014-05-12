//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("sub2.deprecated.Tag", {
	config: {
		/*DATA*/
		name: "DEPRECATED",
		async: true,
		description: "The script should be added to the Order Confirmation page on the website. The purpose of this script is to capture the relevant details relating to the user's order.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/sub2_logo.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Order ID",
			description: "Transaction Order ID",
			token: "orderId",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Affiliation",
			description: "Voucher Code",
			token: "affiliation",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Order Total excluding Shipping Cost",
			description: "Order Total",
			token: "total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order Tax",
			description: "Order Tax",
			token: "tax",
			uv: "universal_variable.transaction.tax"
		}, {
			name: "Shipping Cost",
			description: "Shipping Cost",
			token: "shipping",
			uv: "universal_variable.transaction.shipping_cost"
		}, {
			name: "City",
			description: "City",
			token: "city",
			uv: "universal_variable.transaction.delivery.city"
		}, {
			name: "Country",
			description: "Country",
			token: "country",
			uv: "universal_variable.transaction.delivery.country"
		}, {
			name: "List of Product IDs",
			description: "List of Purchased items",
			token: "product_id",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		var ii = 0;
		var waitForConfirmationScripts = function() {
			if ((typeof S2Tech_addOrder === 'function') && (typeof S2Tech_addItem ===
				'function') && (typeof S2Tech_MatchData_NA === 'function')) {
				S2Tech_addOrder("" + this.valueForToken("orderId"), "" + this.valueForToken(
					"affiliation"), "" + this.valueForToken("total"), "" + this.valueForToken(
					"tax"), "" + this.valueForToken("shipping"), "" + this.valueForToken(
					"city"), "" + this.valueForToken("county"), "" + this.valueForToken(
					"country"));

				for (var i = 0; i < this.valueForToken("product_id").length; i++) {
					S2Tech_addItem("" + this.valueForToken("orderId"), this.valueForToken(
						"sku")[i], this.valueForToken("product_name")[i], this.valueForToken(
						"category_unit")[i], this.valueForToken("unit_price")[i], this.valueForToken(
						"quantity")[i]);
				}

				S2Tech_MatchData_NA("" + this.valueForToken("title"), "" + this.valueForToken(
					"forename"), "" + this.valueForToken("lastname"), "" + this.valueForToken(
					"address1"), "" + this.valueForToken("address2"), "" + this.valueForToken(
					"address3"), "" + this.valueForToken("address4"), "" + this.valueForToken(
					"postcode"), "" + this.valueForToken("email"), "" + this.valueForToken(
					"landline"),  "" + this.valueForToken("mobile"),  "" + this.valueForToken(
					"optins"));
			} else if (ii < 50) {
				ii++;
				setTimeout(waitForConfirmationScripts, 100);
			}
		};

		waitForConfirmationScripts();



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