//:include tagsdk-current.js
var version = "";
var classPath = "qubit.uvtestpageinformation.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "UV Test - Page Information",
		async: true,
		description: "Test details about the current page",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Page Environment",
			description: "",
			token: "a",
			uv: "universal_variable.page.environment"
		},
		{
			name: "Page Variation",
			description: "",
			token: "b",
			uv: "universal_variable.page.variation"
		},
		{
			name: "Page Category",
			description: "",
			token: "c",
			uv: "universal_variable.page.category"
		},
		{
			name: "Page Sub-Category",
			description: "",
			token: "d",
			uv: "universal_variable.page.subcategory"
		},
		{
			name: "Page Revision",
			description: "",
			token: "e",
			uv: "universal_variable.page.revision"
		}
	]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/

console.log("" + this.valueForToken("a") + "");
console.log("" + this.valueForToken("b") + "");
console.log("" + this.valueForToken("c") + "");
console.log("" + this.valueForToken("d") + "");
console.log("" + this.valueForToken("e") + "");
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
