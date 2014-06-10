//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("google.dynamicadsforeducationallpages.v1.Tag", {
	config: {
		/*DATA*/
		name: "Dynamic Ads For Education - All Pages",
		async: true,
		description: "",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
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
			name: "Education Program",
			description: "replace with Education Program defined in the feed",
			token: "educationprogram",
			uv: ""
		}, {
			name: "Location ID",
			description: "replace with Location ID defined in the feed",
			token: "locationid",
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
						edu_pid:  '' + this.valueForToken("educationprogram") + '',
						 
						edu_plocid:  ;
						'' + this.valueForToken("locationid") + '',  
						edu_pagetype:  '' + this.valueForToken("pagetype") + ''
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