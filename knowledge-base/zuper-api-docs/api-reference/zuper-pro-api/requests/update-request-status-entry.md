---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Request Status

Partial update — any field omitted keeps its existing value.

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
    "/request/status/{request_status_uid}": {
      "put": {
        "summary": "Update Request Status",
        "description": "Partial update — any field omitted keeps its existing value.",
        "parameters": [
          {
            "in": "path",
            "name": "request_status_uid",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "request_status": {
                    "type": "object",
                    "properties": {
                      "status_name": {
                        "type": "string",
                        "description": "Required."
                      },
                      "status_type": {
                        "type": "string",
                        "enum": [
                          "OPEN",
                          "IN_PROGRESS",
                          "CLOSED",
                          "ON_HOLD",
                          "CANCELED",
                          "OTHERS"
                        ],
                        "description": "Required."
                      },
                      "status_description": {
                        "type": "string"
                      },
                      "status_color": {
                        "type": "string"
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
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "success"
                      ]
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"title\": \"Request Status Updated\", \"message\": \"Request Status Updated\"}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "200",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "success"
                      ]
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"error\", \"title\": \"Invalid Request Status UID\", \"message\": \"Invalid Request Status UID\"}"
                  }
                }
              }
            }
          }
        },
        "operationId": "update-request-status-entry"
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