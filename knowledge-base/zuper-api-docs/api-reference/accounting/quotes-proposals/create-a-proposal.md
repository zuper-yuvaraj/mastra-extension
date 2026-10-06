---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create a Proposal

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
    "/estimate/": {
      "post": {
        "summary": "Create a Proposal",
        "description": "",
        "operationId": "create-a-proposal",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "estimate": {
                    "properties": {
                      "proposal_title": {
                        "type": "string",
                        "description": "Proposal Title"
                      },
                      "proposal_template": {
                        "type": "string",
                        "description": "Proposal Template UID"
                      },
                      "proposal_options": {
                        "type": "array",
                        "description": "Proposal Options",
                        "items": {
                          "properties": {
                            "option_name": {
                              "type": "string",
                              "description": "Option Name"
                            },
                            "option_description": {
                              "type": "string",
                              "description": "Description"
                            },
                            "option_image": {
                              "type": "string",
                              "description": "Image URL"
                            },
                            "discount": {
                              "type": "object",
                              "description": "Discount",
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
                              "type": "array",
                              "description": "Line Items",
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
                                  },
                                  "enable_customer_selection_for_option": {
                                    "type": "boolean"
                                  }
                                },
                                "type": "object"
                              }
                            },
                            "deposit": {
                              "type": "string",
                              "description": "Deposit Amount"
                            },
                            "package": {
                              "type": "object",
                              "description": "Package",
                              "properties": {
                                "package_name": {
                                  "type": "string",
                                  "description": "Package Name"
                                },
                                "package_description": {
                                  "type": "string",
                                  "description": "Description"
                                },
                                "master_package": {
                                  "type": "string",
                                  "description": "Master Package UID"
                                }
                              }
                            }
                          },
                          "required": [
                            "option_name"
                          ],
                          "type": "object"
                        }
                      },
                      "organization": {
                        "type": "string",
                        "description": "Organization UID"
                      },
                      "customer": {
                        "type": "string",
                        "description": "Customer UID"
                      },
                      "property": {
                        "type": "string",
                        "description": "Property UID"
                      },
                      "job": {
                        "type": "string",
                        "description": "Job UID"
                      },
                      "project": {
                        "type": "string",
                        "description": "Project UID"
                      },
                      "prefix": {
                        "type": "string",
                        "description": "Prefix"
                      },
                      "remarks": {
                        "type": "string",
                        "description": "Remarks"
                      },
                      "template": {
                        "type": "string",
                        "description": "Quote Template UID"
                      },
                      "reference_no": {
                        "type": "string",
                        "description": "Reference Number"
                      },
                      "estimate_description": {
                        "type": "string",
                        "description": "Description"
                      },
                      "tags": {
                        "type": "array",
                        "description": "Tags",
                        "items": {
                          "type": "string"
                        }
                      },
                      "deposit": {
                        "properties": {
                          "total": {
                            "type": "number",
                            "description": "Deposit Amount",
                            "format": "float"
                          },
                          "status": {
                            "type": "string",
                            "description": "Deposit Status"
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "sub_total": {
                        "type": "number",
                        "description": "Sub Total",
                        "format": "float"
                      },
                      "pricelist": {
                        "type": "string",
                        "description": "Pricelist UID"
                      },
                      "estimate_date": {
                        "type": "string",
                        "description": "Proposal Date",
                        "format": "date-time"
                      },
                      "expiry_date": {
                        "type": "string",
                        "description": "Proposal Expiry date",
                        "format": "date-time"
                      },
                      "is_proposal": {
                        "type": "boolean",
                        "description": "Mandatory Param for proposal"
                      },
                      "customer_service_address": {
                        "type": "object",
                        "description": "Customer Address",
                        "properties": {
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          }
                        }
                      },
                      "customer_billing_address": {
                        "type": "object",
                        "description": "Biling Address",
                        "properties": {
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          }
                        }
                      },
                      "custom_fields": {
                        "type": "array",
                        "description": "Custom Fields",
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
                      },
                      "line_items": {
                        "type": "array",
                        "description": "Line Items",
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
                            "unit_price_premarkup": {
                              "type": "string"
                            },
                            "markup": {
                              "type": "object",
                              "properties": {
                                "markup_type": {
                                  "type": "string",
                                  "enum": [
                                    "FLAT",
                                    "PERCENTAGE",
                                    "MULTIPLIER"
                                  ]
                                },
                                "markup_value": {
                                  "type": "integer",
                                  "format": "int32"
                                },
                                "markup_price": {
                                  "type": "integer",
                                  "format": "int32"
                                }
                              }
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
                            "discount_type": {
                              "type": "string",
                              "default": "FIXED",
                              "enum": [
                                "FIXED",
                                "PERCENTAGE"
                              ]
                            },
                            "total": {
                              "type": "string"
                            },
                            "tax": {
                              "type": "object",
                              "properties": {
                                "tax_name": {
                                  "type": "string"
                                },
                                "tax_rate": {
                                  "type": "string"
                                },
                                "tax_amount": {
                                  "type": "string"
                                },
                                "tax_exempt": {
                                  "type": "string"
                                },
                                "tax_exempt_remarks": {
                                  "type": "string"
                                },
                                "tax_exempt_number": {
                                  "type": "string"
                                },
                                "entity_use_code": {
                                  "type": "string"
                                },
                                "tax_customer_code": {
                                  "type": "string"
                                },
                                "tax_code": {
                                  "type": "string"
                                }
                              }
                            },
                            "associated_to": {
                              "type": "string"
                            },
                            "associated_module_uid": {
                              "type": "string"
                            },
                            "approval_status": {
                              "type": "string",
                              "enum": [
                                "PENDING",
                                "APPROVED",
                                "REJECTED"
                              ]
                            },
                            "job_uid": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "discount": {
                        "type": "object",
                        "description": "Discount",
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
                      "tax": {
                        "type": "array",
                        "description": "Tax",
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
                      "layout_template_uid": {
                        "type": "string",
                        "description": "Proposal Layout Template UID"
                      }
                    },
                    "required": [
                      "proposal_title",
                      "proposal_template",
                      "is_proposal"
                    ],
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Proposal created successfully\",\n    \"data\": {\n        \"estimate_uid\": \"bde94a1f-6b76-4e6e-b2bb-2c3e985\"\n    }\n}"
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
                      "example": "Proposal created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "estimate_uid": {
                          "type": "string",
                          "example": "bde94a1f-6b76-4e6e-b2bb-2c3e985"
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
                    "value": "{\n\t\t\tmessage: 'Mandatory details are Missing',\n\t\t\ttitle: 'Missing Mandatory fields',\n\t\t\ttype: 'error'\n\t\t}"
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