---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Timesheet

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
    "/timesheets/{timesheet_uid}/update": {
      "put": {
        "summary": "Update Timesheet",
        "description": "",
        "operationId": "create-timesheet-copy",
        "parameters": [
          {
            "name": "timesheet_uid",
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
                "required": [
                  "checked_time"
                ],
                "properties": {
                  "checked_time": {
                    "type": "string"
                  },
                  "remarks": {
                    "type": "string"
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
                    "value": "{\n\"type\": \"success\",\n\"title\": \"Timesheet updated successfully\",\n\"message\": \"User timesheet has been updated successfully\",\n\"data\": {\n    \"employee_timesheet_uid\": \"2df8da20-6a15-45d1-905c-8efb1043d8ce\"\n}\n}"
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
                      "example": "Timesheet updated successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "User timesheet has been updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "employee_timesheet_uid": {
                          "type": "string",
                          "example": "2df8da20-6a15-45d1-905c-8efb1043d8ce"
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
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": ""
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
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": ""
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