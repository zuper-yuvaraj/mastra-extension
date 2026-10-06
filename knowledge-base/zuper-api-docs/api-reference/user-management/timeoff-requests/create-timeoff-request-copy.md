---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Edit Timeoff Request

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
    "/timesheets/request/timeoff/{request_uid}": {
      "put": {
        "summary": "Edit Timeoff Request",
        "description": "",
        "operationId": "create-timeoff-request-copy",
        "parameters": [
          {
            "name": "request_uid",
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
                  "timeoff_request": {
                    "properties": {
                      "request_from": {
                        "type": "string",
                        "format": "date"
                      },
                      "request_to": {
                        "type": "string",
                        "format": "date"
                      },
                      "request_type": {
                        "type": "string"
                      },
                      "request_reason": {
                        "type": "string",
                        "enum": [
                          "OFF",
                          "VACATION",
                          "SICK",
                          "PARENTAL LEAVE",
                          "UNPAID",
                          "OTHERS",
                          "CUSTOM"
                        ]
                      },
                      "request_remarks": {
                        "type": "string"
                      },
                      "all_day": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "request_from",
                      "request_to"
                    ],
                    "type": "object"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Timeoff Request updated Successfully\",\n    \"message\": \"Timeoff Request updated Successfully\",\n    \"data\": {\n        \"request_uid\": \"0eb23511-f58e-434a-9e46-5bf2b5eda972\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Timeoff Request updated Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Timeoff Request updated Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "request_uid": {
                          "type": "string",
                          "example": "0eb23511-f58e-434a-9e46-5bf2b5eda972"
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
                    "value": "{\n\tmessage: 'User is not allowed to edit the data',\n\ttitle: 'Access Denied',\n\ttype: \"error\"\n}"
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
                    "value": "{\n\t\t\t\t\"message\": \"Error in Updating Timeoff Request\",\n\t\t\t\t\"title\": \"Error in Updating Timeoff Request\",\n\t\t\t\t\"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Updating Timeoff Request"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Updating Timeoff Request"
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