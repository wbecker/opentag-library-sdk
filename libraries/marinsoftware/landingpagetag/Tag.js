//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("marinsoftware.landingpagetag.Tag", {
    config: {
      /*DATA*/
	id: 28160,
	name: "Landing Page Tag",
	async: true,
	description: "This is used to record incoming traffic from paid search.It  should be installed on any landing page URL used by your paid campaigns, and also any page which is indexed into the organic search results of a search engine. If in doubt, deploy the tag on every page of website.",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 27688,
		name: "Marin Tracking ID",
		description: "",
		token: "id",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
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
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
