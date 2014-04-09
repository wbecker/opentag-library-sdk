//:include tagsdk-current.js
var version = "";
var classPath = "visualdna.postcodesync" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Postcode Sync",
		async: true,
		description: "This tag should fire on any successful login or registration of a user with a known postcode. The tag must have a dependency on the Visual DNA Page View Report tag.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		}, {
			name: "Postcode",
			description: "Postcode",
			token: "postcode",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];
		window.VDNA.queue.push({
			apiKey: "" + this.valueForToken("api_key") + "",
			method: "reportConversion",
			args: ["sync", {
				"partner_user_id": "" + this.valueForToken("postcode") + "",
				"partner_user_id_type": "postcode"
			}]
		});
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