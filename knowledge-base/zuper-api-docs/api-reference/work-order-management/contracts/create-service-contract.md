---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create service contract

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
    "/service_contract": {
      "post": {
        "summary": "Create service contract",
        "description": "",
        "operationId": "create-service-contract",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "service_contract": {
                    "properties": {
                      "contract_name": {
                        "type": "integer",
                        "description": "Service contract name",
                        "format": "int32"
                      },
                      "term_months": {
                        "type": "string",
                        "description": "Contract term months"
                      },
                      "start_date": {
                        "type": "string",
                        "description": "Contract start date",
                        "format": "date"
                      },
                      "end_date": {
                        "type": "string",
                        "description": "Contract end date",
                        "format": "date"
                      },
                      "prefix": {
                        "type": "string",
                        "description": "Contract prefix"
                      },
                      "contract_subtotal": {
                        "type": "integer",
                        "description": "Contract subtotal",
                        "format": "int32"
                      },
                      "activation_date": {
                        "type": "string",
                        "description": "Contract activation date",
                        "format": "date"
                      },
                      "location_applicability": {
                        "type": "string",
                        "description": "Contract location availability",
                        "enum": [
                          "ANY",
                          "FIXED"
                        ]
                      },
                      "approval_status": {
                        "type": "string",
                        "description": "Approval status",
                        "enum": [
                          "AWAIT_APPROVAL",
                          "APPROVED",
                          "REJECTED"
                        ]
                      },
                      "customer": {
                        "type": "string",
                        "description": "Customer uid"
                      },
                      "organization": {
                        "type": "string",
                        "description": "Organization uid"
                      },
                      "parent_contract": {
                        "type": "string",
                        "description": "Parent contract uid"
                      },
                      "contract_package": {
                        "type": "string",
                        "description": "Service contract package uid"
                      },
                      "template": {
                        "type": "string",
                        "description": "Contract template uid"
                      },
                      "attachments": {
                        "type": "array",
                        "description": "Attachment Details",
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
                      "line_items": {
                        "type": "array",
                        "description": "Line item details",
                        "items": {
                          "properties": {
                            "discount_type": {
                              "type": "string",
                              "description": "Discount type"
                            },
                            "product_id": {
                              "type": "string",
                              "description": "Product id"
                            },
                            "product_uid": {
                              "type": "string",
                              "description": "Product uid"
                            },
                            "name": {
                              "type": "string",
                              "description": "Line item name"
                            },
                            "quantity": {
                              "type": "integer",
                              "description": "Line item quantity",
                              "format": "int32"
                            },
                            "available_quantity": {
                              "type": "integer",
                              "description": "Line item available quantity",
                              "format": "int32"
                            },
                            "unit_price": {
                              "type": "integer",
                              "description": "Line item unit price",
                              "format": "int32"
                            },
                            "total": {
                              "type": "integer",
                              "description": "total amount",
                              "format": "int32"
                            },
                            "description": {
                              "type": "string",
                              "description": "Line item description"
                            },
                            "discount": {
                              "type": "integer",
                              "description": "Discount amount",
                              "format": "int32"
                            },
                            "image": {
                              "type": "string",
                              "description": "product image"
                            },
                            "brand": {
                              "type": "string",
                              "description": "Product brand name"
                            },
                            "specification": {
                              "type": "string",
                              "description": "product specification"
                            },
                            "uom": {
                              "type": "string",
                              "description": "uom"
                            },
                            "serial_nos": {
                              "type": "array",
                              "description": "serial nos",
                              "default": [],
                              "items": {
                                "type": "integer",
                                "format": "int32"
                              }
                            },
                            "has_custom_tax": {
                              "type": "boolean",
                              "description": "Custom tax flag"
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
                            }
                          },
                          "type": "object"
                        }
                      },
                      "tax": {
                        "type": "array",
                        "description": "Tax uids",
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
                      "payment_history": {
                        "type": "array",
                        "description": "Payment history details",
                        "items": {
                          "properties": {
                            "billing_date": {
                              "type": "string",
                              "description": "Billing date",
                              "format": "date"
                            },
                            "due_date": {
                              "type": "string",
                              "description": "Due date",
                              "format": "date"
                            },
                            "invoice_date": {
                              "type": "string",
                              "description": "Invoice date",
                              "format": "date"
                            },
                            "total_amount": {
                              "type": "integer",
                              "description": "Amount",
                              "format": "int32"
                            },
                            "is_paid": {
                              "type": "boolean",
                              "description": "is paid flag"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "invoice_settings": {
                        "type": "object",
                        "description": "Invoice setting detsils",
                        "properties": {
                          "auto_generate": {
                            "type": "boolean",
                            "description": "Auto generate flag"
                          },
                          "payment_term": {
                            "type": "string",
                            "description": "Invoice payment term uid"
                          },
                          "invoice_template": {
                            "type": "string",
                            "description": "Invoice template uid"
                          },
                          "billing_period": {
                            "type": "string",
                            "description": "Contract billing period uid"
                          },
                          "generate_invoice_days": {
                            "type": "integer",
                            "description": "Generate invoice days",
                            "format": "int32"
                          }
                        }
                      },
                      "customer_address": {
                        "type": "object",
                        "description": "Customer Address",
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
                      "billing_address": {
                        "type": "object",
                        "description": "Organization Address",
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
                      "custom_fields": {
                        "type": "object",
                        "description": "Custom field values",
                        "required": [
                          "label",
                          "value",
                          "type"
                        ],
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
                        }
                      }
                    },
                    "required": [
                      "contract_name",
                      "term_months",
                      "start_date"
                    ],
                    "type": "object",
                    "description": "Service contract object"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Service Contract created successfully\",\n    \"data\": {\n        \"contract_uid\": \"319c2720-68c4-11ee-af3a-a79966abe7f6\"\n    }\n}"
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
                      "example": "Service Contract created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "contract_uid": {
                          "type": "string",
                          "example": "319c2720-68c4-11ee-af3a-a79966abe7f6"
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
                    "value": "{\n    \"message\": \"Missing\",\n    \"title\": \"Missing fields\",\n    \"type\": \"ERROR_MSG\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing fields"
                    },
                    "type": {
                      "type": "string",
                      "example": "ERROR_MSG"
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