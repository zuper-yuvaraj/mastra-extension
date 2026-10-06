---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Transfer

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
    "/product/{product_uid}/transfer": {
      "post": {
        "summary": "Create Transfer",
        "description": "",
        "operationId": "create-transfer",
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
                      "from_location_uid",
                      "to_location_uid",
                      "quantity"
                    ],
                    "properties": {
                      "product_uid": {
                        "type": "string"
                      },
                      "from_location_uid": {
                        "type": "string"
                      },
                      "to_location_uid": {
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
                      "min_quantity": {
                        "type": "integer",
                        "format": "int32"
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
                      "remarks": "Remarks",
                      "serial_nos": [
                        "12",
                        "254"
                      ],
                      "from_location_uid": "c8ae48c0-c4d4-11ee-8427-f135042a115b",
                      "to_location_uid": "d54d7c40-c4d4-11ee-8427-f135042a115b"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Product Transaction Created Successfully\",\n    \"data\": {\n        \"transaction_uid\": \"a7c400fc-6fe8-44b8-9f5b-2ae965288c9b\"\n    }\n}"
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
                          "example": "a7c400fc-6fe8-44b8-9f5b-2ae965288c9b"
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