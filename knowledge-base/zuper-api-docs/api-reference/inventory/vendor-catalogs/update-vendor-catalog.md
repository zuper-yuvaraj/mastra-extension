---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Vendor Catalog

Operates on Vendors. In the Zuper client app this module is labeled "Vendor" for most companies, and "Supplier" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Vendor catalog rows record which products a vendor supplies, at what cost. This sub-resource exists only under `/vendors` — there is no `/subcontractors/:uid/catalog` route, even though the underlying schema and controller don't discriminate by vendor_type at all. Note: the path parameter is named `catalog_uid` here, though the underlying route parameter in the API is `vendor_catalog_uid` — same value either way, just the UID of the catalog row.

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
      "put": {
        "description": "Operates on Vendors. In the Zuper client app this module is labeled \"Vendor\" for most companies, and \"Supplier\" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Vendor catalog rows record which products a vendor supplies, at what cost. This sub-resource exists only under `/vendors` — there is no `/subcontractors/:uid/catalog` route, even though the underlying schema and controller don't discriminate by vendor_type at all. Note: the path parameter is named `catalog_uid` here, though the underlying route parameter in the API is `vendor_catalog_uid` — same value either way, just the UID of the catalog row.",
        "operationId": "put_vendors{vendor_uid}catalog{catalog_uid}",
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
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "vendor_catalog_uid": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"SUCCESS\", \"title\": \"Vendor Catalog Updated Successfully\", \"message\": \"Vendor Catalog Updated Successfully\", \"data\": {\"vendor_catalog_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\"}}"
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
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "vendor_catalog": {
                    "type": "object",
                    "properties": {
                      "product": {
                        "type": "string",
                        "description": "product uid"
                      },
                      "vendor_sku": {
                        "type": "string"
                      },
                      "vendor_cost": {
                        "type": "number"
                      },
                      "remarks": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "summary": "Update Vendor Catalog"
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