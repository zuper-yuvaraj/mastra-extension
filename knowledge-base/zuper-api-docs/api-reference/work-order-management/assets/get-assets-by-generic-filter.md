---
updatedAt: 2026-10-02T14:49:14.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Assets By Generic Filter

Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on Get All Assets, for building complex AND/OR filter conditions.

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
    "/assets/filter": {
      "post": {
        "summary": "Get Assets By Generic Filter",
        "description": "Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on Get All Assets, for building complex AND/OR filter conditions.",
        "operationId": "get-assets-by-generic-filter",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "limit",
            "in": "query",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          },
          {
            "name": "sort",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "default": "ASC"
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "asset_code",
                "asset_name",
                "asset_serial_number",
                "purchase_date",
                "placed_in_service",
                "warranty_expiry_date",
                "created_at",
                "updated_at"
              ],
              "default": "created_at"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "filter_rules"
                ],
                "properties": {
                  "filter_rules": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "displayKeyValue": {
                          "type": "array",
                          "default": [],
                          "items": {
                            "type": "string"
                          }
                        },
                        "field_type": {
                          "type": "string"
                        },
                        "key": {
                          "type": "string"
                        },
                        "module": {
                          "type": "string"
                        },
                        "operator": {
                          "type": "string",
                          "enum": [
                            "EQUAL_TO",
                            "GREATER_THAN",
                            "LESS_THAN",
                            "BETWEEN",
                            "NOT_EQUAL_TO",
                            "CONTAINS",
                            "NOT_CONTAINS",
                            "IS_EMPTY",
                            "IS_NOT_EMPTY",
                            "LESS_THAN_EQUAL_TO",
                            "IN",
                            "NOT_IN"
                          ]
                        },
                        "type": {
                          "type": "string"
                        },
                        "value": {
                          "type": "array",
                          "default": [],
                          "items": {
                            "type": "string"
                          }
                        }
                      },
                      "type": "object"
                    }
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"customer\": {\n                \"customer_uid\": \"988d1e50-63e1-11ed-b940-1743c554f5b8\",\n                \"customer_first_name\": \"Valliyappan Test\",\n                \"customer_last_name\": \"Customer\",\n                \"customer_organization\": {\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"organization_address\": {\n                        \"street\": \"Prakasam Street Gangai Karai Puram \",\n                        \"landmark\": \"test\",\n                        \"city\": \"Chennai \",\n                        \"zip_code\": \"600017\",\n                        \"geo_cordinates\": [\n                            13.0494011,\n                            80.24528719999999\n                        ],\n                        \"state\": \"Tamil Nadu \",\n                        \"country\": \"India\"\n                    },\n                    \"organization_name\": \"Organization B\",\n                    \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e3b71910-622d-11eb-acfd-7fcb0a8f1c32.png\",\n                    \"organization_email\": \"test@zuper.co\",\n                    \"organization_uid\": \"32d0e260-622e-11eb-acfd-7fcb0a8f1c32\"\n                },\n                \"customer_company_name\": \"\",\n                \"customer_email\": \"valliyappan.59@gmail.com\",\n                \"customer_contact_no\": {\n                    \"mobile\": \"+919600086457\",\n                    \"home\": \"+919600086457\",\n                    \"work\": \"+919600086457\"\n                },\n                \"is_active\": true,\n                \"is_deleted\": false\n            },\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"Asset #1\",\n            \"asset_quantity\": 1,\n            \"placed_in_service\": \"2019-11-26T18:30:00.000Z\",\n            \"asset_uid\": \"a66b2660-02ce-11ea-9b9c-3396bbcbc13d\",\n            \"created_by\": {\n                \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n                \"first_name\": \"Simon\",\n                \"last_name\": \"V\",\n                \"email\": \"sreevidya@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7010092903\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"120\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7010092903\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2019-01-21T07:24:22.000Z\",\n                \"updated_at\": \"2023-10-05T11:24:19.000Z\"\n            },\n            \"updated_at\": \"2023-10-11T10:51:21.534Z\",\n            \"created_at\": \"2019-11-09T08:55:16.680Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"asset_location\": {\n                \"city\": \"Chennai\",\n                \"state\": \"Tamil Nadu\",\n                \"street\": \"No.49, G2, Ranga Vilas, CTS Apartments, 2nd Street, Bhuvaneshwari Nagar, Adambakkam,\",\n                \"country\": \"India\",\n                \"zip_code\": \"600099\",\n                \"first_name\": \"Valliyappan Test\",\n                \"last_name\": \"Customer\",\n                \"phone_number\": \"+919600086457\",\n                \"email\": \"valliyappan.59@gmail.com\"\n            },\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d0fefba147c8fe77ff4bc\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d0fefba147c8fe77ff4bd\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d0fefba147c8fe77ff4be\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d0fefba147c8fe77ff4bf\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d0fefba147c8fe77ff4c0\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d0fefba147c8fe77ff4c1\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d0fefba147c8fe77ff4c2\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d0fefba147c8fe77ff4c3\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d0fefba147c8fe77ff4c4\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d0fefba147c8fe77ff4c5\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d0fefba147c8fe77ff4c6\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d0fefba147c8fe77ff4c7\"\n                }\n            ],\n            \"owned_by_customer\": false,\n            \"asset_serial_number\": \"\",\n            \"warranty_expiry_date\": \"2024-12-24T18:29:00.000Z\",\n            \"asset_status\": \"UNDER_SERVICE\",\n            \"asset_category\": {\n                \"is_deleted\": false,\n                \"category_name\": \"TEST\",\n                \"category_description\": \"test\",\n                \"category_uid\": \"48d3c590-859d-11eb-a715-479656013538\"\n            },\n            \"purchase_date\": \"2023-01-08T18:30:00.000Z\",\n            \"organization\": {\n                \"is_deleted\": false,\n                \"organization_address\": {\n                    \"street\": \"Prakasam Street Gangai Karai Puram \",\n                    \"landmark\": \"test\",\n                    \"city\": \"Chennai \",\n                    \"zip_code\": \"600017\",\n                    \"geo_cordinates\": [\n                        13.0494011,\n                        80.24528719999999\n                    ],\n                    \"state\": \"Tamil Nadu \",\n                    \"country\": \"India\"\n                },\n                \"organization_name\": \"Organization B\",\n                \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e3b71910-622d-11eb-acfd-7fcb0a8f1c32.png\",\n                \"organization_email\": \"test@zuper.co\",\n                \"organization_uid\": \"32d0e260-622e-11eb-acfd-7fcb0a8f1c32\",\n                \"no_of_customers\": 7\n            },\n            \"property\": null,\n            \"asset_description\": null,\n            \"asset_image\": null,\n            \"parent_asset\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"Asset with attachment\",\n            \"asset_quantity\": 1,\n            \"purchase_date\": \"2019-10-31T18:30:00.000Z\",\n            \"warranty_expiry_date\": \"2023-11-30T18:29:59.000Z\",\n            \"placed_in_service\": \"2019-11-12T18:30:00.000Z\",\n            \"customer\": null,\n            \"asset_uid\": \"3b0e1940-05e9-11ea-a33b-8daefac258b1\",\n            \"created_by\": {\n                \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n                \"first_name\": \"Simon\",\n                \"last_name\": \"V\",\n                \"email\": \"sreevidya@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7010092903\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"120\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7010092903\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2019-01-21T07:24:22.000Z\",\n                \"updated_at\": \"2023-10-05T11:24:19.000Z\"\n            },\n            \"updated_at\": \"2023-09-29T09:52:57.681Z\",\n            \"created_at\": \"2019-11-13T07:43:06.460Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"asset_location\": {\n                \"city\": \"Chennai\",\n                \"state\": \"Tamil Nadu\",\n                \"street\": \"Tamil Nadu 600041\",\n                \"zip_code\": \"600041\",\n                \"geo_cordinates\": [\n                    49.4544677,\n                    2.1115111\n                ],\n                \"first_name\": \"\",\n                \"last_name\": \"\",\n                \"phone_number\": \"\",\n                \"email\": \"\"\n            },\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65145df5f42678bea508915c\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-08-11 08:00:00\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65145df5f42678bea508915d\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65145df5f42678bea508915e\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65145df5f42678bea508915f\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"13:30:00\",\n                    \"type\": \"TIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65145df5f42678bea5089160\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65145df5f42678bea5089161\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"Schedule\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65145df5f42678bea5089162\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65145df5f42678bea5089163\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65145df5f42678bea5089164\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65145df5f42678bea5089165\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65145df5f42678bea5089166\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65145df5f42678bea5089167\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture\",\n                    \"group_uid\": \"964e8850-0e6c-11ee-9f8e-0f93d9851045\",\n                    \"_id\": \"65145dc9f42678bea5088c66\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"65145dc9f42678bea5088c6b\"\n                },\n                {\n                    \"label\": \"Sample furniture\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"65145dc9f42678bea5088c6c\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64d5eab97c0c9e18fa171db5\"\n                },\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"Alana Drayton\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Test\",\n                    \"group_uid\": \"3e057e40-7d4b-11ed-afd9-b91d9207a4f4\",\n                    \"_id\": \"64d5eab97c0c9e18fa171db9\"\n                }\n            ],\n            \"owned_by_customer\": false,\n            \"asset_serial_number\": \"\",\n            \"asset_category\": {\n                \"category_uid\": \"d2cf3340-dc33-11ec-a181-135b3a6a41fa\",\n                \"category_name\": \"HVAC Form\",\n                \"is_deleted\": false\n            },\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"asset_description\": null,\n            \"asset_image\": null,\n            \"organization\": null,\n            \"parent_asset\": {\n                \"asset_uid\": \"3d0f2790-1cd1-11ee-b2bf-6314be51e000\",\n                \"asset_code\": \"001\",\n                \"asset_name\": \"test\",\n                \"asset_image\": null,\n                \"asset_serial_number\": \"1234\",\n                \"is_deleted\": false,\n                \"is_active\": true\n            },\n            \"property\": {\n                \"is_deleted\": false,\n                \"property_address\": {\n                    \"city\": \"Chennai\",\n                    \"state\": \"Tamil Nadu\",\n                    \"street\": \"Valsaravakkam, 2nd St, Thandavamoorthy Nagar, valsaravakkam\",\n                    \"country\": \"India\",\n                    \"landmark\": \"\",\n                    \"zip_code\": \"600087\",\n                    \"geo_cordinates\": [\n                        13.0422535,\n                        80.1776209\n                    ],\n                    \"_id\": \"651bdcf749914f69f938fd5b\"\n                },\n                \"property_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/158f1650-381d-11ee-897e-11080c4458ed.webp\",\n                \"no_of_jobs\": 0,\n                \"property_name\": \"v2 phase\",\n                \"property_uid\": \"341ce520-381d-11ee-a025-6fe458af8702\"\n            },\n            \"id\": \"undefined\"\n        },\n        {\n            \"purchase_date\": \"2019-11-01T00:00:00.000Z\",\n            \"warranty_expiry_date\": \"2019-11-27T00:00:00.000Z\",\n            \"placed_in_service\": \"2019-11-13T00:00:00.000Z\",\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"Test Edit\",\n            \"asset_category\": {\n                \"category_name\": \"Electrical\",\n                \"category_description\": \"Description about Category #2\",\n                \"category_uid\": \"3aa88fd0-09fe-11ea-b1f3-d505ea8dd454\",\n                \"is_deleted\": true\n            },\n            \"asset_quantity\": 2,\n            \"customer\": null,\n            \"asset_uid\": \"c1568860-0f77-11ea-9802-7702120cf290\",\n            \"created_by\": {\n                \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n                \"first_name\": \"Simon\",\n                \"last_name\": \"V\",\n                \"email\": \"sreevidya@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7010092903\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"120\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7010092903\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2019-01-21T07:24:22.000Z\",\n                \"updated_at\": \"2023-10-05T11:24:19.000Z\"\n            },\n            \"updated_at\": \"2023-09-13T14:39:37.430Z\",\n            \"created_at\": \"2019-11-25T11:36:00.753Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"asset_location\": {\n                \"state\": \"Tamil Nadu\",\n                \"zip_code\": 600032,\n                \"city\": \"Chennai\",\n                \"street\": \"A-3,4, Guindy Industrial Estate ,Guindy\",\n                \"geo_cordinates\": null,\n                \"country\": \"India\",\n                \"landmark\": \"\"\n            },\n            \"custom_fields\": [],\n            \"owned_by_customer\": true,\n            \"asset_serial_number\": \"tag1,tag2\",\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"organization\": null,\n            \"property\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"purchase_date\": \"2019-11-22T00:00:00.000Z\",\n            \"warranty_expiry_date\": \"2019-12-06T00:00:00.000Z\",\n            \"placed_in_service\": \"2019-11-23T00:00:00.000Z\",\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"Test Edit\",\n            \"asset_category\": {\n                \"category_name\": \"Electrical\",\n                \"category_description\": \"Description about Category #2\",\n                \"category_uid\": \"3aa88fd0-09fe-11ea-b1f3-d505ea8dd454\",\n                \"is_deleted\": true\n            },\n            \"asset_quantity\": 2,\n            \"customer\": null,\n            \"asset_uid\": \"b7e064d0-0f78-11ea-948e-61d2b63d77ad\",\n            \"created_by\": {\n                \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n                \"first_name\": \"Simon\",\n                \"last_name\": \"V\",\n                \"email\": \"sreevidya@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7010092903\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"120\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7010092903\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2019-01-21T07:24:22.000Z\",\n                \"updated_at\": \"2023-10-05T11:24:19.000Z\"\n            },\n            \"updated_at\": \"2023-09-13T14:39:37.469Z\",\n            \"created_at\": \"2019-11-25T11:42:54.396Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"asset_location\": {\n                \"state\": \"Tamil Nadu\",\n                \"zip_code\": 600032,\n                \"city\": \"Chennai\",\n                \"street\": \"A-3,4, Guindy Industrial Estate ,Guindy\",\n                \"geo_cordinates\": null,\n                \"country\": \"India\",\n                \"landmark\": \"\"\n            },\n            \"custom_fields\": [],\n            \"owned_by_customer\": true,\n            \"asset_serial_number\": \"tag1,tag2\",\n            \"asset_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/82e73a40-0f7a-11ea-9e19-e54346875012.PNG\",\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"organization\": null,\n            \"property\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"Job Asset\",\n            \"asset_quantity\": 1,\n            \"customer\": null,\n            \"purchase_date\": \"2021-12-18T18:30:00.000Z\",\n            \"warranty_expiry_date\": \"2022-12-19T18:29:00.000Z\",\n            \"placed_in_service\": \"2021-12-18T18:30:00.000Z\",\n            \"asset_uid\": \"a8668810-2637-11ea-925d-cdd13f1805f4\",\n            \"created_by\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"Raghav\",\n                \"last_name\": \"G\",\n                \"email\": \"raghav@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722822\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2023-05-02T10:58:16.000Z\"\n            },\n            \"updated_at\": \"2023-05-05T10:27:19.472Z\",\n            \"created_at\": \"2019-12-24T10:25:07.873Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"custom_fields\": [\n                {\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"61bdc9d591f1365a8a59c127\",\n                    \"label\": \"hide Text Input\",\n                    \"value\": \"n\",\n                    \"type\": \"SINGLE_LINE\"\n                },\n                {\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": true,\n                    \"_id\": \"61bdc9d591f1365a8a59c128\",\n                    \"label\": \"Read Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\"\n                },\n                {\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"61bdc9d591f1365a8a59c129\",\n                    \"label\": \"File Input 1\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\"\n                }\n            ],\n            \"owned_by_customer\": true,\n            \"asset_serial_number\": \"\",\n            \"asset_category\": {\n                \"category_name\": \"Air Conditioner\",\n                \"category_description\": \"Description\",\n                \"category_uid\": \"22b74240-09fe-11ea-b1f3-d505ea8dd454\",\n                \"is_deleted\": false\n            },\n            \"organization\": null,\n            \"property\": null,\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"next_service_date\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"test name\",\n            \"asset_quantity\": 1,\n            \"customer\": null,\n            \"purchase_date\": \"2019-12-23T18:30:00.000Z\",\n            \"warranty_expiry_date\": \"2020-12-24T18:29:00.000Z\",\n            \"placed_in_service\": \"2019-12-23T18:30:00.000Z\",\n            \"asset_uid\": \"ddd6cc80-2637-11ea-925d-cdd13f1805f4\",\n            \"created_by\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"Raghav\",\n                \"last_name\": \"G\",\n                \"email\": \"raghav@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722822\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2023-05-02T10:58:16.000Z\"\n            },\n            \"updated_at\": \"2023-09-07T06:09:39.284Z\",\n            \"created_at\": \"2019-12-24T10:26:37.531Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64f9692370a0b08001a21ad8\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64f9692370a0b08001a21ad9\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64f9692370a0b08001a21ada\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64f9692370a0b08001a21adb\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64f9692370a0b08001a21adc\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64f9692370a0b08001a21add\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64f9692370a0b08001a21ade\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64f9692370a0b08001a21adf\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"64f9692370a0b08001a21ae0\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"64f9692370a0b08001a21ae1\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"64f9692370a0b08001a21ae2\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"64f9692370a0b08001a21ae3\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"64f9692370a0b08001a21ae4\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"64f9692370a0b08001a21ae5\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture\",\n                    \"group_uid\": \"964e8850-0e6c-11ee-9f8e-0f93d9851045\",\n                    \"_id\": \"64f9692370a0b08001a21ae6\"\n                }\n            ],\n            \"owned_by_customer\": true,\n            \"asset_serial_number\": \"\",\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"organization\": null,\n            \"property\": null,\n            \"asset_category\": {\n                \"category_name\": \"Household Furniture\",\n                \"category_uid\": \"04f74780-7fee-11ea-afe7-09e91c6d0bfa\",\n                \"is_deleted\": false\n            },\n            \"asset_description\": null,\n            \"asset_location\": {\n                \"landmark\": \"\",\n                \"city\": \"Thoraipakkam\",\n                \"state\": \"Tamil Nadu\",\n                \"street\": \"Jain College, D B Jain College main enterence, Jothi Nagar\",\n                \"zip_code\": \"600097\",\n                \"geo_cordinates\": [\n                    0,\n                    0\n                ],\n                \"first_name\": \"\",\n                \"last_name\": \"\",\n                \"phone_number\": \"\",\n                \"email\": \"\"\n            },\n            \"parent_asset\": null,\n            \"asset_image\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"name of prd\",\n            \"asset_quantity\": 1,\n            \"customer\": null,\n            \"purchase_date\": \"2019-12-24T00:00:00.000Z\",\n            \"warranty_expiry_date\": \"2020-12-24T00:00:00.000Z\",\n            \"placed_in_service\": \"2019-12-24T00:00:00.000Z\",\n            \"asset_uid\": \"1c3e4b10-2638-11ea-925d-cdd13f1805f4\",\n            \"created_by\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"Raghav\",\n                \"last_name\": \"G\",\n                \"email\": \"raghav@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722822\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2023-05-02T10:58:16.000Z\"\n            },\n            \"updated_at\": \"2023-05-05T10:27:19.472Z\",\n            \"created_at\": \"2019-12-24T10:28:22.229Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"custom_fields\": [],\n            \"owned_by_customer\": true,\n            \"asset_serial_number\": \"\",\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"organization\": null,\n            \"property\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"name of prd\",\n            \"asset_quantity\": 1,\n            \"customer\": null,\n            \"purchase_date\": \"2019-12-24T00:00:00.000Z\",\n            \"warranty_expiry_date\": \"2020-12-24T00:00:00.000Z\",\n            \"placed_in_service\": \"2019-12-24T00:00:00.000Z\",\n            \"asset_uid\": \"41cc6600-2638-11ea-925d-cdd13f1805f4\",\n            \"created_by\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"Raghav\",\n                \"last_name\": \"G\",\n                \"email\": \"raghav@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722822\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2023-05-02T10:58:16.000Z\"\n            },\n            \"updated_at\": \"2023-05-05T10:27:19.472Z\",\n            \"created_at\": \"2019-12-24T10:29:25.235Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"custom_fields\": [],\n            \"owned_by_customer\": true,\n            \"asset_serial_number\": \"\",\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"organization\": null,\n            \"property\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"name of prd\",\n            \"asset_quantity\": 1,\n            \"customer\": null,\n            \"purchase_date\": \"2019-12-24T00:00:00.000Z\",\n            \"warranty_expiry_date\": \"2020-12-24T18:29:59.000Z\",\n            \"placed_in_service\": \"2019-12-24T00:00:00.000Z\",\n            \"asset_uid\": \"0615ba20-2639-11ea-925d-cdd13f1805f4\",\n            \"created_by\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"Raghav\",\n                \"last_name\": \"G\",\n                \"email\": \"raghav@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722822\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2023-05-02T10:58:16.000Z\"\n            },\n            \"updated_at\": \"2023-07-27T12:07:03.548Z\",\n            \"created_at\": \"2019-12-24T10:34:54.549Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64c25de7449ef8ccda6de73e\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64c25de7449ef8ccda6de73f\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64c25de7449ef8ccda6de740\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64c25de7449ef8ccda6de741\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64c25de7449ef8ccda6de742\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64c25de7449ef8ccda6de743\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64c25de7449ef8ccda6de744\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64c25de7449ef8ccda6de745\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"64c25de7449ef8ccda6de746\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture\",\n                    \"group_uid\": \"964e8850-0e6c-11ee-9f8e-0f93d9851045\",\n                    \"_id\": \"64c25de7449ef8ccda6de747\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"64c25de7449ef8ccda6de748\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"64c25de7449ef8ccda6de749\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"64c25de7449ef8ccda6de74a\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"64c25de7449ef8ccda6de74b\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"64c25de7449ef8ccda6de74c\"\n                }\n            ],\n            \"owned_by_customer\": true,\n            \"asset_serial_number\": \"\",\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"organization\": null,\n            \"property\": null,\n            \"asset_category\": {\n                \"category_name\": \"Air Conditioner\",\n                \"category_description\": \"Description\",\n                \"category_uid\": \"22b74240-09fe-11ea-b1f3-d505ea8dd454\",\n                \"is_deleted\": false\n            },\n            \"asset_description\": null,\n            \"asset_location\": {\n                \"landmark\": \"\",\n                \"city\": \"Chennai\",\n                \"state\": \"Tamil Nadu\",\n                \"street\": \"Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi\",\n                \"zip_code\": \"600041\",\n                \"geo_cordinates\": [\n                    12.9733389,\n                    80.2508572\n                ],\n                \"first_name\": \"\",\n                \"last_name\": \"\",\n                \"phone_number\": \"\",\n                \"email\": \"\"\n            },\n            \"parent_asset\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_code\": \"EG01\",\n            \"asset_name\": \"name of prd\",\n            \"asset_quantity\": 1,\n            \"customer\": null,\n            \"purchase_date\": \"2019-12-24T00:00:00.000Z\",\n            \"warranty_expiry_date\": \"2020-12-24T00:00:00.000Z\",\n            \"placed_in_service\": \"2019-12-24T00:00:00.000Z\",\n            \"asset_uid\": \"064b4910-2639-11ea-925d-cdd13f1805f4\",\n            \"created_by\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"Raghav\",\n                \"last_name\": \"G\",\n                \"email\": \"raghav@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722822\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2023-05-02T10:58:16.000Z\"\n            },\n            \"updated_at\": \"2023-05-05T10:27:19.472Z\",\n            \"created_at\": \"2019-12-24T10:34:54.895Z\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"custom_fields\": [],\n            \"owned_by_customer\": true,\n            \"asset_serial_number\": \"\",\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"organization\": null,\n            \"property\": null,\n            \"id\": \"undefined\"\n        }\n    ],\n    \"total_records\": 799,\n    \"total_pages\": 80,\n    \"current_page\": 1\n}"
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
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "customer": {
                            "type": "object",
                            "properties": {
                              "customer_uid": {
                                "type": "string",
                                "example": "988d1e50-63e1-11ed-b940-1743c554f5b8"
                              },
                              "customer_first_name": {
                                "type": "string",
                                "example": "Valliyappan Test"
                              },
                              "customer_last_name": {
                                "type": "string",
                                "example": "Customer"
                              },
                              "customer_organization": {
                                "type": "object",
                                "properties": {
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
                                  "organization_address": {
                                    "type": "object",
                                    "properties": {
                                      "street": {
                                        "type": "string",
                                        "example": "Prakasam Street Gangai Karai Puram "
                                      },
                                      "landmark": {
                                        "type": "string",
                                        "example": "test"
                                      },
                                      "city": {
                                        "type": "string",
                                        "example": "Chennai "
                                      },
                                      "zip_code": {
                                        "type": "string",
                                        "example": "600017"
                                      },
                                      "geo_cordinates": {
                                        "type": "array",
                                        "items": {
                                          "type": "number",
                                          "example": 13.0494011,
                                          "default": 0
                                        }
                                      },
                                      "state": {
                                        "type": "string",
                                        "example": "Tamil Nadu "
                                      },
                                      "country": {
                                        "type": "string",
                                        "example": "India"
                                      }
                                    }
                                  },
                                  "organization_name": {
                                    "type": "string",
                                    "example": "Organization B"
                                  },
                                  "organization_logo": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e3b71910-622d-11eb-acfd-7fcb0a8f1c32.png"
                                  },
                                  "organization_email": {
                                    "type": "string",
                                    "example": "test@zuper.co"
                                  },
                                  "organization_uid": {
                                    "type": "string",
                                    "example": "32d0e260-622e-11eb-acfd-7fcb0a8f1c32"
                                  }
                                }
                              },
                              "customer_company_name": {
                                "type": "string",
                                "example": ""
                              },
                              "customer_email": {
                                "type": "string",
                                "example": "valliyappan.59@gmail.com"
                              },
                              "customer_contact_no": {
                                "type": "object",
                                "properties": {
                                  "mobile": {
                                    "type": "string",
                                    "example": "+919600086457"
                                  },
                                  "home": {
                                    "type": "string",
                                    "example": "+919600086457"
                                  },
                                  "work": {
                                    "type": "string",
                                    "example": "+919600086457"
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
                              }
                            }
                          },
                          "asset_code": {
                            "type": "string",
                            "example": "EG01"
                          },
                          "asset_name": {
                            "type": "string",
                            "example": "Asset #1"
                          },
                          "asset_quantity": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "placed_in_service": {
                            "type": "string",
                            "example": "2019-11-26T18:30:00.000Z"
                          },
                          "asset_uid": {
                            "type": "string",
                            "example": "a66b2660-02ce-11ea-9b9c-3396bbcbc13d"
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "71468f36-a847-49a6-b849-02b6992b2b08"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Simon"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "V"
                              },
                              "email": {
                                "type": "string",
                                "example": "sreevidya@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {
                                "type": "string",
                                "example": "7010092903"
                              },
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "120"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "7010092903"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg"
                              },
                              "hourly_labor_charge": {
                                "type": "integer",
                                "example": 120,
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
                                "example": "2019-01-21T07:24:22.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-10-05T11:24:19.000Z"
                              }
                            }
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-10-11T10:51:21.534Z"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2019-11-09T08:55:16.680Z"
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
                          "asset_location": {
                            "type": "object",
                            "properties": {
                              "city": {
                                "type": "string",
                                "example": "Chennai"
                              },
                              "state": {
                                "type": "string",
                                "example": "Tamil Nadu"
                              },
                              "street": {
                                "type": "string",
                                "example": "No.49, G2, Ranga Vilas, CTS Apartments, 2nd Street, Bhuvaneshwari Nagar, Adambakkam,"
                              },
                              "country": {
                                "type": "string",
                                "example": "India"
                              },
                              "zip_code": {
                                "type": "string",
                                "example": "600099"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Valliyappan Test"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Customer"
                              },
                              "phone_number": {
                                "type": "string",
                                "example": "+919600086457"
                              },
                              "email": {
                                "type": "string",
                                "example": "valliyappan.59@gmail.com"
                              }
                            }
                          },
                          "custom_fields": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "example": "Text Input"
                                },
                                "value": {
                                  "type": "string",
                                  "example": ""
                                },
                                "type": {
                                  "type": "string",
                                  "example": "SINGLE_LINE"
                                },
                                "hide_to_fe": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "hide_field": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "read_only": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "_id": {
                                  "type": "string",
                                  "example": "651d0fefba147c8fe77ff4bc"
                                }
                              }
                            }
                          },
                          "owned_by_customer": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "asset_serial_number": {
                            "type": "string",
                            "example": ""
                          },
                          "warranty_expiry_date": {
                            "type": "string",
                            "example": "2024-12-24T18:29:00.000Z"
                          },
                          "asset_status": {
                            "type": "string",
                            "example": "UNDER_SERVICE"
                          },
                          "asset_category": {
                            "type": "object",
                            "properties": {
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "category_name": {
                                "type": "string",
                                "example": "TEST"
                              },
                              "category_description": {
                                "type": "string",
                                "example": "test"
                              },
                              "category_uid": {
                                "type": "string",
                                "example": "48d3c590-859d-11eb-a715-479656013538"
                              }
                            }
                          },
                          "purchase_date": {
                            "type": "string",
                            "example": "2023-01-08T18:30:00.000Z"
                          },
                          "organization": {
                            "type": "object",
                            "properties": {
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "organization_address": {
                                "type": "object",
                                "properties": {
                                  "street": {
                                    "type": "string",
                                    "example": "Prakasam Street Gangai Karai Puram "
                                  },
                                  "landmark": {
                                    "type": "string",
                                    "example": "test"
                                  },
                                  "city": {
                                    "type": "string",
                                    "example": "Chennai "
                                  },
                                  "zip_code": {
                                    "type": "string",
                                    "example": "600017"
                                  },
                                  "geo_cordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "number",
                                      "example": 13.0494011,
                                      "default": 0
                                    }
                                  },
                                  "state": {
                                    "type": "string",
                                    "example": "Tamil Nadu "
                                  },
                                  "country": {
                                    "type": "string",
                                    "example": "India"
                                  }
                                }
                              },
                              "organization_name": {
                                "type": "string",
                                "example": "Organization B"
                              },
                              "organization_logo": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e3b71910-622d-11eb-acfd-7fcb0a8f1c32.png"
                              },
                              "organization_email": {
                                "type": "string",
                                "example": "test@zuper.co"
                              },
                              "organization_uid": {
                                "type": "string",
                                "example": "32d0e260-622e-11eb-acfd-7fcb0a8f1c32"
                              },
                              "no_of_customers": {
                                "type": "integer",
                                "example": 7,
                                "default": 0
                              }
                            }
                          },
                          "property": {},
                          "asset_description": {},
                          "asset_image": {},
                          "parent_asset": {},
                          "id": {
                            "type": "string",
                            "example": "undefined"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 799,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 80,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
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
                    "value": "{\n    \"type\": \"ERROR\",\n    \"title\": \"\",\n    \"message\": \"\"\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "ERROR"
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-internal": false
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