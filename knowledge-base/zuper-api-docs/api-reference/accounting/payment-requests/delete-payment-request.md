---
updatedAt: 2026-06-16T10:59:00.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Payment Request

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api-2",
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
    "/payments/payment_request/{payment_request_uid}": {
      "delete": {
        "description": "",
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
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "type"
                  ]
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "payment_request_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "operationId": "delete_payments-payment-request-payment-request-uid",
        "summary": "Delete Payment Request"
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