//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("chango.OptimizationPixel", {
    config: {/*DATA*/
	id: 37657,
	name: "Optimization Pixel",
	async: true,
	description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Chango.png",
	locationDetail: "",
	priv: false,
	url: "//cc.chango.com/static/o.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 36657,
		name: "Account ID",
		description: "Your Chango Account ID",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var __cho__ = {"pid":this.getValueForToken("id")};
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
