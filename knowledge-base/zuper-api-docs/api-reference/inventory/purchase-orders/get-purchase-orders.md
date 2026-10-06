---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Purchase Orders

Operates on Purchase Orders. In the Zuper client app this module is labeled "Purchase Order" for most companies, and "Material Order" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. `purchase_order_type` is always enforced server-side based on this route; you cannot use this endpoint to read the other module's records.

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
    "/purchase_orders": {
      "get": {
        "description": "Operates on Purchase Orders. In the Zuper client app this module is labeled \"Purchase Order\" for most companies, and \"Material Order\" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. `purchase_order_type` is always enforced server-side based on this route; you cannot use this endpoint to read the other module's records.",
        "operationId": "get_purchase_orders",
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
                        "success"
                      ]
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    },
                    "total_records": {
                      "type": "integer"
                    },
                    "current_page": {
                      "type": "integer"
                    },
                    "total_pages": {
                      "type": "integer"
                    },
                    "paging": {
                      "type": "object",
                      "description": "Present only when cursor_pagination is used.",
                      "properties": {
                        "next": {
                          "type": "string",
                          "nullable": true
                        },
                        "previous": {
                          "type": "string",
                          "nullable": true
                        },
                        "has_more": {
                          "type": "boolean"
                        }
                      }
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
            "name": "filter.keyword",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.is_active",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.vendor",
            "schema": {
              "type": "string"
            },
            "description": "vendor_uid"
          },
          {
            "in": "query",
            "name": "filter.created_from_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.created_to_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.due_from_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.due_to_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.purchase_order_from_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.purchase_order_to_date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.created_by",
            "schema": {
              "type": "string"
            },
            "description": "user uid"
          },
          {
            "in": "query",
            "name": "filter.status",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.updated_at_from",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.updated_at_to",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.job",
            "schema": {
              "type": "string"
            },
            "description": "Job uid"
          },
          {
            "in": "query",
            "name": "filter.estimate",
            "schema": {
              "type": "string"
            },
            "description": "Quote uid"
          },
          {
            "in": "query",
            "name": "filter.reference_number",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.purchase_order_number",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.await_approval_from",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.purchase_order_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "page",
            "schema": {
              "type": "string"
            },
            "description": "Default \"1\"."
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "string"
            },
            "description": "Default \"10\". Also accepts `count` as an alias."
          },
          {
            "in": "query",
            "name": "sort",
            "schema": {
              "type": "string"
            },
            "description": "\"ASC\" or \"DESC\", default \"DESC\" (by created_at)."
          },
          {
            "in": "query",
            "name": "cursor",
            "schema": {
              "type": "string"
            },
            "description": "Opaque cursor for cursor-based pagination."
          },
          {
            "in": "query",
            "name": "prev_cursor",
            "schema": {
              "type": "string"
            },
            "description": "Opaque cursor for the previous page."
          },
          {
            "in": "query",
            "name": "cursor_pagination",
            "schema": {
              "type": "string"
            },
            "description": "Set to enable cursor-based pagination instead of offset pagination."
          },
          {
            "in": "query",
            "name": "include_deleted",
            "schema": {
              "type": "string"
            },
            "description": "Set to include soft-deleted records."
          },
          {
            "in": "query",
            "name": "fields_to_select",
            "schema": {
              "type": "string"
            },
            "description": "Sparse fieldset selector."
          },
          {
            "in": "query",
            "name": "filter.project",
            "schema": {
              "type": "string"
            },
            "description": "Project UID."
          },
          {
            "in": "query",
            "name": "filter.asset",
            "schema": {
              "type": "string"
            },
            "description": "Asset UID."
          },
          {
            "in": "query",
            "name": "filter.material_request",
            "schema": {
              "type": "string"
            },
            "description": "Material Request UID."
          },
          {
            "in": "query",
            "name": "filter.appointment_uid",
            "schema": {
              "type": "string"
            },
            "description": "Comma-separated appointment UIDs."
          },
          {
            "in": "query",
            "name": "filter.parent_po",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.current_delivery_status",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.supplier_order_ref",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.delivery_method",
            "schema": {
              "type": "string"
            }
          }
        ],
        "summary": "Get Purchase Orders"
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