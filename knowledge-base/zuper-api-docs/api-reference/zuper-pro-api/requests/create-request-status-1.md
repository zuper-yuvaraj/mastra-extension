---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Request Status

Creates a new request status. If the company has no request-status document yet, this creates it with this as the first entry.

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
    "/request/status": {
      "post": {
        "summary": "Create Request Status",
        "description": "Creates a new request status. If the company has no request-status document yet, this creates it with this as the first entry.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "request_status": {
                    "type": "object",
                    "required": [
                      "status_name",
                      "status_type"
                    ],
                    "properties": {
                      "status_name": {
                        "type": "string",
                        "description": "Required."
                      },
                      "status_type": {
                        "type": "string",
                        "enum": [
                          "OPEN",
                          "IN_PROGRESS",
                          "CLOSED",
                          "ON_HOLD",
                          "CANCELED",
                          "OTHERS"
                        ],
                        "description": "Required."
                      },
                      "status_description": {
                        "type": "string"
                      },
                      "status_color": {
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
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "success"
                      ]
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "request_status_uid": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"title\": \"Request Status Created\", \"message\": \"Request Status Created\", \"request_status_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\"}"
                  }
                }
              }
            }
          }
        },
        "operationId": "create-request-status"
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