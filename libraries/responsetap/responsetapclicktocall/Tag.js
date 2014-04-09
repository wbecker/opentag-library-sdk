//:include tagsdk-current.js
var version = "";
var classPath = "responsetap.responsetapclicktocall.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Response Tap Click to Call",
		async: true,
		description: "Response Tap click to call script that replaces the phone number on your page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/ResponseTap.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Account Id",
			description: "Your Response Tap account id, generally a 3-4 digit number",
			token: "ACCOUNT_ID",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var adiInit = "" + this.valueForToken("ACCOUNT_ID") + "";
		var adiRVO = true;
		var adiFunc = null;
		(function() {
			var adiSrc = document.createElement("script");
			adiSrc.type = "text/javascript";
			adiSrc.async = true;
			adiSrc.src = ("https:" == document.location.protocol ? "https://static-ssl" : "http://static-cdn") + ".responsetap.com/static/scripts/rTapTrack.min.js";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(adiSrc, s);
		})();
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