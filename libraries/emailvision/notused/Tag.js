//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("emailvision.notused.Tag", {
	config: {
		/*DATA*/
		name: "Not Used",
		async: true,
		description: "",
		html: "",
		imageUrl: ".",
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

		function setCookie(domain, label, val, minutes) {
			var txpDate = new Date();
			txpDate.setTime(txpDate.getTime() + (minutes * 60 * 1000));
			document.cookie = label + "=" + escape(val) + ";domain=" + domain +
				";path =/" + (!minutes ? "" : ";expires=" + txpDate.toGMTString());
		}

		setCookie(".office.co.uk",
			"opentag_emailvision_timestamp", (new Date()).getTime(),
			60 * 24 * 2);

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