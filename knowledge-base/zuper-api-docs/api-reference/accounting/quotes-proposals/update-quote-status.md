---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Proposal Status

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
    "/estimate/{estimate_uid}/status": {
      "put": {
        "summary": "Update Proposal Status",
        "description": "",
        "operationId": "update-proposal-status",
        "parameters": [
          {
            "name": "estimate_uid",
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
                  "estimate_status": {
                    "type": "string",
                    "enum": [
                      "DRAFT",
                      "AWAIT_RESPONSE",
                      "APPROVED",
                      "DECLINED",
                      "ARCHIVED",
                      "CLOSED",
                      "CANCELED",
                      "REQUEST_CHANGE"
                    ]
                  },
                  "estimate_uid": {
                    "type": "string"
                  },
                  "customer_signature": {
                    "type": "string"
                  },
                  "remarks": {
                    "type": "string"
                  },
                  "line_items_status": {
                    "type": "string"
                  },
                  "deposit": {
                    "type": "string"
                  },
                  "option_uid": {
                    "type": "string"
                  },
                  "addons": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "line_item_uid": {
                          "type": "string"
                        },
                        "product_uid": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "line_item_uid",
                        "product_uid"
                      ],
                      "type": "object"
                    }
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Quote Status Updated\",\n  \"data\": {\n    \"estimate_uid\": \"28c3d4e0-95a1-11ee-98bc-e77b9b7b972c\"\n  }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Quote Status Updated"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "estimate_uid": {
                          "type": "string",
                          "example": "28c3d4e0-95a1-11ee-98bc-e77b9b7b972c"
                        }
                      }
                    }
                  }
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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