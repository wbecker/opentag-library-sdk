//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("googleadsense.googleadsense.Tag", {
	config: {
		/*DATA*/
		name: "Google Adsense",
		async: true,
		description: "Deploy Google adsense asynchronously to a specific html element (by id).",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/googleadsense.jpeg",
		locationDetail: "",
		isPrivate: false,
		url: "pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
		usesDocWrite: false,
		parameters: [{
			name: "Adsense Client ID",
			description: "Your unique client id, e.g. 5244112791143524",
			token: "ad_client",
			uv: ""
		}, {
			name: "Adsense Ad slot id",
			description: "The unique id for the ad slot, e.g. 8154696675",
			token: "ad_slot",
			uv: ""
		}, {
			name: "Ad width",
			description: "Numeric width in pixels, e.g. 468",
			token: "width",
			uv: ""
		}, {
			name: "Ad Height",
			description: "Numeric height in pixels, e.g. 15",
			token: "height",
			uv: ""
		}, {
			name: "Container element ID",
			description: "The HTML element (by id) to add the ads to.",
			token: "parent_id",
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

		window.adsbygoogle = window.adsbygoogle || [];

		var ins = document.createElement("ins");
		ins.setAttribute("class", "adsbygoogle");
		ins.style.display = "inline-block";
		ins.style.width = this.valueForToken("width") + "px";
		ins.style.height = this.valueForToken("height") + "px";

		ins.setAttribute("data-ad-client", "ca-pub-" + this.valueForToken(
			"ad_client"));
		ins.setAttribute("data-ad-slot", "" + this.valueForToken("ad_slot"));
		document.getElementById("" + this.valueForToken("parent_id")).appendChild(
			ins);

		window.adsbygoogle.push({});


		/*~POST*/
	}
});