//:include tagsdk-current.js
var version = "";
var classPath =
	"bazaarvoice.socialmeasurementconversionbeaconrequiredfieldsonly" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Social Measurement Conversion Beacon (Required fields only)",
		async: true,
		description: "To be placed on the conversion page in order to integrate Social Measurement with Bazaarvoice's other solutions.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/bazaarvoice.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "static.powerreviews.com/t/v1/tracker.js",
		usesDocWrite: false,
		parameters: [{
			name: "Bazaarvoice Merchant Group ID",
			description: "Should match Merchant Group ID from PowerReviews	Dashboard’s Configure Reviews section",
			token: "group_id",
			uv: ""
		}, {
			name: "Bazaarvoice Merchant ID",
			description: "Should match Merchant ID from PowerReviews	Dashboard’s Configure Reviews section",
			token: "merchant_id",
			uv: ""
		}, {
			name: "Bazaarvoice User ID",
			description: "Unique identifier for the customer writing the review or question/answer.",
			token: "merchant_user_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Bazaarvoice Order ID",
			description: "Unique order identifier; at least one character.",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Bazaarvoice Order Subtotal",
			description: "Order subtotal (excluding tax, shipping and handling, and discounts).",
			token: "order_subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Bazaarvoice Item ID list",
			description: "An array of all unique item IDs in the order.",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Bazaarvoice Item Quantity List",
			description: "An array of quantities associated with all unique item IDs in the order.",
			token: "qtys",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Bazaarvoice Item Sale Price list",
			description: "An array of sale prices for all unique item IDs in the order.",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
			try {
				var item_count = 0;
				var items = [];
				
				for (var i = 0; i < this.valueForToken("ids").length; i++) {
					items.push([
						this.valueForToken("ids")[i],
						"", "",
						this.valueForToken("qtys")[i],
						this.valueForToken("prices")[i]]);

					item_count += this.valueForToken("qtys")[i];
				}
				
				var tracker = POWERREVIEWS.tracker.createTracker({
					merchantGroupId: "" + this.valueForToken("group_id")
				});
				
				tracker.trackPageview("c", {
					merchantId: "" + this.valueForToken("merchant_id"),
					locale: "en_US",
					merchantUserId: "" + this.valueForToken("merchant_user_id"),
					orderId: "" + this.valueForToken("order_id"),
					orderSubtotal: "" + this.valueForToken("order_subtotal"),
					orderNumberOfItems: String(item_count),
					orderItems: items
				});
			} catch (e) {
				window.console && window.console.log(e);
			}
		/*~POST*/
	}
});