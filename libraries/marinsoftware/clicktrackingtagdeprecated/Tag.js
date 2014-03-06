//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("marinsoftware.clicktrackingtagdeprecated.Tag", {
	config: {
		/*DATA*/
		name: "Click Tracking Tag [DEPRECATED]",
		async: true,
		description: "",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Marin Tracking ID",
			description: "",
			token: "id",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


var _mTrack = window._mTrack || [];

_mTrack.push(['trackPage']);

(function() 
{
   var mClientId ="" + this.getValueForToken("id") + "";
   var mProto = ('https:' == document.location.protocol ? 'https://' : 'http://');
   var mHost = 'tracker.marinsm.com';
   var mt = document.createElement('script'); mt.type = 'text/javascript'; 
   mt.async = true; 
   mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
   var fscr = document.getElementsByTagName('script')[0]; fscr.parentNode.insertBefore(mt, fscr);
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
