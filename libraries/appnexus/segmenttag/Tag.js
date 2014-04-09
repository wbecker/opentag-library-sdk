//:include tagsdk-current.js
var version = "";
var classPath = "appnexus.segmenttag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
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