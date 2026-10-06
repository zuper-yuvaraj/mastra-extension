---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Webhook Details

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
    "/service/notifications/webhook/{webhook_uid}": {
      "get": {
        "summary": "Get Webhook Details",
        "description": "",
        "operationId": "get-webhook-by-uid",
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
            "name": "webhook_uid",
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
                    "value": "{}{\n    \"type\": \"success\",\n    \"data\": {\n        \"webhook_uid\": \"xxx-xx-xx-xx-xx\",\n        \"webhook_url\": \"xx.xxx.co\",\n        \"webhook_event\": \"xxx\",\n        \"webhook_name\": \"xxx\",\n        \"webhook_module\": null,\n        \"secret_key\": \"xxxxxxxxxxxxxxxxx\",\n        \"is_active\": true,\n        \"content_type\": \"application/json\",\n        \"request_method\": \"POST\",\n        \"headers\": null,\n        \"created_at\": \"2022-07-12T09:45:37.000Z\"\n    }\n}"
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
              "code": "curl --location '<base_url>/webhook/xxx-xxx-xxx-xxx-xxx' \\\n--header 'x-api-key: xxxxxxxxxxxx'"
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