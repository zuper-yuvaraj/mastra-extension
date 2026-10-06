---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Property Details

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
    "/property/{property_uid}": {
      "get": {
        "summary": "Get Property Details",
        "description": "",
        "operationId": "get-property-details",
        "parameters": [
          {
            "name": "property_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"property_name\": \"Costa Blue\",\n        \"property_uid\": \"2ea68620-5b84-11ee-8010-6dab9b367e3b\",\n        \"created_by\": {\n            \"user_uid\": \"641aacc5-3a7a-4c3c-beec-fa6c186e37ec\",\n            \"first_name\": \"Valliyappan\",\n            \"last_name\": \"S\",\n            \"email\": \"valliyappan.s@zuper.co\",\n            \"home_phone_number\": null,\n            \"designation\": \"Admin\",\n            \"emp_code\": \"Z98\",\n            \"prefix\": null,\n            \"work_phone_number\": null,\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/c5914720-043e-11ee-89dd-7d1eb09002c4.JPG\",\n            \"is_active\": true,\n            \"is_deleted\": false\n        },\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"assigned_to\": [\n            {\n                \"user\": {\n                    \"user_uid\": \"641aacc5-3a7a-4c3c-beec-fa6c186e37ec\",\n                    \"first_name\": \"Valliyappan\",\n                    \"last_name\": \"S\",\n                    \"email\": \"valliyappan.s@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": null,\n                    \"designation\": \"Admin\",\n                    \"emp_code\": \"Z98\",\n                    \"prefix\": null,\n                    \"work_phone_number\": null,\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/c5914720-043e-11ee-89dd-7d1eb09002c4.JPG\",\n                    \"hourly_labor_charge\": 20,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2022-04-22T05:06:25.000Z\",\n                    \"updated_at\": \"2023-06-06T07:50:15.000Z\",\n                    \"role\": {\n                        \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n                        \"role_name\": \"Admin\",\n                        \"role_key\": \"ADMIN\",\n                        \"created_at\": \"2018-01-22T00:00:00.000Z\",\n                        \"updated_at\": \"2018-01-22T00:00:00.000Z\"\n                    }\n                },\n                \"team\": {\n                    \"team_uid\": \"4d3db48d-241c-4f89-8cda-b0372c33082e\",\n                    \"team_name\": \"Team S\",\n                    \"team_color\": \"#3498db\",\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                }\n            }\n        ],\n        \"parent_property\": null,\n        \"attachments\": [],\n        \"custom_fields\": [\n            {\n                \"label\": \"Time Input\",\n                \"value\": \"02:44:00\",\n                \"type\": \"TIME\",\n                \"hide_to_fe\": false,\n                \"_id\": \"65114fe104b03d0db86a8a21\"\n            },\n            {\n                \"label\": \"Text Input\",\n                \"value\": \"c\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"group_name\": \"Test\",\n                \"group_uid\": \"3e057e40-7d4b-11ed-afd9-b91d9207a4f4\",\n                \"_id\": \"65114fe104b03d0db86a8a22\"\n            },\n            \n        ],\n        \"property_address\": {\n            \"city\": \"Chappa\",\n            \"state\": \"\",\n            \"street\": \"Costa Rica\",\n            \"country\": \"Costa Rica\",\n            \"landmark\": \"\",\n            \"zip_code\": \"\",\n            \"geo_cordinates\": [\n                9.748916999999999,\n                -83.753428\n            ],\n            \"_id\": \"65114fe104b03d0db86a8a3b\"\n        },\n        \"property_organization\": {\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"organization_address\": {\n                \"street\": \"Prakasam Street Gangai Karai Puram \",\n                \"landmark\": \"test\",\n                \"city\": \"Chennai \",\n                \"zip_code\": \"600017\",\n                \"geo_cordinates\": [\n                    13.0494011,\n                    80.24528719999999\n                ],\n                \"state\": \"Tamil Nadu \",\n                \"country\": \"India\"\n            },\n            \"organization_name\": \"Organization B\",\n            \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e3b71910-622d-11eb-acfd-7fcb0a8f1c32.png\",\n            \"organization_email\": \"test@zuper.co\",\n            \"organization_uid\": \"32d0e260-622e-11eb-acfd-7fcb0a8f1c32\",\n            \"no_of_customers\": 7\n        },\n        \"property_image\": \"\",\n        \"no_of_jobs\": 0,\n        \"property_customers\": [\n            {\n                \"customer\": {\n                    \"customer_uid\": \"988d1e50-63e1-11ed-b940-1743c554f5b8\",\n                    \"customer_first_name\": \"Valliyappan Test\",\n                    \"customer_last_name\": \"Customer\",\n                    \"customer_category\": {\n                        \"_id\": \"602e4b75dc2d4f5b28e8ab23\",\n                        \"category_name\": \"Test-John\",\n                        \"sla_duration\": {\n                            \"days\": 10,\n                            \"hours\": 1,\n                            \"minutes\": 3\n                        },\n                        \"category_uid\": \"189be050-71da-11eb-b4a0-fb9669ab0522\"\n                    },\n                    \"customer_organization\": {\n                        \"is_active\": true,\n                        \"is_deleted\": false,\n                        \"organization_address\": {\n                            \"street\": \"Prakasam Street Gangai Karai Puram \",\n                            \"landmark\": \"test\",\n                            \"city\": \"Chennai \",\n                            \"zip_code\": \"600017\",\n                            \"geo_cordinates\": [\n                                13.0494011,\n                                80.24528719999999\n                            ],\n                            \"state\": \"Tamil Nadu \",\n                            \"country\": \"India\"\n                        },\n                        \"organization_name\": \"Organization B\",\n                        \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e3b71910-622d-11eb-acfd-7fcb0a8f1c32.png\",\n                        \"organization_email\": \"test@zuper.co\",\n                        \"organization_uid\": \"32d0e260-622e-11eb-acfd-7fcb0a8f1c32\"\n                    },\n                    \"customer_email\": \"valliyappan.59@gmail.com\",\n                    \"customer_contact_no\": {\n                        \"mobile\": \"+919600086457\",\n                        \"home\": \"+919600086457\",\n                        \"work\": \"+919600086457\"\n                    },\n                    \"customer_all_addresses\": [\n                        {\n                            \"label\": \"Home\",\n                            \"phone_number\": \"+919600086457\",\n                            \"email\": \"valliyappan.59@gmail.com\",\n                            \"city\": \"\",\n                            \"state\": \"\",\n                            \"street\": \"\",\n                            \"landmark\": \"\",\n                            \"geo_cordinates\": [\n                                0,\n                                0\n                            ],\n                            \"is_primary\": false,\n                            \"_id\": \"63b41f8ccd32464cea6cd1dd\"\n                        },\n                        {\n                            \"label\": \"Home\",\n                            \"phone_number\": \"+919600086457\",\n                            \"email\": \"valliyappan.59@gmail.com\",\n                            \"city\": \"Chennai \",\n                            \"state\": \"Tamil Nadu \",\n                            \"street\": \"Prakasam Street Gangai Karai Puram \",\n                            \"country\": \"India\",\n                            \"landmark\": \"test\",\n                            \"geo_cordinates\": [\n                                0,\n                                0\n                            ],\n                            \"is_primary\": false,\n                            \"_id\": \"63b425f19eb36ef7e5d4aece\"\n                        },\n                        {\n                            \"label\": \"Home\",\n                            \"phone_number\": \"+919600086457\",\n                            \"email\": \"abc_test@gmail.com\",\n                            \"city\": \"Chennai\",\n                            \"state\": \"Tamil Nadu\",\n                            \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar, Chennai, Tamil Nadu, India\",\n                            \"country\": \"India\",\n                            \"landmark\": \"\",\n                            \"geo_cordinates\": [\n                                0,\n                                0\n                            ],\n                            \"is_primary\": false,\n                            \"_id\": \"63b427799eb36ef7e5d4b16a\"\n                        }\n                    ],\n                    \"accounts\": {\n                        \"ltv\": 47173.02,\n                        \"receivables\": 12582.36,\n                        \"credits\": 16966.22\n                    },\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                }\n            }\n        ],\n        \"updated_at\": \"2023-10-05T12:24:23.716Z\",\n        \"created_at\": \"2023-09-25T09:16:17.165Z\"\n    }\n}"
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