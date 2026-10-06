---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Vendors

Operates on Vendors. In the Zuper client app this module is labeled "Vendor" for most companies, and "Supplier" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. `vendor_type` is always enforced server-side based on this route; you cannot use this endpoint to read the other module's records.

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
    "/vendors": {
      "get": {
        "description": "Operates on Vendors. In the Zuper client app this module is labeled \"Vendor\" for most companies, and \"Supplier\" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. `vendor_type` is always enforced server-side based on this route; you cannot use this endpoint to read the other module's records.",
        "operationId": "get_vendors",
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
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      },
                      "description": "Deselects _id, company_id, __v, accounts, vendor_bank_details, vendor_contacts, attachments, and internal supplier-integration IDs."
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
              "type": "integer",
              "default": 1
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
              "default": "DESC"
            }
          },
          {
            "in": "query",
            "name": "sort_by",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.is_active",
            "schema": {
              "type": "boolean"
            }
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
            "name": "filter.created_by",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.is_deleted",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "filter.from_catalog_count",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "filter.to_catalog_count",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "filter.from_lead_time",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "filter.to_lead_time",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "filter.last_ordered_from_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.last_ordered_to_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.created_from_date",
            "schema": {
              "type": "string",
              "format": "date"
            },
            "description": "eg: 2025-05-12"
          },
          {
            "in": "query",
            "name": "filter.created_to_date",
            "schema": {
              "type": "string",
              "format": "date"
            },
            "description": "eg: 2025-05-12"
          },
          {
            "in": "query",
            "name": "filter.updated_from_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.updated_to_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.vendor_delivery_method",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.custom_field",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.supplier_provider_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.integrated_vendors",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "filter.favorite_supplier_vendor",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "summary": "Get Vendors"
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