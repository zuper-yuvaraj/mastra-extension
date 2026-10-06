---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /attachments/folders/{folder_uid}/share

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
    "/attachments/folders/{folder_uid}/share": {
      "post": {
        "description": "",
        "operationId": "post_attachmentsfolders{folder_uid}share",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "title": "Folder shared successfully",
                      "message": "Folder shared successfully",
                      "data": {
                        "share_uid": "932d497b-4b3d-a27d-c38cc0e86617",
                        "share_link": "XXXXXX",
                        "expires_at": "2025-12-27T00:00:00.000Z"
                      }
                    }
                  }
                }
              }
            }
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                },
                "examples": {
                  "Internal Server Error": {
                    "summary": "Internal Server Error",
                    "value": {
                      "type": "error",
                      "title": "Internal Server Error",
                      "message": "Internal Server Error"
                    }
                  }
                }
              }
            },
            "description": "Internal Server Error"
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "folder_uid",
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
                  "send_to": {
                    "type": "object",
                    "properties": {
                      "to": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "If via is Email, to is required"
                      },
                      "cc": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "bcc": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "via": {
                        "type": "string",
                        "enum": [
                          "EMAIL",
                          "SMS"
                        ]
                      },
                      "phone_numbers": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "If via is SMS, phone numbers is required"
                      }
                    },
                    "required": [
                      "via"
                    ]
                  },
                  "subject": {
                    "type": "string"
                  },
                  "body": {
                    "type": "string"
                  },
                  "expires_at": {
                    "type": "string",
                    "format": "date"
                  }
                },
                "required": [
                  "send_to"
                ]
              }
            }
          }
        }
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