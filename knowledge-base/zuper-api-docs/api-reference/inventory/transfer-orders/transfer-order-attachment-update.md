---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Transfer Order Attachment

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
      "put": {
        "summary": "Update Transfer Order Attachment",
        "description": "",
        "operationId": "transfer-order-attachment-update",
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
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "attachment"
                ],
                "properties": {
                  "attachment": {
                    "type": "object",
                    "required": [
                      "file_name",
                      "url"
                    ],
                    "properties": {
                      "file_name": {
                        "type": "string"
                      },
                      "url": {
                        "type": "string"
                      },
                      "file_size": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "visible_to_customer": {
                        "type": "boolean",
                        "default": false
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "attachment": {
                      "attachment_uid": "c1d8717d-a91f-4ee8-90b6-9eeb0d20320c",
                      "file_name": "file name updated",
                      "url": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/5df37d4b-b6f7-4f26-8556-7cec1efd38ae.png"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Transfer order Attachment Updated\",\n    \"message\": \"Transfer order Attachment Updated\",\n    \"data\": {\n        \"transfer_order_uid\": \"03e0a97f-1e1d-4cec-9023-ae49faa2c437\",\n        \"attachment_uid\": \"c1d8717d-a91f-4ee8-90b6-9eeb0d20320c\"\n    }\n}"
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
                      "example": "Transfer order Attachment Updated"
                    },
                    "message": {
                      "type": "string",
                      "example": "Transfer order Attachment Updated"
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
                          "example": "c1d8717d-a91f-4ee8-90b6-9eeb0d20320c"
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