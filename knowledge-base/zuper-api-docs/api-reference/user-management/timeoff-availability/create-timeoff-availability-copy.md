---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Timeoff Availability

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
    "/timesheets/request/timeoff_availability/{timeoff_availability_uid}": {
      "put": {
        "summary": "Update Timeoff Availability",
        "description": "",
        "operationId": "create-timeoff-availability-copy",
        "parameters": [
          {
            "name": "timeoff_availability_uid",
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
                  "timeoff_availability": {
                    "properties": {
                      "year": {
                        "type": "string"
                      },
                      "remaining_days": {
                        "type": "integer",
                        "format": "int32"
                      }
                    },
                    "required": [],
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
                    "value": "{\n\t\t\t\t\"message\": \"TimeOff Availability details updated successfully\",\n\t\t\t\t\"title\": \"TimeOff Availability Updated\",\n\t\t\t\t\"type\": \"error\",\n         \"data\": { \"timeoff_availability_uid\": \"2e6ec687-075b-40f1-93e5-0de348b9a4e4\" }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "TimeOff Availability details updated successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "TimeOff Availability Updated"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "timeoff_availability_uid": {
                          "type": "string",
                          "example": "2e6ec687-075b-40f1-93e5-0de348b9a4e4"
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
                    "value": "{\n\t\"message\": \"Error in Updating Timeoff Availability\",\n\t\"type\": \"error\",\n  \"title\":\"Error in Updating\",\n\t\"info\":\"Database Error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Updating Timeoff Availability"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Updating"
                    },
                    "info": {
                      "type": "string",
                      "example": "Database Error"
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