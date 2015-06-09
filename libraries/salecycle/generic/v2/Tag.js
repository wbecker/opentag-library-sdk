//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("salecycle.generic.v2.Tag", {
	config: {
		/*DATA*/
		name: "Generic",
		async: true,
		description: "To implement SaleCycle, SaleCycle code must be pasted into the relevant web pages on your live website.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Client Name",
			description: "needs to be changed to reflect your company name minus any spaces",
			token: "clientName",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
    try {var __scP=(document.location.protocol=="https:")?"https://":"http://";
    var __scS=document.createElement("script");__scS.type="text/javascript";
    __scS.async=true;__scS.src=__scP+"d16fk4ms6rqz1v.cloudfront.net/capture/"+this.valueForToken("clientName")+".js";
    document.getElementsByTagName("head")[0].appendChild(__scS);}catch(e){}
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