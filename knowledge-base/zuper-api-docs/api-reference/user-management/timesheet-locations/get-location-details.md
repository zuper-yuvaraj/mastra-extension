---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Location Details

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
    "/timesheet/location/{location_uid}": {
      "get": {
        "summary": "Get Location Details",
        "description": "",
        "operationId": "get-location-details",
        "parameters": [
          {
            "name": "location_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"employee_location_uid\": \"30386283-8247-4860-95cd-2a0075bdca1a\",\n            \"emp_code\": \"12345\",\n            \"user_uid\": \"fecc6ecd-82e7-4728-8e98-ebb038c2a34e\",\n            \"first_name\": \"Sam\",\n            \"last_name\": \"J\",\n            \"designation\": \"iOS Lead\",\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/7260c710-61fc-11eb-a02f-27c00cb0c514.jpeg\",\n            \"email\": \"Sabari@zuper.co\",\n            \"is_active\": 1\n        }\n    ]\n}"
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
                          "employee_location_uid": {
                            "type": "string",
                            "example": "30386283-8247-4860-95cd-2a0075bdca1a"
                          },
                          "emp_code": {
                            "type": "string",
                            "example": "12345"
                          },
                          "user_uid": {
                            "type": "string",
                            "example": "fecc6ecd-82e7-4728-8e98-ebb038c2a34e"
                          },
                          "first_name": {
                            "type": "string",
                            "example": "Sam"
                          },
                          "last_name": {
                            "type": "string",
                            "example": "J"
                          },
                          "designation": {
                            "type": "string",
                            "example": "iOS Lead"
                          },
                          "profile_picture": {
                            "type": "string",
                            "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/7260c710-61fc-11eb-a02f-27c00cb0c514.jpeg"
                          },
                          "email": {
                            "type": "string",
                            "example": "Sabari@zuper.co"
                          },
                          "is_active": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
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