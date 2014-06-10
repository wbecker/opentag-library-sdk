//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"google.dynamicxdisplayadscustomparametersolutionallpages.v1.Tag", {
		config: {
			/*DATA*/
			name: "Dynamic X Display Ads (Custom Parameter Solution) - All Pages",
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
				name: "Items ID",
				description: "replace with Item ID defined in the feed",
				token: "itemid",
				uv: ""
			}, {
				name: "Item Location ID",
				description: "replace with Item location ID defined in the feed",
				token: "itemlocationid",
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
							dynx_itemid:  '' + this.valueForToken("itemid") + '',
							  
							dynx_locid:  '' + this.valueForToken("itemlocationid") + '',
							dynx_pagetype:  '' + this.valueForToken("pagetype") + ''
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