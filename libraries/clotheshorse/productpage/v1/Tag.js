//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("clotheshorse.productpage.v1.Tag", {
	config: {
		/*DATA*/
		name: "Product Page",
		async: true,
		description: "To be placed on all product pages of the website.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/ClothesHorse.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Clothes Horse Client Token",
			description: "The token specific to the client using Clothes Horse",
			token: "client_token",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window.ch212 = ch212 || [];
		ch212['token'] = '' + this.valueForToken("client_token");
		ch212['ts'] = new Date().getTime();

		var ch = document.createElement('script');
		ch.type = 'text/javascript';
		ch.async = true;
		ch.src = '//script.clotheshor.se/widget/script?token=' + ch212['token'] +
			'&ts=' + ch212['ts'];
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ch, s);

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