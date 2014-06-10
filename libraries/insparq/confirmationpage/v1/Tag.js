//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("insparq.confirmationpage.v1.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Page",
		async: true,
		description: "inSparq uses tracking pixel data to capture purchase information for two purposes: (1) Using purchase numbers as a signal in calculating trending products for display (2) Tracking the business performance of inSparq installations in our analytics",
		html: "<!--@SRC@-->",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/insparq.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of Product IDs",
			description: "Array of Product IDs",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Array of Product Unit Sale Prices",
			description: "Array of Product Unit Sale Prices",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Array of Product Quantities",
			description: "Array of Product Quantities",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Value",
			description: "Order Value",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Array of Product Names",
			description: "Array of Product Names",
			token: "names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "inSparq API key",
			description: "inSparq API key",
			token: "insparq_api_key",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			var ids = "";
			var names = "";
			var prices = "";
			var quantity = 0;

			for (var i = 0; i < this.valueForToken("ids").length; i++) {
				if (i > 0) {
					ids += "|";
					prices += "|";
					names += "|";
				}
				ids += this.valueForToken("ids")[i] + "";
				names += this.valueForToken("names")[i] + "";
				prices += this.valueForToken("prices")[i] + "";
				quantity += this.valueForToken("quantities")[i];
			}

			var src = document.location.protocol +
				"//api.insparq.com/api/v20120319/key/" + this.valueForToken(
					"insparq_api_key") + "/user?pageType=purcon";
			src += "&orderID=" + this.valueForToken("id") + "";
			src += "&cartValue=" + this.valueForToken("subtotal") + "";
			src += "&cartItemCount=" + quantity;
			src += "&productIDs=" + ids;
			src += "&productNames=" + names;
			src += "&productPrices=" + prices;

			(new Image()).src = src;
		})();
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