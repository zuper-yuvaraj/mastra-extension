---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Add Products to Products Group

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
    "/product/group/{group_uid}/add": {
      "post": {
        "summary": "Add Products to Products Group",
        "description": "",
        "operationId": "add-products-to-group",
        "parameters": [
          {
            "name": "group_uid",
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
                  "products": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "product_uid": {
                          "type": "string",
                          "description": "Product/Parts UID"
                        },
                        "quantity": {
                          "type": "integer",
                          "description": "Quantity",
                          "format": "int32"
                        }
                      },
                      "required": [
                        "product_uid",
                        "quantity"
                      ],
                      "type": "object"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "products": [
                      {
                        "product_uid": "1985efa7-2622-49ae-81ae-21527a0479f2",
                        "quantity": 10
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Products Added to Group successfully\",\n    \"data\": {\n        \"product_group_uid\": \"1985efa7-2622-49ae-81ae-21527a0479f2\"\n    }\n}"
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
                      "example": "Products Added to Group successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "product_group_uid": {
                          "type": "string",
                          "example": "1985efa7-2622-49ae-81ae-21527a0479f2"
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
                  "Invalid Group Id": {
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Missing Mandatory Fields\",\n    \"message\": \"Product Group UID is Mandatory\"\n}"
                  },
                  "Invalid Product UID": {
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Invalid Product UIDs\",\n    \"message\": \"Invalid Product UIDs\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Invalid Group Id",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "title": {
                          "type": "string",
                          "example": "Missing Mandatory Fields"
                        },
                        "message": {
                          "type": "string",
                          "example": "Product Group UID is Mandatory"
                        }
                      }
                    },
                    {
                      "title": "Invalid Product UID",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Product UIDs"
                        },
                        "message": {
                          "type": "string",
                          "example": "Invalid Product UIDs"
                        }
                      }
                    }
                  ]
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