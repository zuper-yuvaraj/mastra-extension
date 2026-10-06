---
updatedAt: 2026-06-23T08:51:26.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Product Category

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
    "/products/category": {
      "post": {
        "summary": "Create Product Category",
        "description": "",
        "operationId": "create-product-category",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "product_category": {
                    "properties": {
                      "category_name": {
                        "type": "string",
                        "description": "Category Name"
                      },
                      "category_icon": {
                        "type": "string",
                        "description": "Category Icon URL"
                      },
                      "category_description": {
                        "type": "string",
                        "description": "Category Description"
                      }
                    },
                    "required": [
                      "category_name"
                    ],
                    "type": "object"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "product_category": {
                      "category_name": "Tools",
                      "category_icon": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3fa1539a-da65-4cd0-a0e2-38c79e6.png",
                      "category_description": "Tools"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"New Product Category Created Successfully\",\n    \"data\": {\n        \"category_uid\": \"54d07539-0ce4-4374-9aeb-e0764218a8ae\"\n    }\n}"
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
                      "example": "New Product Category Created Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "category_uid": {
                          "type": "string",
                          "example": "54d07539-0ce4-4374-9aeb-e0764218a8ae"
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
                    "value": "{\n    \"type\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
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