//:include tagsdk-current.js
var tagVersion = "";
var classPath = "kenshoo.orderpixel" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Order Pixel",
		async: true,
		description: ".",
		html: "<img src=\"https://2110.xg4ken.com/media/redir.php?track=1&token=15823521-a685-4cf0-a837-88655491fc90&type=Orders&val=0.0&orderId=&promoCode[numberofitems]+[Product-Catergory1]+[Product-Catergory2]+[Product-Catergory3]=&valueCurrency=GBP\" width=\"1\" height=\"1\">",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [

		]
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