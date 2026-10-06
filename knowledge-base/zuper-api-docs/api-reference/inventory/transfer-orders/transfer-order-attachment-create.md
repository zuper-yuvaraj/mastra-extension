---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Transfer Order Attachment

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
    "/products/transfer_orders/{transfer_order_uid}/attachments": {
      "post": {
        "summary": "Create Transfer Order Attachment",
        "description": "",
        "operationId": "transfer-order-attachment-create",
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
                "properties": {
                  "attachment": {
                    "type": "object",
                    "description": "either attachment or attachments is required",
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
                  },
                  "attachments": {
                    "type": "array",
                    "description": "either attachment or attachments is required",
                    "items": {
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
                      },
                      "required": [
                        "file_name",
                        "url"
                      ],
                      "type": "object"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "attachments": [
                      {
                        "attachment_uid": "dc1b45be-4d4b-445c-ba23-e09d391f92d4",
                        "file_name": "Screenshot from 2024-06-06 15-12-37.png",
                        "url": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/666899f7-f0bf-42db-b9b7-7dd0042dfed4.png"
                      }
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Transfer Order Attachments Added\",\n    \"title\": \"Transfer Order Attachments Added\",\n    \"data\": {\n        \"transfer_order_uid\": \"03e0a97f-1e1d-4cec-9023-ae49faa2c437\",\n        \"attachment_uids\": [\n            \"d83d954e-fa20-4739-b43e-4200e28a81b3\"\n        ]\n    }\n}"
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
                      "example": "Transfer Order Attachments Added"
                    },
                    "title": {
                      "type": "string",
                      "example": "Transfer Order Attachments Added"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "transfer_order_uid": {
                          "type": "string",
                          "example": "03e0a97f-1e1d-4cec-9023-ae49faa2c437"
                        },
                        "attachment_uids": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "d83d954e-fa20-4739-b43e-4200e28a81b3"
                          }
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