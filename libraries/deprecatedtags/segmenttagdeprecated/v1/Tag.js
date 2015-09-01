//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("deprecatedtags.segmenttagdeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Segment Tag [deprecated]",
		async: true,
		description: "",
		html: "<img src=\"http://ib.adnxs.com/seg?add=${segment}&t=2\" width=\"1\" height=\"1\" alt=\"\" border=\"0\" style=\"display:none;\" />",
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
		};
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