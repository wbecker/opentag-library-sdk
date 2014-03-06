//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("clicktale.clicktaleatlaslegacy.Tag", {
	config: {
		/*DATA*/
		name: "ClickTale - Atlas - Legacy",
		async: true,
		description: "Mouse tracking tag",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Clicktale.jpeg",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: true,
		parameters: [
		{
			name: "ClickTale Id",
			description: "Your ClickTale project id",
			token: "ClickTaleId",
			uv: ""
		},
		{
			name: "Recording Ratio",
			description: "What ratio of users to record - between 0 and 1",
			token: "RecordingRatio",
			uv: ""
		},
		{
			name: "Partition Id",
			description: "The clicktale partition - normally something like \"www09\"",
			token: "Partition",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

window.WRInitTime = (new Date()).getTime();

var ctd = document.createElement("div");
ctd.id = "ClickTaleDiv";
ctd.style.display = "none";
document.body.appendChild(ctd);

var ct = document.createElement("script");
ct.src = (document.location.protocol === 'https:' ?
  'https://clicktalecdn.sslcs.cdngc.net/www/' :
  'http://cdn.clicktale.net/www/') + 'WRe0.js';

var done = function () {
  window.ClickTaleSSL = 1;
  if(typeof ClickTale == 'function') {
    ClickTale(this.getValueForToken("ClickTaleId"), this.getValueForToken("RecordingRatio"), "" + this.getValueForToken("Partition") + "");
  }
}

ct.onload = done;
ct.onreadystatechange = function () {
  if ((this.readyState === "complete") || (this.readyState === "loading")) {
    setTimeout(done, 1)
  }
}

document.body.appendChild(ct);
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
