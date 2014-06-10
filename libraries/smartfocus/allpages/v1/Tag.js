//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("smartfocus.allpages.v1.Tag", {
	config: {
		/*DATA*/
		name: "All Pages",
		async: true,
		description: "",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "js.advisor.smartfocus.com/advisor.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "endpoint URL",
			description: "Endpoint URL",
			token: "endpoint",
			uv: ""
		}, {
			name: "username",
			description: "username",
			token: "user",
			uv: ""
		}, {
			name: "accid",
			description: "ccid",
			token: "accid",
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
		window._advisorq = window._advisorq || [];
		window._advisorq.push({
			_setAccount: {
				endpoint: "" + this.valueForToken("endpoint") + "",
				username: "" + this.valueForToken("user") + "",
				accid: "" + this.valueForToken("accid") + ""
			}
		});
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});