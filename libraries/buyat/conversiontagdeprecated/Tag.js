//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("buyat.conversiontagdeprecated.Tag", {
    config: {/*DATA*/
	id: 27159,
	name: "Conversion Tag DEPRECATED",
	async: true,
	description: "",
	html: "<img src=\"https://www.perfiliate.com/brains/process.php?PROGID=${id}&TYPE=pp&AMOUNT=${order_total}&TRANSID=${order_id}&PPDATA=${ppdata}\" height=\"1\" width=\"1\"/>",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/blank.gif",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 26668,
		name: "BuyAt ID",
		description: "",
		token: "id",
		uv: ""
	},
	{
		id: 26669,
		name: "Order Total",
		description: "",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 26670,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 26671,
		name: "BuyAt Conversion Data",
		description: "Custom data specified by BuyAt",
		token: "ppdata",
		uv: ""
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
