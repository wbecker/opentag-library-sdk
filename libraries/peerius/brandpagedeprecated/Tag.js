//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.brandpagedeprecated.Tag", {
    config: {/*DATA*/
	id: 33161,
	name: "Brand Page DEPRECATED",
	async: true,
	description: "DO NOT USE. Peerius tag for the brand page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: true,
	url: "pt.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		id: 32174,
		name: "Peerius Language",
		description: "The language of the page the tag is on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		id: 32175,
		name: "Peerius Page Brand",
		description: "The brand relating to the current brand category",
		token: "brand",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
PeeriusCallbacks.track = {
  type: "brand",
  lang: "" + this.getValueForToken("lang") + "",
  brand: "" + this.getValueForToken("brand") + ""
}
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
