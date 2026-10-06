---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /attachments/folders

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
    "/attachments/folders": {
      "post": {
        "description": "",
        "operationId": "post_attachmentsfolders",
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
                      "title": "Folder has been successfully created",
                      "message": "Folder has been successfully created",
                      "data": {
                        "folder_uid": "d92db559-4737-9da5-b51993166ddb"
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Folder has been successfully created"
                    },
                    "message": {
                      "type": "string",
                      "example": "Folder has been successfully created"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "folder_uid": {
                          "type": "string",
                          "example": "d92db559-6afa-4737-9da5-b51993166ddb"
                        }
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
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "folder_name": {
                    "type": "string"
                  },
                  "module": {
                    "type": "string",
                    "default": ""
                  },
                  "module_uid": {
                    "type": "string"
                  },
                  "is_default": {
                    "type": "boolean",
                    "default": ""
                  }
                },
                "required": [
                  "folder_name",
                  "module",
                  "module_uid"
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