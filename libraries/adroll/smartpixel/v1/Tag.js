//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("adroll.smartpixel.v1.Tag", {
	config: {
		/*DATA*/
		name: "SmartPixel",
		async: true,
		description: "Asynchronously and independently registers a callback within the browser that will be called only at the end of the rendering process - adds an image to the head tag.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AdRoll.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		parameters: [{
			name: "AdRoll Advertiser ID",
			description: "ID for the Advertiser",
			token: "adroll_adv_id",
			uv: ""
		}, {
			name: "AdRoll Pixel ID",
			description: "ID for the AdRoll pixel",
			token: "adroll_pix_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window.adroll_adv_id = "" + this.valueForToken("adroll_adv_id");
		window.adroll_pix_id = "" + this.valueForToken("adroll_pix_id");
		window.__adroll_loaded = true;
		var scr = document.createElement("script");
		var host = (("https:" === document.location.protocol) ?
			"https://s.adroll.com" : "http://a.adroll.com");
		scr.setAttribute('async', 'true');
		scr.type = "text/javascript";
		scr.src = host + "/j/roundtrip.js";
		((document.getElementsByTagName('head') || [null])[0] ||
			document.getElementsByTagName('script')[0].parentNode)
			.appendChild(scr);

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