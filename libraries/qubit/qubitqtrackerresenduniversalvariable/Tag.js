//:include tagsdk-current.js
var tagVersion = "";
var classPath = "qubit.qubitqtrackerresenduniversalvariable" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "QuBit QTracker - resend Universal Variable",
		async: true,
		description: "Ties in with QuBit QTracker, re-sending Universal Variables to QTracker when they exist on the page. This is useful when the Universal Variable is not declared before OpenTag.",
		html: "",
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
			// Wait for UV and then resend data to QTracker
			var wait = function() {
				if (window.universal_variable) {
					window._qtd = window._qtd || [];
					window._qtd.push({
						resendUniversalVariables: 1
					});
				} else {
					setTimeout(wait, 200);
				}
			};
			wait();
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