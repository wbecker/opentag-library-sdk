//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("appnexus.appnexusthankyoupagewithcustomdomain.Tag", {
    config: {
      /*DATA*/
	id: 36178,
	name: "AppNexus - Thank you page with custom domain",
	async: true,
	description: "To be placed on the confirmation page, allowing for a custom domain.",
	html: "<img src=\"https://${domain}/px?id=${id}&seg=${segment}&order_id=${order_id}&value=${subtotal}&t=${t}\" width=\"1\" height=\"1\" /> ",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AppNexus.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35260,
		name: "AppNexus ID",
		description: "",
		token: "id",
		uv: ""
	},
	{
		id: 35261,
		name: "Domain",
		description: "The domain of the tag you wish to use. e.g. ib.adnxs.com",
		token: "domain",
		uv: ""
	},
	{
		id: 35262,
		name: "Segment",
		description: "",
		token: "segment",
		uv: ""
	},
	{
		id: 35263,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 35264,
		name: "Order Subtotal",
		description: "",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 35265,
		name: "T value",
		description: "e.g. 2",
		token: "t",
		uv: ""
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
