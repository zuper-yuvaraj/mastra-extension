---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reschedule Job

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
    "/jobs/schedule": {
      "put": {
        "summary": "Reschedule Job",
        "description": "",
        "operationId": "print-save-as-pdf-share-via-email-job-card-copy",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "job_uid": {
                    "type": "string"
                  },
                  "from_date": {
                    "type": "string",
                    "format": "date"
                  },
                  "to_date": {
                    "type": "string",
                    "format": "date"
                  },
                  "remove_from_route": {
                    "type": "boolean",
                    "default": false
                  },
                  "reason": {
                    "type": "string"
                  },
                  "work_mins_required": {
                    "type": "integer",
                    "format": "int32"
                  },
                  "job_timezone": {
                    "type": "string"
                  },
                  "appointment_uid": {
                    "type": "string",
                    "description": "Required if appointments is enabled"
                  }
                }
              },
              "examples": {
                "To email Job card": {
                  "value": {
                    "from_date": "2026-07-07 03:30:00",
                    "to_date": "2026-07-07 11:30:00",
                    "job_uid": "310ce820-6753-11ee-8e0c-ad2d4a3c14d4",
                    "reason": "",
                    "work_mins_required": 60,
                    "remove_from_route": true
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job has been updated successfully\"\n}"
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
                      "example": "Job has been updated successfully"
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
                    "value": "{\n  type: \"error\"\n  message: \"Invalid Timezone\",\n\ttitle: \"Invalid Timezone\",\n}"
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Invalid Job UID\",\n    \"title\": \"Invalid Job UID\"\n}"
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
                      "example": "Invalid Job UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "Invalid Job UID"
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