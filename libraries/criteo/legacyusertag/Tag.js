//:include tagsdk-current.js
var version = "";
var classPath = "criteo.legacyusertag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Legacy - User Tag",
		async: true,
		description: "The user tag is a special tag used on an ad hoc basis, most of the time with extra data.",
		html: "<!--@SRC@-->",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		parameters: [{
			name: "Criteo wi Parameter",
			description: "The wi Parameter provided by Criteo",
			token: "wi",
			uv: ""
		}, {
			name: "Criteo Subdomain Parameter",
			description: "The subdomain parameter provided by Criteo e.g. mydomain.widget.criteo.com",
			token: "subdomain",
			uv: ""
		}, {
			name: "Criteo Call Parameter",
			description: "Call parameter provided by Criteo",
			token: "call_parameter",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			var img = document.createElement("img");
			var src = [
				"//", "" + this.valueForToken("subdomain") + "", "/", "" + this.valueForToken(
					"call_parameter") + "", "/display?",
				"p1=",
				escape("v=2&wi=" + this.valueForToken("wi") + "&pt1=4"),
				"&t1=sendevent&resptype=gif"
			];
			img.setAttribute("src", src.join(""));
			img.setAttribute("height", "1");
			img.setAttribute("width", "1");
			document.body.appendChild(img);
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