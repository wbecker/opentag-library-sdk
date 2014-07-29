//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("olapic.checkoutpixel.v1.Tag", {
  config: {
    /*DATA*/
    name: "Checkout Pixel",
    async: false,
    description: "",
    html: "",
    locationDetail: "",
    isPrivate: true,
    url: "",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [
      {
        name: "Olapic API Key",
        description: "This is the AlphaNumeric Identifier key for the customers account to allow communication to the Olapic servers.",
        token: "apikey"
      }
    ]
    /*~DATA*/
  },
  script: function () {
    (function (w, d) {
      var olapicProducts = [];
      var productIds = this.valueForToken("productids");
      var productPrices = this.valueForToken("productprices");
      for (var i = productIds.length - 1; i >= 0; i--) {
        var product = {};
        product.id = productIds[i];
        product.price  = productPrices[i];
        olapicProducts.push(product);
      };
      var olapicCheckout = d.createElement("script");
      olapicCheckout.async = true;
      olapicCheckout.setAttribute("olapicProducts", olapicProducts);
      olapicCheckout.setAttribute("olapicApiKey", encodeURIComponent(this.valueForToken("apikey")));
      olapicCheckout.setAttribute("olapicIdentifier", encodeURIComponent("USER_ID"));
      olapicCheckout.setAttribute("olapicAmount", encodeURIComponent("AMOUNT"));
      olapicCheckout.setAttribute("olapicCurrencyCode", encodeURIComponent("CURRENCY"));
      olapicCheckout.setAttribute("olapicTransactionId", encodeURIComponent("TRANSACTION_ID"));
      olapicCheckout.setAttribute("olapicEmail", encodeURIComponent("EMAIL"));
      olapicCheckout.setAttribute("olapicName", encodeURIComponent("NAME"));
      // Customs vars //
      olapicCheckout.src = "//www.photorank.me/static/js/olapic.checkout.js";
      d.body.appendChild(olapicCheckout);
    })(window, document);
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