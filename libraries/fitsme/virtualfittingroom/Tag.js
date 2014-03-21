//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("fitsme.virtualfittingroom.Tag", {
	config: {
		/*DATA*/
		name: "Virtual Fitting Room",
		async: true,
		description: "This product page tag adds the code needed to populate the \"fitsme_launcher\" div and makes sure GA is properly prepared (if present). It requires the FitsMeData object to be populated, either server-side or in a custom script which this depends on.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/FitsMe.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [

	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

var _gaq = _gaq || [];
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_setAllowHash', false]);

(function(){
  var fmJsHost = (("https:" == document.location.protocol) ? "https" : "http");
  var fmScript = document.createElement("script");
  fmScript.src = unescape(fmJsHost + "://www.fits.me/vfr.js");
  document.head.appendChild(fmScript);
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
