---
updatedAt: 2026-07-29T13:48:43.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Work Order Fields

Operates on Service Orders, shown in the Zuper client app as "Work Order" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. This is a narrower field set than the full PUT update — intended for lightweight edits (title, dates, remarks, vendor/payment term) without resending the whole order. Work Orders (Service Orders) may change `vendor` (the assigned subcontractor) through this endpoint.

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
      "patch": {
        "description": "Operates on Service Orders, shown in the Zuper client app as \"Work Order\" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. This is a narrower field set than the full PUT update — intended for lightweight edits (title, dates, remarks, vendor/payment term) without resending the whole order. Work Orders (Service Orders) may change `vendor` (the assigned subcontractor) through this endpoint.",
        "operationId": "put_purchase_orders{purchase_order_uid}-2-1",
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
                    "description": "Work Orders (Service Orders) may change `vendor` (the assigned subcontractor) through this endpoint."
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
        "summary": "Update Work Order Fields",
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