---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Status of Transfer Order

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
    "/products/transfer_orders/{transfer_order_uid}/status": {
      "put": {
        "summary": "Update Status of Transfer Order",
        "description": "",
        "operationId": "transfer-order-status-update",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "status_name"
                ],
                "properties": {
                  "status_name": {
                    "type": "string",
                    "enum": [
                      "DRAFT",
                      "IN_TRANSIT",
                      "COMPLETED",
                      "VOIDED"
                    ]
                  },
                  "sent_date": {
                    "type": "string",
                    "format": "date"
                  },
                  "received_date": {
                    "type": "string",
                    "format": "date"
                  },
                  "remarks": {
                    "type": "string"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "status_name": "IN_TRANSIT",
                    "sent_date": "2024-06-11 04:08:07"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Transfer Order Status Updated Successfully\",\n    \"message\": \"Transfer Order status updated successfully\"\n}"
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
                      "example": "Transfer Order Status Updated Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Transfer Order status updated successfully"
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
        "deprecated": false,
        "parameters": [
          {
            "name": "transfer_order_uid",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
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