---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get User Timelog Details

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
    "/users/{user_uid}/timelog": {
      "get": {
        "summary": "Get User Timelog Details",
        "description": "",
        "operationId": "get-user-timelog-details",
        "parameters": [
          {
            "name": "user_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "group_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "DATE",
                "JOB",
                "PROJECT"
              ],
              "default": "DATE"
            }
          },
          {
            "name": "filter.from_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.to_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job_uid",
            "in": "query",
            "description": "Supports multiple jobs with ','",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.project_uid",
            "in": "query",
            "description": "Supports multiple jobs with ','",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.type",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "TRAVEL",
                "MEAL_BREAK",
                "JOB"
              ]
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
                    "value": "{}{\n    \"type\": \"success\",\n    \"data\": {\n        \"user_uid\": \"641aacc5-3a7a-4c3c-beec-fa6c186e37ec\",\n        \"first_name\": \"John\",\n        \"last_name\": \"Doe\",\n        \"designation\": \"Admin\",\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/c5914720-043e-11ee-89dd-7d1eb09002c4.JPG\",\n        \"teams\": [\n            {\n                \"team_uid\": \"853f37b4-ffe7-433f-aade-f9b8efcc44d2\",\n                \"team_name\": \"Finance{\n    \"type\": \"error\",\n    \"title\": \"Missing From Date / To Dates\",\n    \"message\": \"From Date / To Dates are required to fetch user timelogs\"\n}\",\n                \"team_description\": null,\n                \"team_color\": \"#4960a0\",\n                \"user_count\": 12,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2025-01-08T05:42:48.000Z\"\n            }\n        ],\n        \"email\": \"valliyappan.s@zuper.co\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"role\": {\n            \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n            \"role_name\": \"Admin\",\n            \"role_key\": \"ADMIN\"\n        },\n        \"data\": [\n            {\n                \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                \"job_title\": \"Sample Jobs 1 2 2\",\n                \"work_order_number\": 90289,\n                \"project\": {\n                    \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                    \"project_prefix\": \"Pro\",\n                    \"project_name\": \"User Time Log\",\n                    \"project_category\": {\n                        \"category_name\": \"New Test Category\"\n                    },\n                    \"project_priority\": \"LOW\",\n                    \"project_start_date\": \"2025-03-31T18:30:00.000Z\",\n                    \"project_end_date\": \"2025-04-30T18:29:59.000Z\",\n                    \"project_due_date\": \"2025-05-15T18:29:59.000Z\",\n                    \"config\": {\n                        \"dependency\": {\n                            \"day_shifting\": \"MAINTAIN\",\n                            \"consider_weekend\": true\n                        },\n                        \"product\": {\n                            \"restrict_to_project\": false,\n                            \"sync_to_project\": false\n                        }\n                    },\n                    \"project_number\": 628\n                },\n                \"travel_time\": 0,\n                \"break_time\": 60,\n                \"work_time\": 180,\n                \"total\": 240,\n                \"date\": [\n                    {\n                        \"date\": \"2025-04-17\",\n                        \"travel_time\": 0,\n                        \"break_time\": 60,\n                        \"work_time\": 180,\n                        \"total\": 240,\n                        \"timelogs_summary\": [\n                            {\n                                \"timelog_summary_uid\": \"d1968ece-c339-48f4-a581-5808ed22999a\",\n                                \"time_spent\": 120,\n                                \"timelog_type\": \"JOB\",\n                                \"clock_in_time\": \"2025-04-17T05:45:18.000Z\",\n                                \"clock_out_time\": \"2025-04-17T07:45:18.000Z\",\n                                \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                                \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                \"reason_code\": \"\",\n                                \"timelogs\": [\n                                    {\n                                        \"timelog_uid\": \"3924bf39-a833-4e30-91b5-54915fc0efc9\",\n                                        \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-17T05:45:18.000Z\",\n                                        \"type\": \"CLOCK_IN\",\n                                        \"timelog_type\": \"JOB\"\n                                    },\n                                    {\n                                        \"timelog_uid\": \"45a32601-d212-44b1-a6fe-02c493a34ed6\",\n                                        \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-17T07:45:18.000Z\",\n                                        \"type\": \"CLOCK_OUT\",\n                                        \"timelog_type\": \"JOB\"\n                                    }\n                                ]\n                            },\n                            {\n                                \"timelog_summary_uid\": \"028ee0b7-be07-4b2c-a9d7-a0764cd4eeea\",\n                                \"time_spent\": 60,\n                                \"timelog_type\": \"MEAL_BREAK\",\n                                \"clock_in_time\": \"2025-04-17T08:43:36.000Z\",\n                                \"clock_out_time\": \"2025-04-17T09:43:36.000Z\",\n                                \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                                \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                \"reason_code\": \"\",\n                                \"timelogs\": [\n                                    {\n                                        \"timelog_uid\": \"afc96d9b-245e-44df-8e49-ac4eb261dab4\",\n                                        \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-17T08:43:36.000Z\",\n                                        \"type\": \"CLOCK_IN\",\n                                        \"timelog_type\": \"MEAL_BREAK\"\n                                    },\n                                    {\n                                        \"timelog_uid\": \"56531ec8-c82f-4276-bbcd-19ce16feaa65\",\n                                        \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-17T09:43:36.000Z\",\n                                        \"type\": \"CLOCK_OUT\",\n                                        \"timelog_type\": \"MEAL_BREAK\"\n                                    }\n                                ]\n                            },\n                            {\n                                \"timelog_summary_uid\": \"ffa638d4-04a7-431c-9fa1-1c8414e641ed\",\n                                \"time_spent\": 60,\n                                \"timelog_type\": \"JOB\",\n                                \"clock_in_time\": \"2025-04-17T09:45:42.000Z\",\n                                \"clock_out_time\": \"2025-04-17T10:45:42.000Z\",\n                                \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                                \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                \"reason_code\": \"\",\n                                \"timelogs\": [\n                                    {\n                                        \"timelog_uid\": \"3b0da32f-c663-41d8-9f7d-f3509e25d4aa\",\n                                        \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-17T09:45:42.000Z\",\n                                        \"type\": \"CLOCK_IN\",\n                                        \"timelog_type\": \"JOB\"\n                                    },\n                                    {\n                                        \"timelog_uid\": \"7bb0ce9f-ee72-4ac0-b831-f51eecd9dfb8\",\n                                        \"job_uid\": \"6af5c4b0-4746-400b-aff0-68ee481143dc\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-17T10:45:42.000Z\",\n                                        \"type\": \"CLOCK_OUT\",\n                                        \"timelog_type\": \"JOB\"\n                                    }\n                                ]\n                            }\n                        ]\n                    }\n                ]\n            },\n            {\n                \"job_uid\": \"dba0b4aa-a6d4-4e83-987e-8a5009f3e5e6\",\n                \"job_title\": \"Sample Jobs 1 2 3\",\n                \"work_order_number\": 90288,\n                \"project\": {\n                    \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                    \"project_prefix\": \"Pro\",\n                    \"project_name\": \"User Time Log\",\n                    \"project_category\": {\n                        \"category_name\": \"New Test Category\"\n                    },\n                    \"project_priority\": \"LOW\",\n                    \"project_start_date\": \"2025-03-31T18:30:00.000Z\",\n                    \"project_end_date\": \"2025-04-30T18:29:59.000Z\",\n                    \"project_due_date\": \"2025-05-15T18:29:59.000Z\",\n                    \"config\": {\n                        \"dependency\": {\n                            \"day_shifting\": \"MAINTAIN\",\n                            \"consider_weekend\": true\n                        },\n                        \"product\": {\n                            \"restrict_to_project\": false,\n                            \"sync_to_project\": false\n                        }\n                    },\n                    \"project_number\": 628\n                },\n                \"travel_time\": 0,\n                \"break_time\": 60,\n                \"work_time\": 10,\n                \"total\": 70,\n                \"date\": [\n                    {\n                        \"date\": \"2025-04-18\",\n                        \"travel_time\": 0,\n                        \"break_time\": 60,\n                        \"work_time\": 10,\n                        \"total\": 70,\n                        \"timelogs_summary\": [\n                            {\n                                \"timelog_summary_uid\": \"18cf8eec-56c3-452a-98af-ebee0e3eea9f\",\n                                \"time_spent\": 10,\n                                \"timelog_type\": \"JOB\",\n                                \"clock_in_time\": \"2025-04-18T15:02:42.000Z\",\n                                \"clock_out_time\": \"2025-04-18T15:12:42.000Z\",\n                                \"job_uid\": \"dba0b4aa-a6d4-4e83-987e-8a5009f3e5e6\",\n                                \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                \"reason_code\": \"\",\n                                \"timelogs\": [\n                                    {\n                                        \"timelog_uid\": \"22cc3848-2824-454d-841a-37d7bb660cdb\",\n                                        \"job_uid\": \"dba0b4aa-a6d4-4e83-987e-8a5009f3e5e6\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-18T15:02:42.000Z\",\n                                        \"type\": \"CLOCK_IN\",\n                                        \"timelog_type\": \"JOB\"\n                                    },\n                                    {\n                                        \"timelog_uid\": \"689e7409-b016-4c3b-9b67-919a2b42a546\",\n                                        \"job_uid\": \"dba0b4aa-a6d4-4e83-987e-8a5009f3e5e6\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-18T15:12:42.000Z\",\n                                        \"type\": \"CLOCK_OUT\",\n                                        \"timelog_type\": \"JOB\"\n                                    }\n                                ]\n                            },\n                            {\n                                \"timelog_summary_uid\": \"738b6e37-3183-4030-919d-37572dd2171d\",\n                                \"time_spent\": 60,\n                                \"timelog_type\": \"MEAL_BREAK\",\n                                \"clock_in_time\": \"2025-04-18T17:03:13.000Z\",\n                                \"clock_out_time\": \"2025-04-18T18:03:13.000Z\",\n                                \"job_uid\": \"dba0b4aa-a6d4-4e83-987e-8a5009f3e5e6\",\n                                \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                \"reason_code\": \"\",\n                                \"timelogs\": [\n                                    {\n                                        \"timelog_uid\": \"fb6b3bc6-05f9-404c-a818-320dfff7c7a5\",\n                                        \"job_uid\": \"dba0b4aa-a6d4-4e83-987e-8a5009f3e5e6\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-18T17:03:13.000Z\",\n                                        \"type\": \"CLOCK_IN\",\n                                        \"timelog_type\": \"MEAL_BREAK\"\n                                    },\n                                    {\n                                        \"timelog_uid\": \"1f71d27e-da7c-4384-a0d9-f1ffe99a0897\",\n                                        \"job_uid\": \"dba0b4aa-a6d4-4e83-987e-8a5009f3e5e6\",\n                                        \"project_uid\": \"c7822d2f-833f-45ab-8768-e5fb5564c9d2\",\n                                        \"checked_time\": \"2025-04-18T18:03:13.000Z\",\n                                        \"type\": \"CLOCK_OUT\",\n                                        \"timelog_type\": \"MEAL_BREAK\"\n                                    }\n                                ]\n                            }\n                        ]\n                    }\n                ]\n            }\n        ],\n        \"total_travel_time\": 0,\n        \"total_break_time\": 120,\n        \"total_work_time\": 190,\n        \"total_minutes\": 310\n    }\n}"
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Missing From Date / To Dates\",\n    \"message\": \"From Date / To Dates are required to fetch user timelogs\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing From Date / To Dates"
                    },
                    "message": {
                      "type": "string",
                      "example": "From Date / To Dates are required to fetch user timelogs"
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