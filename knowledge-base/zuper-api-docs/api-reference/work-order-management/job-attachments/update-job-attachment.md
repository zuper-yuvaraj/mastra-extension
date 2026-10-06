---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Job Attachment

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
      "put": {
        "summary": "Update Job Attachment",
        "description": "",
        "operationId": "update-job-attachment",
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
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "attachment"
                ],
                "properties": {
                  "attachment": {
                    "type": "object",
                    "required": [
                      "file_name",
                      "url"
                    ],
                    "properties": {
                      "file_name": {
                        "type": "string"
                      },
                      "url": {
                        "type": "string"
                      },
                      "file_size": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "visible_to_customer": {
                        "type": "boolean",
                        "default": false
                      }
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job Attachment Updated\",\n    \"title\": \"Job Attachment Updated\",\n    \"data\": {\n        \"job_uid\": \"49305b3e-6a2c-47c3-aaa9-1999dafb8a98\",\n        \"attachment_uid\": \"39aa3f10-ccc6-4619-9107-7242fb3766fe\"\n    }\n}"
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
                      "example": "Job Attachment Updated"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job Attachment Updated"
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Job Attachment Deleted\",\n    \"title\": \"Job Attachment Deleted\",\n    \"data\": {\n        \"job_uid\": \"49305b3e-6a2c-47c3-aaa9-1999dafb8a98\",\n        \"attachment_uid\": \"39aa3f12-ccc6-4619-9107-7242fb3766fe\"\n    }\n}"
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