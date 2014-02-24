//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("liveclicker.liveclickerconfirmationtagwithallparameters.Tag", {
    config: {/*DATA*/
	id: 33657,
	name: "Liveclicker - Confirmation tag with all parameters",
	async: true,
	description: "Should be placed on the confirmation page only.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Liveclicker.png",
	locationDetail: "",
	priv: false,
	url: "https://sc.liveclicker.net/service/track?kind=order&account_id=${account_id}&value=${subtotal}&order_id=${order_id}&currency=${currency}",
	usesDocWrite: false,
	parameters: [
	{
		id: 32657,
		name: "Liveclicker Account ID",
		description: "",
		token: "account_id",
		uv: ""
	},
	{
		id: 32658,
		name: "Subtotal",
		description: "",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 32659,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 32660,
		name: "Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
