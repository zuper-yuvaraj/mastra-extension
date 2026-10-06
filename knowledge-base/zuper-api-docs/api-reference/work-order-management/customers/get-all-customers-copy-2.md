---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Customer

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
    "/customers/{customer_uid}": {
      "put": {
        "summary": "Update Customer",
        "description": "",
        "operationId": "get-all-customers-copy-2",
        "parameters": [
          {
            "name": "customer_uid",
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
                  "customer": {
                    "type": "object",
                    "required": [
                      "customer_first_name"
                    ],
                    "properties": {
                      "customer_first_name": {
                        "type": "string"
                      },
                      "customer_last_name": {
                        "type": "string",
                        "default": "''"
                      },
                      "customer_category": {
                        "type": "string"
                      },
                      "customer_organization": {
                        "type": "string"
                      },
                      "pricelist": {
                        "type": "string"
                      },
                      "customer_company_name": {
                        "type": "string",
                        "default": "''"
                      },
                      "customer_email": {
                        "type": "string",
                        "default": "''"
                      },
                      "customer_contact_no": {
                        "type": "object",
                        "properties": {
                          "mobile": {
                            "type": "string"
                          },
                          "home": {
                            "type": "string"
                          },
                          "work": {
                            "type": "string"
                          }
                        }
                      },
                      "customer_description": {
                        "type": "string",
                        "default": "''"
                      },
                      "customer_tags": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "customer_address": {
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
                      "customer_all_addresses": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "label": {
                              "type": "string"
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
                              "default": [],
                              "items": {
                                "type": "number",
                                "format": "float"
                              }
                            },
                            "is_primary": {
                              "type": "boolean",
                              "default": false
                            }
                          },
                          "required": [
                            "is_primary"
                          ],
                          "type": "object"
                        }
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
                      "has_sla": {
                        "type": "boolean",
                        "default": false
                      },
                      "sla_duration": {
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
                      "account_manager": {
                        "type": "string"
                      },
                      "accounts": {
                        "type": "object",
                        "properties": {
                          "ltv": {
                            "type": "integer",
                            "default": 0,
                            "format": "int32"
                          },
                          "receivables": {
                            "type": "integer",
                            "default": 0,
                            "format": "int32"
                          },
                          "credits": {
                            "type": "integer",
                            "default": 0,
                            "format": "int32"
                          },
                          "billing_frequency": {
                            "type": "string"
                          },
                          "payment_term": {
                            "type": "string"
                          },
                          "tax_group": {
                            "type": "string"
                          },
                          "tax": {
                            "type": "object",
                            "properties": {}
                          }
                        }
                      },
                      "portal_permissions": {
                        "type": "object",
                        "properties": {
                          "can_access_organization_records": {
                            "type": "boolean",
                            "default": false
                          },
                          "can_create_property": {
                            "type": "boolean",
                            "default": false
                          },
                          "can_create_asset": {
                            "type": "boolean",
                            "default": false
                          }
                        }
                      },
                      "tax": {
                        "type": "object",
                        "properties": {
                          "tax_exempt": {
                            "type": "boolean",
                            "default": false
                          },
                          "tax_exempt_remarks": {
                            "type": "string"
                          },
                          "tax_exempt_number": {
                            "type": "string"
                          },
                          "customer_code": {
                            "type": "string"
                          },
                          "entity_use_code": {
                            "type": "string"
                          },
                          "tax_provider": {
                            "type": "string",
                            "enum": [
                              "AVALARA"
                            ]
                          }
                        }
                      },
                      "do_not_service": {
                        "type": "boolean"
                      },
                      "additional_emails": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "source_uid": {
                        "type": "string",
                        "description": "Lead Source"
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "type": "success",
                    "title": "Customer Details Updated",
                    "message": "Customer Details has been successfully updated"
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