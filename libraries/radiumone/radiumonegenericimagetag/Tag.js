//:include tagsdk-current.js
var version = "";
var classPath = "radiumone.radiumonegenericimagetag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "RadiumOne - Generic image tag",
		async: true,
		description: "A generic RadiumOne image tag.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/radiumone.png",
		locationDetail: "",
		isPrivate: false,
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
	script: function() {
	/*SCRIPT*/

(function() {
  var img = new Image();
  img.src = "http://rs.gwallet.com/r1/pixel/x" + this.valueForToken("id") + "r" + Math.round(Math.random()*10000000);
}());
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
