---
updatedAt: 2026-06-15T10:51:29.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Document

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api-2",
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
    "/documents": {
      "post": {
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
                      "title": "Document Created Successfully",
                      "message": "Document Created Successfully",
                      "data": {
                        "document_uid": "1b4e47fb-3b8f-4f17-8287-f4cea40fff37"
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
                      "example": "Document Created Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Document Created Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "document_uid": {
                          "type": "string",
                          "example": "1b4e47fb-3b8f-4f17-8287-f4cea40fff37"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [],
        "summary": "Create Document",
        "operationId": "post_documents",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "document_title": {
                    "type": "string",
                    "description": "Document Title"
                  },
                  "layout_uid": {
                    "type": "string",
                    "description": "Layout Template UID"
                  },
                  "layout_association_uid": {
                    "type": "string",
                    "description": "Layout Association UID (only needed for cloning)"
                  },
                  "module": {
                    "type": "string",
                    "default": "JOB"
                  },
                  "module_uid": {
                    "type": "string",
                    "description": "module UID - If module is job then job's UID"
                  }
                },
                "required": [
                  "document_title",
                  "layout_uid",
                  "module",
                  "module_uid"
                ]
              },
              "examples": {
                "New Example": {
                  "summary": "New Example",
                  "value": {
                    "document": {
                      "document_title": "Job Document 1",
                      "layout_uid": "45fece6d-3774-4d55-9739-da25f5b76aa3",
                      "layout_association_uid": "89fece6d-3774-4d55-9739-da25f5b76aa3",
                      "module": "JOB",
                      "module_uid": "4e401746-cd0f-4475-8274-8ed3b8001f85"
                    }
                  }
                }
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