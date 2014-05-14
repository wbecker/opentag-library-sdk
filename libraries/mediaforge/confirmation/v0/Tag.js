//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mediaforge.confirmation.v0.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation",
		async: true,
		description: "To be place on order confirmation pages",
		html: "<script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}/?orderNumber=${order_id}&price=${order_total}\"></script><!--@SRC@-->",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "mediaFORGE Merchant ID",
			description: "The ID relating you to mediaFORGE",
			token: "merchant_id",
			uv: ""
		}, {
			name: "Order ID",
			description: "The ID relating to the order",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "The total for the order excluding tax & shipping (sub-total)",
			token: "order_total",
			uv: "universal_variable.transaction.subtotal"
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
		/*~POST*/
	}
});
