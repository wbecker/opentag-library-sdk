//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"insparq.sharingwidgetrecipientpopoutcoupon.v1.Tag", {
		config: {
			/*DATA*/
			name: "Sharing Widget - Recipient Popout Coupon",
			async: true,
			description: "On every other template page (non-PDP), place this code anywhere on the page. This will load only the Sharing Widget recipient popout coupon",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "api.insparq.com/v2.0.0/widget/scripts/issw.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "jQuery",
				description: "e.g. $ , jQuery , myJquery etc..",
				token: "jQuery",
				uv: ""
			}, {
				name: "jQuery Element Selector",
				description: "e.g. insertAfter(....) , appendTo(.....) , insertBefore(......) etc..",
				token: "selector",
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
			var html = '<div id="issw"	data-issw-publisher-id="' + 
					this.valueForToken("key") + 
					'" data-issw-load-config="1" data-issw-page-mode="hidden"></div>';

			this.valueForToken("jQuery")(html).this.valueForToken("selector");
			/*~PRE*/
		},
		post: function() {
			/*POST*/
			/*~POST*/
		}
	});