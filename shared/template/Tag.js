//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("PACKAGE_NAME.Tag", {
	getDefaultConfig: function () {
		/*DATA*/
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
