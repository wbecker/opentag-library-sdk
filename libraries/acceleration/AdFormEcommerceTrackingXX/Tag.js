//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("acceleration.AdFormEcommerceTracking", {
    config: {/*DATA*/
	id: 1460557848598544385,
	name: "AdForm - Ecommerce Tracking",
	async: true,
	description: "To be placed only on order confirmation page.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adform.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [

	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
(function() {

  // The basic tracker
  window._adftrack = {
    pm: '' + this.getValueForToken("campaignid") + '',
    id: '' + this.getValueForToken("pointid") + ''
  };

  // Split the user name into first and last name
  var full_name = '' + this.getValueForToken("name") + '';
  var name_arr = full_name.split(' ');
  var first_name = name_arr[0];
  name_arr.splice(0, 1);
  var last_name = name_arr.join(' ');
  
  // Get items and total order quantity
  var i=0, ii = this.getValueForToken("product_id_arr").length, total_quantity=0, items = [];
  for (; i < ii; i++) {
    total_quantity += this.getValueForToken("order_quantity_list")[i];
    var item = {
      categoryname: this.getValueForToken("category_name_arr")[i],
      productid: this.getValueForToken("product_id_arr")[i], 
      productname: this.getValueForToken("product_name_arr")[i],
      productcount: this.getValueForToken("product_count_arr")[i],
      productsales: this.getValueForToken("product_sales_arr")[i]
    }
    items[i] = item;
  }
  
  // Add the order details
  window._adftrack.order = {
      sales: '' + this.getValueForToken("subtotal") + '',
      currency: '' + this.getValueForToken("currency") + '',
      basketsize: total_quantity,
      country: '' + this.getValueForToken("country") + '',
      agegroup: '' + this.getValueForToken("agegroup") + '',
      gender: '' + this.getValueForToken("gender") + '',
      orderid:'' + this.getValueForToken("order_id") + '',
      email: '' + this.getValueForToken("email") + '',
      firstname: first_name,
      lastname: last_name,
      address1: '' + this.getValueForToken("delivery_address_1") + '',
      address2: '' + this.getValueForToken("delivery_address_2") + '',
      phone: '' + this.getValueForToken("phone") + '',
      zip: '' + this.getValueForToken("postcode") + '',
      itms: items
  };

})();
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
