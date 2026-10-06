---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Users

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
    "/user/all": {
      "get": {
        "summary": "Get All Users",
        "description": "",
        "operationId": "get-all-users-1",
        "parameters": [
          {
            "name": "filter.date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_active",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.role_id",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "filter.team_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.user_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.custom_field",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.designation",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.skillset_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.access_role_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_assigned_to_team",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.business_unit",
            "in": "query",
            "schema": {
              "type": "string"
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n            \"first_name\": \"Raghav\",\n            \"last_name\": \"G\",\n            \"email\": \"raghav@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": \"7397722822\",\n            \"designation\": \"CTO\",\n            \"emp_code\": \"1234\",\n            \"prefix\": null,\n            \"work_phone_number\": \"7397722822\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n            \"hourly_labor_charge\": 500,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2018-01-22T13:59:11.000Z\",\n            \"updated_at\": \"2023-05-02T10:58:16.000Z\",\n            \"role\": {\n                \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n                \"role_name\": \"Admin\",\n                \"role_key\": \"ADMIN\"\n            },\n            \"access_role\": null\n        },\n        {\n            \"user_uid\": \"fea19530-406f-11e8-b99a-59f39b812a88\",\n            \"first_name\": \"Henry\",\n            \"last_name\": \"Jones\",\n            \"email\": \"zuper.fe@ranjith.dev\",\n            \"external_login_id\": null,\n            \"home_phone_number\": \"6383917712\",\n            \"designation\": \"Dev\",\n            \"emp_code\": \"11345\",\n            \"prefix\": null,\n            \"work_phone_number\": \"9750183839\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/80894390-2125-11ee-9dcd-affe7f3e9b1d.jpg\",\n            \"hourly_labor_charge\": 99.99,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2018-04-15T05:43:59.000Z\",\n            \"updated_at\": \"2023-09-14T12:07:43.000Z\",\n            \"role\": {\n                \"role_uid\": \"504e52bc-ff7d-11e7-8be5-0ed5f89f718b\",\n                \"role_name\": \"Field Executive\",\n                \"role_key\": \"FIELD_EXECUTIVE\"\n            },\n            \"access_role\": null\n        }\n    ],\n    \"total_records\": 371,\n    \"total_pages\": 38,\n    \"current_page\": 1\n}"
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
                          "user_uid": {
                            "type": "string",
                            "example": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa"
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
                          "home_phone_number": {
                            "type": "string",
                            "example": "7397722822"
                          },
                          "designation": {
                            "type": "string",
                            "example": "CTO"
                          },
                          "emp_code": {
                            "type": "string",
                            "example": "1234"
                          },
                          "prefix": {},
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
                          },
                          "access_role": {}
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 371,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 38,
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
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\",\n        \"info\": \"Database Error\" \n}"
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