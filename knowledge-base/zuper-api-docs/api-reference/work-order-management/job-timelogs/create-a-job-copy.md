---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Job Timelog Summary

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
    "/jobs/timelog_summary": {
      "get": {
        "summary": "Get Job Timelog Summary",
        "description": "",
        "operationId": "create-a-job-copy",
        "parameters": [
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ]
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
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
              "format": "int32"
            }
          },
          {
            "name": "filter.clocked_in_time_from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.clocked_in_time_to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.clocked_out_time_from clocked_out_time_from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.clocked_out_time_from clocked_out_time_to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.project_uid",
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
            "name": "filter.team_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"timelog_summary_uid\": \"8eea5f4f-2169-44be-86e7-f3c0fc910d1a\",\n            \"clock_in_time\": \"2022-03-10T14:30:00.000Z\",\n            \"clock_out_time\": \"2023-09-27T14:37:24.000Z\",\n            \"hourly_charge\": 120,\n            \"time_spent\": 815047,\n            \"amount_earned\": 1630090,\n            \"created_at\": \"2023-09-27T14:37:24.000Z\",\n            \"user\": {\n                \"user_uid\": \"68a51340-406a-11e8-9b20-f325a0565527\",\n                \"first_name\": \"John\",\n                \"last_name\": \"Mathews\",\n                \"email\": \"john@gmail.com\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722322\",\n                \"designation\": \"Machanic\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://i.imgur.com/YmnODol.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-04-15T05:04:00.000Z\",\n                \"updated_at\": \"2022-12-22T08:08:09.000Z\"\n            },\n            \"team\": null,\n            \"job\": {\n                \"work_order_number\": 48,\n                \"job_category\": {\n                    \"category_name\": \"Sunpack\",\n                    \"category_uid\": \"231b6b80-3660-11e8-a317-6bdec781a8de\",\n                    \"is_deleted\": true,\n                    \"estimated_duration\": {\n                        \"hours\": 2,\n                        \"minutes\": 10\n                    }\n                },\n                \"job_uid\": \"081c6ef0-782e-11e8-8aa6-497f7c509174\",\n                \"job_title\": \"Test Job\",\n                \"job_priority\": \"LOW\",\n                \"job_tags\": [],\n                \"current_job_status\": {\n                    \"status_uid\": \"b68c1334-432e-11e8-97d5-718f0c3d966f\",\n                    \"status_name\": \"Completed\",\n                    \"status_type\": \"COMPLETED\"\n                }\n            }\n        },\n        {\n            \"timelog_summary_uid\": \"5638df2f-c453-45bb-850b-743a7ae77504\",\n            \"clock_in_time\": \"2022-03-10T14:30:00.000Z\",\n            \"clock_out_time\": \"2023-09-27T14:37:24.000Z\",\n            \"hourly_charge\": 20,\n            \"time_spent\": 815047,\n            \"amount_earned\": 271682,\n            \"created_at\": \"2023-09-27T14:37:24.000Z\",\n            \"user\": {\n                \"user_uid\": \"2eb9f152-717a-42ae-864c-f215376c1cfe\",\n                \"first_name\": \"Bernard\",\n                \"last_name\": \"Lowe\",\n                \"email\": \"suraj@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"123456789\",\n                \"designation\": \"CSM\",\n                \"emp_code\": \"8465468\",\n                \"prefix\": null,\n                \"work_phone_number\": \"1234567890\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://i.imgur.com/YmnODol.jpg\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-05-28T08:44:41.000Z\",\n                \"updated_at\": \"2022-12-22T08:12:21.000Z\"\n            },\n            \"team\": null,\n            \"job\": {\n                \"work_order_number\": 48,\n                \"job_category\": {\n                    \"category_name\": \"Sunpack\",\n                    \"category_uid\": \"231b6b80-3660-11e8-a317-6bdec781a8de\",\n                    \"is_deleted\": true,\n                    \"estimated_duration\": {\n                        \"hours\": 2,\n                        \"minutes\": 10\n                    }\n                },\n                \"job_uid\": \"081c6ef0-782e-11e8-8aa6-497f7c509174\",\n                \"job_title\": \"Test Job\",\n                \"job_priority\": \"LOW\",\n                \"job_tags\": [],\n                \"current_job_status\": {\n                    \"status_uid\": \"b68c1334-432e-11e8-97d5-718f0c3d966f\",\n                    \"status_name\": \"Completed\",\n                    \"status_type\": \"COMPLETED\"\n                }\n            }\n        },\n        {\n            \"timelog_summary_uid\": \"e114991c-2069-4e08-929b-ff6ff10c8993\",\n            \"clock_in_time\": \"2022-03-10T14:30:00.000Z\",\n            \"clock_out_time\": \"2023-09-27T14:37:24.000Z\",\n            \"hourly_charge\": 20,\n            \"time_spent\": 815047,\n            \"amount_earned\": 271682,\n            \"created_at\": \"2023-09-27T14:37:24.000Z\",\n            \"user\": {\n                \"user_uid\": \"f2f5bb37-cd1b-4864-92d7-1e59c493f0bd\",\n                \"first_name\": \"Katrina\",\n                \"last_name\": \"Whale\",\n                \"email\": \"kat@gmail.com\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"0988753484\",\n                \"designation\": \"Field Executive\",\n                \"emp_code\": \"1029\",\n                \"prefix\": null,\n                \"work_phone_number\": \"0988753484\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://i.imgur.com/phnZHKE.png\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-06-11T17:07:23.000Z\",\n                \"updated_at\": \"2023-08-21T11:20:24.000Z\"\n            },\n            \"team\": null,\n            \"job\": {\n                \"work_order_number\": 48,\n                \"job_category\": {\n                    \"category_name\": \"Sunpack\",\n                    \"category_uid\": \"231b6b80-3660-11e8-a317-6bdec781a8de\",\n                    \"is_deleted\": true,\n                    \"estimated_duration\": {\n                        \"hours\": 2,\n                        \"minutes\": 10\n                    }\n                },\n                \"job_uid\": \"081c6ef0-782e-11e8-8aa6-497f7c509174\",\n                \"job_title\": \"Test Job\",\n                \"job_priority\": \"LOW\",\n                \"job_tags\": [],\n                \"current_job_status\": {\n                    \"status_uid\": \"b68c1334-432e-11e8-97d5-718f0c3d966f\",\n                    \"status_name\": \"Completed\",\n                    \"status_type\": \"COMPLETED\"\n                }\n            }\n        },\n        {\n            \"timelog_summary_uid\": \"6bd68049-eb67-49a4-97db-f73fa3f0bc8f\",\n            \"clock_in_time\": \"2022-03-10T14:30:00.000Z\",\n            \"clock_out_time\": \"2023-09-27T12:18:05.000Z\",\n            \"hourly_charge\": 54.59,\n            \"time_spent\": 814908,\n            \"amount_earned\": 741430,\n            \"created_at\": \"2023-09-27T12:18:06.000Z\",\n            \"user\": {\n                \"user_uid\": \"a0382c94-721b-4689-8145-b07063333084\",\n                \"first_name\": \"jerin\",\n                \"last_name\": \"ajay\",\n                \"email\": \"jerinajay@yopmail.com\",\n                \"external_login_id\": \"12345555555\",\n                \"home_phone_number\": \"12345678\",\n                \"designation\": \"test\",\n                \"emp_code\": \"Z081\",\n                \"prefix\": null,\n                \"work_phone_number\": \"12345678\",\n                \"mobile_phone_number\": \"12345678\",\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 54.59,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-06-20T06:48:34.000Z\",\n                \"updated_at\": \"2023-03-20T14:04:46.000Z\"\n            },\n            \"team\": null,\n            \"job\": {\n                \"job_uid\": \"d0a8c110-c64b-11ec-a683-c7d53138532e\",\n                \"prefix\": \"2022 -\",\n                \"job_title\": \"Weekly, Biweekly, Every 4 weeks, Custom\",\n                \"job_category\": {\n                    \"category_name\": \"Kitchen Assembly\",\n                    \"category_uid\": \"19ced8f0-46c8-11e8-83d8-9df89bc5d31b\",\n                    \"is_deleted\": true,\n                    \"estimated_duration\": {\n                        \"hours\": 1,\n                        \"minutes\": 0\n                    }\n                },\n                \"job_priority\": \"LOW\",\n                \"job_tags\": [],\n                \"current_job_status\": {\n                    \"status_uid\": \"5ffc9baf-39ec-4f6c-9d63-b31d0655a700\",\n                    \"status_name\": \"Scheduled\",\n                    \"status_type\": \"NEW\"\n                },\n                \"work_order_number\": 5530\n            }\n        },\n        {\n            \"timelog_summary_uid\": \"4895646c-1adc-477f-ac2b-04e0c5ad86b7\",\n            \"clock_in_time\": \"2022-03-10T14:30:00.000Z\",\n            \"clock_out_time\": \"2023-09-27T12:18:05.000Z\",\n            \"hourly_charge\": 54.59,\n            \"time_spent\": 814908,\n            \"amount_earned\": 741430,\n            \"created_at\": \"2023-09-27T12:18:05.000Z\",\n            \"user\": {\n                \"user_uid\": \"a0382c94-721b-4689-8145-b07063333084\",\n                \"first_name\": \"jerin\",\n                \"last_name\": \"ajay\",\n                \"email\": \"jerinajay@yopmail.com\",\n                \"external_login_id\": \"12345555555\",\n                \"home_phone_number\": \"12345678\",\n                \"designation\": \"test\",\n                \"emp_code\": \"Z081\",\n                \"prefix\": null,\n                \"work_phone_number\": \"12345678\",\n                \"mobile_phone_number\": \"12345678\",\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 54.59,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-06-20T06:48:34.000Z\",\n                \"updated_at\": \"2023-03-20T14:04:46.000Z\"\n            },\n            \"team\": null,\n            \"job\": {}\n        },\n        {\n            \"timelog_summary_uid\": \"519233e4-c8a1-4c2d-88b7-1a25ec0acfb0\",\n            \"clock_in_time\": \"2022-03-10T14:30:00.000Z\",\n            \"clock_out_time\": \"2023-09-22T11:53:25.000Z\",\n            \"hourly_charge\": 0,\n            \"time_spent\": 807683,\n            \"amount_earned\": 0,\n            \"created_at\": \"2023-09-22T11:53:47.000Z\",\n            \"user\": {\n                \"user_uid\": \"a0382c94-721b-4689-8145-b07063333084\",\n                \"first_name\": \"jerin\",\n                \"last_name\": \"ajay\",\n                \"email\": \"jerinajay@yopmail.com\",\n                \"external_login_id\": \"12345555555\",\n                \"home_phone_number\": \"12345678\",\n                \"designation\": \"test\",\n                \"emp_code\": \"Z081\",\n                \"prefix\": null,\n                \"work_phone_number\": \"12345678\",\n                \"mobile_phone_number\": \"12345678\",\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 54.59,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-06-20T06:48:34.000Z\",\n                \"updated_at\": \"2023-03-20T14:04:46.000Z\"\n            },\n            \"team\": null,\n            \"job\": {}\n        }\n    ],\n    \"total_records\": 6,\n    \"total_pages\": 1,\n    \"current_page\": 1\n}"
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
                          "timelog_summary_uid": {
                            "type": "string",
                            "example": "8eea5f4f-2169-44be-86e7-f3c0fc910d1a"
                          },
                          "clock_in_time": {
                            "type": "string",
                            "example": "2022-03-10T14:30:00.000Z"
                          },
                          "clock_out_time": {
                            "type": "string",
                            "example": "2023-09-27T14:37:24.000Z"
                          },
                          "hourly_charge": {
                            "type": "integer",
                            "example": 120,
                            "default": 0
                          },
                          "time_spent": {
                            "type": "integer",
                            "example": 815047,
                            "default": 0
                          },
                          "amount_earned": {
                            "type": "integer",
                            "example": 1630090,
                            "default": 0
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-09-27T14:37:24.000Z"
                          },
                          "user": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "68a51340-406a-11e8-9b20-f325a0565527"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "John"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Mathews"
                              },
                              "email": {
                                "type": "string",
                                "example": "john@gmail.com"
                              },
                              "external_login_id": {},
                              "home_phone_number": {
                                "type": "string",
                                "example": "7397722322"
                              },
                              "designation": {
                                "type": "string",
                                "example": "Machanic"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "001"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "7397722822"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://i.imgur.com/YmnODol.jpg"
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
                                "example": "2018-04-15T05:04:00.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2022-12-22T08:08:09.000Z"
                              }
                            }
                          },
                          "team": {},
                          "job": {
                            "type": "object",
                            "properties": {
                              "work_order_number": {
                                "type": "integer",
                                "example": 48,
                                "default": 0
                              },
                              "job_category": {
                                "type": "object",
                                "properties": {
                                  "category_name": {
                                    "type": "string",
                                    "example": "Sunpack"
                                  },
                                  "category_uid": {
                                    "type": "string",
                                    "example": "231b6b80-3660-11e8-a317-6bdec781a8de"
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "estimated_duration": {
                                    "type": "object",
                                    "properties": {
                                      "hours": {
                                        "type": "integer",
                                        "example": 2,
                                        "default": 0
                                      },
                                      "minutes": {
                                        "type": "integer",
                                        "example": 10,
                                        "default": 0
                                      }
                                    }
                                  }
                                }
                              },
                              "job_uid": {
                                "type": "string",
                                "example": "081c6ef0-782e-11e8-8aa6-497f7c509174"
                              },
                              "job_title": {
                                "type": "string",
                                "example": "Test Job"
                              },
                              "job_priority": {
                                "type": "string",
                                "example": "LOW"
                              },
                              "job_tags": {
                                "type": "array"
                              },
                              "current_job_status": {
                                "type": "object",
                                "properties": {
                                  "status_uid": {
                                    "type": "string",
                                    "example": "b68c1334-432e-11e8-97d5-718f0c3d966f"
                                  },
                                  "status_name": {
                                    "type": "string",
                                    "example": "Completed"
                                  },
                                  "status_type": {
                                    "type": "string",
                                    "example": "COMPLETED"
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 6,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "current_page": {
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
                    "value": "{\n    \"message\": \"Count must be less than or equal to 1000\",\n    \"title\": \"Count Limit Exceeded\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Count must be less than or equal to 1000"
                    },
                    "title": {
                      "type": "string",
                      "example": "Count Limit Exceeded"
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