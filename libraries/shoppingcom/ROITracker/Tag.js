//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("shoppingcom.ROITracker", {
    config: {/*DATA*/
	id: 33169,
	name: "ROI Tracker",
	async: true,
	description: "A free campaign measurement tool available to all merchants enrolled in the Shopping.com Merchant \nProgram. Displays product and category – level performance data.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Shopping.com.png",
	locationDetail: "",
	priv: false,
	url: "stat.dealtime.com/ROI/ROI2.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 32191,
		name: "Shopping.com Client ID",
		description: "The Shopping.com identifier for the client",
		token: "client_id",
		uv: ""
	},
	{
		id: 32192,
		name: "Shopping.com Order ID",
		description: "The identifier for the order",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 32193,
		name: "Shopping.com Order Subtotal",
		description: "The order total minus shipping and tax",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 32194,
		name: "Shipping.com Order Description",
		description: "A set of order notes",
		token: "desc",
		uv: ""
	},
	{
		id: 32195,
		name: "Shopping.com Product SKU List",
		description: "An array of product SKU in the order",
		token: "item_skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 32196,
		name: "Shopping.com Product Name List",
		description: "A list of product names",
		token: "product_names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 32197,
		name: "Shopping.com Product Category List",
		description: "A list of product categories",
		token: "category_names",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 32198,
		name: "Shipping.com Unit Sale Prices",
		description: "A list of unit sale prices of items in basket",
		token: "unit_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 32199,
		name: "Shipping.com Item Quantities",
		description: "A list of item quantities for items in the basket",
		token: "item_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var _roi = _roi || [];

_roi.push(['_setMerchantId', '' + this.getValueForToken("client_id") + '']);
_roi.push(['_setOrderId', '' + this.getValueForToken("order_id") + '']);
_roi.push(['_setOrderAmount', '' + this.getValueForToken("subtotal") + '']);
_roi.push(['_setOrderNotes', '' + this.getValueForToken("desc") + '']); 

for (var i = 0, ii = this.getValueForToken("item_skus").length; i < ii; i++) {
  _roi.push(['_addItem', 
    '' + this.getValueForToken("item_skus") + '[i]',
    '' + this.getValueForToken("product_names") + '[i]',
    '',
    '' + this.getValueForToken("category_names") + '[i]',
    '' + this.getValueForToken("unit_prices") + '[i]',
    '' + this.getValueForToken("item_quantities") + '[i]'
  ]);
}

_roi.push(['_trackTrans']);
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
