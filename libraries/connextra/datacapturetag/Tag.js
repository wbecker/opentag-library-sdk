//:include tagsdk-current.js
var version = "";
var classPath = "connextra.datacapturetag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Data Capture Tag",
		async: true,
		description: "The Data Capture feature will allow Connextra to locate content relating to the Account Name and the \namount bet or deposited from your website and store into Connextra stats for analytical purposes. For \ndata protection, you are required to encrypt any sensitive information about your customers.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/connextra.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Connextra Client ID",
			description: "Your Connextra account ID",
			token: "client_id",
			uv: ""
		}, {
			name: "Connextra Page Type",
			description: "The page type you want this view to track as",
			token: "page_type",
			uv: ""
		}, {
			name: "Connextra Config Server",
			description: "The Connextra address which holds your configuration data.",
			token: "conf_server",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var cxt_conf = cxt_conf || {};
		cxt_conf.clientId = cxt_conf.clientId || '' + this.valueForToken("client_id") + '';
		cxt_conf.pageType = cxt_conf.pageType || '' + this.valueForToken("page_type") + '';
		cxt_conf.server = '' + this.valueForToken("conf_server") + '';

		(function() {
			var ca = document.createElement('script');
			ca.type = 'text/javascript';
			ca.async = true;
			ca.src = cxt_conf.server + '/script/ca.js';
			ca.onload = function() {
				cxtdcs()();
			};
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ca, s);
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