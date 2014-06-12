//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("audiencescience.gatewaytag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Gateway Tag",
		async: true,
		description: "",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"//js.revsci.net/gateway/gw.js?csid=${clientID}&auto=t\"></script>",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
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