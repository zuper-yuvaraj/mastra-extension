---
updatedAt: 2026-10-02T16:04:50.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Request Meta

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
    "/request/meta": {
      "get": {
        "summary": "Get Request Meta",
        "operationId": "get-request-meta",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"display_name\": \"Request ID\", \"display_key\": \"request.table.request_id\", \"data_key\": \"request_id\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": false, \"checked\": true}, {\"display_name\": \"Title\", \"display_key\": \"request.table.request_title\", \"data_key\": \"request_title\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Customer\", \"display_key\": \"request.table.customer\", \"data_key\": \"customer\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"customer\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Company Name\", \"display_key\": \"request.table.company_name\", \"data_key\": \"customer.customer_company_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Due Date\", \"display_key\": \"request.table.due_date\", \"data_key\": \"request_due_date\", \"field_type\": \"default_field\", \"data_type\": \"date\", \"display_type\": \"Date\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Status\", \"display_key\": \"request.table.status\", \"data_key\": \"request_status\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"status\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Source\", \"display_key\": \"request.table.source\", \"data_key\": \"request_source.request_source_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Priority\", \"display_key\": \"request.table.priority\", \"data_key\": \"request_priority\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Created At\", \"display_key\": \"request.table.created_at\", \"data_key\": \"created_at\", \"field_type\": \"default_field\", \"data_type\": \"datetime\", \"display_type\": \"Datetime\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": false}]}"
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