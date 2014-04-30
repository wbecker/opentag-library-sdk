//:include tagsdk-current.js
var version = "";
var classPath = "adgear.confirmationpageconversionpixel" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Page Conversion Pixel",
		async: true,
		description: "Build audience profiles for both groups of customers, allowing to overlay that data on top of inventory operated by networks using the platform, or on top of third party ad exchange inventory. Retargeting based on conversion events, previous clicks on ads and other customer lifecycle events are all made possible in a simple, integrated interface.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n  if (typeof ADGEAR == \"undefined\") {\n    var proto = \"http:\";\n    var host = \"cdna.runadtag.com\";\n    var bucket = \"\";\n    if (window.location.protocol == \"https:\") {\n      proto = \"https:\";\n      host = \"a.runadtag.com\";\n      bucket = \"\";\n    }\n    ADGEAR_DONT_SAY_HELLO = true;\n\n    var __scS = document.createElement(\"script\");\n    __scS.type = \"text/javascript\";\n    __scS.src = proto + '//' + host + '/adgear.js/current/adgear.js';\n    document.getElementsByTagName(\"body\")[0].appendChild(__scS);\n\n    //waiting for script to load\n    var waitForAdgear = function() {\n      if (typeof ADGEAR != \"undefined\" && document.readyState == \"complete\") {\n        ADGEAR.tags.conversion.init();\n        ADGEAR.tags.conversion.embed({\n          \"id\": \"${accountid}\",\n          \"chip_key\": \"${chipkey}\",\n          \"revenue\": null\n        });\n      } else {\n        setTimeout(waitForAdgear, 100);\n      }\n    };\n    waitForAdgear();\n  }\n})();\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adgear.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		parameters: [{
			name: "Account ID",
			description: "The account ID for AdGear",
			token: "accountid",
			uv: ""
		}, {
			name: "Chip Key",
			description: "The chip key value",
			token: "chipkey",
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