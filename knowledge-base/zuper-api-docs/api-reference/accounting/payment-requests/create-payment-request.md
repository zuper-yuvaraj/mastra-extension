---
updatedAt: 2026-06-16T10:59:00.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Payment Request

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api-2",
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
    "/payments/payment_request": {
      "post": {
        "description": "",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "payment_request_uid": {
                          "type": "string"
                        },
                        "payment_link": {
                          "type": "string"
                        },
                        "status": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [],
        "operationId": "post_payments-payment-request",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "module": {
                    "type": "string",
                    "enum": [
                      "INVOICE"
                    ],
                    "description": "Reference Module"
                  },
                  "module_uid": {
                    "type": "string",
                    "description": "UID for he module"
                  },
                  "requested_amount": {
                    "type": "number",
                    "description": "Amount to Create Payment Request"
                  },
                  "email": {
                    "type": "string",
                    "description": "Email notification sent to the customer with a payment link for completing the requested invoice payment."
                  },
                  "notes": {
                    "type": "string",
                    "description": "Additional message or instructions included in the payment request email for the customer."
                  },
                  "email_config_uid": {
                    "type": "string",
                    "description": "Unique identifier used to select the email configuration for sending the payment request."
                  },
                  "cc": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "List of email addresses to be included in the CC field of the payment email."
                  },
                  "bcc": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "List of email addresses to be included in the BCC field of the payment email."
                  }
                },
                "required": [
                  "module",
                  "module_uid",
                  "requested_amount",
                  "email"
                ]
              }
            }
          }
        },
        "summary": "Create Payment Request"
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