//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("conexance.categorypagedeprecated.Tag", {
    config: {/*DATA*/
	id: 34661,
	name: "Category Page DEPRECATED",
	async: true,
	description: "DO NOT USE DEPRECATED",
	html: "<script type=\"text/javascript\" src=\"${web1by1_function_script}\"></script><script type=\"text/javascript\" src=\"${web1by1_config_script}\"></script>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Conexance.gif",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33677,
		name: "Web1by1 Function Script URL",
		description: "The full URL (i.e. http://www.your-website.com/w1x1.js) for the Web1by1 Function Script",
		token: "web1by1_function_script",
		uv: ""
	},
	{
		id: 33678,
		name: "Web1by1 Configuration Parameters Script URL",
		description: "The full URL of the Web1by1 Configuration Parameters script (either production or test)",
		token: "web1by1_config_script",
		uv: ""
	},
	{
		id: 33679,
		name: "Page Category",
		description: "A string representing the category of the page",
		token: "page_category",
		uv: "universal_variable.page.category"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/






  w1x1.iSet(2, "" + this.getValueForToken("page_category") + "");


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
