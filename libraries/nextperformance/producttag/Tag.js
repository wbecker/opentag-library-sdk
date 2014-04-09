//:include tagsdk-current.js
var version = "";
var classPath = "nextperformance.producttag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Product Tag",
		async: true,
		description: "Tag to be inserted on the product pages, requires product ID.  For dynamic banners campaigns, the website's ID must be the same as in the product feed.",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${zid}&pid=${productId}\"></script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NextPerformance.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Account (zid)",
			description: "zid value provided by NextPerformance",
			token: "zid",
			uv: ""
		},
		{
			name: "Product ID",
			description: "",
			token: "productId",
			uv: "universal_variable.product.id"
		}
	]
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
