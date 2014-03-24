//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("audiencescience.gatewaytag.Tag", {
	config: {
		/*DATA*/
		name: "Gateway Tag",
		async: true,
		description: "",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"//js.revsci.net/gateway/gw.js?csid=${clientID}&auto=t\"></script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/audiencescience.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: true,
		parameters: [
		{
			name: "CSID",
			description: "advertiser-code (CSID) provided by AudienceScience",
			token: "clientID",
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
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
