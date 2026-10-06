---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get all Pricelist

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
    "/products/pricelist": {
      "get": {
        "summary": "Get all Pricelist",
        "description": "",
        "operationId": "get-all-pricelist",
        "parameters": [
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "created_at",
                "pricelist_name"
              ],
              "default": "created_at"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "default": "ASC"
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
            "name": "limit",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
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
            "name": "filter.pricelist_type",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "PER_ITEM",
                "FIXED_DISCOUNT",
                "FIXED_MARGIN"
              ]
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
            "name": "filter.created_at_from",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.created_at_to",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"pricelist_uid\": \"82b8f5a0-3e9a-11ef-9ce4-1d9d49193912\",\n            \"pricelist_name\": \"PER ITEM MARGIN $100\",\n            \"pricelist_type\": \"PER_ITEM\",\n            \"is_active\": false,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"4088adc6-c6ed-45a2-845d-451f28938960\",\n                \"first_name\": \"Valliyappan\",\n                \"last_name\": \"S\",\n                \"email\": \"valliyappan.s@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"9600086457\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9600086457\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2024-03-22T07:41:38.000Z\",\n                \"updated_at\": \"2024-03-22T07:41:38.000Z\"\n            },\n            \"created_at\": \"2024-07-10T08:58:01.086Z\",\n            \"updated_at\": \"2024-07-15T13:05:34.187Z\",\n            \"pricelist_id\": 34,\n            \"display_pricelist_value\": \"Per Item\"\n        },\n        {\n            \"pricelist_uid\": \"6bf68c20-3e8f-11ef-acac-2f5b2fdfda57\",\n            \"pricelist_name\": \"All item Margin%\",\n            \"pricelist_type\": \"FIXED_MARGIN\",\n            \"pricelist_value_type\": \"PERCENTAGE\",\n            \"pricelist_value\": 10,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"4088adc6-c6ed-45a2-845d-451f28938960\",\n                \"first_name\": \"Valliyappan\",\n                \"last_name\": \"S\",\n                \"email\": \"valliyappan.s@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"9600086457\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9600086457\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2024-03-22T07:41:38.000Z\",\n                \"updated_at\": \"2024-03-22T07:41:38.000Z\"\n            },\n            \"created_at\": \"2024-07-10T07:38:38.435Z\",\n            \"updated_at\": \"2024-07-10T07:38:38.435Z\",\n            \"pricelist_id\": 33,\n            \"display_pricelist_value\": \"Discount - 10%\"\n        }\n    ],\n    \"total_records\": 37,\n    \"current_page\": 1,\n    \"total_pages\": 19\n}"
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
                          "pricelist_uid": {
                            "type": "string",
                            "example": "82b8f5a0-3e9a-11ef-9ce4-1d9d49193912"
                          },
                          "pricelist_name": {
                            "type": "string",
                            "example": "PER ITEM MARGIN $100"
                          },
                          "pricelist_type": {
                            "type": "string",
                            "example": "PER_ITEM"
                          },
                          "is_active": {
                            "type": "boolean",
                            "example": false,
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
                                "example": "4088adc6-c6ed-45a2-845d-451f28938960"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Valliyappan"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "S"
                              },
                              "email": {
                                "type": "string",
                                "example": "valliyappan.s@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {
                                "type": "string",
                                "example": "9600086457"
                              },
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "001"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "9600086457"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": ""
                              },
                              "hourly_labor_charge": {},
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
                                "example": "2024-03-22T07:41:38.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-03-22T07:41:38.000Z"
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-07-10T08:58:01.086Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-07-15T13:05:34.187Z"
                          },
                          "pricelist_id": {
                            "type": "integer",
                            "example": 34,
                            "default": 0
                          },
                          "display_pricelist_value": {
                            "type": "string",
                            "example": "Per Item"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 37,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 19,
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
                    "value": "{\n    \"message\": \"Sort must be either ASC / DESC\",\n    \"title\": \"Invalid Sort Type\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
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