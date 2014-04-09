//:include tagsdk-current.js
var version = "";
var classPath = "matiro.matirotag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Matiro Tag",
		async: true,
		description: "Real-time web market advertising tag",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/matiro.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "asset.matiro.com/${pixel_id}?m1=${order_id}&m2=${order_amount}",
		usesDocWrite: true,
		parameters: [{
			name: "Matiro Pixel Identifier",
			description: "ID for the Matiro tracking pixel",
			token: "pixel_id",
			uv: ""
		}, {
			name: "Matiro Order Identifier",
			description: "ID for the specific order",
			token: "order_id",
			uv: ""
		}, {
			name: "Matiro Order Amount",
			description: "The amount of the current order",
			token: "order_amount",
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