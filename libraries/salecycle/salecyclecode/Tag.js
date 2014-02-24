//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("salecycle.salecyclecode.Tag", {
    config: {/*DATA*/
	id: 24661,
	name: "SaleCycle Code",
	async: true,
	description: "To implement SaleCycle, SaleCycle code must be pasted into the relevant web pages on your live website.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/salecycle.png",
	locationDetail: "",
	priv: false,
	url: "app.salecycle.com/capture/${clientName}.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 24183,
		name: "Client Name",
		description: "needs to be changed to reflect your company name minus any spaces",
		token: "clientName",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
