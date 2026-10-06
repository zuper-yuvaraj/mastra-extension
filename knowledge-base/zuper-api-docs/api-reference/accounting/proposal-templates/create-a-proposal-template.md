---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create a Template

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
    "/invoice_estimate/proposal_template": {
      "post": {
        "summary": "Create a Template",
        "description": "",
        "operationId": "create-a-proposal-template",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "proposal_template": {
                    "properties": {
                      "template_name": {
                        "type": "string",
                        "description": "Template Name"
                      },
                      "template_description": {
                        "type": "string",
                        "description": "Description"
                      },
                      "proposal_options": {
                        "type": "array"
                      }
                    },
                    "required": [
                      "template_name"
                    ],
                    "type": "object"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "proposal_template": {
                      "template_name": "test",
                      "template_description": "test",
                      "proposal_options": [
                        {
                          "option_name": "option 1",
                          "option_image": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/295cd662-99b5-419d-9cb5-ae3c34a3dca2.png",
                          "option_description": "option 1",
                          "package": "d9c11130-cc0b-11ef-9219-a7dda2f2c479"
                        }
                      ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Proposal Template created successfully\",\n    \"data\": {\n        \"template_uid\": \"1ba328d0-cc12-11ef-9219-a7dda2f2c479\"\n    }\n}"
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
                      "example": "Proposal Template created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "template_uid": {
                          "type": "string",
                          "example": "1ba328d0-cc12-11ef-9219-a7dda2f2c479"
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
                    "value": "{\n        \"message\": \"Template data Data is missing\",\n        \"title\": \"Missing Template Data\",\n        \"type\": \"error\",\n      }"
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