//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("emailvision.emailvisionconfirmationpagewithcustomserver.Tag", {
	config: {
		/*DATA*/
		name: "Emailvision - Confirmation page with custom server",
		async: true,
		description: "The Emailvision tag to be used on confirmation pages, with the option to fully specify a custom server.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Emailvision.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Emailvision Client ID",
			description: "",
			token: "client_id",
			uv: ""
		},
		{
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Order Currency",
			description: "",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		},
		{
			name: "Emailvision Conversion Flag",
			description: "",
			token: "conversion_flag",
			uv: ""
		},
		{
			name: "Emailvision Page Name",
			description: "",
			token: "emailvision_page_name",
			uv: ""
		},
		{
			name: "Emailvision Server",
			description: "The server to send data to",
			token: "server_name",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function() {
  var src = "//" + this.getValueForToken("server_name") + "/P?";
  src += "emv_client_id=" + this.getValueForToken("client_id") + ""
  src += "&emv_value=" + this.getValueForToken("order_total") + "";
  src += "&emv_transid=" + this.getValueForToken("order_id") + "";
  src += "&emv_currency=" + this.getValueForToken("order_currency") + "";
  src += "&emv_conversionflag=" + this.getValueForToken("conversion_flag") + "";
  src += "&emv_pagename=" + this.getValueForToken("emailvision_page_name") + "";
  var date = new Date();
  src += "&emv_date=" + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getYear();
  src += "&emv_random=" + Math.floor(Math.random() * 900 + 100);
  var pixel = document.createElement("img");
  pixel.setAttribute("src", src);
  pixel.setAttribute("border", "0");
  pixel.setAttribute("alt", "");
  pixel.setAttribute("width", "1");
  pixel.setAttribute("height", "1");
  document.body.appendChild(pixel);
})();


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
