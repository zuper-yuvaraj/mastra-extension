---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /attachments/folders/{folder_uid}/share

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
    "/attachments/folders/{folder_uid}/share": {
      "get": {
        "description": "",
        "operationId": "get_attachmentsfolders{folder_uid}share",
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
                      "title": "Folder shares fetched successfully",
                      "message": "Folder shares fetched successfully",
                      "data": [
                        {
                          "share_uid": "932d497b-c691-a27d-c38cc0e86617",
                          "send_to": {
                            "to": [
                              "zuper@gmail.com"
                            ],
                            "via": "EMAIL"
                          },
                          "share_link": "XXXXXX",
                          "expires_at": "2025-12-27T00:00:00.000Z",
                          "is_expired": 0,
                          "created_by": {
                            "name": "Jayasoorya R",
                            "email": "jayasoorya.r@zuper.co"
                          },
                          "created_at": "2025-11-26T12:42:21.000Z",
                          "updated_at": "2025-11-26T12:42:21.000Z"
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
                    "value": {
                      "type": "error",
                      "title": "Internal Server Error",
                      "message": "Internal Server Error"
                    }
                  }
                }
              }
            },
            "description": "Internal Server Error"
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "folder_uid",
            "schema": {
              "type": "string",
              "default": ""
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