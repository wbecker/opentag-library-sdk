//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("zopim.zopimlivechat.Tag", {
    config: {/*DATA*/
	id: 34670,
	name: "Zopim Livechat",
	async: true,
	description: "Real-time customer satisfaction made simple. Implement Zopim's live chat functionality on your site.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/zopim.jpeg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		id: 33735,
		name: "Client ID",
		description: "The unique client id, e.g. \"183c79emDOKRZl6272Y1DS6nmuZiWCDTf3e\"",
		token: "client_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

window.$zopim || (function(d, s) {
  var z = $zopim = function(c) {
    z._.push(c)
  }, $ = z.s =
      d.createElement(s),
    e = d.getElementsByTagName(s)[0];
  z.set = function(o) {
    z.set.
    _.push(o)
  };
  z._ = [];
  z.set._ = [];
  $.async = !0;
  $.setAttribute('charset', 'utf-8');
  $.src = '//v2.zopim.com/?' + this.getValueForToken("client_id") + '';
  z.t = +new Date;
  $.
  type = 'text/javascript';
  e.parentNode.insertBefore($, e)
})(document, 'script');


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
