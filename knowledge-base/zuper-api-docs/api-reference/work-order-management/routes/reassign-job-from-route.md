---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reassign Job From Route

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
    "/routes/{route_uid}/reassign": {
      "post": {
        "summary": "Reassign Job From Route",
        "description": "",
        "operationId": "reassign-job-from-route",
        "parameters": [
          {
            "name": "route_uid",
            "in": "path",
            "description": "uid of route",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "assign_route_users",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "job_uid",
                  "route_uid"
                ],
                "properties": {
                  "job_uid": {
                    "type": "string"
                  },
                  "route_uid": {
                    "type": "string",
                    "description": "uid of route going to reassign job"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "route_uid": "f8654684-8217-4c22-9793-b4a28bbbc0c1",
                    "job_uid": "499f7d6f-c45a-471c-b9d1-9b936dfeb0be",
                    "assign_route_users": true
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
                    "value": "{\n    \"message\": \"Job reassigned successfully\",\n    \"title\": \"Job reassigned successfully\",\n    \"type\": \"success\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Job reassigned successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job reassigned successfully"
                    },
                    "type": {
                      "type": "string",
                      "example": "success"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"message\": \"No job route found for the given job route UID\",\n    \"title\": \"No job route found\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "No job route found for the given job route UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "No job route found"
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