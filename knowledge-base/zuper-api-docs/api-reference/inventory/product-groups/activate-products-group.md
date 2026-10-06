---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Activate Products Group

Activate or Deactivate Given Product group

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
    "/product/group/{group_uid}/activate": {
      "put": {
        "summary": "Activate Products Group",
        "description": "Activate or Deactivate Given Product group",
        "operationId": "activate-products-group",
        "parameters": [
          {
            "name": "group_uid",
            "in": "path",
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
                  "type": {
                    "type": "string",
                    "enum": [
                      "ACTIVATE",
                      "DEACTIVATE"
                    ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Product Group Updated Successfully\"\n}"
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
                      "example": "Product Group Updated Successfully"
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
                  "Missed Product Group ID": {
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Missing Mandatory Fields\",\n    \"message\": \"Product Group UID is Mandatory\"\n}"
                  },
                  "Invalid Type": {
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Invalid Type\",\n    \"message\": \"Type should be ACTIVATE/DEACTIVATE\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Missed Product Group ID",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "title": {
                          "type": "string",
                          "example": "Missing Mandatory Fields"
                        },
                        "message": {
                          "type": "string",
                          "example": "Product Group UID is Mandatory"
                        }
                      }
                    },
                    {
                      "title": "Invalid Type",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Type"
                        },
                        "message": {
                          "type": "string",
                          "example": "Type should be ACTIVATE/DEACTIVATE"
                        }
                      }
                    }
                  ]
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