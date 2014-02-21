//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("intelligentreach.BasketPageTag", {
    config: {/*DATA*/
	id: 26658,
	name: "Basket Page Tag",
	async: true,
	description: "The tag is placed on basket page only.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/IntelligentReach.png",
	locationDetail: "",
	priv: false,
	url: "www.ist-track.com/ContainerBasketJavaScript.ashx?companyId=${id}",
	usesDocWrite: true,
	parameters: [
	{
		id: 26157,
		name: "Basket SKU List",
		description: "",
		token: "productSku",
		uv: "universal_variable.basket.line_items[#].product.sku_code"
	},
	{
		id: 26158,
		name: "Intelligent Reach ID",
		description: "",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
istCompanyId = "" + this.getValueForToken("id") + "";
istItemCount = this.getValueForToken("productSku").length;
istBasketItems = "";

for(var i = 0; i < this.getValueForToken("productSku").length; i++) {
  istBasketItems += this.getValueForToken("productSku")[i];

  if (this.getValueForToken("productSku").length !== (i + 1)) {
    istBasketItems += "|";
  }
}
istUserDefinedFieldOne = "";
istUserDefinedFieldTwo = "";
istUserDefinedFieldThree = "";
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
