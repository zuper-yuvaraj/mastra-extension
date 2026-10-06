---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Product Meta

Returns the column/field configuration used to render this module's list view.

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
    "/product/meta": {
      "get": {
        "summary": "Get Product Meta",
        "description": "Returns the column/field configuration used to render this module's list view.",
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
                        "success"
                      ]
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "display_name": {
                            "type": "string"
                          },
                          "display_key": {
                            "type": "string"
                          },
                          "data_key": {
                            "type": "string"
                          },
                          "field_type": {
                            "type": "string",
                            "enum": [
                              "default_field",
                              "nested_field",
                              "custom_field"
                            ]
                          },
                          "data_type": {
                            "type": "string"
                          },
                          "display_type": {
                            "type": "string"
                          },
                          "is_sortable": {
                            "type": "boolean"
                          },
                          "is_locked": {
                            "type": "boolean"
                          },
                          "allow_editing": {
                            "type": "boolean"
                          },
                          "combine_with": {
                            "type": "string"
                          },
                          "combine_column": {
                            "type": "string"
                          },
                          "checked": {
                            "type": "boolean"
                          },
                          "redirect": {
                            "type": "object",
                            "properties": {
                              "is_enabled": {
                                "type": "boolean"
                              },
                              "module": {
                                "type": "string"
                              },
                              "data_key": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"display_name\": \"Product #\", \"display_key\": \"products.table.product_no\", \"data_key\": \"product_no\", \"field_type\": \"default_field\", \"data_type\": \"number\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": false, \"checked\": true, \"redirect\": {\"is_enabled\": true, \"module\": \"PRODUCTS\", \"data_key\": \"product_uid\"}}, {\"display_name\": \"Product Name\", \"display_key\": \"products.table.product_name\", \"data_key\": \"product_name\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"product_name_column\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"ID\", \"display_key\": \"products.table.product_id\", \"data_key\": \"product_id\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"combinedColumn\", \"combine_column\": \"{{prefix}} {{product_id}}\", \"is_sortable\": true, \"allow_editing\": false, \"checked\": true}, {\"display_name\": \"Type\", \"display_key\": \"products.table.product_type\", \"data_key\": \"product_type\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Category\", \"display_key\": \"products.table.category\", \"data_key\": \"product_category.category_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Quantity\", \"display_key\": \"products.table.quantity\", \"data_key\": \"quantity\", \"field_type\": \"default_field\", \"data_type\": \"number\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Price\", \"display_key\": \"products.table.price\", \"data_key\": \"price\", \"field_type\": \"default_field\", \"data_type\": \"decimal\", \"display_type\": \"currency\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Created At\", \"display_key\": \"products.table.created_at\", \"data_key\": \"created_at\", \"field_type\": \"default_field\", \"data_type\": \"datetime\", \"display_type\": \"Datetime\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": false}]}"
                  }
                }
              }
            }
          }
        },
        "operationId": "get-product-meta"
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