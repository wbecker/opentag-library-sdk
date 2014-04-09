//:include tagsdk-current.js
var version = "";
var classPath = "criteo.onetagconfirmationwithoutdedupe.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "OneTag - Confirmation without Dedupe",
		async: true,
		description: "This is a mandatory tag and must be executed on the confirmation page after user makes a payment. This version is preferred if the \"Criteo Referral\" parameter in the general confirmation tag is always going to be set to \"1\".",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
		locationDetail: "",
		isPrivate: false,
		url: "static.criteo.net/js/ld/ld.js",
		usesDocWrite: false,
		parameters: [{
			name: "Criteo Partner ID",
			description: "The ID assigned to you by Criteo",
			token: "partner_id",
			uv: ""
		}, {
			name: "Customer ID",
			description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Site Type",
			description: "\"m\" for mobile or \"t\" for tablet or \"d\" for  desktop",
			token: "site_type",
			uv: ""
		}, {
			name: "Order ID",
			description: "The completed order's ID",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Returning Customer",
			description: "A boolean value, false if this is a first-time buyer.",
			token: "old_customer",
			uv: "universal_variable.user.returning"
		}, {
			name: "Product ID List",
			description: "List of Product IDs for all products in the user's order",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product Price List",
			description: "List of prices for each product in the user's order",
			token: "product_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Product Quantity List",
			description: "List of quantities for each product in the user's order",
			token: "product_quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}]
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

			var products = [];

			for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
				products.push({
					id: this.valueForToken("product_ids")[i],
					price: this.valueForToken("product_prices")[i],
					quantity: this.valueForToken("product_quantities")[i]
				});
			}

			var user_id = "" + this.valueForToken("customer_id") + "";
			//Remove email if present.
			if (user_id.indexOf("@") > -1) {
				user_id = "";
			}

			var ret = (function() {
				if (typeof this.valueForToken("old_customer") === "undefined" || this.valueForToken("old_customer") === null) {
					return "";
				} else {
					return Number(!this.valueForToken("old_customer"));
				}
			})();

			window.criteo_q = window.criteo_q || [];
			window.criteo_q.push({
				event: "setAccount",
				account: this.valueForToken("partner_id")
			}, {
				event: "setCustomerId",
				id: user_id
			}, {
				event: "setSiteType",
				type: "" + this.valueForToken("site_type") + ""
			}, {
				event: "trackTransaction",
				id: "" + this.valueForToken("order_id") + "",
				new_customer: ret,
				product: products
			});

		}());
		/*~POST*/
	}
});