---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Vendor Bulk Action

Operates on Vendors. In the Zuper client app this module is labeled "Vendor" for most companies, and "Supplier" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Supports `activate`, `send_email`, `send_sms`, and `delete`. Activate/email are processed asynchronously by a background worker. Delete skips (and reports back) any record that is a favorite supplier or set as a product's preferred vendor.

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
    "/vendors/bulk_action": {
      "post": {
        "summary": "Vendor Bulk Action",
        "description": "Operates on Vendors. In the Zuper client app this module is labeled \"Vendor\" for most companies, and \"Supplier\" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Supports `activate`, `send_email`, `send_sms`, and `delete`. Activate/email are processed asynchronously by a background worker. Delete skips (and reports back) any record that is a favorite supplier or set as a product's preferred vendor.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "action"
                ],
                "properties": {
                  "vendor_uid": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "UIDs to target. Alternative to filter_rules."
                  },
                  "filter_rules": {
                    "type": "array",
                    "items": {
                      "type": "object"
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
                  "action": {
                    "type": "string",
                    "enum": [
                      "activate",
                      "send_email",
                      "send_sms",
                      "delete"
                    ]
                  },
                  "action_options": {
                    "type": "object",
                    "description": "Shape depends on `action`: `activate` → `{is_active: boolean}`; `send_email` → `{cc?: string[], bcc?: string[]}`; `send_sms` → `{sms_body: string}` (Handlebars template); `delete` → no fields."
                  },
                  "update_status": {
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
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "skipped_vendors": {
                      "type": "array",
                      "description": "Present only for action=delete.",
                      "items": {
                        "type": "object",
                        "properties": {
                          "vendor_uid": {
                            "type": "string"
                          },
                          "reason": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"SUCCESS\", \"title\": \"Bulk Action triggered Successfully\", \"message\": \"Bulk Action triggered Successfully\"}"
                  }
                }
              }
            }
          }
        },
        "operationId": "vendor-bulk-action"
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