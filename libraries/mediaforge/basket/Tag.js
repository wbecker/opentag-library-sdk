//:include tagsdk-current.js
var version = "";
var classPath = "mediaforge.basket" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Basket",
		async: true,
		description: "To be placed on the basket/cart page for cart abandonment targeting.",
		html: " ",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "mediaFORGE Merchant ID",
			description: "The ID that relates you to mediaFORGE",
			token: "merchant_id",
			uv: ""
		}, {
			name: "Basket Product IDs",
			description: "An array of the product ID/SKUs of all items in the basket",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Basket Total",
			description: "The total value for all items in the basket",
			token: "basket_total",
			uv: "universal_variable.basket.subtotal"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var script = document.createElement("script");
		var productArr = [];
		for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
			productArr.push(this.valueForToken("product_ids")[i]);
		}
		var productIDs = productArr.join(",");
		script.src = "//tags.mediaforge.com/js/" + this.valueForToken("merchant_id") +
			"/?cart=" + this.valueForToken("basket_total") + "&prodID=" + productIDs;
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