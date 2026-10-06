---
updatedAt: 2026-10-02T16:04:25.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Job Routes By Filter

Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Unlike other modules, `keyword` here is a condition embedded directly inside `filter_rules` (`{"key": "keyword", ...}`), not a separate top-level body field. Invalid `sort_by` returns 400.

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
    "/routes/filter": {
      "post": {
        "summary": "Get Job Routes By Filter",
        "operationId": "get-job-routes-by-filter",
        "description": "Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain list endpoint, for building complex AND/OR filter conditions. Unlike other modules, `keyword` here is a condition embedded directly inside `filter_rules` (`{\"key\": \"keyword\", ...}`), not a separate top-level body field. Invalid `sort_by` returns 400.",
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
                            "keyword",
                            "is_optimized",
                            "departure",
                            "total_jobs"
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
                      "route_name",
                      "departure",
                      "total_jobs"
                    ],
                    "default": "departure"
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
                      "description": "Job route documents — same shape as GET /routes."
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
                    "value": "{\"type\": \"success\", \"data\": [{\"route_uid\": \"cb1223c5-b32f-459c-9204-afe10baa2380\", \"route_name\": \"Morning Route\", \"total_jobs\": 5}], \"total_records\": 1, \"current_page\": 1, \"total_pages\": 1}"
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
                    "value": "{\"type\": \"error\", \"title\": \"Sort must be either route_name / departure / total_jobs\", \"message\": \"Sort must be either route_name / departure / total_jobs\"}"
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