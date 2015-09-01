//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("appnexus.segmenttag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Segment Tag",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "ib.adnxs.com/seg?add=${segment}&t=2",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
		]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
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