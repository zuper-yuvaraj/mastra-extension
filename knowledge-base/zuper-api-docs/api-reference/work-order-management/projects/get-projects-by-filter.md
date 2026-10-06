---
updatedAt: 2026-10-02T16:05:18.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Projects By Filter

Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. `sort_by: "project_priority"` is internally remapped to `project_priority_index`. `keyword` is embedded inside `filter_rules`; it matches via Atlas Search when enabled for the company, otherwise falls back to a regex on `project_name`/`project_number_string`. Supports `fields_to_select` and `filter.module_uid`.

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
    "/projects/filter": {
      "post": {
        "summary": "Get Projects By Filter",
        "operationId": "get-projects-by-filter",
        "description": "Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. `sort_by: \"project_priority\"` is internally remapped to `project_priority_index`. `keyword` is embedded inside `filter_rules`; it matches via Atlas Search when enabled for the company, otherwise falls back to a regex on `project_name`/`project_number_string`. Supports `fields_to_select` and `filter.module_uid`.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "page": {
                    "type": "integer",
                    "default": 1
                  },
                  "limit": {
                    "type": "integer",
                    "default": 10
                  },
                  "sort": {
                    "type": "string",
                    "enum": [
                      "ASC",
                      "DESC"
                    ],
                    "default": "DESC"
                  },
                  "filter_rules": {
                    "type": "array",
                    "description": "Rule-engine filter conditions, ANDed/ORed per filter_rule_operator. Get the exact field key enum from this module's Meta Filter endpoint.",
                    "items": {
                      "type": "object",
                      "properties": {
                        "key": {
                          "type": "string",
                          "enum": [
                            "project_number",
                            "project_name",
                            "project_priority",
                            "project_current_status.project_status_type",
                            "project_tags",
                            "project_category_uid",
                            "project_assigned_to.team_uid",
                            "customer_uid",
                            "keyword"
                          ]
                        },
                        "operator": {
                          "type": "string",
                          "enum": [
                            "EQUAL_TO",
                            "NOT_EQUAL_TO",
                            "CONTAINS",
                            "NOT_CONTAINS",
                            "GREATER_THAN",
                            "LESS_THAN",
                            "BETWEEN",
                            "IS_EMPTY",
                            "IS_NOT_EMPTY"
                          ]
                        },
                        "value": {
                          "description": "string | number | boolean | array. Array for BETWEEN ([from, to]) and multi-select LOOKUP/DROPDOWN fields."
                        },
                        "type": {
                          "type": "string",
                          "enum": [
                            "default_field",
                            "nested_field",
                            "custom_field"
                          ]
                        }
                      }
                    }
                  },
                  "filter_rule_operator": {
                    "type": "string",
                    "enum": [
                      "AND",
                      "OR"
                    ],
                    "default": "AND"
                  },
                  "sort_by": {
                    "type": "string",
                    "enum": [
                      "created_at",
                      "updated_at",
                      "project_name",
                      "project_number",
                      "project_due_date",
                      "project_start_date",
                      "project_priority",
                      "project_value"
                    ],
                    "default": "created_at"
                  },
                  "filter.module_uid": {
                    "type": "string"
                  },
                  "fields_to_select": {
                    "type": "string"
                  },
                  "preferred_timezone": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
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
                        "type": "object"
                      },
                      "description": "Project documents — same shape as GET /projects."
                    },
                    "total_records": {
                      "type": "integer"
                    },
                    "current_page": {
                      "type": "integer",
                      "description": null
                    },
                    "total_pages": {
                      "type": "integer",
                      "description": null
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"project_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\", \"project_name\": \"Example Project\", \"project_number\": \"PRJ-1001\"}], \"total_records\": 1, \"current_page\": 1, \"total_pages\": 1}"
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "error"
                      ]
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"error\", \"title\": \"Invalid Sort By Value\", \"message\": \"Invalid Sort By Value\"}"
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