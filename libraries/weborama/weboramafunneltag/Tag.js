//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("weborama.weboramafunneltag.Tag", {
    config: {
      /*DATA*/
	id: 29667,
	name: "Weborama - Funnel Tag",
	async: true,
	description: "This tag is typically placed on pages that will lead to a  conversion page. It is away to set measure the path which leads to a conversion.",
	html: "",
	imageUrl: "http://www.weborama.com/files/2012/02/Logo.jpg",
	locationDetail: "",
	priv: false,
	url: "cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 28722,
		name: "Funnel Id",
		description: "Set your funnel id here",
		token: "FUNNEL_ID",
		uv: ""
	},
	{
		id: 28723,
		name: "Full Host",
		description: "Set your host/domain here",
		token: "FULL_HOST",
		uv: ""
	},
	{
		id: 28724,
		name: "Site Id",
		description: "Set your site id here",
		token: "SITE",
		uv: ""
	},
	{
		id: 28725,
		name: "Conversion Page",
		description: "Enter funnel step Id here",
		token: "CONVERSION_PAGE",
		uv: ""
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
var adperftrackobj = {
    funnel_id : this.getValueForToken("FUNNEL_ID"),
    fullhost : '' + this.getValueForToken("FULL_HOST") + '',
    site : this.getValueForToken("SITE"),
    conversion_page : this.getValueForToken("CONVERSION_PAGE")
}
try{ adperfTracker.track( adperftrackobj ); }catch(err){}
      /*~POST*/
    }
});
