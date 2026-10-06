---
updatedAt: 2026-09-17T11:22:50.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Bulk Create Work Order

Operates on Service Orders, shown in the Zuper client app as "Work Order" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. Creates multiple orders in one call. Each item in `purchase_orders` uses the exact same field shape as the single Create endpoint's `purchase_order` object (see Create Purchase Order / Create Work Order), just without the outer wrapper key.

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
    "/service_orders/bulk": {
      "post": {
        "summary": "Bulk Create Work Order",
        "description": "Operates on Service Orders, shown in the Zuper client app as \"Work Order\" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. Creates multiple orders in one call. Each item in `purchase_orders` uses the exact same field shape as the single Create endpoint's `purchase_order` object (see Create Purchase Order / Create Work Order), just without the outer wrapper key.",
        "operationId": "post_service_ordersbulk",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "purchase_orders"
                ],
                "properties": {
                  "purchase_orders": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "purchase_order_title": {
                          "type": "string",
                          "description": "Required."
                        },
                        "vendor": {
                          "type": "string",
                          "description": "Vendor UID, required."
                        },
                        "payment_term": {
                          "type": "string",
                          "description": "Payment term UID, required."
                        },
                        "due_date": {
                          "type": "string",
                          "format": "date",
                          "description": "Required."
                        },
                        "line_items": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          },
                          "description": "Required, non-empty."
                        },
                        "delivery_method": {
                          "type": "string",
                          "enum": [
                            "JOB_ADDRESS",
                            "WAREHOUSE",
                            "PICKUP"
                          ],
                          "description": "Required for Purchase Order, not required for Work Order."
                        },
                        "job": {
                          "type": "string"
                        },
                        "estimate": {
                          "type": "string"
                        },
                        "asset": {
                          "type": "string"
                        },
                        "project": {
                          "type": "string"
                        },
                        "material_request": {
                          "type": "string"
                        },
                        "parent_po": {
                          "type": "string"
                        },
                        "template": {
                          "type": "string"
                        },
                        "reference_number": {
                          "type": "string"
                        },
                        "remarks": {
                          "type": "string"
                        },
                        "purchase_order_date": {
                          "type": "string",
                          "format": "date"
                        },
                        "delivery_time": {
                          "type": "string",
                          "enum": [
                            "ANYTIME",
                            "MORNING",
                            "AFTERNOON",
                            "SPECIAL_REQUEST"
                          ]
                        },
                        "ship_to": {
                          "type": "object"
                        },
                        "billing_address": {
                          "type": "object"
                        }
                      },
                      "required": [
                        "purchase_order_title",
                        "vendor",
                        "payment_term",
                        "due_date",
                        "line_items"
                      ]
                    },
                    "description": "Non-empty array required."
                  }
                }
              }
            }
          }
        },
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
                      "properties": {
                        "purchase_order_uids": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"title\": \"Created Successfully\", \"message\": \"Created Successfully\", \"data\": {\"purchase_order_uids\": [\"cb1223c5-b32f-459c-9204-afe10baa2380\"]}}"
                  }
                }
              }
            }
          }
        }
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