//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("nextperformance.homepagetag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Home Page Tag",
		async: true,
		description: "Tag to be inserted on the home page.",
		html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${id}\"></script><!--@SRC@-->",
		imageUrl: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
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