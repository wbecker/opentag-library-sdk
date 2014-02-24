//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("shopzilla.shopzillapossurvey.Tag", {
    config: {
      /*DATA*/
	id: 36664,
	name: "Shopzilla POS Survey",
	async: true,
	description: "Survey to be placed after a user has made a purchase.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/shopzilla.png",
	locationDetail: "",
	priv: false,
	url: "eval.bizrate.com/js/pos_${merchant_id}.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 35702,
		name: "Merchant id",
		description: "Your unique merchant id for Shopzilla",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 35703,
		name: "Passin Y",
		description: "Adjust horizontal position by pixel.",
		token: "passin_y",
		uv: ""
	},
	{
		id: 35704,
		name: "Passin X",
		description: "Adjust horizontal position by pixel.",
		token: "passin_x",
		uv: ""
	},
	{
		id: 35705,
		name: "Total",
		description: "",
		token: "total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 35706,
		name: "Zip code",
		description: "",
		token: "zip_code",
		uv: "universal_variable.transaction.billing.postcode"
	},
	{
		id: 35707,
		name: "Product SKUs",
		description: "",
		token: "skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 35708,
		name: "Product URLs",
		description: "",
		token: "urls",
		uv: "universal_variable.transaction.line_items[#].product.url"
	},
	{
		id: 35709,
		name: "Product Prices",
		description: "",
		token: "unit_sale_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 35710,
		name: "Order id",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
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
// Offset. Input blank to default to center.
var passX = "" + this.getValueForToken("passin_x") + "";
var passY = "" + this.getValueForToken("passin_y") + "";

//Don't define passin_x and passin_y if blank value provided
if (passX !== "" && passY !== ""){
  var passin_x = Number(passX);
  var passin_y = Number(passY);
}

var orderId = "' + this.getValueForToken("order_id") + '"; 
var cartTotal = ' + this.getValueForToken("total") + ';
var billingZipCode = "' + this.getValueForToken("zip_code") + '";

var productsPurchasedArr = [];

for (var i = 0; i < Math.min(5, ' + this.getValueForToken("skus") + '.length); i++) {
  var item = "";
  item += "URL= " + ' + this.getValueForToken("urls") + '[i];
  item += "^SKU= " + ' + this.getValueForToken("skus") + '[i];
  // item += "^GTIN= " + ' + this.getValueForToken("ids") + '[i]; // Global Trade Item Number - ignore this
  item += "^PRICE= " + ' + this.getValueForToken("unit_sale_prices") + '[i];
  productsPurchasedArr.push(item)
};

var productsPurchased = productsPurchasedArr.join("|");
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
