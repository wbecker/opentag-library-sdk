//:include tagsdk-current.js
var version = "";
var classPath = "qubit.uvbreadcrumbconverter.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "UV Breadcrumb Converter",
		async: true,
		description: "Converts UV page breadcrumbs to be in the new format.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "UV - Ignore Last Breadcrumb",
			description: "Ignore the last breadcrumb",
			token: "skip_last",
			uv: ""
		}, {
			name: "UV - Ignore First Breadcrumb",
			description: "Ignore the first breadcrumb in the UV",
			token: "skip_first",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {

			function isArray(arr) {
				return Object.prototype.toString.call(arr) == "[object Array]";
			}

			function BreadCrumb(uv) {

				uv.page.type = uv.page.type.toLowerCase();
				uv.page.category = uv.page.type;

				var breadcrumb = {
					init: function(config) {
						if (!(uv.page.breadcrumb && isArray(uv.page.breadcrumb))) {
							return;
						}
						config = config || {};

						breadcrumb.skipLast = (config.skipLast === true) ? true : false;
						breadcrumb.skipFirst = (config.skipFirst === true) ? true : false;
						breadcrumb.overwriteSubCat = (config.overwriteSubCat === false) ? false : true;

						breadcrumb.trimLength = config.trimLength || 64;
						breadcrumb.max = config.max || 10;
						breadcrumb.obj = uv.page.breadcrumb.slice(0, breadcrumb.max);

						breadcrumb.convert();
						breadcrumb.createString();
					},
					convert: function() {
						var displace = (breadcrumb.skipFirst) ? 1 : 0;
						for (var i = 0; i < breadcrumb.obj.length; i++) {
							if (breadcrumb.skipFirst && (i === 0)) {
								continue;
							}
							if (breadcrumb.skipLast && (i === breadcrumb.obj.length - 1)) {
								break;
							}
							breadcrumb.obj[i] = breadcrumb.obj[i].substr(0, breadcrumb.trimLength).toLowerCase();
							uv.page["breadcrumb_l" + (i + 1 - displace)] = breadcrumb.obj[i];
						}
						// Add / overwrite page.subcategory with breadcrumb level 1
						if (uv.page.breadcrumb_l1) {
							if (!uv.page.subcategory || breadcrumb.overwriteSubCat === true) {
								uv.page.subcategory = uv.page.breadcrumb_l1;
							}
						}
					},
					createString: function() {
						var arr = [];
						for (var i = 0; i < breadcrumb.obj.length; i++) {
							if (breadcrumb.skipFirst && (i === 0)) {
								continue;
							}
							if (breadcrumb.skipLast && (i === breadcrumb.obj.length - 1)) {
								break;
							}
							var breadcrumbNoDots = breadcrumb.obj[i].replace(/\./g, "");
							arr.push(breadcrumbNoDots);
						}
						uv.page.breadcrumb_string = arr.join(".").toLowerCase();
					}
				};

				return breadcrumb;
			}

			// Wait for Universal Variable
			var waitForUV = function() {
				var uv = window.universal_variable;
				if (uv) {
					var bc = BreadCrumb(uv);
					bc.init({
						skipFirst: this.valueForToken("skip_first"),
						skipLast: this.valueForToken("skip_last"),
						overwriteSubCat: true
					});
				} else {
					setTimeout(waitForUV, 50);
				}
			};

			waitForUV();

		}());
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