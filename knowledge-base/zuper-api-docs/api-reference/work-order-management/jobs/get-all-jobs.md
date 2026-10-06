---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Jobs

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
    "/jobs": {
      "get": {
        "summary": "Get Jobs",
        "description": "",
        "operationId": "get-all-jobs",
        "parameters": [
          {
            "name": "filter.priority",
            "in": "query",
            "description": "Filter based On priority of the Job, Allowed:URGENT,HIGH,MEDIUM,LOW",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "authorization",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "Bearer {token}"
            }
          },
          {
            "name": "filter.customer",
            "in": "query",
            "description": "Filter based on customer using customer UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.category",
            "in": "query",
            "description": "Filter based on category using category UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "Used for search",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job_tags",
            "in": "query",
            "description": "Filter on job tags",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job_status",
            "in": "query",
            "description": "Filter based on job status. Only the status uid works (not the status name) — sending a name like \"New\" returns 200 with 0 rows rather than resolving it or erroring. Get the uid from GET /jobs/status/{category_uid}.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.from_date",
            "in": "query",
            "description": "Filter based on job schduled from date",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.to_date",
            "in": "query",
            "description": "Filter based on job scheduled to date",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at",
            "in": "query",
            "description": "Filter based on job updated at date",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "description": "Filter based on job updated at from. Requires a full timestamp in one of: YYYY-MM-DDTHH:mm:ssZ, YYYY-MM-DD HH:mm:ss, YYYY-MM-DDTHH:mm:ss.SSSZ, YYYY-MM-DD HH:mm:ss.SSS. A plain date (e.g. 2026-09-01) is rejected with 400 \"Invalid Updated Date\" — unlike filter.created_at_from/to, which accept a plain date. Both bounds must be sent together — sending only one silently applies no filter at all (not treated as an open-ended range), with no error.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "description": "Filter based on job updated at to. Both bounds must be sent together — sending only one silently applies no filter at all (not treated as an open-ended range), with no error.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.assigned_to",
            "in": "query",
            "description": "Filter based on assigned users on job",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.assigned_to_team",
            "in": "query",
            "description": "Filter based on assigned teams on job",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "description": "Filter based on created by date",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.custom_field",
            "in": "query",
            "description": "Filter based on custom field. Expects JSON: {\"label\": \"<custom field label>\", \"value\": \"<value>\"}. An optional third key, \"is_regex\": true, matches value as a case-insensitive regex instead of exact equality (undocumented elsewhere). A non-JSON string returns 400 \"Invalid Format\"; valid JSON with different keys (e.g. field_name/field_value) returns 200 with 0 rows rather than an error.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.asset",
            "in": "query",
            "description": "Filter based on asset using asset UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.ppm",
            "in": "query",
            "description": "Filter based on ppm uising ppm UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.service_contract",
            "in": "query",
            "description": "Filter based on service contract using service contract UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job_uid",
            "in": "query",
            "description": "Filter based on job UIDS",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer_feedback",
            "in": "query",
            "description": "Filter based on customer feedback, Allowed: 'HAPPY', 'NEUTRAL', 'UNHAPPY', 'VERY_HAPPY', 'VERY_UNHAPPY'",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.recurrence_job_uid",
            "in": "query",
            "description": "Filter based on recurrence job UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_recurrence",
            "in": "query",
            "description": "Filter recurrence job",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job_type",
            "in": "query",
            "description": "Filter based on job type. Allowed: 'NEW', 'REVISIT'",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.due_date_from",
            "in": "query",
            "description": "Filter based on job due date",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.due_date_to",
            "in": "query",
            "description": "Filter based on job due date",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.scheduled",
            "in": "query",
            "description": "Filter based on scheduled date",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.property",
            "in": "query",
            "description": "Filter based on property using Property UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer_organization",
            "in": "query",
            "description": "Filter based on organisation using organization UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_at",
            "in": "query",
            "description": "Filter based on job created at date",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_at_from",
            "in": "query",
            "description": "Filter based on job created at from date. Accepts a plain YYYY-MM-DD date (expanded to 00:00:00/23:59:59 in the company's timezone) — unlike filter.updated_at_from/to, which require a full timestamp. Both bounds must be sent together — sending only one silently applies no filter at all (not treated as an open-ended range), with no error.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_at_to",
            "in": "query",
            "description": "Filter based on job created at to date. Both bounds must be sent together — sending only one silently applies no filter at all (not treated as an open-ended range), with no error.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.status_in_history",
            "in": "query",
            "description": "Filter based on status",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.route",
            "in": "query",
            "description": "Filter based on job route",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.parent_job",
            "in": "query",
            "description": "Filter based on parent job using JOB UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "description": "Filter Deleted jobs max of 90 days",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.work_order_number",
            "in": "query",
            "description": "Filter based on job work order number",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.has_route",
            "in": "query",
            "description": "Filter based on route enabled for job",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.delayed_job",
            "in": "query",
            "description": "Filter based on delayed job",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_invoiced",
            "in": "query",
            "description": "Filter based on invoiced jobs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.invoice_status",
            "in": "query",
            "description": "Filter based on invoice status jobs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.assigned",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.service_territory",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.project",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.request_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.business_unit",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Filter based on Job status",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "Page number",
            "schema": {
              "type": "string",
              "default": "1"
            }
          },
          {
            "name": "count",
            "in": "query",
            "description": "Maximum allowed 1000",
            "schema": {
              "type": "string",
              "default": "10"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "Allowed Keys: DESC, ASC",
            "schema": {
              "type": "string",
              "default": "DESC"
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "description": "Allowed Keys: work_order_number, job_priority, scheduled_start_time, due_date Note: created_at is NOT one of the allowed keys here, despite being a common first guess — sending it returns 400 \"Invalid Sort By Value\".",
            "schema": {
              "type": "string",
              "default": "work_order_number"
            }
          },
          {
            "name": "date_type",
            "in": "query",
            "description": "Allowed Keys: scheduled_date, created_date, current_status_updated_at",
            "schema": {
              "type": "string",
              "default": "scheduled_date"
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
                    "value": {
                      "type": "success",
                      "data": [
                        {
                          "job_uid": "698d5560-6e3b-11ee-9637-5d3ccadf022e",
                          "customer": null,
                          "organization": {
                            "organization_uid": "ca32ebd0-9c8d-11ed-9f13-9789cec5f4f1",
                            "organization_name": "2503nithintest",
                            "organization_logo": null,
                            "organization_description": null,
                            "organization_email": "2503nithin@mail.com",
                            "organization_address": {
                              "city": "Chennai ",
                              "state": "Tamil Nadu ",
                              "street": "Chennai ",
                              "country": "India",
                              "landmark": "",
                              "geo_cordinates": [
                                13.08346222729011,
                                80.26928839316079
                              ]
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "prefix": "Q3_0001",
                          "delayed_job": false,
                          "assigned_to_team": [],
                          "assigned_to": [],
                          "job_title": "test job",
                          "job_category": {
                            "estimated_duration": {
                              "hours": 0,
                              "minutes": 0,
                              "days": 2
                            },
                            "category_color": "#000",
                            "category_name": "Recurring",
                            "category_uid": "24b49530-37dc-11ec-9f98-2573cda9e3a6"
                          },
                          "job_priority": "LOW",
                          "job_type": "NEW",
                          "job_tags": [],
                          "due_date": "2023-10-19T18:29:00.000Z",
                          "current_job_status": {
                            "status_uid": "f2fff4a7-1e27-406d-b091-5641ef59841b",
                            "status_name": "test",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "job_status": [
                            {
                              "status_uid": "f2fff4a7-1e27-406d-b091-5641ef59841b",
                              "status_name": "test",
                              "status_type": "NEW",
                              "status_color": "#02B875",
                              "is_offline": false,
                              "checklist": [],
                              "created_at": "2023-10-19T04:53:14.991Z",
                              "synced_at": "2023-10-19T04:53:14.991Z"
                            }
                          ],
                          "customer_address": {
                            "landmark": "",
                            "city": "Chennai ",
                            "state": "Tamil Nadu ",
                            "street": "Chennai ",
                            "country": "India",
                            "geo_cordinates": [
                              13.08346222729011,
                              80.26928839316079
                            ],
                            "first_name": "2503nithintest",
                            "email": "2503nithin@mail.com"
                          },
                          "customer_billing_address": {
                            "landmark": "",
                            "city": "Chennai ",
                            "state": "Tamil Nadu ",
                            "street": "Chennai ",
                            "country": "India",
                            "geo_cordinates": [
                              13.08346222729011,
                              80.26928839316079
                            ],
                            "first_name": "2503nithintest",
                            "email": "2503nithin@mail.com"
                          },
                          "custom_fields": [
                            {
                              "label": "Job Feedback",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6530b63a0d8d103406ac12f1"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6530b63a0d8d103406ac12f2"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6530b63a0d8d103406ac12f3"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6530b63a0d8d103406ac12f4"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6530b63a0d8d103406ac12f5"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6530b63a0d8d103406ac12f6"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6530b63a0d8d103406ac12f7"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6530b63a0d8d103406ac12f8"
                            }
                          ],
                          "is_recurrence": false,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "297ff853-597b-4f24-a738-b24b4e4a41cf",
                            "first_name": "Jegadheesh",
                            "last_name": "R",
                            "email": "jegadheesh.r@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": null,
                            "designation": "Admin",
                            "emp_code": "1234",
                            "prefix": null,
                            "work_phone_number": null,
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg",
                            "hourly_labor_charge": 20,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2023-09-26T10:13:03.000Z",
                            "updated_at": "2023-09-26T10:13:03.000Z",
                            "role": {
                              "role_id": 1,
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "is_deleted": false,
                          "products": [],
                          "created_at": "2023-10-19T04:53:14.996Z",
                          "updated_at": "2023-10-19T04:53:15.168Z",
                          "work_order_number": 13577
                        },
                        {
                          "job_uid": "a11da730-6dd9-11ee-9637-5d3ccadf022e",
                          "customer": {
                            "customer_first_name": "Airport",
                            "customer_last_name": "Customer",
                            "customer_company_name": "",
                            "customer_email": "zuper.fe@ranjith.dev",
                            "customer_uid": "72ece7b0-782d-11e8-8aa6-497f7c509174",
                            "is_deleted": false,
                            "customer_contact_no": null,
                            "is_active": true,
                            "customer_organization": {
                              "is_active": true,
                              "is_deleted": false,
                              "organization_address": {
                                "geo_cordinates": [
                                  13.0494011,
                                  80.24528719999999
                                ],
                                "street": "Prakasam Street Gangai Karai Puram ",
                                "city": "Chennai ",
                                "state": "Tamil Nadu ",
                                "country": "India",
                                "zip_code": "600017"
                              },
                              "organization_name": "Golden Square",
                              "organization_logo": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/4a298850-6471-11eb-851f-b9f876665bc8.png",
                              "organization_email": "vidya1196@gmail.com",
                              "organization_uid": "57292b50-6471-11eb-851f-b9f876665bc8",
                              "organization_description": null
                            }
                          },
                          "organization": {
                            "is_active": true,
                            "is_deleted": false,
                            "organization_address": {
                              "geo_cordinates": [
                                13.0494011,
                                80.24528719999999
                              ],
                              "street": "Prakasam Street Gangai Karai Puram ",
                              "city": "Chennai ",
                              "state": "Tamil Nadu ",
                              "country": "India",
                              "zip_code": "600017"
                            },
                            "organization_name": "Golden Square",
                            "organization_logo": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/4a298850-6471-11eb-851f-b9f876665bc8.png",
                            "organization_email": "vidya1196@gmail.com",
                            "organization_uid": "57292b50-6471-11eb-851f-b9f876665bc8",
                            "organization_description": null
                          },
                          "delayed_job": false,
                          "assigned_to_team": [],
                          "assigned_to": [
                            {
                              "user": {
                                "user_uid": "d30d95ba-43fb-4568-9550-715858629f02",
                                "first_name": "Trevor",
                                "last_name": "Alan",
                                "email": "iOS.fe@zuper.co",
                                "external_login_id": "9789290838",
                                "home_phone_number": "9876543210",
                                "designation": "Technician",
                                "emp_code": "1234",
                                "prefix": null,
                                "work_phone_number": "9876543211",
                                "mobile_phone_number": "US, UK, CANADA",
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2700dd00-df27-11ed-99a7-fb2773a094b7.png",
                                "hourly_labor_charge": 120,
                                "is_active": true,
                                "is_deleted": false,
                                "created_at": "2018-07-26T04:26:24.000Z",
                                "updated_at": "2023-09-15T05:53:07.000Z",
                                "role": {
                                  "role_id": 3,
                                  "role_uid": "504e52bc-ff7d-11e7-8be5-0ed5f89f718b",
                                  "role_name": "Field Executive",
                                  "role_key": "FIELD_EXECUTIVE",
                                  "created_at": "2018-01-22T00:00:00.000Z",
                                  "updated_at": "2018-01-22T00:00:00.000Z"
                                }
                              },
                              "team": {
                                "team_uid": "3d4c0a90-a9d8-406d-a20f-42677ab5a01d",
                                "team_name": "Test Team 1234",
                                "team_color": "#33dbdb",
                                "is_active": true,
                                "is_deleted": false
                              },
                              "is_accepted": true
                            }
                          ],
                          "job_title": "Visit for Airport Customer",
                          "job_category": {
                            "category_name": "Home Cleaning",
                            "category_uid": "3fee25f0-74a1-11ea-8ca5-df1d176880cb",
                            "estimated_duration": {
                              "hours": 1,
                              "minutes": 5
                            },
                            "category_color": "#2e06f4"
                          },
                          "job_priority": "LOW",
                          "job_type": "NEW",
                          "job_tags": [],
                          "scheduled_start_time": "2023-10-18T17:12:17.000Z",
                          "scheduled_end_time": "2023-10-18T18:17:17.000Z",
                          "scheduled_duration": 65,
                          "current_job_status": {
                            "status_uid": "cc47f5b9-862f-400a-a13f-40c63ca65e2b",
                            "status_name": "New",
                            "status_type": "NEW",
                            "status_color": "#8e44ad"
                          },
                          "job_status": [
                            {
                              "status_uid": "cc47f5b9-862f-400a-a13f-40c63ca65e2b",
                              "status_name": "New",
                              "status_type": "NEW",
                              "status_color": "#8e44ad",
                              "is_offline": false,
                              "checklist": [],
                              "created_at": "2023-10-18T17:13:17.763Z",
                              "synced_at": "2023-10-18T17:13:17.763Z"
                            }
                          ],
                          "customer_address": {
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Plot No. 1 Guindy, SIDCO Industrial Estate",
                            "country": "India",
                            "zip_code": "600032",
                            "first_name": "John",
                            "last_name": "Doe",
                            "phone_number": "09876543210",
                            "email": "johndoe@gmail.com"
                          },
                          "customer_billing_address": {
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Plot No. 1 Guindy, SIDCO Industrial Estate",
                            "country": "India",
                            "zip_code": "600032",
                            "first_name": "John",
                            "last_name": "Doe",
                            "phone_number": "09876543210",
                            "email": "johndoe@gmail.com"
                          },
                          "custom_fields": [
                            {
                              "label": "Job Feedback",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0a"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0b"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0c"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0d"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0e"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0f"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e10"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e11"
                            },
                            {
                              "label": "Job Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "JOB",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "6527eb5efb4246294e724e13"
                            },
                            {
                              "label": "Product Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "6527eb5efb4246294e724e14"
                            },
                            {
                              "label": "Estimate Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "ESTIMATE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "6527eb5efb4246294e724e15"
                            },
                            {
                              "label": "Invoice Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "INVOICE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "6527eb5efb4246294e724e16"
                            },
                            {
                              "label": "Customer Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "CUSTOMER",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "6527eb5efb4246294e724e17"
                            }
                          ],
                          "products": [
                            {
                              "product_id": "Product No.2",
                              "product_uid": "2a1ce610-d90d-11e9-956d-85e2bb929434",
                              "product_category": "3e2b4520-81ce-11e9-b902-35bbc7d2063e",
                              "product_image": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/83a66500-6519-11eb-851f-b9f876665bc8.png",
                              "product_name": "MDF Coasters",
                              "product_description": "Pack Content & Dimensions\nMaterial: MDF\nDesign: Jigsaw\nDimensions: ~3.8\" inches\nThickness: 2.5 mm\nContent: 4 Pieces\n\nProduct Description\nSet of 4 MDF bases for decoupage, mixed media, acrylic painting, DIY, dot mandala art, Wall decor projects, and other art & craft forms.\nNot waterproof: Use a coat of waterproof varnish on your completed project.\nSmooth finish & easy to work with\nThere can be a slight colour variation from the displayed photographs.",
                              "uom": "Litres",
                              "quantity": 1,
                              "price": 50,
                              "product_type": "PRODUCT",
                              "meta_data": [],
                              "serial_nos": [],
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 50
                            },
                            {
                              "product_id": "001",
                              "product_uid": "b89fd290-35eb-11ea-b910-fd8a0dd6897e",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_image": "",
                              "product_name": "Cleaning of Water Tank",
                              "product_description": "",
                              "uom": "",
                              "quantity": 1,
                              "price": 1000,
                              "product_type": "SERVICE",
                              "meta_data": [],
                              "serial_nos": [],
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 1000
                            }
                          ],
                          "is_recurrence": false,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "d30d95ba-43fb-4568-9550-715858629f02",
                            "first_name": "Trevor",
                            "last_name": "Alan",
                            "email": "iOS.fe@zuper.co",
                            "external_login_id": "9789290838",
                            "home_phone_number": "9876543210",
                            "designation": "Technician",
                            "emp_code": "1234",
                            "prefix": null,
                            "work_phone_number": "9876543211",
                            "mobile_phone_number": "US, UK, CANADA",
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2700dd00-df27-11ed-99a7-fb2773a094b7.png",
                            "hourly_labor_charge": 120,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2018-07-26T04:26:24.000Z",
                            "updated_at": "2023-09-15T05:53:07.000Z",
                            "role": {
                              "role_id": 3,
                              "role_uid": "504e52bc-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Field Executive",
                              "role_key": "FIELD_EXECUTIVE",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "source": {
                            "source_uid": "53c9f94f-d7d2-4902-b4e6-e14412f2b6fe",
                            "source_name": "Website"
                          },
                          "is_deleted": false,
                          "created_at": "2023-10-18T17:13:17.770Z",
                          "updated_at": "2023-10-18T17:13:22.810Z",
                          "work_order_number": 13576
                        },
                        {
                          "job_uid": "b5d54e90-6dce-11ee-9637-5d3ccadf022e",
                          "customer": {
                            "customer_uid": "dce86a50-4275-11ee-b1a1-7372ef614376",
                            "customer_first_name": "Portal ",
                            "customer_last_name": "Customer",
                            "customer_organization": {
                              "organization_uid": "40a6c5f0-40af-11ee-9b5e-7b9238a586ef",
                              "organization_name": "Amika Tower",
                              "organization_logo": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/16c24930-40af-11ee-9b5e-7b9238a586ef.jpg",
                              "organization_description": "<p>Amika Tower</p>",
                              "organization_email": "Amika@gmail.com",
                              "organization_address": {
                                "city": "Chennai",
                                "state": "Tamil Nadu",
                                "street": "Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi",
                                "landmark": "",
                                "zip_code": "600041",
                                "geo_cordinates": [
                                  12.9733389,
                                  80.2508572
                                ],
                                "first_name": "Amika ",
                                "last_name": "Tower",
                                "phone_number": "1231231231",
                                "email": "Amika@gmail.com"
                              },
                              "is_active": true,
                              "is_deleted": false
                            },
                            "customer_company_name": "",
                            "customer_email": "Portal@gmail.com",
                            "customer_contact_no": {
                              "mobile": "44444444444",
                              "home": "1231231231",
                              "work": "9898989898"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "organization": {
                            "organization_uid": "40a6c5f0-40af-11ee-9b5e-7b9238a586ef",
                            "organization_name": "Amika Tower",
                            "organization_logo": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/16c24930-40af-11ee-9b5e-7b9238a586ef.jpg",
                            "organization_description": "<p>Amika Tower</p>",
                            "organization_email": "Amika@gmail.com",
                            "organization_address": {
                              "city": "Chennai",
                              "state": "Tamil Nadu",
                              "street": "Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi",
                              "landmark": "",
                              "zip_code": "600041",
                              "geo_cordinates": [
                                12.9733389,
                                80.2508572
                              ],
                              "first_name": "Amika ",
                              "last_name": "Tower",
                              "phone_number": "1231231231",
                              "email": "Amika@gmail.com"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "delayed_job": false,
                          "assigned_to_team": [],
                          "assigned_to": [
                            {
                              "user": {
                                "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                                "first_name": "Raghav",
                                "last_name": "G",
                                "email": "raghav@zuper.co",
                                "external_login_id": null,
                                "home_phone_number": "7397722822",
                                "designation": "CTO",
                                "emp_code": "1234",
                                "prefix": null,
                                "work_phone_number": "7397722822",
                                "mobile_phone_number": null,
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                                "hourly_labor_charge": 500,
                                "is_active": true,
                                "is_deleted": false,
                                "created_at": "2018-01-22T13:59:11.000Z",
                                "updated_at": "2023-05-02T10:58:16.000Z",
                                "role": {
                                  "role_id": 1,
                                  "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                                  "role_name": "Admin",
                                  "role_key": "ADMIN",
                                  "created_at": "2018-01-22T00:00:00.000Z",
                                  "updated_at": "2018-01-22T00:00:00.000Z"
                                }
                              },
                              "team": {
                                "team_uid": "335c25ef-c54a-43d3-9c88-7c62921e4da4",
                                "team_name": "Maintanence",
                                "team_color": "#1abc9c",
                                "is_active": true,
                                "is_deleted": false
                              }
                            }
                          ],
                          "job_title": "Visit for Portal  Customer",
                          "job_category": {
                            "category_name": "Category - 9010",
                            "category_uid": "5c904c80-b753-11e9-8afe-e53ff9105097",
                            "category_color": "#e74c3c",
                            "estimated_duration": {
                              "hours": 8,
                              "minutes": 1
                            }
                          },
                          "job_priority": "LOW",
                          "job_type": "NEW",
                          "job_tags": [],
                          "due_date": "2023-10-18T00:00:00.000Z",
                          "current_job_status": {
                            "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                            "status_name": "New Request",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "job_status": [
                            {
                              "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                              "status_name": "New Request",
                              "status_type": "NEW",
                              "status_color": "#02B875",
                              "is_offline": false,
                              "checklist": [],
                              "created_at": "2023-10-18T15:55:08.127Z",
                              "synced_at": "2023-10-18T15:55:08.127Z"
                            }
                          ],
                          "customer_address": {
                            "landmark": "",
                            "city": "Słupca",
                            "state": "Wielkopolskie",
                            "street": "Amika. Konsorcjum medyczne, Browarna",
                            "zip_code": "62-400",
                            "geo_cordinates": [
                              52.289038,
                              17.87002
                            ],
                            "first_name": "Portal ",
                            "last_name": "Customer",
                            "phone_number": "1231231231",
                            "email": "Portal@gmail.com"
                          },
                          "customer_billing_address": {
                            "landmark": "",
                            "city": "Września",
                            "state": "Wielkopolskie",
                            "street": "AMIKA Konsorcjum Medyczne Spółka z o.o., Piastów",
                            "zip_code": "62-302",
                            "geo_cordinates": [
                              52.3228614,
                              17.5896001
                            ],
                            "first_name": "Amika ",
                            "last_name": "Tower",
                            "phone_number": "1231231231",
                            "email": "Amika@gmail.com"
                          },
                          "custom_fields": [
                            {
                              "label": "Job Feedback",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0a"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0b"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0c"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0d"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0e"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0f"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e10"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e11"
                            }
                          ],
                          "products": [
                            {
                              "product_id": "ABC100",
                              "product_uid": "61bf7b30-af89-11e9-83bc-f9d48590bac4",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_image": "",
                              "product_name": "Product for trans",
                              "product_description": "",
                              "brand": "NHCL",
                              "specification": "NHCL",
                              "uom": "1 Litres",
                              "quantity": 2,
                              "price": 500,
                              "product_type": "SERVICE",
                              "meta_data": [],
                              "serial_nos": [],
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 1000
                            },
                            {
                              "product_id": "ABC100",
                              "product_uid": "61bf7b30-af89-11e9-83bc-f9d48590bac4",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_image": "",
                              "product_name": "Product for trans",
                              "product_description": "",
                              "brand": "NHCL",
                              "specification": "NHCL",
                              "uom": "1 Litres",
                              "quantity": 2,
                              "price": 100,
                              "product_type": "SERVICE",
                              "meta_data": [],
                              "serial_nos": [],
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 200
                            },
                            {
                              "product_id": "ABC100",
                              "product_uid": "61bf7b30-af89-11e9-83bc-f9d48590bac4",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_image": "",
                              "product_name": "Product for trans",
                              "product_description": "",
                              "brand": "NHCL",
                              "specification": "NHCL",
                              "uom": "1 Litres",
                              "quantity": 2,
                              "price": 100,
                              "product_type": "SERVICE",
                              "meta_data": [],
                              "serial_nos": [],
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 200
                            },
                            {
                              "product_id": "ABC100",
                              "product_uid": "61bf7b30-af89-11e9-83bc-f9d48590bac4",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_image": "",
                              "product_name": "Product for trans",
                              "product_description": "",
                              "brand": "NHCL",
                              "specification": "NHCL",
                              "uom": "1 Litres",
                              "quantity": 2,
                              "price": 100,
                              "product_type": "SERVICE",
                              "meta_data": [],
                              "serial_nos": [],
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 200
                            }
                          ],
                          "is_recurrence": false,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                            "first_name": "Raghav",
                            "last_name": "G",
                            "email": "raghav@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": "7397722822",
                            "designation": "CTO",
                            "emp_code": "1234",
                            "prefix": null,
                            "work_phone_number": "7397722822",
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                            "hourly_labor_charge": 500,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2018-01-22T13:59:11.000Z",
                            "updated_at": "2023-05-02T10:58:16.000Z",
                            "role": {
                              "role_id": 1,
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "is_deleted": false,
                          "created_at": "2023-10-18T15:55:08.135Z",
                          "updated_at": "2023-10-18T15:55:08.254Z",
                          "work_order_number": 13575
                        },
                        {
                          "job_uid": "e800f050-6dc3-11ee-9637-5d3ccadf022e",
                          "customer": {
                            "customer_uid": "92453f40-c274-11ed-aeae-b171c99b6f59",
                            "customer_first_name": "jai",
                            "customer_last_name": "",
                            "customer_organization": {
                              "organization_uid": "ec85ff50-6849-11ee-af3a-a79966abe7f6",
                              "organization_name": "Vishranthi",
                              "organization_logo": null,
                              "organization_description": null,
                              "organization_email": "sundar@sundar.com",
                              "organization_address": {
                                "city": "San Francisco",
                                "state": "California",
                                "street": "1800 Ellis Street",
                                "landmark": "",
                                "zip_code": "94115",
                                "geo_cordinates": [
                                  37.78583393502708,
                                  -122.40641713142396
                                ],
                                "first_name": "",
                                "last_name": "",
                                "phone_number": "",
                                "email": ""
                              },
                              "is_active": true,
                              "is_deleted": false
                            },
                            "customer_company_name": "",
                            "customer_email": "jaikrishna@zuper.co",
                            "is_active": true,
                            "is_deleted": false,
                            "customer_contact_no": {
                              "mobile": "",
                              "home": "",
                              "work": ""
                            }
                          },
                          "organization": {
                            "organization_uid": "ec85ff50-6849-11ee-af3a-a79966abe7f6",
                            "organization_name": "Vishranthi",
                            "organization_logo": null,
                            "organization_description": null,
                            "organization_email": "sundar@sundar.com",
                            "organization_address": {
                              "city": "San Francisco",
                              "state": "California",
                              "street": "1800 Ellis Street",
                              "landmark": "",
                              "zip_code": "94115",
                              "geo_cordinates": [
                                37.78583393502708,
                                -122.40641713142396
                              ],
                              "first_name": "",
                              "last_name": "",
                              "phone_number": "",
                              "email": ""
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "delayed_job": false,
                          "assigned_to_team": [],
                          "assigned_to": [
                            {
                              "user": {
                                "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                                "first_name": "Raghav",
                                "last_name": "G",
                                "email": "raghav@zuper.co",
                                "external_login_id": null,
                                "home_phone_number": "7397722822",
                                "designation": "CTO",
                                "emp_code": "1234",
                                "prefix": null,
                                "work_phone_number": "7397722822",
                                "mobile_phone_number": null,
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                                "hourly_labor_charge": 500,
                                "is_active": true,
                                "is_deleted": false,
                                "created_at": "2018-01-22T13:59:11.000Z",
                                "updated_at": "2023-05-02T10:58:16.000Z",
                                "role": {
                                  "role_id": 1,
                                  "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                                  "role_name": "Admin",
                                  "role_key": "ADMIN",
                                  "created_at": "2018-01-22T00:00:00.000Z",
                                  "updated_at": "2018-01-22T00:00:00.000Z"
                                }
                              },
                              "team": {
                                "team_uid": "335c25ef-c54a-43d3-9c88-7c62921e4da4",
                                "team_name": "Maintanence",
                                "team_color": "#1abc9c",
                                "is_active": true,
                                "is_deleted": false
                              }
                            }
                          ],
                          "job_title": "Visit for jai",
                          "job_category": {
                            "category_name": "Category - 9010",
                            "category_uid": "5c904c80-b753-11e9-8afe-e53ff9105097",
                            "category_color": "#e74c3c",
                            "estimated_duration": {
                              "hours": 8,
                              "minutes": 1
                            }
                          },
                          "job_priority": "LOW",
                          "job_type": "NEW",
                          "job_tags": [],
                          "due_date": "2023-10-18T00:00:00.000Z",
                          "current_job_status": {
                            "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                            "status_name": "New Request",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "job_status": [
                            {
                              "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                              "status_name": "New Request",
                              "status_type": "NEW",
                              "status_color": "#02B875",
                              "is_offline": false,
                              "checklist": [],
                              "created_at": "2023-10-18T14:37:47.682Z",
                              "synced_at": "2023-10-18T14:37:47.682Z"
                            }
                          ],
                          "customer_address": {
                            "landmark": "asdasda",
                            "city": "asdasdas",
                            "state": "asdasdasd",
                            "street": "asdasdasdasdasdasdas",
                            "country": "",
                            "zip_code": "asdasd",
                            "first_name": "",
                            "last_name": "",
                            "phone_number": "",
                            "email": ""
                          },
                          "customer_billing_address": {
                            "landmark": "asdasda",
                            "city": "asdasdas",
                            "state": "asdasdasd",
                            "street": "asdasdasdasdasdasdas",
                            "country": "",
                            "zip_code": "asdasd",
                            "first_name": "",
                            "last_name": "",
                            "phone_number": "",
                            "email": ""
                          },
                          "custom_fields": [
                            {
                              "label": "Job Feedback",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0a"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0b"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0c"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0d"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0e"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0f"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e10"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e11"
                            }
                          ],
                          "products": [
                            {
                              "product_id": "122454-FDFJ",
                              "product_uid": "c6de1ae0-9800-11ed-8a66-e531e7c86e1f",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_image": "",
                              "product_name": "1/2\" ODX 50' Yellow Gas Line Ava",
                              "product_description": "",
                              "brand": "",
                              "specification": "",
                              "uom": "",
                              "quantity": 1,
                              "price": 10,
                              "product_type": "PRODUCT",
                              "meta_data": [],
                              "serial_nos": [],
                              "location_uid": "955447b0-85ee-11e9-834a-b9e1f8f2de14",
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 10
                            }
                          ],
                          "is_recurrence": false,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                            "first_name": "Raghav",
                            "last_name": "G",
                            "email": "raghav@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": "7397722822",
                            "designation": "CTO",
                            "emp_code": "1234",
                            "prefix": null,
                            "work_phone_number": "7397722822",
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                            "hourly_labor_charge": 500,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2018-01-22T13:59:11.000Z",
                            "updated_at": "2023-05-02T10:58:16.000Z",
                            "role": {
                              "role_id": 1,
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "is_deleted": false,
                          "created_at": "2023-10-18T14:37:47.687Z",
                          "updated_at": "2023-10-18T14:37:47.779Z",
                          "work_order_number": 13574
                        },
                        {
                          "job_uid": "73fa0700-6dc3-11ee-9637-5d3ccadf022e",
                          "customer": {
                            "customer_uid": "a2604550-1cc4-11ee-bd31-09c5f89082fa",
                            "customer_first_name": "Kara",
                            "customer_last_name": "CJ",
                            "customer_organization": {
                              "organization_uid": "90ee6dd0-6cd6-11ee-ad52-fb5442a7fc06",
                              "organization_name": "zuperTestOrg2",
                              "organization_description": "If you're a Slack mobile user, then you are familiar with the productivity power that Slack can give you while on the go. Learn more about what it takes to build Slack's mobile experience.",
                              "organization_email": "zuper@gmail.com",
                              "organization_address": {
                                "city": "Chennai",
                                "state": "TN",
                                "street": "No 55",
                                "zip_code": "600040"
                              },
                              "is_active": true,
                              "is_deleted": false
                            },
                            "customer_company_name": "",
                            "customer_email": "kara@gmail.com",
                            "customer_contact_no": {
                              "mobile": "3333333333",
                              "home": "2222222222",
                              "work": "5555555555"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "organization": {
                            "organization_uid": "90ee6dd0-6cd6-11ee-ad52-fb5442a7fc06",
                            "organization_name": "zuperTestOrg2",
                            "organization_description": "If you're a Slack mobile user, then you are familiar with the productivity power that Slack can give you while on the go. Learn more about what it takes to build Slack's mobile experience.",
                            "organization_email": "zuper@gmail.com",
                            "organization_address": {
                              "city": "Chennai",
                              "state": "TN",
                              "street": "No 55",
                              "zip_code": "600040"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "prefix": "Q3_0001",
                          "delayed_job": false,
                          "assigned_to_team": [],
                          "assigned_to": [],
                          "job_title": "Test - invoice",
                          "job_category": {
                            "category_name": "Category - 9010",
                            "category_uid": "5c904c80-b753-11e9-8afe-e53ff9105097",
                            "category_color": "#e74c3c",
                            "estimated_duration": {
                              "hours": 8,
                              "minutes": 1
                            }
                          },
                          "job_priority": "LOW",
                          "job_type": "NEW",
                          "job_tags": [],
                          "due_date": "2023-10-20T18:29:00.000Z",
                          "current_job_status": {
                            "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                            "status_name": "New Request",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "job_status": [
                            {
                              "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                              "status_name": "New Request",
                              "status_type": "NEW",
                              "status_color": "#02B875",
                              "is_offline": false,
                              "checklist": [],
                              "created_at": "2023-10-18T14:34:32.981Z",
                              "synced_at": "2023-10-18T14:34:32.981Z"
                            }
                          ],
                          "customer_address": {
                            "city": "Chennai ",
                            "state": "TN",
                            "street": "Chennai ",
                            "zip_code": "600041",
                            "first_name": "Kara",
                            "last_name": "CJ",
                            "phone_number": "3333333333",
                            "email": "kara@gmail.com"
                          },
                          "customer_billing_address": {
                            "landmark": "Near Lottie",
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Chennai, India",
                            "country": "India",
                            "zip_code": "600028",
                            "geo_cordinates": [
                              13.0223022,
                              80.25913709999999
                            ],
                            "first_name": "Elmira",
                            "last_name": "Conroy",
                            "phone_number": "1231231231",
                            "email": "kara@gmail.com"
                          },
                          "custom_fields": [
                            {
                              "label": "Job Feedback",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fecf80d8d103406a90792"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fecf80d8d103406a90793"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fecf80d8d103406a90794"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fecf80d8d103406a90795"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fecf80d8d103406a90796"
                            },
                            {
                              "label": "Date Input",
                              "value": "2023-07-07",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fecf80d8d103406a90797"
                            },
                            {
                              "label": "File Input",
                              "value": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/64fd6580-1cc4-11ee-bd31-09c5f89082fa.jpg",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fecf80d8d103406a90798"
                            },
                            {
                              "label": "Time Input",
                              "value": "17:50:00",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fecf80d8d103406a90799"
                            }
                          ],
                          "products": [],
                          "is_recurrence": false,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                            "first_name": "Raghav",
                            "last_name": "G",
                            "email": "raghav@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": "7397722822",
                            "designation": "CTO",
                            "emp_code": "1234",
                            "prefix": null,
                            "work_phone_number": "7397722822",
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                            "hourly_labor_charge": 500,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2018-01-22T13:59:11.000Z",
                            "updated_at": "2023-05-02T10:58:16.000Z",
                            "role": {
                              "role_id": 1,
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "is_deleted": false,
                          "created_at": "2023-10-18T14:34:32.987Z",
                          "updated_at": "2023-10-18T14:34:33.132Z",
                          "work_order_number": 13573
                        },
                        {
                          "job_uid": "6587ddb0-6dc2-11ee-9637-5d3ccadf022e",
                          "customer": {
                            "customer_uid": "a2604550-1cc4-11ee-bd31-09c5f89082fa",
                            "customer_first_name": "Kara",
                            "customer_last_name": "CJ",
                            "customer_organization": {
                              "organization_uid": "90ee6dd0-6cd6-11ee-ad52-fb5442a7fc06",
                              "organization_name": "zuperTestOrg2",
                              "organization_description": "If you're a Slack mobile user, then you are familiar with the productivity power that Slack can give you while on the go. Learn more about what it takes to build Slack's mobile experience.",
                              "organization_email": "zuper@gmail.com",
                              "organization_address": {
                                "city": "Chennai",
                                "state": "TN",
                                "street": "No 55",
                                "zip_code": "600040"
                              },
                              "is_active": true,
                              "is_deleted": false
                            },
                            "customer_company_name": "",
                            "customer_email": "kara@gmail.com",
                            "customer_contact_no": {
                              "mobile": "3333333333",
                              "home": "2222222222",
                              "work": "5555555555"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "organization": {
                            "organization_uid": "aa045a80-e3f8-11ed-909a-c5fae856db4e",
                            "organization_name": "zuperTestOrg1",
                            "organization_logo": null,
                            "organization_description": null,
                            "organization_email": "zupertestorg1@mail.com",
                            "organization_address": {
                              "city": "Chennai ",
                              "state": "Tamil Nadu ",
                              "street": "Chennai ",
                              "country": "India",
                              "landmark": "",
                              "geo_cordinates": [
                                13.0826802,
                                80.2707184
                              ]
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "delayed_job": false,
                          "assigned_to_team": [],
                          "assigned_to": [
                            {
                              "user": {
                                "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                                "first_name": "Raghav",
                                "last_name": "G",
                                "email": "raghav@zuper.co",
                                "external_login_id": null,
                                "home_phone_number": "7397722822",
                                "designation": "CTO",
                                "emp_code": "1234",
                                "prefix": null,
                                "work_phone_number": "7397722822",
                                "mobile_phone_number": null,
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                                "hourly_labor_charge": 500,
                                "is_active": true,
                                "is_deleted": false,
                                "created_at": "2018-01-22T13:59:11.000Z",
                                "updated_at": "2023-05-02T10:58:16.000Z",
                                "role": {
                                  "role_id": 1,
                                  "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                                  "role_name": "Admin",
                                  "role_key": "ADMIN",
                                  "created_at": "2018-01-22T00:00:00.000Z",
                                  "updated_at": "2018-01-22T00:00:00.000Z"
                                }
                              },
                              "team": {
                                "team_uid": "335c25ef-c54a-43d3-9c88-7c62921e4da4",
                                "team_name": "Maintanence",
                                "team_color": "#1abc9c",
                                "is_active": true,
                                "is_deleted": false
                              }
                            }
                          ],
                          "job_title": "Visit for Kara CJ",
                          "job_category": {
                            "category_name": "Category - 9010",
                            "category_uid": "5c904c80-b753-11e9-8afe-e53ff9105097",
                            "category_color": "#e74c3c",
                            "estimated_duration": {
                              "hours": 8,
                              "minutes": 1
                            }
                          },
                          "job_priority": "LOW",
                          "job_type": "NEW",
                          "job_tags": [],
                          "due_date": "2023-10-18T00:00:00.000Z",
                          "current_job_status": {
                            "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                            "status_name": "New Request",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "job_status": [
                            {
                              "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                              "status_name": "New Request",
                              "status_type": "NEW",
                              "status_color": "#02B875",
                              "is_offline": false,
                              "checklist": [],
                              "created_at": "2023-10-18T14:26:59.308Z",
                              "synced_at": "2023-10-18T14:26:59.308Z"
                            }
                          ],
                          "customer_address": {
                            "landmark": "",
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "600028, Srinivasa Avenue Road, RA Puram, Bishop Garden, Raja Annamalai Puram",
                            "country": "India",
                            "zip_code": "600028",
                            "geo_cordinates": [
                              13.0195982,
                              80.2598575
                            ]
                          },
                          "customer_billing_address": {
                            "landmark": "",
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "600028, Srinivasa Avenue Road, RA Puram, Bishop Garden, Raja Annamalai Puram",
                            "country": "India",
                            "zip_code": "600028",
                            "geo_cordinates": [
                              13.0195982,
                              80.2598575
                            ]
                          },
                          "custom_fields": [
                            {
                              "label": "Job Feedback",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0a"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0b"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0c"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0d"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0e"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e0f"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e10"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "",
                              "group_uid": "",
                              "_id": "6527eb5efb4246294e724e11"
                            }
                          ],
                          "products": [],
                          "is_recurrence": false,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                            "first_name": "Raghav",
                            "last_name": "G",
                            "email": "raghav@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": "7397722822",
                            "designation": "CTO",
                            "emp_code": "1234",
                            "prefix": null,
                            "work_phone_number": "7397722822",
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                            "hourly_labor_charge": 500,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2018-01-22T13:59:11.000Z",
                            "updated_at": "2023-05-02T10:58:16.000Z",
                            "role": {
                              "role_id": 1,
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "is_deleted": false,
                          "created_at": "2023-10-18T14:26:59.312Z",
                          "updated_at": "2023-10-18T14:26:59.406Z",
                          "work_order_number": 13572
                        },
                        {
                          "job_uid": "c5b00430-6db1-11ee-a149-2f36867785ab",
                          "customer": {
                            "customer_uid": "92453f40-c274-11ed-aeae-b171c99b6f59",
                            "customer_first_name": "jai",
                            "customer_last_name": "",
                            "customer_organization": {
                              "organization_uid": "ec85ff50-6849-11ee-af3a-a79966abe7f6",
                              "organization_name": "Vishranthi",
                              "organization_logo": null,
                              "organization_description": null,
                              "organization_email": "sundar@sundar.com",
                              "organization_address": {
                                "city": "San Francisco",
                                "state": "California",
                                "street": "1800 Ellis Street",
                                "landmark": "",
                                "zip_code": "94115",
                                "geo_cordinates": [
                                  37.78583393502708,
                                  -122.40641713142396
                                ],
                                "first_name": "",
                                "last_name": "",
                                "phone_number": "",
                                "email": ""
                              },
                              "is_active": true,
                              "is_deleted": false
                            },
                            "customer_company_name": "",
                            "customer_email": "jaikrishna@zuper.co",
                            "is_active": true,
                            "is_deleted": false,
                            "customer_contact_no": {
                              "mobile": "",
                              "home": "",
                              "work": ""
                            }
                          },
                          "organization": {
                            "organization_uid": "ec85ff50-6849-11ee-af3a-a79966abe7f6",
                            "organization_name": "Vishranthi",
                            "organization_logo": null,
                            "organization_description": null,
                            "organization_email": "sundar@sundar.com",
                            "organization_address": {
                              "city": "San Francisco",
                              "state": "California",
                              "street": "1800 Ellis Street",
                              "landmark": "",
                              "zip_code": "94115",
                              "geo_cordinates": [
                                37.78583393502708,
                                -122.40641713142396
                              ],
                              "first_name": "",
                              "last_name": "",
                              "phone_number": "",
                              "email": ""
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "prefix": "Q3_0001",
                          "delayed_job": false,
                          "assigned_to_team": [],
                          "assigned_to": [],
                          "job_title": "Job invoice",
                          "job_category": {
                            "category_name": "Category - 9010",
                            "category_uid": "5c904c80-b753-11e9-8afe-e53ff9105097",
                            "category_color": "#e74c3c",
                            "estimated_duration": {
                              "hours": 8,
                              "minutes": 1
                            }
                          },
                          "job_priority": "LOW",
                          "job_type": "NEW",
                          "job_tags": [],
                          "due_date": "2027-01-30T18:29:00.000Z",
                          "current_job_status": {
                            "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                            "status_name": "New Request",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "job_status": [
                            {
                              "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                              "status_name": "New Request",
                              "status_type": "NEW",
                              "status_color": "#02B875",
                              "is_offline": false,
                              "checklist": [],
                              "created_at": "2023-10-18T12:27:59.212Z",
                              "synced_at": "2023-10-18T12:27:59.212Z"
                            }
                          ],
                          "customer_address": {
                            "landmark": "asdasda",
                            "city": "asdasdas",
                            "state": "asdasdasd",
                            "street": "asdasdasdasdasdasdas",
                            "country": "",
                            "zip_code": "asdasd",
                            "first_name": "jai",
                            "last_name": "",
                            "phone_number": "",
                            "email": "jaikrishna@zuper.co"
                          },
                          "customer_billing_address": {
                            "landmark": "asdasda",
                            "city": "asdasdas",
                            "state": "asdasdasd",
                            "street": "asdasdasdasdasdasdas",
                            "country": "",
                            "zip_code": "asdasd",
                            "first_name": "jai",
                            "last_name": "",
                            "phone_number": "",
                            "email": "jaikrishna@zuper.co"
                          },
                          "custom_fields": [
                            {
                              "label": "Job Feedback",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fcf4fae7a5f65b93818fe"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fcf4fae7a5f65b93818ff"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fcf4fae7a5f65b9381900"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fcf4fae7a5f65b9381901"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fcf4fae7a5f65b9381902"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fcf4fae7a5f65b9381903"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fcf4fae7a5f65b9381904"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fcf4fae7a5f65b9381905"
                            }
                          ],
                          "products": [
                            {
                              "product_id": "122454-FDFJ",
                              "product_uid": "c6de1ae0-9800-11ed-8a66-e531e7c86e1f",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_name": "1/2\" ODX 50' Yellow Gas Line Ava",
                              "brand": "",
                              "specification": "",
                              "uom": "",
                              "quantity": 1,
                              "price": 10,
                              "meta_data": [],
                              "serial_nos": [],
                              "location_uid": "955447b0-85ee-11e9-834a-b9e1f8f2de14",
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 10
                            }
                          ],
                          "is_recurrence": false,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                            "first_name": "Raghav",
                            "last_name": "G",
                            "email": "raghav@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": "7397722822",
                            "designation": "CTO",
                            "emp_code": "1234",
                            "prefix": null,
                            "work_phone_number": "7397722822",
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                            "hourly_labor_charge": 500,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2018-01-22T13:59:11.000Z",
                            "updated_at": "2023-05-02T10:58:16.000Z",
                            "role": {
                              "role_id": 1,
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "is_deleted": false,
                          "created_at": "2023-10-18T12:27:59.216Z",
                          "updated_at": "2023-10-18T12:27:59.318Z",
                          "work_order_number": 13571
                        },
                        {
                          "job_uid": "67ae9e00-6db1-11ee-a149-2f36867785ab",
                          "customer": {
                            "customer_uid": "a2604550-1cc4-11ee-bd31-09c5f89082fa",
                            "customer_first_name": "Kara",
                            "customer_last_name": "CJ",
                            "customer_organization": {
                              "organization_uid": "90ee6dd0-6cd6-11ee-ad52-fb5442a7fc06",
                              "organization_name": "zuperTestOrg2",
                              "organization_description": "If you're a Slack mobile user, then you are familiar with the productivity power that Slack can give you while on the go. Learn more about what it takes to build Slack's mobile experience.",
                              "organization_email": "zuper@gmail.com",
                              "organization_address": {
                                "city": "Chennai",
                                "state": "TN",
                                "street": "No 55",
                                "zip_code": "600040"
                              },
                              "is_active": true,
                              "is_deleted": false
                            },
                            "customer_company_name": "",
                            "customer_email": "kara@gmail.com",
                            "customer_contact_no": {
                              "mobile": "3333333333",
                              "home": "2222222222",
                              "work": "5555555555"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "organization": {
                            "organization_uid": "90ee6dd0-6cd6-11ee-ad52-fb5442a7fc06",
                            "organization_name": "zuperTestOrg2",
                            "organization_description": "If you're a Slack mobile user, then you are familiar with the productivity power that Slack can give you while on the go. Learn more about what it takes to build Slack's mobile experience.",
                            "organization_email": "zuper@gmail.com",
                            "organization_address": {
                              "city": "Chennai",
                              "state": "TN",
                              "street": "No 55",
                              "zip_code": "600040"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "prefix": "Q3_0001",
                          "delayed_job": false,
                          "assigned_to_team": [],
                          "assigned_to": [],
                          "job_title": "From Invoice",
                          "job_category": {
                            "category_name": "Category - 9010",
                            "category_uid": "5c904c80-b753-11e9-8afe-e53ff9105097",
                            "category_color": "#e74c3c",
                            "estimated_duration": {
                              "hours": 8,
                              "minutes": 1
                            }
                          },
                          "job_priority": "LOW",
                          "job_type": "NEW",
                          "job_tags": [],
                          "due_date": "2023-10-20T18:29:00.000Z",
                          "current_job_status": {
                            "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                            "status_name": "New Request",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "job_status": [
                            {
                              "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                              "status_name": "New Request",
                              "status_type": "NEW",
                              "status_color": "#02B875",
                              "is_offline": false,
                              "checklist": [],
                              "created_at": "2023-10-18T12:25:21.421Z",
                              "synced_at": "2023-10-18T12:25:21.421Z"
                            }
                          ],
                          "customer_address": {
                            "city": "Chennai ",
                            "state": "TN",
                            "street": "Chennai ",
                            "zip_code": "600041",
                            "first_name": "Kara",
                            "last_name": "CJ",
                            "phone_number": "3333333333",
                            "email": "kara@gmail.com"
                          },
                          "customer_billing_address": {
                            "landmark": "Near Lottie",
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Chennai, India",
                            "country": "India",
                            "zip_code": "600028",
                            "geo_cordinates": [
                              13.0223022,
                              80.25913709999999
                            ],
                            "first_name": "Elmira",
                            "last_name": "Conroy",
                            "phone_number": "1231231231",
                            "email": "kara@gmail.com"
                          },
                          "custom_fields": [
                            {
                              "label": "Job Feedback",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fceb1ae7a5f65b9381431"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fceb1ae7a5f65b9381432"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fceb1ae7a5f65b9381433"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fceb1ae7a5f65b9381434"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fceb1ae7a5f65b9381435"
                            },
                            {
                              "label": "Date Input",
                              "value": "2023-07-07",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fceb1ae7a5f65b9381436"
                            },
                            {
                              "label": "File Input",
                              "value": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/64fd6580-1cc4-11ee-bd31-09c5f89082fa.jpg",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fceb1ae7a5f65b9381437"
                            },
                            {
                              "label": "Time Input",
                              "value": "17:50:00",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652fceb1ae7a5f65b9381438"
                            }
                          ],
                          "products": [],
                          "is_recurrence": false,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                            "first_name": "Raghav",
                            "last_name": "G",
                            "email": "raghav@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": "7397722822",
                            "designation": "CTO",
                            "emp_code": "1234",
                            "prefix": null,
                            "work_phone_number": "7397722822",
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                            "hourly_labor_charge": 500,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2018-01-22T13:59:11.000Z",
                            "updated_at": "2023-05-02T10:58:16.000Z",
                            "role": {
                              "role_id": 1,
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "is_deleted": false,
                          "created_at": "2023-10-18T12:25:21.425Z",
                          "updated_at": "2023-10-18T12:25:21.565Z",
                          "work_order_number": 13570
                        },
                        {
                          "job_uid": "7d05a7c0-6da8-11ee-ad52-fb5442a7fc06",
                          "customer": {
                            "customer_uid": "db7f7fa0-2b78-11ee-b3bd-3514316d1f7f",
                            "customer_first_name": "1 Arlene - 1 Klusman",
                            "customer_last_name": "iOS ",
                            "customer_company_name": "",
                            "customer_email": "kulasekaran.zuper@gmail.com1",
                            "customer_contact_no": {
                              "mobile": "",
                              "home": "200",
                              "work": ""
                            },
                            "is_active": true,
                            "is_deleted": false,
                            "customer_organization": {
                              "organization_uid": "9daa6410-6994-11ee-a8d5-f53a2c9a4252",
                              "organization_name": "ABCD",
                              "organization_logo": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0fc123e0-699a-11ee-b929-8765ea4ce81b.jpeg",
                              "organization_description": "Test",
                              "organization_email": "abcd@gmail.com",
                              "organization_address": {
                                "city": "Salem",
                                "state": "Tamil Nadu",
                                "street": "Seelanaickenpatti",
                                "country": "",
                                "landmark": "",
                                "zip_code": "636201",
                                "geo_cordinates": [
                                  11.6209373658852,
                                  78.14379293471575
                                ],
                                "first_name": "",
                                "last_name": "",
                                "phone_number": "",
                                "email": ""
                              },
                              "is_active": true,
                              "is_deleted": false
                            }
                          },
                          "organization": {
                            "organization_uid": "9daa6410-6994-11ee-a8d5-f53a2c9a4252",
                            "organization_name": "ABCD",
                            "organization_logo": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0fc123e0-699a-11ee-b929-8765ea4ce81b.jpeg",
                            "organization_description": "Test",
                            "organization_email": "abcd@gmail.com",
                            "organization_address": {
                              "city": "Salem",
                              "state": "Tamil Nadu",
                              "street": "Seelanaickenpatti",
                              "country": "",
                              "landmark": "",
                              "zip_code": "636201",
                              "geo_cordinates": [
                                11.6209373658852,
                                78.14379293471575
                              ],
                              "first_name": "",
                              "last_name": "",
                              "phone_number": "",
                              "email": ""
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "delayed_job": false,
                          "assigned_to_team": [
                            {
                              "team": {
                                "team_uid": "71eee401-bde6-4072-b6cd-255cfe6fe6ee",
                                "team_name": "Scheduler Testing",
                                "team_color": "#000000",
                                "is_active": true,
                                "is_deleted": false
                              }
                            }
                          ],
                          "assigned_to": [
                            {
                              "user": {
                                "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                                "first_name": "Raghav",
                                "last_name": "G",
                                "email": "raghav@zuper.co",
                                "external_login_id": null,
                                "home_phone_number": "7397722822",
                                "designation": "CTO",
                                "emp_code": "1234",
                                "prefix": null,
                                "work_phone_number": "7397722822",
                                "mobile_phone_number": null,
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg",
                                "hourly_labor_charge": 500,
                                "is_active": true,
                                "is_deleted": false,
                                "created_at": "2018-01-22T13:59:11.000Z",
                                "updated_at": "2023-05-02T10:58:16.000Z",
                                "role": {
                                  "role_id": 1,
                                  "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                                  "role_name": "Admin",
                                  "role_key": "ADMIN",
                                  "created_at": "2018-01-22T00:00:00.000Z",
                                  "updated_at": "2018-01-22T00:00:00.000Z"
                                }
                              },
                              "team": {
                                "team_uid": "9f620406-0a8c-430b-858d-ced59cef93a7",
                                "team_name": "Sales Team",
                                "team_color": "#4960a0",
                                "is_active": true,
                                "is_deleted": false
                              }
                            },
                            {
                              "user": {
                                "user_uid": "b4c68cd5-30a8-4966-a6e9-70e77ef541d3",
                                "first_name": "Sesha",
                                "last_name": "FE",
                                "email": "p2sesha@gmail.com",
                                "external_login_id": "zupe",
                                "home_phone_number": null,
                                "designation": "Tech",
                                "emp_code": "1234",
                                "prefix": null,
                                "work_phone_number": null,
                                "mobile_phone_number": null,
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg",
                                "hourly_labor_charge": null,
                                "is_active": true,
                                "is_deleted": false,
                                "created_at": "2022-12-06T12:43:53.000Z",
                                "updated_at": "2023-09-24T06:49:23.000Z",
                                "role": {
                                  "role_id": 3,
                                  "role_uid": "504e52bc-ff7d-11e7-8be5-0ed5f89f718b",
                                  "role_name": "Field Executive",
                                  "role_key": "FIELD_EXECUTIVE",
                                  "created_at": "2018-01-22T00:00:00.000Z",
                                  "updated_at": "2018-01-22T00:00:00.000Z"
                                }
                              },
                              "team": {
                                "team_uid": "71eee401-bde6-4072-b6cd-255cfe6fe6ee",
                                "team_name": "Scheduler Testing",
                                "team_color": "#000000",
                                "is_active": true,
                                "is_deleted": false
                              },
                              "is_accepted": false
                            }
                          ],
                          "job_title": "DispatchRoute",
                          "job_category": {
                            "category_name": "Category - 9010",
                            "category_uid": "5c904c80-b753-11e9-8afe-e53ff9105097",
                            "category_color": "#e74c3c",
                            "estimated_duration": {
                              "hours": 8,
                              "minutes": 1
                            }
                          },
                          "job_priority": "LOW",
                          "job_type": "NEW",
                          "job_tags": [],
                          "due_date": "2023-10-18T18:29:59.000Z",
                          "current_job_status": {
                            "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                            "status_name": "New Request",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "job_status": [
                            {
                              "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                              "status_name": "New Request",
                              "status_type": "NEW",
                              "status_color": "#02B875",
                              "is_offline": false,
                              "checklist": [],
                              "created_at": "2023-10-18T11:21:31.697Z",
                              "synced_at": "2023-10-18T11:21:31.697Z"
                            }
                          ],
                          "customer_address": {
                            "landmark": "",
                            "city": "Cupertino",
                            "state": "California",
                            "street": "Infinite Loop",
                            "country": "",
                            "zip_code": "95014",
                            "geo_cordinates": [
                              37.33233139577873,
                              -122.03121867030859
                            ],
                            "first_name": "",
                            "last_name": "",
                            "phone_number": "",
                            "email": ""
                          },
                          "customer_billing_address": {
                            "landmark": "",
                            "city": "Salem",
                            "state": "Tamil Nadu",
                            "street": "Seelanaickenpatti",
                            "country": "",
                            "zip_code": "636201",
                            "geo_cordinates": [
                              11.6209373658852,
                              78.14379293471575
                            ],
                            "first_name": "",
                            "last_name": "",
                            "phone_number": "",
                            "email": ""
                          },
                          "custom_fields": [],
                          "is_recurrence": false,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "db0b0c00-ee5b-466b-b348-f953e4723dd3",
                            "first_name": "Vigneshwaran",
                            "last_name": "V",
                            "email": "vigneshwaran.v@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": null,
                            "designation": "Tech",
                            "emp_code": "001",
                            "prefix": null,
                            "work_phone_number": null,
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg",
                            "hourly_labor_charge": null,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2023-05-03T06:10:14.000Z",
                            "updated_at": "2023-06-20T08:59:39.000Z",
                            "role": {
                              "role_id": 1,
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "is_deleted": false,
                          "products": [],
                          "created_at": "2023-10-18T11:21:31.699Z",
                          "updated_at": "2023-10-18T12:59:37.344Z",
                          "work_order_number": 13569,
                          "scheduled_duration": 121,
                          "scheduled_end_time": "2023-10-04T11:01:00.000Z",
                          "scheduled_start_time": "2023-10-04T09:00:00.000Z",
                          "route": null
                        },
                        {
                          "job_uid": "269c60e0-6da8-11ee-ad52-fb5442a7fc06",
                          "customer": {
                            "customer_first_name": "Charles",
                            "customer_last_name": "",
                            "customer_uid": "006acb10-7537-11e8-9980-7b1cf143cfae",
                            "is_deleted": false,
                            "is_active": true,
                            "customer_company_name": "zuper",
                            "customer_contact_no": {
                              "mobile": "1234567890",
                              "home": "1234567890",
                              "work": "1234567890"
                            },
                            "customer_email": "Charles@Zuper.co",
                            "customer_organization": {
                              "organization_uid": "03853bc0-0ea5-11ee-9f8e-0f93d9851045",
                              "organization_name": "0 3RD ST E, ST PAUL MN 55119 (PIN: 352922240167)",
                              "is_active": false,
                              "is_deleted": true
                            }
                          },
                          "prefix": "2022 -",
                          "delayed_job": false,
                          "assigned_to_team": [
                            {
                              "team": {
                                "team_uid": "94d84b0f-ca91-40b6-b8b6-69c811476de9",
                                "team_name": "Installation Team",
                                "team_color": "#27ae60",
                                "is_active": true,
                                "is_deleted": false
                              }
                            }
                          ],
                          "assigned_to": [
                            {
                              "user": {
                                "user_uid": "ecd961cb-7cee-4b2d-a837-213ca8b00b5a",
                                "first_name": "Guru",
                                "last_name": "Prasath",
                                "email": "gprasath630@gmail.com",
                                "external_login_id": null,
                                "home_phone_number": "8248958724",
                                "designation": "Admin",
                                "emp_code": "271120",
                                "prefix": null,
                                "work_phone_number": "8248958724",
                                "mobile_phone_number": "8248958724",
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/93d0b320-ac2c-11ed-a42c-1daa0c6a528f.jpg",
                                "hourly_labor_charge": 20,
                                "is_active": true,
                                "is_deleted": false,
                                "created_at": "2020-11-27T10:32:45.000Z",
                                "updated_at": "2023-07-10T05:18:22.000Z",
                                "role": {
                                  "role_id": 1,
                                  "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                                  "role_name": "Admin",
                                  "role_key": "ADMIN",
                                  "created_at": "2018-01-22T00:00:00.000Z",
                                  "updated_at": "2018-01-22T00:00:00.000Z"
                                }
                              },
                              "team": {
                                "team_uid": "94d84b0f-ca91-40b6-b8b6-69c811476de9",
                                "team_name": "Installation Team",
                                "team_color": "#27ae60",
                                "is_active": true,
                                "is_deleted": false
                              },
                              "is_accepted": false
                            }
                          ],
                          "job_title": "Route Job",
                          "work_order_number": 13568,
                          "job_category": {
                            "category_name": "Home Cleaning",
                            "category_uid": "3fee25f0-74a1-11ea-8ca5-df1d176880cb",
                            "estimated_duration": {
                              "hours": 1,
                              "minutes": 5
                            },
                            "category_color": "#2e06f4"
                          },
                          "job_priority": "URGENT",
                          "job_type": "NEW",
                          "job_tags": [],
                          "scheduled_start_time": "2023-10-18T05:30:00.000Z",
                          "scheduled_end_time": "2023-10-18T11:30:00.000Z",
                          "scheduled_duration": 360,
                          "current_job_status": {
                            "status_uid": "cc47f5b9-862f-400a-a13f-40c63ca65e2b",
                            "status_name": "New",
                            "status_type": "NEW",
                            "status_color": "#02B875"
                          },
                          "job_status": [
                            {
                              "status_uid": "cc47f5b9-862f-400a-a13f-40c63ca65e2b",
                              "status_name": "New",
                              "status_type": "NEW",
                              "status_color": "#02B875",
                              "checklist": [],
                              "created_at": "2023-10-18T11:19:06.478Z",
                              "synced_at": "2023-10-10T09:55:52.974Z",
                              "is_offline": false
                            }
                          ],
                          "customer_address": {
                            "landmark": "",
                            "city": "Chennai ",
                            "state": "Tamil Nadu ",
                            "street": "SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar",
                            "country": "",
                            "zip_code": "600017",
                            "geo_cordinates": [
                              13.0242729,
                              80.20992969999999
                            ],
                            "first_name": "Charles",
                            "last_name": "Customer",
                            "phone_number": "",
                            "email": "Charles@Zuper.co"
                          },
                          "customer_billing_address": {
                            "landmark": "",
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "22E ,Thiru Vi Ka Industrial Estate ,Saidapet",
                            "country": "",
                            "zip_code": "600032",
                            "geo_cordinates": [
                              0,
                              0
                            ],
                            "first_name": "Charles",
                            "last_name": "Customer",
                            "phone_number": "",
                            "email": "Charles@Zuper.co"
                          },
                          "custom_fields": [
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65251fa8ec2795a2ec5c6848"
                            },
                            {
                              "label": "Text Area",
                              "value": "test text area",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65251fa8ec2795a2ec5c6849"
                            },
                            {
                              "label": "scheduled date",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "AC",
                              "group_uid": "5c75ffd0-1ca6-11ee-80f8-cf09c2187910",
                              "_id": "65251fa8ec2795a2ec5c684a"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65251fa8ec2795a2ec5c684b"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65251fa8ec2795a2ec5c684c"
                            },
                            {
                              "label": "Text Input",
                              "value": "test text area",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65251fa8ec2795a2ec5c684d"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65251fa8ec2795a2ec5c684e"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65251fa8ec2795a2ec5c684f"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65251fa8ec2795a2ec5c6850"
                            },
                            {
                              "label": "Radio",
                              "value": "On ",
                              "type": "RADIO",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65251fa8ec2795a2ec5c6851"
                            },
                            {
                              "label": "Job Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "JOB",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "65251fa8ec2795a2ec5c6852"
                            },
                            {
                              "label": "Product Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "65251fa8ec2795a2ec5c6853"
                            },
                            {
                              "label": "Estimate Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "ESTIMATE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "65251fa8ec2795a2ec5c6854"
                            },
                            {
                              "label": "Invoice Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "INVOICE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "65251fa8ec2795a2ec5c6855"
                            },
                            {
                              "label": "Customer Lookup",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "CUSTOMER",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "iOS Look Up",
                              "group_uid": "8bfde710-48b4-11ee-be48-2d4d15977c73",
                              "_id": "65251fa8ec2795a2ec5c6856"
                            }
                          ],
                          "products": [
                            {
                              "product_id": "T002",
                              "product_uid": "946e7fa0-89e0-11e9-954f-f37a15d07ea5",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_name": "Testing Product",
                              "uom": "",
                              "quantity": 1,
                              "price": 153,
                              "product_type": "PRODUCT",
                              "meta_data": [],
                              "serial_nos": [],
                              "location_uid": "955447b0-85ee-11e9-834a-b9e1f8f2de14",
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 154.53,
                              "tax": {
                                "tax_name": "Test custom tax",
                                "tax_rate": 1,
                                "tax_amount": 1.53
                              }
                            },
                            {
                              "product_id": "1123e454443e",
                              "product_uid": "77df82d0-8e1b-11eb-a637-b797863ae93c",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_name": "1123w45",
                              "product_description": "this is the product desc",
                              "uom": "",
                              "quantity": 1,
                              "price": 235,
                              "product_type": "PRODUCT",
                              "meta_data": [],
                              "serial_nos": [],
                              "location_uid": "10964f30-ae9f-11e9-ad42-b5f50cbfc791",
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 235
                            },
                            {
                              "product_id": "N001",
                              "product_uid": "7841e220-b28c-11e9-a80f-1f1436ab2f70",
                              "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                              "product_name": "Product to test transac",
                              "uom": "",
                              "quantity": 3,
                              "price": 100,
                              "product_type": "SERVICE",
                              "meta_data": [],
                              "serial_nos": [],
                              "discount": 0,
                              "discount_type": "FIXED",
                              "total": 315,
                              "tax": {
                                "tax_name": "test",
                                "tax_rate": 5,
                                "tax_amount": 15
                              }
                            }
                          ],
                          "route": {
                            "route_uid": "268f8fa0-6da8-11ee-ad52-fb5442a7fc06",
                            "route_name": "Cloned route",
                            "total_jobs": 2,
                            "total_distance": 49225,
                            "total_time": 5326,
                            "duration": 2,
                            "departure": "2023-10-18T14:30:00.000Z",
                            "route_end_time": "2023-10-18T16:30:00.000Z",
                            "route_type": "FASTEST",
                            "transport_mode": "CAR",
                            "enable_traffic": false,
                            "is_optimized": false,
                            "color": "#e74c3c",
                            "start_location": {
                              "name": "Chennai",
                              "street": "Perambur",
                              "geo_cords": [
                                13.1210302,
                                80.2325781
                              ]
                            },
                            "end_location": {
                              "name": "Chennai",
                              "street": "Annanagar East",
                              "geo_cords": [
                                13.0920485,
                                80.2236102
                              ],
                              "distance": 0,
                              "time": 0
                            },
                            "jobs": [
                              {
                                "job_uid": "269c60e0-6da8-11ee-ad52-fb5442a7fc06",
                                "geo_cords": [
                                  13.0242729,
                                  80.20992969999999
                                ],
                                "sequence": 1,
                                "distance": 17628,
                                "time": 2025
                              },
                              {
                                "job_uid": "269a16f0-6da8-11ee-ad52-fb5442a7fc06",
                                "geo_cords": [
                                  12.9733389,
                                  80.2508572
                                ],
                                "sequence": 2,
                                "distance": 11438,
                                "time": 1147
                              }
                            ],
                            "assigned_to": [
                              {
                                "user_id": 3287,
                                "team_id": 14,
                                "_id": "652f6e01faee18084d500ec4"
                              }
                            ],
                            "is_locked": false,
                            "is_deleted": false,
                            "__v": 0,
                            "created_at": "2023-10-18T11:19:06.398Z",
                            "updated_at": "2023-10-18T11:19:06.399Z"
                          },
                          "is_recurrence": true,
                          "invoice": {
                            "is_invoiced": false
                          },
                          "created_by": {
                            "user_uid": "067adc50-ae00-4f3a-b671-25e66acb8672",
                            "first_name": "Vignesh",
                            "last_name": "B",
                            "email": "vignesh.b@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": "8778423650",
                            "designation": "Admin",
                            "emp_code": "0007",
                            "prefix": null,
                            "work_phone_number": "8778423650",
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/fdb199e0-09f0-11ee-81f7-6ba359f4e207.png",
                            "hourly_labor_charge": 120,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2022-01-25T07:18:48.000Z",
                            "updated_at": "2023-06-13T13:48:37.000Z",
                            "role": {
                              "role_id": 1,
                              "role_uid": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b",
                              "role_name": "Admin",
                              "role_key": "ADMIN",
                              "created_at": "2018-01-22T00:00:00.000Z",
                              "updated_at": "2018-01-22T00:00:00.000Z"
                            }
                          },
                          "is_deleted": false,
                          "created_at": "2023-10-18T11:19:06.478Z",
                          "updated_at": "2023-10-18T11:19:06.493Z"
                        }
                      ],
                      "total_records": 11503,
                      "current_page": 1,
                      "total_pages": 1151
                    }
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
                          "job_uid": {
                            "type": "string",
                            "example": "698d5560-6e3b-11ee-9637-5d3ccadf022e"
                          },
                          "customer": {},
                          "organization": {
                            "type": "object",
                            "properties": {
                              "organization_uid": {
                                "type": "string",
                                "example": "ca32ebd0-9c8d-11ed-9f13-9789cec5f4f1"
                              },
                              "organization_name": {
                                "type": "string",
                                "example": "2503nithintest"
                              },
                              "organization_logo": {},
                              "organization_description": {},
                              "organization_email": {
                                "type": "string",
                                "example": "2503nithin@mail.com"
                              },
                              "organization_address": {
                                "type": "object",
                                "properties": {
                                  "city": {
                                    "type": "string",
                                    "example": "Chennai "
                                  },
                                  "state": {
                                    "type": "string",
                                    "example": "Tamil Nadu "
                                  },
                                  "street": {
                                    "type": "string",
                                    "example": "Chennai "
                                  },
                                  "country": {
                                    "type": "string",
                                    "example": "India"
                                  },
                                  "landmark": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "geo_cordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "number",
                                      "example": 13.0834622272901,
                                      "default": 0
                                    }
                                  }
                                }
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
                          },
                          "prefix": {
                            "type": "string",
                            "example": "Q3_0001"
                          },
                          "delayed_job": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "assigned_to_team": {
                            "type": "array"
                          },
                          "assigned_to": {
                            "type": "array"
                          },
                          "job_title": {
                            "type": "string",
                            "example": "test job"
                          },
                          "job_category": {
                            "type": "object",
                            "properties": {
                              "estimated_duration": {
                                "type": "object",
                                "properties": {
                                  "hours": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "minutes": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "days": {
                                    "type": "integer",
                                    "example": 2,
                                    "default": 0
                                  }
                                }
                              },
                              "category_color": {
                                "type": "string",
                                "example": "#000"
                              },
                              "category_name": {
                                "type": "string",
                                "example": "Recurring"
                              },
                              "category_uid": {
                                "type": "string",
                                "example": "24b49530-37dc-11ec-9f98-2573cda9e3a6"
                              }
                            }
                          },
                          "job_priority": {
                            "type": "string",
                            "example": "LOW"
                          },
                          "job_type": {
                            "type": "string",
                            "example": "NEW"
                          },
                          "job_tags": {
                            "type": "array"
                          },
                          "due_date": {
                            "type": "string",
                            "example": "2023-10-19T18:29:00.000Z"
                          },
                          "current_job_status": {
                            "type": "object",
                            "properties": {
                              "status_uid": {
                                "type": "string",
                                "example": "f2fff4a7-1e27-406d-b091-5641ef59841b"
                              },
                              "status_name": {
                                "type": "string",
                                "example": "test"
                              },
                              "status_type": {
                                "type": "string",
                                "example": "NEW"
                              },
                              "status_color": {
                                "type": "string",
                                "example": "#02B875"
                              }
                            }
                          },
                          "job_status": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "status_uid": {
                                  "type": "string",
                                  "example": "f2fff4a7-1e27-406d-b091-5641ef59841b"
                                },
                                "status_name": {
                                  "type": "string",
                                  "example": "test"
                                },
                                "status_type": {
                                  "type": "string",
                                  "example": "NEW"
                                },
                                "status_color": {
                                  "type": "string",
                                  "example": "#02B875"
                                },
                                "is_offline": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "checklist": {
                                  "type": "array"
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2023-10-19T04:53:14.991Z"
                                },
                                "synced_at": {
                                  "type": "string",
                                  "example": "2023-10-19T04:53:14.991Z"
                                }
                              }
                            }
                          },
                          "customer_address": {
                            "type": "object",
                            "properties": {
                              "landmark": {
                                "type": "string",
                                "example": ""
                              },
                              "city": {
                                "type": "string",
                                "example": "Chennai "
                              },
                              "state": {
                                "type": "string",
                                "example": "Tamil Nadu "
                              },
                              "street": {
                                "type": "string",
                                "example": "Chennai "
                              },
                              "country": {
                                "type": "string",
                                "example": "India"
                              },
                              "geo_cordinates": {
                                "type": "array",
                                "items": {
                                  "type": "number",
                                  "example": 13.0834622272901,
                                  "default": 0
                                }
                              },
                              "first_name": {
                                "type": "string",
                                "example": "2503nithintest"
                              },
                              "email": {
                                "type": "string",
                                "example": "2503nithin@mail.com"
                              }
                            }
                          },
                          "customer_billing_address": {
                            "type": "object",
                            "properties": {
                              "landmark": {
                                "type": "string",
                                "example": ""
                              },
                              "city": {
                                "type": "string",
                                "example": "Chennai "
                              },
                              "state": {
                                "type": "string",
                                "example": "Tamil Nadu "
                              },
                              "street": {
                                "type": "string",
                                "example": "Chennai "
                              },
                              "country": {
                                "type": "string",
                                "example": "India"
                              },
                              "geo_cordinates": {
                                "type": "array",
                                "items": {
                                  "type": "number",
                                  "example": 13.0834622272901,
                                  "default": 0
                                }
                              },
                              "first_name": {
                                "type": "string",
                                "example": "2503nithintest"
                              },
                              "email": {
                                "type": "string",
                                "example": "2503nithin@mail.com"
                              }
                            }
                          },
                          "custom_fields": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "example": "Job Feedback"
                                },
                                "value": {
                                  "type": "string",
                                  "example": ""
                                },
                                "type": {
                                  "type": "string",
                                  "example": "SINGLE_LINE"
                                },
                                "hide_to_fe": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "hide_field": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "read_only": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "_id": {
                                  "type": "string",
                                  "example": "6530b63a0d8d103406ac12f1"
                                }
                              }
                            }
                          },
                          "is_recurrence": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "invoice": {
                            "type": "object",
                            "properties": {
                              "is_invoiced": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "297ff853-597b-4f24-a738-b24b4e4a41cf"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Jegadheesh"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "R"
                              },
                              "email": {
                                "type": "string",
                                "example": "jegadheesh.r@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "1234"
                              },
                              "prefix": {},
                              "work_phone_number": {},
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
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
                                "example": "2023-09-26T10:13:03.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-09-26T10:13:03.000Z"
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
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "products": {
                            "type": "array"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-10-19T04:53:14.996Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-10-19T04:53:15.168Z"
                          },
                          "work_order_number": {
                            "type": "integer",
                            "example": 13577,
                            "default": 0
                          },
                          "source": {
                            "type": "object",
                            "properties": {
                              "source_uid": {
                                "type": "string"
                              },
                              "source_name": {
                                "type": "string"
                              }
                            },
                            "description": "Lead Source"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 11503,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 1151,
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Count Limit Exceeded\",\n    \"message\": \"Count must be less than or equal to 1000\"\n}"
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
                      "example": "Count Limit Exceeded"
                    },
                    "message": {
                      "type": "string",
                      "example": "Count must be less than or equal to 1000"
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