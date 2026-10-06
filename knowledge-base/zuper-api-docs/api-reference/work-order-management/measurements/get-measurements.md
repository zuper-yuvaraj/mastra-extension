---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Measurements

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
    "/measurements": {
      "get": {
        "description": "",
        "operationId": "get_measurements",
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
                    "data": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "measurement_uid": {
                            "type": "string"
                          },
                          "measurement_provider": {
                            "type": "object",
                            "properties": {}
                          },
                          "measurement_name": {
                            "type": "string"
                          },
                          "measurement_status": {
                            "type": "string"
                          },
                          "measurement_address": {
                            "type": "object",
                            "properties": {}
                          },
                          "measurement_data": {
                            "type": "array",
                            "items": {
                              "properties": {},
                              "type": "object"
                            }
                          },
                          "attachments": {
                            "type": "array",
                            "items": {
                              "properties": {},
                              "type": "object"
                            }
                          },
                          "ordered_at": {
                            "type": "string"
                          },
                          "created_at": {
                            "type": "string"
                          },
                          "updated_at": {
                            "type": "string"
                          }
                        },
                        "type": "object"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "query",
            "name": "sort",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "default": "DESC"
            },
            "description": "Sort"
          },
          {
            "in": "query",
            "name": "sort_by",
            "schema": {
              "type": "string",
              "enum": [
                "measurement_name",
                "created_at",
                "ordered_at",
                "completed_at"
              ],
              "default": "created_at"
            }
          },
          {
            "in": "query",
            "name": "filter.job_uid",
            "schema": {
              "type": "string"
            },
            "required": true,
            "description": "Job UID"
          }
        ],
        "summary": "Get Measurements"
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