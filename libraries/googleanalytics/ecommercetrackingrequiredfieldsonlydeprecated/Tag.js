//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.ecommercetrackingrequiredfieldsonlydeprecated.Tag", {
    config: {/*DATA*/
	id: 24660,
	name: "E-Commerce Tracking (Required Fields Only) DEPRECATED",
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
		id: 24177,
		name: "Profile ID",
		description: "",
		token: "PROFILE_ID",
		uv: ""
	},
	{
		id: 24178,
		name: "Order ID",
		description: "",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 24179,
		name: "Order Total",
		description: "",
		token: "orderTotal",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 24180,
		name: "Product SKU List",
		description: "",
		token: "itemSkus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 24181,
		name: "Product Unit Price List",
		description: "",
		token: "itemUnitPrices",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		id: 24182,
		name: "Product Quantity List",
		description: "",
		token: "itemQuantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

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
      'N/A',
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


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
