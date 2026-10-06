---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Asset Action

Records an action against an asset (e.g. INSTALL, REMOVE, REPLACE, a status change). This is what populates Asset History. `REPLACE` creates two history rows: a REMOVE on this asset and an INSTALL on `meta_data.replaced_asset`.

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
    "/assets/{asset_uid}/actions": {
      "post": {
        "summary": "Create Asset Action",
        "description": "Records an action against an asset (e.g. INSTALL, REMOVE, REPLACE, a status change). This is what populates Asset History. `REPLACE` creates two history rows: a REMOVE on this asset and an INSTALL on `meta_data.replaced_asset`.",
        "operationId": "create-asset-action",
        "parameters": [
          {
            "name": "asset_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "action": {
                    "properties": {
                      "action_type": {
                        "type": "string",
                        "enum": [
                          "INSTALL",
                          "REMOVE",
                          "REPLACE",
                          "OBSOLETE",
                          "UNDER_SERVICE",
                          "PRODUCT_UPDATE",
                          "PART_UPDATE",
                          "SERIAL_NUMBER_UPDATE",
                          "STATUS_UPDATE",
                          "ONLINE",
                          "OFFLINE",
                          "NEED_REPAIR"
                        ]
                      },
                      "job": {
                        "type": "string"
                      },
                      "customer": {
                        "type": "string"
                      },
                      "organization": {
                        "type": "string"
                      },
                      "product": {
                        "type": "string"
                      },
                      "meta_data": {
                        "type": "object",
                        "description": "Only relevant for action_type=REPLACE (replaced_asset/replaced_product) or STATUS_UPDATE (updated_status).",
                        "properties": {
                          "replaced_serial_number": {
                            "type": "string"
                          },
                          "replaced_asset": {
                            "type": "string",
                            "description": "Asset UID. For REPLACE, this creates a REMOVE history row on this asset and an INSTALL row on the new asset."
                          },
                          "replaced_product": {
                            "type": "string"
                          },
                          "updated_status": {
                            "type": "string",
                            "enum": [
                              "READY_TO_INSTALL",
                              "INSTALLED",
                              "UNDER_SERVICE",
                              "REMOVED",
                              "OBSOLETE",
                              "ONLINE",
                              "OFFLINE",
                              "NEED_REPAIR"
                            ]
                          }
                        }
                      },
                      "property": {
                        "type": "string"
                      },
                      "attachments": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "attachment_name": {
                              "type": "string"
                            },
                            "attachment": {
                              "type": "string"
                            },
                            "attachment_type": {
                              "type": "string",
                              "enum": [
                                "TEXT",
                                "AUDIO",
                                "VIDEO",
                                "IMAGE",
                                "DOCUMENT"
                              ]
                            },
                            "attachment_size": {
                              "type": "integer",
                              "format": "int32"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "remove_from_customer": {
                        "type": "boolean"
                      }
                    },
                    "required": [],
                    "type": "object"
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
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"message\": \"Asset action added successfully\"}"
                  }
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