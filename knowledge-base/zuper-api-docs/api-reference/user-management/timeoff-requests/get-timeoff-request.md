---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Approval Status

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
    "/timesheets/request/timeoff/{request_uid}/update_approval": {
      "put": {
        "summary": "Update Approval Status",
        "description": "",
        "operationId": "get-timeoff-request",
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
                      "approval_remarks": {
                        "type": "string"
                      },
                      "approval_status": {
                        "type": "string",
                        "enum": [
                          "'APPROVED'",
                          "'REJECTED'"
                        ]
                      }
                    },
                    "required": [
                      "approval_remarks",
                      "approval_status"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Timeoff Request Updated Successfully\",\n    \"message\": \"Timeoff Request Updated Successfully\",\n    \"data\": {\n        \"request_uid\": \"b47e5ef6-12ea-460e-ba0f-abf505ef3fa4\"\n    }\n}"
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
                      "example": "Timeoff Request Updated Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Timeoff Request Updated Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "request_uid": {
                          "type": "string",
                          "example": "b47e5ef6-12ea-460e-ba0f-abf505ef3fa4"
                        }
                      }
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
                    "value": "{\n\t\t\t\t\"message\": \"Error in Updating Timeoff Request and Users TimeOff Details\",\n\t\t\t\t\"title\": \"Error in Updating Timeoff Request and Users TimeOff Details\",\n\t\t\t\t\"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Updating Timeoff Request and Users TimeOff Details"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Updating Timeoff Request and Users TimeOff Details"
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