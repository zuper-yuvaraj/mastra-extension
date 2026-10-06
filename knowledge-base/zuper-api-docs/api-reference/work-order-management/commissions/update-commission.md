---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /commissions/{commission_uid}

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
    "/commissions/{commission_uid}": {
      "put": {
        "description": "",
        "responses": {
          "200": {
            "description": ""
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "commission_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "operationId": "put_commissions-commission-uid",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commission_type": {
                    "type": "string",
                    "enum": [
                      "FLAT_VALUE",
                      "ACTUAL_REVENUE_PERCENT",
                      "PLANNED_PROFIT_PERCENT",
                      "ACTUAL_PROFIT_PERCENT",
                      "PLANNED_REVENUE_PERCENT"
                    ]
                  },
                  "commission_rate": {
                    "type": "number"
                  },
                  "commission_date": {
                    "type": "string"
                  },
                  "assigned_to": {
                    "type": "string"
                  },
                  "commission_amount": {
                    "type": "string",
                    "description": ""
                  },
                  "description": {
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
  "x-readme": {
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": false
  },
  "x-readme-fauxas": true
}
```