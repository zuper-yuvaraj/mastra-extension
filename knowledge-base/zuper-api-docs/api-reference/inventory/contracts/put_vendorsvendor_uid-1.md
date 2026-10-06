---
updatedAt: 2026-07-29T14:10:42.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Subcontractor

Operates on Subcontractors, shown in the Zuper client app as "Subcontractor" (in every industry). Subcontractors share the exact same underlying schema and endpoints as Vendors / Suppliers; they're distinguished only by the `vendor_type` field (`SUB_CONTRACTOR` here) and the `/subcontractors` route prefix.

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
    "/subcontractors/{vendor_uid}": {
      "put": {
        "description": "Operates on Subcontractors, shown in the Zuper client app as \"Subcontractor\" (in every industry). Subcontractors share the exact same underlying schema and endpoints as Vendors / Suppliers; they're distinguished only by the `vendor_type` field (`SUB_CONTRACTOR` here) and the `/subcontractors` route prefix.",
        "operationId": "put_vendors{vendor_uid}-1",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "SUCCESS"
                      ]
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"SUCCESS\", \"title\": \"Subcontractor Updated Successfully\", \"message\": \"Subcontractor Updated Successfully\"}"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "vendor_uid",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "UID of the subcontractor to update."
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "vendor": {
                    "type": "object",
                    "properties": {
                      "vendor_name": {
                        "type": "string",
                        "maxLength": 256,
                        "description": "Required."
                      },
                      "vendor_email": {
                        "type": "string",
                        "format": "email",
                        "maxLength": 256,
                        "description": "Required."
                      },
                      "vendor_contact_name": {
                        "type": "string",
                        "maxLength": 256,
                        "description": "Required."
                      },
                      "vendor_display_name": {
                        "type": "string",
                        "maxLength": 256,
                        "description": "Required. Name displayed throughout the application."
                      },
                      "tax_identifier": {
                        "type": "string",
                        "maxLength": 256,
                        "nullable": true,
                        "description": "Should be unique."
                      },
                      "vendor_description": {
                        "type": "string"
                      },
                      "vendor_contact_no": {
                        "type": "object",
                        "description": "Required.",
                        "properties": {
                          "work": {
                            "type": "string"
                          },
                          "mobile": {
                            "type": "string"
                          }
                        }
                      },
                      "vendor_delivery_method": {
                        "type": "string",
                        "enum": [
                          "JOB_ADDRESS",
                          "WAREHOUSE",
                          "PICKUP"
                        ]
                      },
                      "vendor_address": {
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
                          "county": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "float"
                            },
                            "description": "[latitude, longitude]"
                          },
                          "label": {
                            "type": "string"
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          }
                        }
                      },
                      "vendor_billing_address": {
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
                          "county": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "float"
                            },
                            "description": "[latitude, longitude]"
                          },
                          "label": {
                            "type": "string"
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          }
                        }
                      },
                      "vendor_bank_details": {
                        "type": "object",
                        "nullable": true,
                        "properties": {
                          "account_name": {
                            "type": "string"
                          },
                          "account_number": {
                            "type": "string"
                          },
                          "bank_name": {
                            "type": "string"
                          },
                          "branch_identifier": {
                            "type": "string"
                          },
                          "remarks": {
                            "type": "string"
                          }
                        }
                      },
                      "accounts": {
                        "type": "object",
                        "description": "If provided, `payment_term` is required within it.",
                        "properties": {
                          "payment_term": {
                            "type": "string",
                            "description": "Payment term UID."
                          },
                          "tax_group": {
                            "type": "string",
                            "nullable": true,
                            "description": "Tax group UID."
                          }
                        }
                      },
                      "vendor_contacts": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "email": {
                              "type": "string"
                            },
                            "phone": {
                              "type": "string"
                            },
                            "work": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "vendor_lead_time": {
                        "type": "number",
                        "nullable": true,
                        "description": "In days."
                      },
                      "type": {
                        "type": "string",
                        "enum": [
                          "VENDOR",
                          "SUB_CONTRACTOR"
                        ],
                        "description": "Optional — forced server-side to match the route you call (`/vendors` → VENDOR, `/subcontractors` → SUB_CONTRACTOR). Immutable after creation; sending it on Update is validated but not persisted."
                      },
                      "attachments": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "file_name": {
                              "type": "string"
                            },
                            "url": {
                              "type": "string"
                            },
                            "file_size": {
                              "type": "integer"
                            },
                            "visible_to_customer": {
                              "type": "boolean"
                            }
                          }
                        }
                      },
                      "custom_fields": {
                        "type": "array",
                        "items": {
                          "type": "object"
                        }
                      },
                      "vendor_catalog": {
                        "type": "array",
                        "items": {
                          "type": "object"
                        },
                        "description": "Optional — create catalog entries for this vendor in the same call (same shape as the Create Vendor Catalog endpoint's items)."
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "summary": "Update Subcontractor"
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