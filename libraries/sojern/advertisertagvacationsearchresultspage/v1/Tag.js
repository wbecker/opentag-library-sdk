//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagvacationsearchresultspage.v1.Tag", {
		config: {
			/*DATA*/
			name: "Advertiser Tag - Vacation Search Results Page",
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
				name: "Origin Airport Code",
				description: "Assign blank string if not available",
				token: "origin",
				uv: ""
			}, {
				name: "Destination Airport Code",
				description: "Assign blank string if not available",
				token: "destination",
				uv: ""
			}, {
				name: "Departure Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "departure",
				uv: ""
			}, {
				name: "Return Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "return",
				uv: ""
			}, {
				name: "Number of Travellers",
				description: "Assign blank string if not available",
				token: "travellers",
				uv: ""
			}, {
				name: "Service Class",
				description: "Assign blank string if not available",
				token: "class",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/
			var src = "https://beacon.sojern.com/p/8?";
			src += "et=" + this.valueForToken("event") + "&";
			src += "va1=" + this.valueForToken("origin") + "&";
			src += "va2=" + this.valueForToken("destination") + "&";
			src += "vd1=" + this.valueForToken("departure") + "&";
			src += "vd2=" + this.valueForToken("return") + "&";
			src += "t=" + this.valueForToken("travellers") + "&";
			src += "vc=" + this.valueForToken("class") + "";
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