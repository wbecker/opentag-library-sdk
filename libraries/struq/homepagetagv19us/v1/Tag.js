//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("struq.homepagetagv19us.v1.Tag", {
	config: {
		/*DATA*/
		name: "Homepage Tag v1.9 (US)",
		async: true,
		description: "",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Struq Homepage Tracking ID",
			description: "The Struq Homepage tracking pixel ID",
			token: "pixelid",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window._struqPI = window._struqPI || [];
		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("pixelid"),
			route: '/s/ga/',
			collectData: false,
			options: {
				timeoutMs: 2000,
				firstPartyDomain: '',
				firstPartyCookie: '',
				firstPartyUid: ''
			}
		}]);

		window.struq = document.createElement('script');
		struq.type = 'text/javascript';
		struq.async = true;
		struq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
			'media.struq.com/content/scripts/Struq_Us_Pixel_Injector_min_v1-9.js';
		document.getElementsByTagName('head')[0].appendChild(struq);

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