//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("merchantadvantage.chanalyticsconfirmationpage.Tag", {
    config: {
      /*DATA*/
	id: 37160,
	name: "Chanalytics - Confirmation Page",
	async: true,
	description: "The confirmation page tag creates image pixels for each unique type of product in the order, then makes a call to MerchantAdvantage to track the full order details.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/merchantadvantage.gif",
	locationDetail: "",
	priv: false,
	url: "https://secure.merchantadvantage.com/inChannel/ma2q.js",
	usesDocWrite: true,
	parameters: [
	{
		id: 36164,
		name: "MerchantAdvantage ID",
		description: "Your Unique MerchantAdvantage identifier.  It is usually 8 characters",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 36165,
		name: "MerchantAdvantage Storefront ID",
		description: "Your Storefront ID number",
		token: "store_id",
		uv: ""
	},
	{
		id: 36166,
		name: "Product ID List",
		description: "An array of product IDs in this order.",
		token: "prod_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 36167,
		name: "Product Quantity List",
		description: "An array of quantities associated with each corresponding product ID",
		token: "prod_qtys",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 36168,
		name: "Order ID",
		description: "The order's unique identifier",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 36169,
		name: "Order Total",
		description: "The total value of this order",
		token: "order_tot",
		uv: "universal_variable.transaction.subtotal"
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
function createAppendPixel(src) {
  var pixel = document.createElement('img');
  pixel.src = src;
  pixel.width = 0;
  pixel.height = 0;
  pixel.border = 0;
  document.body.insertBefore(pixel, document.body.lastChild);
}

for (var i = 0; i < this.getValueForToken("prod_ids").length; i++){
  createAppendPixel("zmam=" + "" + this.getValueForToken("merchant_id") + "" +
                    "&zmas=" + "" + this.getValueForToken("store_id") + "" +
                    "&zmaq=N&quantity=" + this.getValueForToken("prod_qtys")[i] +
                    "&pcode=" + this.getValueForToken("prod_ids")[i] +
                    "&zman=" + "" + this.getValueForToken("order_id") + "" +
                    "&zmat=" + "" + this.getValueForToken("order_tot") + "");
}
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
