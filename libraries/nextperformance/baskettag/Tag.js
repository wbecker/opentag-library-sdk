//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("nextperformance.baskettag.Tag", {
    config: {
      /*DATA*/
	id: 24666,
	name: "Basket Tag",
	async: true,
	description: "Tag to be inserted on the shopping carts pages, pre-confirmation.",
	html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${zid}\"></script>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NextPerformance.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 24190,
		name: "Account (zid)",
		description: "zid value provided by NextPerformance",
		token: "zid",
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
