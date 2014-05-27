//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("appnexus.segmenttag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Segment Tag",
		async: true,
		description: "",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AppNexus.png",
		locationDetail: "",
		isPrivate: false,
		url: "ib.adnxs.com/seg?add=${segment}&t=2",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "AppNexus Segment",
			description: "Segment for AppNexus",
			token: "segment",
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