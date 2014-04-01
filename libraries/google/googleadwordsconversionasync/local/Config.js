/**ignore at merge**/
//:include tagsdk-current.js
qubit.opentag.Utils.namespace('google.googleadwordsconversionasync.local');
google.googleadwordsconversionasync.local.Config =  {
  "parameters": [
     {
      "name": "Conversion ID",
      "description": "Your Google id provided in the script",
      "token": "conversion_id",
      "uv": "",
      "inputVariable": "1",
      "variable": {
        "value": "1"
      }
    },
     {
      "name": "Conversion Label",
      "description": "A alphanumeric label of your conversion tracking",
      "token": "label",
      "uv": "",
      "inputVariable": "2",
      "variable": {
        "value": "2"
      }
    },
     {
      "name": "Conversion Value",
      "description": "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
      "token": "value",
      "uv": "universal_variable.transaction.subtotal",
      "inputVariable": "3",
      "variable": {
        "value": "3"
      }
    }
  ]
};