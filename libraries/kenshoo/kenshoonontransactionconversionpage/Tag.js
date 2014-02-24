//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("kenshoo.kenshoonontransactionconversionpage.Tag", {
    config: {/*DATA*/
	id: 30174,
	name: "Kenshoo Non-Transaction Conversion Page",
	async: true,
	description: "A pixel to enable tracking non-transaction conversions",
	html: "<img src=\"//${kenshooNo}.xg4ken.com/media/redir.php?track=1&token=15823521-a685-4cf0-a837-88655491fc90&type=${pixelType}&val=0.0&orderId=&promoCode=&valueCurrency=${valueCurrency}\" width=\"1\" height=\"1\">",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/KenshooLogo.jpg",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 29224,
		name: "Kenshoo Number",
		description: "The Kenshoo customer ID for the client",
		token: "kenshooNo",
		uv: ""
	},
	{
		id: 29225,
		name: "Tracking Type",
		description: "The type of page/conversion the tracking pixel is applied to",
		token: "pixelType",
		uv: ""
	},
	{
		id: 29226,
		name: "Value Currency",
		description: "The current currency",
		token: "valueCurrency",
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
