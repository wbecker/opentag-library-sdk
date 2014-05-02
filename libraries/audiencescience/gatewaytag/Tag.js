//:include tagsdk-current.js
var version = "";
var classPath = "audiencescience.gatewaytag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Gateway Tag",
		async: true,
		description: "",
		html: "<script type=\"text/javascript\" src=\"//js.revsci.net/gateway/gw.js?csid=${clientID}&auto=t\"></script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/audiencescience.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		parameters: [{
			name: "CSID",
			description: "advertiser-code (CSID) provided by AudienceScience",
			token: "clientID",
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
		/*~POST*/
	}
});