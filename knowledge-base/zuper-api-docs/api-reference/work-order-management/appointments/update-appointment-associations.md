---
updatedAt: 2026-07-21T06:01:46.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Appointment Associations

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
    "/appointments/{appointment_uid}/associations": {
      "patch": {
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
                      "title": "Service task associations updated successfully",
                      "message": "Service task associations updated successfully"
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
          },
          {
            "in": "query",
            "name": "job_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "operationId": "patch_appointments-appointment-uid-associations",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "associations": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "module": {
                          "type": "string",
                          "enum": [
                            "SERVICE_TASK",
                            "PURCHASE_ORDER"
                          ]
                        },
                        "type": {
                          "type": "string",
                          "enum": [
                            "ASSOCIATE",
                            "DISASSOCIATE"
                          ]
                        },
                        "module_uid": {
                          "type": "string"
                        }
                      },
                      "type": "object"
                    }
                  }
                },
                "required": [
                  "associations"
                ]
              }
            }
          }
        },
        "summary": "Update Appointment Associations"
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