---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Vendor Catalogs

Operates on Vendors. In the Zuper client app this module is labeled "Vendor" for most companies, and "Supplier" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Vendor catalog rows record which products a vendor supplies, at what cost. This sub-resource exists only under `/vendors` — there is no `/subcontractors/:uid/catalog` route, even though the underlying schema and controller don't discriminate by vendor_type at all. Either `filter.product` or `filter.vendor` is required unless `group_by` is set.

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
    "/vendor_catalogs": {
      "get": {
        "description": "Operates on Vendors. In the Zuper client app this module is labeled \"Vendor\" for most companies, and \"Supplier\" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Vendor catalog rows record which products a vendor supplies, at what cost. This sub-resource exists only under `/vendors` — there is no `/subcontractors/:uid/catalog` route, even though the underlying schema and controller don't discriminate by vendor_type at all. Either `filter.product` or `filter.vendor` is required unless `group_by` is set.",
        "operationId": "get_vendor_catalogs",
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
                      "type": "array",
                      "items": {
                        "type": "object"
                      },
                      "description": "When group_by is set, each item is {uid, total_items, catalogs: [...], vendor|product} instead of a flat catalog row."
                    },
                    "total_records": {
                      "type": "integer"
                    },
                    "current_page": {
                      "type": "integer"
                    },
                    "total_pages": {
                      "type": "integer"
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "query",
            "name": "page",
            "schema": {
              "type": "string",
              "default": "1"
            }
          },
          {
            "in": "query",
            "name": "count",
            "schema": {
              "type": "string",
              "default": "10"
            }
          },
          {
            "in": "query",
            "name": "sort",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "default": "ASC"
            }
          },
          {
            "in": "query",
            "name": "group_by",
            "schema": {
              "type": "string",
              "enum": [
                "VENDOR",
                "PRODUCT"
              ]
            }
          },
          {
            "in": "query",
            "name": "fetch_availability_from_provider",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "filter.product",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.vendor",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.product_category",
            "schema": {
              "type": "string"
            },
            "description": "category uid"
          },
          {
            "in": "query",
            "name": "filter.product_type",
            "schema": {
              "type": "string"
            },
            "description": "PARTS, PRODUCT"
          },
          {
            "in": "query",
            "name": "filter.keyword",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.supplier_product",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.supplier_product_option",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.uom",
            "schema": {
              "type": "string"
            }
          }
        ],
        "summary": "Get Vendor Catalogs"
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