---
updatedAt: 2026-10-02T14:14:04.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Workflow

Only succeeds when the workflow is already deactivated (is_active: false) — deleting an active workflow returns 404 "No Workflow found for given UID" (the workflow exists, but the lookup filter excludes active ones). Deactivate first via Activate Workflow, then delete. Soft delete.

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
    "/workflow/{workflow_uid}": {
      "delete": {
        "summary": "Delete Workflow",
        "description": "Only succeeds when the workflow is already deactivated (is_active: false) — deleting an active workflow returns 404 \"No Workflow found for given UID\" (the workflow exists, but the lookup filter excludes active ones). Deactivate first via Activate Workflow, then delete. Soft delete.",
        "operationId": "delete-workflow",
        "parameters": [
          {
            "name": "workflow_uid",
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
                    "value": "{\"type\": \"success\", \"message\": \"Workflow deleted successfully\"}"
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
                    "value": "{\"type\": \"error\", \"message\": \"No Workflow found for given UID\"}"
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
                    "value": "{\"type\": \"error\", \"message\": \"Error in getting Workflow\", \"data\": \"\"}"
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