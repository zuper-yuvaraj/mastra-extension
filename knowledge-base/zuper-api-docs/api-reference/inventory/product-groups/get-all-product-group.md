---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Products Group

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
    "/product/group": {
      "get": {
        "summary": "Get All Products Group",
        "description": "",
        "operationId": "get-all-product-group",
        "parameters": [
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
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
                "product_group_name",
                "created_at"
              ],
              "default": "created_at"
            }
          },
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
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "filter.product_uid",
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
            "name": "filter.keyword",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"product_group_uid\": \"1985efa7-2622-49ae-81ae-21527a0479f2\",\n            \"product_group_name\": \"Group 1\",\n            \"product_group_description\": \"<p>Group 1</p>\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n                \"first_name\": \"john\",\n                \"last_name\": \"M\",\n                \"email\": \"john@zuper\",\n                \"external_login_id\": \"\",\n                \"home_phone_number\": null,\n                \"designation\": \"Tech\",\n                \"emp_code\": \"1234\",\n                \"prefix\": \"Z22\",\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2024-07-05T06:42:02.000Z\",\n                \"updated_at\": \"2024-07-05T06:42:02.000Z\"\n            },\n            \"created_at\": \"2024-07-16T05:21:36.226Z\",\n            \"product_count\": 1\n        }\n    ],\n    \"total_records\": 1,\n    \"current_page\": 1,\n    \"total_pages\": 1\n}"
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
                          "product_group_uid": {
                            "type": "string",
                            "example": "1985efa7-2622-49ae-81ae-21527a0479f2"
                          },
                          "product_group_name": {
                            "type": "string",
                            "example": "Group 1"
                          },
                          "product_group_description": {
                            "type": "string",
                            "example": "<p>Group 1</p>"
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
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "48625036-fef6-4637-99e7-f09377a4f9ba"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "john"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "M"
                              },
                              "email": {
                                "type": "string",
                                "example": "john@zuper"
                              },
                              "external_login_id": {
                                "type": "string",
                                "example": ""
                              },
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Tech"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "1234"
                              },
                              "prefix": {
                                "type": "string",
                                "example": "Z22"
                              },
                              "work_phone_number": {},
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                              },
                              "hourly_labor_charge": {
                                "type": "integer",
                                "example": 20,
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
                                "example": "2024-07-05T06:42:02.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-07-05T06:42:02.000Z"
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-07-16T05:21:36.226Z"
                          },
                          "product_count": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 1,
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
                  "Bad Sort Type": {
                    "value": "{\n     \"message\": \"Sort must be either ASC / DESC\",\n      \"title\": \"Invalid Sort Type\",\n      \"type\": \"error\"\n}"
                  },
                  "Bad Sort Value": {
                    "value": "{\n     \"message\": \"Sort must be either product_group_name / created_at\",\n      \"title\": \"Invalid Sort By Value\",\n      \"type\": \"error\"\n}"
                  },
                  "Data Not Found": {
                    "value": "{\n     \"message\": \"Product Groups Not Found\",\n      \"title\": \"Product Groups Not Found\",\n      \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Bad Sort Type",
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Sort must be either ASC / DESC"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Sort Type"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "title": "Bad Sort Value",
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Sort must be either product_group_name / created_at"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Sort By Value"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "title": "Data Not Found",
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Product Groups Not Found"
                        },
                        "title": {
                          "type": "string",
                          "example": "Product Groups Not Found"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    }
                  ]
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