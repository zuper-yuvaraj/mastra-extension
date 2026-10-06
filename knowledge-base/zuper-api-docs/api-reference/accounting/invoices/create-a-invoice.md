---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create a Invoice

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
    "/invoice": {
      "post": {
        "summary": "Create a Invoice",
        "description": "",
        "operationId": "create-a-invoice",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "invoice": {
                    "type": "object",
                    "properties": {
                      "reference_no": {
                        "type": "string"
                      },
                      "description": {
                        "type": "string"
                      },
                      "invoice_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "due_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "prefix": {
                        "type": "string"
                      },
                      "customer_billing_address": {
                        "type": "object",
                        "properties": {
                          "city": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "double"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string",
                            "description": "Customer phone number"
                          },
                          "email": {
                            "type": "string",
                            "description": "Customer email"
                          },
                          "label": {
                            "type": "string",
                            "description": "Label"
                          }
                        }
                      },
                      "customer_service_address": {
                        "type": "object",
                        "properties": {
                          "city": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "double"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string",
                            "description": "Customer phone number"
                          },
                          "email": {
                            "type": "string",
                            "description": "Customer email"
                          },
                          "label": {
                            "type": "string",
                            "description": "Label"
                          }
                        }
                      },
                      "customer": {
                        "type": "string"
                      },
                      "organization": {
                        "type": "string"
                      },
                      "property": {
                        "type": "string"
                      },
                      "estimate": {
                        "type": "string"
                      },
                      "job": {
                        "type": "string"
                      },
                      "template": {
                        "type": "string"
                      },
                      "payment_term": {
                        "type": "string"
                      },
                      "payment_mode": {
                        "type": "string"
                      },
                      "service_contract": {
                        "type": "string"
                      },
                      "line_items": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "location_uid": {
                              "type": "string"
                            },
                            "unit_price": {
                              "type": "number",
                              "format": "float"
                            },
                            "description": {
                              "type": "string"
                            },
                            "discount": {
                              "type": "number",
                              "format": "float"
                            },
                            "brand": {
                              "type": "string"
                            },
                            "specification": {
                              "type": "string"
                            },
                            "total": {
                              "type": "number",
                              "format": "double"
                            },
                            "section_name": {
                              "type": "string"
                            },
                            "section_uid": {
                              "type": "string"
                            },
                            "section_type": {
                              "type": "string",
                              "default": "EXPANDED",
                              "enum": [
                                "COLLAPSED",
                                "EXPANDED",
                                "HIDDEN"
                              ]
                            },
                            "show_child_prices": {
                              "type": "boolean",
                              "default": false
                            },
                            "show_section_total": {
                              "type": "boolean",
                              "default": false
                            },
                            "quantity": {
                              "type": "integer",
                              "format": "int32"
                            },
                            "product_uid": {
                              "type": "string"
                            },
                            "tax": {
                              "type": "object",
                              "properties": {
                                "tax_name": {
                                  "type": "string",
                                  "description": "Tax name"
                                },
                                "tax_rate": {
                                  "type": "integer",
                                  "description": "Tax rate",
                                  "format": "int32"
                                },
                                "tax_amount": {
                                  "type": "integer",
                                  "description": "Tax amount",
                                  "format": "int32"
                                }
                              }
                            },
                            "has_custom_tax": {
                              "type": "boolean"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "sub_total": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "discount": {
                        "type": "object",
                        "properties": {
                          "days": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "hours": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "minutes": {
                            "type": "integer",
                            "format": "int32"
                          }
                        }
                      },
                      "remarks": {
                        "type": "string"
                      },
                      "tags": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "tax": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "tax_uid": {
                              "type": "string",
                              "description": "Tax uid"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "financing": {
                        "type": "object",
                        "properties": {
                          "is_enabled": {
                            "type": "boolean"
                          },
                          "financing_prequalification": {
                            "type": "string"
                          },
                          "financing_transaction": {
                            "type": "string"
                          }
                        }
                      },
                      "bu_uid": {
                        "type": "string",
                        "description": "Trade Type UID"
                      },
                      "custom_fields": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "label": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string"
                            },
                            "ref_uid": {
                              "type": "string"
                            },
                            "module_name": {
                              "type": "string",
                              "enum": [
                                "JOB",
                                "CUSTOMER",
                                "EMPLOYEE",
                                "ESTIMATE",
                                "INVOICE",
                                "PRODUCT",
                                "PURCHASE_ORDER",
                                "SERVICE_CONTRACT",
                                "ASSET",
                                "PROPERTY",
                                "ORGANIZATION",
                                "TEAM",
                                "REQUEST",
                                "PROJECT"
                              ]
                            },
                            "hide_to_fe": {
                              "type": "boolean",
                              "default": false
                            },
                            "hide_field": {
                              "type": "boolean",
                              "default": false
                            },
                            "read_only": {
                              "type": "boolean",
                              "default": false
                            },
                            "group_name": {
                              "type": "string"
                            },
                            "group_uid": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "label",
                            "value",
                            "type"
                          ],
                          "type": "object"
                        }
                      }
                    },
                    "required": [
                      "invoice_date"
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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