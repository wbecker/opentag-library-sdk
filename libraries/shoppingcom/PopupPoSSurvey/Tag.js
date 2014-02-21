//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("shoppingcom.PopupPoSSurvey", {
    config: {/*DATA*/
	id: 35193,
	name: "Popup PoS Survey",
	async: true,
	description: "This will show a point of sale survey for customers to share their feedback about their shopping experience.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Shopping.com.png",
	locationDetail: "",
	priv: false,
	url: "https://www.shopping.com/xMSJ?pt=js&direct=1&mid=${merchant_id}&lid=1",
	usesDocWrite: false,
	parameters: [
	{
		id: 34381,
		name: "Shopping.com Merchant ID",
		description: "The merchant ID which represents your site.",
		token: "merchant_id",
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
