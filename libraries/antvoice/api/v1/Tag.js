//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("antvoice.api.v1.Tag", {
	config: {
		/*DATA*/
		name: "api",
		async: true,
		description: "Recommendation engine which analyzes the behaviour of your visitors in real-time to put forward a selection of products and contents.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
			{
				name: "Antvoice API url",
				description: "url type : js.antvoice.com/sr-company.js without http",
				token: "antvoice_api_url",
				uv: "universal_variable.antvoice.antvoice_api_url"
			}
		]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
		var _this = this;
		window._srAsyncInit = function () {
			// social recommendation SDK initialization
			_sr._start();
			// initialization of the application
			_sr.init({});
		};
		// Synchronous load of the SDK
		(function (d, s) {
			var js, fjs = d.getElementsByTagName(s)[0];
			js = d.createElement(s);
			js.type = 'text/javascript';
			js.async = true;
			// antvoice_url : js.antvoice.com/sr-company.js
			js.src = '//' + _this.valueForToken('antvoice_api_url');
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script'));
		function srEnsureReady(callback) {
			if (!window.srReady) {
				window.setTimeout(function () {
					srEnsureReady(callback);
				}, 50);
			} else {
				callback();
			}
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
