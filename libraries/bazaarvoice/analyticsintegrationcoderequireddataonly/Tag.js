//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("bazaarvoice.analyticsintegrationcoderequireddataonly.Tag", {
    config: {
      /*DATA*/
	name: "Analytics Integration Code (Required Data Only)",
	async: true,
	description: "Uses required data only. Add JavaScript code to your transaction and conversion pages to send information to Bazaaarvoice analytics.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/bazaarvoice.jpg",
	locationDetail: "",
	priv: false,
	url: "${client_code}.ugc.bazaarvoice.com/static/${display_code}/bvapi.js",
	usesDocWrite: false,
	parameters: [
	{
		name: "Client Code",
		description: "represents your client code",
		token: "client_code",
		uv: ""
	},
	{
		name: "Display Code",
		description: "represents your display code",
		token: "display_code",
		uv: ""
	},
	{
		name: "Order ID",
		description: "",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Order Total",
		description: "",
		token: "total",
		uv: "universal_variable.transaction.total"
	},
	{
		name: "Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		name: "Product ID List",
		description: "",
		token: "productIds",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		name: "Product SKU List",
		description: "",
		token: "productSkus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		name: "Product Quantity List",
		description: "",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
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
(function () {
  var data = {
    "orderId": "" + this.getValueForToken("orderId") + "",
    "total" : "" + this.getValueForToken("total") + "",
    "currency" : "" + this.getValueForToken("currency") + "",
    "items": []
  };
  for(var i = 0; i < this.getValueForToken("productIds").length; i++) {
    data.items.push({
      "sku" : this.getValueForToken("productSkus")[i],
      "quantity" : this.getValueForToken("quantities")[i]
    });
  }
  $BV.SI.trackTransactionPageView(data);
})();
      /*~POST*/
    }
});
