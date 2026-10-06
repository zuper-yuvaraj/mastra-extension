---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Transfer Order Attachment

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
    "/products/transfer_orders/{transfer_order_uid}/attachments/{attachment_uid}": {
      "delete": {
        "summary": "Delete Transfer Order Attachment",
        "description": "",
        "operationId": "transfer-order-attachment-delete",
        "parameters": [
          {
            "name": "transfer_order_uid",
            "in": "path",
            "description": "transfer order uid",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "attachment_uid",
            "in": "path",
            "description": "transfer order attachment uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Transfer Order Attachment Deleted\",\n    \"message\": \"Transfer Order Attachment Deleted\",\n    \"data\": {\n        \"transfer_order_uid\": \"03e0a97f-1e1d-4cec-9023-ae49faa2c437\",\n        \"attachment_uid\": \"d83d954e-fa20-4739-b43e-4200e28a81b3\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Transfer Order Attachment Deleted"
                    },
                    "message": {
                      "type": "string",
                      "example": "Transfer Order Attachment Deleted"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "transfer_order_uid": {
                          "type": "string",
                          "example": "03e0a97f-1e1d-4cec-9023-ae49faa2c437"
                        },
                        "attachment_uid": {
                          "type": "string",
                          "example": "d83d954e-fa20-4739-b43e-4200e28a81b3"
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