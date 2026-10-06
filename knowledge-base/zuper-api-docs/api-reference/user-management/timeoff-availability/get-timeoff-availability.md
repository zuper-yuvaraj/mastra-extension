---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Timeoff Availability

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
    "/timesheets/request/timeoff_availability": {
      "get": {
        "summary": "Get Timeoff Availability",
        "description": "",
        "operationId": "get-timeoff-availability",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "filter": {
                    "properties": {
                      "user_uid": {
                        "type": "string"
                      },
                      "request_type": {
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"timeoff_availability_uid\": \"e8e9ea7d-dc4b-48a7-96fe-2a6ef4a6b50c\",\n            \"year\": \"2022\",\n            \"remaining_days\": 11,\n            \"created_at\": \"2022-10-26T12:21:53.000Z\",\n            \"user\": {\n                \"user_uid\": \"fecc6ecd-82e7-4728-8e98-ebb038c2a34e\",\n                \"first_name\": \"Sam\",\n                \"last_name\": \"J\",\n                \"email\": \"Sabari@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"\",\n                \"designation\": \"iOS Lead\",\n                \"emp_code\": \"12345\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9626720760\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/7260c710-61fc-11eb-a02f-27c00cb0c514.jpeg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2019-02-19T09:27:55.000Z\",\n                \"updated_at\": \"2024-03-06T10:03:06.000Z\"\n            },\n            \"timeoff_request_type\": {\n                \"timeoff_request_type_uid\": \"938d422f-683e-4e97-b869-b5a4e254a693\",\n                \"name\": \"Earned Leave\",\n                \"type\": \"PAID\",\n                \"no_of_days_per_year\": 12,\n                \"is_deleted\": false,\n                \"created_at\": \"2021-10-28T05:04:10.000Z\",\n                \"updated_at\": \"2021-10-28T05:04:10.000Z\"\n            }\n        }\n    ]\n}"
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
                          "timeoff_availability_uid": {
                            "type": "string",
                            "example": "e8e9ea7d-dc4b-48a7-96fe-2a6ef4a6b50c"
                          },
                          "year": {
                            "type": "string",
                            "example": "2022"
                          },
                          "remaining_days": {
                            "type": "integer",
                            "example": 11,
                            "default": 0
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2022-10-26T12:21:53.000Z"
                          },
                          "user": {
                            "type": "object",
                            "properties": {
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
                              "email": {
                                "type": "string",
                                "example": "Sabari@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {
                                "type": "string",
                                "example": ""
                              },
                              "designation": {
                                "type": "string",
                                "example": "iOS Lead"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "12345"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "9626720760"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/7260c710-61fc-11eb-a02f-27c00cb0c514.jpeg"
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
                                "example": "2019-02-19T09:27:55.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-03-06T10:03:06.000Z"
                              }
                            }
                          },
                          "timeoff_request_type": {
                            "type": "object",
                            "properties": {
                              "timeoff_request_type_uid": {
                                "type": "string",
                                "example": "938d422f-683e-4e97-b869-b5a4e254a693"
                              },
                              "name": {
                                "type": "string",
                                "example": "Earned Leave"
                              },
                              "type": {
                                "type": "string",
                                "example": "PAID"
                              },
                              "no_of_days_per_year": {
                                "type": "integer",
                                "example": 12,
                                "default": 0
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2021-10-28T05:04:10.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2021-10-28T05:04:10.000Z"
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
                    "value": "{\n\t\"message\": \"Error in Fetching User Timeoff Availability\",\n\t\"type\":\"error\",\n\t\"title\": \"Error in Fetching User Timeoff Availability\",\n\t\"info\":\"Database Error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Fetching User Timeoff Availability"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Fetching User Timeoff Availability"
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