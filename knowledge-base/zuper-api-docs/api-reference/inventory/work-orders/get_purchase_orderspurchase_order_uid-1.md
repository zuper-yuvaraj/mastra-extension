---
updatedAt: 2026-07-29T13:28:40.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Work Order Details

Operates on Service Orders, shown in the Zuper client app as "Work Order" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. A UID belonging to the other module (e.g. a Work Order UID fetched via `/purchase_orders/:uid`) returns 404.

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
    "/service_orders/{purchase_order_uid}": {
      "get": {
        "description": "Operates on Service Orders, shown in the Zuper client app as \"Work Order\" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. A UID belonging to the other module (e.g. a Work Order UID fetched via `/purchase_orders/:uid`) returns 404.",
        "operationId": "get_purchase_orders{purchase_order_uid}-1",
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
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "description": "Full document with populated references: job, estimate, asset, vendor, material_request, ship_to.product_location, project, parent_po, template, payment_term, line_items.product_ref_id, line_items.vendor_catalog, approval.await_approval, and appointments (expanded from UIDs to summaries)."
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
            "name": "purchase_order_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "query",
            "name": "fields_to_select",
            "schema": {
              "type": "string"
            },
            "description": "Sparse fieldset selector."
          }
        ],
        "summary": "Get Work Order Details",
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