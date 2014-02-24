//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("prismastar.productpagetag.Tag", {
    config: {
      /*DATA*/
	id: 35188,
	name: "Product Page Tag",
	async: true,
	description: "To be placed on all product pages",
	html: "<img src=\"https://${GATEWAY_PREFIX}.cpr.prismastar.com/v2_0/recorder/?type=productPage&customerCode=${CUSTOMER_CODE}&order=${PRODUCT_ID}|1|${ITEM_PRICE}|${CATEGORY_CODE}\" style=\"display:none;\" />",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/PrismaStar.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34354,
		name: "Gateway Prefix",
		description: "Your gateway prefix assigned by your PrismaStar account manager",
		token: "GATEWAY_PREFIX",
		uv: ""
	},
	{
		id: 34355,
		name: "Customer Code",
		description: "Your customer code assigned by your PrismaStar account manager",
		token: "CUSTOMER_CODE",
		uv: ""
	},
	{
		id: 34357,
		name: "Product ID",
		description: "The product ID or SKU used in the data feeds",
		token: "PRODUCT_ID",
		uv: "universal_variable.product.id"
	},
	{
		id: 34358,
		name: "Price",
		description: "The individual price of this item",
		token: "ITEM_PRICE",
		uv: "universal_variable.product.unit_sale_price"
	},
	{
		id: 34359,
		name: "Category",
		description: "The product category used in the data feeds (Optional)",
		token: "CATEGORY_CODE",
		uv: "universal_variable.product.category"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
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
