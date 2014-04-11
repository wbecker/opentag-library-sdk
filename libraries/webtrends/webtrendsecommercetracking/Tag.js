//:include tagsdk-current.js
var version = "";
var classPath = "webtrends.webtrendsecommercetracking" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Webtrends - Ecommerce tracking",
		async: true,
		description: "To be placed on pages where you wish to pass back transactional data. Should be dependent on the main Webtrends tracking tag.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Product Unit Sale Prices",
			description: "",
			token: "unit_sale_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Product IDs",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product SKUs",
			description: "",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Product Categories",
			description: "",
			token: "categories",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Product Manufacturers",
			description: "",
			token: "manufacturers",
			uv: "universal_variable.transaction.line_items[#].product.manufacturer"
		}, {
			name: "Line Item Quantities",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		(function() {
			var now = new Date();
			var day = now.getUTCDate() + "";
			if (day.length === 1) day = "0" + day;
			var month = (now.getUTCMonth() + 1) + "";
			if (month.length === 1) month = "0" + month;
			var year = now.getUTCFullYear();
			var date = month + "/" + day + "/" + year;
			var time = now.toUTCString().match(/..:..:../)[0];

			var ids = [];
			var skus = [];
			var categories = [];
			var manufacturers = [];
			var quantities = [];
			var unit_sale_prices = [];

			for (var i = this.valueForToken("ids").length - 1; i >= 0; i--) {
				ids.push(this.valueForToken("ids")[i]);
				skus.push(this.valueForToken("skus")[i]);
				categories.push(this.valueForToken("categories")[i]);
				manufacturers.push(this.valueForToken("manufacturers")[i]);
				quantities.push(this.valueForToken("quantities")[i]);
				unit_sale_prices.push(this.valueForToken("unit_sale_prices")[i]);
			};

			// Calculate subtotals
			var subtotals = [];
			for (var i = 0; i < unit_sale_prices.length; i++) {
				subtotals.push(unit_sale_prices[i] * quantities[i]);
			}


			dcsMultiTrack({

				// Identify this event as a purchase
				"WT.tx_e": "p",

				// Transaction parameters
				"WT.tx_u": quantities.join(';'),
				"WT.tx_s": subtotals.join(';'),
				"WT.tx_i": "" + this.valueForToken("order_id") + "",

				// Product parameters
				"WT.pn_sku": skus.join(';'),
				"WT.pn_id": ids.join(';'),

				"WT.pn_fa": categories.join(';'),
				"WT.pn_ma": manufacturers.join(";"),

				// conversion timestamp
				"WT.tx_id": date,
				"WT.tx_it": time,

				"WT.dl": 1

			});

		}());

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