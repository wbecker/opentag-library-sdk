//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("adroll.smartpixel.Tag", {
    config: {/*DATA*/
	id: 34669,
	name: "SmartPixel",
	async: true,
	description: "Asynchronously and independently registers a callback within the browser that will be called only at the end of the rendering process - adds an image to the head tag.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AdRoll.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		id: 33733,
		name: "AdRoll Advertiser ID",
		description: "ID for the Advertiser",
		token: "adroll_adv_id",
		uv: ""
	},
	{
		id: 33734,
		name: "AdRoll Pixel ID",
		description: "ID for the AdRoll pixel",
		token: "adroll_pix_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

window.adroll_adv_id = "" + this.getValueForToken("adroll_adv_id") + "";
window.adroll_pix_id = "" + this.getValueForToken("adroll_pix_id") + "";
(function () {
  var oldonload = window.onload;
  window.onload = function(){
    window.__adroll_loaded = true;
    var scr = document.createElement("script");
    var host = (("https:" === document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
    scr.setAttribute('async', 'true');
    scr.type = "text/javascript";
    scr.src = host + "/j/roundtrip.js";
    ((document.getElementsByTagName('head') || [null])[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
    
    if (oldonload) oldonload();
  };
}());


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
