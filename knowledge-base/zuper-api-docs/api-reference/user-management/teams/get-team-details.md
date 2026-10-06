---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Team Details

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
    "/team/{team_uid}": {
      "get": {
        "summary": "Get Team Details",
        "description": "",
        "operationId": "get-team-details",
        "parameters": [
          {
            "name": "team_uid",
            "in": "path",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"team\": {\n            \"team_uid\": \"18cada40-021b-11e8-8127-43a5add1a9e2\",\n            \"company_id\": 1,\n            \"team_name\": \"SF Team\",\n            \"team_description\": \"This team covers 603211, 603222, 603223\",\n            \"team_color\": \"#3498db\",\n            \"team_timezone\": \"\",\n            \"user_count\": 0,\n            \"created_by\": null,\n            \"is_active\": 1,\n            \"is_deleted\": 0,\n            \"created_at\": \"2018-01-25T22:00:03.000Z\",\n            \"updated_at\": \"2023-10-12T11:35:18.000Z\"\n        },\n        \"users\": []\n    }\n}"
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
                      "type": "object",
                      "properties": {
                        "team": {
                          "type": "object",
                          "properties": {
                            "team_uid": {
                              "type": "string",
                              "example": "18cada40-021b-11e8-8127-43a5add1a9e2"
                            },
                            "company_id": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "team_name": {
                              "type": "string",
                              "example": "SF Team"
                            },
                            "team_description": {
                              "type": "string",
                              "example": "This team covers 603211, 603222, 603223"
                            },
                            "team_color": {
                              "type": "string",
                              "example": "#3498db"
                            },
                            "team_timezone": {
                              "type": "string",
                              "example": ""
                            },
                            "user_count": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "created_by": {},
                            "is_active": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "is_deleted": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "is_dispatchable": {
                              "type": "boolean"
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2018-01-25T22:00:03.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-10-12T11:35:18.000Z"
                            }
                          }
                        },
                        "users": {
                          "type": "array"
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
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "type": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\",\n          \"info\":\"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "info": {
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