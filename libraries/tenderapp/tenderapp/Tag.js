//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("tenderapp.tenderapp.Tag", {
    config: {
      /*DATA*/
	id: 5,
	name: "Tender App",
	async: true,
	description: "Web 2.0 based support desk and knowlegebase software.",
	html: "<script type=\"text/javascript\" src=\"//${SUBDOMAIN}.tenderapp.com/tender_widget.js\"></script>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/TenderSupport.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 3,
		name: "Subdomain",
		description: "Please enter your subdomain. Example: yourdomain.tenderapp.com",
		token: "SUBDOMAIN",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
