---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Assign Service Task

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
    "/service_tasks/{service_task_uid}/assign": {
      "put": {
        "summary": "Assign Service Task",
        "description": "",
        "operationId": "assign-service-task",
        "parameters": [
          {
            "name": "service_task_uid",
            "in": "path",
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
                  "type": {
                    "type": "string",
                    "enum": [
                      "ASSIGN",
                      "UNASSIGN"
                    ]
                  },
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
                  },
                  "notify_users": {
                    "type": "boolean"
                  },
                  "assign_type": {
                    "type": "string",
                    "enum": [
                      "REPLACE"
                    ]
                  }
                }
              },
              "examples": {
                "Assign": {
                  "value": {
                    "type": "ASSIGN",
                    "users": [
                      {
                        "team_uid": "efe3be50-02e0-11e8-8137-412322b72cf4",
                        "user_uid": "fea19530-406f-11e8-b99a-59f39b812a88"
                      },
                      {
                        "team_uid": "9bcbcdf6-b728-469f-a784-26d90ed1921d",
                        "user_uid": "ad72a716-ad0b-4132-86b5-455bf96b7606"
                      }
                    ],
                    "notify_users": true,
                    "assign_type": ""
                  }
                },
                "Unassign": {
                  "value": {
                    "type": "UNASSIGN",
                    "users": [
                      {
                        "team_uid": "efe3be50-02e0-11e8-8137-412322b72cf4",
                        "user_uid": "fea19530-406f-11e8-b99a-59f39b812a88"
                      },
                      {
                        "team_uid": "9bcbcdf6-b728-469f-a784-26d90ed1921d",
                        "user_uid": "ad72a716-ad0b-4132-86b5-455bf96b7606"
                      }
                    ],
                    "notify_users": true,
                    "assign_type": ""
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Service Task has been updated successfully\",\n    \"title\": \"Service Task Assignment updated\"\n}"
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
                      "example": "Service Task has been updated successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Service Task Assignment updated"
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
                    "value": "{\n    \"type\": \"\",\n    \"title\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "401",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
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