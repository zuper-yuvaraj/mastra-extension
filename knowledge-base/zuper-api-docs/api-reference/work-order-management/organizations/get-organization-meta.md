---
updatedAt: 2026-10-03T07:51:20.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Organization Meta

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
    "/organization/meta": {
      "get": {
        "summary": "Get Organization Meta",
        "operationId": "get-organization-meta",
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
                    "value": "{\"type\": \"SUCCESS\", \"data\": [{\"display_name\": \"Organization Name\", \"display_key\": \"organization.table.organization_name\", \"data_key\": \"organization_name\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Email\", \"display_key\": \"organization.table.organization_email\", \"data_key\": \"organization_email\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Address\", \"display_key\": \"organization.table.organization_address\", \"data_key\": \"organization_address\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Billing Address\", \"display_key\": \"organization.table.organization_billing_address\", \"data_key\": \"organization_billing_address\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": false}, {\"display_name\": \"Status\", \"display_key\": \"organization.table.status\", \"data_key\": \"is_active\", \"field_type\": \"default_field\", \"data_type\": \"boolean\", \"display_type\": \"active_status\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Timezone\", \"display_key\": \"organization.table.timezone\", \"data_key\": \"organization_timezone\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": false}, {\"display_name\": \"Created By\", \"display_key\": \"organization.table.created_by\", \"data_key\": \"created_by\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"employee_name\", \"is_sortable\": false, \"allow_editing\": false, \"checked\": true}, {\"display_name\": \"Created At\", \"display_key\": \"organization.table.created_at\", \"data_key\": \"created_at\", \"field_type\": \"default_field\", \"data_type\": \"datetime\", \"display_type\": \"Datetime\", \"is_sortable\": true, \"allow_editing\": false, \"checked\": false}]}"
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