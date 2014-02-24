//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("quantcast.quantcastwebmeasurementwithlabels.Tag", {
    config: {
      /*DATA*/
	id: 36179,
	name: "QuantCast Web Measurement - with labels",
	async: true,
	description: "Provides audience information showcasing your website’s traffic, demographic, geographic, affinities and business stats. This version includes the \"labels\" parameter.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/quantcast.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35266,
		name: "Account Number",
		description: "Your QuantCast account number",
		token: "account_no",
		uv: ""
	},
	{
		id: 35268,
		name: "Labels",
		description: "Labels for visitor segmentation, see Quantcast documentation for further info",
		token: "labels",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

window._qevents = window._qevents || [];

(function () {
  var e = document.createElement("script");
  e.src = (document.location.protocol === "https:" 
    ? "https://secure" 
    : "http://edge") + ".quantserve.com/quant.js";
  e.async = true;
  document.getElementsByTagName("head")[0].appendChild(e);
_qevents.push({ 
  qacct: "" + this.getValueForToken("account_no") + "",
  labels: "" + this.getValueForToken("labels") + ""
});
})();


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
