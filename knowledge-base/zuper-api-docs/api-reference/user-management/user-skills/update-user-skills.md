---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update User Skills

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
    "/users/{user_uid}/skill/{user_skills_uid}": {
      "put": {
        "summary": "Update User Skills",
        "description": "",
        "operationId": "update-user-skills",
        "parameters": [
          {
            "name": "user_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "user_skills_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "user_skill",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "user_skill.skillset_uid",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "user_skill.user_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "user_skill.skill_level",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "user_skill.start_date",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "user_skill.end_date",
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"User Skill details updated successfully\",\n    \"title\": \"User Skill Updated\",\n    \"data\": {\n        \"user_skills_uid\": \"f4672005-a210-4df9-9fff-f7ac81eff148\"\n    }\n}"
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
                      "example": "User Skill details updated successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "User Skill Updated"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "user_skills_uid": {
                          "type": "string",
                          "example": "f4672005-a210-4df9-9fff-f7ac81eff148"
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
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n        message: \"The User Skill with given UID does not exist\",\n        title: \"User Skill Not Found\",\n        type: \"error\"\n}"
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