---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Add Users To Stream Channel

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
    "/stream/channels/add_user": {
      "post": {
        "description": "",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "default": "success"
                    },
                    "message": {
                      "type": "string",
                      "default": "Users added to Stream channel successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "channel": {
                          "type": "string"
                        },
                        "users_added": {
                          "type": "number"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "module_uid": {
                    "type": "string"
                  },
                  "type": {
                    "type": "string",
                    "enum": [
                      "JOB",
                      "CHANNEL"
                    ]
                  },
                  "users": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "user_uid": {
                          "type": "string"
                        },
                        "role": {
                          "type": "string",
                          "enum": [
                            "channel_member",
                            "channel_moderator"
                          ],
                          "default": "channel_member"
                        }
                      },
                      "type": "object",
                      "required": [
                        "user_uid"
                      ]
                    }
                  }
                },
                "required": [
                  "module_uid",
                  "type",
                  "users"
                ]
              }
            }
          }
        },
        "operationId": "post_stream-channels-add-user",
        "summary": "Add Users To Stream Channel"
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