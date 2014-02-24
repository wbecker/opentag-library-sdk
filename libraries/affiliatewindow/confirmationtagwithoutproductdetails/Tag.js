//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("affiliatewindow.confirmationtagwithoutproductdetails.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Tag without Product Details",
		async: true,
		description: "Confirmation page script for pages that do not send product information.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AffiliateWindow.jpg",
		locationDetail: "",
		priv: false,
		url: "www.dwin1.com/${merchant_id}.js",
		usesDocWrite: true,
		parameters: [
		{
			name: "Affiliate Window Merchant ID",
			description: "Affiliate Window Merchant ID",
			token: "merchant_id",
			uv: ""
		},
		{
			name: "Affiliate Window Test Mode",
			description: "Enter 0 for production, 1 for testing",
			token: "testmode",
			uv: ""
		},
		{
			name: "Affiliate Window Commission Group",
			description: "Enter DEFAULT if no specific commission group is used.",
			token: "commission_group",
			uv: ""
		},
		{
			name: "Order Total",
			description: "The total cost of the order",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Order Id",
			description: "A unique id for the order",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Voucher",
			description: "The voucher by which the order was discounted",
			token: "voucher",
			uv: "universal_variable.transaction.voucher"
		},
		{
			name: "Order Currency",
			description: "The currency the order was paid with",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
var AWIN = {
  Tracking: {
    Sale: {
      amount: this.getValueForToken("order_total"),
      currency: "" + this.getValueForToken("currency") + "",
      orderRef: "" + this.getValueForToken("order_id") + "",
      parts: "" + this.getValueForToken("commission_group") + ":" + this.getValueForToken("order_total"),
      voucher: "" + this.getValueForToken("voucher") + "",
      test: "" + this.getValueForToken("testmode") + ""
    }
  }
};
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
