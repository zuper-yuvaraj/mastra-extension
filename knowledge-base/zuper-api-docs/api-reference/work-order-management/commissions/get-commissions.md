---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /commissions

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
    "/commissions": {
      "get": {
        "description": "",
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
                      "data": [
                        {
                          "commission_uid": "01b0b161-f467-40cd-adf0-e66759413476",
                          "commission_amount": 20,
                          "commission_base_amount": 20,
                          "commission_type": "FLAT_VALUE",
                          "commission_rate": 20,
                          "commission_date": "2026-04-02",
                          "job_uid": "3df58a1d-e374-41ea-a9b5-6a8ccd493c55",
                          "project_uid": null,
                          "assigned_to": {
                            "user_id": 23551,
                            "user_uid": "e5129280-ae99-4708-867c-c7fa106cb63a",
                            "first_name": "John",
                            "last_name": "Doe",
                            "email": "john.doe@example.com",
                            "external_login_id": null,
                            "home_phone_number": null,
                            "designation": "Android Dev",
                            "emp_code": "EMP001",
                            "prefix": "EMP",
                            "work_phone_number": null,
                            "mobile_phone_number": null,
                            "profile_picture": "https://example.com/profile.jpg",
                            "hourly_labor_charge": 20,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2024-05-14T12:42:38.000Z",
                            "updated_at": "2025-11-21T07:53:15.000Z",
                            "last_login_at": "2026-04-03T09:54:27.000Z"
                          },
                          "created_by": {
                            "user_id": 40866,
                            "user_uid": "7d9005f6-d9f5-4367-906c-138797b26bf5",
                            "first_name": "John",
                            "last_name": "Doe",
                            "email": "john.doe@example.com",
                            "external_login_id": "john-doe",
                            "home_phone_number": null,
                            "designation": "Admin",
                            "emp_code": "EMP002",
                            "prefix": "USER",
                            "work_phone_number": null,
                            "mobile_phone_number": null,
                            "profile_picture": "https://example.com/profile.jpg",
                            "hourly_labor_charge": 45,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2025-09-11T12:39:58.000Z",
                            "updated_at": "2026-04-02T09:06:40.000Z",
                            "last_login_at": "2026-03-20T05:27:03.000Z"
                          },
                          "is_deleted": false,
                          "created_at": "2026-04-03T12:33:49.125Z",
                          "updated_at": "2026-04-03T12:33:49.126Z"
                        }
                      ],
                      "total_records": 1,
                      "current_page": 1,
                      "total_pages": 1
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "query",
            "name": "filter.job_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.project_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.user_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "sort_by",
            "schema": {
              "type": "string",
              "enum": [
                "commission_date",
                "created_at"
              ],
              "default": "created_at"
            }
          },
          {
            "in": "query",
            "name": "sort_order",
            "schema": {
              "type": "string",
              "enum": [
                "DESC",
                "ASC"
              ],
              "default": "DESC"
            }
          },
          {
            "in": "query",
            "name": "page",
            "schema": {
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "count",
            "schema": {
              "type": "number"
            }
          }
        ],
        "operationId": "get_commissions"
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