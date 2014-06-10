//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("google.dynamicadsforflightsallpages.v1.Tag", {
	config: {
		/*DATA*/
		name: "Dynamic Ads For Flights - All Pages",
		async: true,
		description: "",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "www.googleadservices.com/pagead/conversion_async.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Google Conversion ID",
			description: "Google Conversion ID",
			token: "id",
			uv: ""
		}, {
			name: "Flight Origin ID",
			description: "Flight Origin ID",
			token: "originid",
			uv: ""
		}, {
			name: "Flight Destination ID",
			description: "Flight Destination ID",
			token: "destinationid",
			uv: ""
		}, {
			name: "Departure Date",
			description: "Departure Date",
			token: "start",
			uv: ""
		}, {
			name: "Return Date",
			description: "Return Date",
			token: "end",
			uv: ""
		}, {
			name: "Page Type",
			description: "Page Type",
			token: "pagetype",
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
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		var poll = function() {
			if (window.google_trackConversion) {
				window.google_trackConversion({
					google_conversion_id: this.valueForToken("id"),
					google_custom_params: {
						flight_originid :  '' + this.valueForToken("originid") + '',
						flight_destid :  '' + this.valueForToken("destinationid") + '',
						flight_startdate :  '' + this.valueForToken("start") + '',
						 
						flight_enddate : '' + this.valueForToken("end") + '',
						flight_pagetype :  '' + this.valueForToken("pagetype") + ''
					},
					google_remarketing_only: true
				});
			} else {
				setTimeout(poll, 100);
			}
		};

		poll();
		/*~POST*/
	}
});