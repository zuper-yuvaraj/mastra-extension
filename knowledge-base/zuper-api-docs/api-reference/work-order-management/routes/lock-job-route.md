---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Lock Job Route

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
    "/routes/{route_uid}/lock": {
      "put": {
        "summary": "Lock Job Route",
        "description": "",
        "operationId": "lock-job-route",
        "parameters": [
          {
            "name": "route_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "is_locked",
            "in": "query",
            "schema": {
              "type": "boolean"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Route Unlocked Successfully\",\n    \"message\": \"Route unlocked successfully\",\n    \"data\": {\n        \"route_uid\": \"705f5064-c4fe-4f19-9784-fcee51c52fd2\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Route Unlocked Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Route unlocked successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "route_uid": {
                          "type": "string",
                          "example": "705f5064-c4fe-4f19-9784-fcee51c52fd2"
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Invalid Request\",\n    \"message\": \"Invalid is_locked value\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Invalid Request"
                    },
                    "message": {
                      "type": "string",
                      "example": "Invalid is_locked value"
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