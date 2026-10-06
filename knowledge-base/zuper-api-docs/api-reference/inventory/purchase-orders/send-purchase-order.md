---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Send Purchase Order

Operates on Purchase Orders. In the Zuper client app this module is labeled "Purchase Order" for most companies, and "Material Order" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. If `email` is provided, sends the order by email and returns a JSON success message. If `email` is omitted, the response is instead a raw PDF (or Excel, if `send_excel` is true) binary stream, not JSON.

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
    "/purchase_orders/{purchase_order_uid}/send": {
      "post": {
        "description": "Operates on Purchase Orders. In the Zuper client app this module is labeled \"Purchase Order\" for most companies, and \"Material Order\" for companies in the roofing industry — the API and data shape are identical either way. Purchase Orders and Work Orders (Service Orders) share the exact same underlying schema and endpoints; they're distinguished only by the `purchase_order_type` field (`PURCHASE_ORDER` here) and the `/purchase_orders` vs `/service_orders` route prefix. If `email` is provided, sends the order by email and returns a JSON success message. If `email` is omitted, the response is instead a raw PDF (or Excel, if `send_excel` is true) binary stream, not JSON.",
        "operationId": "post_purchase_orders{purchase_order_uid}send",
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
                    "value": "{\"type\": \"success\", \"title\": \"Purchase Order has been sent\", \"message\": \"Purchase Order has been sent to example@vendor.com\"}"
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
                  "email": {
                    "type": "string"
                  },
                  "subject": {
                    "type": "string"
                  },
                  "email_body": {
                    "type": "string"
                  },
                  "email_cc": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "email_bcc": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "email_config_uid": {
                    "type": "string"
                  },
                  "template_uid": {
                    "type": "string"
                  },
                  "attachments": {
                    "type": "array",
                    "items": {
                      "type": "object"
                    }
                  },
                  "send_pdf": {
                    "type": "boolean",
                    "description": "If true, sends/returns a PDF."
                  },
                  "send_excel": {
                    "type": "boolean",
                    "description": "If true, sends/returns an Excel file instead of a PDF."
                  },
                  "include_measurements": {
                    "type": "boolean"
                  },
                  "include_job_attachments": {
                    "type": "boolean"
                  },
                  "include_products": {
                    "type": "boolean"
                  },
                  "from_status_update": {
                    "type": "boolean"
                  }
                }
              }
            }
          }
        },
        "summary": "Send Purchase Order"
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