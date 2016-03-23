//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("cedexis.radar.v1.Tag", {
	config: {
		/*DATA*/
		name: "radar",
		async: true,
		description: "Radar measures and collects Page Load Times, from around the globe. Used by Cedexis for DNS dynamic routing.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Cedexis customer ID",
			description: "Customer ID given by Cedexis.",
			token: "customer_id",
			uv: "universal_variable.cedexis.customer_id"
		}]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
		var a = function () {
			var a = window.document.createElement('script');
			a.type = 'text/javascript';
			a.async = 'async';
			a.src = '//' + ((window.location.protocol === 'https:') ? 's3.amazonaws.com/cdx-radar/' :
					'radar.cedexis.com/') + '01-'+this.valueForToken("customer_id")+'-radar10.min.js';
			window.document.body.appendChild(a);
		};
		if (window.addEventListener) {
			window.addEventListener('load', a, false);
		}
		else if (window.attachEvent) {
			window.attachEvent('onload', a);
		}
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
