//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("insparq.trendingproductsfeed.v1.Tag", {
	config: {
		/*DATA*/
		name: "Trending Products Feed",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "jQuery",
			description: "e.g. window.jQuery , $ , myJquery , etc..",
			token: "jQuery",
			uv: ""
		}, {
			name: "jQuery Element Selector",
			description: "e.g. insertAfter(...) , insertBefore(....) , appendTo(....)",
			token: "selector",
			uv: ""
		}, {
			name: "Client API Key",
			description: "Client API Key",
			token: "client",
			uv: ""
		}, {
			name: "URL",
			description: "url",
			token: "url",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var _this = this;
		// CSS
		var link = document.createElement('link');
		link.media = "all";
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "//pinboard.insparq.com/assets/insparq.css";
		document.head.appendChild(link);

		link = document.createElement('link');
		link.media = "all";
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "" + this.valueForToken("url");
		document.head.appendChild(link);

		// HTML
		eval(
					this.valueForToken("jQuery") + '(\'<div id="insparq"></div>\').' +
				this.valueForToken("selector")
			);

		// JS
		(function(d, t) {
			var g = d.createElement(t),
				s = d.getElementsByTagName(t)[0];
			g.type = 'text/javascript';
			g.async = true;
			g.src = '//pinboard.insparq.com/assets/insparq.js';
			g.apikey = '' + _this.valueForToken("client");
			s.parentNode.insertBefore(g, s);
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