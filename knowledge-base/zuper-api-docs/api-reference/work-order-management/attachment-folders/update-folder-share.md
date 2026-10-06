---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /attachments/folders/{folder_uid}/share/{share_uid}

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
    "/attachments/folders/{folder_uid}/share/{share_uid}": {
      "put": {
        "description": "",
        "operationId": "put_attachmentsfolders{folder_uid}share{share_uid}",
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
                      "title": "Folder share updated successfully",
                      "message": "Folder share updated successfully",
                      "data": {
                        "share_uid": "932d497b-4b3d-a27d-c38cc0e86617",
                        "share_link": "XXXX",
                        "expires_at": "2025-12-27T00:00:00.000Z",
                        "is_expired": false
                      }
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
            "name": "share_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "folder_uid",
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
                  "expires_at": {
                    "type": "string",
                    "format": "date"
                  }
                }
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