---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Job Note

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
    "/jobs/{job_uid}/note/{note_uid}/update": {
      "put": {
        "summary": "Update Job Note",
        "description": "",
        "operationId": "update-job-note",
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
            "name": "note_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "notify_users",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "note": {
                    "properties": {
                      "attachments": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "attachment_name": {
                              "type": "string"
                            },
                            "attachment": {
                              "type": "string"
                            },
                            "attachment_type": {
                              "type": "string",
                              "default": "DOCUMENT",
                              "enum": [
                                "'TEXT'",
                                "'AUDIO'",
                                "'VIDEO'",
                                "'IMAGE'",
                                "'DOCUMENT'"
                              ]
                            },
                            "attachment_size": {
                              "type": "number",
                              "format": "float"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "note": {
                        "type": "string"
                      },
                      "user_mentions": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      }
                    },
                    "required": [],
                    "type": "object"
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
                    "value": "{ type: \"success\", message: \"Note  Updated successfully\", title: \"Note  Updated successfully\" }"
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
                    "value": "{ message: \"Note Not found for given UID\", title: \"Error in getting Notes\", type: \"error\" }"
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