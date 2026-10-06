---
updatedAt: 2026-09-16T10:34:08.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Asset Bulk Action

Performs a bulk operation on assets. You must scope the action with at least one of asset_uid, filter, or filter_rules — if none are provided, the action applies to every asset in your company, including destructive actions like delete_assets.

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
    "/assets/bulk_action": {
      "post": {
        "summary": "Asset Bulk Action",
        "description": "Performs a bulk operation on assets. You must scope the action with at least one of asset_uid, filter, or filter_rules — if none are provided, the action applies to every asset in your company, including destructive actions like delete_assets.",
        "operationId": "asset-bulk-action",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "action",
                  "action_options"
                ],
                "properties": {
                  "action": {
                    "type": "string",
                    "enum": [
                      "update_field",
                      "update_status",
                      "send_qr_codes",
                      "delete_assets",
                      "activate",
                      "deactivate"
                    ],
                    "description": "Note: activate and deactivate are both handled by the same underlying logic. The actual effect is driven entirely by action_options.is_active (boolean) — sending action: \"activate\" with action_options.is_active: false will deactivate the matched assets."
                  },
                  "action_options": {
                    "type": "object",
                    "properties": {},
                    "description": "Options object whose required fields depend on action:\n\nupdate_field: either a custom_field object (label and value required, plus optional type, read_only, hide_to_fe, hide_field, group_uid, group_name), or any of the direct asset fields purchase_date, purchase_price, residual_price, warranty_expiry_date, useful_life, owned_by_customer, parent_asset, asset_code, asset_category, asset_product, asset_inspection_form.\nupdate_status: asset_status (required, one of READY_TO_INSTALL, INSTALLED, UNDER_SERVICE, REMOVED, OBSOLETE, ONLINE, OFFLINE, NEED_REPAIR) and optional remove_from_customer (boolean).\nsend_qr_codes / delete_assets: no fields required.\nactivate / deactivate: is_active (required boolean) — this, not the action string, determines whether assets are activated or deactivated."
                  },
                  "asset_uid": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Array of asset UIDs to target. Note the field name is singular (asset_uid) even though it holds a list — asset_uids is not recognized and will be silently ignored, causing the action to fall back to matching all assets. Optional if filter or filter_rules is provided instead."
                  },
                  "filter": {
                    "type": "object",
                    "properties": {},
                    "description": "Simple filter object as an alternative to asset_uid. Supports fields such as is_active, keyword, customer, asset_category, asset_status, owned_by_customer, warranty_from_date/warranty_to_date, placed_in_service_from/placed_in_service_to, property, organization, serial_no, custom_field, created_at."
                  },
                  "filter_rules": {
                    "type": "array",
                    "items": {
                      "properties": {},
                      "type": "object"
                    },
                    "description": "Advanced rule-engine filter, used as an alternative to asset_uid/filter. Each entry is a condition object (e.g. {\"field\": \"asset_uid\", \"operator\": \"IN\", \"value\": [\"...\"]}). When present and non-empty, this takes precedence and the request is evaluated via the rule engine."
                  },
                  "filter_rule_operator": {
                    "type": "string",
                    "description": "How multiple filter_rules entries are combined. Defaults to AND.",
                    "default": "AND",
                    "enum": [
                      "AND",
                      "OR"
                    ]
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
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"title\": \"Deleted Assets Successfully\", \"message\": \"Deleted Assets Successfully\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "success"
                      ],
                      "default": "success"
                    },
                    "title": {
                      "type": "string",
                      "description": "Varies by action performed — e.g. \"Deleted Assets Successfully\" for delete_assets, \"Assets Status updated successfully\" for update_status, \"Activated Assets Successfully\"/\"Deactivated Assets Successfully\" for activate/deactivate."
                    },
                    "message": {
                      "type": "string",
                      "description": "Typically identical to title for the given action."
                    }
                  },
                  "required": [
                    "type",
                    "title",
                    "message"
                  ]
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"error\", \"title\": \"Maximum Limit Exceeded\", \"message\": \"Asset limit exceeded, must be less than or equal to 1000\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "error"
                      ],
                      "default": "error"
                    },
                    "title": {
                      "type": "string",
                      "description": "Varies by failure: \"Maximum Limit Exceeded\" (bulk action limit exceeded), \"Invalid asset action\" (missing/unrecognized action), \"Invalid Status\" (bad asset_status), \"Missing Mandatory Fields\" (custom field update), \"Validation Error\" (invalid action_options.is_active), or an invalid-reference title for a bad parent_asset/asset_category/asset_product/asset_inspection_form UID."
                    },
                    "message": {
                      "type": "string",
                      "description": "Human-readable detail corresponding to the title."
                    },
                    "data": {
                      "type": "object",
                      "properties": {},
                      "description": "Present on some validation errors (e.g. invalid action_options.is_active) — additional error detail as a string."
                    }
                  },
                  "required": [
                    "type",
                    "message",
                    "title"
                  ]
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "default": "error",
                      "enum": [
                        "error"
                      ]
                    },
                    "title": {
                      "type": "string",
                      "default": "No Assets Found",
                      "enum": [
                        "No Assets Found"
                      ]
                    },
                    "message": {
                      "type": "string",
                      "enum": [
                        "No assets match for the applied filters"
                      ],
                      "default": "No assets match for the applied filters"
                    }
                  },
                  "required": [
                    "type",
                    "title",
                    "message"
                  ]
                }
              }
            }
          }
        },
        "deprecated": false
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