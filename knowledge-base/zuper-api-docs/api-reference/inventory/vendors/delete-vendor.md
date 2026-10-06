---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Vendor

Operates on Vendors. In the Zuper client app this module is labeled "Vendor" for most companies, and "Supplier" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Rejected with 400 if the vendor is currently active (`is_active: true`), or if it's an integrated favorite supplier.

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
    "/vendors/{vendor_uid}": {
      "delete": {
        "description": "Operates on Vendors. In the Zuper client app this module is labeled \"Vendor\" for most companies, and \"Supplier\" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Rejected with 400 if the vendor is currently active (`is_active: true`), or if it's an integrated favorite supplier.",
        "operationId": "delete_vendors{vendor_uid}",
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
                      "type": "string",
                      "description": "Exact wording is \"Vendor\" for most companies, or \"Supplier\" for roofing-industry companies."
                    },
                    "message": {
                      "type": "string",
                      "description": "Exact wording is \"Vendor\" for most companies, or \"Supplier\" for roofing-industry companies."
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"SUCCESS\", \"title\": \"Vendor Deleted Successfully\", \"message\": \"Vendor Deleted Successfully\"}"
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
        "summary": "Delete Vendor"
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