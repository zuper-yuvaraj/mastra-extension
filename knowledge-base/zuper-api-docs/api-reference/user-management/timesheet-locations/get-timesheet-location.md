---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Timesheet Location

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
    "/timesheet/location": {
      "get": {
        "summary": "Get Timesheet Location",
        "description": "",
        "operationId": "get-timesheet-location",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "limit",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "filter": {
                    "properties": {
                      "keyword": {
                        "type": "string"
                      },
                      "location_uid": {
                        "type": "string"
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"location_uid\": \"4a5ec1a6-13e3-4fc8-b2be-74812ea4b0ee\",\n            \"location_name\": \"RK Industries Address\",\n            \"latitude\": 13.010247230529783,\n            \"longitude\": 80.21058654785156,\n            \"address\": \"Somewhere in Guindy\",\n            \"radius\": 1000,\n            \"created_at\": \"2019-06-26T05:49:09.000Z\",\n            \"is_deleted\": 0\n        }\n    ],\n    \"total_records\": 28,\n    \"total_pages\": 3,\n    \"current_page\": 1\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "location_uid": {
                            "type": "string",
                            "example": "4a5ec1a6-13e3-4fc8-b2be-74812ea4b0ee"
                          },
                          "location_name": {
                            "type": "string",
                            "example": "RK Industries Address"
                          },
                          "latitude": {
                            "type": "number",
                            "example": 13.0102472305298,
                            "default": 0
                          },
                          "longitude": {
                            "type": "number",
                            "example": 80.2105865478516,
                            "default": 0
                          },
                          "address": {
                            "type": "string",
                            "example": "Somewhere in Guindy"
                          },
                          "radius": {
                            "type": "integer",
                            "example": 1000,
                            "default": 0
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2019-06-26T05:49:09.000Z"
                          },
                          "is_deleted": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 28,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 3,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
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