---
updatedAt: 2026-10-02T15:58:55.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Request Statuses

Returns the full list of request statuses configured for the company (a single per-company document holding an array of statuses, not one document per status). Use the returned status_uid values with filter.request_status on GET /request and with PUT /request/{request_uid}/status.

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
      "get": {
        "summary": "Get Request Statuses",
        "description": "Returns the full list of request statuses configured for the company (a single per-company document holding an array of statuses, not one document per status). Use the returned status_uid values with filter.request_status on GET /request and with PUT /request/{request_uid}/status.",
        "parameters": [
          {
            "in": "query",
            "name": "filter.keyword",
            "schema": {
              "type": "string"
            },
            "description": "Case-insensitive substring match against status_name."
          }
        ],
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
                    "data": {
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
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"status_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\", \"status_name\": \"New\", \"status_type\": \"OPEN\", \"status_description\": \"\", \"status_color\": \"#4960a0\"}]}"
                  }
                }
              }
            }
          }
        },
        "operationId": "get-request-statuses"
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