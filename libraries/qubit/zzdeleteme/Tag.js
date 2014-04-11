//:include tagsdk-current.js
var version = "";
var classPath = "qubit.zzdeleteme" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "zzdeleteme",
		async: true,
		description: "Charlie didn't think to just write a custom script for his testing.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adform.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "test2",
			description: "param",
			token: "param",
			uv: ""
		}, {
			name: "test2",
			description: "param",
			token: "param",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		console.log("" + this.valueForToken("param") + "")

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