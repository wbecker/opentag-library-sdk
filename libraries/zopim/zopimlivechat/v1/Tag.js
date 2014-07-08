//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("zopim.zopimlivechat.v1.Tag", {
	config: {
		/*DATA*/
		name: "Zopim Livechat",
		async: true,
		description: "Real-time customer satisfaction made simple. Implement Zopim's live chat functionality on your site.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Client ID",
			description: "The unique client id, e.g. \"183c79emDOKRZl6272Y1DS6nmuZiWCDTf3e\"",
			token: "client_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var _this = this;
		window.$zopim || (function(d, s) {
			var z = $zopim = function(c) {
				z._.push(c)
			}, $ = z.s =
					d.createElement(s),
				e = d.getElementsByTagName(s)[0];
			z.set = function(o) {
				z.set.
				_.push(o)
			};
			z._ = [];
			z.set._ = [];
			$.async = !0;
			$.setAttribute('charset', 'utf-8');
			$.src = '//v2.zopim.com/?' + _this.valueForToken("client_id");
			z.t = +new Date;
			$.
			type = 'text/javascript';
			e.parentNode.insertBefore($, e)
		})(document, 'script');
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