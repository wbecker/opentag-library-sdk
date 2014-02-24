//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("googleanalytics.ecommercetrackingrequiredfieldsonly.Tag", {
	config: {
		/*DATA*/
		name: "E-Commerce Tracking (Required Fields Only)",
		async: true,
		description: "Before Google Analytics can report ecommerce activity for your website, you must enable ecommerce tracking on the profile settings page for your website.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "GA Profile ID",
			description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
			token: "PROFILE_ID",
			uv: ""
		},
		{
			name: "Order Id",
			description: "Internal unique order id number for this transaction.",
			token: "orderId",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Order Total",
			description: "Total amount of the transaction.",
			token: "orderTotal",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Item SKU's",
			description: "Item's SKU code.",
			token: "itemSkus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		},
		{
			name: "Item Names",
			description: "Product name. Required to see data in the product detail report.",
			token: "itemNames",
			uv: "universal_variable.transaction.line_items[#].product.name"
		},
		{
			name: "Item Unit Prices",
			description: "Product price - use the discounted rate that the user is actually buying at.",
			token: "itemUnitPrices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "Item Quantities",
			description: "Quantity list of all the items",
			token: "itemQuantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function() {
  window._gaq = window._gaq || [];
  _gaq.push(['_setAccount', '' + this.getValueForToken("PROFILE_ID") + '']);
  _gaq.push(['_trackPageview']);

  _gaq.push(['_addTrans',
    '' + this.getValueForToken("orderId") + '',
    '',
    '' + this.getValueForToken("orderTotal") + '',
    '',         
    '',
    '',
    '',
    ''
  ]);
  var i, ii;
  for (i = 0, ii = this.getValueForToken("itemSkus").length; i < ii; i += 1) {
    _gaq.push(['_addItem',
      '' + this.getValueForToken("orderId") + '',
      this.getValueForToken("itemSkus")[i],
      this.getValueForToken("itemNames")[i],
      '',
      this.getValueForToken("itemUnitPrices")[i],
      this.getValueForToken("itemQuantities")[i]
    ]);
  }
  _gaq.push(['_trackTrans']); 

  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
