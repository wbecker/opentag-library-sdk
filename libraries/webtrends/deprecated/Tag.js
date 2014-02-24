//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("webtrends.deprecated.Tag", {
    config: {
      /*DATA*/
	id: 35180,
	name: "DEPRECATED",
	async: true,
	description: "",
	html: "<script type=\"text/javascript\" src=\"/cs/static/js/webtrends/webtrends.js\"></script>\n<!-- Version: 9.3.0 -->\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [

	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

	
//<![CDATA[
  var _tag=new WebTrends();
  _tag.dcsGetId();
//]]>	


//<![CDATA[
  _tag.dcsCustom=function(){
    // Add custom parameters here.
    //_tag.DCSext.param_name=param_value;
  }	
  _tag.dcsCollect();
//]]>	


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
