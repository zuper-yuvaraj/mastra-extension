---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Transfer Order

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
    "/products/transfer_orders/{transfer_order_uid}": {
      "put": {
        "summary": "Update Transfer Order",
        "description": "",
        "operationId": "transfer-order-upadate",
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
                  "transfer_order": {
                    "type": "object",
                    "properties": {
                      "from_location": {
                        "type": "string",
                        "description": "product location uid"
                      },
                      "to_location": {
                        "type": "string",
                        "description": "product location uid"
                      },
                      "line_items": {
                        "type": "array"
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "transfer_order": {
                      "prefix": "",
                      "from_location": "52c79236-d752-4a22-bc34-ceb6a6abeab3",
                      "to_location": "afa47af0-1489-11ec-9f07-294a44e6be4e",
                      "required_by": "",
                      "line_items": [
                        {
                          "product_uid": "74f12980-f19f-11ee-a020-971674edda80",
                          "quantity": 1,
                          "serial_nos": []
                        }
                      ],
                      "attachments": [],
                      "remarks": "super store loc 2 to team location 1 MOVEMENT"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Transfer Order Updated Successfully\",\n    \"message\": \"Transfer Order updated successfully\"\n}"
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
                      "example": "Transfer Order Updated Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Transfer Order updated successfully"
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