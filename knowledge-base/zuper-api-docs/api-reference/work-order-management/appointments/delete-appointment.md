---
updatedAt: 2026-07-21T06:01:46.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Appointment

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
      "delete": {
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
        "operationId": "get_appointments-appointment-uid-1",
        "summary": "Delete Appointment"
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