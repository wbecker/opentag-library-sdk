//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mediaforge.confirmation.Tag", {
    config: {
      /*DATA*/
	id: 39169,
	name: "Confirmation",
	async: true,
	description: "To be place on order confirmation pages",
	html: "<script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}/?orderNumber=${order_id}&price=${order_total}\"></script>\n",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38200,
		name: "mediaFORGE Merchant ID",
		description: "The ID relating you to mediaFORGE",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 38201,
		name: "Order ID",
		description: "The ID relating to the order",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38202,
		name: "Order Total",
		description: "The total for the order excluding tax & shipping (sub-total)",
		token: "order_total",
		uv: "universal_variable.transaction.subtotal"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
