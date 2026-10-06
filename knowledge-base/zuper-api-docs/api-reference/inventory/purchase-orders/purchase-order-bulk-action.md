---
updatedAt: 2026-09-17T11:34:51.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Purchase Order Bulk Action

Operates on Purchase Orders. In the Zuper client app this module is labeled "Purchase Order" for most companies, and "Material Order" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Only `action: "update_status"` is currently supported. The action is processed asynchronously by a background worker — this endpoint acknowledges the request immediately; it does not confirm that every order was updated by the time it responds.

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
    "/purchase_orders/bulk_action": {
      "post": {
        "summary": "Purchase Order Bulk Action",
        "description": "Operates on Purchase Orders. In the Zuper client app this module is labeled \"Purchase Order\" for most companies, and \"Material Order\" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Only `action: \"update_status\"` is currently supported. The action is processed asynchronously by a background worker — this endpoint acknowledges the request immediately; it does not confirm that every order was updated by the time it responds.",
        "operationId": "post_purchase_ordersbulk_action",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "action",
                  "action_options"
                ],
                "properties": {
                  "purchase_order_uid": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "UIDs to target. Alternative to filter_rules."
                  },
                  "filter_rules": {
                    "type": "array",
                    "items": {
                      "type": "object"
                    },
                    "description": "Rule-engine filter, alternative to purchase_order_uid."
                  },
                  "filter_rule_operator": {
                    "type": "string",
                    "enum": [
                      "AND",
                      "OR"
                    ],
                    "default": "AND"
                  },
                  "action": {
                    "type": "string",
                    "enum": [
                      "update_status"
                    ]
                  },
                  "action_options": {
                    "type": "object",
                    "required": [
                      "status"
                    ],
                    "properties": {
                      "status": {
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
                      }
                    }
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
                    "value": "{\"type\": \"success\", \"title\": \"Bulk Action triggered Successfully\", \"message\": \"Bulk Action triggered Successfully\"}"
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