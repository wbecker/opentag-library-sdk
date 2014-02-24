//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("cheetahmail.tracktopurchasewithitemtracking.Tag", {
    config: {/*DATA*/
	id: 36176,
	name: "Track-to-Purchase with Item Tracking",
	async: true,
	description: "Track-to-purchase reporting is typically used by clients that utilize e-commerce components to track conversions on their site resulting from an email campaign sent through CheetahMail. The Item Tracking feature, when enabled via CheetahMail, provides a method of tracking detailed information about the items that were purchased for each transaction.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/cheetahmail.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35250,
		name: "Client Domain",
		description: "Client domain hosted by CheetahMail",
		token: "domain",
		uv: ""
	},
	{
		id: 35251,
		name: "Affiliate IDs",
		description: "Affiliate ID used to send mailings to be tracked (up to 10 IDs separated by '.' eg 11111.2222.33333)",
		token: "affiliate_ids",
		uv: ""
	},
	{
		id: 35252,
		name: "Client Name",
		description: "Short alphanumeric name, usually an abbreviation of the client name",
		token: "client",
		uv: ""
	},
	{
		id: 35253,
		name: "Order ID",
		description: "Code to uniquely identify each transaction (1st parameter)",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 35254,
		name: "Order Total",
		description: "Total spent on each transaction MUST BE A NUMBER - '.' is okay, ',' is bad",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 35255,
		name: "Product Names",
		description: "An array of product names for each item in this transaction",
		token: "product_names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 35256,
		name: "Product Quantities",
		description: "An array of product quantities for each item in this transaction",
		token: "product_qtys",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 35257,
		name: "Product Prices",
		description: "An array of product unit sale prices for each item in this transaction",
		token: "product_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 35258,
		name: "Custom Value 1",
		description: "Any client specific data to be associated with each transaction - numbers only",
		token: "cust1",
		uv: ""
	},
	{
		id: 35259,
		name: "Custom Value 2",
		description: "Any client specific data to be associated with each transaction - numbers only",
		token: "cust2",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


(function(){

var items = [];

for (var i = 0; i < this.getValueForToken("product_names").length; i++){
  items.push(String(this.getValueForToken("product_names")[i]) +"@" + String(this.getValueForToken("product_qtys")[i]) + "@" + String(this.getValueForToken("product_prices")[i]));
}

var script = document.createElement("script");
script.src = "https://" + this.getValueForToken("domain") + "/a/r" + this.getValueForToken("affiliate_ids") + "/" + this.getValueForToken("client") + ".gif?a=" + this.getValueForToken("order_id") + "&b=" + this.getValueForToken("order_total") + "&c=" + items.join("|") + "&d=" + this.getValueForToken("cust1") + "&e=" + this.getValueForToken("cust2") + "";
document.getElementsByTagName("head")[0].appendChild(script);

})();



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
