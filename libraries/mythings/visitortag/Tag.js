//:include tagsdk-current.js
var version = "";
var classPath = "mythings.visitortag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Visitor Tag",
		async: true,
		description: "This tag should be placed on ALL pages",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mythings.png",
		locationDetail: "",
		isPrivate: false,
		url: "${subdomain}.mythings.com/c.aspx?atok=${token}",
		usesDocWrite: true,
		parameters: [{
			name: "myThings Advertiser Token",
			description: "Value of mtAdvertiserToken",
			token: "token",
			uv: ""
		}, {
			name: "myThings Subdomain",
			description: "subdomian provided for tracking",
			token: "subdomain",
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
		function _mt_ready() {
			if (typeof(MyThings) != "undefined") {
				MyThings.Track({
					EventType: MyThings.Event.Visit,
					Action: "300"
				});
			}
		}

		window.mtHost = (("https:" == document.location.protocol) ? "https://" +
			this.valueForToken("subdomain") + "" : "http://" + this.valueForToken(
				"subdomain") + "") + ".mythings.com";
		window.mtAdvertiserToken = "" + this.valueForToken("token") + "";


		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});