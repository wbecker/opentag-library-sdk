//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("hellobar.HelloBar", {
    config: {/*DATA*/
	id: 24157,
	name: "Hello Bar",
	async: true,
	description: "The Hello bar is a Web Toolbar that Helps You Get More Clicks on Your Website. Delopy this simple notification bar to better engage your users.",
	html: "",
	imageUrl: "https://www.hellobar.com/assets/images/hello-bar-logo2.png",
	locationDetail: "",
	priv: false,
	url: "www.hellobar.com/hellobar.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 23657,
		name: "Account Id",
		description: "Your account id with Hello Bar",
		token: "ACCOUNT_ID",
		uv: ""
	},
	{
		id: 23658,
		name: "Bar Id",
		description: "Your Bar's id number",
		token: "BAR_ID",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
new HelloBar(this.getValueForToken("ACCOUNT_ID"),this.getValueForToken("BAR_ID"));
    }/*~POST*/
});
