//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"sojern.advertisertaghomepageothertrackingpage.v1.Tag", {
		config: {
			/*DATA*/
			name: "Advertiser Tag - Homepage/Other Tracking Page",
			async: true,
			description: "",
			html: "<!--@SRC@-->",
			imageUrl: ".",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Page Type Identifier",
				description: "Assign blank string if not available",
				token: "page",
				uv: ""
			}, {
				name: "Encrypted Flight Loyalty number",
				description: "Assign blank string if not available",
				token: "flight_loyal",
				uv: ""
			}, {
				name: "Encrypted Hotel Loyalty Number",
				description: "Assign blank string if not available",
				token: "hotel_loyal",
				uv: ""
			}, {
				name: "Encrypted Rental Car Loyalty Number",
				description: "Assign blank string if not available",
				token: "rental_loyal",
				uv: ""
			}, {
				name: "Cruise Loyalty Number",
				description: "Assign blank string if not available",
				token: "cruise_loyal",
				uv: ""
			}, {
				name: "Language",
				description: "Assign blank string if not available",
				token: "language",
				uv: ""
			}, {
				name: "Country of Residence",
				description: "Assign blank string if not available",
				token: "residence",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			(function() {
				var src = "https://beacon.sojern.com/p/1?";
				src += "n=" + this.valueForToken("page") + "&";
				src += "fl=" + this.valueForToken("flight_loyal") + "&";
				src += "hl=" + this.valueForToken("hotel_loyal") + "&";
				src += "rl=" + this.valueForToken("rental_loyal") + "&";
				src += "cl=" + this.valueForToken("cruise_loyal") + "&";
				src += "l=" + this.valueForToken("language") + "&";
				src += "c=" + this.valueForToken("residence") + "";
				(new Image()).src = src;
			})();
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