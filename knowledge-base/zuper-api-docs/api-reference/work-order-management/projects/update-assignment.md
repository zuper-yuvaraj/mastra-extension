---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Assignment

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
    "/projects/assign": {
      "post": {
        "summary": "Update Assignment",
        "description": "",
        "operationId": "update-assignment",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "project_uid",
                  "users"
                ],
                "properties": {
                  "project_uid": {
                    "type": "string"
                  },
                  "users": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "type": {
                          "type": "string",
                          "enum": [
                            "ASSIGN",
                            "UNASSIGN"
                          ]
                        },
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
                    "project_uid": "3b0a10d0-d541-11ee-a3c1-434f3a424c11",
                    "users": [
                      {
                        "type": "ASSIGN",
                        "team_uid": "75c131e5-9fdf-433b-8032-e5282750330b",
                        "user_uid": "d083c6cb-9202-41fc-8ae2-e986939c5471"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Project Assignment has been updated successfully\",\n    \"title\": \"Project Assignment updated\"\n}"
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
                      "example": "Project Assignment has been updated successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Project Assignment updated"
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Project Not found for given UID\",\n    \"title\": \"Project not found\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "message": {
                      "type": "string",
                      "example": "Project Not found for given UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "Project not found"
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