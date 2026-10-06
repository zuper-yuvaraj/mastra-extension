---
updatedAt: 2026-10-02T16:04:58.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Commissions By Filter

Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Unlike other modules, invalid `sort_by`/`sort` values are not rejected — they silently fall back to the defaults (`created_at` / `DESC`) instead of returning a 400. `filter_rules` is only honored when the request opts into the rule-engine listing mode; without `filter_rules`, the endpoint falls back to legacy `filter.job_uid` / `filter.project_uid` / `filter.user_uid` query-style params on the same body.

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
    "/commissions/filter": {
      "post": {
        "summary": "Get Commissions By Filter",
        "operationId": "get-commissions-by-filter",
        "description": "Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Unlike other modules, invalid `sort_by`/`sort` values are not rejected — they silently fall back to the defaults (`created_at` / `DESC`) instead of returning a 400. `filter_rules` is only honored when the request opts into the rule-engine listing mode; without `filter_rules`, the endpoint falls back to legacy `filter.job_uid` / `filter.project_uid` / `filter.user_uid` query-style params on the same body.",
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
                            "commission_date",
                            "commission_amount",
                            "payout_status",
                            "commission_assigned_to.user_uid",
                            "job_uid",
                            "project_uid"
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
                      "paid_payout",
                      "commission_date",
                      "commission_amount",
                      "created_at"
                    ],
                    "default": "created_at"
                  },
                  "filter.job_uid": {
                    "type": "string"
                  },
                  "filter.project_uid": {
                    "type": "string"
                  },
                  "filter.user_uid": {
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
                      "description": "Commission documents — same shape as GET /commissions."
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
                    "value": "{\"type\": \"success\", \"data\": [{\"commission_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\", \"commission_amount\": 50.0, \"payout_status\": \"PENDING\"}], \"total_records\": 1, \"current_page\": 1, \"total_pages\": 1}"
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