---
updatedAt: 2026-10-03T07:51:15.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Organizations By Filter

Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. This endpoint is served by a separate microservice from most of the API (not `master_service`), and its filter schema differs in two ways from other modules' generic-filter endpoints: each `filter_rules` entry also carries an explicit `field_type`, and the `operator` enum is wider (adds `GREATER_THAN_EQUAL_TO`, `LESS_THAN_EQUAL_TO`, `IN`). A `filter_rules` entry with `key: "keyword"` is pulled out and used as a free-text search instead of going through the rule engine.

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
    "/organization/filter": {
      "post": {
        "summary": "Get Organizations By Filter",
        "operationId": "get-organizations-by-filter",
        "description": "Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. This endpoint is served by a separate microservice from most of the API (not `master_service`), and its filter schema differs in two ways from other modules' generic-filter endpoints: each `filter_rules` entry also carries an explicit `field_type`, and the `operator` enum is wider (adds `GREATER_THAN_EQUAL_TO`, `LESS_THAN_EQUAL_TO`, `IN`). A `filter_rules` entry with `key: \"keyword\"` is pulled out and used as a free-text search instead of going through the rule engine.",
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
                    "default": 10,
                    "description": "Also accepted as `count`. Max 1000 — larger values return 400 `COUNT_LIMIT_EXCEEDED`."
                  },
                  "count": {
                    "type": "integer",
                    "description": "Alias for `limit`."
                  },
                  "sort": {
                    "type": "string",
                    "enum": [
                      "ASC",
                      "DESC"
                    ],
                    "default": "ASC"
                  },
                  "sort_by": {
                    "type": "string",
                    "enum": [
                      "organization_name",
                      "created_at",
                      "updated_at"
                    ],
                    "default": "created_at"
                  },
                  "filter_rules": {
                    "type": "array",
                    "description": "Rule-engine filter conditions. `field_type` must match the type this module's Meta Filter endpoint declares for that `key` (`fieldDataKey`) — it is validated separately from `type` (the default/nested/custom discriminator). `module` is only needed for keys shared across modules. ",
                    "items": {
                      "type": "object",
                      "required": [
                        "key",
                        "operator",
                        "field_type"
                      ],
                      "properties": {
                        "type": {
                          "type": "string",
                          "enum": [
                            "default_field",
                            "nested_field",
                            "custom_field"
                          ]
                        },
                        "key": {
                          "type": "string",
                          "description": "Get the exact field key enum from this module's Meta Filter endpoint."
                        },
                        "operator": {
                          "type": "string",
                          "enum": [
                            "EQUAL_TO",
                            "NOT_EQUAL_TO",
                            "CONTAINS",
                            "NOT_CONTAINS",
                            "IS_EMPTY",
                            "IS_NOT_EMPTY",
                            "GREATER_THAN",
                            "LESS_THAN",
                            "GREATER_THAN_EQUAL_TO",
                            "LESS_THAN_EQUAL_TO",
                            "BETWEEN",
                            "IN"
                          ]
                        },
                        "value": {
                          "description": "string | number | boolean | array. Array for BETWEEN ([from, to]) and IN / multi-select LOOKUP fields."
                        },
                        "field_type": {
                          "type": "string",
                          "enum": [
                            "SINGLE_LINE",
                            "MULTI_LINE",
                            "SINGLE_ITEM",
                            "RADIO",
                            "MULTI_ITEM",
                            "NUMBER",
                            "DATE",
                            "TIME",
                            "DATETIME",
                            "LOOKUP",
                            "FILE",
                            "TEXT",
                            "DROPDOWN",
                            "TAGS"
                          ]
                        },
                        "rangeKey": {
                          "type": "string",
                          "description": "Optional secondary key used by BETWEEN-style range conditions on some nested fields."
                        },
                        "operatorDisplayKey": {
                          "type": "string"
                        },
                        "displayKeyValue": {
                          "type": "array",
                          "items": {}
                        },
                        "module": {
                          "type": "string",
                          "enum": [
                            "JOB",
                            "CUSTOMER",
                            "USER",
                            "ESTIMATES",
                            "QUOTE",
                            "INVOICE",
                            "ASSETS",
                            "PRODUCTS",
                            "TIMESHEET",
                            "EMPLOYEE",
                            "MAPS",
                            "REPORTS",
                            "SCHEDULE",
                            "ORGANIZATION",
                            "PROPERTY"
                          ],
                          "description": "Required only for the handful of cross-module-shared keys."
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
                  "filter.module_uid": {
                    "type": "string",
                    "description": "Comma-separated list of this module's own UIDs to restrict to."
                  },
                  "fields_to_select": {
                    "type": "string"
                  },
                  "preferred_timezone": {
                    "type": "string"
                  },
                  "cursor": {
                    "type": "string"
                  },
                  "prev_cursor": {
                    "type": "string"
                  },
                  "cursor_pagination": {
                    "type": "boolean",
                    "description": "Switches the response to the cursor-paginated shape."
                  },
                  "last_page": {
                    "type": "boolean"
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
                        "SUCCESS"
                      ]
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      },
                      "description": "Organization documents — same shape as GET /organization. Switches to the cursor-paginated shape (`{type, data, total_records, paging}`, no `current_page_records`) when `cursor_pagination`/`cursor`/`prev_cursor`/`last_page` is sent."
                    },
                    "current_page_records": {
                      "type": "integer",
                      "description": "Length of the `data` array returned in this page."
                    },
                    "total_records": {
                      "type": "integer"
                    },
                    "current_page": {
                      "type": "integer"
                    },
                    "total_pages": {
                      "type": "integer"
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"SUCCESS\", \"data\": [{\"organization_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\", \"organization_name\": \"Acme Corp\"}], \"current_page_records\": 1, \"total_records\": 1, \"current_page\": 1, \"total_pages\": 1}"
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
                    "value": "{\"type\": \"error\", \"title\": \"COUNT_LIMIT_EXCEEDED\", \"message\": \"COUNT_LIMIT_EXCEEDED\"}"
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