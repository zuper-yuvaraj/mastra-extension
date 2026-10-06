---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Asset Card

Generates a printable asset card as a PDF from a template, either returned directly or emailed.

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
    "/assets/{asset_uid}/card": {
      "post": {
        "summary": "Create Asset Card",
        "description": "Generates a printable asset card as a PDF from a template, either returned directly or emailed.",
        "operationId": "create-asset-card",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "template_uid"
                ],
                "properties": {
                  "template_uid": {
                    "type": "string"
                  },
                  "email": {
                    "type": "string"
                  },
                  "email_body": {
                    "type": "string"
                  },
                  "email_subject": {
                    "type": "string"
                  },
                  "email_config_uid": {
                    "type": "string"
                  },
                  "attachments": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "email_cc": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "email_bcc": {
                    "type": "array",
                    "items": {
                      "type": "string"
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "deprecated": false,
        "parameters": [
          {
            "name": "asset_uid",
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