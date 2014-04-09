//:include tagsdk-current.js
var version = "";
var classPath = "liveclicker.liveclickerconfirmationtagwithallparameters" +
	version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Liveclicker - Confirmation tag with all parameters",
		async: true,
		description: "Should be placed on the confirmation page only.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Liveclicker.png",
		locationDetail: "",
		isPrivate: false,
		url: "https://sc.liveclicker.net/service/track?kind=order&account_id=${account_id}&value=${subtotal}&order_id=${order_id}&currency=${currency}",
		usesDocWrite: false,
		parameters: [{
			name: "Liveclicker Account ID",
			description: "",
			token: "account_id",
			uv: ""
		}, {
			name: "Subtotal",
			description: "",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Currency",
			description: "",
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
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});