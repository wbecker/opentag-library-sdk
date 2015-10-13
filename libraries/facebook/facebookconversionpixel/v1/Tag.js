//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("facebook.facebookconversionpixel.v1.Tag", {
	config: {
		/*DATA*/
		name: "Facebook Conversion Pixel",
		async: true,
		description: "The Facebook Conversion Pixel code has been updated to enable advertisers to track multiple pixels within the same web page. Previously if you had multiple versions of the Conversion Tracking pixel on the same page caused collisions and led to data loss.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "FB Country Code",
			description: "e.g. en_UK ( if not sure, use : en_US )",
			token: "url_locale",
			uv: "universal_variable.locale"
		},{
			name: "Pixel ID",
			description: "Client Specific (e.g. 6007143437659)",
			token: "pixel_id",
			uv: "universal_variable.facebook.conversion.pixel_id"
		}]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
		var _this = this;
		(function(){
			var _fbq=window._fbq||(window._fbq = []);
			if(!_fbq.loaded){
				var fbds=document.createElement('script');
				fbds.async = true;
				fbds.src='//connect.facebook.net/' + _this.valueForToken("url_locale") + '/fbds.js';
				var s=document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(fbds,s);
				_fbq.loaded = true;
			}
			_fbq.push(['addPixelId', '' + _this.valueForToken("pixel_id")]);
		})();
		window._fbq=window._fbq||[];
		window._fbq.push(['track','PixelInitialized',{}]);
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
