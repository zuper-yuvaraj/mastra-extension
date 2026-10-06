---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reorder Request Statuses

Replaces the order of the full request-status array. Must include every existing status (same length as the current array, all status_uids resolvable) — this is not a partial reorder.

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
    "/request/status/reorder": {
      "put": {
        "summary": "Reorder Request Statuses",
        "description": "Replaces the order of the full request-status array. Must include every existing status (same length as the current array, all status_uids resolvable) — this is not a partial reorder.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "request_status": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "status_uid": {
                          "type": "string"
                        },
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
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"title\": \"Request Status Reordered\", \"message\": \"Request Status Reordered\"}"
                  }
                }
              }
            }
          }
        },
        "operationId": "reorder-request-statuses"
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