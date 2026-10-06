---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get User Details

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
    "/user/{user_uid}}": {
      "get": {
        "summary": "Get User Details",
        "description": "",
        "operationId": "get-user-details",
        "parameters": [
          {
            "name": "user_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n        \"first_name\": \"Raghav\",\n        \"last_name\": \"G\",\n        \"email\": \"raghav@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"7397722822\",\n        \"designation\": \"CTO\",\n        \"emp_code\": \"1234\",\n        \"prefix\": null,\n        \"work_phone_number\": \"7397722822\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n        \"hourly_labor_charge\": 500,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2018-01-22T13:59:11.000Z\",\n        \"updated_at\": \"2023-05-02T10:58:16.000Z\",\n        \"created_by\": null,\n        \"role\": {\n            \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n            \"role_name\": \"Admin\",\n            \"role_key\": \"ADMIN\"\n        },\n        \"access_role\": null,\n        \"custom_fields\": [\n            {\n                \"label\": \"Text Area\",\n                \"value\": \"Test\",\n                \"type\": \"MULTI_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c6f8\"\n            },\n            {\n                \"label\": \"Select\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c6f9\"\n            },\n            {\n                \"label\": \"Hubspot ID\",\n                \"value\": \"1111\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c6fa\"\n            },\n            {\n                \"label\": \"Date Input\",\n                \"value\": \"2020-09-16\",\n                \"type\": \"DATE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c6fb\"\n            },\n            {\n                \"label\": \"Text Input\",\n                \"value\": \"https://www.google.com\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c6fc\"\n            },\n            {\n                \"label\": \"Time Input\",\n                \"value\": \"03:01:06\",\n                \"type\": \"TIME\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c6fd\"\n            },\n            {\n                \"label\": \"Checkbox\",\n                \"value\": \"\",\n                \"type\": \"MULTI_ITEM\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c6fe\"\n            },\n            {\n                \"label\": \"DateTime Input\",\n                \"value\": \"Invalid date\",\n                \"type\": \"DATETIME\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c6ff\"\n            },\n            {\n                \"label\": \"File Input\",\n                \"value\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/22b07a90-58c7-11ec-8cd9-09f70f10258f.xlsx\",\n                \"type\": \"FILE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c700\"\n            },\n            {\n                \"label\": \"Radio\",\n                \"value\": \"value one\",\n                \"type\": \"RADIO\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"64d3658680c73de03be1c701\"\n            },\n            {\n                \"label\": \"Image File\",\n                \"value\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3b46f6f0-99f0-11ec-b42d-e7a748cf8ce4.jpg\",\n                \"type\": \"FILE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Group 2\",\n                \"group_uid\": \"27c2b260-99ee-11ec-b42d-e7a748cf8ce4\",\n                \"_id\": \"64d3658680c73de03be1c702\"\n            },\n            {\n                \"label\": \"Radio2\",\n                \"value\": \"value one\",\n                \"type\": \"RADIO\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Group 2\",\n                \"group_uid\": \"27c2b260-99ee-11ec-b42d-e7a748cf8ce4\",\n                \"_id\": \"64d3658680c73de03be1c703\"\n            },\n            {\n                \"label\": \"Text ip\",\n                \"value\": \"https://www.google.com\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Group 1\",\n                \"group_uid\": \"9f0798c0-fd8e-11ea-abaf-7fac6d852c15\",\n                \"_id\": \"64d3658680c73de03be1c704\"\n            },\n            {\n                \"label\": \"Text Input\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c705\"\n            },\n            {\n                \"label\": \"Date Input\",\n                \"value\": \"\",\n                \"type\": \"DATE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c706\"\n            },\n            {\n                \"label\": \"Time Input\",\n                \"value\": \"Invalid date\",\n                \"type\": \"TIME\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c707\"\n            },\n            {\n                \"label\": \"DateTime Input\",\n                \"value\": \"\",\n                \"type\": \"DATETIME\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c708\"\n            },\n            {\n                \"label\": \"Text Area\",\n                \"value\": \"\",\n                \"type\": \"MULTI_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c709\"\n            },\n            {\n                \"label\": \"Select\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c70a\"\n            },\n            {\n                \"label\": \"Checkbox\",\n                \"value\": \"\",\n                \"type\": \"MULTI_ITEM\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c70b\"\n            },\n            {\n                \"label\": \"Radio\",\n                \"value\": \"\",\n                \"type\": \"RADIO\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c70c\"\n            },\n            {\n                \"label\": \"File Input\",\n                \"value\": \"\",\n                \"type\": \"FILE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c70d\"\n            },\n            {\n                \"label\": \"LookUp\",\n                \"value\": \"\",\n                \"type\": \"LOOKUP\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"Integration Custom Fields\",\n                \"group_uid\": \"7a363280-f0c1-11ed-97ee-553e701f4678\",\n                \"_id\": \"64d3658680c73de03be1c70e\"\n            },\n            {\n                \"label\": \"Text Input\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"test\",\n                \"group_uid\": \"ba27b380-2566-11ee-a69b-7379e3e44b9c\",\n                \"_id\": \"64d3658680c73de03be1c70f\"\n            },\n            {\n                \"label\": \"gfh\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"test\",\n                \"group_uid\": \"ba27b380-2566-11ee-a69b-7379e3e44b9c\",\n                \"_id\": \"64d3658680c73de03be1c710\"\n            },\n            {\n                \"label\": \"Zoho Employee Id\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"62c7cf76ede4dfea694a9b43\"\n            },\n            {\n                \"label\": \"Text Input 1\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"62c7cf76ede4dfea694a9b45\"\n            },\n            {\n                \"label\": \"File Input 1\",\n                \"value\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2431c360-58c7-11ec-8cd9-09f70f10258f.xlsx\",\n                \"type\": \"FILE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"62c7cf76ede4dfea694a9b4d\"\n            }\n        ]\n    }\n}"
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
                        "created_by": {},
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
                        "access_role": {},
                        "custom_fields": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "label": {
                                "type": "string",
                                "example": "Text Area"
                              },
                              "value": {
                                "type": "string",
                                "example": "Test"
                              },
                              "type": {
                                "type": "string",
                                "example": "MULTI_LINE"
                              },
                              "hide_to_fe": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "hide_field": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "read_only": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "_id": {
                                "type": "string",
                                "example": "64d3658680c73de03be1c6f8"
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
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\",\n          \"info\":\"\"\n}"
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