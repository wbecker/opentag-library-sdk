//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("prismastar.orderconfirmationtrackingpixel.Tag", {
    config: {
      /*DATA*/
	id: 35189,
	name: "Order Confirmation Tracking Pixel",
	async: true,
	description: "The tracking code is an asynchronous call to the reporting gateway passing with it the details of the order. The reporting system can then cross reference the session with sessions already populated with a Selector history and derive time to order and average order values.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/PrismaStar.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34360,
		name: "Gateway Prefix",
		description: "Your gateway prefix assigned by your PrismaStar account manager",
		token: "GATEWAY_PREFIX",
		uv: ""
	},
	{
		id: 34361,
		name: "Customer Code",
		description: "Your customer code assigned by your PrismaStar account manager",
		token: "CUSTOMER_CODE",
		uv: ""
	},
	{
		id: 34362,
		name: "Order ID",
		description: "Your internal order identification (for your reference)",
		token: "ORDER_ID",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 34363,
		name: "Product ID List",
		description: "",
		token: "ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 34364,
		name: "Product Quantities",
		description: "",
		token: "quants",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 34365,
		name: "Product Prices",
		description: "",
		token: "prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 34366,
		name: "Product Categories",
		description: "",
		token: "categories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


  (function (){

    var pixel = new Image();
    var source = "https://" + this.getValueForToken("GATEWAY_PREFIX") + ".cpr.prismastar.com/v2_0/recorder/?type=order&customerCode=" + this.getValueForToken("CUSTOMER_CODE") + "&customerOrderId=" + this.getValueForToken("ORDER_ID") + "&order=";

    for (var i = 0, ii = this.getValueForToken("ids").length; i < ii; i++) {
      var productArray = [
        this.getValueForToken("ids")[i],
        this.getValueForToken("quants")[i],
        this.getValueForToken("prices")[i],
        this.getValueForToken("categories")[i]
      ];
      source += productArray.join("|") + ";";
    }

    pixel.src = source;


  }());



      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
