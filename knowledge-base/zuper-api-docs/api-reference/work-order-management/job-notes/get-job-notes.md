---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Job Notes

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
    "/jobs/{job_uid}/note": {
      "get": {
        "summary": "Get Job Notes",
        "description": "",
        "operationId": "get-job-notes",
        "parameters": [
          {
            "name": "job_uid",
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
                "created_at",
                "attachment_name"
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"note_uid\": \"4cf5df5e-9d25-474f-8cb5-ad4374923ae6\",\n            \"note_type\": \"TEXT\",\n            \"note\": \"<p>hi</p>\",\n            \"attachments\": [],\n            \"created_by\": {\n                \"user_uid\": \"b9c91ee7-850f-47b7-b2cd-a6b78f4254d3\",\n                \"first_name\": \"Tom\",\n                \"last_name\": \"R\",\n                \"email\": \"tom.r@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/4ddf323f-19ed-4b56-81cc-70d0bdf628c5/ea2602d9-0379-4ffb-a2c0-916dc2558c56.JPG\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2024-06-14T07:34:28.000Z\",\n                \"updated_at\": \"2024-09-18T04:03:31.000Z\"\n            },\n            \"user_mentions\": [],\n            \"visible_to_customer\": false,\n            \"is_private\": false,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-09-19T08:56:51.359Z\",\n            \"updated_at\": \"2024-09-19T08:56:51.373Z\",\n            \"is_v2_note\": true\n        }\n    ]\n}"
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
                            "example": "4cf5df5e-9d25-474f-8cb5-ad4374923ae6"
                          },
                          "note_type": {
                            "type": "string",
                            "example": "TEXT"
                          },
                          "note": {
                            "type": "string",
                            "example": "<p>hi</p>"
                          },
                          "attachments": {
                            "type": "array"
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "b9c91ee7-850f-47b7-b2cd-a6b78f4254d3"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Tom"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "R"
                              },
                              "email": {
                                "type": "string",
                                "example": "tom.r@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "001"
                              },
                              "prefix": {},
                              "work_phone_number": {},
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/4ddf323f-19ed-4b56-81cc-70d0bdf628c5/ea2602d9-0379-4ffb-a2c0-916dc2558c56.JPG"
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
                                "example": "2024-06-14T07:34:28.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-09-18T04:03:31.000Z"
                              }
                            }
                          },
                          "user_mentions": {
                            "type": "array"
                          },
                          "visible_to_customer": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "is_private": {
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
                            "example": "2024-09-19T08:56:51.359Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-09-19T08:56:51.373Z"
                          },
                          "is_v2_note": {
                            "type": "boolean",
                            "example": true,
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
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n\ttype: Constants.ERROR_MSG,\n  message: \"Job Not found for given UID\",\n\ttitle: \"Job not found\"\n}"
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
                    "value": "{\n  type: \"error\",\n  message: \"Error in getting Job Details\",\n  title: \"Error in getting Job Details\",\n\tdata: \"\"\n}"
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