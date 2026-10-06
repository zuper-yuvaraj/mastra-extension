---
updatedAt: 2026-07-21T06:01:46.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Assign Appointment

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
    "/appointments/{appointment_uid}/assign": {
      "post": {
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "title": "Appointment Assignment Updated Successfully",
                      "message": "Appointment Assignment Updated Successfully"
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "appointment_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "summary": "Assign Appointment",
        "operationId": "post_appointments-appointment-uid-assign",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "job_uid": {
                    "type": "string"
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
                        },
                        "type": {
                          "type": "string",
                          "enum": [
                            "ASSIGN",
                            "UNASSIGN"
                          ]
                        }
                      },
                      "type": "object"
                    }
                  }
                },
                "required": [
                  "job_uid"
                ]
              }
            }
          }
        }
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