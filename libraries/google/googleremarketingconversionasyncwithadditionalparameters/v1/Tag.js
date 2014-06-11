//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"google.googleremarketingconversionasyncwithadditionalparameters.v1.Tag", {
		config: {
			/*DATA*/
			name: "Google Remarketing Conversion Async, with additional parameters",
			async: true,
			description: "Contains additional parameters including color, language, and format. Also includes custom parameter support.",
			html: "",
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
				name: "Language",
				description: "Language",
				token: "lang",
				uv: ""
			}, {
				name: "Format",
				description: "Format",
				token: "format",
				uv: ""
			}, {
				name: "Color",
				description: "Color",
				token: "color",
				uv: ""
			}, {
				name: "Value",
				description: "Value",
				token: "value",
				uv: "universal_variable.transaction.subtotal"
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
			var _this = this;
			var poll = function() {
				if (window.google_trackConversion) {
					window.google_trackConversion({
						google_conversion_id: _this.valueForToken("id"),
						google_conversion_language: "" + _this.valueForToken("lang"),
						google_conversion_format: "" + _this.valueForToken("format"),
						google_conversion_color: "" + _this.valueForToken("color"),
						google_conversion_value: _this.valueForToken("value"),
						google_custom_params: window.google_tag_params || {}
					});
				} else {
					setTimeout(poll, 100);
				}
			};

			poll();
			/*~POST*/
		}
	});