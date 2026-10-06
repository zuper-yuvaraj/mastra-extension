---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Unscheduled Jobs

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
    "/jobs/unscheduled": {
      "get": {
        "summary": "Get Unscheduled Jobs",
        "description": "",
        "operationId": "get-unassigned-jobs-copy",
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
            "name": "count",
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
                "\"ASC\"",
                "\"DESC\""
              ],
              "default": "\"DESC\""
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                ""
              ],
              "default": "\"work_order_number\""
            }
          },
          {
            "name": "date_type",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                ""
              ],
              "default": "\"scheduled_date\""
            }
          },
          {
            "name": "populate_route",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "timezone",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job_category",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.status",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.priority",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job_tags",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.created_at",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.custom_field",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.asset",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.ppm",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.service_contract",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.job_uid",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.customer_feedback",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.recurrence_job_uid",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.is_recurrence",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.job_type",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.scheduled",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.property",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.customer_organization",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_at_from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_at_to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.due_date_from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.due_date_to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.skillset_uid",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
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
                    "value": ""
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
                    "value": "{\n      message: \"Sort must be either work_order_number / job_priority / scheduled_date / due_date\",\n      title: \"Invalid Sort By Value\",\n      type: \"error\"\n}"
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