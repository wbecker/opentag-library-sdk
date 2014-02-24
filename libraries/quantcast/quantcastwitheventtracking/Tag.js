//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("quantcast.quantcastwitheventtracking.Tag", {
    config: {/*DATA*/
	id: 30171,
	name: "QuantCast - with event tracking",
	async: true,
	description: "Track custom events with QuantCast.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/quantcast.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 29210,
		name: "QuantCast Account Number",
		description: "Your quantcast account number",
		token: "account_no",
		uv: ""
	},
	{
		id: 29211,
		name: "QuantCast Custom Page",
		description: "The label for the custom page - e.g. \"Home\", \"Bracelets\"",
		token: "custom_page",
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
  _qevents.push({
    qacct:"" + this.getValueForToken("account_no") + "",
    labels: "_fp.event." + this.getValueForToken("custom_page") + ""
  });

})();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
