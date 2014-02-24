//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("deprecatedtags.segmenttagdeprecated.Tag", {
    config: {/*DATA*/
	id: 26161,
	name: "Segment Tag [deprecated]",
	async: true,
	description: "",
	html: "<img src=\"http://ib.adnxs.com/seg?add=${segment}&t=2\" width=\"1\" height=\"1\" alt=\"\" border=\"0\" style=\"display:none;\" />",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AppNexus.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 25664,
		name: "AppNexus Segment",
		description: "Segment id for use with AppNexus tag",
		token: "segment",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
