---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Send Message To Stream Channel

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
    "/stream/message/send": {
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
                      "default": "Messages sent successfully"
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [],
        "operationId": "post_stream-message-send",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "receiver_uid": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "action_type": {
                    "type": "string",
                    "enum": [
                      "USER",
                      "JOB",
                      "GENERAL",
                      "CHANNEL"
                    ]
                  },
                  "message": {
                    "type": "string"
                  }
                },
                "required": [
                  "receiver_uid",
                  "action_type",
                  "message"
                ]
              }
            }
          }
        },
        "summary": "Send Message To Stream Channel"
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