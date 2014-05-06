//:include tagsdk-current.js
var tagVersion = "";
var classPath = "peerius.otherpage" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Other Page",
		async: true,
		description: "Peerius tag for all other pages",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		parameters: [{
			name: "Peerius Language",
			description: "Language of the page the tag is on",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Client Name",
			description: "The name of the client for which the tag is to be implemented",
			token: "client_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.PeeriusCallbacks = window.PeeriusCallbacks || {};
		window.PeeriusCallbacks.track = {
			type: "other",
			lang: "" + this.valueForToken("lang")
		}

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});