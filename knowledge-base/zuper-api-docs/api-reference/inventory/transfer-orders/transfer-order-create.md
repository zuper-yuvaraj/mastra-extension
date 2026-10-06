---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Transfer Order

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
    "/products/transfer_orders": {
      "post": {
        "summary": "Create Transfer Order",
        "description": "",
        "operationId": "transfer-order-create",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "transfer_order"
                ],
                "properties": {
                  "transfer_order": {
                    "type": "object",
                    "required": [
                      "from_location",
                      "to_location"
                    ],
                    "properties": {
                      "from_location": {
                        "type": "string",
                        "description": "product location uid"
                      },
                      "to_location": {
                        "type": "string",
                        "description": "product location uid"
                      },
                      "line_items": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "product_uid": {
                              "type": "string",
                              "description": "uid of product"
                            },
                            "quantity": {
                              "type": "integer",
                              "format": "int32"
                            },
                            "serial_nos": {
                              "type": "array",
                              "default": [],
                              "items": {
                                "type": "string"
                              }
                            }
                          },
                          "type": "object"
                        }
                      },
                      "attachments": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "file_name": {
                              "type": "string"
                            },
                            "url": {
                              "type": "string"
                            },
                            "file_size": {
                              "type": "integer",
                              "format": "int32"
                            },
                            "visible_to_customer": {
                              "type": "boolean",
                              "default": false
                            }
                          },
                          "required": [
                            "file_name",
                            "url"
                          ],
                          "type": "object"
                        }
                      },
                      "required_by": {
                        "type": "string",
                        "format": "date"
                      },
                      "sent_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "received_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "remarks": {
                        "type": "string"
                      },
                      "prefix": {
                        "type": "string"
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "transfer_order": {
                      "prefix": "V2-004",
                      "required_by": "2024-07-25 10:14:00",
                      "remarks": " transfer_order",
                      "attachments": [
                        {
                          "file_name": "test",
                          "url": "test",
                          "file_size": 123
                        },
                        {
                          "file_name": "test",
                          "url": "test",
                          "file_size": 123
                        }
                      ],
                      "to_location": "070df7e0-ea60-11ee-9d1c-3169492ff8f3",
                      "from_location": "1a570534-cbce-487f-9d5e-23912a1ec1c7",
                      "line_items": [
                        {
                          "product_uid": "08d63fbe-d2f2-431c-ba22-3f96e9960558",
                          "quantity": 1,
                          "serial_nos": [
                            "newa"
                          ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Transfer order Created Successfully\",\n    \"message\": \"Transfer order created successfully\",\n    \"data\": {\n        \"transfer_order_uid\": \"eb3fea4e-a78d-4c97-833f-9bf5047134b5\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Transfer order Created Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Transfer order created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "transfer_order_uid": {
                          "type": "string",
                          "example": "eb3fea4e-a78d-4c97-833f-9bf5047134b5"
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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