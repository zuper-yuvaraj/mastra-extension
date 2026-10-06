---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Inward Transcation

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
    "/product/{product_uid}/inward": {
      "post": {
        "summary": "Create Inward Transcation",
        "description": "",
        "operationId": "create-inward-transcation",
        "parameters": [
          {
            "name": "product_uid",
            "in": "path",
            "description": "Product UID",
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
                  "transaction"
                ],
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
                      },
                      "purchase_price": {
                        "type": "number",
                        "format": "float"
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "transaction": {
                      "min_quantity": 5,
                      "product_uid": "3a724c7e-e352-403b-af43-8df586f24e7e",
                      "quantity": 2,
                      "remarks": "New Incoming stock",
                      "serial_nos": [
                        "12",
                        "13"
                      ],
                      "location_uid": "401f439a-be7d-4f0c-9a21-2e37c49fb226",
                      "purchase_price": 11.5
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Product Transaction Created Successfully\",\n    \"data\": {\n        \"transaction_uid\": \"a84c343e-4409-4a44-90dd-e5e4af142b8b\"\n    }\n}"
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
                          "example": "a84c343e-4409-4a44-90dd-e5e4af142b8b"
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
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