---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Job Attachment

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
    "/jobs/{job_uid}/attachments/{attachment_uid}": {
      "delete": {
        "summary": "Delete Job Attachment",
        "description": "",
        "operationId": "delete-job-attachment",
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
            "name": "attachment_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job Attachment Deleted\",\n    \"title\": \"Job Attachment Deleted\",\n    \"data\": {\n        \"job_uid\": \"49305b3e-6a2c-47c3-aaa9-1999dafb8a98\",\n        \"attachment_uid\": \"39aa3f10-ccc6-4619-9107-7242fb3766fe\"\n    }\n}"
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
                      "example": "Job Attachment Deleted"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job Attachment Deleted"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "job_uid": {
                          "type": "string",
                          "example": "49305b3e-6a2c-47c3-aaa9-1999dafb8a98"
                        },
                        "attachment_uid": {
                          "type": "string",
                          "example": "39aa3f10-ccc6-4619-9107-7242fb3766fe"
                        }
                      }
                    }
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Invalid Job Attachment UID\",\n    \"title\": \"Invalid Job Attachment UID\",\n    \"data\": {\n        \"job_uid\": \"49305b3e-6a2c-47c3-aaa9-1999dafb8a98\",\n        \"attachment_uid\": \"39aa3f12-ccc6-4619-9107-7242fb3766fe\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "message": {
                      "type": "string",
                      "example": "Invalid Job Attachment UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "Invalid Job Attachment UID"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "job_uid": {
                          "type": "string",
                          "example": "49305b3e-6a2c-47c3-aaa9-1999dafb8a98"
                        },
                        "attachment_uid": {
                          "type": "string",
                          "example": "39aa3f12-ccc6-4619-9107-7242fb3766fe"
                        }
                      }
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