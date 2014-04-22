//:include tagsdk-current.js
var version = "";
var classPath = "mediaforge.basic" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Basic",
		async: true,
		description: "The Basic Tag might be placed on a home/landing page where no product or category specific information is available.",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}\"></script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediaFORGE.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "mediaFORGE Merchant ID",
			description: "The ID that relates you to mediaFORGE",
			token: "merchant_id",
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