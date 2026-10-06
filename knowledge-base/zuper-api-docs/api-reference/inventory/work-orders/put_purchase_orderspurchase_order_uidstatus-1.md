---
updatedAt: 2026-07-29T13:30:26.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Work Order Status

Operates on Service Orders, shown in the Zuper client app as "Work Order" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. Status transitions are validated against a fixed transition matrix — an unreachable transition is rejected with 400. `WORK_COMPLETED` is not a valid status for a Purchase Order / Material Order; use `FULFILLED` instead.

Available Statuses:

'DRAFT','SUBMITTED',<br />'APPROVED',<br />'REJECTED',<br />'CANCELED',<br />'SENT\_TO\_VENDOR',<br />'VENDOR\_APPROVED',<br />'VENDOR\_REJECTED',<br />'WORK\_COMPLETED'

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
    "/service_orders/{purchase_order_uid}/status": {
      "put": {
        "description": "Operates on Service Orders, shown in the Zuper client app as \"Work Order\" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. Status transitions are validated against a fixed transition matrix — an unreachable transition is rejected with 400. `WORK_COMPLETED` is not a valid status for a Purchase Order / Material Order; use `FULFILLED` instead.",
        "operationId": "put_purchase_orders{purchase_order_uid}status-1",
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
                      "description": "Present only for vendor-integrated suppliers — holds the supplier submission result."
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"title\": \"Work Order updated successfully\", \"message\": \"Work Order updated successfully\"}"
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
        "summary": "Update Work Order Status",
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