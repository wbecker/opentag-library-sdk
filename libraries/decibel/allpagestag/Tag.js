//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("decibel.allpagestag.Tag", {
	config: {
		/*DATA*/
		name: "All Pages Tag",
		async: true,
		description: "Decibel Insight’s ground-breaking visual analytics software introduces the most advanced, innovative and complete heatmapping tool in the world, designed to help businesses of all types and sizes generate better results from their websites.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Decibel.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Decibel Account ID",
			description: "The ID specific to your account given by Decibel",
			token: "account_id",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

  var _da_ = _da_ || [];
  _da_['da_accountId'] = '' + this.getValueForToken("account_id") + '';
  (function() {
    var da = document.createElement('script');
    da.type='text/javascript';
    da.async='async';
    da.src = '//decibelinsight.net/decibel.analytics.' + (top === self ? 'js' : 'hmf.js');
    document.getElementsByTagName('body')[0].appendChild(da);
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
