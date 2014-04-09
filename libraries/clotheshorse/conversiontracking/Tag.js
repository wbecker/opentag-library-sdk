//:include tagsdk-current.js
var version = "";
var classPath = "clotheshorse.conversiontracking.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Conversion Tracking",
		async: true,
		description: "Single Javascript tag for conversion tracking",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/ClothesHorse.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Clothes Horse Client Token",
			description: "The token specific to the client using the tag",
			token: "client_token",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var ch212 = ch212 || [];
		ch212['token'] = '' + this.valueForToken("client_token") + '';
		ch212['ts'] = new Date().getTime();

		(function() {
			var ch = document.createElement('script');
			ch.type = 'text/javascript';
			ch.async = true;
			ch.src = '//script.clotheshor.se/widget/conversion?token=' + ch212['token'] +
				'&ts=' + ch212['ts'];
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ch, s);
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