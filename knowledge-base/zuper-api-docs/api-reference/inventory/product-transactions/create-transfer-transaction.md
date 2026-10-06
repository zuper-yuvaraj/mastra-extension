---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Outward Transaction

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
    "/product/{product_uid}/outward": {
      "post": {
        "summary": "Create Outward Transaction",
        "description": "",
        "operationId": "create-transfer-transaction",
        "parameters": [
          {
            "name": "product_uid",
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
                "properties": {
                  "transaction": {
                    "type": "object",
                    "required": [
                      "product_uid",
                      "location_uid",
                      "quantity"
                    ],
                    "properties": {
                      "product_uid": {
                        "type": "string"
                      },
                      "location_uid": {
                        "type": "string"
                      },
                      "quantity": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "serial_nos": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "remarks": {
                        "type": "string"
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "transaction": {
                      "min_quantity": 200,
                      "product_uid": "239c1790-5543-458a-9e5d-bd83f3ebd235",
                      "quantity": 2,
                      "remarks": "asdasd",
                      "serial_nos": [
                        "12",
                        "22"
                      ],
                      "location_uid": "c8ae48c0-c4d4-11ee-8427-f135042a115b"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Product Transaction Created Successfully\",\n    \"data\": {\n        \"transaction_uid\": \"cfd0e756-95bf-4893-8ab1-a0daf8e69a76\"\n    }\n}"
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
                      "example": "Product Transaction Created Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "transaction_uid": {
                          "type": "string",
                          "example": "cfd0e756-95bf-4893-8ab1-a0daf8e69a76"
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
                    "value": "{\n    \"type\": \"\",\n    \"title\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
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