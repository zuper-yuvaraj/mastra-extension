---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reorder Job Checklists

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
    "/settings/checklist/reorder": {
      "put": {
        "summary": "Reorder Job Checklists",
        "description": "",
        "operationId": "reorder-job-checklists",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "category_uid"
                ],
                "properties": {
                  "category_uid": {
                    "type": "string",
                    "description": "Job Category UID"
                  },
                  "job_status_uid": {
                    "type": "string",
                    "description": "Job Status UID"
                  },
                  "checklists": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "checklist_uid": {
                          "type": "string"
                        },
                        "display_order": {
                          "type": "integer",
                          "format": "int32"
                        }
                      },
                      "type": "object"
                    }
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
                    "value": "{\n  \"type\": \"success\",\n  \"title\": \"Checklists Reordered Successfully\",\n  \"message\": \"Checklists Reordered Successfully\"\n}"
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
                      "example": "Checklists Reordered Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Checklists Reordered Successfully"
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
                    "value": "{\n    \"message\": \"Error in Reordering Checklist\",\n    \"title\": \"Error in Reordering Checklist\",\n    \"type\": \"error\",\n    \"data\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Reordering Checklist"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Reordering Checklist"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
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