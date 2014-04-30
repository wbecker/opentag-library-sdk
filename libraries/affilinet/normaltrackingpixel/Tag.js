//:include tagsdk-current.js
var version = "";
var classPath = "affilinet.normaltrackingpixel" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Normal Tracking Pixel",
		async: true,
		description: "",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n\n var src = \"//${domain}/registersale.asp\"\n         + \"?site=${program_id}\"\n         + \"&mode=${mode}\"\n         + \"&ltype=${type}\"\n         + \"&price=${subtotal}\"\n         + \"&order=${order_id}\"\n         + \"&curr=${currency}\"\n         + \"&vcode=${voucher_code}\";\n\n var image = new Image();\n image.src = src;\n\n}());\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/affilinet.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Program ID",
			description: "Program ID is fixed and defined by the platform when the advertiser is setup",
			token: "program_id",
			uv: ""
		}, {
			name: "Mode",
			description: "Mode is either pps (record a commission by % of order) or ppl (record a fixed rate commission)",
			token: "mode",
			uv: ""
		}, {
			name: "Ltype",
			description: "Ltype number is  the rate ID on our system, i.e. rate 1 could be 5% of order value rate 2 could be",
			token: "type",
			uv: ""
		}, {
			name: "Subtotal",
			description: "",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Voucher Code",
			description: "",
			token: "voucher_code",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Domain",
			description: "Affilinet domain, excluding https:// and http://",
			token: "domain",
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