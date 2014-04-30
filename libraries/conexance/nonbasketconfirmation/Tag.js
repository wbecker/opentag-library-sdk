//:include tagsdk-current.js
var version = "";
var classPath = "conexance.nonbasketconfirmation" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Non basket/confirmation",
		async: true,
		description: "Conexance tag for non basket/confirmation pages. Requires tag ID (specifies which page).",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n\n  var require = function(url, cb) {\n    var script = document.createElement(\"script\");\n    script.type = \"text/javascript\";\n    if (script.readyState) { //IE\n      script.onreadystatechange = function () {\n        if (script.readyState == \"loaded\" || script.readyState == \"complete\") {\n          script.onreadystatechange = null;\n          cb();\n        }\n      };\n    } else { //Others\n      script.onload = cb;\n    }\n    script.src = url;\n    document.getElementsByTagName(\"head\")[0].appendChild(script);\n  };\n\n  require(\"${web1by1_functions_script}\", function() {\n    require(\"${web1by1_config_script}\", function() {\n      window.w1x1.iSet(${tag_type}, \"${value}\");\n    });\n  });\n\n}());\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Conexance.gif",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Tag Type",
			description: "The type of the tag i.e. what value is getting picked up (for example '1' refers to product pages)",
			token: "tag_type",
			uv: ""
		}, {
			name: "Value",
			description: "The value picked up from the tag_type specific page i.e. product SKU",
			token: "value",
			uv: ""
		}, {
			name: "Web1by1 Configuration Parameters Production/Test",
			description: "The full URL  of your client-specific Web1by1 Configuration Parameters script (Production or test)",
			token: "web1by1_config_script",
			uv: ""
		}, {
			name: "Web1by1 Functions Script",
			description: "The full URL of the Web1by1 Functions script (i.e. http://www.your-website.com/w1x1.jpg)",
			token: "web1by1_functions_script",
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