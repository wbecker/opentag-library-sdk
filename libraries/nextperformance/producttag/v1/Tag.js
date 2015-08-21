//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("nextperformance.producttag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Product Tag",
		async: true,
		description: "Tag to be inserted on the product pages, requires product ID.  For dynamic banners campaigns, the website's ID must be the same as in the product feed.",
		html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${zid}&pid=${productId}\"></script><!--@SRC@-->",
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
		}, {
			name: "Product ID",
			description: "",
			token: "productId",
			uv: "universal_variable.product.id"
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