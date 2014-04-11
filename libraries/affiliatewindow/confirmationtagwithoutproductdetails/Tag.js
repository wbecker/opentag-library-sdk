//:include tagsdk-current.js
var version = "";
var classPath = "affiliatewindow.confirmationtagwithoutproductdetails" +
	version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Tag without Product Details",
		async: true,
		description: "Confirmation page script for pages that do not send product information.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AffiliateWindow.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "www.dwin1.com/${merchant_id}.js",
		usesDocWrite: true,
		parameters: [{
			name: "Affiliate Window Merchant ID",
			description: "Affiliate Window Merchant ID",
			token: "merchant_id",
			uv: ""
		}, {
			name: "Affiliate Window Test Mode",
			description: "Enter 0 for production, 1 for testing",
			token: "testmode",
			uv: ""
		}, {
			name: "Affiliate Window Commission Group",
			description: "Enter DEFAULT if no specific commission group is used.",
			token: "commission_group",
			uv: ""
		}, {
			name: "Order Total",
			description: "The total cost of the order",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order Id",
			description: "A unique id for the order",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Voucher",
			description: "The voucher by which the order was discounted",
			token: "voucher",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Order Currency",
			description: "The currency the order was paid with",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}]
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
					amount: this.valueForToken("order_total"),
					currency: "" + this.valueForToken("currency") + "",
					orderRef: "" + this.valueForToken("order_id") + "",
					parts: "" + this.valueForToken("commission_group") + ":" + this.valueForToken(
						"order_total"),
					voucher: "" + this.valueForToken("voucher") + "",
					test: "" + this.valueForToken("testmode") + ""
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