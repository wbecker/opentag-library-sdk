//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("qubit.zzdeleteme.v1.Tag", {
	config: {
		/*DATA*/
		name: "zzdeleteme",
		async: true,
		description: "Charlie didn't think to just write a custom script for his testing.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
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
		console.log("" + this.valueForToken("param"))

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