---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Job Meta

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
    "/jobs/meta": {
      "get": {
        "summary": "Get Job Meta",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"display_name\": \"Work Order #\", \"display_key\": \"jobs.table.work_order_number\", \"data_key\": \"work_order_number\", \"field_type\": \"default_field\", \"data_type\": \"number\", \"display_type\": \"combinedColumn\", \"is_sortable\": true, \"is_locked\": true, \"allow_editing\": false, \"checked\": true}, {\"display_name\": \"Job Title\", \"display_key\": \"jobs.table.job_title\", \"data_key\": \"job_title\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"text\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Status\", \"display_key\": \"jobs.table.status\", \"data_key\": \"current_job_status.status_name\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"status\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Scheduled Start Time\", \"display_key\": \"jobs.table.scheduled_start_time\", \"data_key\": \"scheduled_start_time\", \"field_type\": \"default_field\", \"data_type\": \"datetime\", \"display_type\": \"datetime\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Customer\", \"display_key\": \"jobs.table.customer\", \"data_key\": \"customer.customer_first_name\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"customer\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Created At\", \"display_key\": \"jobs.table.created_at\", \"data_key\": \"created_at\", \"field_type\": \"default_field\", \"data_type\": \"datetime\", \"display_type\": \"Datetime\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": false}]}"
                  }
                }
              }
            }
          }
        },
        "operationId": "get-job-meta"
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