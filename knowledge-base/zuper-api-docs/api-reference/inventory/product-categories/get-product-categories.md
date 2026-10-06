---
updatedAt: 2026-06-23T08:51:34.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Product Categories

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
    "/products/category": {
      "get": {
        "summary": "Get Product Categories",
        "description": "",
        "operationId": "get-product-categories",
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
            "name": "count",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "DESC",
                "ASC"
              ],
              "default": "DESC"
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "display_order",
                "created_at"
              ]
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "For search (includes only category_name, category_description)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.category_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"category_name\": \"Furniture\",\n            \"category_uid\": \"3e2b4520-81ce-11e9-b902-35bbc7d2063e\",\n            \"created_by\": {\n                \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n                \"first_name\": \"Simon\",\n                \"last_name\": \"V\",\n                \"email\": \"simon@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"1234567890\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"120\",\n                \"prefix\": null,\n                \"work_phone_number\": \"1234567890\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2019-01-21T07:24:22.000Z\",\n                \"updated_at\": \"2024-01-25T11:25:16.000Z\"\n            },\n            \"is_deleted\": false,\n            \"category_description\": \"Used to categorize furniture stock .\",\n            \"category_icon\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/659c1b30-06ec-11eb-a03b-9d15494a2623.png\",\n            \"id\": \"undefined\"\n        },\n        {\n            \"category_name\": \"Electrical\",\n            \"category_uid\": \"ecdfb500-480d-11ea-85e2-91cf2fb0b4bb\",\n            \"created_by\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"user\",\n                \"last_name\": \"G\",\n                \"email\": \"user@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"1234567890\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"1234567890\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9b327242-0feb-4f21-8daf-7645a3a5bcf6.png\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2024-08-28T16:15:35.000Z\"\n            },\n            \"is_deleted\": false,\n            \"category_description\": \"All Parts related to electrical items\",\n            \"category_icon\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/89d0f770-06db-11eb-bc37-5fa54b837058.png\",\n            \"id\": \"undefined\"\n        },\n        {\n            \"category_name\": \"Civil Items\",\n            \"category_uid\": \"effde4f0-480d-11ea-85e2-91cf2fb0b4bb\",\n            \"created_by\": {\n                \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                \"first_name\": \"user\",\n                \"last_name\": \"G\",\n                \"email\": \"user@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"1234567890\",\n                \"designation\": \"CTO\",\n                \"emp_code\": \"1234\",\n                \"prefix\": null,\n                \"work_phone_number\": \"1234567890\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9b327242-0feb-4f21-8daf-7645a3a5bcf6.png\",\n                \"hourly_labor_charge\": 500,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-01-22T13:59:11.000Z\",\n                \"updated_at\": \"2024-08-28T16:15:35.000Z\"\n            },\n            \"is_deleted\": false,\n            \"category_description\": \"\",\n            \"category_icon\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/c8098c80-01a6-11eb-8413-cb1c6a9d4892.jpg\",\n            \"id\": \"undefined\"\n        }\n    ],\n    \"total_records\": 3,\n    \"current_page\": 1,\n    \"total_pages\": 1\n}"
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
                          "category_name": {
                            "type": "string",
                            "example": "Furniture"
                          },
                          "category_uid": {
                            "type": "string",
                            "example": "3e2b4520-81ce-11e9-b902-35bbc7d2063e"
                          },
                          "created_by": {
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
                                "example": "simon@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {
                                "type": "string",
                                "example": "1234567890"
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
                                "example": "1234567890"
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
                                "example": "2024-01-25T11:25:16.000Z"
                              }
                            }
                          },
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "category_description": {
                            "type": "string",
                            "example": "Used to categorize furniture stock ."
                          },
                          "category_icon": {
                            "type": "string",
                            "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/659c1b30-06ec-11eb-a03b-9d15494a2623.png"
                          },
                          "id": {
                            "type": "string",
                            "example": "undefined"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 3,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
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
                    "value": "{\n    \"type\": \"\",\n    \"title\": \"\",\n    \"message\": \"\"\n}"
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
                    "value": "{\n    \"type\": \"\",\n    \"message\": \"\"\n}"
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