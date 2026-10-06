---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create a Product

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
    "/product": {
      "post": {
        "summary": "Create a Product",
        "description": "",
        "operationId": "create-a-product",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "product": {
                    "properties": {
                      "product_name": {
                        "type": "string",
                        "description": "Product Name"
                      },
                      "product_category": {
                        "type": "string",
                        "description": "Product Category UID"
                      },
                      "prefix": {
                        "type": "string"
                      },
                      "product_type": {
                        "type": "string",
                        "description": "Product Type",
                        "enum": [
                          "PRODUCT",
                          "SERVICE",
                          "PARTS",
                          "BUNDLE"
                        ]
                      },
                      "purchase_price": {
                        "type": "number",
                        "format": "float"
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
                          },
                          "markup_price": {
                            "type": "number",
                            "format": "float"
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "location_availability": {
                        "type": "array",
                        "description": "Location Availability",
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
                          "has_custom_tax": {
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
                      },
                      "product_id": {
                        "type": "string"
                      },
                      "is_available": {
                        "type": "boolean"
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
                      "pricing_level": {
                        "type": "string"
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
                      "uom": {
                        "type": "string"
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
                      }
                    },
                    "required": [
                      "product_name",
                      "product_category"
                    ],
                    "type": "object"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "product": {
                      "prefix": "ZP",
                      "product_name": "part 34251",
                      "product_id": "34521",
                      "is_available": true,
                      "product_category": "3e2b4520-81ce-11e9-b902-35bbc7d2063e",
                      "price": "26.0000",
                      "min_quantity": 12,
                      "currency": "",
                      "quantity": 25,
                      "product_manual_link": "",
                      "product_description": "<p>test</p>",
                      "product_image": "",
                      "product_type": "PARTS",
                      "pricing_level": "ROLLUP",
                      "purchase_price": 25,
                      "brand": "crdf",
                      "track_quantity": true,
                      "specification": "test",
                      "has_custom_tax": false,
                      "meta_data": [
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 0,
                          "label": "Xero Item Account",
                          "read_only": false,
                          "type": "SINGLE_ITEM",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 1,
                          "label": "QBO Class",
                          "read_only": false,
                          "type": "SINGLE_ITEM",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 2,
                          "label": "QB Product ID",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 3,
                          "label": "Text Area",
                          "read_only": false,
                          "type": "MULTI_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": true,
                          "hide_to_fe": false,
                          "id": 4,
                          "label": "Hidden field",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": true,
                          "hide_to_fe": false,
                          "id": 5,
                          "label": "testitem",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 6,
                          "label": "QBO Preferred Vendor",
                          "read_only": false,
                          "type": "SINGLE_ITEM",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": "Bob's Burger Joint"
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 7,
                          "label": "New product",
                          "read_only": false,
                          "type": "LOOKUP",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 8,
                          "label": "QBO Inventory Account",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 9,
                          "label": "QBO Expense Account",
                          "read_only": false,
                          "type": "SINGLE_ITEM",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 10,
                          "label": "QBO Income Account",
                          "read_only": false,
                          "type": "SINGLE_ITEM",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": true,
                          "id": 11,
                          "label": "Mobile test hidden to FE",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Part/Product",
                          "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 12,
                          "label": "Vignesh Custom",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Part/Product",
                          "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 13,
                          "label": "Checkbox",
                          "read_only": false,
                          "type": "MULTI_ITEM",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Part/Product",
                          "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 14,
                          "label": "Time Input",
                          "read_only": false,
                          "type": "TIME",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Part/Product",
                          "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 15,
                          "label": "Text Area",
                          "read_only": false,
                          "type": "MULTI_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Part/Product",
                          "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 16,
                          "label": "DateTime Input",
                          "read_only": false,
                          "type": "DATETIME",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Asset group for product",
                          "group_uid": "a3042dc0-9044-11ee-b81e-f95ba7e47d6e",
                          "hide_field": false,
                          "hide_to_fe": true,
                          "id": 17,
                          "label": "Test Asset",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Asset group for product",
                          "group_uid": "a3042dc0-9044-11ee-b81e-f95ba7e47d6e",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 18,
                          "label": "Product description",
                          "read_only": false,
                          "type": "MULTI_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        }
                      ],
                      "uom": "mm",
                      "location_availability": [
                        {
                          "location": "0f34c290-9cab-11ed-afcd-e3289b5f2d85",
                          "min_quantity": 12,
                          "quantity": 25,
                          "serial_nos": []
                        }
                      ],
                      "tax": {
                        "tax_exempt": false,
                        "tax_name": "",
                        "tax_rate": ""
                      },
                      "formula": "4738a89b-0686-4484-9aaa-8250b00d19b3",
                      "markup": {
                        "markup_type": "FLAT",
                        "markup_value": 1
                      },
                      "product_files": []
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"New Product Created Successfully\",\n    \"data\": {\n        \"product_uid\": \"68093a33-340e-4da9-91cd-e481c1e00406\"\n    }\n}"
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
                      "example": "New Product Created Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "product_uid": {
                          "type": "string",
                          "example": "68093a33-340e-4da9-91cd-e481c1e00406"
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