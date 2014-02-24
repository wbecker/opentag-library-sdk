//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("marinsoftware.conversioncapturecode.Tag", {
    config: {
      /*DATA*/
	name: "Conversion Capture Code",
	async: true,
	description: "The Javascript will take the values specified below in the array of conversion metrics and send them to Marin along with the Cookie ID (UUID) created by the Click JavaScript; this allows Marin to join Clicks and Conversion data together.",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "Product IDs",
		description: "Product IDs",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		name: "Product Categories",
		description: "Product Categories",
		token: "product_categories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		name: "Product Quantities",
		description: "Product Quantities",
		token: "product_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		name: "Order ID",
		description: "Order ID",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Order Total",
		description: "Order Total",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		name: "Currency",
		description: "Currency",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		name: "Marin Tracking ID",
		description: "Marin Tracking ID",
		token: "tracking_id",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function () {
  window._mTrack = window._mTrack || [];
  
  var productIDs = "";
  var productCategories = "";
  var productQuantities = "";
  
  for (var i = 0; i < this.getValueForToken("product_ids").length; i++) 
  {
    if (i > 0)
    {
      productIDs += "^";
      productCategories += "^";
      productQuantities += "^";
    }

    productIDs += this.getValueForToken("product_ids")[i];
    productCategories += this.getValueForToken("product_categories")[i];
    productQuantities += this.getValueForToken("product_quantities")[i];
  }

  var items = [{convType: "orders", price: this.getValueForToken("order_total"), orderId:  "" + this.getValueForToken("order_id") + "", product: productIDs, category: productCategories, quantity: productQuantities}];


  window._mTrack.push(['addTrans', {

      currency: "" + this.getValueForToken("currency") + "",
      items: items
  }]);
  
  window._mTrack.push(['processOrders']);
  (function() {
      var mClientId = "" + this.getValueForToken("tracking_id") + "";
      var mProto = ('https:' == document.location.protocol ? 'https://' : 'http://');
      var mHost = 'tracker.marinsm.com';
      var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true; mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
      var fscr = document.getElementsByTagName('script')[0]; fscr.parentNode.insertBefore(mt, fscr);
  })();
})();


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
