//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("qubit.uvtestpageinformation.Tag", {
	config: {
		/*DATA*/
		name: "UV Test - Page Information",
		async: true,
		description: "Test details about the current page",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
		locationDetail: "",
		priv: false,
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

console.log("" + this.getValueForToken("a") + "");
console.log("" + this.getValueForToken("b") + "");
console.log("" + this.getValueForToken("c") + "");
console.log("" + this.getValueForToken("d") + "");
console.log("" + this.getValueForToken("e") + "");


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
