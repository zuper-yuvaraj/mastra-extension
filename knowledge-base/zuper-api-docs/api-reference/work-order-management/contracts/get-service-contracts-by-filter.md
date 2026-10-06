---
updatedAt: 2026-10-02T16:04:33.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Service Contracts By Filter

Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Supports cursor pagination (`cursor_pagination`/`cursor`/`prev_cursor`/`last_page`) and `fields_to_select`. `filter.module_uid` restricts to specific contract_uids.

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
    "/service_contract/filter": {
      "post": {
        "summary": "Get Service Contracts By Filter",
        "operationId": "get-service-contracts-by-filter",
        "description": "Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Supports cursor pagination (`cursor_pagination`/`cursor`/`prev_cursor`/`last_page`) and `fields_to_select`. `filter.module_uid` restricts to specific contract_uids.",
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
                            "contract_number",
                            "ref_no",
                            "contract_name",
                            "start_date",
                            "end_date",
                            "is_expired",
                            "customer_uid",
                            "organization_uid",
                            "package_uid",
                            "team_uid",
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
                      "contract_number",
                      "end_date",
                      "start_date",
                      "created_at",
                      "updated_at"
                    ],
                    "default": "contract_number"
                  },
                  "cursor": {
                    "type": "string"
                  },
                  "prev_cursor": {
                    "type": "string"
                  },
                  "cursor_pagination": {
                    "type": "boolean"
                  },
                  "last_page": {
                    "type": "boolean"
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
                      "description": "Service contract documents — same shape as GET /service_contract."
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
                    "value": "{\"type\": \"success\", \"data\": [{\"contract_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\", \"contract_number\": \"SC-1001\", \"contract_name\": \"Annual Maintenance\"}], \"total_records\": 1, \"current_page\": 1, \"total_pages\": 1, \"paging\": null}"
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