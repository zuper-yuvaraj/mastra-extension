---
updatedAt: 2026-07-21T06:02:37.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Comments

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
    "/comments": {
      "get": {
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "format": "json"
                      }
                    },
                    "current_page": {
                      "type": "number"
                    },
                    "total_pages": {
                      "type": "number"
                    },
                    "type": {
                      "type": "string"
                    },
                    "total_records": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "data"
                  ]
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "query",
            "name": "page",
            "schema": {
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "count",
            "schema": {
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "sort",
            "schema": {
              "type": "string",
              "enum": [
                "DESC",
                "ASC"
              ]
            }
          },
          {
            "in": "query",
            "name": "filter.module",
            "schema": {
              "type": "string",
              "enum": [
                "ATTACHMENT"
              ]
            }
          },
          {
            "in": "query",
            "name": "filter.module_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.attachment_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.attachment_path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "summary": "Get Comments",
        "operationId": "get_comments"
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