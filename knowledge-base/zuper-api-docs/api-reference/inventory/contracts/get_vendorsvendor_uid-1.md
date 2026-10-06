---
updatedAt: 2026-09-16T11:38:18.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Subcontractor Details

Operates on Subcontractors, shown in the Zuper client app as "Subcontractor" (in every industry). Subcontractors share the exact same underlying schema and endpoints as Vendors / Suppliers; they're distinguished only by the `vendor_type` field (`SUB_CONTRACTOR` here) and the `/subcontractors` route prefix.

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
      "get": {
        "description": "Operates on Subcontractors, shown in the Zuper client app as \"Subcontractor\" (in every industry). Subcontractors share the exact same underlying schema and endpoints as Vendors / Suppliers; they're distinguished only by the `vendor_type` field (`SUB_CONTRACTOR` here) and the `/subcontractors` route prefix.",
        "operationId": "get_vendors{vendor_uid}-1",
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
                    "data": {
                      "type": "object",
                      "description": "Full subcontractor document (minus _id, company_id, __v, and internal supplier-integration IDs), with `accounts.payment_term`/`accounts.tax_group` and `created_by` populated."
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
            "name": "vendor_uid",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "summary": "Get Subcontractor Details"
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