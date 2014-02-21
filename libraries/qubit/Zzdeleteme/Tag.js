//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("qubit.Zzdeleteme", {
    config: {/*DATA*/
	id: 35657,
	name: "zzdeleteme",
	async: true,
	description: "Charlie didn't think to just write a custom script for his testing.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adform.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35318,
		name: "test",
		description: "test",
		token: "param",
		uv: ""
	},
	{
		id: 35319,
		name: "test2",
		description: "param",
		token: "param",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
console.log("" + this.getValueForToken("param") + "");

    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
