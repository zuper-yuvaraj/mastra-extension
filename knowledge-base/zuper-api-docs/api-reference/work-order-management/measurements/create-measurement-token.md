---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Measurement Token

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
    "/measurements/categories/{category_uid}/tokens": {
      "post": {
        "description": "",
        "operationId": "post_measurementscategories{category_uid}tokens",
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
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "measurement_token_uid": {
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
            "name": "category_uid",
            "schema": {
              "type": "string"
            },
            "required": true,
            "description": "Measurement Category UID"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "measurement_token": {
                    "type": "object",
                    "properties": {
                      "measurement_token_name": {
                        "type": "string",
                        "description": "Token Name"
                      },
                      "uom": {
                        "type": "string",
                        "description": "Unit of Measurement"
                      }
                    },
                    "required": [
                      "measurement_token_name",
                      "uom"
                    ]
                  }
                },
                "required": [
                  "measurement_token"
                ]
              }
            }
          }
        },
        "summary": "Create Measurement Token"
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