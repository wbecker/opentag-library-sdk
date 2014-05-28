//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("tenderapp.tenderapp.v1.Tag", {
	config: {
		/*DATA*/
		name: "Tender App",
		async: true,
		description: "Web 2.0 based support desk and knowlegebase software.",
		html: "<script type=\"text/javascript\" src=\"//${SUBDOMAIN}.tenderapp.com/tender_widget.js\"></script><!--@SRC@-->",
		imageUrl: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Subdomain",
			description: "Please enter your subdomain. Example: yourdomain.tenderapp.com",
			token: "SUBDOMAIN",
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
		/*~POST*/
	}
});