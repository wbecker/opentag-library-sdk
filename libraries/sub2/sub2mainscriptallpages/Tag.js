//:include tagsdk-current.js
var version = "";
var classPath = "sub2.sub2mainscriptallpages.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Sub2 - Main Script - All Pages",
		async: true,
		description: "This script should fire on all pages and all other Sub2 scripts should be dependent upon this script",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/sub2_logo.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Client ID",
			description: "e.g. xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx",
			token: "client_id",
			uv: ""
		}, {
			name: "Client Name",
			description: "e.g. google",
			token: "client_name",
			uv: ""
		}, {
			name: "Cookie Domain",
			description: "e.g.  .google.co.uk",
			token: "cookie_domain",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		var _SUB2metadata = {
			clientid: "" + this.valueForToken("client_id") + "",
			clientname: "" + this.valueForToken("client_name") + "",
			serviceversion: "v12.0",
			cookiedomain: "" + this.valueForToken("cookie_domain") + "",
			callingdomain: "",
			newsletter: "",
			login: "",
			applynow: "",
			debug: "N",
			collectcookies: "N",
			testurn: 0
		};

		var _SUB2_queue = _SUB2_queue || [];

		function S2Tech_2Prompt() {
			if (_SUB2metadata.debug == "Y") {
				alert("QUEUE:S2Tech_2Prompt");
			}
			_SUB2_queue.push(["S2Tech_2Prompt"]);
		}

		function S2Tech_MatchData_NA(t, f, s, a1, a2, a3, a4, p, e, l, m, o) {
			if (_SUB2metadata.debug == "Y") {
				alert("QUEUE:S2Tech_MatchData_NA");
			}
			_SUB2_queue.push(["S2Tech_MatchData_NA", t, f, s, a1, a2, a3, a4, p, e, l,
				m, o
			]);
		}

		function S2Tech_StoreRegistrationData(f, s, e) {
			if (_SUB2metadata.debug == "Y") {
				alert("QUEUE:S2Tech_StoreRegistrationData");
			}
			_SUB2_queue.push(["S2Tech_StoreRegistrationData", f, s, e]);
		}

		function S2Tech_2Shop() {
			if (_SUB2metadata.debug == "Y") {
				alert("QUEUE:S2Tech_2Shop");
			}
			_SUB2_queue.push(["S2Tech_2Shop"]);
		}

		function S2Tech_LastProductViewed() {
			if (_SUB2metadata.debug == "Y") {
				alert("QUEUE:S2Tech_LastProductViewed");
			}
			_SUB2_queue.push(["S2Tech_LastProductViewed"]);
		}

		function S2Tech_addOrder(o, a, t, tx, sh, ci, co, cy) {
			if (_SUB2metadata.debug == "Y") {
				alert("QUEUE:S2Tech_addOrder");
			}
			_SUB2_queue.push(["S2Tech_addOrder", o, a, t, tx, sh, ci, co, cy]);
		}

		function S2Tech_addItem(o, s, n, c, p, q) {
			if (_SUB2metadata.debug == "Y") {
				alert("QUEUE:S2Tech_addItem");
			}
			_SUB2_queue.push(["S2Tech_addItem", o, s, n, c, p, q]);
		}

		(function() {
			try {
				if (window.top.location.search.substring(1).indexOf("__S2OPTOUT__") != -1) {
					document.cookie = "V1V4=-1";
					document.cookie = "V2V4=-1";
					document.cookie = "V3V4=-1";
				}

				if (window.top.location.search.substring(1).indexOf("__S2DEBUG__") != -1) {
					_SUB2metadata.debug = "Y";
				}

				var cookie_object = {};
				var i, cookie, key, val;
				var pairs = document.cookie.split(";");
				var len = pairs.length;

				for (i = 0; i < len; ++i) {
					cookie = pairs[i].split("=");
					key = cookie[0].replace(/^\s+/, "");
					val = unescape(cookie[1]);
					cookie_object[key] = val;
				}

				var V1 = cookie_object.V1V4;

				if (!V1 || (parseInt(V1) !== -1)) {
					document.callingdomain = document.domain;
					var _sub2 = document.createElement("script");
					_sub2.type = "text/javascript";
					_sub2.async = true;
					_sub2.src = document.location.protocol + "//webservices.sub2tech.com/" +
						_SUB2metadata.clientname + "/sub2_queue_MIN.js";
					var s = document.getElementsByTagName("script")[0];
					s.parentNode.insertBefore(_sub2, s);
				}
			} catch (e) {

			}
		})();

		var waitFor_S2Tech_2Prompt = setInterval(function() {
			if (typeof S2Tech_2Prompt === 'function') {
				clearInterval(waitFor_S2Tech_2Prompt);
				S2Tech_2Prompt();
			}
		}, 100);

		setTimeout(function() {
			clearInterval(waitFor_S2Tech_2Prompt);
		}, 5000);

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