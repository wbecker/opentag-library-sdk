//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("tenderapp.tenderapp.Tag", {
	config: {
		/*DATA*/
		name: "Tender App",
		async: true,
		description: "Web 2.0 based support desk and knowlegebase software.",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"//${SUBDOMAIN}.tenderapp.com/tender_widget.js\"></script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/TenderSupport.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Subdomain",
			description: "Please enter your subdomain. Example: yourdomain.tenderapp.com",
			token: "SUBDOMAIN",
			uv: ""
		}
	]
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
		/*~POST*/
	}
});
