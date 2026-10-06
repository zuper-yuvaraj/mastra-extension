---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Invoice Status

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
    "/invoice/{invoice_uid}/status": {
      "put": {
        "summary": "Update Invoice Status",
        "description": "",
        "operationId": "update-a-invoice-status",
        "parameters": [
          {
            "name": "invoice_uid",
            "in": "path",
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
                "required": [
                  "invoice_status",
                  "invoice_uid"
                ],
                "properties": {
                  "invoice_status": {
                    "type": "string",
                    "enum": [
                      "DRAFT",
                      "AWAIT_PAYMENT",
                      "PAID",
                      "BAD_DEBT",
                      "ARCHIVED",
                      "CLOSED",
                      "CANCELED",
                      "READY_TO_INVOICE"
                    ]
                  },
                  "invoice_uid": {
                    "type": "string"
                  },
                  "payment_mode_uid": {
                    "type": "string"
                  },
                  "remarks": {
                    "type": "string"
                  },
                  "reference_no": {
                    "type": "string"
                  },
                  "payment_date": {
                    "type": "string",
                    "format": "date"
                  },
                  "source": {
                    "type": "string",
                    "enum": [
                      "BACK_OFFICE",
                      "MOBILE_APP",
                      "EXTERNAL"
                    ]
                  },
                  "payment_transaction_uid": {
                    "type": "string"
                  },
                  "send_receipt": {
                    "type": "boolean"
                  },
                  "card_id": {
                    "type": "string"
                  },
                  "charge_card": {
                    "type": "boolean"
                  },
                  "amount_paid": {
                    "type": "number",
                    "format": "double"
                  },
                  "card_present": {
                    "type": "boolean",
                    "default": false
                  },
                  "payment_via": {
                    "type": "string",
                    "default": "PAYMENT_METHOD",
                    "enum": [
                      "PAYMENT_METHOD",
                      "CREDIT"
                    ]
                  },
                  "credits": {
                    "type": "array",
                    "description": "if payment_via is CREDIT",
                    "items": {
                      "properties": {
                        "credit_uid": {
                          "type": "string"
                        },
                        "amount": {
                          "type": "number",
                          "format": "float"
                        }
                      },
                      "type": "object"
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
                "examples": {
                  "Result": {
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Invoice Status Updated\",\n  \"data\": {\n    \"invoice_uid\": \"28c3d4e0-95a1-11ee-98bc-e77b9b7b972c\"\n  }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Invoice Status Updated"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "invoice_uid": {
                          "type": "string",
                          "example": "28c3d4e0-95a1-11ee-98bc-e77b9b7b972c"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "deprecated": false
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