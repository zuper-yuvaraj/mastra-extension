---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Timeoff Request Type

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
      "put": {
        "summary": "Update Timeoff Request Type",
        "description": "",
        "operationId": "create-timeoff-request-type-copy",
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
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "timeoff_request_type": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "type": {
                        "type": "string"
                      },
                      "no_of_days_per_year": {
                        "type": "integer",
                        "format": "int32"
                      }
                    },
                    "required": [
                      "name",
                      "type",
                      "no_of_days_per_year"
                    ],
                    "type": "object"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Created Successfully\",\n    \"message\": \"TimeOff Request Type has been Created Successfully\",\n    \"data\": {\n        \"timeoff_request_type_uid\": \"119ba12f-104d-42ee-95a0-6958193028c4\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Created Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "TimeOff Request Type has been Created Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "timeoff_request_type_uid": {
                          "type": "string",
                          "example": "119ba12f-104d-42ee-95a0-6958193028c4"
                        }
                      }
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
                    "value": "{\n  message:\"Error in Updating TimeOff Request type\",\n \ttype:\"error\",\n  title:\"Error in Updating\",\n  info:\"Database Error\"\n}"
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