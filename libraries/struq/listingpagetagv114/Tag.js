//:include tagsdk-current.js
var version = "";
var classPath = "struq.listingpagetagv114" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Listing Page Tag v1.14",
		async: true,
		description: "",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n  var productArr = [];\n  for (var i = 0, ii = ${products}.length; i < ii; i++) {\n    productArr.push(${products}[i]);\n  }\n  var productStr = productArr.join(\",\");\n\n  window._struqPI = window._struqPI || [];\n  window._struqPI.push(['injectTrackingPixel', {\n    trackingPixelId: '${pixelid}',\n    route: '/s/sa/',\n    collectData: false,\n    data: [{\n      title: \"si\",\n      pid: productStr\n    }],\n    options: {\n      timeoutMs: 2000,\n      firstPartyDomain: '',\n      firstPartyCookie: '',\n      firstPartyUid: ''\n    }\n  }]);\n\n  var struq = document.createElement('script');\n  struq.type = 'text/javascript';\n  struq.async = true;\n  struq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-14.js';\n  document.getElementsByTagName('head')[0].appendChild(struq);\n})();\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Struq Listing Page Pixel ID",
			description: "",
			token: "pixelid",
			uv: ""
		}, {
			name: "Product IDs",
			description: "",
			token: "products",
			uv: "universal_variable.listing.items[#].id"
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