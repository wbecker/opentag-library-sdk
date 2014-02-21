//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.OtherPage", {
    config: {/*DATA*/
	id: 33167,
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
		id: 32168,
		name: "Peerius Language",
		description: "Language of the page the tag is on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		id: 32188,
		name: "Peerius Client Name",
		description: "The name of the client for which the tag is to be implemented",
		token: "client_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var PeeriusCallbacks = PeeriusCallbacks || {};
PeeriusCallbacks.track = {
  type: "other", 
  lang: "" + this.getValueForToken("lang") + ""
}
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
