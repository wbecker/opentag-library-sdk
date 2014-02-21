//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("marinsoftware.ConversionPixelWithParametersAsync", {
    config: {/*DATA*/
	id: 39158,
	name: "Conversion Pixel with parameters - async",
	async: true,
	description: "The Javascript will take the values specified below in the array of conversion metrics and send them to Marin along with the Cookie ID (UUID) created by the Click JavaScript; this allows Marin to join Clicks and Conversion data together. This version has the most customisation for parameters.",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38165,
		name: "Conversion Type",
		description: "",
		token: "conversion_type",
		uv: ""
	},
	{
		id: 38166,
		name: "Product SKUs",
		description: "",
		token: "product_skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 38167,
		name: "Product Prices",
		description: "",
		token: "product_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 38168,
		name: "Product Categories",
		description: "",
		token: "product_categories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 38169,
		name: "Product Quantities",
		description: "",
		token: "product_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 38170,
		name: "Transaction Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38171,
		name: "Transaction Order Total",
		description: "",
		token: "order_total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 38172,
		name: "Transaction Order Tax",
		description: "",
		token: "order_tax",
		uv: "universal_variable.transaction.tax"
	},
	{
		id: 38173,
		name: "Transaction Shipping",
		description: "",
		token: "order_shipping",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		id: 38174,
		name: "Transaction Order Currency",
		description: "",
		token: "order_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 38175,
		name: "City",
		description: "",
		token: "city",
		uv: "universal_variable.transaction.delivery.city"
	},
	{
		id: 38176,
		name: "State",
		description: "",
		token: "state",
		uv: "universal_variable.transaction.delivery.state"
	},
	{
		id: 38177,
		name: "Country",
		description: "",
		token: "country",
		uv: "universal_variable.transaction.delivery.country"
	},
	{
		id: 38178,
		name: "Marin Tracker ID",
		description: "",
		token: "marin_tracker_id",
		uv: ""
	},
	{
		id: 38179,
		name: "Affiliation",
		description: "",
		token: "affiliation",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var _mTrack = window._mTrack || [];
  var items = [];
  for (var i = 0; i < this.getValueForToken("product_skus").length; i++) {
    items.push({
      convType: '' + this.getValueForToken("conversion_type") + '',
      product: this.getValueForToken("product_skus")[i],
      price: this.getValueForToken("product_prices")[i],
      category: this.getValueForToken("product_categories")[i],
      quantity: this.getValueForToken("product_quantities")[i]
    });
  }
  _mTrack.push(['addTrans', {
    orderId: '' + this.getValueForToken("order_id") + '',
    affiliation: '' + this.getValueForToken("affiliation") + '',
    total: this.getValueForToken("order_total"),
    tax: this.getValueForToken("order_tax"),
    shipping: this.getValueForToken("order_shipping"),
    city: '' + this.getValueForToken("city") + '',
    state: '' + this.getValueForToken("state") + '',
    country: '' + this.getValueForToken("country") + '',
    currency: '' + this.getValueForToken("order_currency") + '',
    items: items
  }]);
  
  _mTrack.push(['processOrders']);

  (function() {
    var mClientId = '' + this.getValueForToken("marin_tracker_id") + '';
    var mProto = ('https:' == document.location.protocol ? 'https://' : 'http://');
    var mHost = 'tracker.marinsm.com';
    var mt = document.createElement('script');
    mt.type = 'text/javascript'; mt.async = true;
    mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
    var fscr = document.getElementsByTagName('script')[0];
    fscr.parentNode.insertBefore(mt, fscr);
  })();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
