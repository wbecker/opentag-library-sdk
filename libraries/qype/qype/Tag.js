//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("qype.qype.Tag", {
	config: {
		/*DATA*/
		name: "Qype",
		async: true,
		description: "Qype is a local review site - http://www.qype.co.uk/.",
		html: "<script type=\"text/javascript\" src=\"http://www.qype.co.uk/qypetool/city_widget/world.en.js\"></script>",
		imageUrl: "http://dummyimage.com/100x100/000/fff.png&text=QYPE",
		locationDetail: "${DIV_ID}",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Review Count",
			description: "The amount of reviews to show, must be < 24",
			token: "REVIEW_COUNT",
			uv: ""
		},
		{
			name: "Show review rating",
			description: "Show the amount of stars in your review, must be either true or false",
			token: "SHOW_STARS",
			uv: ""
		},
		{
			name: "Div Id",
			description: "In what url element should the reviews go? Must be an element id.",
			token: "DIV_ID",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
var qypetoolConfig = {reviewCount: this.valueForToken("REVIEW_COUNT"), showStars: this.valueForToken("SHOW_STARS")
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
