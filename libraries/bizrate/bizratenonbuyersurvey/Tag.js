//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("bizrate.bizratenonbuyersurvey.Tag", {
    config: {
      /*DATA*/
	id: 35192,
	name: "BizRate Non-Buyer Survey",
	async: true,
	description: "Survey presented to visitors as they browse the site.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/BizRate.png",
	locationDetail: "",
	priv: false,
	url: "eval.bizrate.com/js/survey_${merchant_id}_1.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 34380,
		name: "BizRate Merchant ID",
		description: "The identifier that corresponds to the merchant.",
		token: "merchant_id",
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
