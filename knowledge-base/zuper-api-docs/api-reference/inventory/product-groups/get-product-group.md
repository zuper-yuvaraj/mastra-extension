---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Products Group Details

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
    "/product/group/{group_uid}": {
      "get": {
        "summary": "Get Products Group Details",
        "description": "",
        "operationId": "get-product-group",
        "parameters": [
          {
            "name": "group_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"product_group_uid\": \"b5f28460-086a-11ef-b1bb-abbf9b4053e6\",\n        \"product_group_name\": \"Group 1\",\n        \"product_group_description\": \"<p>Group 1</p>\",\n        \"associated_products\": [\n            {\n                \"product\": {\n                    \"product_uid\": \"57415200-038f-11ef-8727-3d85d81c857a\",\n                    \"prefix\": \"PT_001\",\n                    \"product_id\": \"-500 Product\",\n                    \"product_category\": {\n                        \"category_name\": \"Electrical\",\n                        \"category_uid\": \"ecdfb500-480d-11ea-85e2-91cf2fb0b4bb\"\n                    },\n                    \"product_image\": \"\",\n                    \"product_barcode\": \"10\",\n                    \"product_files\": [],\n                    \"brand\": \"-500 Product\",\n                    \"specification\": \"-500 Product\",\n                    \"uom\": \"1 Nos\",\n                    \"product_name\": \"-500 Product\",\n                    \"product_description\": \"\",\n                    \"product_type\": \"PRODUCT\",\n                    \"meta_data\": [\n                        {\n                            \"label\": \"QB Product ID\",\n                            \"value\": \"127\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"_id\": \"66388eba59ad4836498206d5\"\n                        },\n                        {\n                            \"label\": \"Xero Item Account\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"662b3f0887bd85bcde08f3fb\"\n                        },\n                        {\n                            \"label\": \"Hidden field\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"662b3f0887bd85bcde08f3fc\"\n                        },\n                        {\n                            \"label\": \"testitem\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"662b3f0887bd85bcde08f3fd\"\n                        },\n                        {\n                            \"label\": \"Text Area\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"662b3f0887bd85bcde08f3fe\"\n                        },\n                        {\n                            \"label\": \"QBO Preferred Vendor\",\n                            \"value\": \"Bob's Burger Joint\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"662b3f0887bd85bcde08f3ff\"\n                        },\n                        {\n                            \"label\": \"New product\",\n                            \"value\": \"\",\n                            \"type\": \"LOOKUP\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"662b3f0887bd85bcde08f400\"\n                        },\n                        {\n                            \"label\": \"QBO Inventory Account\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"662b3f0887bd85bcde08f401\"\n                        },\n                        {\n                            \"label\": \"QBO Income Account\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"662b3f0887bd85bcde08f402\"\n                        },\n                        {\n                            \"label\": \"DateTime Input\",\n                            \"value\": \"\",\n                            \"type\": \"DATETIME\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"662b3f0887bd85bcde08f403\"\n                        },\n                        {\n                            \"label\": \"Vignesh Custom\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"662b3f0887bd85bcde08f404\"\n                        },\n                        {\n                            \"label\": \"Test Asset\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": true,\n                            \"group_name\": \"Asset group j\",\n                            \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"662b3f0887bd85bcde08f405\"\n                        },\n                        {\n                            \"label\": \"Time Input\",\n                            \"value\": \"\",\n                            \"type\": \"TIME\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"662b3f0887bd85bcde08f406\"\n                        },\n                        {\n                            \"label\": \"Text Input\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"New group\",\n                            \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"662b3f0887bd85bcde08f407\"\n                        },\n                        {\n                            \"label\": \"Text Area\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"662b3f0887bd85bcde08f408\"\n                        },\n                        {\n                            \"label\": \"Checkbox\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_ITEM\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"test group\",\n                            \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                            \"_id\": \"662b3f0887bd85bcde08f409\"\n                        },\n                        {\n                            \"label\": \"Asset set name\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"New group\",\n                            \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"662b3f0887bd85bcde08f40a\"\n                        },\n                        {\n                            \"label\": \"Product description\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Asset group j\",\n                            \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"662b3f0887bd85bcde08f40b\"\n                        },\n                        {\n                            \"label\": \"Asset decription\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_field\": false,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"New group\",\n                            \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"662b3f0887bd85bcde08f40c\"\n                        },\n                        {\n                            \"label\": \"Text Input\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"New group\",\n                            \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"662b3e2287bd85bcde08f1a1\"\n                        },\n                        {\n                            \"label\": \"Asset set name\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"New group\",\n                            \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"662b3e2287bd85bcde08f1a4\"\n                        },\n                        {\n                            \"label\": \"Text Input\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"New group\",\n                            \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"662b3e0d87bd85bcde08f115\"\n                        },\n                        {\n                            \"label\": \"Asset set name\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": true,\n                            \"module_name\": \"PRODUCT\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"New group\",\n                            \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                            \"_id\": \"662b3e0d87bd85bcde08f118\"\n                        },\n                        {\n                            \"label\": \"Xero Item ID\",\n                            \"value\": \"-500 Product\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"_id\": \"664af5151b8f16a1ecbb47df\"\n                        }\n                    ],\n                    \"product_manual_link\": \"\",\n                    \"location_availability\": [\n                        {\n                            \"location\": {\n                                \"is_deleted\": false,\n                                \"location_name\": \"Team location 1\",\n                                \"location_uid\": \"afa47af0-1489-11ec-9f07-294a44e6be4e\"\n                            },\n                            \"quantity\": 492,\n                            \"min_quantity\": 10,\n                            \"serial_nos\": [],\n                            \"created_at\": \"2024-04-26T05:43:36.839Z\",\n                            \"_id\": \"662b3f0887bd85bcde08f411\"\n                        },\n                        {\n                            \"location\": {\n                                \"is_deleted\": false,\n                                \"location_name\": \"123\",\n                                \"location_uid\": \"893005f0-eb7c-11eb-b156-7dd89e71c7c5\"\n                            },\n                            \"quantity\": 1,\n                            \"min_quantity\": 0,\n                            \"serial_nos\": [\n                                \"34\"\n                            ],\n                            \"_id\": \"6641ea21b033d8eda0b13bd5\",\n                            \"created_at\": \"2024-05-13T10:23:29.735Z\"\n                        }\n                    ],\n                    \"track_quantity\": true,\n                    \"quantity\": 493,\n                    \"min_quantity\": 10,\n                    \"currency\": \"\",\n                    \"price\": -500,\n                    \"purchase_price\": 100,\n                    \"has_custom_tax\": true,\n                    \"tax\": {\n                        \"tax_rate\": 10,\n                        \"tax_name\": \"VAT\",\n                        \"tax_exempt\": false\n                    },\n                    \"is_available\": true,\n                    \"is_deleted\": false,\n                    \"created_by\": {\n                        \"user_uid\": \"50689376-6348-41dd-81e3-9d75dc73027d\",\n                        \"first_name\": \"mark\",\n                        \"last_name\": \"cooper\",\n                        \"email\": \"user@zuper.co\",\n                        \"external_login_id\": null,\n                        \"home_phone_number\": null,\n                        \"designation\": \"Test\",\n                        \"emp_code\": \"5000\",\n                        \"prefix\": null,\n                        \"work_phone_number\": \"1234567890\",\n                        \"mobile_phone_number\": null,\n                        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/924687ab-4112-40c4-b21f-f4dfb839b47c.webp\",\n                        \"hourly_labor_charge\": 20,\n                        \"is_active\": true,\n                        \"is_deleted\": false,\n                        \"created_at\": \"2023-05-05T06:57:26.000Z\",\n                        \"updated_at\": \"2024-06-26T13:14:00.000Z\"\n                    },\n                    \"created_at\": \"2024-04-26T05:39:25.093Z\",\n                    \"product_no\": 833,\n                    \"original_price\": -500\n                },\n                \"quantity\": 1\n            }\n        ],\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_by\": {\n            \"user_uid\": \"50689376-6348-41dd-81e3-9d75dc73027d\",\n            \"first_name\": \"mark\",\n            \"last_name\": \"cooper\",\n            \"email\": \"john@zuper\",\n            \"external_login_id\": null,\n            \"home_phone_number\": null,\n            \"designation\": \"Test\",\n            \"emp_code\": \"5000\",\n            \"prefix\": null,\n            \"work_phone_number\": \"1234567890\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/924687ab-4112-40c4-b21f-f4dfb839b47c.webp\",\n            \"hourly_labor_charge\": 20,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2023-05-05T06:57:26.000Z\",\n            \"updated_at\": \"2024-06-26T13:14:00.000Z\"\n        },\n        \"created_at\": \"2024-05-02T09:59:48.399Z\"\n    }\n}"
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
                        "product_group_uid": {
                          "type": "string",
                          "example": "b5f28460-086a-11ef-b1bb-abbf9b4053e6"
                        },
                        "product_group_name": {
                          "type": "string",
                          "example": "Group 1"
                        },
                        "product_group_description": {
                          "type": "string",
                          "example": "<p>Group 1</p>"
                        },
                        "associated_products": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "product": {
                                "type": "object",
                                "properties": {
                                  "product_uid": {
                                    "type": "string",
                                    "example": "57415200-038f-11ef-8727-3d85d81c857a"
                                  },
                                  "prefix": {
                                    "type": "string",
                                    "example": "PT_001"
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "example": "-500 Product"
                                  },
                                  "product_category": {
                                    "type": "object",
                                    "properties": {
                                      "category_name": {
                                        "type": "string",
                                        "example": "Electrical"
                                      },
                                      "category_uid": {
                                        "type": "string",
                                        "example": "ecdfb500-480d-11ea-85e2-91cf2fb0b4bb"
                                      }
                                    }
                                  },
                                  "product_image": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "product_barcode": {
                                    "type": "string",
                                    "example": "10"
                                  },
                                  "product_files": {
                                    "type": "array"
                                  },
                                  "brand": {
                                    "type": "string",
                                    "example": "-500 Product"
                                  },
                                  "specification": {
                                    "type": "string",
                                    "example": "-500 Product"
                                  },
                                  "uom": {
                                    "type": "string",
                                    "example": "1 Nos"
                                  },
                                  "product_name": {
                                    "type": "string",
                                    "example": "-500 Product"
                                  },
                                  "product_description": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "product_type": {
                                    "type": "string",
                                    "example": "PRODUCT"
                                  },
                                  "meta_data": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "label": {
                                          "type": "string",
                                          "example": "QB Product ID"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": "127"
                                        },
                                        "hide_field": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "hide_to_fe": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "66388eba59ad4836498206d5"
                                        }
                                      }
                                    }
                                  },
                                  "product_manual_link": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "location_availability": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "location": {
                                          "type": "object",
                                          "properties": {
                                            "is_deleted": {
                                              "type": "boolean",
                                              "example": false,
                                              "default": true
                                            },
                                            "location_name": {
                                              "type": "string",
                                              "example": "Team location 1"
                                            },
                                            "location_uid": {
                                              "type": "string",
                                              "example": "afa47af0-1489-11ec-9f07-294a44e6be4e"
                                            }
                                          }
                                        },
                                        "quantity": {
                                          "type": "integer",
                                          "example": 492,
                                          "default": 0
                                        },
                                        "min_quantity": {
                                          "type": "integer",
                                          "example": 10,
                                          "default": 0
                                        },
                                        "serial_nos": {
                                          "type": "array"
                                        },
                                        "created_at": {
                                          "type": "string",
                                          "example": "2024-04-26T05:43:36.839Z"
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "662b3f0887bd85bcde08f411"
                                        }
                                      }
                                    }
                                  },
                                  "track_quantity": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "quantity": {
                                    "type": "integer",
                                    "example": 493,
                                    "default": 0
                                  },
                                  "min_quantity": {
                                    "type": "integer",
                                    "example": 10,
                                    "default": 0
                                  },
                                  "currency": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "price": {
                                    "type": "integer",
                                    "example": -500,
                                    "default": 0
                                  },
                                  "purchase_price": {
                                    "type": "integer",
                                    "example": 100,
                                    "default": 0
                                  },
                                  "has_custom_tax": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
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
                                        "example": "VAT"
                                      },
                                      "tax_exempt": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      }
                                    }
                                  },
                                  "is_available": {
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
                                        "example": "50689376-6348-41dd-81e3-9d75dc73027d"
                                      },
                                      "first_name": {
                                        "type": "string",
                                        "example": "mark"
                                      },
                                      "last_name": {
                                        "type": "string",
                                        "example": "cooper"
                                      },
                                      "email": {
                                        "type": "string",
                                        "example": "user@zuper.co"
                                      },
                                      "external_login_id": {},
                                      "home_phone_number": {},
                                      "designation": {
                                        "type": "string",
                                        "example": "Test"
                                      },
                                      "emp_code": {
                                        "type": "string",
                                        "example": "5000"
                                      },
                                      "prefix": {},
                                      "work_phone_number": {
                                        "type": "string",
                                        "example": "1234567890"
                                      },
                                      "mobile_phone_number": {},
                                      "profile_picture": {
                                        "type": "string",
                                        "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/924687ab-4112-40c4-b21f-f4dfb839b47c.webp"
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
                                        "example": "2023-05-05T06:57:26.000Z"
                                      },
                                      "updated_at": {
                                        "type": "string",
                                        "example": "2024-06-26T13:14:00.000Z"
                                      }
                                    }
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2024-04-26T05:39:25.093Z"
                                  },
                                  "product_no": {
                                    "type": "integer",
                                    "example": 833,
                                    "default": 0
                                  },
                                  "original_price": {
                                    "type": "integer",
                                    "example": -500,
                                    "default": 0
                                  }
                                }
                              },
                              "quantity": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              }
                            }
                          }
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
                              "example": "50689376-6348-41dd-81e3-9d75dc73027d"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "mark"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "cooper"
                            },
                            "email": {
                              "type": "string",
                              "example": "john@zuper"
                            },
                            "external_login_id": {},
                            "home_phone_number": {},
                            "designation": {
                              "type": "string",
                              "example": "Test"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "5000"
                            },
                            "prefix": {},
                            "work_phone_number": {
                              "type": "string",
                              "example": "1234567890"
                            },
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/924687ab-4112-40c4-b21f-f4dfb839b47c.webp"
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
                              "example": "2023-05-05T06:57:26.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-06-26T13:14:00.000Z"
                            }
                          }
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2024-05-02T09:59:48.399Z"
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
                  "Invalid Price List": {
                    "value": "{\n   \"type\": \"error\",\n   \"message\": \"Invalid Pricelist UID\",\n   \"title\": \"Pricelist Not Found\",\n}"
                  }
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