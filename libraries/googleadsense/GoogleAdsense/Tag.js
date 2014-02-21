//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleadsense.GoogleAdsense", {
    config: {/*DATA*/
	id: 36665,
	name: "Google Adsense",
	async: true,
	description: "Deploy Google adsense asynchronously to a specific html element (by id).",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/googleadsense.jpeg",
	locationDetail: "",
	priv: false,
	url: "pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 35711,
		name: "Adsense Client ID",
		description: "Your unique client id, e.g. 5244112791143524",
		token: "ad_client",
		uv: ""
	},
	{
		id: 35712,
		name: "Adsense Ad slot id",
		description: "The unique id for the ad slot, e.g. 8154696675",
		token: "ad_slot",
		uv: ""
	},
	{
		id: 35713,
		name: "Ad width",
		description: "Numeric width in pixels, e.g. 468",
		token: "width",
		uv: ""
	},
	{
		id: 35714,
		name: "Ad Height",
		description: "Numeric height in pixels, e.g. 15",
		token: "height",
		uv: ""
	},
	{
		id: 35715,
		name: "Container element ID",
		description: "The HTML element (by id) to add the ads to.",
		token: "parent_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
	(function() {
	    window.adsbygoogle = window.adsbygoogle || [];

	    var ins = document.createElement("ins");

	    ins.setAttribute("class", "adsbygoogle");
	    ins.style.display = "inline-block";
	    ins.style.width = "" + this.getValueForToken("width") + "px";
	    ins.style.height = "" + this.getValueForToken("height") + "px";

	    ins.setAttribute("data-ad-client", "ca-pub-" + this.getValueForToken("ad_client") + "");
	    ins.setAttribute("data-ad-slot", "" + this.getValueForToken("ad_slot") + "");
	    document.getElementById("" + this.getValueForToken("parent_id") + "").appendChild(ins);

	    window.adsbygoogle.push({});

	}());
    }/*~POST*/
});
