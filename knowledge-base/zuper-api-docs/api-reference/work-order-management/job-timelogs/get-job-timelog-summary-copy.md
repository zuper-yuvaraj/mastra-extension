---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Job Timelog

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
    "/jobs/{job_uid}/timelog": {
      "get": {
        "summary": "Get Job Timelog",
        "description": "",
        "operationId": "get-job-timelog-summary-copy",
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
            "name": "filter.user_uid",
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
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"timelog_uid\": \"d21bd5ff-b9b6-4461-86f8-cd5e4cd29284\",\n            \"job_uid\": \"081c6ef0-782e-11e8-8aa6-497f7c509174\",\n            \"type\": \"CLOCK_IN\",\n            \"checked_time\": \"2022-03-10T14:30:00.000Z\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"remarks\": null,\n            \"user\": {\n                \"user_id\": 3,\n                \"user_uid\": \"68a51340-406a-11e8-9b20-f325a0565527\",\n                \"first_name\": \"John\",\n                \"last_name\": \"Mathews\",\n                \"email\": \"john@gmail.com\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722322\",\n                \"designation\": \"Machanic\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://i.imgur.com/YmnODol.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-04-15T05:04:00.000Z\",\n                \"updated_at\": \"2022-12-22T08:08:09.000Z\"\n            }\n        },\n        {\n            \"timelog_uid\": \"d21bd5ff-b9b6-4461-86f8-cd5e4cd29284\",\n            \"job_uid\": \"081c6ef0-782e-11e8-8aa6-497f7c509174\",\n            \"type\": \"CLOCK_IN\",\n            \"checked_time\": \"2022-03-10T14:30:00.000Z\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"remarks\": null,\n            \"user\": {\n                \"user_id\": 30,\n                \"user_uid\": \"f2f5bb37-cd1b-4864-92d7-1e59c493f0bd\",\n                \"first_name\": \"Katrina\",\n                \"last_name\": \"Whale\",\n                \"email\": \"kat@gmail.com\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"0988753484\",\n                \"designation\": \"Field Executive\",\n                \"emp_code\": \"1029\",\n                \"prefix\": null,\n                \"work_phone_number\": \"0988753484\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://i.imgur.com/phnZHKE.png\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-06-11T17:07:23.000Z\",\n                \"updated_at\": \"2023-08-21T11:20:24.000Z\"\n            }\n        },\n        {\n            \"timelog_uid\": \"d21bd5ff-b9b6-4461-86f8-cd5e4cd29284\",\n            \"job_uid\": \"081c6ef0-782e-11e8-8aa6-497f7c509174\",\n            \"type\": \"CLOCK_IN\",\n            \"checked_time\": \"2022-03-10T14:30:00.000Z\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"remarks\": null,\n            \"user\": {\n                \"user_id\": 25,\n                \"user_uid\": \"2eb9f152-717a-42ae-864c-f215376c1cfe\",\n                \"first_name\": \"Bernard\",\n                \"last_name\": \"Lowe\",\n                \"email\": \"suraj@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"123456789\",\n                \"designation\": \"CSM\",\n                \"emp_code\": \"8465468\",\n                \"prefix\": null,\n                \"work_phone_number\": \"1234567890\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://i.imgur.com/YmnODol.jpg\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-05-28T08:44:41.000Z\",\n                \"updated_at\": \"2022-12-22T08:12:21.000Z\"\n            }\n        },\n        {\n            \"timelog_uid\": \"357807df-0177-4e44-a4a5-5700348c8ed8\",\n            \"job_uid\": \"081c6ef0-782e-11e8-8aa6-497f7c509174\",\n            \"type\": \"CLOCK_OUT\",\n            \"checked_time\": \"2023-09-27T14:37:24.000Z\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"remarks\": \"auto punch out due to unassignment from the job\",\n            \"user\": {\n                \"user_id\": 3,\n                \"user_uid\": \"68a51340-406a-11e8-9b20-f325a0565527\",\n                \"first_name\": \"John\",\n                \"last_name\": \"Mathews\",\n                \"email\": \"john@gmail.com\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"7397722322\",\n                \"designation\": \"Machanic\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"7397722822\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://i.imgur.com/YmnODol.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-04-15T05:04:00.000Z\",\n                \"updated_at\": \"2022-12-22T08:08:09.000Z\"\n            }\n        },\n        {\n            \"timelog_uid\": \"b016277e-6492-4d38-b9b8-7a5d19cf6622\",\n            \"job_uid\": \"081c6ef0-782e-11e8-8aa6-497f7c509174\",\n            \"type\": \"CLOCK_OUT\",\n            \"checked_time\": \"2023-09-27T14:37:24.000Z\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"remarks\": \"auto punch out due to unassignment from the job\",\n            \"user\": {\n                \"user_id\": 25,\n                \"user_uid\": \"2eb9f152-717a-42ae-864c-f215376c1cfe\",\n                \"first_name\": \"Bernard\",\n                \"last_name\": \"Lowe\",\n                \"email\": \"suraj@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"123456789\",\n                \"designation\": \"CSM\",\n                \"emp_code\": \"8465468\",\n                \"prefix\": null,\n                \"work_phone_number\": \"1234567890\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://i.imgur.com/YmnODol.jpg\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-05-28T08:44:41.000Z\",\n                \"updated_at\": \"2022-12-22T08:12:21.000Z\"\n            }\n        },\n        {\n            \"timelog_uid\": \"8d5ea029-8381-4703-9040-ed25f402dc7b\",\n            \"job_uid\": \"081c6ef0-782e-11e8-8aa6-497f7c509174\",\n            \"type\": \"CLOCK_OUT\",\n            \"checked_time\": \"2023-09-27T14:37:24.000Z\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"remarks\": \"auto punch out due to unassignment from the job\",\n            \"user\": {\n                \"user_id\": 30,\n                \"user_uid\": \"f2f5bb37-cd1b-4864-92d7-1e59c493f0bd\",\n                \"first_name\": \"Katrina\",\n                \"last_name\": \"Whale\",\n                \"email\": \"kat@gmail.com\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"0988753484\",\n                \"designation\": \"Field Executive\",\n                \"emp_code\": \"1029\",\n                \"prefix\": null,\n                \"work_phone_number\": \"0988753484\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://i.imgur.com/phnZHKE.png\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2018-06-11T17:07:23.000Z\",\n                \"updated_at\": \"2023-08-21T11:20:24.000Z\"\n            }\n        }\n    ]\n}"
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
                          "timelog_uid": {
                            "type": "string",
                            "example": "d21bd5ff-b9b6-4461-86f8-cd5e4cd29284"
                          },
                          "job_uid": {
                            "type": "string",
                            "example": "081c6ef0-782e-11e8-8aa6-497f7c509174"
                          },
                          "type": {
                            "type": "string",
                            "example": "CLOCK_IN"
                          },
                          "checked_time": {
                            "type": "string",
                            "example": "2022-03-10T14:30:00.000Z"
                          },
                          "latitude": {},
                          "longitude": {},
                          "remarks": {},
                          "user": {
                            "type": "object",
                            "properties": {
                              "user_id": {
                                "type": "integer",
                                "example": 3,
                                "default": 0
                              },
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
                    "value": "{\n    \"message\": \"job_uid / project_uid is Mandatory\",\n    \"title\": \"Missing Mandatory Timelog Fields\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "job_uid / project_uid is Mandatory"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Mandatory Timelog Fields"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
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
                    "value": "{\n    \"message\": \"Error in reading time log\",\n    \"title\": \"Error in reading time log\",\n    \"type\": \"error\",\n    \"error\":\"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in reading time log"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in reading time log"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "error": {
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