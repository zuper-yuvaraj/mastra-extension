---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Timeoff Requests

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
    "/timesheets/request/timeoff": {
      "get": {
        "summary": "Get Timeoff Requests",
        "description": "",
        "operationId": "get-timeoff",
        "parameters": [
          {
            "name": "filter.from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.to_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
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
            "name": "filter.approval_status",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "PENDING",
                "APPROVED",
                "REJECTED"
              ]
            }
          },
          {
            "name": "filter.requested_at",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
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
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "requested_at",
                "approval_status"
              ],
              "default": "requested_at"
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
                    "value": "{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"exempt_dates\": [],\n            \"request_uid\": \"0eb23511-f58e-434a-9e46-5bf2b5eda972\",\n            \"request_from\": \"2024-09-19T04:30:00.000Z\",\n            \"requested_at\": \"2024-09-19T11:37:27.000Z\",\n            \"request_to\": \"2024-09-19T12:30:00.000Z\",\n            \"all_day\": true,\n            \"request_reason\": \"OFF\",\n            \"request_remarks\": \"test\",\n            \"approval_status\": \"APPROVED\",\n            \"no_of_days\": 1,\n            \"approved_at\": \"2024-09-19T11:37:27.000Z\",\n            \"approval_remarks\": \"Auto Approved\",\n            \"created_at\": \"2024-09-19T11:37:27.000Z\",\n            \"requested_by\": {\n                \"user_uid\": \"c425fe39-2309-4d2b-87b8-5b4b65546ccb\",\n                \"first_name\": \"Velmurugan\",\n                \"last_name\": \"K\",\n                \"email\": \"velmurugan.k@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z111\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0772b941-2f4e-4723-b0d4-cf6ba1064845.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-11-02T10:35:52.000Z\",\n                \"updated_at\": \"2024-09-19T09:50:15.000Z\"\n            },\n            \"created_by_user\": {\n                \"user_uid\": \"c425fe39-2309-4d2b-87b8-5b4b65546ccb\",\n                \"first_name\": \"Velmurugan\",\n                \"last_name\": \"K\",\n                \"email\": \"velmurugan.k@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z111\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0772b941-2f4e-4723-b0d4-cf6ba1064845.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-11-02T10:35:52.000Z\",\n                \"updated_at\": \"2024-09-19T09:50:15.000Z\"\n            },\n            \"requested_by_team\": {\n                \"team_uid\": \"18cada40-021b-11e8-8127-43a5add1a9e2\",\n                \"team_name\": \"SF Team\",\n                \"team_description\": \"This team covers 603211, 603222, 603223\",\n                \"team_color\": \"#3498db\"\n            },\n            \"approved_by_user\": {\n                \"user_uid\": \"c425fe39-2309-4d2b-87b8-5b4b65546ccb\",\n                \"first_name\": \"Velmurugan\",\n                \"last_name\": \"K\",\n                \"email\": \"velmurugan.k@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z111\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0772b941-2f4e-4723-b0d4-cf6ba1064845.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-11-02T10:35:52.000Z\",\n                \"updated_at\": \"2024-09-19T09:50:15.000Z\"\n            },\n            \"timeoff_request_type\": null\n        }\n    ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "exempt_dates": {
                            "type": "array"
                          },
                          "request_uid": {
                            "type": "string",
                            "example": "0eb23511-f58e-434a-9e46-5bf2b5eda972"
                          },
                          "request_from": {
                            "type": "string",
                            "example": "2024-09-19T04:30:00.000Z"
                          },
                          "requested_at": {
                            "type": "string",
                            "example": "2024-09-19T11:37:27.000Z"
                          },
                          "request_to": {
                            "type": "string",
                            "example": "2024-09-19T12:30:00.000Z"
                          },
                          "all_day": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "request_reason": {
                            "type": "string",
                            "example": "OFF"
                          },
                          "request_remarks": {
                            "type": "string",
                            "example": "test"
                          },
                          "approval_status": {
                            "type": "string",
                            "example": "APPROVED"
                          },
                          "no_of_days": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "approved_at": {
                            "type": "string",
                            "example": "2024-09-19T11:37:27.000Z"
                          },
                          "approval_remarks": {
                            "type": "string",
                            "example": "Auto Approved"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-09-19T11:37:27.000Z"
                          },
                          "requested_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "c425fe39-2309-4d2b-87b8-5b4b65546ccb"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Velmurugan"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "K"
                              },
                              "email": {
                                "type": "string",
                                "example": "velmurugan.k@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z111"
                              },
                              "prefix": {},
                              "work_phone_number": {},
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0772b941-2f4e-4723-b0d4-cf6ba1064845.jpg"
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
                                "example": "2022-11-02T10:35:52.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-09-19T09:50:15.000Z"
                              }
                            }
                          },
                          "created_by_user": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "c425fe39-2309-4d2b-87b8-5b4b65546ccb"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Velmurugan"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "K"
                              },
                              "email": {
                                "type": "string",
                                "example": "velmurugan.k@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z111"
                              },
                              "prefix": {},
                              "work_phone_number": {},
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0772b941-2f4e-4723-b0d4-cf6ba1064845.jpg"
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
                                "example": "2022-11-02T10:35:52.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-09-19T09:50:15.000Z"
                              }
                            }
                          },
                          "requested_by_team": {
                            "type": "object",
                            "properties": {
                              "team_uid": {
                                "type": "string",
                                "example": "18cada40-021b-11e8-8127-43a5add1a9e2"
                              },
                              "team_name": {
                                "type": "string",
                                "example": "SF Team"
                              },
                              "team_description": {
                                "type": "string",
                                "example": "This team covers 603211, 603222, 603223"
                              },
                              "team_color": {
                                "type": "string",
                                "example": "#3498db"
                              }
                            }
                          },
                          "approved_by_user": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "c425fe39-2309-4d2b-87b8-5b4b65546ccb"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Velmurugan"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "K"
                              },
                              "email": {
                                "type": "string",
                                "example": "velmurugan.k@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z111"
                              },
                              "prefix": {},
                              "work_phone_number": {},
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0772b941-2f4e-4723-b0d4-cf6ba1064845.jpg"
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
                                "example": "2022-11-02T10:35:52.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-09-19T09:50:15.000Z"
                              }
                            }
                          },
                          "timeoff_request_type": {}
                        }
                      }
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
                    "value": "{\n\t\t\t\t\"message\": \"Error in Fetching Timeoffs\",\n\t\t\t\t\"title\": \"Error in Fetching Timeoffs\",\n\t\t\t\t\"type\": \"error\",\n        \"info\": \"Database Error\" \n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Fetching Timeoffs"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Fetching Timeoffs"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
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