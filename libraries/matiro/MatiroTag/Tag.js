//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("matiro.MatiroTag", {
    config: {/*DATA*/
	id: 30172,
	name: "Matiro Tag",
	async: true,
	description: "Real-time web market advertising tag",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/matiro.jpg",
	locationDetail: "",
	priv: false,
	url: "asset.matiro.com/${pixel_id}?m1=${order_id}&m2=${order_amount}",
	usesDocWrite: true,
	parameters: [
	{
		id: 29212,
		name: "Matiro Pixel Identifier",
		description: "ID for the Matiro tracking pixel",
		token: "pixel_id",
		uv: ""
	},
	{
		id: 29213,
		name: "Matiro Order Identifier",
		description: "ID for the specific order",
		token: "order_id",
		uv: ""
	},
	{
		id: 29214,
		name: "Matiro Order Amount",
		description: "The amount of the current order",
		token: "order_amount",
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
