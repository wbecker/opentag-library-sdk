//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("buyat.conversiontagdeprecated.v1.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tag DEPRECATED",
		async: true,
		description: "",
		html: "<img src=\"https://www.perfiliate.com/brains/process.php?PROGID=${id}&TYPE=pp&AMOUNT=${order_total}&TRANSID=${order_id}&PPDATA=${ppdata}\" height=\"1\" width=\"1\"/>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/blank.gif",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "BuyAt ID",
			description: "",
			token: "id",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "BuyAt Conversion Data",
			description: "Custom data specified by BuyAt",
			token: "ppdata",
			uv: ""
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