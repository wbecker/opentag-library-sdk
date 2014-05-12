//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("shopzilla.shopzillapossurvey.Tag", {
	config: {
		/*DATA*/
		name: "Shopzilla POS Survey",
		async: true,
		description: "Survey to be placed after a user has made a purchase.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/shopzilla.png",
		locationDetail: "",
		isPrivate: false,
		url: "eval.bizrate.com/js/pos_${merchant_id}.js",
		usesDocWrite: false,
		parameters: [{
			name: "Merchant id",
			description: "Your unique merchant id for Shopzilla",
			token: "merchant_id",
			uv: ""
		}, {
			name: "Passin Y",
			description: "Adjust horizontal position by pixel.",
			token: "passin_y",
			uv: ""
		}, {
			name: "Passin X",
			description: "Adjust horizontal position by pixel.",
			token: "passin_x",
			uv: ""
		}, {
			name: "Total",
			description: "",
			token: "total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Zip code",
			description: "",
			token: "zip_code",
			uv: "universal_variable.transaction.billing.postcode"
		}, {
			name: "Product SKUs",
			description: "",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Product URLs",
			description: "",
			token: "urls",
			uv: "universal_variable.transaction.line_items[#].product.url"
		}, {
			name: "Product Prices",
			description: "",
			token: "unit_sale_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Order id",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		// Offset. Input blank to default to center.
		window.passX = "" + this.valueForToken("passin_x");
		window.passY = "" + this.valueForToken("passin_y");

		//Don't define passin_x and passin_y if blank value provided
		if (passX !== "" && passY !== "") {
			window.passin_x = Number(passX);
			window.passin_y = Number(passY);
		}

		window.orderId = "" + this.valueForToken("order_id");
		window.cartTotal = this.valueForToken("total");
		window.billingZipCode = "" + this.valueForToken("zip_code");

		window.productsPurchasedArr = [];

		for (var i = 0; i < Math.min(5, this.valueForToken("skus").length); i++) {
			var item = "";
			item += "URL= " + this.valueForToken("urls")[i];
			item += "^SKU= " + this.valueForToken("skus")[i];
			// item += "^GTIN= " + ${ids}[i]; // Global Trade Item Number - ignore this
			item += "^PRICE= " + this.valueForToken("unit_sale_prices")[i];
			productsPurchasedArr.push(item);
		};

		window.productsPurchased = productsPurchasedArr.join("|");

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});