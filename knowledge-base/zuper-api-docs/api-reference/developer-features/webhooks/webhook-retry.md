---
updatedAt: 2026-06-20T03:34:27.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Webhook Retry

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
    "/service/notifications/webhook/{webhook_history_uid}/retry": {
      "post": {
        "summary": "Webhook Retry",
        "description": "",
        "operationId": "webhook-retry",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "path",
            "name": "webhook_history_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Webhook Retriggered\",\n    \"data\": {\n        \"webhook_history_uid\": \"xxx-xxx-xxx-xxx-xxx\",\n        \"ip\": \"\",\n        \"response_status\": 200,\n        \"request_body\": \"{\\n    \\\"webhook_name\\\": \\\"xxx\\\",\\n    \\\"webhook_event\\\": \\\"xxx\\\",\\n    \\\"webhook_url\\\": \\\"www.xxxx.co\\\",\\n    \\\"content_type\\\": \\\"application/json\\\",\\n    \\\"request_method\\\": \\\"POST\\\"\\n}\",\n        \"response_body\": \"{\\\"webhook_uid\\\":\\\"xxx-xxx-xxx-xxx-xxx\\\"}\",\n        \"type\": \"MANUALLY_TRIGGERED\",\n        \"attempt_no\": 6,\n        \"created_at\": \"2022-07-13T14:47:43.000Z\",\n        \"webhook\": {\n            \"webhook_uid\": \"xxx-xxx-xxx-xxx-xxx\",\n            \"webhook_name\": \"xxxx\",\n            \"webhook_module\": null,\n            \"webhook_url\": \"xxxxxxx\",\n            \"webhook_event\": \"xxxx\",\n            \"content_type\": \"application/json\",\n            \"request_method\": \"PUT\",\n            \"headers\": \"{\\n    \\\"Authorization\\\": \\\"Bearer xxxx.xxxx.xxxx\\\"\\n  }\"\n        }\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Webhook Retriggered"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "webhook_history_uid": {
                          "type": "string",
                          "example": "xxx-xxx-xxx-xxx-xxx"
                        },
                        "ip": {
                          "type": "string",
                          "example": ""
                        },
                        "response_status": {
                          "type": "integer",
                          "example": 200,
                          "default": 0
                        },
                        "request_body": {
                          "type": "string",
                          "example": "{\n    \"webhook_name\": \"xxx\",\n    \"webhook_event\": \"xxx\",\n    \"webhook_url\": \"www.xxxx.co\",\n    \"content_type\": \"application/json\",\n    \"request_method\": \"POST\"\n}"
                        },
                        "response_body": {
                          "type": "string",
                          "example": "{\"webhook_uid\":\"xxx-xxx-xxx-xxx-xxx\"}"
                        },
                        "type": {
                          "type": "string",
                          "example": "MANUALLY_TRIGGERED"
                        },
                        "attempt_no": {
                          "type": "integer",
                          "example": 6,
                          "default": 0
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2022-07-13T14:47:43.000Z"
                        },
                        "webhook": {
                          "type": "object",
                          "properties": {
                            "webhook_uid": {
                              "type": "string",
                              "example": "xxx-xxx-xxx-xxx-xxx"
                            },
                            "webhook_name": {
                              "type": "string",
                              "example": "xxxx"
                            },
                            "webhook_module": {},
                            "webhook_url": {
                              "type": "string",
                              "example": "xxxxxxx"
                            },
                            "webhook_event": {
                              "type": "string",
                              "example": "xxxx"
                            },
                            "content_type": {
                              "type": "string",
                              "example": "application/json"
                            },
                            "request_method": {
                              "type": "string",
                              "example": "PUT"
                            },
                            "headers": {
                              "type": "string",
                              "example": "{\n    \"Authorization\": \"Bearer xxxx.xxxx.xxxx\"\n  }"
                            }
                          }
                        }
                      }
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
              "code": "curl --location --request POST '<base_url>/webhook/xxx-xxx-xxx-xxx-xxx/retry' \\\n--header 'x-api-key: Bearer xxx.xxx.xxx'"
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