//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("mythings.endoftransactiontag.Tag", {
    config: {
      /*DATA*/
	name: "End of Transaction Tag",
	async: true,
	description: "The tag should be placed on the end of transaction page.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mythings.png",
	locationDetail: "",
	priv: false,
	url: "${subdomain}.mythings.com/c.aspx?atok=${token}",
	usesDocWrite: true,
	parameters: [
	{
		name: "MyThings Advertiser Token",
		description: "advertiser token provided by myThings",
		token: "token",
		uv: ""
	},
	{
		name: "MyThings Subdomain",
		description: "subdomain value provided by myThings eg. \"rainbow-uk\"",
		token: "subdomain",
		uv: ""
	},
	{
		name: "Product ID List",
		description: "",
		token: "productIds",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		name: "Product Unit Price List",
		description: "",
		token: "productUnitPrice",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		name: "Quantity List",
		description: "",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		name: "Order ID",
		description: "",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Order Sub Total",
		description: "",
		token: "total",
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
(function () {
  var products = [];
  for(var i = 0; i < this.getValueForToken("productIds").length; i++) {
    products.push({
      id: this.getValueForToken("productIds")[i],
      price: this.getValueForToken("productUnitPrice")[i],
      qty: this.getValueForToken("quantities")[i]
    });
  }
  window._mt_ready = function(){
     if (typeof(MyThings) != "undefined") {
        MyThings.Track({
             EventType: MyThings.Event.Conversion, 
             Action: "9902",
             Products: products, 
             TransactionReference: "" + this.getValueForToken("orderId") + "",
             TransactionAmount: "" + this.getValueForToken("total") + ""
       });
    }
  }
})();

  window.mtHost = (("https:" == document.location.protocol) ? "https://" + this.getValueForToken("subdomain") + "" : "http://" + this.getValueForToken("subdomain") + "") + ".mythings.com";
  window.mtAdvertiserToken = "" + this.getValueForToken("token") + "";
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
