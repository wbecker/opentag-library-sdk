//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("dcstorm.StormIQGenericTagDeprecated", {
    config: {/*DATA*/
	id: 28663,
	name: "StormIQ Generic Tag - Deprecated",
	async: true,
	description: "To be placed on all pages except confirmation",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/dc_storm.png",
	locationDetail: "",
	priv: true,
	url: "t1.stormiq.com/dcv4/jslib/${storm_id}.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 28173,
		name: "DC Storm ID",
		description: "",
		token: "storm_id",
		uv: ""
	},
	{
		id: 28174,
		name: "DC Storm Script Path",
		description: "The full path of the DC Storm track.js file, excluding protocol e.g somewhere.com/js/track.js",
		token: "script_path",
		uv: ""
	},
	{
		id: 28175,
		name: "DC Storm Channel",
		description: "If this is not required, leave blank",
		token: "channel",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
window.__stormJs ='t1.stormiq.com/dcv4/jslib/' + this.getValueForToken("storm_id") + '.js'; 
window.__ch = '' + this.getValueForToken("channel") + '';
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
