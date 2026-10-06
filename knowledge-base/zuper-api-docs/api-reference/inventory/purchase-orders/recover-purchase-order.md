---
updatedAt: 2026-09-17T11:45:44.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Recover Purchase Order

Operates on Purchase Orders. In the Zuper client app this module is labeled "Purchase Order" for most companies, and "Material Order" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Restores (undeletes) previously soft-deleted orders. Requires the caller's role to be exactly ADMIN — not just an equivalent permission key — or the request is rejected with 401.

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
    "/purchase_orders/recover": {
      "post": {
        "summary": "Recover Purchase Order",
        "description": "Operates on Purchase Orders. In the Zuper client app this module is labeled \"Purchase Order\" for most companies, and \"Material Order\" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. Restores (undeletes) previously soft-deleted orders. Requires the caller's role to be exactly ADMIN — not just an equivalent permission key — or the request is rejected with 401.",
        "operationId": "post_purchase_ordersrecover",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "purchase_order_uids"
                ],
                "properties": {
                  "purchase_order_uids": {
                    "type": "array",
                    "items": {
                      "type": "string"
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
                      "type": "string",
                      "description": "Exact wording is \"Purchase Order\" for most companies, or \"Material Order\" for roofing-industry companies."
                    },
                    "message": {
                      "type": "string",
                      "description": "Exact wording is \"Purchase Order\" for most companies, or \"Material Order\" for roofing-industry companies."
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"title\": \"Purchase Order recovered successfully\", \"message\": \"Purchase Order recovered successfully\"}"
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