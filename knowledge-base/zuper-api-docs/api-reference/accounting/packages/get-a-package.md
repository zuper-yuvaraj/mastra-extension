---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get a Package

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{dc-region}.zuperpro.com/api",
      "variables": {
        "dc-region": {
          "default": "dc-region"
        }
      }
    }
  ],
  "components": {
    "securitySchemes": {
      "sec0": {
        "type": "apiKey",
        "in": "header",
        "name": "x-api-key"
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/invoice_estimate/package/{package_uid}": {
      "get": {
        "summary": "Get a Package",
        "description": "",
        "operationId": "get-a-package",
        "parameters": [
          {
            "name": "package_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"discount\": {\n            \"type\": \"FIXED\",\n            \"value\": 0,\n            \"percent\": 0,\n            \"discount_applicability\": \"LINE_ITEM\",\n            \"discount_label\": \"Discount\",\n            \"discount_fee_uid\": null\n        },\n        \"display_order\": 35,\n        \"package_uid\": \"48bb52f0-cc0a-11ef-bc7d-cb263e5b22e8\",\n        \"package_name\": \"Test 6/25\",\n        \"package_description\": \"Test 6/25\",\n        \"package_remarks\": \"Test 6/25\",\n        \"line_items\": [\n            {\n                \"tax\": {\n                    \"tax_name\": \"custom\",\n                    \"tax_rate\": 10,\n                    \"tax_amount\": 5,\n                    \"tax_exempt\": false\n                },\n                \"line_item_uid\": \"49272be6-1f4e-49a9-acc0-308c52609416\",\n                \"line_item_type\": \"ITEM\",\n                \"product_ref_id\": {\n                    \"tax\": {\n                        \"tax_rate\": 10,\n                        \"tax_name\": \"custom\",\n                        \"tax_exempt\": false\n                    },\n                    \"product_name\": \"NEW PRODUCT WITH SYNC TEST\",\n                    \"product_category\": {\n                        \"category_name\": \"Furniture\",\n                        \"category_uid\": \"3e2b4520-81ce-11e9-b902-35bbc7d2063e\"\n                    },\n                    \"product_uid\": \"9ef2c790-b34f-11e9-9f97-b9b7552ee8ce\",\n                    \"updated_at\": \"2024-12-20T13:00:38.695Z\",\n                    \"created_at\": \"2019-07-31T04:56:56.201Z\",\n                    \"is_deleted\": false,\n                    \"meta_data\": [\n                        {\n                            \"label\": \"Xero Item Account\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5bf\"\n                        },\n                        {\n                            \"label\": \"QBO Class\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c0\"\n                        },\n                        {\n                            \"label\": \"QB Product ID\",\n                            \"value\": \"67\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c1\"\n                        },\n                        {\n                            \"label\": \"Text Area\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c2\"\n                        },\n                        {\n                            \"label\": \"Hidden field\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c3\"\n                        },\n                        {\n                            \"label\": \"testitem\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c4\"\n                        },\n                        {\n                            \"label\": \"QBO Preferred Vendor\",\n                            \"value\": \"Bob's Burger Joint\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c5\"\n                        },\n                        {\n                            \"label\": \"New product\",\n                            \"value\": \"\",\n                            \"type\": \"LOOKUP\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c6\"\n                        },\n                        {\n                            \"label\": \"QBO Inventory Account\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c7\"\n                        },\n                        {\n                            \"label\": \"QBO Expense Account\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c8\"\n                        },\n                        {\n                            \"label\": \"QBO Income Account\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"67656a76166d17eeb85ef5c9\"\n                        },\n                        {\n                            \"label\": \"Mobile test hidden to FE\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": true,\n                            \"_id\": \"67656a76166d17eeb85ef5ca\"\n                        },\n                        {\n                            \"label\": \"QBO Item Class\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"_id\": \"665ed79ce14825a08dc781fd\"\n                        },\n                        {\n                            \"label\": \"Xero Item ID\",\n                            \"value\": \"P001\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"_id\": \"65df0cb654015e396037ec7d\"\n                        },\n                        {\n                            \"label\": \"Zoho Books Item ID\",\n                            \"value\": \"4334875000003678016\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"_id\": \"665ed7a45932c6876745ecc2\"\n                        },\n                        {\n                            \"label\": \"Xero Item ID\",\n                            \"value\": \"PART TESTING\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"_id\": \"673dca383e30fd820917dde2\"\n                        },\n                        {\n                            \"label\": \"Vignesh Custom\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Part/Product\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"67656a76166d17eeb85ef5cf\"\n                        },\n                        {\n                            \"label\": \"Checkbox\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Part/Product\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"67656a76166d17eeb85ef5d0\"\n                        },\n                        {\n                            \"label\": \"Time Input\",\n                            \"value\": \"\",\n                            \"type\": \"TIME\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Part/Product\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"67656a76166d17eeb85ef5d1\"\n                        },\n                        {\n                            \"label\": \"DateTime Input\",\n                            \"value\": \"\",\n                            \"type\": \"DATETIME\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Part/Product\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"67656a76166d17eeb85ef5d2\"\n                        },\n                        {\n                            \"label\": \"Test Asset\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": true,\n                            \"group_name\": \"Asset group for product\",\n                            \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"67656a76166d17eeb85ef5d3\"\n                        },\n                        {\n                            \"label\": \"Product description\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Asset group for product\",\n                            \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"67656a76166d17eeb85ef5d4\"\n                        },\n                        {\n                            \"label\": \"Vignesh Custom\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"665ed79ce14825a08dc78205\"\n                        },\n                        {\n                            \"label\": \"Text Area\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"665ed79ce14825a08dc78206\"\n                        },\n                        {\n                            \"label\": \"Checkbox\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_ITEM\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"665ed79ce14825a08dc78207\"\n                        },\n                        {\n                            \"label\": \"DateTime Input\",\n                            \"value\": \"\",\n                            \"type\": \"DATETIME\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"665ed79ce14825a08dc78208\"\n                        },\n                        {\n                            \"label\": \"Time Input\",\n                            \"value\": \"\",\n                            \"type\": \"TIME\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"665ed79ce14825a08dc78209\"\n                        },\n                        {\n                            \"label\": \"Asset decription\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"New group\",\n                            \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"665ed79ce14825a08dc7820a\"\n                        },\n                        {\n                            \"label\": \"Test Asset\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": true,\n                            \"group_name\": \"Asset group\",\n                            \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"665ed79ce14825a08dc7820b\"\n                        },\n                        {\n                            \"label\": \"Product description\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Asset group\",\n                            \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"665ed79ce14825a08dc7820c\"\n                        }\n                    ],\n                    \"product_id\": \"PART TESTING\",\n                    \"has_custom_tax\": true,\n                    \"product_type\": \"SERVICE\",\n                    \"is_billable\": true\n                },\n                \"product_id\": \"PART TESTING\",\n                \"product_uid\": \"9ef2c790-b34f-11e9-9f97-b9b7552ee8ce\",\n                \"image\": \"\",\n                \"name\": \"NEW PRODUCT WITH SYNC TEST\",\n                \"brand\": \"\",\n                \"specification\": \"\",\n                \"uom\": \"\",\n                \"quantity\": 1,\n                \"unit_price\": 50,\n                \"discount\": 0,\n                \"serial_nos\": [],\n                \"discount_type\": \"FIXED\",\n                \"total\": 55,\n                \"product_type\": \"SERVICE\",\n                \"associated_products\": [],\n                \"_id\": \"677b97a92949e3984e0fc2bd\"\n            }\n        ],\n        \"fees\": [],\n        \"sub_total\": 55,\n        \"total\": 55,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_by\": {\n            \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n            \"first_name\": \"def\",\n            \"last_name\": \"M\",\n            \"email\": \"def.m@def.co\",\n            \"external_login_id\": \"\",\n            \"home_phone_number\": null,\n            \"designation\": \"Tech\",\n            \"emp_code\": \"1234\",\n            \"prefix\": \"Z22\",\n            \"work_phone_number\": null,\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n            \"hourly_labor_charge\": 20,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-07-05T06:42:02.000Z\",\n            \"updated_at\": \"2024-12-26T12:12:07.000Z\"\n        },\n        \"created_at\": \"2025-01-06T08:43:21.385Z\",\n        \"updated_at\": \"2025-01-06T08:43:21.385Z\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "discount": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string",
                              "example": "FIXED"
                            },
                            "value": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "percent": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "discount_applicability": {
                              "type": "string",
                              "example": "LINE_ITEM"
                            },
                            "discount_label": {
                              "type": "string",
                              "example": "Discount"
                            },
                            "discount_fee_uid": {}
                          }
                        },
                        "display_order": {
                          "type": "integer",
                          "example": 35,
                          "default": 0
                        },
                        "package_uid": {
                          "type": "string",
                          "example": "48bb52f0-cc0a-11ef-bc7d-cb263e5b22e8"
                        },
                        "package_name": {
                          "type": "string",
                          "example": "Test 6/25"
                        },
                        "package_description": {
                          "type": "string",
                          "example": "Test 6/25"
                        },
                        "package_remarks": {
                          "type": "string",
                          "example": "Test 6/25"
                        },
                        "line_items": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "tax": {
                                "type": "object",
                                "properties": {
                                  "tax_name": {
                                    "type": "string",
                                    "example": "custom"
                                  },
                                  "tax_rate": {
                                    "type": "integer",
                                    "example": 10,
                                    "default": 0
                                  },
                                  "tax_amount": {
                                    "type": "integer",
                                    "example": 5,
                                    "default": 0
                                  },
                                  "tax_exempt": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "line_item_uid": {
                                "type": "string",
                                "example": "49272be6-1f4e-49a9-acc0-308c52609416"
                              },
                              "line_item_type": {
                                "type": "string",
                                "example": "ITEM"
                              },
                              "product_ref_id": {
                                "type": "object",
                                "properties": {
                                  "tax": {
                                    "type": "object",
                                    "properties": {
                                      "tax_rate": {
                                        "type": "integer",
                                        "example": 10,
                                        "default": 0
                                      },
                                      "tax_name": {
                                        "type": "string",
                                        "example": "custom"
                                      },
                                      "tax_exempt": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      }
                                    }
                                  },
                                  "product_name": {
                                    "type": "string",
                                    "example": "NEW PRODUCT WITH SYNC TEST"
                                  },
                                  "product_category": {
                                    "type": "object",
                                    "properties": {
                                      "category_name": {
                                        "type": "string",
                                        "example": "Furniture"
                                      },
                                      "category_uid": {
                                        "type": "string",
                                        "example": "3e2b4520-81ce-11e9-b902-35bbc7d2063e"
                                      }
                                    }
                                  },
                                  "product_uid": {
                                    "type": "string",
                                    "example": "9ef2c790-b34f-11e9-9f97-b9b7552ee8ce"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-12-20T13:00:38.695Z"
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2019-07-31T04:56:56.201Z"
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "meta_data": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "label": {
                                          "type": "string",
                                          "example": "Xero Item Account"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "type": {
                                          "type": "string",
                                          "example": "SINGLE_ITEM"
                                        },
                                        "hide_field": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "module_name": {
                                          "type": "string",
                                          "example": "PRODUCT"
                                        },
                                        "hide_to_fe": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "67656a76166d17eeb85ef5bf"
                                        }
                                      }
                                    }
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "example": "PART TESTING"
                                  },
                                  "has_custom_tax": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "product_type": {
                                    "type": "string",
                                    "example": "SERVICE"
                                  },
                                  "is_billable": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  }
                                }
                              },
                              "product_id": {
                                "type": "string",
                                "example": "PART TESTING"
                              },
                              "product_uid": {
                                "type": "string",
                                "example": "9ef2c790-b34f-11e9-9f97-b9b7552ee8ce"
                              },
                              "image": {
                                "type": "string",
                                "example": ""
                              },
                              "name": {
                                "type": "string",
                                "example": "NEW PRODUCT WITH SYNC TEST"
                              },
                              "brand": {
                                "type": "string",
                                "example": ""
                              },
                              "specification": {
                                "type": "string",
                                "example": ""
                              },
                              "uom": {
                                "type": "string",
                                "example": ""
                              },
                              "quantity": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "unit_price": {
                                "type": "integer",
                                "example": 50,
                                "default": 0
                              },
                              "discount": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "serial_nos": {
                                "type": "array"
                              },
                              "discount_type": {
                                "type": "string",
                                "example": "FIXED"
                              },
                              "total": {
                                "type": "integer",
                                "example": 55,
                                "default": 0
                              },
                              "product_type": {
                                "type": "string",
                                "example": "SERVICE"
                              },
                              "associated_products": {
                                "type": "array"
                              },
                              "_id": {
                                "type": "string",
                                "example": "677b97a92949e3984e0fc2bd"
                              }
                            }
                          }
                        },
                        "addons": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "tax": {
                                "type": "object",
                                "properties": {
                                  "tax_name": {
                                    "type": "string",
                                    "example": "custom"
                                  },
                                  "tax_rate": {
                                    "type": "integer",
                                    "example": 10,
                                    "default": 0
                                  },
                                  "tax_amount": {
                                    "type": "integer",
                                    "example": 5,
                                    "default": 0
                                  },
                                  "tax_exempt": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "line_item_uid": {
                                "type": "string",
                                "example": "49272be6-1f4e-49a9-acc0-308c52609416"
                              },
                              "line_item_type": {
                                "type": "string",
                                "example": "ITEM"
                              },
                              "product_ref_id": {
                                "type": "object",
                                "properties": {
                                  "tax": {
                                    "type": "object",
                                    "properties": {
                                      "tax_rate": {
                                        "type": "integer",
                                        "example": 10,
                                        "default": 0
                                      },
                                      "tax_name": {
                                        "type": "string",
                                        "example": "custom"
                                      },
                                      "tax_exempt": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      }
                                    }
                                  },
                                  "product_name": {
                                    "type": "string",
                                    "example": "NEW PRODUCT WITH SYNC TEST"
                                  },
                                  "product_category": {
                                    "type": "object",
                                    "properties": {
                                      "category_name": {
                                        "type": "string",
                                        "example": "Furniture"
                                      },
                                      "category_uid": {
                                        "type": "string",
                                        "example": "3e2b4520-81ce-11e9-b902-35bbc7d2063e"
                                      }
                                    }
                                  },
                                  "product_uid": {
                                    "type": "string",
                                    "example": "9ef2c790-b34f-11e9-9f97-b9b7552ee8ce"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-12-20T13:00:38.695Z"
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2019-07-31T04:56:56.201Z"
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "meta_data": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "label": {
                                          "type": "string",
                                          "example": "Xero Item Account"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "type": {
                                          "type": "string",
                                          "example": "SINGLE_ITEM"
                                        },
                                        "hide_field": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "module_name": {
                                          "type": "string",
                                          "example": "PRODUCT"
                                        },
                                        "hide_to_fe": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "67656a76166d17eeb85ef5bf"
                                        }
                                      }
                                    }
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "example": "PART TESTING"
                                  },
                                  "has_custom_tax": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "product_type": {
                                    "type": "string",
                                    "example": "SERVICE"
                                  },
                                  "is_billable": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  }
                                }
                              },
                              "product_id": {
                                "type": "string",
                                "example": "PART"
                              },
                              "product_uid": {
                                "type": "string",
                                "example": "9ef2c790-b34f-11e9-9f97-b9b7552ee8ce"
                              },
                              "image": {
                                "type": "string",
                                "example": ""
                              },
                              "name": {
                                "type": "string",
                                "example": "Addon Shingles"
                              },
                              "brand": {
                                "type": "string",
                                "example": ""
                              },
                              "specification": {
                                "type": "string",
                                "example": ""
                              },
                              "uom": {
                                "type": "string",
                                "example": ""
                              },
                              "quantity": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "unit_price": {
                                "type": "integer",
                                "example": 50,
                                "default": 0
                              },
                              "discount": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "serial_nos": {
                                "type": "array"
                              },
                              "discount_type": {
                                "type": "string",
                                "example": "FIXED"
                              },
                              "total": {
                                "type": "integer",
                                "example": 55,
                                "default": 0
                              },
                              "product_type": {
                                "type": "string",
                                "example": "SERVICE"
                              },
                              "associated_products": {
                                "type": "array"
                              },
                              "_id": {
                                "type": "string",
                                "example": "677b97a92949e3984e0fc2bd"
                              }
                            }
                          }
                        },
                        "fees": {
                          "type": "array"
                        },
                        "sub_total": {
                          "type": "integer",
                          "example": 55,
                          "default": 0
                        },
                        "total": {
                          "type": "integer",
                          "example": 55,
                          "default": 0
                        },
                        "is_active": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "48625036-fef6-4637-99e7-f09377a4f9ba"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "def"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "M"
                            },
                            "email": {
                              "type": "string",
                              "example": "def.m@def.co"
                            },
                            "external_login_id": {
                              "type": "string",
                              "example": ""
                            },
                            "home_phone_number": {},
                            "designation": {
                              "type": "string",
                              "example": "Tech"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "1234"
                            },
                            "prefix": {
                              "type": "string",
                              "example": "Z22"
                            },
                            "work_phone_number": {},
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                            },
                            "hourly_labor_charge": {
                              "type": "integer",
                              "example": 20,
                              "default": 0
                            },
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2024-07-05T06:42:02.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-12-26T12:12:07.000Z"
                            }
                          }
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2025-01-06T08:43:21.385Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2025-01-06T08:43:21.385Z"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "deprecated": false
      }
    }
  },
  "x-readme": {
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": false
  },
  "x-readme-fauxas": true
}
```