//:include tagsdk-current.js
var version = "";
var classPath = "radiumone.radiumonegenericimagetag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "RadiumOne - Generic image tag",
		async: true,
		description: "A generic RadiumOne image tag.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n  var img = new Image();\n  img.src = \"http://rs.gwallet.com/r1/pixel/x${id}r\" + Math.round(Math.random()*10000000);\n}());\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/radiumone.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "RadiumOne Tag ID",
			description: "",
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