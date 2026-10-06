---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Asset

Replaces an asset's fields. Accepts the same shape as Create Asset. Certain field changes (serial number, parts, product) automatically insert corresponding Asset History rows.

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
    "/assets/{asset_uid}": {
      "put": {
        "summary": "Update Asset",
        "description": "Replaces an asset's fields. Accepts the same shape as Create Asset. Certain field changes (serial number, parts, product) automatically insert corresponding Asset History rows.",
        "operationId": "update-asset",
        "parameters": [
          {
            "name": "asset_uid",
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
                  "asset": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "asset_code": {
                        "type": "string"
                      },
                      "asset_image": {
                        "type": "string"
                      },
                      "asset_barcode": {
                        "type": "string"
                      },
                      "asset_serial_number": {
                        "type": "string"
                      },
                      "asset_quantity": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "owned_by_customer": {
                        "type": "boolean"
                      },
                      "purchase_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "warranty_expiry_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "placed_in_service": {
                        "type": "string",
                        "format": "date"
                      },
                      "purchase_price": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "residual_price": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "useful_life": {
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "MONTHS",
                              "YEARS",
                              "DAYS"
                            ]
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "additional_info": {
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
                      "asset_attachments": {
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
                      "asset_category": {
                        "type": "string"
                      },
                      "asset_parts": {
                        "type": "array",
                        "items": {
                          "properties": {
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
                            },
                            "product_id": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "customer": {
                        "type": "string"
                      },
                      "asset_location": {
                        "type": "string"
                      },
                      "asset_inspection_form": {
                        "type": "string"
                      },
                      "assigned_to": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string"
                            },
                            "team_uid": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "secondary_customers": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "Additional customer UIDs."
                      },
                      "location_uid": {
                        "type": "string"
                      }
                    },
                    "required": [],
                    "type": "object"
                  },
                  "value": {
                    "type": "integer",
                    "format": "int32"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Asset Updated successfully\",\n    \"data\": { \"asset_uid\": \"\" }\n}\n"
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
                      "example": "Asset Updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "asset_uid": {
                          "type": "string",
                          "example": ""
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