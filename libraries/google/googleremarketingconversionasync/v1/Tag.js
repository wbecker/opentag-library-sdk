//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googleremarketingconversionasync.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Google Remarketing Conversion Async",
			async: true,
			description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Google Conversion ID",
				token: "google_id",
				uv: ""
			}]
			/*~DATA*/
		};
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
			var _this = this;
			var poll = function() {
				if (window.google_trackConversion) {
					google_trackConversion({
						google_conversion_id: "" + _this.valueForToken("google_id"),
						google_custom_params: {}
					});
				} else {
					setTimeout(poll, 100);
				}
			};

			poll();
			/*~POST*/
		}
	});