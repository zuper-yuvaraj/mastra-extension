---
updatedAt: 2026-06-09T06:09:47.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Bulk Delete Attachments

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
    "/attachments/bulk": {
      "delete": {
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
                      "title": "6 attachment(s) deleted successfully",
                      "message": "6 attachment(s) deleted successfully",
                      "data": {
                        "deleted_count": 6
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
        "requestBody": {
          "required": false,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "page": {
                    "type": "number",
                    "default": 1
                  },
                  "limit": {
                    "type": "number",
                    "default": 10
                  },
                  "sort": {
                    "type": "string",
                    "enum": [
                      "ASC",
                      "DESC"
                    ]
                  },
                  "sort_by": {
                    "type": "string",
                    "enum": [
                      "created_at",
                      "created_by"
                    ]
                  },
                  "group_by": {
                    "type": "string",
                    "enum": [
                      "created_at",
                      "attachment_tag",
                      "created_by"
                    ]
                  },
                  "is_photo_feed": {
                    "type": "boolean",
                    "default": false,
                    "description": ""
                  },
                  "filter.attachment_uid": {
                    "type": "string"
                  },
                  "filter.folder_uid": {
                    "type": "string"
                  },
                  "filter.type_of_attachment": {
                    "type": "string"
                  },
                  "filter.mime_type": {
                    "type": "string"
                  },
                  "filter.type": {
                    "type": "string"
                  },
                  "filter.module": {
                    "type": "string",
                    "enum": [
                      "JOB",
                      "PROJECT",
                      "CUSTOMER",
                      "PROPERTY"
                    ]
                  },
                  "filter.module_uid": {
                    "type": "string"
                  },
                  "filter.created_by": {
                    "type": "string"
                  },
                  "filter.from_date": {
                    "type": "string"
                  },
                  "filter.to_date": {
                    "type": "string"
                  },
                  "filter.attachment_tag": {
                    "type": "string"
                  },
                  "filter.attachment_visibility": {
                    "type": "string",
                    "enum": [
                      "INTERNAL",
                      "PUBLIC"
                    ]
                  }
                },
                "required": [
                  "filter.module"
                ]
              }
            }
          }
        },
        "parameters": [],
        "summary": "Bulk Delete Attachments",
        "operationId": "delete_attachments-bulk"
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