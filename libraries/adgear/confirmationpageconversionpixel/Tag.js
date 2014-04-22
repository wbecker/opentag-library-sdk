//:include tagsdk-current.js
var version = "";
var classPath = "adgear.confirmationpageconversionpixel" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Page Conversion Pixel",
		async: true,
		description: "Build audience profiles for both groups of customers, allowing to overlay that data on top of inventory operated by networks using the platform, or on top of third party ad exchange inventory. Retargeting based on conversion events, previous clicks on ads and other customer lifecycle events are all made possible in a simple, integrated interface.",
		html: "",
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

		(function() {
			if (typeof ADGEAR == "undefined") {
				var proto = "http:";
				var host = "cdna.runadtag.com";
				var bucket = "";
				if (window.location.protocol == "https:") {
					proto = "https:";
					host = "a.runadtag.com";
					bucket = "";
				}
				ADGEAR_DONT_SAY_HELLO = true;

				var __scS = document.createElement("script");
				__scS.type = "text/javascript";
				__scS.src = proto + '//' + host + '/adgear.js/current/adgear.js';
				document.getElementsByTagName("body")[0].appendChild(__scS);

				//waiting for script to load
				var waitForAdgear = function() {
					if (typeof ADGEAR != "undefined" && document.readyState == "complete") {
						ADGEAR.tags.conversion.init();
						ADGEAR.tags.conversion.embed({
							"id": "" + this.valueForToken("accountid") + "",
							"chip_key": "" + this.valueForToken("chipkey") + "",
							"revenue": null
						});
					} else {
						setTimeout(waitForAdgear, 100);
					}
				};
				waitForAdgear();
			}
		})();
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