//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("snowplowanalytics.snowploweventtracker.v1.Tag", {
	config: {
		/*DATA*/
		name: "Snowplow EventTracker",
		async: true,
		description: "Tag for getting SnowPlow to track all UV events into your custom SnowPlow system. Must be set to depend on the SnowPlow PageTracker.",
		html: "",
		imageUrl: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window.uv_listener.push(['on', 'event',
			function(event) {
				if (event && event.type && event.type === "struct") {
					_snaq.push(['trackStructEvent', event.category || "", event.action || "",
						event.label || "", event.property || "", event.value || ""
					]);
				}
			}
		]);

		window.uv_listener.push(['on', 'event',
			function(event) {
				if (event && event.type && event.type === "unstruct") {
					_snaq.push(['trackUnstructEvent', event.name || "", event.properties || {}]);
				}
			}
		]);

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