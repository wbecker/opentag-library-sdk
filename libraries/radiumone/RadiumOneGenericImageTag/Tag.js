//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("radiumone.RadiumOneGenericImageTag", {
    config: {/*DATA*/
	id: 36197,
	name: "RadiumOne - Generic image tag",
	async: true,
	description: "A generic RadiumOne image tag.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/radiumone.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35326,
		name: "RadiumOne Tag ID",
		description: "",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function() {
  var img = new Image();
  img.src = "http://rs.gwallet.com/r1/pixel/x" + this.getValueForToken("id") + "r" + Math.round(Math.random()*10000000);
}());


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
