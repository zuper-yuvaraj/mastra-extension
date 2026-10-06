---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /notes

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
    "/notes": {
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
                          "note_uid": "e38261f4-2cc3-44c8-bcc5-a745c71cf6bf",
                          "job": {
                            "job_uid": "6c15c4e1-c793-4f24-9a7d-bfe537dd6be0"
                          },
                          "note_type": "DOCUMENT",
                          "note": "<p>Note</p>",
                          "attachments": [
                            {
                              "attachment_uid": "c9ee705f-7509-4da4-8325-c135b1d34400",
                              "company_attachment_uid": "c9ee705f-7509-4da4-8325-c135b1d34400",
                              "attachment_name": "image.png",
                              "attachment": "https://example.com/image.png",
                              "attachment_type": "IMAGE",
                              "attachment_size": 7.331,
                              "attachment_description": null,
                              "is_deleted": false,
                              "_id": "69fadc93c271665f3197a93d",
                              "attachment_tags": []
                            }
                          ],
                          "created_by": {
                            "user_uid": "7d9005f6-d9f5-4367-906c-138797b26bf5",
                            "first_name": "Zuper",
                            "last_name": "User",
                            "email": "zuper.user@email.com",
                            "home_phone_number": null,
                            "designation": "Admin",
                            "emp_code": "Z001",
                            "prefix": "user",
                            "work_phone_number": null,
                            "hourly_labor_charge": 45,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2025-09-11T12:39:58.000Z",
                            "updated_at": "2026-04-02T09:06:40.000Z",
                            "last_login_at": "2026-04-24T10:45:12.000Z"
                          },
                          "created_by_type": "EMPLOYEE",
                          "user_mentions": [],
                          "is_private": false,
                          "visible_to_customer": false,
                          "visibility": "INTERNAL",
                          "visible_to_fe": true,
                          "is_pinned": false,
                          "is_deleted": false,
                          "is_offline": false,
                          "synced_at": "2026-05-06T06:15:47.196Z",
                          "created_at": "2026-05-06T06:15:47.196Z",
                          "updated_at": "2026-05-06T06:15:47.197Z",
                          "is_v2_note": false
                        }
                      ],
                      "pinned_notes": [],
                      "total_records": 1,
                      "total_pages": 1,
                      "current_page": 1
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
            "name": "sort",
            "schema": {
              "type": "string",
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
              "default": "created_at"
            }
          },
          {
            "in": "query",
            "name": "count",
            "schema": {
              "type": "number",
              "default": "10"
            },
            "description": "Must be sent together with the other of page/count — sending only one returns 400 \"Page / Count number should be a valid number\", even though each is listed as independently optional."
          },
          {
            "in": "query",
            "name": "page",
            "schema": {
              "type": "number",
              "default": "1"
            },
            "description": "Must be sent together with the other of page/count — sending only one returns 400 \"Page / Count number should be a valid number\", even though each is listed as independently optional."
          },
          {
            "in": "query",
            "name": "is_pinned",
            "schema": {
              "type": "boolean",
              "default": "false"
            }
          },
          {
            "in": "query",
            "name": "filter.job",
            "schema": {
              "type": "string",
              "default": ""
            },
            "description": "job_uid"
          },
          {
            "in": "query",
            "name": "filter.customer",
            "schema": {
              "type": "string"
            },
            "description": "customer_uid"
          }
        ],
        "operationId": "get_notes"
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