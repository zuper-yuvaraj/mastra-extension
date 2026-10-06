---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reorder Timeoff Request Type

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
    "/timesheet/request/timeoff_type/reorder": {
      "post": {
        "summary": "Reorder Timeoff Request Type",
        "description": "",
        "operationId": "reorder-timeoff-request-type",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "timeoff_request_types": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "timeoff_request_type_uid": {
                          "type": "string"
                        },
                        "display_order": {
                          "type": "integer",
                          "format": "int32"
                        }
                      },
                      "required": [
                        "timeoff_request_type_uid",
                        "display_order"
                      ],
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
                    "value": "{\n      type: \"success\",\n      title: \"Timeoff request types reordered successfully\",\n      message: \"Timeoff request types reordered successfully\"\n}"
                  }
                }
              }
            }
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  message:\"Error in Updating TimeOff Request Type Reordering\",\n  type:\"error\",\n  title:\"Error in Updating TimeOff Request Type Reordering\",\n\tinfo:\"Database Error\"\n}"
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