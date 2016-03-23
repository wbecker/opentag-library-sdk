//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("cedexis.radar.v1.Tag", {
	config: {
		/*DATA*/
		name: "Radar",
		async: true,
		description: "Radar Tag converts every end-users to monitoring probes, without impacting their experience, to measure page load time along with any CDN, Cloud or datacenter’s availability, latency and delivery.",
		html: "",
		locationDetail: "",
		isPrivate: false,
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
