//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("nextperformance.TransactionTag", {
    config: {/*DATA*/
	id: 24667,
	name: "Transaction Tag",
	async: true,
	description: "Tag to be inserted on the order confirmation page, requires order ID, order number and amount excluding VAT.",
	html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${zid}&id=${orderId}&mt=${total}\"></script>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NextPerformance.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 24191,
		name: "Account (zid)",
		description: "zid value provided by NextPerformance",
		token: "zid",
		uv: ""
	},
	{
		id: 24192,
		name: "Order ID",
		description: "",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 24193,
		name: "Order Total",
		description: "",
		token: "total",
		uv: "universal_variable.transaction.total"
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
