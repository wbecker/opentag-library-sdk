//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("shopzilla.conversiontag.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tag",
		async: true,
		description: "Place only on the confirmation page",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Order Quantity List",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		},
		{
			name: "User Returning",
			description: "",
			token: "returning",
			uv: "universal_variable.user.returning"
		},
		{
			name: "Shopzilla Merchant ID",
			description: "",
			token: "merch_id",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


var i = 0, ii = this.getValueForToken("quantities").length, totalQuantity = 0, customerType = (this.getValueForToken("returning")) ? 0 : 1;
for (;i < ii; i++){
  totalQuantity += parseInt(this.getValueForToken("quantities")[i]);
}

var mid = '' + this.getValueForToken("merch_id") + '';
var cust_type = customerType;
var order_value = '' + this.getValueForToken("order_total") + '';
var order_id = '' + this.getValueForToken("order_id") + '';
var units_ordered  = totalQuantity;

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
