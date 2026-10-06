---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Invoice Meta

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
    "/invoice/meta": {
      "get": {
        "summary": "Get Invoice Meta",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"display_name\": \"Invoice #\", \"display_key\": \"invoice.table.invoice_no\", \"data_key\": \"invoice_no\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"combinedColumn\", \"combine_with\": \"prefix\", \"is_sortable\": true, \"allow_editing\": false, \"checked\": true, \"redirect\": {\"is_enabled\": true, \"module\": \"INVOICE\", \"data_key\": \"invoice_uid\"}}, {\"display_name\": \"Reference #\", \"display_key\": \"invoice.table.reference_no\", \"data_key\": \"reference_no\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Invoice Date\", \"display_key\": \"invoice.table.invoice_date\", \"data_key\": \"invoice_date\", \"field_type\": \"default_field\", \"data_type\": \"date\", \"display_type\": \"date\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Due Date\", \"display_key\": \"invoice.table.due_date\", \"data_key\": \"due_date\", \"field_type\": \"default_field\", \"data_type\": \"date\", \"display_type\": \"date\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Customer\", \"display_key\": \"invoice.table.customer\", \"data_key\": \"customer.customer_first_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"customer\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Total\", \"display_key\": \"invoice.table.total\", \"data_key\": \"total\", \"field_type\": \"default_field\", \"data_type\": \"decimal\", \"display_type\": \"currency\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Status\", \"display_key\": \"invoice.table.status\", \"data_key\": \"invoice_status\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"status\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Created At\", \"display_key\": \"invoice.table.created_at\", \"data_key\": \"created_at\", \"field_type\": \"default_field\", \"data_type\": \"datetime\", \"display_type\": \"Datetime\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": false}]}"
                  }
                }
              }
            }
          }
        },
        "operationId": "get-invoice-meta"
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