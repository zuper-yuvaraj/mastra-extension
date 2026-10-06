---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Remove Products from Group

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
    "/product/group/{group_uid}/remove": {
      "post": {
        "summary": "Remove Products from Group",
        "description": "",
        "operationId": "remove-products-from-group",
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
                          "type": "string"
                        }
                      },
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
                        "product_uid": "1985efa7-2622-49ae-81ae-21527a0479f2"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Products removed from Product Group Successfully\",\n    \"data\": {\n        \"product_group_uid\": \"1985efa7-2622-49ae-81ae-21527a0479f2\"\n    }\n}"
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
                      "example": "Products removed from Product Group Successfully"
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
                  "No Products Found": {
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"No Products present in the Group\",\n    \"message\": \"No Products present in the Group\"\n}"
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
                      "title": "No Products Found",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "title": {
                          "type": "string",
                          "example": "No Products present in the Group"
                        },
                        "message": {
                          "type": "string",
                          "example": "No Products present in the Group"
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