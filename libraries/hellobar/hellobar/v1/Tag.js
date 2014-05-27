//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("hellobar.hellobar.v1.Tag", {
	config: {
		/*DATA*/
		name: "Hello Bar",
		async: true,
		description: "The Hello bar is a Web Toolbar that Helps You Get More Clicks on Your Website. Delopy this simple notification bar to better engage your users.",
		html: "",
		imageUrl: "https://www.hellobar.com/assets/images/hello-bar-logo2.png",
		locationDetail: "",
		isPrivate: false,
		url: "www.hellobar.com/hellobar.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account Id",
			description: "Your account id with Hello Bar",
			token: "ACCOUNT_ID",
			uv: ""
		}, {
			name: "Bar Id",
			description: "Your Bar's id number",
			token: "BAR_ID",
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
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		new HelloBar(this.valueForToken("ACCOUNT_ID"), this.valueForToken("BAR_ID"));

		/*~POST*/
	}
});