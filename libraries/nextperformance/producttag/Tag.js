//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("nextperformance.producttag.Tag", {
    config: {
      /*DATA*/
	id: 24665,
	name: "Product Tag",
	async: true,
	description: "Tag to be inserted on the product pages, requires product ID.  For dynamic banners campaigns, the website's ID must be the same as in the product feed.",
	html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${zid}&pid=${productId}\"></script>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NextPerformance.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 24188,
		name: "Account (zid)",
		description: "zid value provided by NextPerformance",
		token: "zid",
		uv: ""
	},
	{
		id: 24189,
		name: "Product ID",
		description: "",
		token: "productId",
		uv: "universal_variable.product.id"
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
