---
updatedAt: 2026-09-17T11:34:51.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Purchase Order Line Items

Operates on Purchase Orders. In the Zuper client app this module is labeled "Purchase Order" for most companies, and "Material Order" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Records fulfillment/receiving progress against a Purchase Order's line items — recomputes `fulfilled_quantity`, `outstanding_quantity`, per-item `status`, and rolls up the order's `total_price` if `unit_price` changed. This endpoint exists only for Purchase Orders / Material Orders — there is no equivalent `/service_orders/:uid/line_items` route for Work Orders.

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
    "/purchase_orders/{purchase_order_uid}/line_items": {
      "patch": {
        "summary": "Update Purchase Order Line Items",
        "description": "Operates on Purchase Orders. In the Zuper client app this module is labeled \"Purchase Order\" for most companies, and \"Material Order\" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Records fulfillment/receiving progress against a Purchase Order's line items — recomputes `fulfilled_quantity`, `outstanding_quantity`, per-item `status`, and rolls up the order's `total_price` if `unit_price` changed. This endpoint exists only for Purchase Orders / Material Orders — there is no equivalent `/service_orders/:uid/line_items` route for Work Orders.",
        "operationId": "patch_purchase_orderspurchase_order_uidline_items",
        "parameters": [
          {
            "in": "path",
            "name": "purchase_order_uid",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "line_items"
                ],
                "properties": {
                  "line_items": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "line_item_uid"
                      ],
                      "properties": {
                        "line_item_uid": {
                          "type": "string",
                          "description": "Required."
                        },
                        "fulfilled_quantity": {
                          "type": "string"
                        },
                        "remarks": {
                          "type": "string"
                        },
                        "serial_nos": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "vendor_sku": {
                          "type": "string"
                        },
                        "unit_price": {
                          "type": "string"
                        },
                        "location_uid": {
                          "type": "string"
                        },
                        "attachments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "required": [
                              "company_attachment_uid",
                              "url"
                            ],
                            "properties": {
                              "company_attachment_uid": {
                                "type": "string",
                                "description": "Required."
                              },
                              "url": {
                                "type": "string",
                                "description": "Required. Must be an S3 URL."
                              },
                              "file_name": {
                                "type": "string"
                              },
                              "file_size": {
                                "type": "integer"
                              }
                            }
                          }
                        }
                      }
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