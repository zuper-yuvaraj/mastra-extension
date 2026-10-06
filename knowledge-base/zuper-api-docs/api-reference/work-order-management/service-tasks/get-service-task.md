---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get  Service Tasks

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
    "/service_tasks": {
      "get": {
        "summary": "Get  Service Tasks",
        "description": "",
        "operationId": "get-service-task",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "limit",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          },
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "DESC",
                "ASC"
              ],
              "default": "DESC"
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "service_task_title",
                "service_task_status",
                "actual_start_time",
                "actual_end_time",
                "created_at",
                "updated_at"
              ]
            }
          },
          {
            "name": "filter.module",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "JOB"
              ]
            }
          },
          {
            "name": "filter.module_uid",
            "in": "query",
            "description": "module uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "For search",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.service_task_status",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "OPEN",
                "IN_PROGRESS",
                "ON_HOLD",
                "COMPLETED",
                "CANCELED",
                "INCOMPLETE"
              ]
            }
          },
          {
            "name": "filter.asset",
            "in": "query",
            "description": "asset uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "description": "created by uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.assigned_to_user",
            "in": "query",
            "description": "assigned to user uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.business_unit",
            "in": "query",
            "description": "Trade Type UID's",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "\n\n{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"module\": \"JOB\",\n      \"module_uid\": \"6f651e50-ad20-11ed-baf5-b9dd933de9e6\",\n      \"service_task_uid\": \"a10e1e31-09bd-11ee-933a-c11752d0f5e7\",\n      \"sequence_no\": 3,\n      \"service_task_title\": \"May 5 - 1\",\n      \"estimated_duration\": {\n        \"days\": 0,\n        \"hours\": 1,\n        \"minutes\": 0\n      },\n      \"inspection_form\": null,\n      \"service_task_status\": \"OPEN\",\n      \"assigned_to\": [],\n      \"created_by\": {\n        \"user_uid\": \"d083c6cb-9202-41fc-8ae2-e986939c5471\",\n        \"first_name\": \"user\",\n        \"last_name\": \"Aj\",\n        \"email\": \"user@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Admin\",\n        \"emp_code\": \"J001\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 54.59,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2022-02-16T10:00:42.000Z\",\n        \"updated_at\": \"2022-06-17T09:31:16.000Z\"\n      },\n      \"is_deleted\": false,\n      \"__v\": 0,\n      \"created_at\": \"2023-06-13T07:40:55.064Z\",\n      \"updated_at\": \"2023-06-13T07:40:55.064Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"module\": \"JOB\",\n      \"module_uid\": \"6f651e50-ad20-11ed-baf5-b9dd933de9e6\",\n      \"service_task_uid\": \"a10e1e30-09bd-11ee-933a-c11752d0f5e7\",\n      \"sequence_no\": 2,\n      \"service_task_title\": \"May 5 - 2\",\n      \"estimated_duration\": {\n        \"days\": 0,\n        \"hours\": 0,\n        \"minutes\": 10\n      },\n      \"inspection_form\": null,\n      \"service_task_status\": \"COMPLETED\",\n      \"assigned_to\": [],\n      \"created_by\": {\n        \"user_uid\": \"d083c6cb-9202-41fc-8ae2-e986939c5471\",\n        \"first_name\": \"user\",\n        \"last_name\": \"Aj\",\n        \"email\": \"user@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Admin\",\n        \"emp_code\": \"J001\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 54.59,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2022-02-16T10:00:42.000Z\",\n        \"updated_at\": \"2022-06-17T09:31:16.000Z\"\n      },\n      \"is_deleted\": false,\n      \"__v\": 5,\n      \"created_at\": \"2023-06-13T07:40:55.064Z\",\n      \"updated_at\": \"2023-06-13T13:01:14.226Z\",\n      \"actual_duration\": 120,\n      \"actual_end_time\": \"2023-06-13T03:30:00.000Z\",\n      \"actual_start_time\": \"2023-06-13T00:30:00.000Z\",\n      \"id\": \"undefined\"\n    },\n  ],\n  \"total_records\": 12,\n  \"current_page\": 1,\n  \"total_pages\": 6\n}"
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