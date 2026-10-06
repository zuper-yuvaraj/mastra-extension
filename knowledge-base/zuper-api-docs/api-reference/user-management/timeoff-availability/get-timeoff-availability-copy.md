---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Timeoff Availability

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
    "/timesheets/request/timeoff_availability": {
      "post": {
        "summary": "Create Timeoff Availability",
        "description": "",
        "operationId": "get-timeoff-availability-copy",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "timeoff_availability"
                ],
                "properties": {
                  "timeoff_availability": {
                    "type": "object",
                    "required": [
                      "request_type",
                      "year",
                      "remaining_days",
                      "user_uid"
                    ],
                    "properties": {
                      "request_type": {
                        "type": "string",
                        "description": "request type uid"
                      },
                      "year": {
                        "type": "string"
                      },
                      "remaining_days": {
                        "type": "string"
                      },
                      "user_uid": {
                        "type": "string"
                      }
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
                    "value": "{\n  type: \"success\",\n  title: \"TimeOff Availability has been Created Successfully\",\n  message: \"TimeOff Availability has been Created Successfully\",\n\tdata: { timeoff_availability_uid: \"2e6ec687-075b-40f1-93e5-0de348b9a4e4\" }\n}"
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
                    "value": "{\n\t\"message\": \"Error in Creating TimeOff Request Type\",\n\t\"type\": \"error\",\n\t\"title\": \"Error in Creating\",\n  \"info\": \"Database Error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Creating TimeOff Request Type"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Creating"
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