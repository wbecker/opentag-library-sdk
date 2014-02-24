//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googledoubleclick.doubleclickforadvertiserssimple.Tag", {
    config: {/*DATA*/
	id: 24159,
	name: "DoubleClick for Advertisers - Simple",
	async: true,
	description: "The non-conversion version of the DoubleClick tag",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/double-click.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 23664,
		name: "Double Click Id",
		description: "Your unique identifier for your account",
		token: "doubleclick_id",
		uv: ""
	},
	{
		id: 23665,
		name: "Type",
		description: "",
		token: "type",
		uv: ""
	},
	{
		id: 23666,
		name: "Category",
		description: "",
		token: "cat",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var axel = Math.random() + "";
var a = axel * 1000000000000;
var fl_if = document.createElement("iframe");
fl_if.src='//' + this.getValueForToken("doubleclick_id") + '.fls.doubleclick.net/activityi;src=' + this.getValueForToken("doubleclick_id") + ';type=' + this.getValueForToken("type") + ';cat=' + this.getValueForToken("cat") + ';ord=1;num=' + a + '?';
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
