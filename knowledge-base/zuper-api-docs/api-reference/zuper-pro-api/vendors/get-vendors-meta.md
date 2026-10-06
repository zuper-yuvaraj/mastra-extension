---
updatedAt: 2026-10-02T15:58:55.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Vendors Meta

Operates on Vendors. In the Zuper client app this module is labeled "Vendor" for most companies, and "Supplier" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Returns the column/field configuration used to render this module's list view — display labels, sort/lock/edit capability, and redirect targets per field, including custom fields (scoped separately per module: `VENDOR` vs `SUBCONTRACTOR`).

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
    "/vendors/meta": {
      "get": {
        "summary": "Get Vendors Meta",
        "description": "Operates on Vendors. In the Zuper client app this module is labeled \"Vendor\" for most companies, and \"Supplier\" for companies in the roofing industry — the API and data shape are identical either way. Vendors and Subcontractors share the exact same underlying schema and endpoints; they're distinguished only by the `vendor_type` field (`VENDOR` here) and the `/vendors` vs `/subcontractors` route prefix. Returns the column/field configuration used to render this module's list view — display labels, sort/lock/edit capability, and redirect targets per field, including custom fields (scoped separately per module: `VENDOR` vs `SUBCONTRACTOR`).",
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
                        "type": "object",
                        "properties": {
                          "display_name": {
                            "type": "string"
                          },
                          "display_key": {
                            "type": "string"
                          },
                          "data_key": {
                            "type": "string"
                          },
                          "field_type": {
                            "type": "string"
                          },
                          "data_type": {
                            "type": "string"
                          },
                          "display_type": {
                            "type": "string"
                          },
                          "is_sortable": {
                            "type": "boolean"
                          },
                          "is_locked": {
                            "type": "boolean"
                          },
                          "allow_editing": {
                            "type": "boolean"
                          },
                          "combine_with": {
                            "type": "string"
                          },
                          "checked": {
                            "type": "boolean"
                          },
                          "redirect": {
                            "type": "object",
                            "properties": {
                              "is_enabled": {
                                "type": "boolean"
                              },
                              "module": {
                                "type": "string"
                              },
                              "data_key": {
                                "type": "string"
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
        "operationId": "get-vendors-meta"
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