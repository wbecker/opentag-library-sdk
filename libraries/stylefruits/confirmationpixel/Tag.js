//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("stylefruits.confirmationpixel.Tag", {
    config: {/*DATA*/
	id: 39681,
	name: "Confirmation Pixel",
	async: true,
	description: "The stylefruits tracking code has to be integrated on the final page of your checkout process. The \ncode has to be generated dynamically for every order.",
	html: "<img src=\"//clicks.stylefruits.de/reg?partner=${partner_id}&price=${order_total}&order=${order_id}\"  alt=\"stylefruits.de\" width=\"1\" height=\"1\" /> \n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/StyleFruits.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38775,
		name: "StyleFruits Partner ID",
		description: "This is your partner-ID which must not be modified.",
		token: "partner_id",
		uv: ""
	},
	{
		id: 38776,
		name: "Transaction Order Sub-Total",
		description: "The gross value of the customer’s  shopping basket",
		token: "order_total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 38777,
		name: "Transaction Order ID",
		description: "The dynamically  generated, unique order-ID of your shop  system.",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
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
