//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("appnexus.conversiontagsecure.Tag", {
    config: {
      /*DATA*/
	id: 26159,
	name: "Conversion Tag (Secure)",
	async: true,
	description: "",
	html: "<img src=\"https://secure.adnxs.com/px?id=${appnexus_id}&seg=${appnexus_segment}&t=1\" height=\"1\" width=\"1\" alt=\"\" border=\"0\" style=\"display:none;\" />",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 25660,
		name: "AppNexus ID",
		description: "",
		token: "appnexus_id",
		uv: ""
	},
	{
		id: 25661,
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
