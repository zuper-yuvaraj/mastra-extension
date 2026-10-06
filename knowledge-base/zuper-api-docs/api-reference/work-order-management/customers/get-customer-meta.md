---
updatedAt: 2026-10-03T07:51:07.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Customer Meta

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
    "/customers/meta": {
      "get": {
        "summary": "Get Customer Meta",
        "operationId": "get-customer-meta",
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
                    "value": "{\"type\": \"SUCCESS\", \"data\": [{\"display_name\": \"Name\", \"display_key\": \"customers.table.name\", \"data_key\": \"name\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"combinedColumn\", \"combine_with\": \"customer_last_name\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Email\", \"display_key\": \"customers.table.email\", \"data_key\": \"customer_email\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Jobs\", \"display_key\": \"customers.table.no_of_jobs\", \"data_key\": \"no_of_jobs\", \"field_type\": \"default_field\", \"data_type\": \"number\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": false, \"checked\": true}, {\"display_name\": \"Category\", \"display_key\": \"customers.table.category\", \"data_key\": \"customer_category.category_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Organization\", \"display_key\": \"customers.table.organization\", \"data_key\": \"customer_organization.organization_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Source\", \"display_key\": \"customers.table.source\", \"data_key\": \"source.source_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"AR Balance\", \"display_key\": \"customers.table.ar_balance\", \"data_key\": \"accounts.receivables\", \"field_type\": \"nested_field\", \"data_type\": \"decimal\", \"display_type\": \"currency\", \"is_sortable\": true, \"allow_editing\": false, \"checked\": false}, {\"display_name\": \"Work Phone\", \"display_key\": \"customers.table.work_phone\", \"data_key\": \"customer_contact_no.work\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": false}]}"
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