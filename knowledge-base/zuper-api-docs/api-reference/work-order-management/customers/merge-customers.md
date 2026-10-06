---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Merge Customers

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
    "/customers/merge": {
      "get": {
        "summary": "Merge Customers",
        "description": "",
        "operationId": "merge-customers",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "source_customer_uids",
                  "target_customer_uid"
                ],
                "properties": {
                  "source_customer_uids": {
                    "type": "string"
                  },
                  "target_customer_uid": {
                    "type": "string"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "source_customer_uids": "8ed55d4b-9b51-43f7-bffa-afd43731ddf0",
                    "target_customer_uid": "aa295881-68b2-4e5e-855b-4b9b54616498"
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Customers will be merged asynchronously\"\n}"
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
                      "example": "Customers will be merged asynchronously"
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
                    "value": "{\n  \"type\": \"error\",\n  \"message\": \"Invalid / Empty source customer UIDs\",\n  \"title\": \"No source customer UIDS found\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "message": {
                      "type": "string",
                      "example": "Invalid / Empty source customer UIDs"
                    },
                    "title": {
                      "type": "string",
                      "example": "No source customer UIDS found"
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