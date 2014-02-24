//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("marinsoftware.conversionpixelrevenueonly.Tag", {
    config: {/*DATA*/
	id: 24658,
	name: "Conversion Pixel - Revenue only",
	async: true,
	description: "This conversion pixel tracks revenue only. Use either this or the asynchronous Conversion Capture Code depending on the instructions you have been given by Marin.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Marin.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		id: 24158,
		name: "Marin Client Id",
		description: "Your unique marin client id",
		token: "clientId",
		uv: ""
	},
	{
		id: 24159,
		name: "Marin Conversion Type Id",
		description: "Each conversion type represents a page on the client’s website which is considered a goal",
		token: "conversionTypeId",
		uv: ""
	},
	{
		id: 24160,
		name: "Order Id",
		description: "A unique id for the order",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 24161,
		name: "Order Total",
		description: "The total value of the order",
		token: "total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 24162,
		name: "Order currency",
		description: "The order the currency is in. Can be hard coded to GBP if appropriate",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var _mf = document.createElement("form");
_mf.style.display = "none";
_mf.name = "utmform";

var _mta = document.createElement("textarea");
_mta.id = "utmtrans";
_mta.value = "UTM:T|" + this.getValueForToken("orderId") + "||" + this.getValueForToken("total") + "|||||\nUTM:I|" + this.getValueForToken("orderId") + "|" + this.getValueForToken("conversionTypeId") + "|||" + this.getValueForToken("total") + "|";

_mf.appendChild(_mta);
document.body.appendChild(_mf);

var _marinTransaction = {
  currency: "" + this.getValueForToken("currency") + ""
};

var _ml = document.createElement("script");
_ml.src = "//tracker.marinsm.com/tracker/" + this.getValueForToken("clientId") + ".js";

var _m_loaded = false;
var _m_loader = function () {
  if (!_m_loaded) {
    _m_loaded = true;
    document.write = function (pixel) {
      var x = document.createElement("div");
      x.innerHTML = pixel;
      document.body.appendChild(x);
    }
    _marinTrack.processOrders();
  }
}

_ml.onload = _m_loader;
_ml.onreadystatechange = function () {
  if ((this.readyState === "complete") || 
       (this.readyState === "loaded")) {
    _m_loader
  }
};
document.body.appendChild(_ml);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
