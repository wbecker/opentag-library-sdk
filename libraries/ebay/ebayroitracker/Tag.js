//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("ebay.ebayroitracker.Tag", {
    config: {
      /*DATA*/
	name: "eBay ROI Tracker",
	async: true,
	description: "A free campaign measurement tool available to all merchants. Displays product, category and order- level performance to give you the right visibility to effectively optimize for success.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/ebay.png",
	locationDetail: "",
	priv: false,
	url: "stat.dealtime.com/ROI/ROI2.js",
	usesDocWrite: false,
	parameters: [
	{
		name: "eBay Merchant ID",
		description: "Your eBay ROI Tracker ID",
		token: "ebay_merchant_id",
		uv: ""
	},
	{
		name: "Order ID",
		description: "Transaction Order ID",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Order Amount",
		description: "Transaction Order Amount",
		token: "order_amount",
		uv: "universal_variable.transaction.total"
	},
	{
		name: "Product Names",
		description: "",
		token: "product_names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		name: "Product SKUs",
		description: "",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		name: "Product Prices",
		description: "",
		token: "product_price",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		name: "Product Categories",
		description: "",
		token: "product_categories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		name: "Product Quantity",
		description: "",
		token: "product_quantity",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		name: "Product IDs",
		description: "",
		token: "product_category_ids",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
var _roi = _roi || []; 
 
_roi.push(['_setMerchantId', '' + this.getValueForToken("ebay_merchant_id") + '']);
_roi.push(['_setOrderId', '' + this.getValueForToken("order_id") + '']);
_roi.push(['_setOrderAmount', '' + this.getValueForToken("order_amount") + '']);

for(var i=0;i<this.getValueForToken("product_ids").length;i++) {
_roi.push(['_addItem', 
this.getValueForToken("product_ids")[i], // Merchant sku 
this.getValueForToken("product_names")[i], // Product name 
this.getValueForToken("product_category_ids")[i], // Category id 
this.getValueForToken("product_categories")[i], // Category name 
this.getValueForToken("product_price")[i], // Unit price 
this.getValueForToken("product_quantity")[i] // Item quantity 
]); 
}
 

_roi.push(['_trackTrans']);
      /*~POST*/
    }
});
