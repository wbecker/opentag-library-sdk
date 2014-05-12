//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"bing.bingadcentercampaignanalyticsdeprecated.Tag", {
		config: {
			/*DATA*/
			name: "Bing AdCenter Campaign Analytics DEPRECATED",
			async: true,
			description: "Script to generate reports on the success of your advertising campaigns via Bing Search",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Bing.png",
			locationDetail: "",
			isPrivate: true,
			url: "flex.atdmt.com/mstag/site/${url_guid}/mstag.js",
			usesDocWrite: true,
			parameters: [{
				name: "URL ID",
				description: "The id in the url of the script, eg fb9804c9-b48f-46d1-a20e-88c3ff3302cc",
				token: "url_guid",
				uv: ""
			}, {
				name: "Domain ID",
				description: "The id common to all bing tracking tags",
				token: "domain_id",
				uv: ""
			}, {
				name: "Action Id",
				description: "The id unique to this tracking tag",
				token: "action_id",
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
			if (!window.mstag) {
				window.mstag = {
					loadTag: function() {},
					time: (new Date()).getTime()
				};
			}

			/*~PRE*/
		},
		post: function() {
			/*POST*/
			window.mstag.loadTag("analytics", {
				dedup: "1",
				domainId: "" + this.valueForToken("domain_id"),
				type: "1",
				actionid: "" + this.valueForToken("action_id")
			});

			/*~POST*/
		}
	});