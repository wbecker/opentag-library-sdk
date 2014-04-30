//:include tagsdk-current.js
var version = "";
var classPath = "qubit.qubitqtrackerresenduniversalvariable" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "QuBit QTracker - resend Universal Variable",
		async: true,
		description: "Ties in with QuBit QTracker, re-sending Universal Variables to QTracker when they exist on the page. This is useful when the Universal Variable is not declared before OpenTag.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n  (function() {\n    // Wait for UV and then resend data to QTracker\n    var wait = function() {\n      if (window.universal_variable) {\n        window._qtd = window._qtd || [];\n        window._qtd.push({\n          resendUniversalVariables: 1\n        });\n      } else {\n        setTimeout(wait, 200);\n      }\n    };\n    wait();\n  })();\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
		locationDetail: "",
		isPrivate: false,
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