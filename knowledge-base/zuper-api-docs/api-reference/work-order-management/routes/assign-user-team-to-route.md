---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Assign User Team To Route

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
    "/routes/{route_uid}/assign": {
      "post": {
        "summary": "Assign User Team To Route",
        "description": "",
        "operationId": "assign-user-team-to-route",
        "parameters": [
          {
            "name": "route_uid",
            "in": "path",
            "description": "uid route uid",
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
                  "users": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "user_uid": {
                          "type": "string"
                        },
                        "team_uid": {
                          "type": "string"
                        }
                      },
                      "type": "object"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "users": [
                      {
                        "team_uid": "8cada40-021b-11e8-8127-43a5add1a9e2",
                        "user_uid": "c425fe39-2309-4d2b-87b8-5b4b65546ccb"
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
                    "value": "{\n    \"message\": \"User Teams added successfully\",\n    \"title\": \"User Teams added successfully\",\n    \"type\": \"success\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "User Teams added successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "User Teams added successfully"
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
                    "value": "{\n    \"message\": \"No team found\",\n    \"title\": \"No team found\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "No team found"
                    },
                    "title": {
                      "type": "string",
                      "example": "No team found"
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