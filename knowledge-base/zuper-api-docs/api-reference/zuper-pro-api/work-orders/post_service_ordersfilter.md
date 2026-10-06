---
updatedAt: 2026-09-17T11:34:51.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Work Orders By Filter

Operates on Service Orders, shown in the Zuper client app as "Work Order" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain List endpoint, for building complex AND/OR filter conditions. `purchase_order_type` is enforced as a top-level query field (not injected into filter_rules) so it still binds correctly even when filter_rule_operator is "OR".

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
    "/service_orders/filter": {
      "post": {
        "summary": "Get Work Orders By Filter",
        "description": "Operates on Service Orders, shown in the Zuper client app as \"Work Order\" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. Rule-engine-based list endpoint — an alternative to the simple `filter.*` query params on the plain List endpoint, for building complex AND/OR filter conditions. `purchase_order_type` is enforced as a top-level query field (not injected into filter_rules) so it still binds correctly even when filter_rule_operator is \"OR\".",
        "operationId": "post_service_ordersfilter",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "page": {
                    "type": "string",
                    "default": "1"
                  },
                  "limit": {
                    "type": "string",
                    "default": "10",
                    "description": "Max 1000 — larger values are rejected with 400."
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
                      "purchase_order_title",
                      "purchase_order_number",
                      "updated_at",
                      "created_at",
                      "due_date",
                      "number_of_line_items",
                      "purchase_order_date"
                    ],
                    "description": "Invalid values are rejected with 400 \"Invalid Sort value\"."
                  },
                  "filter_rules": {
                    "type": "array",
                    "items": {
                      "type": "object"
                    },
                    "description": "Rule-engine condition list."
                  },
                  "filter_rule_operator": {
                    "type": "string",
                    "enum": [
                      "AND",
                      "OR"
                    ],
                    "default": "AND"
                  },
                  "cursor": {
                    "type": "string"
                  },
                  "prev_cursor": {
                    "type": "string"
                  },
                  "cursor_pagination": {
                    "type": "string",
                    "description": "Set to enable cursor-based pagination instead of offset pagination."
                  },
                  "fields_to_select": {
                    "type": "string",
                    "description": "Sparse fieldset selector."
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
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    },
                    "total_records": {
                      "type": "integer"
                    },
                    "current_page": {
                      "type": "integer"
                    },
                    "total_pages": {
                      "type": "integer"
                    },
                    "paging": {
                      "type": "object",
                      "description": "Present only when cursor_pagination is used.",
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