//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"sojern.advertisertaghotelsearchresultspage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Advertiser Tag - Hotel Search Results Page",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Event Type",
				description: "Assign blank string if not available",
				token: "event",
				uv: ""
			}, {
				name: "Number of Travellers",
				description: "Assign blank string if not available",
				token: "travellers",
				uv: ""
			}, {
				name: "Number of Rooms",
				description: "Assign blank string if not available",
				token: "rooms",
				uv: ""
			}, {
				name: "CheckIn Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "checkin",
				uv: ""
			}, {
				name: "Checkout Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "checkout",
				uv: ""
			}, {
				name: "City",
				description: "Assign blank string if not available",
				token: "city",
				uv: ""
			}, {
				name: "State",
				description: "2-letter postcode (Assign blank string if not available)",
				token: "state",
				uv: ""
			}, {
				name: "Country",
				description: "Country Code (Assign blank string if not available)",
				token: "country",
				uv: ""
			}, {
				name: "Nearest Airport to Search Locations",
				description: "Assign blank string if not available",
				token: "nearest",
				uv: ""
			}, {
				name: "Encrypted Loyalty Number",
				description: "Assign blank string if not available",
				token: "loyal",
				uv: ""
			}, {
				name: "Hotel Brand",
				description: "Hotel Brand",
				token: "brand",
				uv: ""
			}]
			/*~DATA*/
      };
  },
		script: function() {
			/*SCRIPT*/
			var src = "https://beacon.sojern.com/p/4?";
			src += "et=" + this.valueForToken("event") + "&";
			src += "t=" + this.valueForToken("travellers") + "&";
			src += "hr=" + this.valueForToken("rooms") + "&";
			src += "hd1=" + this.valueForToken("checkin") + "&";
			src += "hd2=" + this.valueForToken("checkout") + "&";
			src += "hc1=" + this.valueForToken("city") + "&";
			src += "hs1=" + this.valueForToken("state") + "&";
			src += "hn1=" + this.valueForToken("country") + "&";
			src += "ha1=" + this.valueForToken("nearest") + "&";
			src += "hl=" + this.valueForToken("loyal") + "&";
			src += "hb=" + this.valueForToken("brand");
			(new Image()).src = src;
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