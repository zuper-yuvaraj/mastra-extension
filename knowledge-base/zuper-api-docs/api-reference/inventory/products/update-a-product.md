---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update a Product

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
    "/product/{product_uid}": {
      "put": {
        "summary": "Update a Product",
        "description": "",
        "operationId": "update-a-product",
        "parameters": [
          {
            "name": "product_uid",
            "in": "path",
            "description": "Product UID",
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
                  "product": {
                    "properties": {
                      "prefix": {
                        "type": "string"
                      },
                      "product_name": {
                        "type": "string"
                      },
                      "product_id": {
                        "type": "string"
                      },
                      "is_available": {
                        "type": "boolean"
                      },
                      "product_category": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number",
                        "format": "float"
                      },
                      "min_quantity": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "currency": {
                        "type": "string"
                      },
                      "quantity": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "formula": {
                        "type": "string"
                      },
                      "product_manual_link": {
                        "type": "string"
                      },
                      "product_description": {
                        "type": "string"
                      },
                      "product_image": {
                        "type": "string"
                      },
                      "product_type": {
                        "type": "string"
                      },
                      "pricing_level": {
                        "type": "string"
                      },
                      "purchase_price": {
                        "type": "number",
                        "format": "float"
                      },
                      "brand": {
                        "type": "string"
                      },
                      "track_quantity": {
                        "type": "boolean"
                      },
                      "specification": {
                        "type": "string"
                      },
                      "has_custom_tax": {
                        "type": "boolean"
                      },
                      "bu_uids": {
                        "type": "array",
                        "description": "Array of Trade type UIDs",
                        "items": {
                          "type": "string"
                        }
                      },
                      "meta_data": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "group_name": {
                              "type": "string"
                            },
                            "group_uid": {
                              "type": "string"
                            },
                            "hide_field": {
                              "type": "boolean"
                            },
                            "hide_to_fe": {
                              "type": "boolean"
                            },
                            "id": {
                              "type": "integer",
                              "format": "int32"
                            },
                            "label": {
                              "type": "string"
                            },
                            "read_only": {
                              "type": "boolean"
                            },
                            "type": {
                              "type": "string"
                            },
                            "dependent_on": {
                              "type": "string"
                            },
                            "dependent_options": {
                              "type": "array",
                              "default": [],
                              "items": {
                                "type": "string"
                              }
                            },
                            "module_name": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "uom": {
                        "type": "string"
                      },
                      "location_availability": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "location": {
                              "type": "string",
                              "description": "Location UID"
                            },
                            "quantity": {
                              "type": "integer",
                              "format": "int32"
                            },
                            "min_quantity": {
                              "type": "integer",
                              "format": "int32"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "tax": {
                        "properties": {
                          "tax_exempt": {
                            "type": "boolean"
                          },
                          "tax_name": {
                            "type": "string"
                          },
                          "tax_rate": {
                            "type": "number",
                            "format": "float"
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "markup": {
                        "properties": {
                          "markup_type": {
                            "type": "string",
                            "enum": [
                              "FLAT",
                              "PERCENTAGE",
                              "MULTIPLIER"
                            ]
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "product_files": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "file_url": {
                              "type": "string"
                            },
                            "file_name": {
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
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "product": {
                      "product_uid": "b13f69d0-f896-11ee-b23b-b9743bfe06c8",
                      "prefix": "PT",
                      "product_name": "#GLB-50-985 - Oxy-Brite® Non-Chlorine Shock Oxidizer #1",
                      "is_available": true,
                      "product_category": "9e264c70-4813-11ea-85e2-91cf2fb0b4bb",
                      "price": 5.6,
                      "min_quantity": 16,
                      "currency": "",
                      "quantity": null,
                      "product_manual_link": "",
                      "product_description": "<p>It was followed by a novelization and a new gag chapter written by Akutami.</p>",
                      "product_barcode": "16",
                      "product_image": "",
                      "product_id": "PART005",
                      "product_files": [
                        {
                          "attachment_uid": "ff30220a-e8ab-460c-8b62-a2470fdf6341",
                          "file_name": "sample 1.jpg",
                          "url": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/65ddb4c8-f6a4-4153-b0a2-cac305b213ad.jpg",
                          "created_by": 1,
                          "file_url": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/65ddb4c8-f6a4-4153-b0a2-cac305b213ad.jpg"
                        }
                      ],
                      "product_type": "PRODUCT",
                      "purchase_price": null,
                      "brand": "GLB",
                      "tax": {
                        "tax_rate": null,
                        "tax_name": "",
                        "tax_exempt": false,
                        "tax_exempt_remarks": null,
                        "entity_use_code": null,
                        "tax_exempt_number": null
                      },
                      "track_quantity": true,
                      "specification": "",
                      "has_custom_tax": false,
                      "meta_data": [
                        {
                          "label": "Xero Item ID",
                          "value": "PART005",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "_id": "6777b0af41dbf734c91fbfcb"
                        }
                      ],
                      "uom": "",
                      "location_availability": [
                        {
                          "location": "4c90d230-87e6-11ec-a0b1-1bc079724999",
                          "min_quantity": 1,
                          "serial_nos": []
                        },
                        {
                          "location": "f1e6dac0-87ed-11ec-a0b1-1bc079724999",
                          "quantity": 8,
                          "min_quantity": 1,
                          "serial_nos": []
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Product Updated Successfully\",\n    \"data\": {\n        \"product_uid\": \"b13f69d0-f896-11ee-b23b-b9743bfe06c8\"\n    }\n}"
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
                      "example": "Product Updated Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "product_uid": {
                          "type": "string",
                          "example": "b13f69d0-f896-11ee-b23b-b9743bfe06c8"
                        }
                      }
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