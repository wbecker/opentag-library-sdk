//:include tagsdk-current.js
var version = "";
var classPath = "shopzilla.conversiontag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tag",
		async: true,
		description: "Place only on the confirmation page",
		html: "",
		imageUrl: ".",
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
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order Quantity List",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "User Returning",
			description: "",
			token: "returning",
			uv: "universal_variable.user.returning"
		}, {
			name: "Shopzilla Merchant ID",
			description: "",
			token: "merch_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		var i = 0,
			ii = this.valueForToken("quantities").length,
			totalQuantity = 0,
			customerType = (this.valueForToken("returning")) ? 0 : 1;
		for (; i < ii; i++) {
			totalQuantity += parseInt(this.valueForToken("quantities")[i]);
		}

		var mid = '' + this.valueForToken("merch_id") + '';
		var cust_type = customerType;
		var order_value = '' + this.valueForToken("order_total") + '';
		var order_id = '' + this.valueForToken("order_id") + '';
		var units_ordered = totalQuantity;

		var script = document.createElement("script");
		script.src = "https://www.shopzilla.com/css/roi_tracker.js";
		document.getElementsByTagName('head')[0].appendChild(script);



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