//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("qubit.uvtestpageinformation.Tag", {
    config: {
      /*DATA*/
	id: 23661,
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
		id: 23205,
		name: "Page Environment",
		description: "",
		token: "a",
		uv: "universal_variable.page.environment"
	},
	{
		id: 23206,
		name: "Page Variation",
		description: "",
		token: "b",
		uv: "universal_variable.page.variation"
	},
	{
		id: 23207,
		name: "Page Category",
		description: "",
		token: "c",
		uv: "universal_variable.page.category"
	},
	{
		id: 23208,
		name: "Page Sub-Category",
		description: "",
		token: "d",
		uv: "universal_variable.page.subcategory"
	},
	{
		id: 23209,
		name: "Page Revision",
		description: "",
		token: "e",
		uv: "universal_variable.page.revision"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

console.log("" + this.getValueForToken("a") + "");
console.log("" + this.getValueForToken("b") + "");
console.log("" + this.getValueForToken("c") + "");
console.log("" + this.getValueForToken("d") + "");
console.log("" + this.getValueForToken("e") + "");


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
