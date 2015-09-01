//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("radiumone.radiumonegenericimagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "RadiumOne - Generic image tag",
		async: true,
		description: "A generic RadiumOne image tag.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "RadiumOne Tag ID",
			description: "",
			token: "id",
			uv: ""
		}]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
		var img = new Image();
		img.src = "http://rs.gwallet.com/r1/pixel/x" + this.valueForToken("id") +
			"r" + Math.round(Math.random() * 10000000);
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