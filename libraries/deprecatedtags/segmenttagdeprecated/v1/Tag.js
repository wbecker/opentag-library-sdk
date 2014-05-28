//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("deprecatedtags.segmenttagdeprecated.v1.Tag", {
	config: {
		/*DATA*/
		name: "Segment Tag [deprecated]",
		async: true,
		description: "",
		html: "<img src=\"http://ib.adnxs.com/seg?add=${segment}&t=2\" width=\"1\" height=\"1\" alt=\"\" border=\"0\" style=\"display:none;\" />",
		imageUrl: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "AppNexus Segment",
			description: "Segment id for use with AppNexus tag",
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