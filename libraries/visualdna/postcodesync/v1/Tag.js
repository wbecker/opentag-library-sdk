//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("visualdna.postcodesync.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Postcode Sync",
		async: true,
		description: "This tag should fire on any successful login or registration of a user with a known postcode. The tag must have a dependency on the Visual DNA Page View Report tag.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
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
      };
  },
	script: function() {
		/*SCRIPT*/
		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];
		window.VDNA.queue.push({
			apiKey: "" + this.valueForToken("api_key"),
			method: "reportConversion",
			args: ["sync", {
				"partner_user_id": "" + this.valueForToken("postcode"),
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