---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /commissions

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
    "/commissions": {
      "post": {
        "description": "",
        "responses": {
          "200": {
            "description": ""
          }
        },
        "parameters": [],
        "operationId": "post_commissions",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "job_uid": {
                    "type": "string"
                  },
                  "project_uid": {
                    "type": "string",
                    "description": "Required if job_uid is not sent"
                  },
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
                    "type": "number",
                    "description": "Required for project commissions; auto-calculated for jobs"
                  },
                  "description": {
                    "type": "string"
                  }
                },
                "required": [
                  "job_uid",
                  "commission_type",
                  "commission_rate",
                  "commission_date",
                  "assigned_to"
                ]
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