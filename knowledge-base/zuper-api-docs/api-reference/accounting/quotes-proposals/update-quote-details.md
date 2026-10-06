---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update a Quote

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
    "/estimate/(estimate_uid)": {
      "put": {
        "summary": "Update a Quote",
        "description": "",
        "operationId": "update-quote-details",
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "estimate": {
                    "type": "object",
                    "required": [
                      "expiry_date",
                      "estimate_date"
                    ],
                    "properties": {
                      "job": {
                        "type": "string"
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
                      },
                      "reference_no": {
                        "type": "string"
                      },
                      "expiry_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "template": {
                        "type": "string"
                      },
                      "remarks": {
                        "type": "string"
                      },
                      "prefix": {
                        "type": "string"
                      },
                      "estimate_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "customer": {
                        "type": "string"
                      },
                      "organization": {
                        "type": "string"
                      },
                      "deposit": {
                        "type": "object",
                        "properties": {
                          "total": {
                            "type": "number",
                            "format": "double"
                          },
                          "status": {
                            "type": "string"
                          },
                          "": {
                            "type": "string"
                          }
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
                          },
                          "financing_provider": {
                            "type": "object",
                            "properties": {
                              "financing_provider": {
                                "type": "string"
                              },
                              "financing_plan_uid": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      },
                      "assets": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "asset": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "line_items": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "line_item_type": {
                              "type": "string",
                              "default": "ITEM",
                              "enum": [
                                "ITEM",
                                "HEADER"
                              ]
                            },
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
                      "tax": {
                        "type": "array",
                        "items": {
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
                          },
                          "type": "object"
                        }
                      },
                      "total": {
                        "type": "number",
                        "format": "float"
                      },
                      "sub_total": {
                        "type": "number",
                        "format": "float"
                      },
                      "customer_billing_address": {
                        "type": "object",
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
                      "customer_service_address": {
                        "type": "object",
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
                      "property": {
                        "type": "string"
                      },
                      "pricelist": {
                        "type": "string"
                      },
                      "tags": {
                        "type": "array",
                        "items": {
                          "type": "string"
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
                      "sold_by_user": {
                        "type": "string",
                        "description": "Sold By User UID"
                      },
                      "bu_uid": {
                        "type": "string",
                        "description": "Trade Type UID"
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Quote Updated Successfully\",\n  \"data\": {\n    \"estimate_uid\": \"02b193f0-a546-11ee-a375-ff378ea5adfe\"\n  }\n}"
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
                      "example": "Quote Updated Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "estimate_uid": {
                          "type": "string",
                          "example": "02b193f0-a546-11ee-a375-ff378ea5adfe"
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