//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("quantcast.QuantCastWebMeasurement", {
    config: {/*DATA*/
	id: 23662,
	name: "QuantCast Web Measurement",
	async: true,
	description: "Provides audience information showcasing your website’s traffic, demographic, geographic, affinities and business stats.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/quantcast.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 23210,
		name: "Account Number",
		description: "Your QuantCast account number",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

window._qevents = window._qevents || [];

(function () {
  var e = document.createElement("script");
  e.src = (document.location.protocol === "https:" 
    ? "https://secure" 
    : "http://edge") + ".quantserve.com/quant.js";
  e.async = true;
  document.getElementsByTagName("head")[0].appendChild(e);
_qevents.push( { qacct:"" + this.getValueForToken("id") + ""} );
})();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
