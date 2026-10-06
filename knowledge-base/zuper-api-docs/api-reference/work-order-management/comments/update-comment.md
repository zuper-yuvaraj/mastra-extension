---
updatedAt: 2026-07-21T06:02:37.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Comment

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
    "/comments/{comment_uid}": {
      "put": {
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "comment_uid": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "required": [
                    "type"
                  ]
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "comment_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "summary": "Update Comment",
        "operationId": "put_comments-comment-uid",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "comment": {
                    "type": "string"
                  }
                },
                "required": [
                  "comment"
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