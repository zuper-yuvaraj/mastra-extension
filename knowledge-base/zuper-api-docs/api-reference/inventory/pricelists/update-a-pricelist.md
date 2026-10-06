---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update a Pricelist

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
    "/products/pricelist/{pricelist_uid}": {
      "put": {
        "summary": "Update a Pricelist",
        "description": "",
        "operationId": "update-a-pricelist",
        "parameters": [
          {
            "name": "pricelist_uid",
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
                  "pricelist": {
                    "type": "object",
                    "properties": {
                      "pricelist_name": {
                        "type": "string"
                      },
                      "pricelist_description": {
                        "type": "string"
                      },
                      "pricelist_type": {
                        "type": "string",
                        "enum": [
                          "\"PER_ITEM\"",
                          "\"FIXED_DISCOUNT\"",
                          "\"FIXED_MARGIN\""
                        ]
                      },
                      "pricelist_value_type": {
                        "type": "string",
                        "enum": [
                          "\"PERCENTAGE\"",
                          "\"AMOUNT\""
                        ]
                      },
                      "pricelist_value": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "line_items": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "product": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string",
                              "enum": [
                                "\"FIXED_VALUE\"",
                                "\"FIXED_DISCOUNT\"",
                                "\"FIXED_MARGIN\""
                              ]
                            },
                            "pricelist_value_type": {
                              "type": "string",
                              "enum": [
                                "\"PERCENTAGE\"",
                                "\"AMOUNT\""
                              ]
                            },
                            "value": {
                              "type": "integer",
                              "format": "int32"
                            }
                          },
                          "type": "object"
                        }
                      }
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Pricelist updated successfully\",\n    \"data\": {\n        \"pricelist_uid\": \"82b8f5a0-3e9a-11ef-9ce4-1d9d49193912\"\n    }\n}"
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
                      "example": "Pricelist updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "pricelist_uid": {
                          "type": "string",
                          "example": "82b8f5a0-3e9a-11ef-9ce4-1d9d49193912"
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Pricelist is missing value\",\n    \"message\": \"Pricelist is missing value\"\n}"
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
                      "example": "Pricelist is missing value"
                    },
                    "message": {
                      "type": "string",
                      "example": "Pricelist is missing value"
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