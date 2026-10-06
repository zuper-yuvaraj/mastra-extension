---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Timeoff Request Type

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
    "/timesheet/request/timeoff_type": {
      "get": {
        "summary": "Get Timeoff Request Type",
        "description": "",
        "operationId": "get-timeoff-request-type",
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
                      }
                    },
                    "required": [],
                    "type": "object"
                  },
                  "sort": {
                    "type": "string",
                    "enum": [
                      "ASC",
                      "DESC"
                    ]
                  },
                  "sort_by": {
                    "type": "string",
                    "enum": [
                      "display_order",
                      "created_at"
                    ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"timeoff_request_type_uid\": \"8b340e5f-0a79-44be-bd0e-dafd7792a1c9\",\n            \"name\": \"Sick Leave\",\n            \"no_of_days_per_year\": 5,\n            \"type\": \"UNPAID\",\n            \"display_order\": null,\n            \"created_at\": \"2021-10-28T05:04:02.000Z\",\n            \"created_by_user\": {\n                \"user_uid\": \"ab6d4ab2-19ee-4093-9995-025fa9f78273\",\n                \"first_name\": \"Sesha\",\n                \"last_name\": \"Madhav\",\n                \"email\": \"sesha@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Tech 123\",\n                \"emp_code\": \"2030303\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9883733222\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2020-05-09T04:52:02.000Z\",\n                \"updated_at\": \"2024-08-18T05:56:55.000Z\"\n            }\n        }\n    ]\n}"
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
                          "timeoff_request_type_uid": {
                            "type": "string",
                            "example": "8b340e5f-0a79-44be-bd0e-dafd7792a1c9"
                          },
                          "name": {
                            "type": "string",
                            "example": "Sick Leave"
                          },
                          "no_of_days_per_year": {
                            "type": "integer",
                            "example": 5,
                            "default": 0
                          },
                          "type": {
                            "type": "string",
                            "example": "UNPAID"
                          },
                          "display_order": {},
                          "created_at": {
                            "type": "string",
                            "example": "2021-10-28T05:04:02.000Z"
                          },
                          "created_by_user": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "ab6d4ab2-19ee-4093-9995-025fa9f78273"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Sesha"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Madhav"
                              },
                              "email": {
                                "type": "string",
                                "example": "sesha@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Tech 123"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "2030303"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "9883733222"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                              },
                              "hourly_labor_charge": {
                                "type": "integer",
                                "example": 120,
                                "default": 0
                              },
                              "is_active": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2020-05-09T04:52:02.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-08-18T05:56:55.000Z"
                              }
                            }
                          }
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
                    "value": "{\n  message:\"Error in Fetching User TimeOff Request Type\",\n  title:\"Error in Fetching User TimeOff Request Type\",\n\ttype:\"error\",\n  info:\"Database Error\"\n}"
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