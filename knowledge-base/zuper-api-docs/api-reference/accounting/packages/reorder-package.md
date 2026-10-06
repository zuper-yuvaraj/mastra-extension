---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reorder Packages

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
    "/invoice_estimate/package/reorder": {
      "post": {
        "summary": "Reorder Packages",
        "description": "",
        "operationId": "reorder-package",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "array"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": [
                    {
                      "package_uid": "72e0b360-3c21-11ee-82aa-858410f587b5",
                      "display_order": 1
                    },
                    {
                      "package_uid": "7fbaf410-3c21-11ee-82aa-858410f587b5",
                      "display_order": 2
                    },
                    {
                      "package_uid": "87f91760-3c21-11ee-82aa-858410f587b5",
                      "display_order": 3
                    },
                    {
                      "package_uid": "792462c0-4262-11ee-b1a1-7372ef614376",
                      "display_order": 4
                    },
                    {
                      "package_uid": "bbad8ba0-426f-11ee-b1a1-7372ef614376",
                      "display_order": 5
                    }
                  ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Invoice Estimate Package Order Updated\",\n    \"message\": \"Invoice Estimate Package Order has been updated successfully\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Invoice Estimate Package Order Updated"
                    },
                    "message": {
                      "type": "string",
                      "example": "Invoice Estimate Package Order has been updated successfully"
                    }
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