//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("tradedoubler.ConfirmationPageNoProductDetails", {
    config: {/*DATA*/
	id: 36180,
	name: "Confirmation Page - No Product Details",
	async: true,
	description: "Lightweight version of the confirmation page with no product details at all.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/TradeDoubler.jpg",
	locationDetail: "",
	priv: false,
	url: "tb${tracking_type}.tradedoubler.com/report?organization=${org_id}&event=${evt_id}&orderNumber=${order_id}&orderValue=${order_total}&currency=${currency}",
	usesDocWrite: false,
	parameters: [
	{
		id: 35269,
		name: "TradeDoubler Tracking Type",
		description: "Enter hard coded value such as s for sales tracking or l for lead tracking",
		token: "tracking_type",
		uv: ""
	},
	{
		id: 35270,
		name: "TradeDoubler Organization ID",
		description: "Your TradeDoubler Organization ID, provided by TradeDoubler",
		token: "org_id",
		uv: ""
	},
	{
		id: 35271,
		name: "TradeDoubler Event ID",
		description: "Provided by TradeDoubler, this ID is used for reporting.",
		token: "evt_id",
		uv: ""
	},
	{
		id: 35272,
		name: "Order ID",
		description: "The unique order reference for this transaction",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 35273,
		name: "Order Value",
		description: "The value of this particular order",
		token: "order_total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 35274,
		name: "Currency",
		description: "The currency in which this order was paid",
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
