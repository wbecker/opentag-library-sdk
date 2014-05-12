//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("nextperformance.homepagetag.Tag", {
	config: {
		/*DATA*/
		name: "Home Page Tag",
		async: true,
		description: "Tag to be inserted on the home page.",
		html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${id}\"></script><!--@SRC@-->",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NextPerformance.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Account (zid)",
			description: "zid value provided by NextPerformance",
			token: "id",
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