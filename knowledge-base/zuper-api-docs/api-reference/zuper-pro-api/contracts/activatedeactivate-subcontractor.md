---
updatedAt: 2026-10-02T15:58:55.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Activate/Deactivate Subcontractor

Operates on Subcontractors, shown in the Zuper client app as "Subcontractor" (in every industry). Subcontractors share the exact same underlying schema and endpoints as Vendors / Suppliers; they're distinguished only by the `vendor_type` field (`SUB_CONTRACTOR` here) and the `/subcontractors` route prefix. Activates or deactivates the record based on `is_active`.

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
    "/subcontractors/{vendor_uid}/activate": {
      "put": {
        "summary": "Activate/Deactivate Subcontractor",
        "description": "Operates on Subcontractors, shown in the Zuper client app as \"Subcontractor\" (in every industry). Subcontractors share the exact same underlying schema and endpoints as Vendors / Suppliers; they're distinguished only by the `vendor_type` field (`SUB_CONTRACTOR` here) and the `/subcontractors` route prefix. Activates or deactivates the record based on `is_active`.",
        "parameters": [
          {
            "in": "path",
            "name": "vendor_uid",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "is_active"
                ],
                "properties": {
                  "is_active": {
                    "type": "boolean"
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
                        "SUCCESS"
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
                    "value": "{\"type\": \"SUCCESS\", \"title\": \"Subcontractor Updated Successfully\", \"message\": \"Subcontractor Updated Successfully\"}"
                  }
                }
              }
            }
          }
        },
        "operationId": "activate-subcontractor"
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