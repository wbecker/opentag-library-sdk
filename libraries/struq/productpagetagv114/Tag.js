//:include tagsdk-current.js
var version = "";
var classPath = "struq.productpagetagv114" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Product Page Tag v1.14",
		async: true,
		description: "",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n  window._struqPI = window._struqPI || [];\n  window._struqPI.push(['injectTrackingPixel', {\n    trackingPixelId: '${pixelid}',\n    route: '/s/sa/',\n    collectData: false,\n    data: [{\n      title: \"detail\",\n      pid: \"${productid}\"\n    }],\n    options: {\n      timeoutMs: 2000,\n      firstPartyDomain: '',\n      firstPartyCookie: '',\n      firstPartyUid: ''\n    }\n  }]);\n\n  var struq = document.createElement('script');\n  struq.type = 'text/javascript';\n  struq.async = true;\n  struq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-14.js';\n  document.getElementsByTagName('head')[0].appendChild(struq);\n})();\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Product Page Pixel ID",
			description: "",
			token: "pixelid",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
			token: "productid",
			uv: "universal_variable.product.id"
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