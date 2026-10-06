---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Measurement Details

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
    "/measurements/{measurement_uid}/details": {
      "get": {
        "description": "",
        "operationId": "get_measurements{measurement_uid}details",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "measurement_uid": {
                          "type": "string"
                        },
                        "measurement_provider": {
                          "type": "object",
                          "properties": {}
                        },
                        "measurement_data": {
                          "type": "array",
                          "items": {
                            "properties": {},
                            "type": "object"
                          }
                        },
                        "measurement_name": {
                          "type": "string"
                        },
                        "measurement_status": {
                          "type": "string"
                        },
                        "measurement_address": {
                          "type": "object",
                          "properties": {}
                        },
                        "attachments": {
                          "type": "array",
                          "items": {
                            "properties": {},
                            "type": "object"
                          }
                        },
                        "ordered_at": {
                          "type": "string"
                        },
                        "completed_at": {
                          "type": "string"
                        },
                        "created_at": {
                          "type": "string"
                        },
                        "updated_at": {
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
        "parameters": [
          {
            "in": "path",
            "name": "measurement_uid",
            "schema": {
              "type": "string"
            },
            "required": true,
            "description": "Measurement UID"
          }
        ],
        "summary": "Get Measurement Details"
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