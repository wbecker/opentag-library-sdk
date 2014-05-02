//:include tagsdk-current.js
var tagVersion = "";
var classPath = "jquery.synchronous" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Synchronous",
		async: false,
		description: "Load any specific version of jQuery synchronously",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/jQuery.png",
		locationDetail: "",
		isPrivate: false,
		url: "ajax.googleapis.com/ajax/libs/jquery/${version}/jquery.min.js",
		usesDocWrite: false,
		parameters: [{
			name: "Version",
			description: "jQuery version e.g. 1.8.3",
			token: "version",
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