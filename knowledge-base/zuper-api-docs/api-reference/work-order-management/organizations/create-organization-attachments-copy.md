---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Organization Attachment

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
    "/organization/{organization_uid}/attachments/{attachment_uid}": {
      "put": {
        "summary": "Update Organization Attachment",
        "description": "",
        "operationId": "create-organization-attachments-copy",
        "parameters": [
          {
            "name": "organization_uid",
            "in": "path",
            "description": "Organization uid",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "attachment_uid",
            "in": "path",
            "description": "Attachment uid",
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
                    "description": "Attachment data",
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
                    "value": "{\n    \"type\" : \"success\",\n    \"message\" : \"Organization Attachment Updated\",\n    \"title\" : \"Organization Attachment Updated\",\n    \"data\": {\n        \"organization_uid\": \"organization_uid\",\n        \"attachment_uid\": \"attachment_uids\"\n         }\n}"
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
                      "example": "Organization Attachment Updated"
                    },
                    "title": {
                      "type": "string",
                      "example": "Organization Attachment Updated"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "organization_uid": {
                          "type": "string",
                          "example": "organization_uid"
                        },
                        "attachment_uid": {
                          "type": "string",
                          "example": "attachment_uids"
                        }
                      }
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
                    "value": "{\n    \"message\": \"error\",\n     \"title\": \"\",\n     \"type\": \"\"\n }"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "type": {
                      "type": "string",
                      "example": ""
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
                    "value": "{\n      \"message\": \"error\",\n      \"title\": \"\",\n      \"type\": \"\",\n      \"data\": \"\"\n }"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "data": {
                      "type": "string",
                      "example": ""
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