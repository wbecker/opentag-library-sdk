//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("cedexis.radar.v1.Tag", {
	config: {
		/*DATA*/
		name: "Radar",
		async: true,
		description: "We collect billions of data about Internet performances directly from end-users all over the world in real-time. Thanks to this data we locate outages and congested zones on the 50 000 networks that constitute the Internet.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "http://www.cedexis.com",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
			{
				name: "Customer ID",
				token: "CID",
				description: "This is your Cedexis Customer ID.",
				defaultValue: 10816
			}
		]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
	(function(c,b){
		if (!/\bMSIE 6/.exec(c.navigator.userAgent)){
			var a = b.createElement("script");
			a.async = !0;
			a.src = "//radar.cedexis.com/1/" + instance.valueForToken("CID") + "/radar.js";
			b.body.appendChild(a)
		}
	})(window,document);
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
