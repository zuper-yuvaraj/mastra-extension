---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Upload Measurement

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
    "/measurements/bulk_upload": {
      "post": {
        "description": "",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": "{\n  type: \"success\",\n  data: \"Bulk measurement upload completed\"\n }"
                  }
                }
              }
            }
          }
        },
        "parameters": [],
        "operationId": "post_measurements-bulk-upload",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "measurements": {
                    "type": "object",
                    "properties": {
                      "job_uid": {
                        "type": "string"
                      },
                      "provider": {
                        "type": "string",
                        "enum": [
                          "roofsnap",
                          "roofr",
                          "pitch_guage",
                          "bidengine",
                          "hover_upload"
                        ]
                      },
                      "measurement_name": {
                        "type": "string"
                      },
                      "measurement_data": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "measurement_address": {
                              "type": "object",
                              "properties": {}
                            }
                          },
                          "type": "object"
                        }
                      },
                      "measurement_address": {
                        "type": "object",
                        "properties": {}
                      },
                      "csv": {
                        "type": "object",
                        "properties": {
                          "attachment_path": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "attachment_path"
                        ]
                      }
                    },
                    "required": [
                      "job_uid",
                      "measurement_name",
                      "measurement_data",
                      "measurement_address"
                    ]
                  }
                },
                "required": [
                  "measurements"
                ]
              }
            }
          }
        },
        "summary": "Upload Measurement"
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