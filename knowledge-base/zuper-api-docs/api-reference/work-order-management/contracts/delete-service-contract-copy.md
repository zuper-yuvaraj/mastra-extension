---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Recover Contract

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
    "/service_contract/recover": {
      "post": {
        "summary": "Recover Contract",
        "description": "",
        "operationId": "delete-service-contract-copy",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "contract_uids"
                ],
                "properties": {
                  "contract_uids": {
                    "type": "string",
                    "description": "Contract uids"
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
                    "value": "{\n    \"type\" : \"success\",\n    \"message\" : \"Contract Recovered Successfully\"\n}"
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
                      "example": "Contract Recovered Successfully"
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