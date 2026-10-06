---
updatedAt: 2026-07-29T14:11:54.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Subcontractor

Operates on Subcontractors, shown in the Zuper client app as "Subcontractor" (in every industry). Subcontractors share the exact same underlying schema and endpoints as Vendors / Suppliers; they're distinguished only by the `vendor_type` field (`SUB_CONTRACTOR` here) and the `/subcontractors` route prefix. Rejected with 400 if the subcontractor is currently active (`is_active: true`), or if it's an integrated favorite supplier.

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
    "/subcontractors/{vendor_uid}": {
      "delete": {
        "description": "Operates on Subcontractors, shown in the Zuper client app as \"Subcontractor\" (in every industry). Subcontractors share the exact same underlying schema and endpoints as Vendors / Suppliers; they're distinguished only by the `vendor_type` field (`SUB_CONTRACTOR` here) and the `/subcontractors` route prefix. Rejected with 400 if the subcontractor is currently active (`is_active: true`), or if it's an integrated favorite supplier.",
        "operationId": "delete_vendors{vendor_uid}-1",
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
                    "value": "{\"type\": \"SUCCESS\", \"title\": \"Subcontractor Deleted Successfully\", \"message\": \"Subcontractor Deleted Successfully\"}"
                  }
                }
              }
            }
          }
        },
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
        "summary": "Delete Subcontractor",
        "x-internal": false
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