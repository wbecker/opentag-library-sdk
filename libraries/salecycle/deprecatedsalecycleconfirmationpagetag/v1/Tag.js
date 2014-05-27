//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"salecycle.deprecatedsalecycleconfirmationpagetag.v1.Tag", {
		config: {
			/*DATA*/
			name: "DEPRECATED SaleCycle Confirmation Page Tag",
			async: true,
			description: "The tag loads a 1px by 1px blank image in the page by calling the SaleCycle PixelCapture.aspx page, and should be implemented on the order completion page only, as close to the top of the page as possible within the <body> tags.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/salecycle.png",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Client ID",
				description: "Implementation consultant will provide you with your Client ID",
				token: "clientID",
				uv: ""
			}, {
				name: "Customer Email",
				description: "",
				token: "userEmail",
				uv: "universal_variable.user.email"
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/
			var src = [
				'https://app.salecycle.com/Import/PixelCapture.aspx?',
				'c=', '' + this.valueForToken("clientID"),
				'&e=', '' + this.valueForToken("userEmail")
			].join('');
			var img = document.createElement('img');
			img.setAttribute('src', src);
			document.body.append(img);

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