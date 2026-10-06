---
updatedAt: 2026-07-29T13:46:56.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Purchase Order Fields

Operates on Purchase Orders. In the Zuper client app this module is labeled "Purchase Order" for most companies, and "Material Order" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. This is a narrower field set than the full PUT update — intended for lightweight edits (title, dates, remarks, vendor/payment term) without resending the whole order. Changing `vendor` via this endpoint is only allowed for Work Orders (Service Orders) — attempting it on a Purchase Order / Material Order is rejected with 400.

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
    "/purchase_orders/{purchase_order_uid}": {
      "patch": {
        "description": "Operates on Purchase Orders. In the Zuper client app this module is labeled \"Purchase Order\" for most companies, and \"Material Order\" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. This is a narrower field set than the full PUT update — intended for lightweight edits (title, dates, remarks, vendor/payment term) without resending the whole order. Changing `vendor` via this endpoint is only allowed for Work Orders (Service Orders) — attempting it on a Purchase Order / Material Order is rejected with 400.",
        "operationId": "put_purchase_orders{purchase_order_uid}-2",
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
                "properties": {
                  "purchase_order_title": {
                    "type": "string"
                  },
                  "reference_number": {
                    "type": "string"
                  },
                  "remarks": {
                    "type": "string"
                  },
                  "due_date": {
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
                  "vendor": {
                    "type": "string",
                    "description": "Changing `vendor` via this endpoint is only allowed for Work Orders (Service Orders) — attempting it on a Purchase Order / Material Order is rejected with 400."
                  },
                  "payment_term": {
                    "type": "string"
                  },
                  "template": {
                    "type": "string"
                  },
                  "job_measurement_uids": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "job_attachments_uids": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "summary": "Update Purchase Order Fields",
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