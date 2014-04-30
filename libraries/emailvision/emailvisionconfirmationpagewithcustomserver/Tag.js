//:include tagsdk-current.js
var version = "";
var classPath = "emailvision.emailvisionconfirmationpagewithcustomserver" +
	version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Emailvision - Confirmation page with custom server",
		async: true,
		description: "The Emailvision tag to be used on confirmation pages, with the option to fully specify a custom server.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n  var src = \"//${server_name}/P?\";\n  src += \"emv_client_id=${client_id}\"\n  src += \"&emv_value=${order_total}\";\n  src += \"&emv_transid=${order_id}\";\n  src += \"&emv_currency=${order_currency}\";\n  src += \"&emv_conversionflag=${conversion_flag}\";\n  src += \"&emv_pagename=${emailvision_page_name}\";\n  var date = new Date();\n  src += \"&emv_date1=\" + date.getDate() + \"-\" + (date.getMonth() + 1) + \"-\" + date.getFullYear();\n  src += \"&emv_random=\" + Math.floor(Math.random() * 900 + 100);\n  var pixel = document.createElement(\"img\");\n  pixel.setAttribute(\"src\", src);\n  pixel.setAttribute(\"border\", \"0\");\n  pixel.setAttribute(\"alt\", \"\");\n  pixel.setAttribute(\"width\", \"1\");\n  pixel.setAttribute(\"height\", \"1\");\n  document.body.appendChild(pixel);\n})();\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Emailvision.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Emailvision Client ID",
			description: "",
			token: "client_id",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Currency",
			description: "",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Emailvision Conversion Flag",
			description: "",
			token: "conversion_flag",
			uv: ""
		}, {
			name: "Emailvision Page Name",
			description: "",
			token: "emailvision_page_name",
			uv: ""
		}, {
			name: "Emailvision Server",
			description: "The server to send data to",
			token: "server_name",
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