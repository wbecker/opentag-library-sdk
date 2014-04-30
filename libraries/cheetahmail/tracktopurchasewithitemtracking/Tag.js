//:include tagsdk-current.js
var version = "";
var classPath = "cheetahmail.tracktopurchasewithitemtracking" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Track-to-Purchase with Item Tracking",
		async: true,
		description: "Track-to-purchase reporting is typically used by clients that utilize e-commerce components to track conversions on their site resulting from an email campaign sent through CheetahMail. The Item Tracking feature, when enabled via CheetahMail, provides a method of tracking detailed information about the items that were purchased for each transaction.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n\n(function(){\n\nvar items = [];\n\nfor (var i = 0; i < ${product_names}.length; i++){\n  items.push(String(${product_names}[i]) +\"@\" + String(${product_qtys}[i]) + \"@\" + String(${product_prices}[i]));\n}\n\nvar script = document.createElement(\"script\");\nscript.src = \"https://${domain}/a/r${affiliate_ids}/${client}.gif?a=${order_id}&b=${order_total}&c=\" + items.join(\"|\") + \"&d=${cust1}&e=${cust2}\";\ndocument.getElementsByTagName(\"head\")[0].appendChild(script);\n\n})();\n\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/cheetahmail.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Client Domain",
			description: "Client domain hosted by CheetahMail",
			token: "domain",
			uv: ""
		}, {
			name: "Affiliate IDs",
			description: "Affiliate ID used to send mailings to be tracked (up to 10 IDs separated by '.' eg 11111.2222.33333)",
			token: "affiliate_ids",
			uv: ""
		}, {
			name: "Client Name",
			description: "Short alphanumeric name, usually an abbreviation of the client name",
			token: "client",
			uv: ""
		}, {
			name: "Order ID",
			description: "Code to uniquely identify each transaction (1st parameter)",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "Total spent on each transaction MUST BE A NUMBER - '.' is okay, ',' is bad",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Product Names",
			description: "An array of product names for each item in this transaction",
			token: "product_names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Product Quantities",
			description: "An array of product quantities for each item in this transaction",
			token: "product_qtys",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Product Prices",
			description: "An array of product unit sale prices for each item in this transaction",
			token: "product_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Custom Value 1",
			description: "Any client specific data to be associated with each transaction - numbers only",
			token: "cust1",
			uv: ""
		}, {
			name: "Custom Value 2",
			description: "Any client specific data to be associated with each transaction - numbers only",
			token: "cust2",
			uv: ""
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