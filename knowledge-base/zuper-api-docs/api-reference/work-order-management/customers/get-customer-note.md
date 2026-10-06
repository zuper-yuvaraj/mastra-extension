---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Customer Note

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
    "/customers/{customer_uid}/note": {
      "get": {
        "summary": "Get Customer Note",
        "description": "",
        "operationId": "get-customer-note",
        "parameters": [
          {
            "name": "customer_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
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
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "attachment_name",
                "created_at"
              ],
              "default": "created_at"
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"note_uid\": \"57221a03-59b0-4888-8e2a-5075570310d7\",\n            \"note_type\": \"TEXT\",\n            \"note\": \"<p>Sample</p>\",\n            \"attachments\": [],\n            \"created_by\": {\n                \"user_uid\": \"641aacc5-3a7a-4c3c-beec-fa6c186e37ec\",\n                \"first_name\": \"JohnDoe\",\n                \"last_name\": \"S\",\n                \"email\": \"johndoe.s@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z98\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/c5914720-043e-11ee-89dd-7d1eb09002c4.JPG\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-04-22T05:06:25.000Z\",\n                \"updated_at\": \"2023-06-06T07:50:15.000Z\"\n            },\n            \"created_by_type\": \"EMPLOYEE\",\n            \"is_private\": false,\n            \"visible_to_customer\": false,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-09-20T05:54:57.567Z\",\n            \"updated_at\": \"2024-09-20T05:54:57.568Z\",\n            \"is_v2_note\": false\n        }\n    ]\n}"
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
                          "note_uid": {
                            "type": "string",
                            "example": "57221a03-59b0-4888-8e2a-5075570310d7"
                          },
                          "note_type": {
                            "type": "string",
                            "example": "TEXT"
                          },
                          "note": {
                            "type": "string",
                            "example": "<p>Sample</p>"
                          },
                          "attachments": {
                            "type": "array"
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "641aacc5-3a7a-4c3c-beec-fa6c186e37ec"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "JohnDoe"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "S"
                              },
                              "email": {
                                "type": "string",
                                "example": "johndoe.s@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z98"
                              },
                              "prefix": {},
                              "work_phone_number": {},
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/c5914720-043e-11ee-89dd-7d1eb09002c4.JPG"
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
                                "example": "2022-04-22T05:06:25.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-06-06T07:50:15.000Z"
                              }
                            }
                          },
                          "created_by_type": {
                            "type": "string",
                            "example": "EMPLOYEE"
                          },
                          "is_private": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "visible_to_customer": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-09-20T05:54:57.567Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-09-20T05:54:57.568Z"
                          },
                          "is_v2_note": {
                            "type": "boolean",
                            "example": false,
                            "default": true
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
                    "value": "{\n        \"message\": \"Customer UID is Mandatory\",\n        \"title\": \"Missing Customer UID\",\n        \"type\": \"error\"\n    }"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Customer UID is Mandatory"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Customer UID"
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