---
updatedAt: 2026-09-17T10:23:33.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Purchase Order Status

Operates on Purchase Orders. In the Zuper client app this module is labeled "Purchase Order" for most companies, and "Material Order" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Status transitions are validated against a fixed transition matrix — an unreachable transition is rejected with 400. `FULFILLED` is not a valid status for a Work Order (Service Order); use `WORK_COMPLETED` instead.

Available Statuses:

'DRAFT','SUBMITTED',<br />'APPROVED',<br />'REJECTED',<br />'CANCELED',<br />'SENT\_TO\_VENDOR',<br />'VENDOR\_APPROVED',<br />'VENDOR\_REJECTED',<br />'FULFILLED',<br />'PARTIALLY\_FULFILLED'

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
    "/purchase_orders/{purchase_order_uid}/status": {
      "put": {
        "description": "Operates on Purchase Orders. In the Zuper client app this module is labeled \"Purchase Order\" for most companies, and \"Material Order\" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Status transitions are validated against a fixed transition matrix — an unreachable transition is rejected with 400. `FULFILLED` is not a valid status for a Work Order (Service Order); use `WORK_COMPLETED` instead.",
        "operationId": "put_purchase_orders{purchase_order_uid}status",
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
                      "type": "string",
                      "description": "Exact wording is \"Purchase Order\" for most companies, or \"Material Order\" for roofing-industry companies."
                    },
                    "message": {
                      "type": "string",
                      "description": "Exact wording is \"Purchase Order\" for most companies, or \"Material Order\" for roofing-industry companies."
                    },
                    "data": {
                      "type": "object",
                      "description": "Present only for vendor-integrated suppliers — holds the supplier submission result."
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"title\": \"Purchase Order updated successfully\", \"message\": \"Purchase Order updated successfully\"}"
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
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "purchase_order_status"
                ],
                "properties": {
                  "purchase_order_status": {
                    "type": "string",
                    "enum": [
                      "DRAFT",
                      "SUBMITTED",
                      "APPROVED",
                      "REJECTED",
                      "CANCELED",
                      "SENT_TO_VENDOR",
                      "VENDOR_APPROVED",
                      "VENDOR_REJECTED",
                      "FULFILLED",
                      "PARTIALLY_FULFILLED",
                      "WORK_COMPLETED",
                      "INVOICED",
                      "PAID",
                      "CLOSED"
                    ]
                  },
                  "remarks": {
                    "type": "string"
                  },
                  "attachments": {
                    "type": "array",
                    "items": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          }
        },
        "summary": "Update Purchase Order Status"
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