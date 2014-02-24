//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("appnexus.segmenttag.Tag", {
    config: {
      /*DATA*/
	id: 39667,
	name: "Segment Tag",
	async: true,
	description: "",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AppNexus.png",
	locationDetail: "",
	priv: false,
	url: "ib.adnxs.com/seg?add=${segment}&t=2",
	usesDocWrite: false,
	parameters: [
	{
		id: 38692,
		name: "AppNexus Segment",
		description: "Segment for AppNexus",
		token: "segment",
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
