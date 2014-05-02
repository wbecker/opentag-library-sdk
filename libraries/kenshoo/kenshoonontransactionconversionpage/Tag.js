//:include tagsdk-current.js
var tagVersion = "";
var classPath = "kenshoo.kenshoonontransactionconversionpage" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Kenshoo Non-Transaction Conversion Page",
		async: true,
		description: "A pixel to enable tracking non-transaction conversions",
		html: "<img src=\"//${kenshooNo}.xg4ken.com/media/redir.php?track=1&token=15823521-a685-4cf0-a837-88655491fc90&type=${pixelType}&val=0.0&orderId=&promoCode=&valueCurrency=${valueCurrency}\" width=\"1\" height=\"1\">",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/KenshooLogo.jpg",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Kenshoo Number",
			description: "The Kenshoo customer ID for the client",
			token: "kenshooNo",
			uv: ""
		}, {
			name: "Tracking Type",
			description: "The type of page/conversion the tracking pixel is applied to",
			token: "pixelType",
			uv: ""
		}, {
			name: "Value Currency",
			description: "The current currency",
			token: "valueCurrency",
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