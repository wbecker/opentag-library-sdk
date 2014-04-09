//:include tagsdk-current.js
var version = "";
var classPath = "mentionme.refereetagdeprecated.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Referee Tag [Deprecated]",
		async: true,
		description: "The implementation can be either as an embedded form where the customer enters the name of their referrer or an embedded link, both of which lead to a modal popup where the customer can register to get their reward. The 'implementation' parameter is one of 'link' or 'form' which respectively load a link or a form into the div <div id=\"mmWrapper\" style=\"height:60px;\"></div> which should be on the page.\n\nAll parameters marked with * are optional (if not used populate with an empty hardcoded value, even if default is 'uses universal variable')",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/MentionMe.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Partner Code",
			description: "The partner id given to you by MentionMe",
			token: "partner_code",
			uv: ""
		}, {
			name: "Script Domain",
			description: "Domain for the script: 'tag-demo.mention-me.com' for testing, 'tag.mention-me.com' for production",
			token: "script_domain",
			uv: ""
		}, {
			name: "Situation",
			description: "The string indicator of the page you are including this tag e.g. \"checkout\", \"homepage\"",
			token: "situation",
			uv: ""
		}, {
			name: "Customer Email*",
			description: "The customer's email address (leave value empty if not used)",
			token: "email",
			uv: "universal_variable.user.email"
		}, {
			name: "Customer Surname*",
			description: "The surname of the customer (leave value empty if not used)",
			token: "surname",
			uv: "universal_variable.user.name"
		}, {
			name: "Customer Firstname*",
			description: "The first name of the customer (leave value empty if not used)",
			token: "firstname",
			uv: ""
		}, {
			name: "Implementation*",
			description: "Optionally override the way the flow is implemented (one of: link, form)",
			token: "implementation",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var baseUrl = "https://" + this.valueForToken("script_domain") +
			"/api/v2/refereefind/" + this.valueForToken("partner_code") + "?";
		var mmScript = document.createElement("script");
		var paramArr = [];
		var paramObj = {
			situation: "" + this.valueForToken("situation") + ""
		}
		if ("" + this.valueForToken("email") + "".length) paramObj["email"] = "" +
			this.valueForToken("email") + "";
		if ("" + this.valueForToken("surname") + "".length) paramObj["surname"] = "" +
			this.valueForToken("surname") + "";
		if ("" + this.valueForToken("firstname") + "".length) paramObj["firstname"] =
			"" + this.valueForToken("firstname") + "";
		if ("" + this.valueForToken("implementation") + "".length) paramObj[
			"implementation"] = "" + this.valueForToken("implementation") + "";

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