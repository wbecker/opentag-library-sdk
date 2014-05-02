//:include tagsdk-current.js
var tagVersion = "";
var classPath = "opentag.blanktag" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Blank Tag",
		async: true,
		description: "A blank tag",
		html: "",
		imageUrl: "https://opentag.qubitproducts.com/QDashboard/img/logo.png",
		locationDetail: "",
		isPrivate: false,
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