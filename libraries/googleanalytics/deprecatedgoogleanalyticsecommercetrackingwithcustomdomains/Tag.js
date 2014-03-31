//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("googleanalytics.deprecatedgoogleanalyticsecommercetrackingwithcustomdomains.Tag", {
	config: {
		/*DATA*/
		name: "[DEPRECATED] Google Analytics E-Commerce Tracking with Custom Domains",
		async: true,
		description: "Enables ecommerce tracking of multiple domains within one Google Analytics account.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [

	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
\\d
(function() {
  window._gaq = window._gaq || [];
  _gaq.push(['_setAccount', '' + this.valueForToken("PROFILE_ID") + '']);
  _gaq.push(['_setDomainName', '' + this.valueForToken("domainName") + '']);
  _gaq.push(['_trackPageview']);

  _gaq.push(['_addTrans',
    '' + this.valueForToken("orderId") + '',
    '' + this.valueForToken("storeName") + '',
    '' + this.valueForToken("orderTotal") + '',
    '' + this.valueForToken("orderTax") + '',         
    '' + this.valueForToken("orderShipping") + '',
    '' + this.valueForToken("orderShippingCity") + '',
    '' + this.valueForToken("orderShippingState") + '',
    '' + this.valueForToken("orderShippingCountry") + ''
  ]);
  var i, ii;
  for (i = 0, ii = this.valueForToken("itemSkus").length; i < ii; i += 1) {
    _gaq.push(['_addItem',
      '' + this.valueForToken("orderId") + '',
      this.valueForToken("itemSkus")[i],
      this.valueForToken("itemNames")[i],
      this.valueForToken("itemCategories")[i],
      this.valueForToken("itemUnitPrices")[i],
      this.valueForToken("itemQuantities")[i]
    ]);
  }
  _gaq.push(['_trackTrans']); 

  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
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
