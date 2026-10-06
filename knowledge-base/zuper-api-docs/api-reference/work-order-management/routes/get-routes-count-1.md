---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Routes Count

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
    "/routes/count": {
      "get": {
        "summary": "Get Routes Count",
        "description": "",
        "operationId": "get-routes-count-1",
        "parameters": [
          {
            "name": "from_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "to_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "timezone",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.team_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.user_uid",
            "in": "query",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"job_routes\": 5,\n            \"date\": \"2024-09-15\"\n        },\n        {\n            \"job_routes\": 12,\n            \"date\": \"2024-09-16\"\n        },\n        {\n            \"job_routes\": 15,\n            \"date\": \"2024-09-17\"\n        },\n        {\n            \"job_routes\": 15,\n            \"date\": \"2024-09-18\"\n        },\n        {\n            \"job_routes\": 15,\n            \"date\": \"2024-09-19\"\n        }\n    ]\n}"
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
                          "job_routes": {
                            "type": "integer",
                            "example": 5,
                            "default": 0
                          },
                          "date": {
                            "type": "string",
                            "example": "2024-09-15"
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
                    "value": "{\n    \"message\": \"From / To Date Missing\",\n    \"title\": \"Missing From Date / To Date\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "From / To Date Missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing From Date / To Date"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false
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