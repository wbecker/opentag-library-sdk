//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("weborama.weboramafunneltag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Weborama - Funnel Tag",
		async: true,
		description: "This tag is typically placed on pages that will lead to a  conversion page. It is away to set measure the path which leads to a conversion.",
		html: "",
		imageUrl: "http://www.weborama.com/files/2012/02/Logo.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Funnel Id",
			description: "Set your funnel id here",
			token: "FUNNEL_ID",
			uv: ""
		}, {
			name: "Full Host",
			description: "Set your host/domain here",
			token: "FULL_HOST",
			uv: ""
		}, {
			name: "Site Id",
			description: "Set your site id here",
			token: "SITE",
			uv: ""
		}, {
			name: "Conversion Page",
			description: "Enter funnel step Id here",
			token: "CONVERSION_PAGE",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		window.adperftrackobj = {
			funnel_id: this.valueForToken("FUNNEL_ID"),
			fullhost: '' + this.valueForToken("FULL_HOST"),
			site: this.valueForToken("SITE"),
			conversion_page: this.valueForToken("CONVERSION_PAGE")
		}
		try {
			adperfTracker.track(adperftrackobj);
		} catch (err) {}

		/*~POST*/
	}
});