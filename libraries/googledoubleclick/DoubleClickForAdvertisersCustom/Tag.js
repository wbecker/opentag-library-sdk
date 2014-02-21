//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googledoubleclick.DoubleClickForAdvertisersCustom", {
    config: {/*DATA*/
	id: 27158,
	name: "DoubleClick for Advertisers - Custom",
	async: true,
	description: "The conversion version of the DoubleClick tag",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 26662,
		name: "DoubleClick ID",
		description: "",
		token: "doubleclick_id",
		uv: ""
	},
	{
		id: 26663,
		name: "DoubleClick Tag Type",
		description: "",
		token: "type",
		uv: ""
	},
	{
		id: 26664,
		name: "DoubleClick Tag Category",
		description: "",
		token: "cat",
		uv: ""
	},
	{
		id: 26665,
		name: "Order Total",
		description: "",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 26666,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 26667,
		name: "Custom Parameters",
		description: "",
		token: "custom",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var fl_if = document.createElement("iframe");

fl_if.src='//' + this.getValueForToken("doubleclick_id") + '.fls.doubleclick.net/activityi;src=' + this.getValueForToken("doubleclick_id") + ';type=' + this.getValueForToken("type") + ';cat=' + this.getValueForToken("cat") + ';qty=1;cost=' + this.getValueForToken("order_total") + ';' + this.getValueForToken("custom") + ';ord=' + this.getValueForToken("order_id") + '?';
fl_if.width="1";
fl_if.height="1";
fl_if.frameborder="0";
fl_if.style.display = "none";
document.body.appendChild(fl_if);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
