---
updatedAt: 2026-06-23T08:51:42.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Product Category

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
    "/products/category/{category_uid}": {
      "put": {
        "summary": "Update Product Category",
        "description": "",
        "operationId": "update-product-category",
        "parameters": [
          {
            "name": "category_uid",
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
                  "product_category": {
                    "properties": {
                      "category_uid": {
                        "type": "string",
                        "description": "Category UID"
                      },
                      "category_name": {
                        "type": "string",
                        "description": "Category Name"
                      },
                      "category_description": {
                        "type": "string",
                        "description": "Category Description"
                      },
                      "category_icon": {
                        "type": "string",
                        "description": "Category Icon URL"
                      }
                    },
                    "required": [
                      "category_uid"
                    ],
                    "type": "object"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "product_category": {
                      "category_icon": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/a054c650-83e2-11eb-a715-479656013538.png",
                      "category_description": "Tools",
                      "category_name": "Tools",
                      "category_uid": "312862f0-83e2-11eb-a715-479656013538"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Product Category Created Successfully\",\n    \"data\": {\n        \"category_uid\": \"312862f0-83e2-11eb-a715-479656013538\"\n    }\n}"
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
                      "example": "Product Category Created Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "category_uid": {
                          "type": "string",
                          "example": "312862f0-83e2-11eb-a715-479656013538"
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
          },
          "401": {
            "description": "401",
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