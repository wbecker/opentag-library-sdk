//:include tagsdk-current.js
var version = "";
var classPath = "googleanalytics.fullycustomizeabletag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Fully Customizeable Tag",
		async: true,
		description: "This GA tag only sets the account according to the supplied parameters - it then accepts an array of command arrays to be pushed into analytics, allowing it to be used for any custom application.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "GA Profile ID",
			description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
			token: "PROFILE_ID",
			uv: ""
		}, {
			name: "Commands Array",
			description: "Array of arrays - each of which can be applied using _gaq.push()",
			token: "commands",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		window._gaq = window._gaq || [];
		_gaq.push(['_setAccount', '' + this.valueForToken("PROFILE_ID")]);

		for (var i = 0; i < this.valueForToken("commands").length; i++) {
			_gaq.push(this.valueForToken("commands")[i]);
		}

    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
      'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);

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