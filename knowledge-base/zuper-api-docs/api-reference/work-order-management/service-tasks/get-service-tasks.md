---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Service Task Details

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
    "/service_tasks/{service_task_uid}": {
      "get": {
        "summary": "Get Service Task Details",
        "description": "",
        "operationId": "get-service-tasks",
        "parameters": [
          {
            "name": "service_task_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"company_id\": \"1\",\n        \"module\": \"JOB\",\n        \"module_uid\": \"9c481ec0-6b19-11ed-bae3-7da4b580c234\",\n        \"service_task_uid\": \"d367b480-ea47-11ed-976e-c9bbc7d0f069\",\n        \"sequence_no\": 1,\n        \"service_task_title\": \"MEDIUM\",\n        \"service_task_description\": \"some description about project\",\n        \"estimated_duration\": {\n            \"days\": 1,\n            \"hours\": 1,\n            \"minutes\": 1\n        },\n        \"scheduled_duration\": 90,\n        \"actual_start_time\": \"2021-12-02T06:00:00.000Z\",\n        \"actual_end_time\": \"2021-11-02T05:00:00.000Z\",\n        \"actual_duration\": 90,\n        \"inspection_form\": {\n            \"asset_form_uid\": \"39049bb0-c13a-11ec-93bd-910bbeada4c6\",\n            \"asset_form_name\": \"Test Form 1\",\n            \"asset_form_description\": \"Test 123\",\n            \"asset_category\": \"5e986aadcbb0a15839381b24\",\n            \"asset_form_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"description\": \"description\",\n                    \"placeholder\": \"placeholder\",\n                    \"is_dependent\": false,\n                    \"dependent_on\": \"\",\n                    \"dependent_options\": [],\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"field_options\": [],\n                    \"is_required\": false,\n                    \"original_template\": {\n                        \"id\": 3,\n                        \"component\": \"textInput\",\n                        \"editable\": true,\n                        \"index\": 0,\n                        \"label\": \"Text Input\",\n                        \"description\": \"description\",\n                        \"placeholder\": \"placeholder\",\n                        \"options\": [],\n                        \"required\": false,\n                        \"validation\": \"/.*/\",\n                        \"hide_to_fe\": false,\n                        \"is_dependent\": false,\n                        \"dependent_on\": \"\",\n                        \"dependent_options\": [],\n                        \"hide_field\": false,\n                        \"read_only\": false\n                    },\n                    \"_id\": \"6260f623ea7cc7fba6fd2d77\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"description\": \"description\",\n                    \"placeholder\": \"placeholder\",\n                    \"is_dependent\": false,\n                    \"dependent_on\": \"\",\n                    \"dependent_options\": [],\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"field_options\": [],\n                    \"is_required\": false,\n                    \"original_template\": {\n                        \"id\": 4,\n                        \"component\": \"timeInput\",\n                        \"editable\": true,\n                        \"index\": 1,\n                        \"label\": \"Time Input\",\n                        \"description\": \"description\",\n                        \"placeholder\": \"placeholder\",\n                        \"options\": [],\n                        \"required\": false,\n                        \"validation\": \"/.*/\",\n                        \"hide_to_fe\": false,\n                        \"is_dependent\": false,\n                        \"dependent_on\": \"\",\n                        \"dependent_options\": [],\n                        \"hide_field\": false,\n                        \"read_only\": false\n                    },\n                    \"_id\": \"6260f623ea7cc7fba6fd2d78\"\n                }\n            ],\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2022-04-21T06:13:55.054Z\",\n            \"updated_at\": \"2022-04-21T06:13:55.056Z\",\n            \"__v\": 0\n        },\n        \"asset_inspection_submission_uid\": \"11d86a70-8212-11eb-ab1f-1ddf213d24b4\",\n        \"asset\": {\n            \"asset_code\": \"AC002\",\n            \"asset_name\": \"Air Conditioner\",\n            \"asset_quantity\": 1,\n            \"purchase_date\": \"2019-12-02T18:30:00.000Z\",\n            \"warranty_expiry_date\": \"2019-11-28T18:29:00.000Z\",\n            \"placed_in_service\": \"2019-11-28T18:30:00.000Z\",\n            \"asset_uid\": \"596b4dc0-025d-11ea-af45-bd1d48d9fadb\",\n            \"updated_at\": \"2022-08-18T06:02:03.456Z\",\n            \"created_at\": \"2019-11-08T19:24:14.366Z\",\n            \"is_active\": false,\n            \"is_deleted\": false,\n            \"custom_fields\": [\n                {\n                    \"label\": \"W/o cat CF\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Group w/o category\",\n                    \"group_uid\": \"6d15a230-0ff2-11ed-a859-596e05a269cd\",\n                    \"_id\": \"62fdd5cae435f974531ab182\"\n                }\n            ],\n            \"asset_serial_number\": null,\n            \"asset_category\": \"5e986aadcbb0a15839381b24\",\n            \"asset_image\": null,\n            \"asset_status\": \"\"\n        },\n        \"service_task_status\": \"OPEN\",\n        \"assigned_to\": [\n            {\n                \"user\": {\n                    \"user_uid\": \"fea19530-406f-11e8-b99a-59f39b812a88\",\n                    \"first_name\": \"Henry\",\n                    \"last_name\": \"Jones\",\n                    \"email\": \"user@zuper.dev\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": \"1234567890\",\n                    \"designation\": \"AC Technician\",\n                    \"emp_code\": \"911\",\n                    \"prefix\": null,\n                    \"work_phone_number\": \"12345657890\",\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/faa9a460-6a12-11ec-bb9b-5794434a5493.jpg\",\n                    \"hourly_labor_charge\": 99.99,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2018-04-15T05:43:59.000Z\",\n                    \"updated_at\": \"2023-03-06T15:05:28.000Z\"\n                },\n                \"team\": {\n                    \"team_uid\": \"efe3be50-02e0-11e8-8137-412322b72cf4\",\n                    \"team_name\": \"Team #2\",\n                    \"team_color\": null,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                }\n            }\n        ],\n        \"created_by\": {},\n        \"is_deleted\": false,\n        \"service_task_status_history\": [],\n        \"created_at\": \"2023-05-04T06:49:32.887Z\",\n        \"updated_at\": \"2023-05-04T06:49:32.887Z\",\n        \"__v\": 0\n    }\n}"
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
                    "value": "{\n    \"type\": \"\",\n    \"title\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
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
          },
          "401": {
            "description": "401",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
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