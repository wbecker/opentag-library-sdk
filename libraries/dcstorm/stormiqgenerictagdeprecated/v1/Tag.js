//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("dcstorm.stormiqgenerictagdeprecated.v1.Tag", {
	config: {
		/*DATA*/
		name: "StormIQ Generic Tag - Deprecated",
		async: true,
		description: "To be placed on all pages except confirmation",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "t1.stormiq.com/dcv4/jslib/${storm_id}.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "DC Storm ID",
			description: "",
			token: "storm_id",
			uv: ""
		}, {
			name: "DC Storm Script Path",
			description: "The full path of the DC Storm track.js file, excluding protocol e.g somewhere.com/js/track.js",
			token: "script_path",
			uv: ""
		}, {
			name: "DC Storm Channel",
			description: "If this is not required, leave blank",
			token: "channel",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.__stormJs = 't1.stormiq.com/dcv4/jslib/' +
			this.valueForToken("storm_id") + '.js';
		window.__ch = '' + this.valueForToken("channel");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});