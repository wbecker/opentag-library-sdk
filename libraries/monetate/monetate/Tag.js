//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("monetate.monetate.Tag", {
	config: {
		/*DATA*/
		name: "Monetate",
		async: true,
		description: "Generic Monetate tag to be added on all pages.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/monetate-logo.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Monetate ID",
			description: "Your unique id, e.g. a-64624593",
			token: "id",
			uv: ""
		},
		{
			name: "Monetate Domain",
			description: "e.g. qubitproducts.com",
			token: "domain",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

var monetateT = new Date().getTime();
(function() {
    var p = document.location.protocol;
    if (p == "http:" || p == "https:") {
        var m = document.createElement('script'); m.type = 'text/javascript'; 
        m.async = true; 
        m.src = (p == "https:" ? "https://s" : "http://") + "b.monetate.net/js/1/" + this.getValueForToken("id") + "/p/" + this.getValueForToken("domain") + "/" + Math.floor((monetateT + 2961942) / 3600000) + "/g";
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(m, s);
    }
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
