//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("appnexus.segmenttag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
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
		/*~config*/
		};
	},
	script: function() {
		/*script*/
		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});