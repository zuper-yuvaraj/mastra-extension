---
updatedAt: 2026-10-02T14:14:08.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Activate Workflow

Activates or deactivates a workflow. Unlike Territory/other modules' activate endpoints, this uses type (ACTIVATE or DEACTIVATE) rather than an is_active boolean.

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
    "/workflow/{workflow_uid}/activate": {
      "put": {
        "summary": "Activate Workflow",
        "description": "Activates or deactivates a workflow. Unlike Territory/other modules' activate endpoints, this uses type (ACTIVATE or DEACTIVATE) rather than an is_active boolean.",
        "operationId": "activate-workflow",
        "parameters": [
          {
            "name": "workflow_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "type",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "ACTIVATE",
                "DEACTIVATE"
              ]
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
                    "value": "{\"type\": \"success\", \"title\": \"Workflow Activation Updated\", \"message\": \"WorkFlow Details has been successfully updated\"}"
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
                    "value": "{\"message\": \"No Workflow found for given UID\", \"title\": \"Invalid Workflow UID\", \"type\": \"error\"}"
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
                    "value": "{\"type\": \"error\", \"title\": \"Internal Server Error\", \"message\": \"There was an error in updating WorkFlow Details\"}"
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-internal": false
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