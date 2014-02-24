//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.ecommercetrackingwithdomainlinker.Tag", {
    config: {/*DATA*/
	id: 24659,
	name: "E-Commerce Tracking (With Domain Linker)",
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
		id: 24163,
		name: "GA Profile Id",
		description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
		token: "PROFILE_ID",
		uv: ""
	},
	{
		id: 24164,
		name: "Store Name",
		description: "Partner or store affiliation (May be left blank)",
		token: "storeName",
		uv: ""
	},
	{
		id: 24165,
		name: "Order Id",
		description: "Internal unique order id number for this transaction.",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 24166,
		name: "Order Total",
		description: "Total dollar amount of the transaction.",
		token: "orderTotal",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 24167,
		name: "Order Tax Amount",
		description: "Tax amount of the transaction (Optional - can be given a blank value if not available)",
		token: "orderTax",
		uv: "universal_variable.transaction.tax"
	},
	{
		id: 24168,
		name: "Order Shipping",
		description: "Shipping charge for the transaction (Optional)",
		token: "orderShipping",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		id: 24169,
		name: "Order Shipping City",
		description: "City to associate with transaction.",
		token: "orderShippingCity",
		uv: "universal_variable.transaction.delivery.city"
	},
	{
		id: 24170,
		name: "Order Shipping State",
		description: "State to associate with transaction.",
		token: "orderShippingState",
		uv: "universal_variable.transaction.delivery.state"
	},
	{
		id: 24171,
		name: "Order Shipping Country",
		description: "Country to associate with transaction.",
		token: "orderShippingCountry",
		uv: "universal_variable.transaction.delivery.country"
	},
	{
		id: 24172,
		name: "Item SKUs",
		description: "Item's SKU code.",
		token: "itemSkus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 24173,
		name: "Item Names",
		description: "Product name. Required to see data in the product detail report.",
		token: "itemNames",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 24174,
		name: "Item Categories",
		description: "Product category (Optional)",
		token: "itemCategories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 24175,
		name: "Item Unit Prices",
		description: "Product price - use the discounted rate that the user is actually buying at.",
		token: "itemUnitPrices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 24176,
		name: "Item Quantities",
		description: "Purchase quantity",
		token: "itemQuantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function() {
  window._gaq = window._gaq || [];
  _gaq.push(['_setAccount', '' + this.getValueForToken("PROFILE_ID") + '']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

  _gaq.push(['_addTrans',
    '' + this.getValueForToken("orderId") + '',
    '' + this.getValueForToken("storeName") + '',
    '' + this.getValueForToken("orderTotal") + '',
    '' + this.getValueForToken("orderTax") + '',         
    '' + this.getValueForToken("orderShipping") + '',
    '' + this.getValueForToken("orderShippingCity") + '',
    '' + this.getValueForToken("orderShippingState") + '',
    '' + this.getValueForToken("orderShippingCountry") + ''
  ]);
  var i, ii;
  for (i = 0, ii = this.getValueForToken("itemSkus").length; i < ii; i += 1) {
    _gaq.push(['_addItem',
      '' + this.getValueForToken("orderId") + '',
      this.getValueForToken("itemSkus")[i],
      this.getValueForToken("itemNames")[i],
      this.getValueForToken("itemCategories")[i],
      this.getValueForToken("itemUnitPrices")[i],
      this.getValueForToken("itemQuantities")[i]
    ]);
  }
  _gaq.push(['_trackTrans']); 

  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
