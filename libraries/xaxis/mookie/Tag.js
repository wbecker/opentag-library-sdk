//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("xaxis.mookie.Tag", {
    config: {
      /*DATA*/
	name: "Mookie",
	async: true,
	description: "Fires a pixel with transaction information and 5 custom parameters.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/xaxis.png?AWSAccessKeyId=ASIAJLLUDWFIY3ANST5A&Expi",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "Xaxis Client ID",
		description: "Client identifier",
		token: "client_id",
		uv: ""
	},
	{
		name: "Xaxis Tag Name",
		description: "Name of the Xaxis tag - usually references the functionality",
		token: "tag_name",
		uv: ""
	},
	{
		name: "Xaxis Data Source",
		description: "Where the data is captured from",
		token: "data_source",
		uv: ""
	},
	{
		name: "Xaxis Order Value",
		description: "Basket or order value",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		name: "Xaxis Transaction ID",
		description: "ID of the transaction",
		token: "transaction_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Xaxis Transaction Currency",
		description: "The currency of the transaction",
		token: "transaction_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		name: "Xaxis Custom Parameter 1",
		description: "Custom parameter. Leave blank if not used.",
		token: "param1",
		uv: ""
	},
	{
		name: "Xaxis Custom Parameter 2",
		description: "Custom parameter. Leave blank if not used.",
		token: "param2",
		uv: ""
	},
	{
		name: "Xaxis Custom Parameter 3",
		description: "Custom parameter. Leave blank if not used.",
		token: "param3",
		uv: ""
	},
	{
		name: "Xaxis Custom Parameter 4",
		description: "Custom parameter. Leave blank if not used.",
		token: "param4",
		uv: ""
	},
	{
		name: "Xaxis Custom Parameter 5",
		description: "Custom parameter. Leave blank if not used.",
		token: "param5",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

var img = new Image(0, 0),
  arr = [],
  obj = {
    migClientId: '' + this.getValueForToken("client_id") + '',
    migAction: '' + this.getValueForToken("tag_name") + '',
    migSource: '' + this.getValueForToken("data_source") + '',
    migParam1: '' + this.getValueForToken("param1") + '',
    migParam2: '' + this.getValueForToken("param2") + '',
    migParam3: '' + this.getValueForToken("param3") + '',
    migParam4: '' + this.getValueForToken("param4") + '',
    migParam5: '' + this.getValueForToken("param5") + '',
    migValue: '' + this.getValueForToken("order_total") + '',
    migXId: '' + this.getValueForToken("transaction_id") + '',
    migCurrency: '' + this.getValueForToken("transaction_currency") + ''
};
for (var key in obj) {
  arr.push(key + "=" + obj[key]);
}
img.src = "//t.mookie1.com/t/v1/event?" + arr.join("&");


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
