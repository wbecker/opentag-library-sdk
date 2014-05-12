//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("struq.productpagetagv19us.Tag", {
	config: {
		/*DATA*/
		name: "Product Page Tag v1.9 (US)",
		async: true,
		description: "",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Product Page Pixel ID",
			description: "",
			token: "pixelid",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
			token: "productid",
			uv: "universal_variable.product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window._struqPI = window._struqPI || [];
		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("pixelid"),
			route: '/s/sa/',
			collectData: false,
			data: [{
				title: "detail",
				pid: "" + this.valueForToken("productid")
			}],
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