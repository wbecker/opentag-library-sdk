//:include tagsdk-current.js
var version = "";
var classPath = "peerius.homepagewithsmartrecs" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Home Page (with SmartRecs)",
		async: true,
		description: "Home page tag with SmartRecs. Uses global function renderRecsHome. Need to make sure renderRecsHome is defined on the home page in the window.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "${client_name}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		parameters: [{
			name: "Peerius Client Name",
			description: "The client name that Peerius refers to you as",
			token: "client_name",
			uv: ""
		}, {
			name: "Peerius Language",
			description: "The language that the user is viewing the site with",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Channel",
			description: "The channel that the user is viewing the site from",
			token: "channel",
			uv: ""
		}, {
			name: "Peerius User Name",
			description: "The user's full name",
			token: "user_name",
			uv: "universal_variable.user.name"
		}, {
			name: "Peerius Email",
			description: "The user's email",
			token: "email",
			uv: "universal_variable.user.email"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.PeeriusCallbacks = {
			track: {
				type: "home",
				lang: "" + this.valueForToken("lang"),
				channel: "" + this.valueForToken("channel"),
				user: {
					name: "" + this.valueForToken("user_name"),
					email: "" + this.valueForToken("email")
				}
			},
			smartRecs: function(jsonData) {
				if (window.renderRecsHome) {
					window.renderRecsHome(jsonData);
				}
			}
		}
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});