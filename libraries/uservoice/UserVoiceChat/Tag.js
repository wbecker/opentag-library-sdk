//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("uservoice.UserVoiceChat", {
    config: {/*DATA*/
	id: 90,
	name: "User Voice Chat",
	async: true,
	description: "UserVoice creates simple online feedback, help desk and knowledge base software. Our insight and support platforms enable businesses to understand and engage with customers with ease.",
	html: "<script type=\"\"text/javascript\">\n  var uvOptions = {};\n  (function() {\n    var uv = document.createElement('script'); uv.type = 'text/javascript'; uv.async = true;\n    uv.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'widget.uservoice.com/${ID}.js';\n    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(uv, s);\n  })();\n</script>",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/UserVoice.jpeg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 9000,
		name: "Unique Id",
		description: "Unique JavaScript File name",
		token: "ID",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
