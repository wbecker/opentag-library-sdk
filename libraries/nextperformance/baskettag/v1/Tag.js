//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("nextperformance.baskettag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Basket Tag",
		async: true,
		description: "Tag to be inserted on the shopping carts pages, pre-confirmation.",
		html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${zid}\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account (zid)",
			description: "zid value provided by NextPerformance",
			token: "zid",
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