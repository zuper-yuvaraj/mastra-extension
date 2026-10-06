---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Conflicting Jobs & Time off

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
    "/jobs/schedule/overlap": {
      "put": {
        "summary": "Conflicting Jobs & Time off",
        "description": "",
        "operationId": "conflicting-jobs-and-time-off",
        "parameters": [
          {
            "name": "from_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "to_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "user_uid",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "team_uid",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "job_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "consider_route_overlap",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "route_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "appointment_uid",
            "schema": {
              "type": "string"
            },
            "description": "if appointments is enabled"
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Successfully obtained overlapping jobs/timeoff\",\n    \"data\": [\n        {\n            \"date\": \"2024-09-18\",\n            \"jobs\": [\n                {\n                    \"job_uid\": \"10654979-7ebb-44fb-892d-8024c737863e\",\n                    \"prefix\": \"\",\n                    \"assigned_to\": [\n                        {\n                            \"acceptance_status\": \"AWAIT_RESPONSE\",\n                            \"assigned_at\": \"2024-09-11T10:03:12.439Z\",\n                            \"user\": {\n                                \"user_uid\": \"e5129280-ae99-4708-867c-c7fa106cb63a\",\n                                \"first_name\": \"Siddhant\",\n                                \"last_name\": \"S\",\n                                \"email\": \"siddhant.s@zuper.co\",\n                                \"external_login_id\": null,\n                                \"home_phone_number\": null,\n                                \"designation\": \"Android Dev\",\n                                \"emp_code\": \"Z12312434\",\n                                \"prefix\": \"Z22\",\n                                \"work_phone_number\": null,\n                                \"mobile_phone_number\": null,\n                                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/852d527f-082c-497c-8294-eba81707b601.jpg\",\n                                \"hourly_labor_charge\": 20,\n                                \"is_active\": true,\n                                \"is_deleted\": false,\n                                \"created_at\": \"2024-05-14T12:42:38.000Z\",\n                                \"updated_at\": \"2024-09-13T07:34:19.000Z\",\n                                \"role\": {\n                                    \"role_id\": 1,\n                                    \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n                                    \"role_name\": \"Admin\",\n                                    \"role_key\": \"ADMIN\",\n                                    \"created_at\": \"2018-01-22T00:00:00.000Z\",\n                                    \"updated_at\": \"2018-01-22T00:00:00.000Z\"\n                                }\n                            },\n                            \"team\": {\n                                \"team_uid\": \"beeb0c3c-bb1b-4e5d-90c1-b465f1a1ceb9\",\n                                \"team_name\": \"Team Android\",\n                                \"team_color\": \"#0c9b24\",\n                                \"is_active\": true,\n                                \"is_deleted\": false\n                            }\n                        },\n                        {\n                            \"acceptance_status\": \"AWAIT_RESPONSE\",\n                            \"assigned_at\": \"2024-09-11T10:12:55.926Z\",\n                            \"user\": {\n                                \"user_uid\": \"c425fe39-2309-4d2b-87b8-5b4b65546ccb\",\n                                \"first_name\": \"Tom\",\n                                \"last_name\": \"K\",\n                                \"email\": \"tom.k@zuper.co\",\n                                \"external_login_id\": null,\n                                \"home_phone_number\": null,\n                                \"designation\": \"Admin\",\n                                \"emp_code\": \"Z111\",\n                                \"prefix\": null,\n                                \"work_phone_number\": null,\n                                \"mobile_phone_number\": null,\n                                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0772b941-2f4e-4723-b0d4-cf6ba1064845.jpg\",\n                                \"hourly_labor_charge\": 120,\n                                \"is_active\": true,\n                                \"is_deleted\": false,\n                                \"created_at\": \"2022-11-02T10:35:52.000Z\",\n                                \"updated_at\": \"2024-07-16T11:49:54.000Z\",\n                                \"role\": {\n                                    \"role_id\": 1,\n                                    \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n                                    \"role_name\": \"Admin\",\n                                    \"role_key\": \"ADMIN\",\n                                    \"created_at\": \"2018-01-22T00:00:00.000Z\",\n                                    \"updated_at\": \"2018-01-22T00:00:00.000Z\"\n                                }\n                            },\n                            \"team\": {\n                                \"team_uid\": \"18cada40-021b-11e8-8127-43a5add1a9e2\",\n                                \"team_name\": \"SF Team\",\n                                \"team_color\": \"#3498db\",\n                                \"is_active\": true,\n                                \"is_deleted\": false\n                            }\n                        }\n                    ],\n                    \"job_title\": \"Visit for Tz-Android\",\n                    \"scheduled_start_time\": \"2024-09-17T10:02:00.000Z\",\n                    \"scheduled_end_time\": \"2024-09-18T10:02:00.000Z\",\n                    \"due_date\": \"2024-09-20T03:59:59.000Z\",\n                    \"job_timezone\": \"America/Toronto\",\n                    \"created_at\": \"2024-09-11T10:03:12.445Z\",\n                    \"updated_at\": \"2024-09-12T07:51:57.741Z\",\n                    \"work_order_number\": 28287\n                }\n            ],\n            \"timeoff\": [],\n            \"non_job_events\": [],\n            \"user_shifts\": [],\n            \"routes\": []\n        }\n    ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Successfully obtained overlapping jobs/timeoff"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "date": {
                            "type": "string",
                            "example": "2024-09-18"
                          },
                          "jobs": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "job_uid": {
                                  "type": "string",
                                  "example": "10654979-7ebb-44fb-892d-8024c737863e"
                                },
                                "prefix": {
                                  "type": "string",
                                  "example": ""
                                },
                                "assigned_to": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "acceptance_status": {
                                        "type": "string",
                                        "example": "AWAIT_RESPONSE"
                                      },
                                      "assigned_at": {
                                        "type": "string",
                                        "example": "2024-09-11T10:03:12.439Z"
                                      },
                                      "user": {
                                        "type": "object",
                                        "properties": {
                                          "user_uid": {
                                            "type": "string",
                                            "example": "e5129280-ae99-4708-867c-c7fa106cb63a"
                                          },
                                          "first_name": {
                                            "type": "string",
                                            "example": "Siddhant"
                                          },
                                          "last_name": {
                                            "type": "string",
                                            "example": "S"
                                          },
                                          "email": {
                                            "type": "string",
                                            "example": "siddhant.s@zuper.co"
                                          },
                                          "external_login_id": {},
                                          "home_phone_number": {},
                                          "designation": {
                                            "type": "string",
                                            "example": "Android Dev"
                                          },
                                          "emp_code": {
                                            "type": "string",
                                            "example": "Z12312434"
                                          },
                                          "prefix": {
                                            "type": "string",
                                            "example": "Z22"
                                          },
                                          "work_phone_number": {},
                                          "mobile_phone_number": {},
                                          "profile_picture": {
                                            "type": "string",
                                            "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/852d527f-082c-497c-8294-eba81707b601.jpg"
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
                                            "example": "2024-05-14T12:42:38.000Z"
                                          },
                                          "updated_at": {
                                            "type": "string",
                                            "example": "2024-09-13T07:34:19.000Z"
                                          },
                                          "role": {
                                            "type": "object",
                                            "properties": {
                                              "role_id": {
                                                "type": "integer",
                                                "example": 1,
                                                "default": 0
                                              },
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
                                              },
                                              "created_at": {
                                                "type": "string",
                                                "example": "2018-01-22T00:00:00.000Z"
                                              },
                                              "updated_at": {
                                                "type": "string",
                                                "example": "2018-01-22T00:00:00.000Z"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "team": {
                                        "type": "object",
                                        "properties": {
                                          "team_uid": {
                                            "type": "string",
                                            "example": "beeb0c3c-bb1b-4e5d-90c1-b465f1a1ceb9"
                                          },
                                          "team_name": {
                                            "type": "string",
                                            "example": "Team Android"
                                          },
                                          "team_color": {
                                            "type": "string",
                                            "example": "#0c9b24"
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
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "job_title": {
                                  "type": "string",
                                  "example": "Visit for Tz-Android"
                                },
                                "scheduled_start_time": {
                                  "type": "string",
                                  "example": "2024-09-17T10:02:00.000Z"
                                },
                                "scheduled_end_time": {
                                  "type": "string",
                                  "example": "2024-09-18T10:02:00.000Z"
                                },
                                "due_date": {
                                  "type": "string",
                                  "example": "2024-09-20T03:59:59.000Z"
                                },
                                "job_timezone": {
                                  "type": "string",
                                  "example": "America/Toronto"
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2024-09-11T10:03:12.445Z"
                                },
                                "updated_at": {
                                  "type": "string",
                                  "example": "2024-09-12T07:51:57.741Z"
                                },
                                "work_order_number": {
                                  "type": "integer",
                                  "example": 28287,
                                  "default": 0
                                }
                              }
                            }
                          },
                          "timeoff": {
                            "type": "array"
                          },
                          "non_job_events": {
                            "type": "array"
                          },
                          "user_shifts": {
                            "type": "array"
                          },
                          "routes": {
                            "type": "array"
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
                    "value": "{\n\ttype: \"error\",\n  message: \"Missing Mandatory Fields\"\n}"
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