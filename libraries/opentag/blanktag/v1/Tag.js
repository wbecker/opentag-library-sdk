//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("opentag.blanktag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Blank Tag",
		async: true,
		description: "A blank tag",
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