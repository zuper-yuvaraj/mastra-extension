---
updatedAt: 2026-08-11T14:46:49.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Rearrange Job Status

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
    "/jobs/status/{category_uid}/rearrange": {
      "put": {
        "summary": "Rearrange Job Status",
        "description": "",
        "operationId": "rearrange-job-status",
        "parameters": [
          {
            "name": "category_uid",
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
                  "job_status": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "job_status": [
                      "da2c107f-fa5c-492e-8658-49ea884fb3b0",
                      "b34f479c-2dcd-45fd-874d-9f8858566edf",
                      "1e0cf1bb-1ec9-41d0-83f3-b8dd6775e1b4",
                      "a64a7a70-135c-44f1-b38b-f4dd490b0c6c"
                    ]
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Job Status rearranged successfully\"\n}"
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
                      "example": "Job Status rearranged successfully"
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
                    "value": "{\n      message: \"Category ID / Job Status Missing\",\n      title: \"Missing Mandatory data - Category ID & Job Status\",\n      type: \"error\"\n}"
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
                    "value": "{\n      message: \"No Status is found for given Category UID\",\n\t\t\ttitle: \"No Status is found\",\n      type: \"error\"\n}"
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