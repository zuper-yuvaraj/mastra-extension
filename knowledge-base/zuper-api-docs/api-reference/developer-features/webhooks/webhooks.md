---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Webhooks

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
    "/service/notifications/webhook": {
      "get": {
        "summary": "Get Webhooks",
        "description": "",
        "operationId": "webhooks",
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
            "name": "filter.webhook_module",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.webhook_event",
            "in": "query",
            "schema": {
              "type": "string"
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"webhook_uid\": \"xxxxxxxxxxxxxxx\",\n            \"webhook_url\": \"xx.xx.co\",\n            \"webhook_event\": \"xxx\",\n            \"webhook_name\": \"xxx\",\n            \"webhook_module\": null,\n          \t\"secret_key\": \"xxxxxxxxxxxxxxxxx\",\n            \"is_active\": true,\n            \"content_type\": \"application/json\",\n            \"request_method\": \"POST\",\n            \"headers\": null,\n            \"created_at\": \"2022-07-12T09:45:37.000Z\"\n        },\n   \t\t\t....\n    ],\n    \"total_pages\": 2,\n    \"current_page\": 1,\n    \"total_records\": 5\n}"
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
              "code": "curl --location '<base_url>/webhooks?page=1&count=10&filter.webhook_event=' \\\n--header 'x-api-key : xxxxxxxxxxxxxx'"
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