---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Timeoff Request Type

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
    "/timesheet/request/timeoff_type/{timeoff_request_type_uid}": {
      "delete": {
        "summary": "Delete Timeoff Request Type",
        "description": "",
        "operationId": "get-timeoff-request-type-copy",
        "parameters": [
          {
            "name": "timeoff_request_type_uid",
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
                    "value": "{\n\t\"message\": \"success\",\n\t\"type\": \"TimeOff Request Type Deleted Successfully\",\n\t\"data\":[]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "success"
                    },
                    "type": {
                      "type": "string",
                      "example": "TimeOff Request Type Deleted Successfully"
                    },
                    "data": {
                      "type": "array"
                    }
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
                    "value": "{\n\t\"message\": \"Error in Deleting TimeOff Request Type Details\",\n\t\"title\": \"Error in Deleting TimeOff Request Type Details\",\n\t\"type\": \"error\",\n\t\"info\":\"Database Error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Deleting TimeOff Request Type Details"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Deleting TimeOff Request Type Details"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "info": {
                      "type": "string",
                      "example": "Database Error"
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