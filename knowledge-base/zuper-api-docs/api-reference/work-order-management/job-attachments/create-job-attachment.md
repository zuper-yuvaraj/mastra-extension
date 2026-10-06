---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Add Job Attachment

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
    "/jobs/{job_uid}/attachments": {
      "post": {
        "summary": "Add Job Attachment",
        "description": "",
        "operationId": "create-job-attachment",
        "parameters": [
          {
            "name": "job_uid",
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
                "properties": {
                  "attachment": {
                    "type": "object",
                    "description": "Single attachment",
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
                  },
                  "attachments": {
                    "type": "array",
                    "description": "Multiple attachments",
                    "items": {
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
                      },
                      "required": [
                        "file_name",
                        "url"
                      ],
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job Attachments Updated\",\n    \"title\": \"Job Attachments Updated\",\n    \"data\": {\n        \"job_uid\": \"49305b3e-6a2c-47c3-aaa9-1999dafb8a98\",\n        \"attachment_uids\": [\n            \"39aa3f10-ccc6-4619-9107-7242fb3766fe\"\n        ]\n    }\n}"
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
                      "example": "Job Attachments Updated"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job Attachments Updated"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "job_uid": {
                          "type": "string",
                          "example": "49305b3e-6a2c-47c3-aaa9-1999dafb8a98"
                        },
                        "attachment_uids": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "39aa3f10-ccc6-4619-9107-7242fb3766fe"
                          }
                        }
                      }
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
                    "value": "{\n      type: \"error\",\n      message: \"Error in Adding Job Attachment\",\n      data: \"\",\n}"
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