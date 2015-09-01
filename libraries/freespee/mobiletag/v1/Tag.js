//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("freespee.mobiletag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Mobile Tag",
		async: true,
		description: "The same as the generic tag but for mobile",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
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