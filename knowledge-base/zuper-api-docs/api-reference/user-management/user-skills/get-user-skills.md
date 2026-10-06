---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get User Skills

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
    "/users/{user_uid}/skill": {
      "get": {
        "summary": "Get User Skills",
        "description": "",
        "operationId": "get-user-skills",
        "parameters": [
          {
            "name": "user_uid",
            "in": "path",
            "description": "user uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"user_skills_uid\": \"f4672005-a210-4df9-9fff-f7ac81eff148\",\n            \"skill_level\": 70,\n            \"start_date\": \"2023-04-30T18:30:00.000Z\",\n            \"end_date\": \"2024-05-01T18:29:59.000Z\",\n            \"is_deleted\": false,\n            \"created_at\": \"2023-08-09T10:08:06.000Z\",\n            \"skillsets\": {\n                \"skillset_uid\": \"984fb623-ee58-4894-8edf-2b50d4bac217\",\n                \"skillset_description\": \"Kitchen Installation\",\n                \"skillset_name\": \"Kitchen Installation\",\n                \"default_validity\": 1,\n                \"is_deleted\": false,\n                \"created_by_user\": {\n                    \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n                    \"first_name\": \"Simon\",\n                    \"last_name\": \"V\",\n                    \"email\": \"sreevidya@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": \"7010092903\",\n                    \"designation\": \"Admin\",\n                    \"emp_code\": \"120\",\n                    \"prefix\": null,\n                    \"work_phone_number\": \"7010092903\",\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n                    \"hourly_labor_charge\": 120,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2019-01-21T07:24:22.000Z\",\n                    \"updated_at\": \"2023-10-05T11:24:19.000Z\"\n                }\n            },\n            \"created_by_user\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"Raghav\",\n                \"last_name\": \"G\",\n                \"email\": \"raghav@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722822\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2023-05-02T10:58:16.000Z\"\n            }\n        },\n        {\n            \"user_skills_uid\": \"3658b30a-b307-42a4-97de-b5749f703e33\",\n            \"skill_level\": 12,\n            \"start_date\": null,\n            \"end_date\": null,\n            \"is_deleted\": false,\n            \"created_at\": \"2023-08-09T10:08:06.000Z\",\n            \"skillsets\": {\n                \"skillset_uid\": \"15967263-125b-4a75-85f0-3e5f5cbcbff0\",\n                \"skillset_description\": \"Installation\",\n                \"skillset_name\": \"AC installation\",\n                \"default_validity\": 3,\n                \"is_deleted\": false,\n                \"created_by_user\": {\n                    \"user_uid\": \"1eb1d499-e8b1-4979-a04b-4b0599599529\",\n                    \"first_name\": \"Ashin\",\n                    \"last_name\": \"Thankachan\",\n                    \"email\": \"ashin.t@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": null,\n                    \"designation\": \"Admin\",\n                    \"emp_code\": \"Z103\",\n                    \"prefix\": null,\n                    \"work_phone_number\": \"8301907278\",\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/d26d3dd0-0c47-11ee-b705-491517420371.jpg\",\n                    \"hourly_labor_charge\": 120,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2022-07-04T06:25:56.000Z\",\n                    \"updated_at\": \"2023-10-05T08:30:17.000Z\"\n                }\n            },\n            \"created_by_user\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"Raghav\",\n                \"last_name\": \"G\",\n                \"email\": \"raghav@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722822\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2023-05-02T10:58:16.000Z\"\n            }\n        }\n    ]\n}"
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
                          "user_skills_uid": {
                            "type": "string",
                            "example": "f4672005-a210-4df9-9fff-f7ac81eff148"
                          },
                          "skill_level": {
                            "type": "integer",
                            "example": 70,
                            "default": 0
                          },
                          "start_date": {
                            "type": "string",
                            "example": "2023-04-30T18:30:00.000Z"
                          },
                          "end_date": {
                            "type": "string",
                            "example": "2024-05-01T18:29:59.000Z"
                          },
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-08-09T10:08:06.000Z"
                          },
                          "skillsets": {
                            "type": "object",
                            "properties": {
                              "skillset_uid": {
                                "type": "string",
                                "example": "984fb623-ee58-4894-8edf-2b50d4bac217"
                              },
                              "skillset_description": {
                                "type": "string",
                                "example": "Kitchen Installation"
                              },
                              "skillset_name": {
                                "type": "string",
                                "example": "Kitchen Installation"
                              },
                              "default_validity": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "created_by_user": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "71468f36-a847-49a6-b849-02b6992b2b08"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Simon"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "V"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "sreevidya@zuper.co"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {
                                    "type": "string",
                                    "example": "7010092903"
                                  },
                                  "designation": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "120"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {
                                    "type": "string",
                                    "example": "7010092903"
                                  },
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg"
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
                                    "example": "2019-01-21T07:24:22.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2023-10-05T11:24:19.000Z"
                                  }
                                }
                              }
                            }
                          },
                          "created_by_user": {
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
                    "value": "{\n      message: \"No user found for the given user UID\",\n      title: \"Invalid User UID\",\n      type: \"error\"\n}"
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
                    "value": "{\n\t\t\t\t\"message\": \"Error in getting user skillset\"\",\n\t\t\t\t\"title\": \"Error in getting user skillset\"\",\n\t\t\t\t\"type\": \"error\",\n        \"info\":\"Database Error\"\n}"
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