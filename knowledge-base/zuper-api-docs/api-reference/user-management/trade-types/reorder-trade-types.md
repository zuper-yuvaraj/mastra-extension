---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /business_units/reorder

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
    "/business_units/reorder": {
      "put": {
        "description": "",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "title": "Trade Type reordered successfully",
                      "message": "Trade Type reordered successfully"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                },
                "examples": {
                  "Internal Server Error": {
                    "summary": "Internal Server Error",
                    "value": {
                      "type": "error",
                      "title": "Error in reordering Trade Type",
                      "message": "Error in reordering Trade Type"
                    }
                  }
                }
              }
            },
            "description": "Internal Server Error"
          }
        },
        "parameters": [],
        "operationId": "put_business-units-reorder",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "business_units": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "bu_uid": {
                          "type": "string"
                        },
                        "display_order": {
                          "type": "number"
                        }
                      },
                      "type": "object",
                      "required": [
                        "bu_uid",
                        "display_order"
                      ]
                    }
                  }
                },
                "required": [
                  "business_units"
                ]
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