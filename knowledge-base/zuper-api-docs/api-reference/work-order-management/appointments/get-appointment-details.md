---
updatedAt: 2026-07-21T06:01:46.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Appointment Details

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
    "/appointments/{appointment_uid}": {
      "get": {
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "title": "Appointment details fetched successfully",
                      "data": {
                        "appointment_uid": "a3c13d13-e215-4286-ab39-46884be77488",
                        "job": {
                          "job_uid": "beef439d-2b6b-480f-901a-a33f672feb64",
                          "prefix": "",
                          "job_title": "Job 2",
                          "job_priority": "LOW",
                          "due_date": "2026-06-30T18:29:59.000Z",
                          "due_date_dt": "2026-06-30",
                          "current_job_status": {
                            "status_uid": "a572fa26-17f5-433d-89f8-9d7878f76850",
                            "status_name": "New",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "is_deleted": false,
                          "job_timezone": null,
                          "created_at": "2026-06-12T11:49:23.755Z",
                          "updated_at": "2026-06-12T11:53:26.141Z",
                          "work_order_number": 161,
                          "scheduled_end_time": "2026-06-21T07:30:00.000Z",
                          "scheduled_start_time": "2026-06-18T05:30:00.000Z"
                        },
                        "assigned_to": [
                          {
                            "assigned_at": "2026-06-15T06:26:14.270Z",
                            "user": {
                              "user_uid": "7552871f-cd97-4db5-9d03-9698ed6e34f8",
                              "first_name": "Sesha",
                              "last_name": "Madhav",
                              "email": "sesham23@abc.com",
                              "external_login_id": null,
                              "home_phone_number": null,
                              "designation": "Tech",
                              "emp_code": "Z033",
                              "prefix": null,
                              "work_phone_number": "1234",
                              "mobile_phone_number": null,
                              "profile_picture": null,
                              "hourly_labor_charge": null,
                              "is_active": true,
                              "is_deleted": false,
                              "created_at": "2026-05-25T14:12:46.000Z",
                              "updated_at": "2026-06-10T12:07:09.000Z",
                              "last_login_at": "2026-06-15T02:41:23.000Z",
                              "role": {
                                "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                                "role_name": "Admin",
                                "role_key": "ADMIN"
                              }
                            },
                            "team": {
                              "team_uid": "36e1d413-89f3-4267-8629-1fc56f3852ef",
                              "team_name": "appointment",
                              "team_color": "#E11D48",
                              "is_deleted": false,
                              "is_active": true
                            }
                          }
                        ],
                        "appointment_number": "161-3",
                        "appointment_title": "api test",
                        "scheduled_start_time": "2026-06-18T05:30:00.000Z",
                        "scheduled_end_time": "2026-06-21T07:30:00.000Z",
                        "business_unit": {
                          "is_active": true,
                          "is_deleted": false,
                          "created_at": "2026-06-11T13:09:03.147Z",
                          "updated_at": "2026-06-11T13:09:03.148Z",
                          "bu_uid": "b08dc339-875a-48af-8daa-52c06551193b",
                          "bu_name": "HVAC",
                          "bu_license_number": "",
                          "bu_logo": "",
                          "monthly_goal": 0
                        },
                        "associations": {
                          "service_tasks": [],
                          "purchase_orders": []
                        },
                        "description": "test",
                        "markdown_description": "test",
                        "plain_text_description": "test",
                        "status": "OPEN",
                        "created_by": {
                          "user_uid": "7552871f-cd97-4db5-9d03-9698ed6e34f8",
                          "first_name": "Sesha",
                          "last_name": "Madhav",
                          "email": "sesham23@abc.com",
                          "external_login_id": null,
                          "home_phone_number": null,
                          "designation": "Tech",
                          "emp_code": "Z033",
                          "prefix": null,
                          "work_phone_number": "1234",
                          "mobile_phone_number": null,
                          "profile_picture": null,
                          "hourly_labor_charge": null,
                          "is_active": true,
                          "is_deleted": false,
                          "created_at": "2026-05-25T14:12:46.000Z",
                          "updated_at": "2026-06-10T12:07:09.000Z",
                          "last_login_at": "2026-06-15T02:41:23.000Z",
                          "role": {
                            "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                            "role_name": "Admin",
                            "role_key": "ADMIN"
                          }
                        },
                        "created_at": "2026-06-15T06:26:14.280Z",
                        "updated_at": "2026-06-15T06:26:14.280Z"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "appointment_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "operationId": "get_appointments-appointment-uid",
        "summary": "Get Appointment Details"
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