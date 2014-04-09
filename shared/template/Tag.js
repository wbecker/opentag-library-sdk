//:include tagsdk-current.js
var version = "";
var classPath = "PACKAGE_NAME" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		imageUrl: "https://example.com/img/example-logo.png",
		description: "DESCRIPTION.",
		name: "TAG_NAME",
		async: true,
		isPrivate: false,
		html: "",
		parameters: [
			
		]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
		// write your code here that will be executed after all 
		// filters, urls, html injections and dependencies pass/execute.
	/*~SCRIPT*/
	},
	pre: function() {
	/*PRE*/
		//write here pre execution code
	/*~PRE*/
	},
	post: function() {
	/*POST*/
		//write here post execution code
	/*~POST*/
	}
});
