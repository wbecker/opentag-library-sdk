//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("gosquared.gosquaredallpages.Tag", {
	config: {
		/*DATA*/
		name: "GoSquared - all pages",
		async: true,
		description: "Real-time analytics for your website. GoSquared helps you understand and improve your online presence.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/gosquared.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Account ID",
			description: "The ID specific to your GoSquared account.",
			token: "account_no",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

var GoSquared = {};
GoSquared.acct = "" + this.getValueForToken("account_no") + "";
(function(w) {
  function gs() {
    w._gstc_lt = +(new Date);
    var d = document;
    var g = d.createElement("script");
    g.type = "text/javascript";
    g.async = true;
    g.src = "//d1l6p2sc9645hc.cloudfront.net/tracker.js";
    var s = d.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(g, s);
  }
  w.addEventListener ? w.addEventListener("load", gs, false) : w.attachEvent("onload", gs);
})(window); 


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
