//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("audiencescience.gatewaytag.Tag", {
    config: {
      /*DATA*/
	id: 24663,
	name: "Gateway Tag",
	async: true,
	description: "",
	html: "<script type=\"text/javascript\" src=\"//js.revsci.net/gateway/gw.js?csid=${clientID}&auto=t\"></script>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/audiencescience.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		id: 24186,
		name: "CSID",
		description: "advertiser-code (CSID) provided by AudienceScience",
		token: "clientID",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
