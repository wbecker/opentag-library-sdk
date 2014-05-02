//:include tagsdk-current.js
var tagVersion = "";
var classPath = "mythings.customtag" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Custom  Tag",
		async: true,
		description: "This is a custom myThings tracking tag in which the action number can be specified.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "https://${subdomain}.mythings.com/c.aspx?atok=${advertiser_token}",
		usesDocWrite: false,
		parameters: [{
			name: "myThings Advertiser Token",
			description: "Token provided by myThings",
			token: "advertiser_token",
			uv: ""
		}, {
			name: "myThings Subdomain",
			description: "Subdomain specified by myThings, if unsure use \"rainbow-uk\"",
			token: "subdomain",
			uv: ""
		}, {
			name: "myThings Action Number",
			description: "The action number specified for the specific tag",
			token: "action_number",
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
    var _this = this;
		window._mt_ready = function () {
			if (typeof(MyThings) != "undefined") {
				MyThings.Track({
					EventType: MyThings.Event.Visit,
					Action: "" + _this.valueForToken("action_number")
				});
			}
		}

		window.mtHost = (("https:" == document.location.protocol) ? "https" : "http") +
			"://" + this.valueForToken("subdomain") + ".mythings.com";
		window.mtAdvertiserToken = "" + this.valueForToken("advertiser_token");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});