//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("visualdna.conversionreport.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Report",
		async: true,
		description: "This tag should fire on the user converting to a designated goal identified by a Conversion ID.\nThe tag must have a dependency on the Visual DNA Page View Report tag.\nThe \"Extra Data\" parameter should be assigned a JS object of extra data about the conversion using a JS expression. The keys and values should be agreed with VisualDNA in advance on a partner­ by ­partner, conversion­ by ­conversion basis.\nIf no extra data is available, then an empty object should be assigned to the \"Extra Data\" parameter using a JS expression.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		},
		{
			name: "Extra Data",
			description: "Please read tag description for more details",
			token: "extra_data",
			uv: ""
		},
		{
			name: "Conversion ID",
			description: "An ID identifying the designated Conversion Goal",
			token: "conversion_id",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function ()
{
  window.VDNA = window.VDNA || {};
  window.VDNA.queue = window.VDNA.queue || [];
  
  var args = ["" + this.valueForToken("conversion_id") + ""];
  
  var isEmpty = function (obj) 
  {
    for(var prop in obj) 
    {
      if (obj.hasOwnProperty(prop))
      {
         return false;
      }
    }
    return true;
  };
  
  if (!isEmpty(this.valueForToken("extra_data")))
  {
    args.push(this.valueForToken("extra_data"));
  }

  window.VDNA.queue.push({
    apiKey : "" + this.valueForToken("api_key") + "",
    method : "reportConversion",
    args : args
  });
})();
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
