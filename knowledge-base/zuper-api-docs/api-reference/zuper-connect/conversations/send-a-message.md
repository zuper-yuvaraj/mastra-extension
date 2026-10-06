---
updatedAt: 2026-06-15T14:36:35.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Send a message

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuperconnect-pro-api",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{dc-region}-connect.zuperpro.com/api",
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
    "/telephony/message": {
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
                    "value": {
                      "type": "success",
                      "title": "Message initiated successfully",
                      "message": "Message initiated successfully"
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
                      "example": "Message initiated successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Message initiated successfully"
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "header",
            "name": "x-api-key",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "operationId": "post_telephony-message",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "phone_number_uid": {
                          "type": "string"
                        },
                        "phone_number": {
                          "type": "string",
                          "description": "Either phone_number or phone_number_uid is required. If both sent , we consider phone_number_uid"
                        },
                        "customer_number_uid": {
                          "type": "string"
                        },
                        "to_number": {
                          "type": "string",
                          "description": "Either to_number or customer_number_uid is required. If both sent , we consider customer_number_uid"
                        },
                        "message_body": {
                          "type": "string",
                          "description": "",
                          "default": "This is a default text"
                        },
                        "module_uid": {
                          "type": "string"
                        },
                        "module": {
                          "type": "string",
                          "default": "JOB"
                        },
                        "message_type": {
                          "type": "string",
                          "enum": [
                            "SMS",
                            "MMS"
                          ]
                        },
                        "media": {
                          "type": "array",
                          "items": {
                            "properties": {
                              "media_url": {
                                "type": "string"
                              },
                              "content_type": {
                                "type": "string"
                              }
                            },
                            "type": "object"
                          },
                          "description": "If message_type is MMS , we need to pass this"
                        }
                      },
                      "type": "object"
                    }
                  }
                },
                "required": [
                  "message"
                ]
              }
            }
          }
        },
        "summary": "Send a message"
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