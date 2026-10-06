---
updatedAt: 2026-07-21T06:01:46.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Appointment

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
    "/appointments/{appointment_uid}": {
      "put": {
        "responses": {
          "200": {
            "description": ""
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
        "operationId": "put_appointments-appointment-uid",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "appointment": {
                    "type": "object",
                    "properties": {
                      "job_uid": {
                        "type": "string"
                      },
                      "appointment_title": {
                        "type": "string"
                      },
                      "description": {
                        "type": "string"
                      },
                      "scheduled_start_time": {
                        "type": "string"
                      },
                      "scheduled_end_time": {
                        "type": "string"
                      },
                      "bu_uid": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "job_uid"
                    ]
                  }
                },
                "required": [
                  "appointment"
                ]
              }
            }
          }
        },
        "summary": "Update Appointment"
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