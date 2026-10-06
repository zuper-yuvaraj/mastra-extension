---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Products Group

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
    "/product/group": {
      "post": {
        "summary": "Create Products Group",
        "description": "",
        "operationId": "create-product-group",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "product_group": {
                    "type": "object",
                    "description": "Product Group Data",
                    "required": [
                      "product_group_name"
                    ],
                    "properties": {
                      "product_group_name": {
                        "type": "string",
                        "description": "Product Group Name"
                      },
                      "product_group_description": {
                        "type": "string"
                      },
                      "bu_uids": {
                        "type": "array",
                        "description": "Array of Trade type UIDs",
                        "items": {
                          "type": "string"
                        }
                      },
                      "products": {
                        "type": "array",
                        "description": "Product array contains UID's and Quantity",
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
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "product_group": {
                      "product_group_name": "Group 1",
                      "product_group_description": "<p>Group 1</p>",
                      "products": [
                        {
                          "product_uid": "fc73b520-8de6-11ee-b84f-e1671fb34211",
                          "quantity": 1
                        }
                      ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"New Product Group Created Successfully\",\n    \"data\": {\n        \"product_group_uid\": \"1985efa7-2622-49ae-81ae-21527a0479f2\"\n    }\n}"
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
                      "example": "New Product Group Created Successfully"
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
                  "Bad Request": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Product Group Data is Mandatory\",\n    \"title\": \"Missing Mandatory Fields\"\n}"
                  },
                  "Group Name Missing": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Group Name is Mandatory\",\n    \"title\": \"Missing Mandatory Fields\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Bad Request",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "message": {
                          "type": "string",
                          "example": "Product Group Data is Mandatory"
                        },
                        "title": {
                          "type": "string",
                          "example": "Missing Mandatory Fields"
                        }
                      }
                    },
                    {
                      "title": "Group Name Missing",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "message": {
                          "type": "string",
                          "example": "Group Name is Mandatory"
                        },
                        "title": {
                          "type": "string",
                          "example": "Missing Mandatory Fields"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "409": {
            "description": "409",
            "content": {
              "application/json": {
                "examples": {
                  "Group Name Conflicts": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Duplicate Name\",\n    \"title\": \"Missing Mandatory Fields\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "message": {
                      "type": "string",
                      "example": "Duplicate Name"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Mandatory Fields"
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