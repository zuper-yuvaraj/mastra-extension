---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Vendor Catalog

Operates on Vendors. In the Zuper client app this module is labeled "Vendor" for most companies, and "Supplier" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Vendor catalog rows record which products a vendor supplies, at what cost. This sub-resource exists only under `/vendors` — there is no `/subcontractors/:uid/catalog` route, even though the underlying schema and controller don't discriminate by vendor_type at all.

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
    "/vendors/{vendor_uid}/catalog/{catalog_uid}": {
      "delete": {
        "description": "Operates on Vendors. In the Zuper client app this module is labeled \"Vendor\" for most companies, and \"Supplier\" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Vendor catalog rows record which products a vendor supplies, at what cost. This sub-resource exists only under `/vendors` — there is no `/subcontractors/:uid/catalog` route, even though the underlying schema and controller don't discriminate by vendor_type at all.",
        "operationId": "delete_vendors{vendor_uid}catalog{catalog_uid}",
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
                    "value": "{\"type\": \"SUCCESS\", \"title\": \"Vendor Catalog Deleted Successfully\", \"message\": \"Vendor Catalog Deleted Successfully\"}"
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
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "catalog_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "query",
            "name": "delete_from_all_branches",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "summary": "Delete Vendor Catalog"
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