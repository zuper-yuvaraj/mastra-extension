---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Transfer Order Card

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
    "/products/transfer_orders/{transfer_order_uid}/card": {
      "post": {
        "summary": "Transfer Order Card",
        "description": "",
        "operationId": "transfer-order-card",
        "parameters": [
          {
            "name": "transfer_order_uid",
            "in": "path",
            "description": "transfer order uid",
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
                  "type"
                ],
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "SEND_EMAIL",
                      "PDF"
                    ]
                  },
                  "email": {
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
                  "email_subject": {
                    "type": "string"
                  },
                  "email_body": {
                    "type": "string"
                  },
                  "attachments": {
                    "type": "array",
                    "description": "transfer order attachment uids",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "type": "SEND_EMAIL",
                    "email": "ashin.t@zuper.co",
                    "attachments": [
                      "c1d8717d-a91f-4ee8-90b6-9eeb0d20320c"
                    ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Email Sent Successfully to ashin.t@zuper.co\",\n    \"data\": {\n        \"transfer_order_uid\": \"03e0a97f-1e1d-4cec-9023-ae49faa2c437\"\n    }\n}"
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
                      "example": "Email Sent Successfully to ashin.t@zuper.co"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "transfer_order_uid": {
                          "type": "string",
                          "example": "03e0a97f-1e1d-4cec-9023-ae49faa2c437"
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