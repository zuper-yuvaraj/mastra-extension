---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Timeoff Request

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
    "/timesheets/request/timeoff": {
      "post": {
        "summary": "Create Timeoff Request",
        "description": "",
        "operationId": "create-timeoff",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "timeoff_request": {
                    "properties": {
                      "request_from": {
                        "type": "string",
                        "format": "date"
                      },
                      "request_to": {
                        "type": "string",
                        "format": "date"
                      },
                      "request_reason": {
                        "type": "string",
                        "enum": [
                          "OFF",
                          "VACATION",
                          "SICK",
                          "PARENTAL LEAVE",
                          "UNPAID",
                          "OTHERS",
                          "CUSTOM"
                        ]
                      },
                      "request_remarks": {
                        "type": "string"
                      },
                      "request_type": {
                        "type": "string"
                      },
                      "team_uid": {
                        "type": "string"
                      },
                      "all_day": {
                        "type": "boolean"
                      },
                      "user_uid": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "request_from",
                      "request_to",
                      "request_reason",
                      "user_uid"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Timeoff Request Created Successfully\",\n    \"message\": \"Timeoff Request Created Successfully\",\n    \"data\": {\n        \"request_uid\": \"0eb23511-f58e-434a-9e46-5bf2b5eda972\"\n    }\n}"
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
                      "example": "Timeoff Request Created Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Timeoff Request Created Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "request_uid": {
                          "type": "string",
                          "example": "0eb23511-f58e-434a-9e46-5bf2b5eda972"
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
                    "value": "{\n\t\t\t\t\"type\": \"error\"\n\t\t\t\t\"title\": \"Error in Creating Timeoff Request\",\n\t\t\t\t\"message\": \"Error in Creating Timeoff Request\",\n}"
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