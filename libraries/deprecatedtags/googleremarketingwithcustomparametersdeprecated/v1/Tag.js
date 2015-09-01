//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"deprecatedtags.googleremarketingwithcustomparametersdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Google Remarketing with custom parameters DEPRECATED",
			async: true,
			description: "The standard GA re-marketing tag, but allows for custom parameter as per the guide: http://bit.ly/14iZMqu. Return an object within an anonymous function to populate the parameters.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Your Google id provided in the script",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Google Conversion Label",
				description: "A alphanumeric label of your conversion tracking",
				token: "label",
				uv: ""
			}, {
				name: "Custom parameters",
				description: "Use a JavaScript-based parameter to return an object within an anonymous function.",
				token: "custom_parameters",
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
			var options = {
				google_conversion_id: "" + this.valueForToken("conversion_id"),
				google_conversion_label: "" + this.valueForToken("label"),
				google_custom_params: this.valueForToken("custom_parameters")
			};
			//console.debug(options);

			window.google_trackConversion(options);

			/*~POST*/
		}
	});