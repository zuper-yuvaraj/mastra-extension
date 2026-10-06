---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get a Template

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
    "/invoice_estimate/proposal_template/{template_uid}": {
      "get": {
        "summary": "Get a Template",
        "description": "",
        "operationId": "get-a-proposal-template",
        "parameters": [
          {
            "name": "template_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"display_order\": 29,\n        \"template_uid\": \"1ba328d0-cc12-11ef-9219-a7dda2f2c479\",\n        \"template_name\": \"Test2\",\n        \"template_description\": \"test2\",\n        \"proposal_options\": [],\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_by\": {\n            \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n            \"first_name\": \"des\",\n            \"last_name\": \"des\",\n            \"email\": \"des.m@des.co\",\n            \"external_login_id\": \"\",\n            \"home_phone_number\": null,\n            \"designation\": \"Tech\",\n            \"emp_code\": \"1234\",\n            \"prefix\": \"Z22\",\n            \"work_phone_number\": null,\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n            \"hourly_labor_charge\": 20,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-07-05T06:42:02.000Z\",\n            \"updated_at\": \"2024-12-26T12:12:07.000Z\"\n        },\n        \"created_at\": \"2025-01-06T09:39:21.696Z\",\n        \"updated_at\": \"2025-01-06T09:39:21.696Z\"\n    }\n}"
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
                        "display_order": {
                          "type": "integer",
                          "example": 29,
                          "default": 0
                        },
                        "template_uid": {
                          "type": "string",
                          "example": "1ba328d0-cc12-11ef-9219-a7dda2f2c479"
                        },
                        "template_name": {
                          "type": "string",
                          "example": "Test2"
                        },
                        "template_description": {
                          "type": "string",
                          "example": "test2"
                        },
                        "proposal_options": {
                          "type": "array"
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
                              "example": "des"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "des"
                            },
                            "email": {
                              "type": "string",
                              "example": "des.m@des.co"
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
                              "example": "2024-12-26T12:12:07.000Z"
                            }
                          }
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2025-01-06T09:39:21.696Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2025-01-06T09:39:21.696Z"
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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