//:include tagsdk-current.js
var version = "";
var classPath = "qubit.uvbreadcrumbconverter" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "UV Breadcrumb Converter",
		async: true,
		description: "Converts UV page breadcrumbs to be in the new format.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n\n  function isArray (arr) {\n    return Object.prototype.toString.call(arr) == \"[object Array]\";\n  }\n\n  function BreadCrumb(uv) {\n\n    uv.page.type = uv.page.type.toLowerCase();\n    uv.page.category = uv.page.type;\n\n    var breadcrumb = {\n      init: function(config) {\n        if (!(uv.page.breadcrumb && isArray(uv.page.breadcrumb))) {\n          return;\n        }\n        config = config || {};\n\n        breadcrumb.skipLast = (config.skipLast === true) ? true : false;\n        breadcrumb.skipFirst = (config.skipFirst === true) ? true : false;\n        breadcrumb.overwriteSubCat = (config.overwriteSubCat === false) ? false : true;\n        \n        breadcrumb.trimLength = config.trimLength || 64;\n        breadcrumb.max = config.max || 10;\n        breadcrumb.obj = uv.page.breadcrumb.slice(0, breadcrumb.max);\n\n        breadcrumb.convert();\n        breadcrumb.createString();\n      },\n      convert: function() {\n        var displace = (breadcrumb.skipFirst) ? 1 : 0;\n        for (var i = 0; i < breadcrumb.obj.length; i++) {\n          if (breadcrumb.skipFirst && (i === 0)) {\n            continue;\n          }\n          if (breadcrumb.skipLast && (i === breadcrumb.obj.length - 1)) {\n            break;\n          }\n          breadcrumb.obj[i] = breadcrumb.obj[i].substr(0, breadcrumb.trimLength).toLowerCase();\n          uv.page[\"breadcrumb_l\" + (i + 1 - displace)] = breadcrumb.obj[i];\n        }\n        // Add / overwrite page.subcategory with breadcrumb level 1\n        if (uv.page.breadcrumb_l1) {\n          if (!uv.page.subcategory || breadcrumb.overwriteSubCat === true) {\n            uv.page.subcategory = uv.page.breadcrumb_l1;\n          }\n        }\n      },\n      createString: function() {\n        var arr = [];\n        for (var i = 0; i < breadcrumb.obj.length; i++) {\n          if (breadcrumb.skipFirst && (i === 0)) {\n            continue;\n          }\n          if (breadcrumb.skipLast && (i === breadcrumb.obj.length - 1)) {\n            break;\n          }\n          var breadcrumbNoDots = breadcrumb.obj[i].replace(/\\./g, \"\");\n          arr.push(breadcrumbNoDots);\n        }\n        uv.page.breadcrumb_string = arr.join(\".\").toLowerCase();\n      }\n    };\n\n    return breadcrumb;\n  }\n  \n  // Wait for Universal Variable\n  var waitForUV = function () {\n    var uv = window.universal_variable;\n    if (uv) {\n      var bc = BreadCrumb(uv);\n      bc.init({\n        skipFirst: ${skip_first},\n        skipLast: ${skip_last},\n        overwriteSubCat: true\n      });\n    } else {\n      setTimeout(waitForUV, 50);\n    }\n  };\n\n  waitForUV();\n\n}());\n</script>",
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