//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("getsatisfaction.feedbacktab.Tag", {
	config: {
		/*DATA*/
		name: "Feedback Tab",
		async: true,
		description: "Collect and prioritize product-specific customer feedback by adding a feedback tab to any (or every) page of your site.",
		html: "",
		imageUrl: "http://www.smartinsights.com/wp-content/uploads/2012/05/Get-Satisfaction-Logo-Large.jpg",
		locationDetail: "",
		priv: true,
		url: "https://d3rdqalhjaisuu.cloudfront.net/javascripts/feedback-v2.js",
		usesDocWrite: true,
		parameters: [
		{
			name: "Company Name",
			description: "Your Company name/id with Get Satisfaction",
			token: "COMPANY",
			uv: ""
		},
		{
			name: "Placement Location",
			description: "Location where the tab should be displayed",
			token: "PLACEMENT",
			uv: ""
		},
		{
			name: "Default Color",
			description: "Color code of the tab. Make sure to include # in it",
			token: "COLOR",
			uv: ""
		},
		{
			name: "Style",
			description: "The default type that will be chosen",
			token: "STYLE",
			uv: ""
		}
	]
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
var feedback_widget_options = {};
feedback_widget_options.display = "overlay";  
feedback_widget_options.company = "" + this.getValueForToken("COMPANY") + "";
feedback_widget_options.placement = "" + this.getValueForToken("PLACEMENT") + "";
feedback_widget_options.color = "" + this.getValueForToken("COLOR") + "";
feedback_widget_options.style = "" + this.getValueForToken("STYLE") + "";
var feedback_widget = new GSFN.feedback_widget(feedback_widget_options);
		/*~POST*/
	}
});
