---
updatedAt: 2026-03-24T06:10:52.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete a Proposal

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api-2",
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
    "/estimate/{estimate_uid}": {
      "delete": {
        "description": "",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "message": "Proposal deleted successfully"
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "type"
                  ]
                }
              }
            }
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "type"
                  ]
                },
                "examples": {
                  "Not Found": {
                    "summary": "Not Found",
                    "value": {
                      "type": "error",
                      "message": "No Quote found for given Quote UID"
                    }
                  }
                }
              }
            },
            "description": "Not Found"
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "estimate_uid",
            "schema": {
              "type": "string"
            },
            "required": true,
            "description": "estimate_uid"
          },
          {
            "in": "query",
            "name": "remarks",
            "schema": {
              "type": "string"
            },
            "description": "Remarks for deletion"
          }
        ],
        "operationId": "delete_estimate-estimate-uid"
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