---
updatedAt: 2026-07-21T06:02:37.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Comment

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
      "post": {
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "comment_uid": {
                          "type": "string"
                        },
                        "created_at": {
                          "type": "string"
                        },
                        "updated_at": {
                          "type": "string"
                        }
                      }
                    },
                    "message": {
                      "type": "string",
                      "default": ""
                    },
                    "type": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [],
        "operationId": "post_comments",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "module": {
                    "type": "string",
                    "enum": [
                      "ATTACHMENT"
                    ]
                  },
                  "module_uid": {
                    "type": "string"
                  },
                  "comment": {
                    "type": "string"
                  },
                  "attachment_uid": {
                    "type": "string"
                  },
                  "attachment_path": {
                    "type": "string"
                  }
                },
                "required": [
                  "comment"
                ]
              }
            }
          }
        },
        "summary": "Create Comment"
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