---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Job Timelog

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
    "/jobs/{job_uid}/timelog/{timelog_uid}": {
      "delete": {
        "summary": "Delete Job Timelog",
        "description": "",
        "operationId": "delete-job-timelog",
        "parameters": [
          {
            "name": "job_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "timelog_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "project_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "remove_associated_entry",
            "in": "query",
            "schema": {
              "type": "boolean"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Timelog deleted successfully\",\n    \"title\": \"Timelog Deleted Successfully\",\n    \"data\": {\n        \"timelog_uid\": \"dc6e8a5e-8153-4055-b672-0b6c73be7905\"\n    }\n}"
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
                      "example": "Timelog deleted successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Timelog Deleted Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "timelog_uid": {
                          "type": "string",
                          "example": "dc6e8a5e-8153-4055-b672-0b6c73be7905"
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
                    "value": "{\n    \"message\": \"Job/Project UID is mandatory\",\n    \"title\": \"Missing Mandatory Timelog Fields\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Timelog UID is mandatory"
                        },
                        "title": {
                          "type": "string",
                          "example": "Missing Mandatory Timelog Fields"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Job/Project UID is mandatory"
                        },
                        "title": {
                          "type": "string",
                          "example": "Missing Mandatory Timelog Fields"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    }
                  ]
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