//:include tagsdk-current.js
var version = "";
var classPath = "webtrends.webtrendsecommercetracking" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Webtrends - Ecommerce tracking",
		async: true,
		description: "To be placed on pages where you wish to pass back transactional data. Should be dependent on the main Webtrends tracking tag.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n\n(function() \n{\n  var now = new Date();\n  var day = now.getUTCDate() + \"\";\n  if (day.length === 1) day = \"0\" + day;\n  var month = (now.getUTCMonth() + 1) + \"\";\n  if (month.length === 1) month = \"0\" + month;\n  var year = now.getUTCFullYear();\n  var date = month + \"/\" + day + \"/\" + year;\n  var time = now.toUTCString().match(/..:..:../)[0];\n\n  var ids = [];\n  var skus = [];\n  var categories = [];\n  var manufacturers = [];\n  var quantities = [];\n  var unit_sale_prices = [];\n\n  for (var i = ${ids}.length - 1; i >= 0; i--) {\n    ids.push(${ids}[i]);\n    skus.push(${skus}[i]);\n    categories.push(${categories}[i]);\n    manufacturers.push(${manufacturers}[i]);\n    quantities.push(${quantities}[i]);\n    unit_sale_prices.push(${unit_sale_prices}[i]);\n  };\n\n  // Calculate subtotals\n  var subtotals = [];\n  for (var i=0; i<unit_sale_prices.length; i++) {\n    subtotals.push(unit_sale_prices[i] * quantities[i]);\n  }\n\n\n  dcsMultiTrack({\n\n    // Identify this event as a purchase\n    \"WT.tx_e\": \"p\",\n\n    // Transaction parameters\n    \"WT.tx_u\": quantities.join(';'),\n    \"WT.tx_s\": subtotals.join(';'),\n    \"WT.tx_i\": \"${order_id}\",\n\n    // Product parameters\n    \"WT.pn_sku\": skus.join(';'),\n    \"WT.pn_id\": ids.join(';'),\n\n    \"WT.pn_fa\": categories.join(';'),\n    \"WT.pn_ma\": manufacturers.join(\";\"),\n    \n    // conversion timestamp\n    \"WT.tx_id\" : date,\n    \"WT.tx_it\" : time,\n \n    \"WT.dl\": 1\n\n  });\n\n}());\n</script>",
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