//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("intelliad.impressionpixel.Tag", {
    config: {/*DATA*/
	id: 39669,
	name: "Impression Pixel",
	async: true,
	description: "With intelliAd’s impression pixel you have the possibility to measure all impressions of your custom channels.",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38723,
		name: "IntelliAd Client ID",
		description: "The ID that relates you to IntelliAd",
		token: "client_id",
		uv: ""
	},
	{
		id: 38724,
		name: "IntelliAd Campaign ID",
		description: "The ID for the specific campaign",
		token: "campaign_id",
		uv: ""
	},
	{
		id: 38725,
		name: "IntelliAd Ad Group ID",
		description: "The ID for the ad group",
		token: "ad_group_id",
		uv: ""
	},
	{
		id: 38726,
		name: "IntelliAd Buy Market ID",
		description: "100 for custom channels",
		token: "buy_market",
		uv: ""
	},
	{
		id: 38727,
		name: "IntelliAd Client Market ID",
		description: "The ID relating to your client market (different to client ID)",
		token: "client_market_id",
		uv: ""
	},
	{
		id: 38728,
		name: "IntelliAd Keyword ID",
		description: "Keyword and Keyword ID will be transferred",
		token: "keyword_id",
		uv: ""
	},
	{
		id: 38729,
		name: "IntelliAd Cost Per Impression",
		description: "Represents cost per impression in EUR - so 0.1 cent  is 0.0010 (leave blank if not required)",
		token: "cost_per_impression",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

  (function () {
    var t = (new Date()).getTime();
    var paramObj = {
      cl: "" + this.getValueForToken("client_id") + "",
      cp: "" + this.getValueForToken("campaign_id") + "",
      ag: "" + this.getValueForToken("ad_group_id") + "",
      bm: "" + this.getValueForToken("buy_market") + "",
      bmcl: "" + this.getValueForToken("client_market_id") + "",
      crid: "" + this.getValueForToken("keyword_id") + "",
      timestamp: t
    };
    if ("" + this.getValueForToken("cost_per_impression") + "".length) {
      paramObj.co = "" + this.getValueForToken("cost_per_impression") + "";
    }
    var src = "//t23.intelliad.de/impression.php?";
    for (var key in paramObj) {
      if (paramObj.hasOwnProperty(key)) {
        var val = paramObj[key];
        src += key + "=" + val + "&";
      }
    }
    
    var img = new Image();
    img.src = src.slice(0, -1);
  })();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
