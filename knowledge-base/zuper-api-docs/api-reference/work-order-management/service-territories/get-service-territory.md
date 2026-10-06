---
updatedAt: 2026-10-02T14:13:24.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Service Territory Details

Returns a single territory's full details, including populated teams and owners. There is no "zones" concept on a territory — the closest equivalents are the geofence boundary (territory_coordinates) or radius (territory_radius), plus the assigned teams/owners.

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
    "/territory/{territory_uid}": {
      "get": {
        "summary": "Get Service Territory Details",
        "description": "Returns a single territory's full details, including populated teams and owners. There is no \"zones\" concept on a territory — the closest equivalents are the geofence boundary (territory_coordinates) or radius (territory_radius), plus the assigned teams/owners.",
        "operationId": "get-service-territory",
        "parameters": [
          {
            "name": "territory_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"territory_radius\": {\n            \"radius\": 0\n        },\n        \"territory_uid\": \"0f4ee337-85c6-472b-a0c9-f471b67f8ea5\",\n        \"territory_name\": \"check 2\",\n        \"territory_description\": \"check\",\n        \"territory_color\": \"#4960a0\",\n        \"territory_type\": \"ZIPCODE\",\n        \"territory_zipcodes\": [\n            \"600028\"\n        ],\n        \"territory_coordinates\": [],\n        \"teams\": [\n            {\n                \"team\": {\n                    \"team_uid\": \"18cada40-021b-11e8-8127-43a5add1a9e2\",\n                    \"team_name\": \"SF Team\",\n                    \"team_color\": \"#3498db\",\n                    \"is_active\": 1,\n                    \"is_deleted\": 0\n                }\n            }\n        ],\n        \"owners\": [\n            {\n                \"owner\": {\n                    \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n                    \"first_name\": \"Hariharan\",\n                    \"last_name\": \"M\",\n                    \"email\": \"hariharan.m@zuper.co\",\n                    \"external_login_id\": \"\",\n                    \"home_phone_number\": null,\n                    \"designation\": \"Tech\",\n                    \"emp_code\": \"1234\",\n                    \"prefix\": \"Z22\",\n                    \"work_phone_number\": null,\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                    \"hourly_labor_charge\": 20,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2024-07-05T06:42:02.000Z\",\n                    \"updated_at\": \"2024-07-05T06:42:02.000Z\"\n                }\n            }\n        ],\n        \"created_by\": {\n            \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n            \"first_name\": \"Hariharan\",\n            \"last_name\": \"M\",\n            \"email\": \"hariharan.m@zuper.co\",\n            \"external_login_id\": \"\",\n            \"home_phone_number\": null,\n            \"designation\": \"Tech\",\n            \"emp_code\": \"1234\",\n            \"prefix\": \"Z22\",\n            \"work_phone_number\": null,\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n            \"hourly_labor_charge\": 20,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-07-05T06:42:02.000Z\",\n            \"updated_at\": \"2024-07-05T06:42:02.000Z\"\n        },\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-09-19T10:39:36.663Z\",\n        \"updated_at\": \"2024-09-19T10:39:36.667Z\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "success"
                      ]
                    },
                    "data": {
                      "type": "object",
                      "description": "territory_name, territory_description, territory_color, territory_uid, territory_type, territory_coordinates, territory_radius, territory_zipcodes, is_active, is_deleted, created_at, updated_at, plus populated teams ([{team: {...}}]), owners ([{owner: {...}}]), and created_by (populated user)."
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
                    "value": "{\"type\": \"error\", \"title\": \"Territory Not Found\", \"message\": \"Territory Not Found\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "401",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"error\", \"message\": \"Unauthorized Request\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"error\", \"title\": \"Territory Not Found\", \"message\": \"Territory Not Found\"}"
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-internal": false
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