---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reorder Jobs In Route

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
    "/routes/{route_uid}/reorder": {
      "put": {
        "summary": "Reorder Jobs In Route",
        "description": "",
        "operationId": "reorder-jobs-in-route",
        "parameters": [
          {
            "name": "route_uid",
            "in": "path",
            "description": "uid of route",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "jobs": {
                    "type": "array"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "jobs": [
                      {
                        "job_uid": "a2b33c40-c405-11ee-8f88-37878a3b3696"
                      },
                      {
                        "job_uid": "3759ecd0-7f9c-11ee-93cb-5be0a22f4e69"
                      },
                      {
                        "job_uid": "e18980f7-a910-4c7b-a5db-023997d826d4"
                      },
                      {
                        "job_uid": "4c4023ea-ad92-4e54-966b-e06be95b9c4c"
                      }
                    ]
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
                    "value": "{\n    \"message\": \"Jobs reordered successfully for route\",\n    \"title\": \"Jobs reordered successfully\",\n    \"type\": \"success\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Jobs reordered successfully for route"
                    },
                    "title": {
                      "type": "string",
                      "example": "Jobs reordered successfully"
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
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"message\": \"No job route found for the given job route UID\",\n    \"title\": \"No job route found for the given job route UID\",\n    \"type\": \"error\"\n}"
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
                      "example": "No job route found for the given job route UID"
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