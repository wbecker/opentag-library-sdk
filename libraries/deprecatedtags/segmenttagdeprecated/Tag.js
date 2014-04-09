//:include tagsdk-current.js
var version = "";
var classPath = "deprecatedtags.segmenttagdeprecated.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Segment Tag [deprecated]",
		async: true,
		description: "",
		html: "<img src=\"http://ib.adnxs.com/seg?add=${segment}&t=2\" width=\"1\" height=\"1\" alt=\"\" border=\"0\" style=\"display:none;\" />",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AppNexus.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "AppNexus Segment",
			description: "Segment id for use with AppNexus tag",
			token: "segment",
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
