//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("radiumone.radiumonegenericimagetag.Tag", {
    config: {
      /*DATA*/
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
		name: "RadiumOne Tag ID",
		description: "",
		token: "id",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function() {
  var img = new Image();
  img.src = "http://rs.gwallet.com/r1/pixel/x" + this.getValueForToken("id") + "r" + Math.round(Math.random()*10000000);
}());


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
