//:include tagsdk-current.js
var tagVersion = "";
var classPath = "yepnope.yepnope101" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "yepnope 1.0.1",
		async: true,
		description: "yepnope is an asynchronous conditional resource loader that's super-fast, and allows you to load only the scripts that your users need.",
		html: "",
		imageUrl: "http://dummyimage.com/100x100/000/fff.png&text=yepnope",
		locationDetail: "",
		isPrivate: false,
		url: "cdnjs.cloudflare.com/ajax/libs/yepnope/1.0.1/yepnope.min.js",
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