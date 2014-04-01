/**ignore at merge**/
//:include tagsdk-current.js
qubit.opentag.Utils.namespace('google.googleaffiliatenetworkconversion.local');
google.googleaffiliatenetworkconversion.local.Config =  {
  "parameters": [
     {
      "name": "Advertiser Id",
      "description": "Your Company ID, provided by Google Affiliate Network. This value is the same for all orders.",
      "token": "ADVERTISER_ID",
      "uv": "",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Order Id",
      "description": "The customer order id, a unique identifier that allows you to map this conversion",
      "token": "ORDER_ID",
      "uv": "universal_variable.transaction.order_id",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Order Subtotal",
      "description": "The total conversion value",
      "token": "SUB_TOTAL",
      "uv": "universal_variable.transaction.subtotal",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Currency Code",
      "description": "Currency code related to the order amounts and Product prices.",
      "token": "CURRENCY",
      "uv": "universal_variable.transaction.currency",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Click Id",
      "description": "Unique identifier generated on each click. Set to 0 if not used.",
      "token": "CLICK_ID",
      "uv": "",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Event Type",
      "description": "Define the type of event. Valid options are \"transaction\" or \"action\".",
      "token": "EVENT_TYPE",
      "uv": "",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    }
  ]
};