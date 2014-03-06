//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("mentionme.dashboard.Tag", {
	config: {
		/*DATA*/
		name: "Dashboard",
		async: true,
		description: "Providing registered referrers with a dashboard to encourage more sharing. Requires the div <div id=\"mmWrapper\"></div> to be on the page.\nThe * represents parameters that can be left as an empty value.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "MentionMe Partner Code",
			description: "The ID given to you by MentionMe",
			token: "partner_code",
			uv: ""
		},
		{
			name: "MentionMe Script Domain",
			description: "'tag-demo' for testing and 'tag' for production",
			token: "script_domain",
			uv: ""
		},
		{
			name: "User Email",
			description: "The customer's email address (string) e.g. bob@mention-me.com",
			token: "user_email",
			uv: "universal_variable.user.email"
		},
		{
			name: "MentionMe Situation",
			description: "String indicator of where you are including this tag within your site (for reporting)",
			token: "situation",
			uv: ""
		},
		{
			name: "User Full Name*",
			description: "The customer's fullname (parsed into surname, fullname fields)",
			token: "fullname",
			uv: "universal_variable.user.name"
		},
		{
			name: "MentionMe Implementation*",
			description: "Optionally override the way the dashboard is implementated (= embed or link)",
			token: "implementation",
			uv: ""
		},
		{
			name: "MentionMe Segment*",
			description: "String representing a customer segment (one of new, existing)",
			token: "segment",
			uv: ""
		},
		{
			name: "User Locale*",
			description: "String representing the locale for the campaign",
			token: "locale",
			uv: "universal_variable.user.language"
		},
		{
			name: "MentionMe Key*",
			description: "Optional SHA256 Hash of the customer's email concatenated with the merchant secret key (auth)",
			token: "key",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

var baseUrl = "https://" + this.getValueForToken("script_domain") + ".mention-me.com/api/v2/dashboard/" + this.getValueForToken("partner_code") + "/" + this.getValueForToken("user_email") + "?";
var mmScript = document.createElement("script");
var paramArr = [];
var paramObj = {
  situation: "" + this.getValueForToken("situation") + ""
}
if ("" + this.getValueForToken("fullname") + "".length) paramObj["fullname"] = "" + this.getValueForToken("fullname") + "";
if ("" + this.getValueForToken("implementation") + "".length) paramObj["implementation"] = "" + this.getValueForToken("implementation") + "";
if ("" + this.getValueForToken("key") + "".length) paramObj["key"] = "" + this.getValueForToken("key") + "";
if ("" + this.getValueForToken("segment") + "".length) paramObj["segment"] = "" + this.getValueForToken("segment") + "";
if ("" + this.getValueForToken("locale") + "".length) paramObj["locale"] = "" + this.getValueForToken("locale") + "";

for (var param in paramObj) {
  var value = paramObj[param];
  paramArr.push(param + "=" + escape(value));
}

mmScript.src = baseUrl + paramArr.join("&");
document.body.appendChild(mmScript);
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
