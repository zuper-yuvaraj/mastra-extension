---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create User Skills

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
    "/users/{user_uid}/skill": {
      "post": {
        "summary": "Create User Skills",
        "description": "",
        "operationId": "create-user-skills",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_skill": {
                    "properties": {
                      "skillset_uid": {
                        "type": "string"
                      },
                      "user_uid": {
                        "type": "string"
                      },
                      "skill_level": {
                        "type": "integer",
                        "default": 100,
                        "format": "int32"
                      },
                      "start_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "end_date": {
                        "type": "string",
                        "format": "date"
                      }
                    },
                    "required": [
                      "skillset_uid",
                      "user_uid"
                    ],
                    "type": "object"
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
                    "value": "{\n      \"type\": \"success\",\n      \"title\": \"User Skill has been successfully created\",\n      \"message\": \"The User Skill has been created successfully.\",\n        \"data\": { \"user_skills_uid\": \"524adsfga57afd57adfg7adf8g\" }\n    }"
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
                      "example": "User Skill has been successfully created"
                    },
                    "message": {
                      "type": "string",
                      "example": "The User Skill has been created successfully."
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "user_skills_uid": {
                          "type": "string",
                          "example": "524adsfga57afd57adfg7adf8g"
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
                    "value": "{\n      message: \"No user found for the given user UID\",\n      title: \"Invalid User UID\",\n      type: \"error\"\n}"
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
                    "value": "{ message: \"Error in creating USER SKILL\", type: \"error\", title: \"Error in creation\", info: \"Database Error\" }"
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "parameters": [
          {
            "name": "user_uid",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
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