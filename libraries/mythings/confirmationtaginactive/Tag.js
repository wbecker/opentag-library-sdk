//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("mythings.confirmationtaginactive.Tag", {
    config: {
      /*DATA*/
	name: "Confirmation Tag - INACTIVE",
	async: true,
	description: "",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "Order Product IDs",
		description: "",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		name: "Order Product Prices",
		description: "",
		token: "product_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		name: "Order Product Quantities",
		description: "",
		token: "product_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Order Amount",
		description: "",
		token: "order_amount",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		name: "myThings Advertiser Token",
		description: "",
		token: "advertiser_token",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

var i = 0, productIDArray = this.getValueForToken("product_ids"), productPriceArray = this.getValueForToken("product_prices"), productQuantityArray = this.getValueForToken("product_quantities"), productIDArrayLength = productIDArray.length, productArray = [];

for (;i < productIDArrayLength; i++) {
  var product = {
    id:productIDArray[i],
    price:productPriceArray[i],
    qty:productQuantityArray[i]
  }
  productArray.push(product);
}

function _mt_ready(){
  if (typeof(MyThings) != "undefined") {
    MyThings.Track({
      EventType: MyThings.Event.Conversion,
      Action: "9902",
      Products: productArray,
      TransactionReference: "" + this.getValueForToken("order_id") + "",
      TransactionAmount: "" + this.getValueForToken("order_amount") + ""
    });
  }
}
var mtHost = (("https:" == document.location.protocol) ? "https://rainbowx" : "http://rainbow") + ".mythings.com";
var mtAdvertiserToken = "" + this.getValueForToken("advertiser_token") + "";
document.write(unescape("%3Cscript src='" + mtHost + "/c.aspx?atok="+mtAdvertiserToken+"' type='text/
javascript'%3E%3C/script%3E"));


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
