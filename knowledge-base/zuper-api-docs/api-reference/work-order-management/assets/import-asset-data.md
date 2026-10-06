---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Import Asset Data

Bulk-imports assets from an uploaded Excel file (multipart/form-data). `unique_field_name` is required and determines which field is used to detect duplicates.

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
    "/imports/asset": {
      "post": {
        "summary": "Import Asset Data",
        "description": "Bulk-imports assets from an uploaded Excel file (multipart/form-data). `unique_field_name` is required and determines which field is used to detect duplicates.",
        "operationId": "import-asset-data",
        "parameters": [
          {
            "name": "conflict_resolution",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "SKIP",
                "MERGE"
              ]
            }
          },
          {
            "name": "unique_field_type",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "DEFAULT_FIELD",
                "CUSTOM_FIELD"
              ]
            }
          },
          {
            "name": "unique_field_name",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string",
                    "format": "binary"
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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