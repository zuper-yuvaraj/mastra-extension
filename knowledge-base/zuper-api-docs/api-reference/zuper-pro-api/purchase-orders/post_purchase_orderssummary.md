---
updatedAt: 2026-09-17T11:22:50.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Purchase Order Summary

Operates on Purchase Orders. In the Zuper client app this module is labeled "Purchase Order" for most companies, and "Material Order" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Returns order counts/totals overall and broken down by status, plus an `OVERDUE` bucket (orders past their due_date in an active pre-fulfillment status).

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
    "/purchase_orders/summary": {
      "post": {
        "summary": "Get Purchase Order Summary",
        "description": "Operates on Purchase Orders. In the Zuper client app this module is labeled \"Purchase Order\" for most companies, and \"Material Order\" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Returns order counts/totals overall and broken down by status, plus an `OVERDUE` bucket (orders past their due_date in an active pre-fulfillment status).",
        "operationId": "post_purchase_orderssummary",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "filter_rules": {
                    "type": "array",
                    "items": {
                      "type": "object"
                    }
                  },
                  "filter_rule_operator": {
                    "type": "string",
                    "enum": [
                      "AND",
                      "OR"
                    ],
                    "default": "AND"
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
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "total_purchase_orders": {
                          "type": "object",
                          "properties": {
                            "count": {
                              "type": "integer"
                            },
                            "total": {
                              "type": "number"
                            }
                          }
                        },
                        "count_by_status": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "status_name": {
                                "type": "string",
                                "description": "One entry per status value, plus a synthetic \"OVERDUE\" bucket."
                              },
                              "count": {
                                "type": "integer"
                              },
                              "total": {
                                "type": "number"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"message\": \"success\", \"data\": {\"total_purchase_orders\": {\"count\": 0, \"total\": 0}, \"count_by_status\": [{\"status_name\": \"DRAFT\", \"count\": 0, \"total\": 0}]}}"
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