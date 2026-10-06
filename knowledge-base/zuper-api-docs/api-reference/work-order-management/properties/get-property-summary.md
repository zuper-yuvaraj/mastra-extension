---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /property/{property_uid}/summary

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
    "/property/{property_uid}/summary": {
      "get": {
        "description": "",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {}
                    }
                  },
                  "required": [
                    "type"
                  ]
                },
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Property summary fetched successfully\",\n  \"data\": {\n    \"transactions\": {\n      \"request\": {\n        \"latest_transaction\": {\n          \"request_uid\": \"411571be-42ed-4c63-9cd3-4e3eaec5a8c4\",\n          \"request_title\": \"Zync request test\",\n          \"request_id\": 713,\n          \"request_priority\": \"HIGH\",\n          \"request_due_date\": \"2025-12-31T18:29:59.000Z\",\n          \"request_status\": {\n            \"status_type\": \"OPEN\",\n            \"status_uid\": \"26d89664-72c0-4280-b9fb-e9f4b38f8143\",\n            \"status_name\": \"New Request\",\n            \"status_color\": \"#3498db\"\n          },\n          \"created_at\": \"2025-11-22T10:13:34.068Z\"\n        },\n        \"recent_transactions\": [\n          {\n            \"request_uid\": \"411571be-42ed-4c63-9cd3-4e3eaec5a8c4\",\n            \"request_title\": \"Zync request test\",\n            \"request_id\": 713,\n            \"request_priority\": \"HIGH\",\n            \"request_due_date\": \"2025-12-31T18:29:59.000Z\",\n            \"request_status\": {\n              \"status_type\": \"OPEN\",\n              \"status_uid\": \"26d89664-72c0-4280-b9fb-e9f4b38f8143\",\n              \"status_name\": \"New Request\",\n              \"status_color\": \"#3498db\"\n            },\n            \"created_at\": \"2025-11-22T10:13:34.068Z\"\n          }\n        ],\n        \"count\": 1\n      },\n      \"project\": {\n        \"latest_transaction\": {\n          \"project_uid\": \"e76e7bf6-fa1f-4a85-9e9f-0bcf43242d09\",\n          \"project_title\": \"Validation\",\n          \"prefix\": \"\",\n          \"project_no\": \"866\",\n          \"current_project_status\": {\n            \"project_status_uid\": \"4a8ed100-d652-11ee-8016-3b6d11fab15c\",\n            \"project_status_name\": \"In Progress\",\n            \"project_status_type\": \"IN_PROGRESS\",\n            \"project_status_color\": \"#27ae60\"\n          }\n        },\n        \"recent_transactions\": [\n          {\n            \"project_uid\": \"e76e7bf6-fa1f-4a85-9e9f-0bcf43242d09\",\n            \"project_title\": \"Validation\",\n            \"prefix\": \"\",\n            \"project_no\": \"866\",\n            \"current_project_status\": {\n              \"project_status_uid\": \"4a8ed100-d652-11ee-8016-3b6d11fab15c\",\n              \"project_status_name\": \"In Progress\",\n              \"project_status_type\": \"IN_PROGRESS\",\n              \"project_status_color\": \"#27ae60\"\n            }\n          }\n        ],\n        \"count\": 1\n      },\n      \"estimate\": {\n        \"latest_transaction\": null,\n        \"recent_transactions\": [],\n        \"count\": 0\n      },\n      \"invoice\": {\n        \"latest_transaction\": {\n          \"invoice_uid\": \"43eb3e30-c78a-11f0-ac68-43f6ec7e1471\",\n          \"invoice_title\": \"ZYNC_TESTING CUSTOMER - DO NOT MODIFY Last name\",\n          \"invoice_no\": \"11 - 25 -9917\",\n          \"invoice_date\": \"2025-11-21T18:30:00.000Z\",\n          \"due_date\": \"2026-02-17T18:29:00.000Z\",\n          \"invoice_status\": \"DRAFT\",\n          \"total\": 15810\n        },\n        \"recent_transactions\": [\n          {\n            \"invoice_uid\": \"43eb3e30-c78a-11f0-ac68-43f6ec7e1471\",\n            \"invoice_title\": \"ZYNC_TESTING CUSTOMER - DO NOT MODIFY Last name\",\n            \"invoice_no\": \"11 - 25 -9917\",\n            \"invoice_date\": \"2025-11-21T18:30:00.000Z\",\n            \"due_date\": \"2026-02-17T18:29:00.000Z\",\n            \"invoice_status\": \"DRAFT\",\n            \"total\": 15810\n          }\n        ],\n        \"count\": 1\n      },\n      \"asset\": {\n        \"latest_transaction\": {\n          \"asset_uid\": \"4d863006-7e13-4c85-bfe1-5803ae195372\",\n          \"asset_name\": \"#PT_001 -service amount\",\n          \"asset_code\": \"SA_0001\",\n          \"asset_status\": \"INSTALLED\",\n          \"created_at\": \"2025-12-30T16:48:13.063Z\"\n        },\n        \"recent_transactions\": [\n          {\n            \"asset_uid\": \"4d863006-7e13-4c85-bfe1-5803ae195372\",\n            \"asset_name\": \"#PT_001 -service amount\",\n            \"asset_code\": \"SA_0001\",\n            \"asset_status\": \"INSTALLED\",\n            \"created_at\": \"2025-12-30T16:48:13.063Z\"\n          },\n          {\n            \"asset_uid\": \"6197b1c9-fc0f-4e55-ab6b-6c343517028c\",\n            \"asset_name\": \"Zync Asset with all details\",\n            \"asset_code\": \"Z-001\",\n            \"asset_status\": \"INSTALLED\",\n            \"created_at\": \"2025-11-22T06:30:30.038Z\"\n          },\n          {\n            \"asset_uid\": \"061670bc-3dd0-48c2-b51e-6d1187202f51\",\n            \"asset_name\": \"Drip edge\",\n            \"asset_code\": \"45345\",\n            \"asset_status\": \"INSTALLED\",\n            \"created_at\": \"2025-08-29T13:42:04.054Z\"\n          }\n        ],\n        \"count\": 3\n      },\n      \"activity\": {\n        \"latest_transaction\": {\n          \"activity_type\": \"UPDATE\",\n          \"activity_action\": \"PROPERTY\",\n          \"activity_message\": \"updated Property ZYNC_TESTING PROPERTY - DO NOT MODIFY via bulk update.\",\n          \"activity_module\": \"PROPERTY\",\n          \"created_at\": \"2026-03-03T07:07:50.000Z\",\n          \"user\": {\n            \"first_name\": \"Maruthuraja\",\n            \"last_name\": \"K\",\n            \"email\": \"maruthuraja.k@zuper.co\",\n            \"user_uid\": \"bea81553-8401-4671-9a17-0810ad7ae9ac\",\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/5f0605bf-23c0-4d7f-9d70-bfb4fe512258.webp\"\n          }\n        },\n        \"recent_transactions\": [\n          {\n            \"activity_type\": \"UPDATE\",\n            \"activity_action\": \"PROPERTY\",\n            \"activity_message\": \"updated Property ZYNC_TESTING PROPERTY - DO NOT MODIFY via bulk update.\",\n            \"activity_module\": \"PROPERTY\",\n            \"created_at\": \"2026-03-03T07:07:50.000Z\",\n            \"user\": {\n              \"first_name\": \"Maruthuraja\",\n              \"last_name\": \"K\",\n              \"email\": \"admin@gmail.com\",\n              \"user_uid\": \"bea81553-8401-4671-9a17-0810ad7ae9ac\",\n              \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/5f0605bf-23c0-4d7f-9d70-bfb4fe512258.webp\"\n            }\n          },\n          {\n            \"activity_type\": \"CREATE\",\n            \"activity_action\": \"GENERIC_NOTE\",\n            \"activity_message\": \"added a new note\",\n            \"activity_module\": \"PROPERTY\",\n            \"created_at\": \"2025-11-17T14:56:34.000Z\",\n            \"user\": {\n              \"first_name\": \"James\",\n              \"last_name\": \"Smith\",\n              \"email\": \"zuper.admin@ranjith.dev\",\n              \"user_uid\": \"e56d19ee-c096-46ef-981b-f4840c79a5cb\",\n              \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/da506460-6a12-11ec-bb9b-5794434a5493.jpg\"\n            }\n          },\n          {\n            \"activity_type\": \"CREATE\",\n            \"activity_action\": \"PROPERTY\",\n            \"activity_message\": \"created new Property ZYNC_TESTING PROPERTY - DO NOT MODIFY\",\n            \"activity_module\": \"PROPERTY\",\n            \"created_at\": \"2025-11-17T14:48:55.000Z\",\n            \"user\": {\n              \"first_name\": \"James\",\n              \"last_name\": \"Smith\",\n              \"email\": \"zuper.admin@ranjith.dev\",\n              \"user_uid\": \"e56d19ee-c096-46ef-981b-f4840c79a5cb\",\n              \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/da506460-6a12-11ec-bb9b-5794434a5493.jpg\"\n            }\n          }\n        ],\n        \"count\": 4\n      },\n      \"service_contract\": {\n        \"latest_transaction\": {\n          \"contract_uid\": \"b3bb882b-92f9-43e3-abf1-6f989c21d23c\",\n          \"contract_name\": \"Zync - Contract with all fields\",\n          \"prefix\": \"1456\",\n          \"contract_number\": 6123,\n          \"start_date\": \"2025-11-21T18:30:00.000Z\",\n          \"end_date\": \"2030-12-31T18:29:59.000Z\",\n          \"approval_status\": \"CUSTOMER_APPROVED\",\n          \"created_at\": \"2025-11-22T09:19:18.514Z\"\n        },\n        \"recent_transactions\": [\n          {\n            \"contract_uid\": \"b3bb882b-92f9-43e3-abf1-6f989c21d23c\",\n            \"contract_name\": \"Zync - Contract with all fields\",\n            \"prefix\": \"1456\",\n            \"contract_number\": 6123,\n            \"start_date\": \"2025-11-21T18:30:00.000Z\",\n            \"end_date\": \"2030-12-31T18:29:59.000Z\",\n            \"approval_status\": \"CUSTOMER_APPROVED\",\n            \"created_at\": \"2025-11-22T09:19:18.514Z\"\n          }\n        ],\n        \"count\": 1\n      },\n      \"job\": {\n        \"latest_transaction\": {\n          \"job_uid\": \"42a51a10-136f-11f1-866e-cb8ea3a64e54\",\n          \"prefix\": \"pre\",\n          \"work_order_number\": \"pre103165\",\n          \"job_title\": \"Job for PPM - 496\",\n          \"scheduled_start_time\": \"2026-02-28T01:30:00.000Z\",\n          \"scheduled_end_time\": \"2026-03-02T11:50:00.000Z\",\n          \"current_job_status\": {\n            \"status_uid\": \"54fc23a4-17a3-4987-ae00-86c1ffced383\",\n            \"status_name\": \"All checklist\",\n            \"status_type\": \"NEW\",\n            \"status_color\": \"#9b59b6\"\n          }\n        },\n        \"recent_transactions\": [\n          {\n            \"job_uid\": \"42a51a10-136f-11f1-866e-cb8ea3a64e54\",\n            \"prefix\": \"pre\",\n            \"work_order_number\": \"pre103165\",\n            \"job_title\": \"Job for PPM - 496\",\n            \"scheduled_start_time\": \"2026-02-28T01:30:00.000Z\",\n            \"scheduled_end_time\": \"2026-03-02T11:50:00.000Z\",\n            \"current_job_status\": {\n              \"status_uid\": \"54fc23a4-17a3-4987-ae00-86c1ffced383\",\n              \"status_name\": \"All checklist\",\n              \"status_type\": \"NEW\",\n              \"status_color\": \"#9b59b6\"\n            }\n          },\n          {\n            \"job_uid\": \"9f0f5f20-fd6e-11f0-bec6-2700a8fd914c\",\n            \"prefix\": \"pre\",\n            \"work_order_number\": \"pre102964\",\n            \"job_title\": \"Job for PPM - 496\",\n            \"scheduled_start_time\": \"2026-01-31T01:30:00.000Z\",\n            \"scheduled_end_time\": \"2026-02-02T11:50:00.000Z\",\n            \"current_job_status\": {\n              \"status_uid\": \"54fc23a4-17a3-4987-ae00-86c1ffced383\",\n              \"status_name\": \"All checklist\",\n              \"status_type\": \"NEW\",\n              \"status_color\": \"#9b59b6\"\n            }\n          },\n          {\n            \"job_uid\": \"7c37f760-e512-11f0-a9e2-fb517e36ab10\",\n            \"prefix\": \"pre\",\n            \"work_order_number\": \"pre102657\",\n            \"job_title\": \"Job for PPM - 496\",\n            \"scheduled_start_time\": \"2026-01-02T01:30:00.000Z\",\n            \"scheduled_end_time\": \"2026-01-04T11:50:00.000Z\",\n            \"current_job_status\": {\n              \"status_uid\": \"54fc23a4-17a3-4987-ae00-86c1ffced383\",\n              \"status_name\": \"All checklist\",\n              \"status_type\": \"NEW\",\n              \"status_color\": \"#9b59b6\"\n            }\n          }\n        ],\n        \"count\": 5\n      }\n    }\n  }"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "property_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "query",
            "name": "modules",
            "schema": {
              "type": "string",
              "enum": [
                "request",
                "project",
                "estimate",
                "invoice",
                "asset",
                "service_contract",
                "job",
                "activity"
              ]
            }
          }
        ],
        "operationId": "get_property-property-uid-summary"
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