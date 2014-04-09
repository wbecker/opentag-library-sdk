//:include tagsdk-current.js
var version = "";
var classPath = "lyticsio.initiatejstag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Initiate JSTag",
		async: true,
		description: "**This script is REQUIRED BEFORE any events are sent**\nAnalytics tag for collecting data from browser and sending to server. This implementation has the minimum config. If more config is required, please send an email to customersupport@qubitdigital.com and we will make an update.",
		html: "\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Lytics.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Lytics.io Client ID",
			description: "The ID given to you by Lytics.io",
			token: "client_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window.jstag = function() {
			var t = {
				_q: [],
				_c: {},
				ts: (new Date).getTime()
			}, l = false,
				w = window,
				d = document,
				src = "/static/io",
				as = Array.prototype.slice,
				sp;
			t.init = function(c) {
				sp = c.js ? c.js : c.url || "";
				c.ext = c.ext || ".min.js";
				t._c = c;
				return this
			};
			t.load = function() {
				var js, fjs = d.getElementsByTagName("script")[0];
				l = true;
				if (!("JSON" in w && Array.prototype.forEach)) src += "w";
				if (d.getElementById(src)) return this;
				js = d.createElement("script");
				js.id = src;
				js.src = sp + src + t._c.ext;
				fjs.parentNode.insertBefore(js, fjs);
				return this
			};
			t.bind = function(e) {
				this._q.push([e, as.call(arguments, 1)])
			};
			t.ready = function() {
				this._q.push(["ready", as.call(arguments)])
			};
			t.send = function() {
				if (!l) this.load();
				this._q.push(["ready", "send", as.call(arguments)]);
				return this
			};
			return t
		}();

		jstag.init({
			cid: "" + this.valueForToken("client_id") + "",
			url: "//c.lytics.io"
		});
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