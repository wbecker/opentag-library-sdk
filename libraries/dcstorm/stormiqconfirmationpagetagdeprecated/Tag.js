//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("dcstorm.stormiqconfirmationpagetagdeprecated.Tag", {
    config: {/*DATA*/
	id: 31657,
	name: "StormIQ Confirmation Page Tag [Deprecated]",
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
		id: 30657,
		name: "StormIQ ID",
		description: "",
		token: "storm_id",
		uv: ""
	},
	{
		id: 30658,
		name: "StormIQ Channel",
		description: "If not specified, leave blank",
		token: "channel",
		uv: ""
	},
	{
		id: 30659,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 30660,
		name: "Transaction Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 30661,
		name: "Product IDs",
		description: "",
		token: "ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 30662,
		name: "Product Names",
		description: "",
		token: "names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 30663,
		name: "Product Quantities",
		description: "",
		token: "quants",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 30664,
		name: "Product Colours",
		description: "",
		token: "colors",
		uv: "universal_variable.transaction.line_items[#].product.color"
	},
	{
		id: 30665,
		name: "Product Values",
		description: "",
		token: "vals",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 30666,
		name: "Shipping Cost",
		description: "",
		token: "shipping",
		uv: "universal_variable.transaction.shipping_cost"
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
    m2: this.getValueForToken("names")[i],
    m3: this.getValueForToken("colors")[i]
  })
}

saleTrack.addSaleItem({
    itemcount: 1,
    itemvalue: this.getValueForToken("shipping"),
    m1: "Shipping cost"
})

saleTrack.curcode = '' + this.getValueForToken("currency") + '';
saleTrack.orderid = "" + this.getValueForToken("order_id") + ""; 
saleTrack.logSale(1);
    }/*~POST*/
});
