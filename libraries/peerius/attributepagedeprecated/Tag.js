//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("peerius.attributepagedeprecated.Tag", {
    config: {
      /*DATA*/
	name: "Attribute Page DEPRECATED",
	async: true,
	description: "DO NOT USE. Peerius tag for the attribute page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: true,
	url: "pt.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		name: "Peerius Language",
		description: "Language of the page with the tag on it",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		name: "Peerius Category Attribute Name",
		description: "The name of the attribute of the category i.e. \"style\"",
		token: "name",
		uv: ""
	},
	{
		name: "Peerius Category Attribute Value",
		description: "The value of the Peerius category attribute name",
		token: "value",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
var PeeriusCallbacks = {
  track: {
    type: "attribute",
    lang: "" + this.getValueForToken("lang") + "",
    attribute: {
      name: "" + this.getValueForToken("name") + "",
      value: "" + this.getValueForToken("value") + ""
    }
  }
};
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
