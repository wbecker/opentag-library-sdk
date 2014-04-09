//:include tagsdk-current.js
var version = "";
var classPath =
	"googledoubleclick.doubleclickforadvertiserswithcustomsubdomaincustomparameterscustomord.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Doubleclick for Advertisers, with custom subdomain, custom parameters, custom ord",
		async: true,
		description: "The non-conversion version of the DoubleClick tag with custom domain and id values, and support for arbitrary custom parameters. This tag supports subdomains both with and without a .fls portion.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/double-click.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Subdomain",
			description: "The subdomain you're accessing doubleclick through.",
			token: "subdomain",
			uv: ""
		}, {
			name: "Activity Suffix",
			description: "A suffix, usually nothing or 'i', which follows 'activity' in the doubleclick url.",
			token: "activity_letter",
			uv: ""
		}, {
			name: "Double Click Id",
			description: "Your unique identifier for your account",
			token: "doubleclick_id",
			uv: ""
		}, {
			name: "Type",
			description: "",
			token: "type",
			uv: ""
		}, {
			name: "Category",
			description: "",
			token: "cat",
			uv: ""
		}, {
			name: "Custom Parameters",
			description: "Any remaining parameters, not visible in the url above, as 'paramName=paramValue' separated by ;",
			token: "custom_params",
			uv: ""
		}, {
			name: "Ord",
			description: "A custom value for \"ord\". Can be left blank.",
			token: "ord",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var axel = Math.random() + "";
		var a = axel * 1000000000000;
		var fl_if = document.createElement("iframe");
		fl_if.src = '//' + this.valueForToken("subdomain") +
			'.fls.doubleclick.net/activity' + this.valueForToken("activity_letter") +
			';src=' + this.valueForToken("doubleclick_id") + ';type=' + this.valueForToken(
				"type") + ';cat=' + this.valueForToken("cat") + ';' + this.valueForToken(
				"custom_params") + ';ord=' + this.valueForToken("ord") + '' + a + '?';
		fl_if.width = "1";
		fl_if.height = "1";
		fl_if.frameborder = "0";
		fl_if.style.display = "none";
		document.body.appendChild(fl_if);
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});