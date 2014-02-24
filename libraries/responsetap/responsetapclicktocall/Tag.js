//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("responsetap.responsetapclicktocall.Tag", {
	config: {
		/*DATA*/
		name: "Response Tap Click to Call",
		async: true,
		description: "Response Tap click to call script that replaces the phone number on your page.",
		html: "",
		imageUrl: "http://www.responsetap.com/templates/psd2html/images/rtlogo.png",
		locationDetail: "",
		priv: false,
		url: "static.responsetap.com/static/scripts/rTapTrack.min.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "Account Id",
			description: "Your Response Tap account id, generally a 3-4 digit number",
			token: "ACCOUNT_ID",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
window.adiInit = "" + this.getValueForToken("ACCOUNT_ID") + ""
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
