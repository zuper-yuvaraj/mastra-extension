---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create a Package

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
    "/invoice_estimate/package": {
      "post": {
        "summary": "Create a Package",
        "description": "",
        "operationId": "create-a-package",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "invoice_estimate_package": {
                    "properties": {
                      "package_name": {
                        "type": "string",
                        "description": "Package Name"
                      },
                      "package_description": {
                        "type": "string",
                        "description": "Description"
                      },
                      "package_remarks": {
                        "type": "string",
                        "description": "Remarks"
                      },
                      "sub_total": {
                        "type": "number",
                        "description": "Sub Total",
                        "format": "float"
                      },
                      "line_items": {
                        "type": "array",
                        "description": "Line Items"
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
                    "required": [
                      "package_name"
                    ],
                    "type": "object"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "invoice_estimate_package": {
                      "line_items": [
                        {
                          "product_id": "PART TESTING",
                          "product_uid": "9ef2c790-b34f-11e9-9f97-b9b7552ee8ce",
                          "name": "NEW PRODUCT WITH SYNC TEST",
                          "product_type": "SERVICE",
                          "unit_price": 50,
                          "tax": {
                            "tax_rate": 10,
                            "tax_name": "custom",
                            "tax_exempt": false
                          },
                          "has_custom_tax": true,
                          "quantity": 1,
                          "total": 50,
                          "pre_total": 50,
                          "discount_type": "FIXED",
                          "discount": 0
                        }
                      ],
                      "discount": {
                        "type": "FIXED",
                        "discount_label": "Discount",
                        "discount_applicability": "LINE_ITEM",
                        "value": 0,
                        "percent": 0
                      },
                      "package_name": "Package 1",
                      "package_description": "Test",
                      "package_remarks": "test",
                      "sub_total": 50
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Invoice Estimate Package created successfully\",\n    \"data\": {\n        \"package_uid\": \"d9c11130-cc0b-11ef-9219-a7dda2f2c479\"\n    }\n}"
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
                      "example": "Invoice Estimate Package created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "package_uid": {
                          "type": "string",
                          "example": "d9c11130-cc0b-11ef-9219-a7dda2f2c479"
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
                    "value": "{\n        \"message\": \"Package Data is missing\",\n        \"title\": \"Missing Package Data\",\n        \"type\": \"error\",\n      }"
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