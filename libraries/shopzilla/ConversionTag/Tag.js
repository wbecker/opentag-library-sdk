//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("shopzilla.ConversionTag", {
    config: {/*DATA*/
	id: 27157,
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
		id: 26657,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 26658,
		name: "Order Total",
		description: "",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 26659,
		name: "Order Quantity List",
		description: "",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 26660,
		name: "User Returning",
		description: "",
		token: "returning",
		uv: "universal_variable.user.returning"
	},
	{
		id: 26661,
		name: "Shopzilla Merchant ID",
		description: "",
		token: "merch_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


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



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
