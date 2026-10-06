---
updatedAt: 2026-08-11T14:43:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Clone Checklist

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
    "/settings/checklist/clone": {
      "post": {
        "summary": "Clone Checklist",
        "description": "",
        "operationId": "clone-checklist",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "job_category_uid_from",
                  "job_status_uid_from",
                  "checklist_uids",
                  "job_category_uid_to",
                  "job_status_uid_to"
                ],
                "properties": {
                  "job_category_uid_from": {
                    "type": "string"
                  },
                  "job_status_uid_from": {
                    "type": "string"
                  },
                  "checklist_uids": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "job_category_uid_to": {
                    "type": "string"
                  },
                  "job_status_uid_to": {
                    "type": "string"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Checklist cloned successfully\",\n    \"message\": \"Checklist cloned successfully\"\n}"
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
                      "example": "Checklist cloned successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Checklist cloned successfully"
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Error while cloning checklists\",\n    \"message\": \"Error while cloning checklists\",\n    \"data\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error while cloning checklists"
                    },
                    "message": {
                      "type": "string",
                      "example": "Error while cloning checklists"
                    },
                    "data": {
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