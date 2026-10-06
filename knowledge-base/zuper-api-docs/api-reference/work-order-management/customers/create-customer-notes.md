---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Customer Notes

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
    "/customers/{customer_uid}/note": {
      "post": {
        "summary": "Create Customer Notes",
        "description": "",
        "operationId": "create-customer-notes",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "note": {
                    "type": "object",
                    "properties": {}
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "note_type": "TEXT",
                    "note": "Hellow world",
                    "attachment": "",
                    "attachment_name": "",
                    "attachments": {},
                    "visible_to_customer": false,
                    "geo_cordinates": [],
                    "is_private": true
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Customer Note created successfully\"\n    \"data\": [\n        {\n            \"note_uid\": \"57221a03-59b0-4888-8e2a-5075570310d7\"\n        }\n    ]\n}"
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
                    "value": "{\n\t\"message\": \"Note details and Customer UID are mandatory\",\n\t\"title\": \"Missing Mandatory Fields\",\n\t\"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Note details and Customer UID are mandatory"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Mandatory Fields"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "parameters": [
          {
            "name": "customer_uid",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
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