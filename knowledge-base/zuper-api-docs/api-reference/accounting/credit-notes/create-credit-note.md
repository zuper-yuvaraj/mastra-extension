---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Credit Note

Only admins can create

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
    "/accounting/credit_notes": {
      "post": {
        "summary": "Create Credit Note",
        "description": "Only admins can create",
        "operationId": "create-credit-note",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "credit_note": {
                    "properties": {
                      "credit_note_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "customer": {
                        "type": "string",
                        "description": "Customer UID"
                      },
                      "total_amount": {
                        "type": "number",
                        "description": "Must be Greater than or Equal to 1",
                        "format": "float"
                      },
                      "payment_method": {
                        "type": "string",
                        "description": "Payment Method UID"
                      },
                      "remarks": {
                        "type": "string",
                        "description": "Remarks"
                      },
                      "module_name": {
                        "type": "string",
                        "description": "Required for refund ,Currently supporting for INVOICE, ESTIMATE",
                        "enum": [
                          "JOB",
                          "INVOICE",
                          "ESTIMATE"
                        ]
                      },
                      "module_uid": {
                        "type": "string",
                        "description": "Required for Refund - Invoice UID / Estimate UID"
                      },
                      "payment_transaction_uid": {
                        "type": "string",
                        "description": "Required for Refund"
                      }
                    },
                    "required": [
                      "customer",
                      "total_amount"
                    ],
                    "type": "object"
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
                    "value": "{\n  type: \"success\",\n\tmessage: \"Credit Note has been created successfully\",\n\tdata :{\n  \tcredit_note_uid: \"c8b1c7c7-bc62-60-a459-4a2d7a09a630\"\n  }\n}"
                  }
                }
              }
            }
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n\ttype: \"error\",\n\ttitle: \"Error while creating credit note\",\n\tmessage: \"Error while creating credit note\"\n}"
                  }
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