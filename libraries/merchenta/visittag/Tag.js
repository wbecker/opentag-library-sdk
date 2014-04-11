//:include tagsdk-current.js
var version = "";
var classPath = "merchenta.visittag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Visit Tag",
		async: true,
		description: "Use this tag to track visits to your home page or landing pages.",
		html: "<div id=\"mc_data\" style=\"display:none;\">\n  <div class=\"mc_event\">VISIT</div>\n  <div class=\"mc_retailer\">${Merchenta_Id}</div>\n</div>\n\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Merchenta.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Merchenta Retailer Code",
			description: "Your Merchenta account ID",
			token: "Merchenta_Id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var mc_api_url = "api.merchenta.com/merchenta/t";
		(function() {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.async = true;
			var secure = (window.parent.document.location.protocol == "https:");
			if (secure) {
				script.src = "https://api.merchenta.com/track/t.js";
			} else {
				script.src = "http://cdn.merchenta.com/track/t.js";
			}
			document.getElementsByTagName('head')[0].appendChild(script);
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