---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /attachments/folders

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
    "/attachments/folders": {
      "get": {
        "description": "",
        "operationId": "get_new-endpoint-1",
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
                      "title": "Folders fetched successfully",
                      "message": "Folders fetched successfully",
                      "data": [
                        {
                          "folder_uid": "d92db559-4737-9da5-b51993166ddb",
                          "folder_name": "Test Folder ",
                          "module": "JOB",
                          "module_uid": "c5526bff-4621-a240-f00e48389ac0",
                          "attachment_count": 0,
                          "is_shared": false,
                          "created_at": "2025-11-26T11:38:29.000Z",
                          "updated_at": "2025-11-26T11:38:29.000Z",
                          "share_stats": {
                            "total_shares": 0,
                            "active_shares": 0,
                            "total_recipients": 0
                          }
                        }
                      ]
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
                    "value": "{\n  \"type\": \"error\",\n  \"title\": \"Internal Server Error\",\n  \"message\": \"Internal Server Error\",\n}"
                  }
                }
              }
            },
            "description": "Internal Server Error"
          }
        },
        "parameters": [
          {
            "in": "query",
            "name": "page",
            "schema": {
              "type": "number",
              "default": "1"
            }
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "number",
              "default": "10"
            }
          },
          {
            "in": "query",
            "name": "sort",
            "schema": {
              "type": "string",
              "enum": [
                "created_at",
                "folder_name",
                "attachment_count"
              ],
              "default": "created_at"
            }
          },
          {
            "in": "query",
            "name": "sort_order",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "default": "DESC"
            }
          },
          {
            "in": "query",
            "name": "filter.module",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "query",
            "name": "filter.module_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ]
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