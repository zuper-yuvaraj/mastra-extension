---
updatedAt: 2026-10-02T15:10:50.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Jobs By Filter

Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Get the field key enum for filter_rules from the corresponding Meta Filter endpoint. `keyword` (free text) is special-cased and matches job_title/work_order_number/zip codes rather than going through the rule engine.

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
    "/jobs/filter": {
      "post": {
        "summary": "Get Jobs By Filter",
        "description": "Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Get the field key enum for filter_rules from the corresponding Meta Filter endpoint. `keyword` (free text) is special-cased and matches job_title/work_order_number/zip codes rather than going through the rule engine.",
        "operationId": "get-job-details-v3-1",
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
                    "description": "Max 1000 — larger values are rejected."
                  },
                  "sort": {
                    "type": "string",
                    "enum": [
                      "ASC",
                      "DESC"
                    ],
                    "default": "DESC"
                  },
                  "sort_by": {
                    "type": "string",
                    "enum": [
                      "work_order_number",
                      "job_priority",
                      "scheduled_start_time",
                      "due_date",
                      "job_title",
                      "created_at",
                      "updated_at",
                      "job_total",
                      "current_job_status.status_name",
                      "job_category.category_name",
                      "none"
                    ],
                    "default": "work_order_number"
                  },
                  "filter_rules": {
                    "type": "array",
                    "description": "Rule-engine filter conditions, ANDed/ORed per filter_rule_operator. `type` must match the type the module's Meta Filter endpoint declares for that `key` (`fieldDataKey`) — sending the wrong `type` is rejected with an error. A handful of keys shared across modules (e.g. `scheduled_date_range`, `schedule_status`, `asset`, `property`, `assigned_to`, `auto_charge.status`) require `module` to be set to this endpoint's module (e.g. `\"JOB\"`) since the query engine branches on it directly.",
                    "items": {
                      "type": "object",
                      "properties": {
                        "key": {
                          "type": "string",
                          "enum": [
                            "work_order_number",
                            "job_title",
                            "job_category_uid",
                            "scheduled_date_range",
                            "job_priority",
                            "current_job_status.status_type",
                            "is_recurrence",
                            "job_tags",
                            "delayed_job",
                            "parent_job",
                            "job_feedback.rating",
                            "job_type",
                            "status_uid",
                            "route_uid",
                            "request_uid",
                            "assigned_to_team.team_uid",
                            "assigned_to.user_uid",
                            "assigned_to",
                            "schedule_status",
                            "scheduled_start_time",
                            "scheduled_end_time",
                            "due_date",
                            "customer_address.street",
                            "customer_address.state",
                            "customer_address.country",
                            "customer_address.zip_code",
                            "customer_address.city",
                            "customer_billing_address.street",
                            "customer_billing_address.state",
                            "customer_billing_address.country",
                            "customer_billing_address.zip_code",
                            "customer_billing_address.city",
                            "created_by",
                            "created_at",
                            "updated_at",
                            "territory_uid",
                            "invoice.is_invoiced",
                            "job_total",
                            "customer_uid",
                            "organization_uid",
                            "property_uid",
                            "asset_uid",
                            "contract_uid",
                            "project_uid",
                            "waiting_on_po",
                            "waiting_on_mr",
                            "keyword"
                          ],
                          "description": "The filterable field — get the full current list from this module's Meta Filter endpoint."
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
                          "description": "string | number | boolean | array. Array for BETWEEN ([from, to]) and for multi-select LOOKUP/DROPDOWN fields."
                        },
                        "type": {
                          "type": "string",
                          "enum": [
                            "default_field",
                            "nested_field",
                            "custom_field"
                          ]
                        },
                        "module": {
                          "type": "string",
                          "description": "Required only for the handful of cross-module-shared keys noted above."
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
                    "type": "string",
                    "description": "Sparse fieldset selector."
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
                  },
                  "include_custom_field_internal_object": {
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
                        "success"
                      ]
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      },
                      "description": "Job documents — same shape as GET /jobs, with assigned_to/assigned_to_team/created_by hydrated."
                    },
                    "total_records": {
                      "type": "integer"
                    },
                    "current_page": {
                      "type": "integer",
                      "description": "0 in cursor-paginated mode."
                    },
                    "total_pages": {
                      "type": "integer",
                      "description": "0 in cursor-paginated mode."
                    },
                    "paging": {
                      "type": "object",
                      "nullable": true,
                      "description": "Populated only in cursor-paginated mode.",
                      "properties": {
                        "next": {
                          "type": "string",
                          "nullable": true
                        },
                        "previous": {
                          "type": "string",
                          "nullable": true
                        },
                        "has_more": {
                          "type": "boolean"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"job_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\", \"work_order_number\": 1042, \"job_title\": \"Example Job\"}], \"total_records\": 1, \"current_page\": 1, \"total_pages\": 1, \"paging\": null}"
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
        },
        "deprecated": false,
        "x-internal": false
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