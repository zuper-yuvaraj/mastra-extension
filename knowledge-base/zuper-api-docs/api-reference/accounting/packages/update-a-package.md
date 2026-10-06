---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update a Package

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
    "/invoice_estimate/package/{package_uid}": {
      "put": {
        "summary": "Update a Package",
        "description": "",
        "operationId": "update-a-package",
        "parameters": [
          {
            "name": "package_uid",
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
                  "invoice_estimate_package": {
                    "properties": {
                      "package_name": {
                        "type": "string"
                      },
                      "package_description": {
                        "type": "string"
                      },
                      "package_remarks": {
                        "type": "string"
                      },
                      "sub_total": {
                        "type": "number",
                        "format": "float"
                      },
                      "discount": {
                        "type": "object",
                        "properties": {
                          "discount_applicability": {
                            "type": "string",
                            "enum": [
                              "TRANSACTION",
                              "LINE_ITEM"
                            ]
                          },
                          "discount_label": {
                            "type": "string"
                          },
                          "percent": {
                            "type": "integer",
                            "format": "int64"
                          },
                          "type": {
                            "type": "string",
                            "enum": [
                              "FIXED",
                              "PERCENTAGE"
                            ]
                          },
                          "value": {
                            "type": "string"
                          },
                          "discount_fee_uid": {
                            "type": "string"
                          }
                        }
                      },
                      "line_items": {
                        "type": "array"
                      },
                      "addons": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "line_item_uid": {
                              "type": "string"
                            },
                            "location_uid": {
                              "type": "string"
                            },
                            "product_uid": {
                              "type": "string"
                            },
                            "product_id": {
                              "type": "string"
                            },
                            "group_uid": {
                              "type": "string"
                            },
                            "group_name": {
                              "type": "string"
                            },
                            "location_name": {
                              "type": "string"
                            },
                            "image": {
                              "type": "string"
                            },
                            "name": {
                              "type": "string"
                            },
                            "brand": {
                              "type": "string"
                            },
                            "specification": {
                              "type": "string"
                            },
                            "description": {
                              "type": "string"
                            },
                            "uom": {
                              "type": "string"
                            },
                            "quantity": {
                              "type": "string"
                            },
                            "unit_price": {
                              "type": "string"
                            },
                            "discount": {
                              "type": "string"
                            },
                            "purchase_price": {
                              "type": "string"
                            },
                            "serial_nos": {
                              "type": "array",
                              "default": [],
                              "items": {
                                "type": "string"
                              }
                            },
                            "total": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      }
                    },
                    "required": [],
                    "type": "object"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Invoice Estimate Package Updated\",\n    \"message\": \"Invoice Estimate Package Details has been successfully updated\"\n}"
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
                      "example": "Invoice Estimate Package Updated"
                    },
                    "message": {
                      "type": "string",
                      "example": "Invoice Estimate Package Details has been successfully updated"
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
                    "value": "{\n        \"message\": \"Package UID is missing\",\n        \"title\": \"Missing Package UID\",\n        \"type\": \"error,\n      }"
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