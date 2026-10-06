---
updatedAt: 2026-10-02T16:05:22.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Project Meta

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
    "/projects/meta": {
      "get": {
        "summary": "Get Project Meta",
        "operationId": "get-project-meta",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"display_name\": \"Project #\", \"display_key\": \"projects.table.project_number\", \"data_key\": \"project_number\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": false, \"checked\": true, \"redirect\": {\"is_enabled\": true, \"module\": \"PROJECTS\", \"data_key\": \"project_uid\"}}, {\"display_name\": \"Project Name\", \"display_key\": \"projects.table.project_name\", \"data_key\": \"project_name\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Status\", \"display_key\": \"projects.table.status\", \"data_key\": \"project_current_status.project_status_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"status\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Priority\", \"display_key\": \"projects.table.priority\", \"data_key\": \"project_priority\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Customer\", \"display_key\": \"projects.table.customer\", \"data_key\": \"customer.customer_first_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"customer\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Due Date\", \"display_key\": \"projects.table.due_date\", \"data_key\": \"project_due_date\", \"field_type\": \"default_field\", \"data_type\": \"date\", \"display_type\": \"Date\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Value\", \"display_key\": \"projects.table.value\", \"data_key\": \"project_value\", \"field_type\": \"default_field\", \"data_type\": \"decimal\", \"display_type\": \"currency\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}]}"
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