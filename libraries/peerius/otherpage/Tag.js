//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("peerius.otherpage.Tag", {
    config: {
      /*DATA*/
	name: "Other Page",
	async: true,
	description: "Peerius tag for all other pages",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: false,
	url: "${client_id}.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		name: "Peerius Language",
		description: "Language of the page the tag is on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		name: "Peerius Client Name",
		description: "The name of the client for which the tag is to be implemented",
		token: "client_id",
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
var PeeriusCallbacks = PeeriusCallbacks || {};
PeeriusCallbacks.track = {
  type: "other", 
  lang: "" + this.getValueForToken("lang") + ""
}
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
