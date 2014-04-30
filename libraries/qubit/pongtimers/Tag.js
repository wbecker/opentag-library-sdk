//:include tagsdk-current.js
var version = "";
var classPath = "qubit.pongtimers" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Pong Timers",
		async: false,
		description: "Times how long it takes to load pong and pings the stats back.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n\n  if (performance && performance.timing && (window.XDomainRequest || XMLHttpRequest)) {\n\n    var r = Math.floor(Math.random()*50000);\n    var url = \"//pong.qubitproducts.com/qc?\" + r;\n\n    var start = new Date();\n    if (window.XDomainRequest) {\n      var xdr = new window.XDomainRequest();\n      xdr.open(\"GET\", url);\n      xdr.send();\n    } else {\n      var request = new XMLHttpRequest();\n      request.open(\"GET\",  url, false);\n      request.send(null);\n    }\n\n    var end = new Date();\n    var times = {\n      _c_ping_start: start.getTime() - performance.timing.requestStart,\n      _c_ping_end: end.getTime() - performance.timing.requestStart\n    };\n\n    window._qtd = window._qtd || [];\n    window._qtd.push({\n      data: times\n    });\n\n  }\n\n}());\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Pong URL",
			description: "URL of the pong to be tested",
			token: "pong_url",
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