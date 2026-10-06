---
updatedAt: 2026-10-02T15:58:55.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Estimate Meta

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
    "/estimate/meta": {
      "get": {
        "summary": "Get Estimate Meta",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"display_name\": \"Estimate #\", \"display_key\": \"estimate.table.estimate_no\", \"data_key\": \"estimate_no\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"combinedColumn\", \"combine_with\": \"prefix\", \"is_sortable\": true, \"allow_editing\": false, \"checked\": true, \"redirect\": {\"is_enabled\": true, \"module\": \"ESTIMATE\", \"data_key\": \"estimate_uid\"}}, {\"display_name\": \"Proposal Title\", \"display_key\": \"estimate.table.proposal_title\", \"data_key\": \"proposal_title\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"default\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Estimate Date\", \"display_key\": \"estimate.table.estimate_date\", \"data_key\": \"estimate_date\", \"field_type\": \"default_field\", \"data_type\": \"date\", \"display_type\": \"Date\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Expiry Date\", \"display_key\": \"estimate.table.expiry_date\", \"data_key\": \"expiry_date\", \"field_type\": \"default_field\", \"data_type\": \"date\", \"display_type\": \"Date\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Customer\", \"display_key\": \"estimate.table.customer\", \"data_key\": \"customer.customer_first_name\", \"field_type\": \"nested_field\", \"data_type\": \"string\", \"display_type\": \"customer\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Total\", \"display_key\": \"estimate.table.total\", \"data_key\": \"total\", \"field_type\": \"default_field\", \"data_type\": \"decimal\", \"display_type\": \"currency\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Status\", \"display_key\": \"estimate.table.status\", \"data_key\": \"estimate_status\", \"field_type\": \"default_field\", \"data_type\": \"string\", \"display_type\": \"status\", \"is_sortable\": false, \"allow_editing\": true, \"checked\": true}, {\"display_name\": \"Created At\", \"display_key\": \"estimate.table.created_at\", \"data_key\": \"created_at\", \"field_type\": \"default_field\", \"data_type\": \"datetime\", \"display_type\": \"datetime\", \"is_sortable\": true, \"allow_editing\": true, \"checked\": false}]}"
                  }
                }
              }
            }
          }
        },
        "operationId": "get-estimate-meta"
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