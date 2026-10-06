---
updatedAt: 2026-10-03T07:51:35.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Property Meta

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
    "/property/meta": {
      "get": {
        "summary": "Get Property Meta",
        "operationId": "get-property-meta",
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
                        "SUCCESS"
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
                    "value": "{\"type\": \"SUCCESS\", \"data\": [{\"display_name\": \"Property Name\", \"display_key\": \"property.table.property_name\", \"data_key\": \"property_name\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Assigned To\", \"display_key\": \"property.table.assigned_to\", \"data_key\": \"assigned_to\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"employee_name\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Organization\", \"display_key\": \"property.table.organization\", \"data_key\": \"property_organization.organization_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Customer\", \"display_key\": \"property.table.customer\", \"data_key\": \"property_customers.customer.customer_first_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"customer\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Status\", \"display_key\": \"property.table.status\", \"data_key\": \"is_active\", \"field_type\": \"default_field\", \"data_type\": \"boolean\", \"display_type\": \"active_status\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Tax Exempt\", \"display_key\": \"property.table.tax_exempt\", \"data_key\": \"tax.tax_exempt\", \"field_type\": \"nested_field\", \"data_type\": \"boolean\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": false}, {\"display_name\": \"Tax Group\", \"display_key\": \"property.table.tax_group\", \"data_key\": \"tax.tax_group.tax_group_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": false}]}"
                  }
                }
              }
            }
          }
        }
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