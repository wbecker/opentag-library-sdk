//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("adobesitecatalyst.sitecatalystconversiontag.Tag", {
    config: {/*DATA*/
	id: 31158,
	name: "SiteCatalyst Conversion Tag",
	async: true,
	description: "This should be placed only conversion/confirmation page. Any unused variables should be left blank.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sitecatalyst.jpg",
	locationDetail: "",
	priv: false,
	url: "${scriptURL}",
	usesDocWrite: false,
	parameters: [
	{
		id: 30161,
		name: "Omniture S Code URL",
		description: "The custom s_code.js provided to you should be hosted on your server e.g. abc.com/scripts/s_code.js",
		token: "scriptURL",
		uv: ""
	},
	{
		id: 30162,
		name: "Page Name",
		description: "",
		token: "page_name",
		uv: "universal_variable.page.subcategory"
	},
	{
		id: 30163,
		name: "Omniture Server Address",
		description: "Server used for Omniture analytics",
		token: "server",
		uv: ""
	},
	{
		id: 30164,
		name: "Omniture Channel",
		description: "The custom s_code.js provided to you should be hosted on your server e.g. abc.com/scripts/s_code.js",
		token: "channel",
		uv: "universal_variable.page.category"
	},
	{
		id: 30689,
		name: "Page Type",
		description: "",
		token: "page_type",
		uv: "universal_variable.page.category"
	},
	{
		id: 30690,
		name: "Campaign Name",
		description: "",
		token: "campaign",
		uv: ""
	},
	{
		id: 30691,
		name: "Address - State",
		description: "",
		token: "state",
		uv: "universal_variable.transaction.delivery.state"
	},
	{
		id: 30692,
		name: "Address - Zip Code",
		description: "",
		token: "zip",
		uv: "universal_variable.transaction.delivery.postcode"
	},
	{
		id: 30693,
		name: "Omniture Events",
		description: "",
		token: "events",
		uv: ""
	},
	{
		id: 30694,
		name: "Product Name List",
		description: "",
		token: "product_names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 30695,
		name: "Product ID List",
		description: "",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 30696,
		name: "Product Quantities",
		description: "",
		token: "quants",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 30697,
		name: "Product Category List",
		description: "",
		token: "categories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 30699,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 30700,
		name: "Prop 1",
		description: "",
		token: "prop1",
		uv: ""
	},
	{
		id: 30701,
		name: "Prop 2",
		description: "",
		token: "prop2",
		uv: ""
	},
	{
		id: 30702,
		name: "Prop 3",
		description: "",
		token: "prop3",
		uv: ""
	},
	{
		id: 30703,
		name: "Prop 4",
		description: "",
		token: "prop4",
		uv: ""
	},
	{
		id: 30704,
		name: "Prop 5",
		description: "",
		token: "prop5",
		uv: ""
	},
	{
		id: 30705,
		name: "eVar 1",
		description: "",
		token: "evar1",
		uv: ""
	},
	{
		id: 30706,
		name: "eVar 2",
		description: "",
		token: "evar2",
		uv: ""
	},
	{
		id: 30707,
		name: "eVar 3",
		description: "",
		token: "evar3",
		uv: ""
	},
	{
		id: 30708,
		name: "eVar 4",
		description: "",
		token: "evar4",
		uv: ""
	},
	{
		id: 30709,
		name: "eVar 5",
		description: "",
		token: "evar5",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
var s = window.s;

s.pageName = "" + this.getValueForToken("page_name") + "";
s.server = "" + this.getValueForToken("server") + "";
s.channel = "" + this.getValueForToken("channel") + "";
s.pageType = "" + this.getValueForToken("page_type") + "";
s.prop1 = "" + this.getValueForToken("prop1") + "";
s.prop2 = "" + this.getValueForToken("prop2") + "";
s.prop3 = "" + this.getValueForToken("prop3") + "";
s.prop4 = "" + this.getValueForToken("prop4") + "";
s.prop5 = "" + this.getValueForToken("prop5") + "";


(function() {
  var i = 0, ii = this.getValueForToken("product_ids").length, productList = [];

  for (; i < ii; i++) {
    var product = [];
    product.push(this.getValueForToken("product_names")[i], this.getValueForToken("product_ids")[i]);
    product.push(this.getValueForToken("quants")[i], this.getValueForToken("categories")[i]);
    productList.push(product.join(";"));
  }

  s.products = productList.join(",");

}());

/* Conversion Variables */
s.campaign = "" + this.getValueForToken("campaign") + "";
s.state = "" + this.getValueForToken("state") + "";
s.zip = "" + this.getValueForToken("zip") + "";
s.events = "" + this.getValueForToken("events") + "";
s.purchaseID = "" + this.getValueForToken("order_id") + "";
s.eVar1 = "" + this.getValueForToken("evar1") + "";
s.eVar2 = "" + this.getValueForToken("evar2") + "";
s.eVar3 = "" + this.getValueForToken("evar3") + "";
s.eVar4 = "" + this.getValueForToken("evar4") + "";
s.eVar5 = "" + this.getValueForToken("evar5") + "";

window.s_code = s.t();
    }/*~POST*/
});
