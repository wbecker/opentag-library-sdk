//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("nextperformance.HomePageTag", {
    config: {/*DATA*/
	id: 24664,
	name: "Home Page Tag",
	async: true,
	description: "Tag to be inserted on the home page.",
	html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${id}\"></script>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NextPerformance.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 24187,
		name: "Account (zid)",
		description: "zid value provided by NextPerformance",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
