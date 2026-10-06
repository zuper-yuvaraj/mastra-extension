---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Products Group

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
    "/product/group/{group_uid}": {
      "put": {
        "summary": "Update Products Group",
        "description": "",
        "operationId": "update-product-group",
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
                  "product_group": {
                    "type": "object",
                    "properties": {
                      "product_group_name": {
                        "type": "string"
                      },
                      "product_group_description": {
                        "type": "string"
                      },
                      "product_group_uid": {
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
                      "product_group_name": "-ve Product Group8",
                      "product_group_description": "<p>-ve Product Gro</p>",
                      "products": [
                        {
                          "product_uid": "535dcdf0-8228-11e9-851f-4dd105dd2b46",
                          "quantity": 1,
                          "product_description": "Lorem ipsum dolor sit amet, "
                        }
                      ]
                    },
                    "product_group_uid": "b5f28460-086a-11ef-b1bb-abbf9b4053e6"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Product Group Updated Successfully\",\n    \"data\": {\n        \"product_group_uid\": \"b5f28460-086a-11ef-b1bb-abbf9b4053e6\"\n    }\n}"
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
                      "example": "Product Group Updated Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "product_group_uid": {
                          "type": "string",
                          "example": "b5f28460-086a-11ef-b1bb-abbf9b4053e6"
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Product Group Data is Mandatory\",\n    \"title\": \"Missing Mandatory Fields\"\n}"
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
                      "example": "Product Group Data is Mandatory"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Mandatory Fields"
                    }
                  }
                }
              }
            }
          },
          "409": {
            "description": "409",
            "content": {
              "application/json": {
                "examples": {
                  "Group Name Conflict": {
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