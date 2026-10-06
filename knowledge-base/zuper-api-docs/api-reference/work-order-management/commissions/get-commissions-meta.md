---
updatedAt: 2026-10-02T16:05:02.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Commissions Meta

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
    "/commissions/meta": {
      "get": {
        "summary": "Get Commissions Meta",
        "operationId": "get-commissions-meta",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"display_name\": \"Commission Date\", \"display_key\": \"commissions.table.commission_date\", \"data_key\": \"commission_date\", \"field_type\": \"default_field\", \"data_type\": \"date\", \"display_type\": \"Date\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Assigned To\", \"display_key\": \"commissions.table.assigned_to\", \"data_key\": \"assigned_to\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"employee_name\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Job\", \"display_key\": \"commissions.table.job\", \"data_key\": \"job_uid\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Job Status\", \"display_key\": \"commissions.table.job_status\", \"data_key\": \"job.current_job_status.status_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"status\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Project\", \"display_key\": \"commissions.table.project\", \"data_key\": \"project_uid\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Commission Amount\", \"display_key\": \"commissions.table.commission_amount\", \"data_key\": \"commission_amount\", \"field_type\": \"default_field\", \"data_type\": \"decimal\", \"display_type\": \"currency\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Payout\", \"display_key\": \"commissions.table.paid_payout\", \"data_key\": \"paid_payout\", \"field_type\": \"default_field\", \"data_type\": \"decimal\", \"display_type\": \"currency\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Payout Status\", \"display_key\": \"commissions.table.payout_status\", \"data_key\": \"payout_status\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"status\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}]}"
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