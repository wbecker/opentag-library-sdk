/**ignore at merge**/
//:include tagsdk-current.js
qubit.opentag.Utils.namespace('google.googledynamicremarketingtagconfirmationpage.local');
google.googledynamicremarketingtagconfirmationpage.local.Config =  {
  "parameters": [
     {
      "name": "Product IDs",
      "description": "Product IDs",
      "token": "product_ids",
      "uv": "universal_variable.transaction.line_items[#].product.sku_code",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Product Categories",
      "description": "Product Categories",
      "token": "product_categories",
      "uv": "universal_variable.transaction.line_items[#].product.category",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Page Category",
      "description": "Page Category",
      "token": "page_category",
      "uv": "universal_variable.page.category",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Product Values",
      "description": "Product Values",
      "token": "product_values",
      "uv": "universal_variable.transaction.line_items[#].product.unit_price",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Google Conversion ID",
      "description": "Google Conversion ID",
      "token": "google_conversion_id",
      "uv": "",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    },
     {
      "name": "Google Conversion Label",
      "description": "Google Conversion Label",
      "token": "google_conversion_label",
      "uv": "",
      "inputVariable": "",
      "variable": {
        "value": ""
      }
    }
  ]
};