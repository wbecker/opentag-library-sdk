//:include tagsdk-current.js
var version = "";
var classPath = "peerius.otherpagewithsmartrecs" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Other Page (with SmartRecs)",
		async: true,
		description: "Peerius tag for all other pages. Uses the renderRecsLanding function, so requires window.renderRecsLanding to be defined on all pages the tag is on.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "${client_name}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		parameters: [{
			name: "Peerius Client Name",
			description: "The name that Peerius can refer to you as",
			token: "client_name",
			uv: ""
		}, {
			name: "Peerius User Language",
			description: "The language the user uses on the current page",
			token: "lang",
			uv: "universal_variable.user.language"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		var PeeriusCallbacks = {
			track: {
				type: "other",
				lang: "" + this.valueForToken("lang") + ""
			},
			smartRecs: function(jsonData) {
				if (window.renderRecsLanding) {
					window.renderRecsLanding(jsonData);
				}
			}
		};
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});