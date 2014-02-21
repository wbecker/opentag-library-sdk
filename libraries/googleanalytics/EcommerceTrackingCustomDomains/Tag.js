//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.EcommerceTrackingCustomDomains", {
    config: {/*DATA*/
	id: 30160,
	name: "Ecommerce Tracking - Custom Domains",
	async: true,
	description: "Provides the full functionality of Google Analytics Ecommerce tracking with the option to specify custom domains.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 29172,
		name: "GA Profile Id",
		description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
		token: "PROFILE_ID",
		uv: ""
	},
	{
		id: 29173,
		name: "Store Name",
		description: "Partner or store affiliation (May be left blank)",
		token: "storeName",
		uv: ""
	},
	{
		id: 29174,
		name: "Order Id",
		description: "Internal unique order id number for this transaction.",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 29175,
		name: "Order Total",
		description: "Total dollar amount of the transaction.",
		token: "orderTotal",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 29176,
		name: "Order Tax Amount",
		description: "Tax amount of the transaction (Optional - can be given a blank value if not available)",
		token: "orderTax",
		uv: "universal_variable.transaction.tax"
	},
	{
		id: 29177,
		name: "Order Shipping",
		description: "Shipping charge for the transaction (Optional)",
		token: "orderShipping",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		id: 29178,
		name: "Order Shipping City",
		description: "City to associate with transaction.",
		token: "orderShippingCity",
		uv: "universal_variable.transaction.delivery.city"
	},
	{
		id: 29179,
		name: "Order Shipping State",
		description: "State to associate with transaction.",
		token: "orderShippingState",
		uv: "universal_variable.transaction.delivery.state"
	},
	{
		id: 29180,
		name: "Order Shipping Country",
		description: "Country to associate with transaction.",
		token: "orderShippingCountry",
		uv: "universal_variable.transaction.delivery.country"
	},
	{
		id: 29181,
		name: "Item SKUs",
		description: "Item's SKU code.",
		token: "itemSkus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 29182,
		name: "Item Names",
		description: "Product name. Required to see data in the product detail report.",
		token: "itemNames",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 29183,
		name: "Item Categories",
		description: "Product category (Optional)",
		token: "itemCategories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 29184,
		name: "Item Unit Prices",
		description: "Product price - use the discounted rate that the user is actually buying at.",
		token: "itemUnitPrices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 29185,
		name: "Item Quantities",
		description: "Purchase quantity",
		token: "itemQuantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 29186,
		name: "Domain Name",
		description: "Type the name of the domain you wish to track. For example www.example.com or subdomain.example.com",
		token: "domainName",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function() {
  window._gaq = window._gaq || [];
  _gaq.push(['_setAccount', '' + this.getValueForToken("PROFILE_ID") + '']);
  _gaq.push(['_setDomainName', '' + this.getValueForToken("domainName") + '']);
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
