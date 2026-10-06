---
updatedAt: 2026-06-20T03:36:03.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Webhooks History

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
    "/service/notifications/webhook_history": {
      "get": {
        "summary": "Get Webhooks History",
        "description": "",
        "operationId": "get-all-webhook-history",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "count",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          },
          {
            "name": "filter.created_at",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.response_status",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "FAILURE",
                "SUCCESS"
              ]
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"webhook_history_uid\": \"xxx-xxx-xxx-xxx-xxx\",\n            \"response_status\": 200,\n            \"created_at\": \"2022-07-13T14:47:43.000Z\",\n            \"webhook\": {\n                \"webhook_uid\": \"xxx-xxx-xxx-xxx-xx\",\n                \"webhook_name\": \"xxx\",\n                \"webhook_module\": null,\n                \"webhook_url\": \"www.xxx.co\",\n                \"webhook_event\": \"test\",\n                \"content_type\": \"application/json\",\n                \"request_method\": \"POST\",\n                \"headers\": null\n            }\n        }\n    ],\n    \"total_pages\": 1,\n    \"current_page\": 1,\n    \"total_records\": 1\n}"
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
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "webhook_history_uid": {
                            "type": "string",
                            "example": "xxx-xxx-xxx-xxx-xxx"
                          },
                          "response_status": {
                            "type": "integer",
                            "example": 200,
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
                                "example": "xxx-xxx-xxx-xxx-xx"
                              },
                              "webhook_name": {
                                "type": "string",
                                "example": "xxx"
                              },
                              "webhook_module": {},
                              "webhook_url": {
                                "type": "string",
                                "example": "www.xxx.co"
                              },
                              "webhook_event": {
                                "type": "string",
                                "example": "test"
                              },
                              "content_type": {
                                "type": "string",
                                "example": "application/json"
                              },
                              "request_method": {
                                "type": "string",
                                "example": "POST"
                              },
                              "headers": {}
                            }
                          }
                        }
                      }
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
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
              "code": "curl --location '<base_url>/webhook_history?page=1&count=10' \\\n--header 'x-api-key: Bearer xxxxx.xxx.xx-xx'"
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