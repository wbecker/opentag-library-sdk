//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("webtrends.deprecated.v1.Tag", {
	config: {
		/*DATA*/
		name: "DEPRECATED",
		async: true,
		description: "",
		html: "<script type=\"text/javascript\" src=\"/cs/static/js/webtrends/webtrends.js\"></script><!--@SRC@--><!-- Version: 9.3.0 -->\n\n\n\n<script type=\"text/javascript\">	\n//<![CDATA[\n  var _tag=new WebTrends();\n  _tag.dcsGetId();\n//]]>	\n</script>\n\n<script type=\"text/javascript\">\n//<![CDATA[\n  _tag.dcsCustom=function(){\n    // Add custom parameters here.\n    //_tag.DCSext.param_name=param_value;\n  }	\n  _tag.dcsCollect();\n//]]>	\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
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