//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("dcstorm.stormiqgenerictag.Tag", {
	config: {
		/*DATA*/
		name: "StormIQ Generic Tag",
		async: true,
		description: "To be placed on all pages except confirmation",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/dc_storm.png",
		locationDetail: "",
		priv: false,
		url: "t1.stormiq.com/dcv4/jslib/${storm_id}.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "StormIQ ID",
			description: "",
			token: "storm_id",
			uv: ""
		},
		{
			name: "StormIQ Channel",
			description: "If this is not specified, leave blank",
			token: "channel",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
window.__stormJs ='t1.stormiq.com/dcv4/jslib/' + this.getValueForToken("storm_id") + '.js'; 
window.__ch = '' + this.getValueForToken("channel") + '';
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
