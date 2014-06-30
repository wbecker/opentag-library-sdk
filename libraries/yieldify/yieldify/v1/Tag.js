//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("yieldify.yieldify.v1.Tag", {
	config: {
		/*DATA*/
		name: "Yieldify",
		async: true,
		description: "Yieldify is a software solution which allows you to maximise your opt-in rates and revenue from visitors leaving your website.",
		html: "<!-- Start of Yieldify Code -->\n \n<!-- End of Yieldify Code -->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Yieldify ID",
			description: "Your Yieldify ID",
			token: "yieldifyid",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var _this = this;
		(function(d) {
			var e = d.createElement('script');
			e.src = d.location.protocol +
				'//app.yieldify.com/yieldify/code.js?yieldify_id=' +
				_this.valueForToken("yieldifyid") + '&loca=' + window.location.href;
			e.async = true;
			d.getElementsByTagName("head")[0].appendChild(e);
		}(document));
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