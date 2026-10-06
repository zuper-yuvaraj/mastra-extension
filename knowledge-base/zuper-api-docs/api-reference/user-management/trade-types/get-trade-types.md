---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /business_units

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
    "/business_units": {
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
                      "title": "Trade Type list fetched successfully",
                      "data": [
                        {
                          "is_active": true,
                          "is_deleted": false,
                          "created_at": "2026-01-27T10:13:39.090Z",
                          "updated_at": "2026-01-27T10:13:39.091Z",
                          "bu_uid": "07069f94-6163-44ea-b126-87ac6wqec0f4",
                          "bu_name": "trade",
                          "bu_email": "",
                          "bu_phone": "",
                          "bu_license_number": "",
                          "display_order": 4,
                          "bu_logo": "",
                          "monthly_goal": 0,
                          "created_by": {
                            "user_uid": "3ab638af-b3b5-44e9-a061-528e24df2ed0",
                            "first_name": "Jayasoorya",
                            "last_name": "Zuper",
                            "email": "jayasoorya.r@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": "9568956895",
                            "designation": "Admin",
                            "emp_code": "Z311",
                            "prefix": null,
                            "work_phone_number": "9568956895",
                            "mobile_phone_number": null,
                            "profile_picture": null,
                            "hourly_labor_charge": null,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2025-06-24T09:49:52.000Z",
                            "updated_at": "2026-01-19T06:58:05.000Z",
                            "last_login_at": "2026-01-27T09:10:50.000Z",
                            "role": {
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN"
                            }
                          }
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
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                },
                "examples": {
                  "Internal Server Error": {
                    "summary": "Internal Server Error",
                    "value": {
                      "type": "error",
                      "title": "Error in Fetching Trade Type",
                      "message": "Error in Fetching Trade Type"
                    }
                  }
                }
              }
            },
            "description": "Internal Server Error"
          }
        },
        "parameters": [
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
          },
          {
            "in": "query",
            "name": "sort",
            "schema": {
              "type": "string",
              "default": "ASC",
              "enum": [
                "ASC",
                "DESC"
              ]
            }
          },
          {
            "in": "query",
            "name": "sort_by",
            "schema": {
              "type": "string",
              "default": "display_order",
              "enum": [
                "display_order",
                "created_at"
              ]
            }
          },
          {
            "in": "query",
            "name": "filter.keyword",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.is_active",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "filter.show_all_bu",
            "schema": {
              "type": "boolean"
            },
            "description": "All created trade types will be displayed in Settings and will be accessible only to Admin users"
          }
        ],
        "operationId": "get_business-units"
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