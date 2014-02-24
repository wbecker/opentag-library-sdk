//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.categorypage.Tag", {
    config: {/*DATA*/
	id: 33160,
	name: "Category Page",
	async: true,
	description: "Peerius tag for the category page (if using universal_variable: universal_variable.page.subcategory should be in - separated format e.g. * - * - * etc)",
	html: "",
	imageUrl: "http://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: false,
	url: "${client_id}.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		id: 32162,
		name: "Peerius Language",
		description: "Language of the page the tag is on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		id: 32185,
		name: "Peerius Client Name",
		description: "The name of the client for which the tag is to be implemented",
		token: "client_id",
		uv: ""
	},
	{
		id: 32204,
		name: "Peerius Subcategory Name",
		description: "The name of the subcategory for the current page",
		token: "subcategory",
		uv: "universal_variable.page.subcategory"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var PeeriusCallbacks = {
  track: {
    type: "category",
    lang: "" + this.getValueForToken("lang") + "",
    category: "" + this.getValueForToken("subcategory") + "".replace(/\s-\s/g,">")
  }
};
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
