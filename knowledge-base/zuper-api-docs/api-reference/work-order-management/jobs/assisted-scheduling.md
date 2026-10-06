---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Assisted Scheduling

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
    "/assisted_scheduling": {
      "get": {
        "summary": "Assisted Scheduling",
        "description": "",
        "operationId": "assisted-scheduling",
        "parameters": [
          {
            "name": "from_date",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "to_date",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "job_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "job_category",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "job_duration",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "service_territory",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "zipcode",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "timezone",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "skillset_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "team_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "user_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "customer_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "favorite_user",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "user_type",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "consider_holidays",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "consider_only_user_shifts",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"type\": \"success\",\n  \"data\": {\n    \"availability\": [\n      {\n        \"date\": \"2023-11-01\",\n        \"holiday\": false,\n        \"slots\": [\n          {\n            \"start_time\": \"2023-11-01 06:46:20\",\n            \"end_time\": \"2023-11-01 14:46:20\",\n            \"users_available\": 2,\n            \"users\": [\n              \"6a18e31e-9432-4f0e-a54c-51a92e8536a4\",\n              \"14459a77-f6f3-4c5c-a1a1-20c0953410c5\"\n            ]\n          },\n          {\n            \"start_time\": \"2023-11-01 14:46:20\",\n            \"end_time\": \"2023-11-01 22:46:20\",\n            \"users_available\": 2,\n            \"users\": [\n              \"6a18e31e-9432-4f0e-a54c-51a92e8536a4\",\n              \"14459a77-f6f3-4c5c-a1a1-20c0953410c5\"\n            ]\n          }\n        ]\n      }\n    ],\n    \"users\": [\n      {\n        \"prefix\": null,\n        \"user_uid\": \"6a18e31e-9432-4f0e-a54c-51a92e8536a4\",\n        \"emp_code\": \"1234\",\n        \"first_name\": \"Raghav\",\n        \"last_name\": \"G\",\n        \"email\": \"raghav@zuper.co\",\n        \"external_login_id\": null,\n        \"designation\": \"CTO\",\n        \"home_phone_number\": \"7397722822\",\n        \"work_phone_number\": \"7397722822\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n        \"hourly_labor_charge\": 500,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_by\": null,\n        \"created_at\": \"2018-01-22T13:59:11.000Z\",\n        \"updated_at\": \"2023-05-02T10:58:16.000Z\",\n        \"role\": {\n          \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n          \"role_name\": \"Admin\",\n          \"role_key\": \"ADMIN\"\n        }\n      },\n      {\n        \"prefix\": null,\n        \"user_uid\": \"14459a77-f6f3-4c5c-a1a1-20c0953410c5\",\n        \"emp_code\": \"111\",\n        \"first_name\": \"James\",\n        \"last_name\": \"Smith\",\n        \"email\": \"zuper.admin@ranjith.dev\",\n        \"external_login_id\": null,\n        \"designation\": \"Admin\",\n        \"home_phone_number\": \"9876543210\",\n        \"work_phone_number\": \"9750183839\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/da506460-6a12-11ec-bb9b-5794434a5493.jpg\",\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_by\": null,\n        \"created_at\": \"2018-08-09T07:39:17.000Z\",\n        \"updated_at\": \"2023-08-22T07:53:02.000Z\",\n        \"role\": {\n          \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n          \"role_name\": \"Admin\",\n          \"role_key\": \"ADMIN\"\n        }\n      }\n    ]\n  }\n}"
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
                      "type": "object",
                      "properties": {
                        "availability": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "date": {
                                "type": "string",
                                "example": "2023-11-01"
                              },
                              "holiday": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "slots": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "start_time": {
                                      "type": "string",
                                      "example": "2023-11-01 06:46:20"
                                    },
                                    "end_time": {
                                      "type": "string",
                                      "example": "2023-11-01 14:46:20"
                                    },
                                    "users_available": {
                                      "type": "integer",
                                      "example": 2,
                                      "default": 0
                                    },
                                    "users": {
                                      "type": "array",
                                      "items": {
                                        "type": "string",
                                        "example": "6a18e31e-9432-4f0e-a54c-51a92e8536a4"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "users": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "prefix": {},
                              "user_uid": {
                                "type": "string",
                                "example": "6a18e31e-9432-4f0e-a54c-51a92e8536a4"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "1234"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Raghav"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "G"
                              },
                              "email": {
                                "type": "string",
                                "example": "raghav@zuper.co"
                              },
                              "external_login_id": {},
                              "designation": {
                                "type": "string",
                                "example": "CTO"
                              },
                              "home_phone_number": {
                                "type": "string",
                                "example": "7397722822"
                              },
                              "work_phone_number": {
                                "type": "string",
                                "example": "7397722822"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg"
                              },
                              "hourly_labor_charge": {
                                "type": "integer",
                                "example": 500,
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
                              "created_by": {},
                              "created_at": {
                                "type": "string",
                                "example": "2018-01-22T13:59:11.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-05-02T10:58:16.000Z"
                              },
                              "role": {
                                "type": "object",
                                "properties": {
                                  "role_uid": {
                                    "type": "string",
                                    "example": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b"
                                  },
                                  "role_name": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "role_key": {
                                    "type": "string",
                                    "example": "ADMIN"
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
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  message: \"No Team found\",\n\ttitle: \"Invalid Team UID\",\n  type: \"error\"\n}"
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