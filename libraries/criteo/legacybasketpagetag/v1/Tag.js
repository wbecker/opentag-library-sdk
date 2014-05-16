//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("criteo.legacybasketpagetag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Legacy - Basket Page Tag",
		async: true,
		description: "The basket tag has to be integrated on the basket or checkout pagee.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [

		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var src = [
			"https://", "sslwidget.criteo.com", "/", "" + this.valueForToken(
				"call_parameter") + "", "/", "display.js?", "p1="
		];
		var params = [
			"v=2",
			"&wi=", "" + this.valueForToken("wi") + "",
			"&s=0"
		];

		for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
			var index = i + 1;
			params.push("&i" + index + "=" + this.valueForToken("product_ids")[i]);
			params.push("&p" + index + "=" + this.valueForToken("product_unit_prices")[
				i]);
			params.push("&q" + index + "=" + this.valueForToken("quantities")[i]);
		}
		src.push(escape(params.join("")));
		src.push("&t1=transaction&resptype=gif");
		var img = document.createElement("img");
		img.setAttribute("src", src.join(""));
		img.setAttribute("height", "1");
		img.setAttribute("width", "1");
		document.body.appendChild(img);


		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		//exit


		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});