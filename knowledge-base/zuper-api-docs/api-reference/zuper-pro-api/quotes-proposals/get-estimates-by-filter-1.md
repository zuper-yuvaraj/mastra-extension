---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Estimates By Filter

Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Get the field key enum for filter_rules from the corresponding Meta Filter endpoint. `fields_to_select` is restricted to a fixed allowlist of fields: `estimate_uid`, `estimate_no`, `prefix`, `associations`, `reference_no`, `job`, `customer`, `customer_name`, `estimate_date`, `estimate_date_dt`, `total`, `tags`, `expiry_date`, `expiry_date_dt`, `accepted_date`, `sent_date`, `converted_date`, `estimate_status`, `deposit`, `is_expired`, `is_deleted`, `is_active`, `is_converted`, `custom_fields`, `custom_field_internal_object`, `total_discount`, `is_proposal`, `proposal_title`, `proposal_template`, `proposal_options`, `created_by`, `sold_by_user`, `created_at`, `updated_at`, `external_id`, `external_status`, `business_unit`, `waiting_on_po`, `waiting_on_po_uids`, `waiting_on_mr`, `waiting_on_mr_uids`, `cpq_status`, `pending_option_selection`, `payment_methods`. Supports cursor pagination — pass `cursor_pagination: true` (or any of `cursor`/`prev_cursor`/`last_page`) to switch response modes.

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
    "/estimate/filter": {
      "post": {
        "summary": "Get Estimates By Filter",
        "description": "Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Get the field key enum for filter_rules from the corresponding Meta Filter endpoint. `fields_to_select` is restricted to a fixed allowlist of fields: `estimate_uid`, `estimate_no`, `prefix`, `associations`, `reference_no`, `job`, `customer`, `customer_name`, `estimate_date`, `estimate_date_dt`, `total`, `tags`, `expiry_date`, `expiry_date_dt`, `accepted_date`, `sent_date`, `converted_date`, `estimate_status`, `deposit`, `is_expired`, `is_deleted`, `is_active`, `is_converted`, `custom_fields`, `custom_field_internal_object`, `total_discount`, `is_proposal`, `proposal_title`, `proposal_template`, `proposal_options`, `created_by`, `sold_by_user`, `created_at`, `updated_at`, `external_id`, `external_status`, `business_unit`, `waiting_on_po`, `waiting_on_po_uids`, `waiting_on_mr`, `waiting_on_mr_uids`, `cpq_status`, `pending_option_selection`, `payment_methods`. Supports cursor pagination — pass `cursor_pagination: true` (or any of `cursor`/`prev_cursor`/`last_page`) to switch response modes.",
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
                    "default": "ASC"
                  },
                  "sort_by": {
                    "type": "string",
                    "enum": [
                      "estimate_no",
                      "reference_no",
                      "created_at",
                      "estimate_date",
                      "expiry_date",
                      "accepted_date",
                      "sent_date",
                      "total"
                    ],
                    "default": "created_at"
                  },
                  "filter_rules": {
                    "type": "array",
                    "description": "Rule-engine filter conditions, ANDed/ORed per filter_rule_operator. `type` must match the type this module's Meta Filter endpoint declares for that `key` (`fieldDataKey`) — sending the wrong `type` is rejected. Some shared keys require `module: \"ESTIMATE\"` since the query engine branches on it directly.",
                    "items": {
                      "type": "object",
                      "properties": {
                        "key": {
                          "type": "string",
                          "enum": [
                            "estimate_no",
                            "reference_no",
                            "proposal_title",
                            "estimate_date",
                            "expiry_date",
                            "customer_uid",
                            "estimate_status",
                            "total",
                            "is_converted",
                            "created_at",
                            "keyword"
                          ],
                          "description": "Get the full current list from this module's Meta Filter endpoint."
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
                        },
                        "module": {
                          "type": "string"
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
                      "description": "Estimate documents — same shape as GET /estimate."
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
                    "value": "{\"type\": \"success\", \"data\": [{\"estimate_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\", \"estimate_no\": \"EST-1001\", \"total\": 500.0, \"estimate_status\": \"Open\"}], \"total_records\": 1, \"current_page\": 1, \"total_pages\": 1, \"paging\": null}"
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
        "operationId": "get-estimates-by-filter"
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