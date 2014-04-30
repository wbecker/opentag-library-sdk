//:include tagsdk-current.js
var version = "";
var classPath =
	"googleanalytics.googleanalyticsecommercecustomdomainsonlyrequiredparameters" +
	version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Analytics Ecommerce - Custom Domains, only required parameters",
		async: true,
		description: "Ecommerce tracking with basic parameters, custom domains, and setAllowLinker set to true.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n  window._gaq = window._gaq || [];\n  _gaq.push(['_setAccount', '${profile_id}']);\n  _gaq.push(['_setDomainName', '${domain_name}']);\n  _gaq.push(['_setAllowLinker', true]);\n  _gaq.push(['_trackPageview']);\n  _gaq.push(['_addTrans',\n    '${order_id}',\n    '',\n    '${order_total}',\n    '',         \n    '',\n    '',\n    '',\n    ''\n  ]);\n  var i, ii;\n  for (i = 0, ii = ${item_skus}.length; i < ii; i += 1) {\n    _gaq.push(['_addItem',\n      '${order_id}',\n      ${item_skus}[i],\n      ${item_names}[i],\n      '',\n      ${item_unit_prices}[i],\n      ${item_quantities}[i]\n    ]);\n  }\n  _gaq.push(['_trackTrans']); \n\n  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n})();\n\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "GA Profile ID",
			description: "",
			token: "profile_id",
			uv: ""
		}, {
			name: "GA Domain Name",
			description: "",
			token: "domain_name",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Item SKUs",
			description: "",
			token: "item_skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Item Names",
			description: "",
			token: "item_names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Item Unit Prices",
			description: "",
			token: "item_unit_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		}, {
			name: "Item Quantities",
			description: "",
			token: "item_quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
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