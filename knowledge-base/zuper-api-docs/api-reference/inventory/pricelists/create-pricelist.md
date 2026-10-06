---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Pricelist

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
    "/products/pricelist": {
      "post": {
        "summary": "Create Pricelist",
        "description": "",
        "operationId": "create-pricelist",
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
                    "value": "{\n\ttype: \"success\",\n  message: \"Pricelist created successfully\",\n  data: {\n  \tpricelist_uid: \"82b8f5a0-3e9a-11ef-9ce4-1d9d49193912\",\n  },\n}"
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
                    "value": "{\n    \"message\": \"Pricelist Data is missing\",\n    \"title\": \"Missing Pricelist Data\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Pricelist Data is missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Pricelist Data"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
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
                  "Result": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Pricelist Name already exists for PER ITEM MARGIN $100\"\n}"
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
                      "example": "Pricelist Name already exists for PER ITEM MARGIN $100"
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