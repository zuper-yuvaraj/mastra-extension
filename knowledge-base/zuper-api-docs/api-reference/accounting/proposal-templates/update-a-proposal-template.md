---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update a Template

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
    "/invoice_estimate/proposal_template/{template_uid}": {
      "put": {
        "summary": "Update a Template",
        "description": "",
        "operationId": "update-a-proposal-template",
        "parameters": [
          {
            "name": "template_uid",
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
                  "proposal_template": {
                    "properties": {
                      "template_name": {
                        "type": "string"
                      },
                      "template_description": {
                        "type": "string"
                      },
                      "proposal_options": {
                        "type": "array"
                      }
                    },
                    "required": [],
                    "type": "object"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "proposal_template": {
                      "template_name": "Test2",
                      "template_description": "test2",
                      "proposal_options": [
                        {
                          "option_name": "option1",
                          "option_image": null,
                          "option_description": "option 2",
                          "package": "54200a90-4d81-11ee-b4ec-c942b77abaff"
                        },
                        {
                          "option_name": "option 2",
                          "option_image": null,
                          "option_description": "option 2",
                          "package": "792462c0-4262-11ee-b1a1-7372ef614376"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Proposal Template Updated\",\n    \"data\": \"Proposal Template Details has been successfully updated\"\n}"
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
                      "example": "Proposal Template Updated"
                    },
                    "data": {
                      "type": "string",
                      "example": "Proposal Template Details has been successfully updated"
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