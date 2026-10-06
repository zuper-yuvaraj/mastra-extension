---
updatedAt: 2026-09-17T11:22:50.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Work Order Bulk Action

Operates on Service Orders, shown in the Zuper client app as "Work Order" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. Only `action: "update_status"` is currently supported. The action is processed asynchronously by a background worker — this endpoint acknowledges the request immediately; it does not confirm that every order was updated by the time it responds.

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
    "/service_orders/bulk_action": {
      "post": {
        "summary": "Work Order Bulk Action",
        "description": "Operates on Service Orders, shown in the Zuper client app as \"Work Order\" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. Only `action: \"update_status\"` is currently supported. The action is processed asynchronously by a background worker — this endpoint acknowledges the request immediately; it does not confirm that every order was updated by the time it responds.",
        "operationId": "post_service_ordersbulk_action",
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