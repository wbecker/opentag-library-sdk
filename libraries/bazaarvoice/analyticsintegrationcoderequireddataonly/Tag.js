//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("bazaarvoice.analyticsintegrationcoderequireddataonly.Tag", {
    config: {
      /*DATA*/
	id: 23664,
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
		id: 23214,
		name: "Client Code",
		description: "represents your client code",
		token: "client_code",
		uv: ""
	},
	{
		id: 23215,
		name: "Display Code",
		description: "represents your display code",
		token: "display_code",
		uv: ""
	},
	{
		id: 23216,
		name: "Order ID",
		description: "",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 23217,
		name: "Order Total",
		description: "",
		token: "total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 23218,
		name: "Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 23219,
		name: "Product ID List",
		description: "",
		token: "productIds",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 23220,
		name: "Product SKU List",
		description: "",
		token: "productSkus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 23221,
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
