---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Job Note

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
    "/jobs/{job_uid}/note": {
      "post": {
        "summary": "Create Job Note",
        "description": "",
        "operationId": "create-job-note",
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
                      "note_type": {
                        "type": "string",
                        "enum": [
                          "'TEXT'",
                          "'AUDIO'",
                          "'VIDEO'",
                          "'IMAGE'",
                          "'DOCUMENT'"
                        ]
                      },
                      "note": {
                        "type": "string"
                      },
                      "attachment": {
                        "type": "string"
                      },
                      "attachment_name": {
                        "type": "string"
                      },
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
                    "value": "{\n  type: \"success\",\n  message: \"Job Note created successfully\",\n  data: {\n  \tnote_uid: \"4cf5df5e-9d25-474f-8cb5-ad4374923ae6\"\n\t}\n}"
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
                    "value": "{\n  type: \"error\"{\n              type: Constants.SUCCESS_MSG,\n              message: \"Job Note created successfully\",\n              data: {\n                note_uid: note.note_uid\n              }\n            },\n  message: \"Job Not found for given UID\",\n\ttitle: \"Job Not found\"\n}"
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
                    "value": "{\n  type: \"error\",\n  message: \"Error in getting Job Details\",\n  title: \"Error in getting Job Details\",\n\tdata: \"\"\n}"
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