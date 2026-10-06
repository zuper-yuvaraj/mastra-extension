---
updatedAt: 2026-07-29T13:31:35.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Send Work Order

Operates on Service Orders, shown in the Zuper client app as "Work Order" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. If `email` is provided, sends the order by email and returns a JSON success message. If `email` is omitted, the response is instead a raw PDF (or Excel, if `send_excel` is true) binary stream, not JSON.

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
    "/service_orders/{purchase_order_uid}/send": {
      "post": {
        "description": "Operates on Service Orders, shown in the Zuper client app as \"Work Order\" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. If `email` is provided, sends the order by email and returns a JSON success message. If `email` is omitted, the response is instead a raw PDF (or Excel, if `send_excel` is true) binary stream, not JSON.",
        "operationId": "post_purchase_orders{purchase_order_uid}send-1",
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
                    "value": "{\"type\": \"success\", \"title\": \"Work Order has been sent\", \"message\": \"Work Order has been sent to example@vendor.com\"}"
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
        "summary": "Send Work Order"
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