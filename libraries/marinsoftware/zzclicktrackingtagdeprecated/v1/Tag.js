//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"marinsoftware.zzclicktrackingtagdeprecated.v1.Tag", {
		config: {
			/*DATA*/
			name: "zz-Click Tracking Tag [DEPRECATED]",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Marin Tracking ID",
				description: "",
				token: "id",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/
			window._mTrack = window._mTrack || [];
			_mTrack.push(['trackPage']);

			var mClientId = "" + this.valueForToken("id") + "";
			var mProto = ('https:' == document.location.protocol ? 'https://' :
				'http://');
			var mHost = 'tracker.marinsm.com';
			var mt = document.createElement('script');
			mt.type = 'text/javascript';
			mt.async = true;
			mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
			var fscr = document.getElementsByTagName('script')[0];
			fscr.parentNode.insertBefore(mt, fscr);
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