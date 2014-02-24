//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("facebook.facebookconversiontrackingdeprecated.Tag", {
    config: {
      /*DATA*/
	name: "Facebook Conversion Tracking DEPRECATED",
	async: true,
	description: "Conversion tracking helps businesses measure the return on investment of their Facebook Ads by reporting on the actions people take after viewing those ads.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/facebook.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "Facebook Pixel Id",
		description: "The unique tracking pixel id for the tag.",
		token: "pixel_id",
		uv: ""
	},
	{
		name: "Subtotal",
		description: "The value of the conversion",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

var fb_param = {};
fb_param.pixel_id = '' + this.getValueForToken("pixel_id") + '';
fb_param.value = '' + this.getValueForToken("subtotal") + '';
(function(){
  var fpw = document.createElement('script');
  fpw.async = true;
  fpw.src = '//connect.facebook.net/en_US/fp.js';
  var ref = document.getElementsByTagName('script')[0];
  ref.parentNode.insertBefore(fpw, ref);
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
