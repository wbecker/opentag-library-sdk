//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("dcstorm.StormIQConfirmationPageTagNOSHIPPING", {
    config: {/*DATA*/
	id: 30158,
	name: "StormIQ Confirmation Page Tag - NO SHIPPING",
	async: true,
	description: "To be placed on the confirmation page only",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: true,
	url: "t1.stormiq.com/dcv4/jslib/${storm_id}.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 29159,
		name: "StormIQ ID",
		description: "",
		token: "storm_id",
		uv: ""
	},
	{
		id: 29160,
		name: "StormIQ Channel",
		description: "If not specified, leave blank",
		token: "channel",
		uv: ""
	},
	{
		id: 29161,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 29162,
		name: "Product ID's",
		description: "",
		token: "ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 29163,
		name: "Product SKU's",
		description: "",
		token: "skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 29164,
		name: "Product Quantities",
		description: "",
		token: "quants",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 29165,
		name: "Product Colors",
		description: "",
		token: "colors",
		uv: "universal_variable.transaction.line_items[#].product.color"
	},
	{
		id: 29167,
		name: "Product Values",
		description: "",
		token: "vals",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
window.__stormJs ='t1.stormiq.com/dcv4/jslib/' + this.getValueForToken("storm_id") + '.js'; 
window.__ch ='' + this.getValueForToken("channel") + '';
    },/*~PRE*/
    post: function () {/*POST*/
var i = 0, ii = this.getValueForToken("ids").length;

for (; i < ii; i++) {
  saleTrack.addSaleItem({
    itemcount: this.getValueForToken("quants")[i],
    itemvalue: this.getValueForToken("vals")[i],
    m1: this.getValueForToken("ids")[i],
    m2: this.getValueForToken("skus")[i],
    m3: this.getValueForToken("colors")[i]
  })
}

saleTrack.orderid = "" + this.getValueForToken("order_id") + ""; 
saleTrack.logSale(1);
    }/*~POST*/
});
