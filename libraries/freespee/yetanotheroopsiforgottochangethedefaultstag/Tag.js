//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("freespee.yetanotheroopsiforgottochangethedefaultstag.Tag", {
    config: {
      /*DATA*/
	id: 38167,
	name: "Yet another \"oops I forgot to change the defaults\" tag",
	async: true,
	description: "The transaction ID is required on the Confirmation page along with extra information such as currency, amounts, quantities, checkout total and product IDs. Now includes optional user ID support",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
	locationDetail: "",
	priv: true,
	url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiserid}",
	usesDocWrite: false,
	parameters: [

	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
var basket = {
   products: []
};

for(var i=0, ii=this.getValueForToken("product_ids").length; i < ii; i++) {
   basket.products.push({
      identifier: this.getValueForToken("product_ids")[i],
      amount: this.getValueForToken("amounts")[i],
      currency: '' + this.getValueForToken("currency") + '',
      quantity: this.getValueForToken("quantities")[i]
   });
}

basket.transaction = '' + this.getValueForToken("transaction_id") + '';
basket.amount = '' + this.getValueForToken("checkout_total") + '';
basket.currency = '' + this.getValueForToken("currency") + '';
window.basket = basket;

//Allows for custom scripts altering the customer object. Skipped over if user_id is false-like
var uid = this.getValueForToken("user_id");
if (uid){
  var customer = window.customer || {};
  customer.identifier = uid;
}
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
