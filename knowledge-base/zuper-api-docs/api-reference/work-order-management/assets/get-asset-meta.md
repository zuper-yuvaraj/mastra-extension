---
updatedAt: 2026-10-02T14:49:18.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Asset Meta

Returns the column/field configuration used to render the Assets list view.

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
    "/assets/meta": {
      "get": {
        "summary": "Get Asset Meta",
        "description": "Returns the column/field configuration used to render the Assets list view.",
        "operationId": "get-asset-meta",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"display_name\": \"Asset Code\",\n            \"display_key\": \"assets.table.asset_code\",\n            \"data_key\": \"asset_code\",\n            \"field_type\": \"default_field\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"is_sortable\": true,\n            \"is_locked\": true,\n            \"redirect\": {\n                \"is_enabled\": true,\n                \"module\": \"ASSETS\",\n                \"data_key\": \"asset_uid\"\n            },\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": true\n        },\n        {\n            \"display_name\": \"Asset Name\",\n            \"display_key\": \"assets.table.asset_name\",\n            \"data_key\": \"asset_name\",\n            \"field_type\": \"default_field\",\n            \"data_type\": \"string\",\n            \"display_type\": \"asset\",\n            \"is_sortable\": true,\n            \"is_locked\": true,\n            \"redirect\": {\n                \"is_enabled\": true,\n                \"module\": \"ASSETS\",\n                \"data_key\": \"asset_uid\"\n            },\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": true\n        },\n        {\n            \"display_name\": \"Customer\",\n            \"display_key\": \"assets.table.customer\",\n            \"data_key\": \"customer\",\n            \"field_type\": \"nested_field\",\n            \"data_type\": \"string\",\n            \"display_type\": \"combinedColumn\",\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"redirect\": {\n                \"is_enabled\": true,\n                \"module\": \"CUSTOMER\",\n                \"data_key\": \"customer.customer_uid\"\n            },\n            \"allow_editing\": false,\n            \"combine_with\": \"{{customer.customer_first_name}} {{customer.customer_last_name}}\",\n            \"combine_column\": \"{{customer.customer_first_name}} {{customer.customer_last_name}}\",\n            \"checked\": true\n        },\n        {\n            \"display_name\": \"Organization\",\n            \"display_key\": \"assets.table.customer_organization\",\n            \"field_type\": \"nested_field\",\n            \"data_key\": \"organization.organization_name\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"redirect\": {\n                \"is_enabled\": true,\n                \"module\": \"ORGANIZATION\",\n                \"data_key\": \"organization.organization_uid\"\n            },\n            \"allow_editing\": false,\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Category\",\n            \"display_key\": \"assets.table.asset_category\",\n            \"data_key\": \"asset_category.category_name\",\n            \"field_type\": \"nested_field\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": true\n        },\n        {\n            \"display_name\": \"Serial No.\",\n            \"display_key\": \"assets.table.asset_serial_number\",\n            \"data_key\": \"asset_serial_number\",\n            \"field_type\": \"default_field\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"is_sortable\": true,\n            \"is_locked\": false,\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": true\n        },\n        {\n            \"display_name\": \"Parent Asset Name\",\n            \"display_key\": \"assets.table.parent_asset_name\",\n            \"data_key\": \"parent_asset.asset_name\",\n            \"field_type\": \"default_field\",\n            \"data_type\": \"string\",\n            \"display_type\": \"asset\",\n            \"is_sortable\": false,\n            \"is_locked\": true,\n            \"redirect\": {\n                \"is_enabled\": true,\n                \"module\": \"ASSETS\",\n                \"data_key\": \"parent_asset.asset_uid\"\n            },\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": true\n        },\n        {\n            \"display_name\": \"Status\",\n            \"display_key\": \"assets.table.status\",\n            \"data_key\": \"asset_status\",\n            \"field_type\": \"default_field\",\n            \"data_type\": \"string\",\n            \"display_type\": \"status\",\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"allow_editing\": true,\n            \"checked\": true\n        },\n        {\n            \"display_name\": \"Purchase Date\",\n            \"display_key\": \"assets.table.purchase_date\",\n            \"data_key\": \"purchase_date\",\n            \"data_type\": \"datetime\",\n            \"display_type\": \"date\",\n            \"field_type\": \"default_field\",\n            \"is_sortable\": true,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Warrenty Expiry Date\",\n            \"display_key\": \"assets.table.warranty_expiry_date\",\n            \"data_key\": \"warranty_expiry_date\",\n            \"data_type\": \"datetime\",\n            \"display_type\": \"date\",\n            \"field_type\": \"default_field\",\n            \"is_sortable\": true,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Placed in Service\",\n            \"display_key\": \"assets.table.placed_in_service\",\n            \"data_key\": \"placed_in_service\",\n            \"data_type\": \"datetime\",\n            \"display_type\": \"date\",\n            \"field_type\": \"default_field\",\n            \"is_sortable\": true,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Created By\",\n            \"display_key\": \"assets.table.created_by\",\n            \"data_key\": \"created_by\",\n            \"data_type\": \"string\",\n            \"display_type\": \"combinedColumn\",\n            \"field_type\": \"default_field\",\n            \"is_sortable\": false,\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"{{created_by.first_name}} {{created_by.last_name}}\",\n            \"combine_column\": \"{{created_by.first_name}} {{created_by.last_name}}\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Created On\",\n            \"display_key\": \"assets.table.created_at\",\n            \"data_key\": \"created_at\",\n            \"data_type\": \"datetime\",\n            \"display_type\": \"datetime\",\n            \"field_type\": \"default_field\",\n            \"is_sortable\": true,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": true\n        },\n        {\n            \"display_name\": \"Last Updated At\",\n            \"display_key\": \"assets.table.updated_at\",\n            \"data_key\": \"updated_at\",\n            \"data_type\": \"datetime\",\n            \"field_type\": \"default_field\",\n            \"display_type\": \"datetime\",\n            \"is_sortable\": true,\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Text Area\",\n            \"display_key\": \"assets.table.textArea\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.default.Text Area\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Checkbox\",\n            \"display_key\": \"assets.table.checkbox\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.default.Checkbox\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Radio\",\n            \"display_key\": \"assets.table.radio\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.default.Radio\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Text Input\",\n            \"display_key\": \"assets.table.textInput\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.default.Text Input\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"DateTime Input\",\n            \"display_key\": \"assets.table.dateTimeInput\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.default.DateTime Input\",\n            \"data_type\": \"datetime\",\n            \"display_type\": \"datetime\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Date Input\",\n            \"display_key\": \"assets.table.dateInput\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.default.Date Input\",\n            \"data_type\": \"date\",\n            \"display_type\": \"date\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Select\",\n            \"display_key\": \"assets.table.select\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.default.Select\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Time Input\",\n            \"display_key\": \"assets.table.timeInput\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.default.Time Input\",\n            \"data_type\": \"time\",\n            \"display_type\": \"time\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Furniture & fridge repair - Text Area\",\n            \"display_key\": \"assets.table.textArea\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.Furniture & fridge repair.Text Area\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Furniture & fridge repair - Sample furniture\",\n            \"display_key\": \"assets.table.textInput\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.Furniture & fridge repair.Sample furniture\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Unique Group - Radio\",\n            \"display_key\": \"assets.table.radio\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.Unique Group.Radio\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Unique Group - Sample\",\n            \"display_key\": \"assets.table.textInput\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.Unique Group.Sample\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Unique Group - DateTime Input\",\n            \"display_key\": \"assets.table.dateTimeInput\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.Unique Group.DateTime Input\",\n            \"data_type\": \"datetime\",\n            \"display_type\": \"datetime\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Unique Group - File Input\",\n            \"display_key\": \"assets.table.file\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.Unique Group.File Input\",\n            \"data_type\": \"file\",\n            \"display_type\": \"file\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        },\n        {\n            \"display_name\": \"Furniture - Text Area\",\n            \"display_key\": \"assets.table.textArea\",\n            \"field_type\": \"custom_field\",\n            \"data_key\": \"custom_fields.Furniture.Text Area\",\n            \"data_type\": \"string\",\n            \"display_type\": \"string\",\n            \"redirect\": {\n                \"is_enabled\": false\n            },\n            \"is_sortable\": false,\n            \"is_locked\": false,\n            \"allow_editing\": false,\n            \"combine_with\": \"\",\n            \"checked\": false\n        }\n    ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "display_name": {
                            "type": "string",
                            "example": "Asset Code"
                          },
                          "display_key": {
                            "type": "string",
                            "example": "assets.table.asset_code"
                          },
                          "data_key": {
                            "type": "string",
                            "example": "asset_code"
                          },
                          "field_type": {
                            "type": "string",
                            "example": "default_field"
                          },
                          "data_type": {
                            "type": "string",
                            "example": "string"
                          },
                          "display_type": {
                            "type": "string",
                            "example": "string"
                          },
                          "is_sortable": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "is_locked": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "redirect": {
                            "type": "object",
                            "properties": {
                              "is_enabled": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "module": {
                                "type": "string",
                                "example": "ASSETS"
                              },
                              "data_key": {
                                "type": "string",
                                "example": "asset_uid"
                              }
                            }
                          },
                          "allow_editing": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "combine_with": {
                            "type": "string",
                            "example": ""
                          },
                          "checked": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          }
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
        "deprecated": false,
        "x-internal": false
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