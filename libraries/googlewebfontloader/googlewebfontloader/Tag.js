//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googlewebfontloader.googlewebfontloader.Tag", {
    config: {/*DATA*/
	id: 34157,
	name: "Google WebFont Loader",
	async: true,
	description: "Google Web Fonts lets you browse all the fonts available via the Google Web Fonts API. All fonts in the directory are available for use on your website under an open source license and are served by Google servers.",
	html: "",
	imageUrl: "http://dummyimage.com/100x100/000/fff.png&text=google-web-fonts",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33157,
		name: "Font Family",
		description: "The font family code you wish to load, e.g. \"Noto+Serif::latin\"",
		token: "font_family",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

  WebFontConfig = {
    google: { families: [ '' + this.getValueForToken("font_family") + '' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
