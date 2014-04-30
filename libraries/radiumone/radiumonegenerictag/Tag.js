//:include tagsdk-current.js
var version = "";
var classPath = "radiumone.radiumonegenerictag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "RadiumOne - Generic tag",
		async: true,
		description: "RadiumOne is changing the face of online advertising through a unique combination of programmatic buying, proprietary data, patent-pending intelligence algorithms, and multi-channel capabilities.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n  var img = new Image();\n  img.src = \"http://rs.gwallet.com/r1/pixel/x${id}r\" + Math.round(Math.random()*10000000);\n}());\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/radiumone.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [

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