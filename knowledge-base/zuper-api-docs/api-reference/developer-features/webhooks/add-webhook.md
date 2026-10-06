---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create a Webhook

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
    "/webhook": {
      "post": {
        "summary": "Create a Webhook",
        "description": "",
        "operationId": "add-webhook",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
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
                  "web_hook": {
                    "properties": {
                      "webhook_name": {
                        "type": "string"
                      },
                      "webhook_event": {
                        "type": "string"
                      },
                      "webhook_url": {
                        "type": "string"
                      },
                      "content_type": {
                        "type": "string"
                      },
                      "request_method": {
                        "type": "string"
                      },
                      "webhook_module": {
                        "type": "string"
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Object"
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"webhook_uid\": \"xxx-xxx-xxxx-xxx-xxx\"\n    },\n    \"message\": \"Webhook created successfully\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "webhook_uid": {
                          "type": "string",
                          "example": "xxx-xxx-xxxx-xxx-xxx"
                        }
                      }
                    },
                    "message": {
                      "type": "string",
                      "example": "Webhook created successfully"
                    }
                  }
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "curl --location '<base_url>/webhook' \\\n--header 'x-api-key: xxxxxxxxx' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"web_hook\": {\n        \"webhook_name\": \"xxxxx\",\n        \"webhook_event\": \"xxxx\",\n        \"webhook_url\": \"xx.xx.co\",\n        \"content_type\": \"application/json\",\n        \"request_method\": \"POST\",\n        \"webhook_module\": \"webhook_module\"\n    }\n}'"
            }
          ],
          "samples-languages": [
            "curl"
          ]
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