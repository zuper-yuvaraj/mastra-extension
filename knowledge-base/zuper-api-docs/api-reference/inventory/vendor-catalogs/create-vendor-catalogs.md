---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Vendor Catalog

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
    "/vendors/{vendor_uid}/catalog": {
      "post": {
        "description": "Operates on Vendors. In the Zuper client app this module is labeled \"Vendor\" for most companies, and \"Supplier\" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Vendor catalog rows record which products a vendor supplies, at what cost. This sub-resource exists only under `/vendors` — there is no `/subcontractors/:uid/catalog` route, even though the underlying schema and controller don't discriminate by vendor_type at all.",
        "operationId": "post_vendors{vendor_uid}catalog",
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
                    "value": "{\"type\": \"SUCCESS\", \"title\": \"Vendor Catalog Created Successfully\", \"message\": \"Vendor Catalog Created Successfully\"}"
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
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "vendor_catalog"
                ],
                "properties": {
                  "vendor_catalog": {
                    "type": "array",
                    "description": "Non-empty array required.",
                    "items": {
                      "type": "object",
                      "required": [
                        "product",
                        "vendor_sku",
                        "vendor_cost"
                      ],
                      "properties": {
                        "product": {
                          "type": "string",
                          "description": "product_uid, required."
                        },
                        "vendor_sku": {
                          "type": "string",
                          "description": "Required. Must be unique per product for this vendor."
                        },
                        "vendor_cost": {
                          "type": "number",
                          "description": "Required."
                        },
                        "remarks": {
                          "type": "string",
                          "maxLength": 2000
                        },
                        "options": {
                          "type": "object"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "summary": "Create Vendor Catalog"
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