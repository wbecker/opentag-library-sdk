//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("vero.core.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Vero Core",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "API Key",
			description: "Your Vero API key",
			token: "api_key",
			uv: ""
		}]
		/*~DATA*/
      };
  },
	script: function() {
		/*SCRIPT*/
		window._veroq = window._veroq || [];
		window._veroq.push(['init', { api_key: this.valueForToken("api_key") }]);
		(function(){ var ve = document.createElement('script'); ve.type = 'text/javascript'; ve.async = true; ve.src = '//d3qxef4rp70elm.cloudfront.net/m.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ve, s); })();
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