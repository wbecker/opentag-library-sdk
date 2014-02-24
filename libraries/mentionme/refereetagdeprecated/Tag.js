//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mentionme.refereetagdeprecated.Tag", {
    config: {
      /*DATA*/
	id: 35166,
	name: "Referee Tag [Deprecated]",
	async: true,
	description: "The implementation can be either as an embedded form where the customer enters the name of their referrer or an embedded link, both of which lead to a modal popup where the customer can register to get their reward. The 'implementation' parameter is one of 'link' or 'form' which respectively load a link or a form into the div <div id=\"mmWrapper\" style=\"height:60px;\"></div> which should be on the page.\n\nAll parameters marked with * are optional (if not used populate with an empty hardcoded value, even if default is 'uses universal variable')",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/MentionMe.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34202,
		name: "Partner Code",
		description: "The partner id given to you by MentionMe",
		token: "partner_code",
		uv: ""
	},
	{
		id: 34203,
		name: "Script Domain",
		description: "Domain for the script: 'tag-demo.mention-me.com' for testing, 'tag.mention-me.com' for production",
		token: "script_domain",
		uv: ""
	},
	{
		id: 34204,
		name: "Situation",
		description: "The string indicator of the page you are including this tag e.g. \"checkout\", \"homepage\"",
		token: "situation",
		uv: ""
	},
	{
		id: 34205,
		name: "Customer Email*",
		description: "The customer's email address (leave value empty if not used)",
		token: "email",
		uv: "universal_variable.user.email"
	},
	{
		id: 34206,
		name: "Customer Surname*",
		description: "The surname of the customer (leave value empty if not used)",
		token: "surname",
		uv: "universal_variable.user.name"
	},
	{
		id: 34207,
		name: "Customer Firstname*",
		description: "The first name of the customer (leave value empty if not used)",
		token: "firstname",
		uv: ""
	},
	{
		id: 34208,
		name: "Implementation*",
		description: "Optionally override the way the flow is implemented (one of: link, form)",
		token: "implementation",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

var baseUrl = "https://" + this.getValueForToken("script_domain") + "/api/v2/refereefind/" + this.getValueForToken("partner_code") + "?";
var mmScript = document.createElement("script");
var paramArr = [];
var paramObj = {
  situation: "" + this.getValueForToken("situation") + ""
}
if ("" + this.getValueForToken("email") + "".length) paramObj["email"] = "" + this.getValueForToken("email") + "";
if ("" + this.getValueForToken("surname") + "".length) paramObj["surname"] = "" + this.getValueForToken("surname") + "";
if ("" + this.getValueForToken("firstname") + "".length) paramObj["firstname"] = "" + this.getValueForToken("firstname") + "";
if ("" + this.getValueForToken("implementation") + "".length) paramObj["implementation"] = "" + this.getValueForToken("implementation") + "";

for (var param in paramObj) {
  var value = paramObj[param];
  paramArr.push(param + "=" + escape(value));
}

mmScript.src = baseUrl + paramArr.join("&");
document.body.appendChild(mmScript);


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
