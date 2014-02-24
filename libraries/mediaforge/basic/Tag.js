//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mediaforge.basic.Tag", {
    config: {
      /*DATA*/
	id: 39167,
	name: "Basic",
	async: true,
	description: "The Basic Tag might be placed on a home/landing page where no product or category specific information is available.",
	html: "<script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}\"></script>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediaFORGE.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38197,
		name: "mediaFORGE Merchant ID",
		description: "The ID that relates you to mediaFORGE",
		token: "merchant_id",
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
