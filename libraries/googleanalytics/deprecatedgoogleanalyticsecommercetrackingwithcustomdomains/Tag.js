//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.deprecatedgoogleanalyticsecommercetrackingwithcustomdomains.Tag", {
    config: {
      /*DATA*/
	id: 30162,
	name: "[DEPRECATED] Google Analytics E-Commerce Tracking with Custom Domains",
	async: true,
	description: "Enables ecommerce tracking of multiple domains within one Google Analytics account.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [

	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function() {
  window._gaq = window._gaq || [];
  _gaq.push(['_setAccount', '' + this.getValueForToken("PROFILE_ID") + '']);
  _gaq.push(['_setDomainName', '' + this.getValueForToken("domainName") + '']);
  _gaq.push(['_trackPageview']);

  _gaq.push(['_addTrans',
    '' + this.getValueForToken("orderId") + '',
    '' + this.getValueForToken("storeName") + '',
    '' + this.getValueForToken("orderTotal") + '',
    '' + this.getValueForToken("orderTax") + '',         
    '' + this.getValueForToken("orderShipping") + '',
    '' + this.getValueForToken("orderShippingCity") + '',
    '' + this.getValueForToken("orderShippingState") + '',
    '' + this.getValueForToken("orderShippingCountry") + ''
  ]);
  var i, ii;
  for (i = 0, ii = this.getValueForToken("itemSkus").length; i < ii; i += 1) {
    _gaq.push(['_addItem',
      '' + this.getValueForToken("orderId") + '',
      this.getValueForToken("itemSkus")[i],
      this.getValueForToken("itemNames")[i],
      this.getValueForToken("itemCategories")[i],
      this.getValueForToken("itemUnitPrices")[i],
      this.getValueForToken("itemQuantities")[i]
    ]);
  }
  _gaq.push(['_trackTrans']); 

  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
