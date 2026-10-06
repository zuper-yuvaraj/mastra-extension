---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Service Contract Details

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
    "/service_contract/{contract_uid}": {
      "get": {
        "summary": "Get Service Contract Details",
        "description": "",
        "operationId": "get-service-contract-details",
        "parameters": [
          {
            "name": "contract_uid",
            "in": "path",
            "description": "Contract uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"contract_uid\": \"32bc6a40-6f11-11ee-ab23-f576be9f85df\",\n        \"customer\": {\n            \"customer_uid\": \"bcf539f0-b75e-11ed-8a0f-090f81fad31e\",\n            \"customer_first_name\": \"velmurugan\",\n            \"customer_last_name\": \"k\",\n            \"customer_company_name\": \"\",\n            \"customer_email\": \"velmurugan.k@zuper.co\",\n            \"custom_fields\": [\n                {\n                    \"label\": \"Gorgias ID\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe914\"\n                },\n                {\n                    \"label\": \"Image\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe915\"\n                },\n                {\n                    \"label\": \"Sage Contact ID\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe916\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe917\"\n                },\n                {\n                    \"label\": \"Date And Time\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe918\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe919\"\n                },\n                {\n                    \"label\": \"LookUp\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe91a\"\n                },\n                {\n                    \"label\": \"LookUp1\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe91b\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe91c\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe91d\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe91e\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"643e549c2a73bd4593abe91f\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"63fdeb9833ec0ae2021953f1\"\n                }\n            ],\n            \"accounts\": {\n                \"ltv\": 35684.49,\n                \"receivables\": 144696.3,\n                \"credits\": 204,\n                \"tax\": {\n                    \"tax_exempt\": false\n                }\n            },\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2023-02-28T11:55:04.350Z\",\n            \"updated_at\": \"2023-09-14T05:55:06.374Z\",\n            \"customer_contact_no\": {\n                \"mobile\": \"+91303030303030\"\n            }\n        },\n        \"organization\": {\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"organization_address\": {\n                \"city\": \"Chennai \",\n                \"state\": \"Tamil Nadu \",\n                \"street\": \"Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi\",\n                \"country\": \"India\",\n                \"landmark\": \"\",\n                \"zip_code\": \"600041\",\n                \"geo_cordinates\": [\n                    12.9733389,\n                    80.2508572\n                ],\n                \"first_name\": \"Org\",\n                \"last_name\": \"SC\",\n                \"phone_number\": \"8220131280\",\n                \"email\": \"orgsc@abc.com\"\n            },\n            \"organization_name\": \"Ascendas\",\n            \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg\",\n            \"organization_email\": \"zupertest23@gmail.com\",\n            \"organization_description\": null,\n            \"organization_billing_address\": {\n                \"city\": \"Chennai \",\n                \"state\": \"Tamil Nadu \",\n                \"street\": \"Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi\",\n                \"country\": \"India\",\n                \"landmark\": \"\",\n                \"zip_code\": \"600041\",\n                \"geo_cordinates\": [\n                    12.9733389,\n                    80.2508572\n                ],\n                \"first_name\": \"Org\",\n                \"last_name\": \"SC\",\n                \"phone_number\": \"8220131280\",\n                \"email\": \"orgsc@abc.com\"\n            },\n            \"organization_uid\": \"11d86a70-8212-11eb-ab1f-1ddf213d24b4\",\n            \"no_of_customers\": 58,\n            \"custom_fields\": [\n                {\n                    \"label\": \"LookUp\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64cb3e0b223e99b1eb2d2803\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"11:22:00\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64cb3e0b223e99b1eb2d2804\"\n                },\n                {\n                    \"label\": \"Zoho CRM Account ID\",\n                    \"value\": \"test new\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64cb3e0b223e99b1eb2d2805\"\n                },\n                {\n                    \"label\": \"Billing Frequency\",\n                    \"value\": \"bulk action test\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"64cb3e0b223e99b1eb2d2806\"\n                }\n            ],\n            \"created_at\": \"2021-03-11T02:32:48.537Z\",\n            \"updated_at\": \"2023-10-16T05:24:43.435Z\"\n        },\n        \"properties\": [\n            {\n                \"property\": {\n                    \"property_uid\": \"de015800-4ddb-11ed-af58-17c563fc97f0\",\n                    \"property_name\": \"Generator\",\n                    \"no_of_jobs\": 0,\n                    \"property_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9fbddc30-4ddb-11ed-a1e7-0d642a277542.jpg\",\n                    \"property_address\": {\n                        \"city\": \"Washington\",\n                        \"state\": \"Kerala \",\n                        \"street\": \"Chennalode\",\n                        \"country\": \"India\",\n                        \"landmark\": \"Near Church\",\n                        \"zip_code\": \"673122\",\n                        \"geo_cordinates\": [\n                            11.6592096,\n                            75.9956673\n                        ],\n                        \"_id\": \"643e55b7a510b528e8780da7\"\n                    },\n                    \"custom_fields\": [\n                        {\n                            \"label\": \"Select\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780da8\"\n                        },\n                        {\n                            \"label\": \"File Input\",\n                            \"value\": \"\",\n                            \"type\": \"FILE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780da9\"\n                        },\n                        {\n                            \"label\": \"Date Input\",\n                            \"value\": \"\",\n                            \"type\": \"DATE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780daa\"\n                        },\n                        {\n                            \"label\": \"DateTime Input\",\n                            \"value\": \"2023-04-18 08:33:00\",\n                            \"type\": \"DATETIME\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780dab\"\n                        },\n                        {\n                            \"label\": \"Text Area\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780dac\"\n                        },\n                        {\n                            \"label\": \"Text Input\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780dad\"\n                        },\n                        {\n                            \"label\": \"Checkbox\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_ITEM\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780dae\"\n                        },\n                        {\n                            \"label\": \"Time Input\",\n                            \"value\": \"14:04:00\",\n                            \"type\": \"TIME\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780daf\"\n                        },\n                        {\n                            \"label\": \"Radio\",\n                            \"value\": \"value one\",\n                            \"type\": \"RADIO\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780db0\"\n                        },\n                        {\n                            \"label\": \"Text Input\",\n                            \"value\": \"test\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Test\",\n                            \"group_uid\": \"3e057e40-7d4b-11ed-afd9-b91d9207a4f4\",\n                            \"_id\": \"643e55b7a510b528e8780db1\"\n                        },\n                        {\n                            \"label\": \"PTI\",\n                            \"value\": \"PTI\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780db2\"\n                        },\n                        {\n                            \"label\": \"PTT\",\n                            \"value\": \"\",\n                            \"type\": \"TIME\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780db3\"\n                        },\n                        {\n                            \"label\": \"PDD\",\n                            \"value\": \"\",\n                            \"type\": \"DATE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780db4\"\n                        },\n                        {\n                            \"label\": \"PC\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_ITEM\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780db5\"\n                        },\n                        {\n                            \"label\": \"PDT\",\n                            \"value\": \"\",\n                            \"type\": \"DATETIME\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"643e55b7a510b528e8780db6\"\n                        },\n                        {\n                            \"label\": \"Group Name\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Property Common Group\",\n                            \"group_uid\": \"1e215b30-35a2-11ed-b193-e956a56bc479\",\n                            \"_id\": \"643e55b7a510b528e8780db7\"\n                        }\n                    ],\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2023-07-28T05:12:14.049Z\",\n                    \"updated_at\": \"2023-07-28T05:12:14.049Z\"\n                }\n            }\n        ],\n        \"assets\": [\n            {\n                \"asset\": {\n                    \"_id\": \"649181733039a6f2363afb2e\",\n                    \"asset_uid\": \"7a7a3ee0-0f56-11ee-9b86-c9d61d432290\",\n                    \"asset_code\": \"T002\",\n                    \"asset_name\": \"Testing Product\",\n                    \"asset_category\": {\n                        \"is_deleted\": false,\n                        \"category_name\": \"TEST\",\n                        \"category_description\": \"test\",\n                        \"category_uid\": \"48d3c590-859d-11eb-a715-479656013538\"\n                    },\n                    \"asset_status\": \"\",\n                    \"asset_serial_number\": \"1232132\",\n                    \"asset_quantity\": 1,\n                    \"is_deleted\": false,\n                    \"is_active\": true\n                },\n                \"_id\": \"65321ce7e9dc3086d6c8140d\"\n            }\n        ],\n        \"ref_no\": \"SC01\",\n        \"contract_name\": \"CFM Basic\",\n        \"description\": \"Basic Package\",\n        \"start_date\": \"2023-10-23T04:30:00.000Z\",\n        \"end_date\": \"2024-10-22T18:29:00.000Z\",\n        \"term_months\": 12,\n        \"activation_date\": \"2024-01-01T04:30:00.000Z\",\n        \"billing_address\": {\n            \"landmark\": \"\",\n            \"city\": \"Chennai\",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi\",\n            \"country\": \"India\",\n            \"zip_code\": \"600041\",\n            \"geo_cordinates\": [\n                12.9733389,\n                80.2508572\n            ],\n            \"first_name\": \"Org\",\n            \"last_name\": \"SC\",\n            \"phone_number\": \"8220131280\",\n            \"email\": \"orgsc@abc.com\"\n        },\n        \"customer_address\": {\n            \"landmark\": \"\",\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi\",\n            \"country\": \"India\",\n            \"zip_code\": \"600041\",\n            \"geo_cordinates\": [\n                12.9733389,\n                80.2508572\n            ],\n            \"first_name\": \"Org\",\n            \"last_name\": \"SC\",\n            \"phone_number\": \"8220131280\",\n            \"email\": \"orgsc@abc.com\"\n        },\n        \"approval_status\": \"AWAIT_CUSTOMER_APPROVAL\",\n        \"await_approval_by\": {},\n        \"custom_fields\": [\n            {\n                \"label\": \"Dealer\",\n                \"value\": \"Test\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c8140e\"\n            },\n            {\n                \"label\": \"Text Input\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c8140f\"\n            },\n            {\n                \"label\": \"Time Input\",\n                \"value\": \"11:51:00\",\n                \"type\": \"TIME\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c81410\"\n            },\n            {\n                \"label\": \"Text Area\",\n                \"value\": \"tt\",\n                \"type\": \"MULTI_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c81411\"\n            },\n            {\n                \"label\": \"Checkbox\",\n                \"value\": \"value one\",\n                \"type\": \"MULTI_ITEM\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c81412\"\n            },\n            {\n                \"label\": \"Date Input\",\n                \"value\": \"2023-10-20\",\n                \"type\": \"DATE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c81413\"\n            },\n            {\n                \"label\": \"DateTime Input\",\n                \"value\": \"2023-10-20 06:22:00\",\n                \"type\": \"DATETIME\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c81414\"\n            },\n            {\n                \"label\": \"Select\",\n                \"value\": \"value two\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c81415\"\n            },\n            {\n                \"label\": \"Radio\",\n                \"value\": \"value two\",\n                \"type\": \"RADIO\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c81416\"\n            },\n            {\n                \"label\": \"File Input\",\n                \"value\": \"\",\n                \"type\": \"FILE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65321ce7e9dc3086d6c81417\"\n            },\n            {\n                \"label\": \"Test Contract\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c81418\"\n            },\n            {\n                \"label\": \"Date Input\",\n                \"value\": \"\",\n                \"type\": \"DATE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c81419\"\n            },\n            {\n                \"label\": \"Time Input\",\n                \"value\": \"\",\n                \"type\": \"TIME\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c8141a\"\n            },\n            {\n                \"label\": \"DateTime Input\",\n                \"value\": \"\",\n                \"type\": \"DATETIME\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c8141b\"\n            },\n            {\n                \"label\": \"Text Area\",\n                \"value\": \"\",\n                \"type\": \"MULTI_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c8141c\"\n            },\n            {\n                \"label\": \"Select\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c8141d\"\n            },\n            {\n                \"label\": \"Checkbox\",\n                \"value\": \"\",\n                \"type\": \"MULTI_ITEM\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c8141e\"\n            },\n            {\n                \"label\": \"Radio\",\n                \"value\": \"\",\n                \"type\": \"RADIO\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c8141f\"\n            },\n            {\n                \"label\": \"File Input\",\n                \"value\": \"\",\n                \"type\": \"FILE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c81420\"\n            },\n            {\n                \"label\": \"LookUp\",\n                \"value\": \"\",\n                \"type\": \"LOOKUP\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Contract Custom\",\n                \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                \"_id\": \"65321ce7e9dc3086d6c81421\"\n            }\n        ],\n        \"payment_history\": [\n            {\n                \"payment_history_uid\": \"de358e63-2bfa-4c3d-a62e-7f03b84f26e2\",\n                \"total_amount\": 153,\n                \"status\": \"YET_TO_SEND\",\n                \"invoice_date\": \"2023-10-17T18:30:00.000Z\",\n                \"due_date\": \"2023-10-30T18:29:00.000Z\",\n                \"billing_date\": \"2023-10-19T18:30:00.000Z\",\n                \"is_paid\": false,\n                \"_id\": \"65322611e9dc3086d6c83b92\"\n            },\n            {\n                \"payment_history_uid\": \"a036faef-c50f-4eca-9cda-a2c62ec5bc9d\",\n                \"total_amount\": 153,\n                \"status\": \"YET_TO_SEND\",\n                \"invoice_date\": \"2023-10-23T18:30:00.000Z\",\n                \"due_date\": \"2023-11-05T18:29:00.000Z\",\n                \"billing_date\": \"2023-10-25T18:30:00.000Z\",\n                \"is_paid\": false,\n                \"_id\": \"65322611e9dc3086d6c83b93\"\n            }\n        ],\n        \"booking_settings\": {\n            \"auto_generate\": false\n        },\n        \"job_settings\": {\n            \"auto_generate\": false\n        },\n        \"invoice_settings\": {\n            \"auto_generate\": false,\n            \"billing_period\": {\n                \"billing_period_uid\": \"e675db30-02ae-11ea-af45-bd1d48d9fadb\",\n                \"billing_period_name\": \"Quarterly\",\n                \"billing_period_type\": \"MONTHS\",\n                \"billing_period_value\": 3,\n                \"is_deleted\": false,\n                \"is_active\": true\n            },\n            \"generate_invoice_days\": 2,\n            \"payment_term\": {\n                \"payment_term_name\": \"ten day term\",\n                \"no_of_days\": 10,\n                \"payment_term_uid\": \"75afa880-db9f-11e9-a35c-3301ecc1dbf7\"\n            },\n            \"invoice_template\": {\n                \"template_name\": \"Template 3001\",\n                \"template_description\": \"new twmp des\",\n                \"type\": \"INVOICE\",\n                \"template_uid\": \"8caccfc0-daa7-11e9-9ad0-c1a7d93adfe6\"\n            },\n            \"send_to_customer\": false\n        },\n        \"line_items\": [\n            {\n                \"line_item_type\": \"ITEM\",\n                \"line_item_uid\": \"32ce1d80-6f11-11ee-ab23-f576be9f85df\",\n                \"product_ref_id\": {\n                    \"product_type\": \"SERVICE\",\n                    \"product_name\": \"24 Hours Help Desk 1234\",\n                    \"product_category\": {\n                        \"category_name\": \"Miscellaneous\",\n                        \"category_uid\": \"c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7\"\n                    },\n                    \"product_uid\": \"30b09080-0248-11ea-af45-bd1d48d9fadb\",\n                    \"created_at\": \"2019-11-08T16:52:46.601Z\",\n                    \"is_deleted\": false,\n                    \"is_available\": true,\n                    \"price\": 0,\n                    \"currency\": \"\",\n                    \"quantity\": 0,\n                    \"product_manual_link\": \"\",\n                    \"meta_data\": [\n                        {\n                            \"label\": \"Bin\",\n                            \"value\": \"Bin #1\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"61eac124d17de78cb3febd9a\"\n                        },\n                        {\n                            \"label\": \"Unit\",\n                            \"value\": \"Metres\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"61eac124d17de78cb3febd9b\"\n                        },\n                        {\n                            \"label\": \"Date Input\",\n                            \"value\": \"Invalid date\",\n                            \"type\": \"DATE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"61eac124d17de78cb3febd9c\"\n                        },\n                        {\n                            \"label\": \"Read only time\",\n                            \"value\": \"\",\n                            \"type\": \"TIME\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"61eac124d17de78cb3febd9d\"\n                        },\n                        {\n                            \"label\": \"Text Input\",\n                            \"value\": \"t\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"61eac124d17de78cb3febd9e\"\n                        },\n                        {\n                            \"label\": \"File Input\",\n                            \"value\": \"\",\n                            \"type\": \"FILE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"61eac124d17de78cb3febd9f\"\n                        },\n                        {\n                            \"label\": \"File Input 1\",\n                            \"value\": \"\",\n                            \"type\": \"FILE\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"61eac124d17de78cb3febda0\"\n                        },\n                        {\n                            \"label\": \"QB Product ID\",\n                            \"value\": \"2276\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"6523fbb26d08b582c82584bd\"\n                        },\n                        {\n                            \"label\": \"Text Input 1\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Test\",\n                            \"group_uid\": \"8fb52760-5ece-11eb-b4f8-d3456c14207b\",\n                            \"_id\": \"61eac124d17de78cb3febda2\"\n                        },\n                        {\n                            \"label\": \"Test Input\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"Test\",\n                            \"group_uid\": \"8fb52760-5ece-11eb-b4f8-d3456c14207b\",\n                            \"_id\": \"61eac124d17de78cb3febda3\"\n                        },\n                        {\n                            \"label\": \"Text Input 2\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"666\",\n                            \"group_uid\": \"f59e6e00-46d2-11ec-8326-13db811ceb94\",\n                            \"_id\": \"61eac124d17de78cb3febda4\"\n                        },\n                        {\n                            \"label\": \"DateTime Input- group\",\n                            \"value\": \"\",\n                            \"type\": \"DATETIME\",\n                            \"hide_to_fe\": false,\n                            \"group_name\": \"666\",\n                            \"group_uid\": \"f59e6e00-46d2-11ec-8326-13db811ceb94\",\n                            \"_id\": \"61eac124d17de78cb3febda5\"\n                        },\n                        {\n                            \"label\": \"DateTime Input\",\n                            \"value\": \"Invalid date\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"5e8735f42b17c020e40eedd8\"\n                        },\n                        {\n                            \"label\": \"Time Input\",\n                            \"value\": \"Invalid date\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"5e8735f42b17c020e40eedd7\"\n                        },\n                        {\n                            \"label\": \"qb_product_id\",\n                            \"value\": \"7\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"5fc6427e21093a45e69473e6\"\n                        },\n                        {\n                            \"label\": \"Zoho Books Item ID\",\n                            \"value\": \"2677134000001262001\",\n                            \"hide_to_fe\": false,\n                            \"_id\": \"6234317bf05f52b2a7b54108\"\n                        }\n                    ],\n                    \"product_description\": \"\",\n                    \"product_files\": [\n                        {\n                            \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/dce53480-759f-11ea-bf4a-eb0dd07858c0.png\",\n                            \"file_name\": \"h\"\n                        },\n                        {\n                            \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/472bd0e0-75ac-11ea-8bf8-914ec65d978b.png\",\n                            \"file_name\": \"test\"\n                        },\n                        {\n                            \"file_name\": \"xl\",\n                            \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/8d34e4a0-75ac-11ea-8bf8-914ec65d978b.xlsx\"\n                        }\n                    ],\n                    \"product_barcode\": \"\",\n                    \"product_image\": \"\",\n                    \"product_id\": \"125\",\n                    \"brand\": \"SOME_BRAND\",\n                    \"specification\": \"Multi\",\n                    \"location_availability\": [],\n                    \"uom\": \"\"\n                },\n                \"product_id\": \"125\",\n                \"product_uid\": \"30b09080-0248-11ea-af45-bd1d48d9fadb\",\n                \"image\": \"\",\n                \"name\": \"24 Hours Help Desk 1234\",\n                \"brand\": \"SOME_BRAND\",\n                \"specification\": \"Multi\",\n                \"uom\": \"\",\n                \"description\": \"Helpdesk\",\n                \"quantity\": 3,\n                \"available_quantity\": 3,\n                \"unit_price\": 100,\n                \"discount\": 0,\n                \"serial_nos\": [],\n                \"discount_type\": \"FIXED\",\n                \"total\": 306,\n                \"tax\": {\n                    \"tax_name\": \"custom\",\n                    \"tax_rate\": 2,\n                    \"tax_amount\": 6\n                },\n                \"_id\": \"5e1c40fa35990a664930dea0\"\n            }\n        ],\n        \"tax\": [\n            {\n                \"tax_id\": {\n                    \"tax_uid\": \"61645e40-a2c8-11ed-b5a6-03828f316b1f\",\n                    \"tax_name\": \"CGST\",\n                    \"tax_applicable_to\": [],\n                    \"tax_rate\": 18,\n                    \"is_local_tax\": false,\n                    \"applicable_to\": [],\n                    \"is_active\": true\n                },\n                \"tax_uid\": \"61645e40-a2c8-11ed-b5a6-03828f316b1f\",\n                \"tax_name\": \"CGST\",\n                \"tax_percent\": 18,\n                \"tax_amount\": 0,\n                \"_id\": \"65321ce7e9dc3086d6c81423\"\n            },\n            {\n                \"tax_id\": {\n                    \"tax_uid\": \"32b0dbf0-66d6-11ee-b779-5549f3a7367a\",\n                    \"tax_name\": \"SGST\",\n                    \"tax_applicable_to\": [],\n                    \"tax_rate\": 5,\n                    \"is_local_tax\": false,\n                    \"applicable_to\": [],\n                    \"is_active\": true\n                },\n                \"tax_uid\": \"32b0dbf0-66d6-11ee-b779-5549f3a7367a\",\n                \"tax_name\": \"SGST\",\n                \"tax_percent\": 5,\n                \"tax_amount\": 0,\n                \"_id\": \"65321ce7e9dc3086d6c81424\"\n            },\n            {\n                \"tax_id\": {\n                    \"tax_uid\": \"5390efd0-6c13-11ee-89ed-1f56d0dbb4fe\",\n                    \"tax_name\": \"TEST\",\n                    \"tax_applicable_to\": [],\n                    \"tax_rate\": 3,\n                    \"is_local_tax\": false,\n                    \"applicable_to\": [],\n                    \"is_active\": true\n                },\n                \"tax_uid\": \"5390efd0-6c13-11ee-89ed-1f56d0dbb4fe\",\n                \"tax_name\": \"TEST\",\n                \"tax_percent\": 3,\n                \"tax_amount\": 0,\n                \"_id\": \"65321ce7e9dc3086d6c81425\"\n            }\n        ],\n        \"contract_subtotal\": 306,\n        \"contract_total\": 306,\n        \"contract_package\": {\n            \"package_name\": \"CFM Basic\",\n            \"package_description\": \"Basic Package\",\n            \"package_terms\": 12,\n            \"package_uid\": \"44769ec0-35ec-11ea-b910-fd8a0dd6897e\",\n            \"is_deleted\": false,\n            \"line_items\": [\n                {\n                    \"product_ref_id\": \"5dc59d5e31b83c2935b0ae0e\",\n                    \"product_id\": \"125\",\n                    \"product_uid\": \"30b09080-0248-11ea-af45-bd1d48d9fadb\",\n                    \"image\": \"\",\n                    \"name\": \"24 Hours Help Desk 1234\",\n                    \"brand\": \"SOME_BRAND\",\n                    \"specification\": \"Multi\",\n                    \"uom\": \"\",\n                    \"description\": \"Helpdesk\",\n                    \"quantity\": 3,\n                    \"available_quantity\": 3,\n                    \"unit_price\": 100,\n                    \"discount\": 0,\n                    \"serial_nos\": [],\n                    \"discount_type\": \"FIXED\",\n                    \"total\": 306,\n                    \"tax\": {\n                        \"tax_name\": \"custom\",\n                        \"tax_rate\": 2,\n                        \"tax_amount\": 6\n                    },\n                    \"_id\": \"5e1c40fa35990a664930dea0\"\n                },\n                {\n                    \"product_ref_id\": \"5e1c400f35990a664930de8f\",\n                    \"product_id\": \"001\",\n                    \"product_uid\": \"b89fd290-35eb-11ea-b910-fd8a0dd6897e\",\n                    \"image\": \"\",\n                    \"name\": \"Cleaning of Water Tank\",\n                    \"quantity\": 1,\n                    \"available_quantity\": 1,\n                    \"unit_price\": 1000,\n                    \"discount\": 0,\n                    \"serial_nos\": [],\n                    \"discount_type\": \"FIXED\",\n                    \"total\": 1000,\n                    \"_id\": \"5e1c40fa35990a664930de9f\"\n                },\n                {\n                    \"product_ref_id\": \"5e1c402935990a664930de90\",\n                    \"product_id\": \"P004\",\n                    \"product_uid\": \"c80b9390-35eb-11ea-b910-fd8a0dd6897e\",\n                    \"image\": \"\",\n                    \"name\": \"Pest Control - Internal & External\",\n                    \"quantity\": 2,\n                    \"available_quantity\": 2,\n                    \"unit_price\": 450,\n                    \"discount\": 0,\n                    \"serial_nos\": [],\n                    \"discount_type\": \"FIXED\",\n                    \"total\": 900,\n                    \"_id\": \"5f6b2a86017c7214d0ecb4b5\"\n                }\n            ],\n            \"prefix\": \"Q1\"\n        },\n        \"template\": {\n            \"template_name\": \"Contract template 1\",\n            \"template_description\": \"test template\",\n            \"template\": \"<p>{{#each assigned_to}} {{user.first_name}} vbc {{/each}}<br></p> {{contract_package.package_name}}  {{contract_package.package_description}}  {{contract_number}}  {{term_months}} {{contract_name}}\",\n            \"template_uid\": \"90fdcca0-f0f4-11ea-82a8-87c6418ce5fe\",\n            \"template_options\": {\n                \"format\": \"A4\",\n                \"orientation\": \"portrait\",\n                \"border\": {\n                    \"top\": \"10mm\",\n                    \"right\": \"10mm\",\n                    \"bottom\": \"10mm\",\n                    \"left\": \"10mm\"\n                }\n            }\n        },\n        \"created_by\": {\n            \"user_uid\": \"c425fe39-2309-4d2b-87b8-5b4b65546ccb\",\n            \"first_name\": \"Velmurugan\",\n            \"last_name\": \"K\",\n            \"email\": \"velmurugan.k@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": null,\n            \"designation\": \"Admin\",\n            \"emp_code\": \"Z111\",\n            \"prefix\": null,\n            \"work_phone_number\": null,\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n            \"hourly_labor_charge\": 120,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2022-11-02T10:35:52.000Z\",\n            \"updated_at\": \"2023-01-23T09:20:16.000Z\"\n        },\n        \"is_active\": true,\n        \"is_expired\": false,\n        \"is_deleted\": false,\n        \"applicable_locations\": [],\n        \"attachments\": [\n            {\n                \"attachment_uid\": \"d72177c3-2f5b-4ee9-b16d-e89c3475d7d5\",\n                \"file_name\": \"Test attachment\",\n                \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/15735070-6f11-11ee-ab23-f576be9f85df.png\",\n                \"created_by\": {\n                    \"user_uid\": \"c425fe39-2309-4d2b-87b8-5b4b65546ccb\",\n                    \"first_name\": \"Velmurugan\",\n                    \"last_name\": \"K\",\n                    \"email\": \"velmurugan.k@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": null,\n                    \"designation\": \"Admin\",\n                    \"emp_code\": \"Z111\",\n                    \"prefix\": null,\n                    \"work_phone_number\": null,\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                    \"hourly_labor_charge\": 120,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2022-11-02T10:35:52.000Z\",\n                    \"updated_at\": \"2023-01-23T09:20:16.000Z\"\n                },\n                \"_id\": \"65321ce7e9dc3086d6c81451\",\n                \"created_at\": \"2023-10-20T06:23:35.922Z\"\n            }\n        ],\n        \"approval_history\": [],\n        \"created_at\": \"2023-10-20T06:23:35.623Z\",\n        \"updated_at\": \"2023-10-20T07:02:41.950Z\",\n        \"contract_number\": 868\n    }\n}"
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
                        "contract_uid": {
                          "type": "string",
                          "example": "32bc6a40-6f11-11ee-ab23-f576be9f85df"
                        },
                        "customer": {
                          "type": "object",
                          "properties": {
                            "customer_uid": {
                              "type": "string",
                              "example": "bcf539f0-b75e-11ed-8a0f-090f81fad31e"
                            },
                            "customer_first_name": {
                              "type": "string",
                              "example": "velmurugan"
                            },
                            "customer_last_name": {
                              "type": "string",
                              "example": "k"
                            },
                            "customer_company_name": {
                              "type": "string",
                              "example": ""
                            },
                            "customer_email": {
                              "type": "string",
                              "example": "velmurugan.k@zuper.co"
                            },
                            "custom_fields": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "Gorgias ID"
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
                                    "example": "643e549c2a73bd4593abe914"
                                  }
                                }
                              }
                            },
                            "accounts": {
                              "type": "object",
                              "properties": {
                                "ltv": {
                                  "type": "number",
                                  "example": 35684.49,
                                  "default": 0
                                },
                                "receivables": {
                                  "type": "number",
                                  "example": 144696.3,
                                  "default": 0
                                },
                                "credits": {
                                  "type": "integer",
                                  "example": 204,
                                  "default": 0
                                },
                                "tax": {
                                  "type": "object",
                                  "properties": {
                                    "tax_exempt": {
                                      "type": "boolean",
                                      "example": false,
                                      "default": true
                                    }
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
                            "created_at": {
                              "type": "string",
                              "example": "2023-02-28T11:55:04.350Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-09-14T05:55:06.374Z"
                            },
                            "customer_contact_no": {
                              "type": "object",
                              "properties": {
                                "mobile": {
                                  "type": "string",
                                  "example": "+91303030303030"
                                }
                              }
                            }
                          }
                        },
                        "organization": {
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
                                "city": {
                                  "type": "string",
                                  "example": "Chennai "
                                },
                                "state": {
                                  "type": "string",
                                  "example": "Tamil Nadu "
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "India"
                                },
                                "landmark": {
                                  "type": "string",
                                  "example": ""
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "600041"
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 12.9733389,
                                    "default": 0
                                  }
                                },
                                "first_name": {
                                  "type": "string",
                                  "example": "Org"
                                },
                                "last_name": {
                                  "type": "string",
                                  "example": "SC"
                                },
                                "phone_number": {
                                  "type": "string",
                                  "example": "8220131280"
                                },
                                "email": {
                                  "type": "string",
                                  "example": "orgsc@abc.com"
                                }
                              }
                            },
                            "organization_name": {
                              "type": "string",
                              "example": "Ascendas"
                            },
                            "organization_logo": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg"
                            },
                            "organization_email": {
                              "type": "string",
                              "example": "zupertest23@gmail.com"
                            },
                            "organization_description": {},
                            "organization_billing_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Chennai "
                                },
                                "state": {
                                  "type": "string",
                                  "example": "Tamil Nadu "
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "India"
                                },
                                "landmark": {
                                  "type": "string",
                                  "example": ""
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "600041"
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 12.9733389,
                                    "default": 0
                                  }
                                },
                                "first_name": {
                                  "type": "string",
                                  "example": "Org"
                                },
                                "last_name": {
                                  "type": "string",
                                  "example": "SC"
                                },
                                "phone_number": {
                                  "type": "string",
                                  "example": "8220131280"
                                },
                                "email": {
                                  "type": "string",
                                  "example": "orgsc@abc.com"
                                }
                              }
                            },
                            "organization_uid": {
                              "type": "string",
                              "example": "11d86a70-8212-11eb-ab1f-1ddf213d24b4"
                            },
                            "no_of_customers": {
                              "type": "integer",
                              "example": 58,
                              "default": 0
                            },
                            "custom_fields": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "LookUp"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "LOOKUP"
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
                                    "example": "64cb3e0b223e99b1eb2d2803"
                                  }
                                }
                              }
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2021-03-11T02:32:48.537Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-10-16T05:24:43.435Z"
                            }
                          }
                        },
                        "assets": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "asset": {
                                "type": "object",
                                "properties": {
                                  "_id": {
                                    "type": "string",
                                    "example": "649181733039a6f2363afb2e"
                                  },
                                  "asset_uid": {
                                    "type": "string",
                                    "example": "7a7a3ee0-0f56-11ee-9b86-c9d61d432290"
                                  },
                                  "asset_code": {
                                    "type": "string",
                                    "example": "T002"
                                  },
                                  "asset_name": {
                                    "type": "string",
                                    "example": "Testing Product"
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
                                  "asset_status": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "asset_serial_number": {
                                    "type": "string",
                                    "example": "1232132"
                                  },
                                  "asset_quantity": {
                                    "type": "integer",
                                    "example": 1,
                                    "default": 0
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "is_active": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  }
                                }
                              },
                              "_id": {
                                "type": "string",
                                "example": "65321ce7e9dc3086d6c8140d"
                              }
                            }
                          }
                        },
                        "ref_no": {
                          "type": "string",
                          "example": "SC01"
                        },
                        "contract_name": {
                          "type": "string",
                          "example": "CFM Basic"
                        },
                        "description": {
                          "type": "string",
                          "example": "Basic Package"
                        },
                        "start_date": {
                          "type": "string",
                          "example": "2023-10-23T04:30:00.000Z"
                        },
                        "end_date": {
                          "type": "string",
                          "example": "2024-10-22T18:29:00.000Z"
                        },
                        "term_months": {
                          "type": "integer",
                          "example": 12,
                          "default": 0
                        },
                        "activation_date": {
                          "type": "string",
                          "example": "2024-01-01T04:30:00.000Z"
                        },
                        "billing_address": {
                          "type": "object",
                          "properties": {
                            "landmark": {
                              "type": "string",
                              "example": ""
                            },
                            "city": {
                              "type": "string",
                              "example": "Chennai"
                            },
                            "state": {
                              "type": "string",
                              "example": "Tamil Nadu "
                            },
                            "street": {
                              "type": "string",
                              "example": "Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi"
                            },
                            "country": {
                              "type": "string",
                              "example": "India"
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "600041"
                            },
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.9733389,
                                "default": 0
                              }
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Org"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "SC"
                            },
                            "phone_number": {
                              "type": "string",
                              "example": "8220131280"
                            },
                            "email": {
                              "type": "string",
                              "example": "orgsc@abc.com"
                            }
                          }
                        },
                        "customer_address": {
                          "type": "object",
                          "properties": {
                            "landmark": {
                              "type": "string",
                              "example": ""
                            },
                            "city": {
                              "type": "string",
                              "example": "Chennai "
                            },
                            "state": {
                              "type": "string",
                              "example": "Tamil Nadu "
                            },
                            "street": {
                              "type": "string",
                              "example": "Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi"
                            },
                            "country": {
                              "type": "string",
                              "example": "India"
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "600041"
                            },
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.9733389,
                                "default": 0
                              }
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Org"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "SC"
                            },
                            "phone_number": {
                              "type": "string",
                              "example": "8220131280"
                            },
                            "email": {
                              "type": "string",
                              "example": "orgsc@abc.com"
                            }
                          }
                        },
                        "approval_status": {
                          "type": "string",
                          "example": "AWAIT_CUSTOMER_APPROVAL"
                        },
                        "await_approval_by": {
                          "type": "object",
                          "properties": {}
                        },
                        "custom_fields": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "label": {
                                "type": "string",
                                "example": "Dealer"
                              },
                              "value": {
                                "type": "string",
                                "example": "Test"
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
                                "example": "65321ce7e9dc3086d6c8140e"
                              }
                            }
                          }
                        },
                        "payment_history": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "payment_history_uid": {
                                "type": "string",
                                "example": "de358e63-2bfa-4c3d-a62e-7f03b84f26e2"
                              },
                              "total_amount": {
                                "type": "integer",
                                "example": 153,
                                "default": 0
                              },
                              "status": {
                                "type": "string",
                                "example": "YET_TO_SEND"
                              },
                              "invoice_date": {
                                "type": "string",
                                "example": "2023-10-17T18:30:00.000Z"
                              },
                              "due_date": {
                                "type": "string",
                                "example": "2023-10-30T18:29:00.000Z"
                              },
                              "billing_date": {
                                "type": "string",
                                "example": "2023-10-19T18:30:00.000Z"
                              },
                              "is_paid": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "_id": {
                                "type": "string",
                                "example": "65322611e9dc3086d6c83b92"
                              }
                            }
                          }
                        },
                        "booking_settings": {
                          "type": "object",
                          "properties": {
                            "auto_generate": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "job_settings": {
                          "type": "object",
                          "properties": {
                            "auto_generate": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "invoice_settings": {
                          "type": "object",
                          "properties": {
                            "auto_generate": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "billing_period": {
                              "type": "object",
                              "properties": {
                                "billing_period_uid": {
                                  "type": "string",
                                  "example": "e675db30-02ae-11ea-af45-bd1d48d9fadb"
                                },
                                "billing_period_name": {
                                  "type": "string",
                                  "example": "Quarterly"
                                },
                                "billing_period_type": {
                                  "type": "string",
                                  "example": "MONTHS"
                                },
                                "billing_period_value": {
                                  "type": "integer",
                                  "example": 3,
                                  "default": 0
                                },
                                "is_deleted": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "is_active": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                }
                              }
                            },
                            "generate_invoice_days": {
                              "type": "integer",
                              "example": 2,
                              "default": 0
                            },
                            "payment_term": {
                              "type": "object",
                              "properties": {
                                "payment_term_name": {
                                  "type": "string",
                                  "example": "ten day term"
                                },
                                "no_of_days": {
                                  "type": "integer",
                                  "example": 10,
                                  "default": 0
                                },
                                "payment_term_uid": {
                                  "type": "string",
                                  "example": "75afa880-db9f-11e9-a35c-3301ecc1dbf7"
                                }
                              }
                            },
                            "invoice_template": {
                              "type": "object",
                              "properties": {
                                "template_name": {
                                  "type": "string",
                                  "example": "Template 3001"
                                },
                                "template_description": {
                                  "type": "string",
                                  "example": "new twmp des"
                                },
                                "type": {
                                  "type": "string",
                                  "example": "INVOICE"
                                },
                                "template_uid": {
                                  "type": "string",
                                  "example": "8caccfc0-daa7-11e9-9ad0-c1a7d93adfe6"
                                }
                              }
                            },
                            "send_to_customer": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "line_items": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "line_item_type": {
                                "type": "string",
                                "example": "ITEM"
                              },
                              "line_item_uid": {
                                "type": "string",
                                "example": "32ce1d80-6f11-11ee-ab23-f576be9f85df"
                              },
                              "product_ref_id": {
                                "type": "object",
                                "properties": {
                                  "product_type": {
                                    "type": "string",
                                    "example": "SERVICE"
                                  },
                                  "product_name": {
                                    "type": "string",
                                    "example": "24 Hours Help Desk 1234"
                                  },
                                  "product_category": {
                                    "type": "object",
                                    "properties": {
                                      "category_name": {
                                        "type": "string",
                                        "example": "Miscellaneous"
                                      },
                                      "category_uid": {
                                        "type": "string",
                                        "example": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7"
                                      }
                                    }
                                  },
                                  "product_uid": {
                                    "type": "string",
                                    "example": "30b09080-0248-11ea-af45-bd1d48d9fadb"
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2019-11-08T16:52:46.601Z"
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "is_available": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "price": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "currency": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "quantity": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "product_manual_link": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "meta_data": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "label": {
                                          "type": "string",
                                          "example": "Bin"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": "Bin #1"
                                        },
                                        "type": {
                                          "type": "string",
                                          "example": "SINGLE_ITEM"
                                        },
                                        "hide_to_fe": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "61eac124d17de78cb3febd9a"
                                        }
                                      }
                                    }
                                  },
                                  "product_description": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "product_files": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "file_url": {
                                          "type": "string",
                                          "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/dce53480-759f-11ea-bf4a-eb0dd07858c0.png"
                                        },
                                        "file_name": {
                                          "type": "string",
                                          "example": "h"
                                        }
                                      }
                                    }
                                  },
                                  "product_barcode": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "product_image": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "example": "125"
                                  },
                                  "brand": {
                                    "type": "string",
                                    "example": "SOME_BRAND"
                                  },
                                  "specification": {
                                    "type": "string",
                                    "example": "Multi"
                                  },
                                  "location_availability": {
                                    "type": "array"
                                  },
                                  "uom": {
                                    "type": "string",
                                    "example": ""
                                  }
                                }
                              },
                              "product_id": {
                                "type": "string",
                                "example": "125"
                              },
                              "product_uid": {
                                "type": "string",
                                "example": "30b09080-0248-11ea-af45-bd1d48d9fadb"
                              },
                              "image": {
                                "type": "string",
                                "example": ""
                              },
                              "name": {
                                "type": "string",
                                "example": "24 Hours Help Desk 1234"
                              },
                              "brand": {
                                "type": "string",
                                "example": "SOME_BRAND"
                              },
                              "specification": {
                                "type": "string",
                                "example": "Multi"
                              },
                              "uom": {
                                "type": "string",
                                "example": ""
                              },
                              "description": {
                                "type": "string",
                                "example": "Helpdesk"
                              },
                              "quantity": {
                                "type": "integer",
                                "example": 3,
                                "default": 0
                              },
                              "available_quantity": {
                                "type": "integer",
                                "example": 3,
                                "default": 0
                              },
                              "unit_price": {
                                "type": "integer",
                                "example": 100,
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
                                "example": 306,
                                "default": 0
                              },
                              "tax": {
                                "type": "object",
                                "properties": {
                                  "tax_name": {
                                    "type": "string",
                                    "example": "custom"
                                  },
                                  "tax_rate": {
                                    "type": "integer",
                                    "example": 2,
                                    "default": 0
                                  },
                                  "tax_amount": {
                                    "type": "integer",
                                    "example": 6,
                                    "default": 0
                                  }
                                }
                              },
                              "_id": {
                                "type": "string",
                                "example": "5e1c40fa35990a664930dea0"
                              }
                            }
                          }
                        },
                        "tax": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "tax_id": {
                                "type": "object",
                                "properties": {
                                  "tax_uid": {
                                    "type": "string",
                                    "example": "61645e40-a2c8-11ed-b5a6-03828f316b1f"
                                  },
                                  "tax_name": {
                                    "type": "string",
                                    "example": "CGST"
                                  },
                                  "tax_applicable_to": {
                                    "type": "array"
                                  },
                                  "tax_rate": {
                                    "type": "integer",
                                    "example": 18,
                                    "default": 0
                                  },
                                  "is_local_tax": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "applicable_to": {
                                    "type": "array"
                                  },
                                  "is_active": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  }
                                }
                              },
                              "tax_uid": {
                                "type": "string",
                                "example": "61645e40-a2c8-11ed-b5a6-03828f316b1f"
                              },
                              "tax_name": {
                                "type": "string",
                                "example": "CGST"
                              },
                              "tax_percent": {
                                "type": "integer",
                                "example": 18,
                                "default": 0
                              },
                              "tax_amount": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "_id": {
                                "type": "string",
                                "example": "65321ce7e9dc3086d6c81423"
                              }
                            }
                          }
                        },
                        "contract_subtotal": {
                          "type": "integer",
                          "example": 306,
                          "default": 0
                        },
                        "contract_total": {
                          "type": "integer",
                          "example": 306,
                          "default": 0
                        },
                        "contract_package": {
                          "type": "object",
                          "properties": {
                            "package_name": {
                              "type": "string",
                              "example": "CFM Basic"
                            },
                            "package_description": {
                              "type": "string",
                              "example": "Basic Package"
                            },
                            "package_terms": {
                              "type": "integer",
                              "example": 12,
                              "default": 0
                            },
                            "package_uid": {
                              "type": "string",
                              "example": "44769ec0-35ec-11ea-b910-fd8a0dd6897e"
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "line_items": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "product_ref_id": {
                                    "type": "string",
                                    "example": "5dc59d5e31b83c2935b0ae0e"
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "example": "125"
                                  },
                                  "product_uid": {
                                    "type": "string",
                                    "example": "30b09080-0248-11ea-af45-bd1d48d9fadb"
                                  },
                                  "image": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": "24 Hours Help Desk 1234"
                                  },
                                  "brand": {
                                    "type": "string",
                                    "example": "SOME_BRAND"
                                  },
                                  "specification": {
                                    "type": "string",
                                    "example": "Multi"
                                  },
                                  "uom": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": "Helpdesk"
                                  },
                                  "quantity": {
                                    "type": "integer",
                                    "example": 3,
                                    "default": 0
                                  },
                                  "available_quantity": {
                                    "type": "integer",
                                    "example": 3,
                                    "default": 0
                                  },
                                  "unit_price": {
                                    "type": "integer",
                                    "example": 100,
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
                                    "example": 306,
                                    "default": 0
                                  },
                                  "tax": {
                                    "type": "object",
                                    "properties": {
                                      "tax_name": {
                                        "type": "string",
                                        "example": "custom"
                                      },
                                      "tax_rate": {
                                        "type": "integer",
                                        "example": 2,
                                        "default": 0
                                      },
                                      "tax_amount": {
                                        "type": "integer",
                                        "example": 6,
                                        "default": 0
                                      }
                                    }
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "5e1c40fa35990a664930dea0"
                                  }
                                }
                              }
                            },
                            "prefix": {
                              "type": "string",
                              "example": "Q1"
                            }
                          }
                        },
                        "template": {
                          "type": "object",
                          "properties": {
                            "template_name": {
                              "type": "string",
                              "example": "Contract template 1"
                            },
                            "template_description": {
                              "type": "string",
                              "example": "test template"
                            },
                            "template": {
                              "type": "string",
                              "example": "<p>{{#each assigned_to}} {{user.first_name}} vbc {{/each}}<br></p> {{contract_package.package_name}}  {{contract_package.package_description}}  {{contract_number}}  {{term_months}} {{contract_name}}"
                            },
                            "template_uid": {
                              "type": "string",
                              "example": "90fdcca0-f0f4-11ea-82a8-87c6418ce5fe"
                            },
                            "template_options": {
                              "type": "object",
                              "properties": {
                                "format": {
                                  "type": "string",
                                  "example": "A4"
                                },
                                "orientation": {
                                  "type": "string",
                                  "example": "portrait"
                                },
                                "border": {
                                  "type": "object",
                                  "properties": {
                                    "top": {
                                      "type": "string",
                                      "example": "10mm"
                                    },
                                    "right": {
                                      "type": "string",
                                      "example": "10mm"
                                    },
                                    "bottom": {
                                      "type": "string",
                                      "example": "10mm"
                                    },
                                    "left": {
                                      "type": "string",
                                      "example": "10mm"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "c425fe39-2309-4d2b-87b8-5b4b65546ccb"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Velmurugan"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "K"
                            },
                            "email": {
                              "type": "string",
                              "example": "velmurugan.k@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {},
                            "designation": {
                              "type": "string",
                              "example": "Admin"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "Z111"
                            },
                            "prefix": {},
                            "work_phone_number": {},
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
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
                              "example": "2022-11-02T10:35:52.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-01-23T09:20:16.000Z"
                            }
                          }
                        },
                        "is_active": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "is_expired": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "applicable_locations": {
                          "type": "array"
                        },
                        "attachments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attachment_uid": {
                                "type": "string",
                                "example": "d72177c3-2f5b-4ee9-b16d-e89c3475d7d5"
                              },
                              "file_name": {
                                "type": "string",
                                "example": "Test attachment"
                              },
                              "url": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/15735070-6f11-11ee-ab23-f576be9f85df.png"
                              },
                              "created_by": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "c425fe39-2309-4d2b-87b8-5b4b65546ccb"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Velmurugan"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "K"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "velmurugan.k@zuper.co"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {},
                                  "designation": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "Z111"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {},
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
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
                                    "example": "2022-11-02T10:35:52.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2023-01-23T09:20:16.000Z"
                                  }
                                }
                              },
                              "_id": {
                                "type": "string",
                                "example": "65321ce7e9dc3086d6c81451"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2023-10-20T06:23:35.922Z"
                              }
                            }
                          }
                        },
                        "approval_history": {
                          "type": "array"
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2023-10-20T06:23:35.623Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2023-10-20T07:02:41.950Z"
                        },
                        "contract_number": {
                          "type": "integer",
                          "example": 868,
                          "default": 0
                        },
                        "type": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "items": {
                          "type": "object",
                          "properties": {
                            "property": {
                              "type": "object",
                              "properties": {
                                "property_uid": {
                                  "type": "string",
                                  "example": "de015800-4ddb-11ed-af58-17c563fc97f0"
                                },
                                "property_name": {
                                  "type": "string",
                                  "example": "Generator"
                                },
                                "no_of_jobs": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "property_image": {
                                  "type": "string",
                                  "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9fbddc30-4ddb-11ed-a1e7-0d642a277542.jpg"
                                },
                                "property_address": {
                                  "type": "object",
                                  "properties": {
                                    "city": {
                                      "type": "string",
                                      "example": "Washington"
                                    },
                                    "state": {
                                      "type": "string",
                                      "example": "Kerala "
                                    },
                                    "street": {
                                      "type": "string",
                                      "example": "Chennalode"
                                    },
                                    "country": {
                                      "type": "string",
                                      "example": "India"
                                    },
                                    "landmark": {
                                      "type": "string",
                                      "example": "Near Church"
                                    },
                                    "zip_code": {
                                      "type": "string",
                                      "example": "673122"
                                    },
                                    "geo_cordinates": {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "example": 11.6592096,
                                        "default": 0
                                      }
                                    },
                                    "_id": {
                                      "type": "string",
                                      "example": "643e55b7a510b528e8780da7"
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
                                        "example": "Select"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "SINGLE_ITEM"
                                      },
                                      "hide_to_fe": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "_id": {
                                        "type": "string",
                                        "example": "643e55b7a510b528e8780da8"
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
                                "created_at": {
                                  "type": "string",
                                  "example": "2023-07-28T05:12:14.049Z"
                                },
                                "updated_at": {
                                  "type": "string",
                                  "example": "2023-07-28T05:12:14.049Z"
                                }
                              }
                            }
                          }
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
                    "value": "{\n    \"message\": \"\",\n     \"title\": \"\",\n     \"type\": \"\"\n }"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "type": {
                      "type": "string",
                      "example": ""
                    }
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