---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Add Attachments

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
    "/customers/{customer_uid}/attachments": {
      "post": {
        "summary": "Add Attachments",
        "description": "",
        "operationId": "create-customer-attachments",
        "parameters": [
          {
            "name": "customer_uid",
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
                  "attachments": {
                    "type": "array",
                    "description": "Array of files",
                    "items": {
                      "properties": {
                        "file_name": {
                          "type": "string"
                        },
                        "url": {
                          "type": "string"
                        },
                        "file_size": {
                          "type": "integer",
                          "format": "int32"
                        },
                        "visible_to_customer": {
                          "type": "boolean",
                          "default": false
                        }
                      },
                      "required": [
                        "file_name",
                        "url"
                      ],
                      "type": "object"
                    }
                  },
                  "attachment": {
                    "type": "object",
                    "description": "Single file",
                    "required": [
                      "file_name",
                      "url"
                    ],
                    "properties": {
                      "file_name": {
                        "type": "string"
                      },
                      "url": {
                        "type": "string"
                      },
                      "file_size": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "visible_to_customer": {
                        "type": "boolean",
                        "default": false
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
                "examples": {
                  "Result": {
                    "value": "{\n        \"type\": \"success\",\n        \"message\": \"Customer Attachments Added\",\n        \"title\": \"Customer Attachments Added\",\n        \"data\": {\n            \"customer_uid\": \"c1aacc45-1093-4690-bb28-09ebb4a97500\",\n            \"attachment_uids\": [\"2603b10e-568e-4f5c-9da9-193b23eb2001\"]\n        }\n    }"
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
                      "example": "Customer Attachments Added"
                    },
                    "title": {
                      "type": "string",
                      "example": "Customer Attachments Added"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "customer_uid": {
                          "type": "string",
                          "example": "c1aacc45-1093-4690-bb28-09ebb4a97500"
                        },
                        "attachment_uids": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "2603b10e-568e-4f5c-9da9-193b23eb2001"
                          }
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
                    "value": "{\n  \"message\": \"Attachment details and Customer UID are mandatory\",\n  \"title\": \"Missing Mandatory Fields\",\n  \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Attachment details and Customer UID are mandatory"
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