//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("appnexus.conversiontag.Tag", {
    config: {
      /*DATA*/
	name: "Conversion Tag",
	async: true,
	description: "",
	html: "<img src=\"http://ib.adnxs.com/px?id=${appnexus_id}&seg=${appnexus_segment}&t=1\" width=\"1\" height=\"1\" style=\"display:none;\" border=\"0\" alt=\"\" />",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AppNexus.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "AppNexus ID",
		description: "",
		token: "appnexus_id",
		uv: ""
	},
	{
		name: "AppNexus Segment",
		description: "",
		token: "appnexus_segment",
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
