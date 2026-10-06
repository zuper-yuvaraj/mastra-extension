---
updatedAt: 2026-06-09T07:07:39.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Delete Asset Inspection Form Field

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
    "/assets/inspection_form/{asset_form_uid}/{field_uid}": {
      "delete": {
        "summary": "Delete Asset Inspection Form Field",
        "description": "",
        "operationId": "delete-asset-inspection-field",
        "parameters": [
          {
            "name": "asset_form_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "field_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Inspection form field deleted successfully\"\n}"
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
                      "example": "Inspection form field deleted successfully"
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
                    "value": "{\n  \"type\": \"error\",\n  \"title\": \"Inspection Form UID / Field UID Not Found\",\n  \"message\": \"Inspection Form UID / Field UID Not Found\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Inspection Form UID / Field UID Not Found"
                    },
                    "message": {
                      "type": "string",
                      "example": "Inspection Form UID / Field UID Not Found"
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
                    "value": "{\n    \"message\": \"Error in Deleting Inspection Form Field\",\n    \"title\": \"Error in Deleting Inspection Form Field\",\n    \"type\": \"error\",\n    \"data\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Deleting Inspection Form Field"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Deleting Inspection Form Field"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
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