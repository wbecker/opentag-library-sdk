//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleuniversalanalytics.ecommercetagconfirmationpage.Tag", {
    config: {
      /*DATA*/
	id: 36663,
	name: "Ecommerce Tag - Confirmation Page",
	async: true,
	description: "Ecommerce tracking allows you to measure the number of transactions and revenue that your website generates. Place this tag on a confirmation page only.",
	html: "\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35689,
		name: "Web Property ID",
		description: "Google Analytics Web Property ID for the Google Web Property you wish to track",
		token: "web_property_id",
		uv: ""
	},
	{
		id: 35690,
		name: "Order ID",
		description: "The order ID associated with this transaction",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 35691,
		name: "Store Name",
		description: "The store or affiliation from which this transaction occurred - or just a custom string",
		token: "store_name",
		uv: ""
	},
	{
		id: 35692,
		name: "Revenue",
		description: "Specifies the total revenue associated with the transaction. Should include shipping and tax",
		token: "revenue",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 35693,
		name: "Shipping Cost",
		description: "The value of the shipping charge associated with this order",
		token: "shipping",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		id: 35694,
		name: "Tax Value",
		description: "The amount of tax charged on this order",
		token: "tax",
		uv: "universal_variable.transaction.tax"
	},
	{
		id: 35695,
		name: "Currency",
		description: "The currency which this transaction was paid in",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 35696,
		name: "Item Name List",
		description: "An array of names associated with each product in this order",
		token: "item_names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 35697,
		name: "Item SKU List",
		description: "An array containing SKUs associated with each product in this order",
		token: "item_skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 35698,
		name: "Item Category List",
		description: "An array containing the categories associated with each product in this order",
		token: "item_cats",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 35699,
		name: "Item Price List",
		description: "An array containing unit prices paid for each product in this order",
		token: "item_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 35700,
		name: "Item Quantities List",
		description: "An array containing quantities associated with each product in this order",
		token: "item_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 35701,
		name: "Site URL",
		description: "Web site URL, without the 'www.'",
		token: "url",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', '' + this.getValueForToken("web_property_id") + '', '' + this.getValueForToken("url") + '');
ga('send', 'pageview');
ga('require', 'ecommerce', 'ecommerce.js');

ga('ecommerce:addTransaction', {
  'id': "" + this.getValueForToken("order_id") + "", //Required
  'affiliation': "" + this.getValueForToken("store_name") + "",
  'revenue': "" + this.getValueForToken("revenue") + "",
  'shipping': "" + this.getValueForToken("shipping") + "",
  'tax': "" + this.getValueForToken("tax") + "",
  'currencyCode': "" + this.getValueForToken("currency") + ""
});

//Loop through transaction items. Don't pollute the globe!
(function(){
  for(var i = 0; i < ' + this.getValueForToken("item_names") + '.length; i++){
    ga('ecommerce:addItem', {
      'id': "' + this.getValueForToken("order_id") + '", //Required
      'name': String(' + this.getValueForToken("item_names") + '[i]), //Required
      'sku': String(' + this.getValueForToken("item_skus") + '[i]),
      'category': String(' + this.getValueForToken("item_cats") + '[i]),
      'price': String(' + this.getValueForToken("item_prices") + '[i]),
      'quantity': String(' + this.getValueForToken("item_quantities") + '[i])
    });
  }
})();

ga('ecommerce:send');



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
