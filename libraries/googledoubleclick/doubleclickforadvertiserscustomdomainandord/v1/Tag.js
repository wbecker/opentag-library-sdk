//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"googledoubleclick.doubleclickforadvertiserscustomdomainandord.v1.Tag", {
		config: {
			/*DATA*/
			name: "DoubleClick for Advertisers - Custom Domain and Ord",
			async: true,
			description: "The non-conversion version of the DoubleClick tag with custom domain id and ord values.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/double-click.png",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Subdomain",
				description: "The name of your subdomain.",
				token: "subdomain",
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
				name: "Ord",
				description: "e.g. 1",
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
			fl_if.src = 'http://' + this.valueForToken("subdomain") +
				'.fls.doubleclick.net/activityi;src=' + this.valueForToken("doubleclick_id") +
				';type=' + this.valueForToken("type") + ';cat=' + this.valueForToken("cat") +
				';ord=' + this.valueForToken("ord") + ';num=' + a + '?';
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