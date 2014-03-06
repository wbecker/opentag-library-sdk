//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("responsetap.responsetapclicktocall.Tag", {
	config: {
		/*DATA*/
		name: "Response Tap Click to Call",
		async: true,
		description: "Response Tap click to call script that replaces the phone number on your page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/ResponseTap.png",
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

  var adiInit = "" + this.getValueForToken("ACCOUNT_ID") + "";
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
