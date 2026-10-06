---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Job Details

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
    "/jobs/{job_uid}": {
      "get": {
        "summary": "Get Job Details",
        "description": "",
        "operationId": "get-job-details",
        "parameters": [
          {
            "name": "job_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
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
                      "data": {
                        "job_uid": "698d5560-6e3b-11ee-9637-5d3ccadf022e",
                        "customer": null,
                        "organization": {
                          "organization_uid": "ca32ebd0-9c8d-11ed-9f13-9789cec5f4f1",
                          "organization_name": "2503nithintest",
                          "organization_logo": null,
                          "organization_description": null,
                          "organization_email": "2503nithin@mail.com",
                          "no_of_customers": 3,
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
                          "organization_billing_address": {
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
                          "custom_fields": [
                            {
                              "label": "Sage Customer ID",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "63d0ee1f2d8dc1a120429c1a"
                            },
                            {
                              "label": "Text Area",
                              "value": "",
                              "type": "MULTI_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "63d0ee1f2d8dc1a120429c1c"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "63d0ee1f2d8dc1a120429c1d"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "63d0ee1f2d8dc1a120429c1e"
                            },
                            {
                              "label": "Time Input",
                              "value": "11:22:00",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c9d6b9430b6fb22fe3973c"
                            },
                            {
                              "label": "Zoho CRM Account ID",
                              "value": "test new",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c9d73e430b6fb22fe398bb"
                            },
                            {
                              "label": "Billing Frequency",
                              "value": "bulk action test",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c9d770430b6fb22fe39a95"
                            }
                          ],
                          "is_active": true,
                          "is_deleted": false,
                          "created_at": "2023-01-25T08:53:51.507Z",
                          "updated_at": "2023-09-26T07:01:51.454Z"
                        },
                        "prefix": "Q3_0001",
                        "delayed_job": false,
                        "assigned_to_team": [],
                        "assigned_to": [],
                        "job_title": "test job",
                        "job_description": "",
                        "job_category": {
                          "is_deleted": false,
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
                            "done_by": {
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
                            "is_offline": false,
                            "_id": "6530b63a0d8d103406ac12f0",
                            "checklist": [],
                            "created_at": "2023-10-19T04:53:14.991Z",
                            "time_on_status": 28,
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
                        "hide_to_fe": false,
                        "invoice": {
                          "is_invoiced": false
                        },
                        "attachments": [
                          {
                            "attachment_uid": "69a941d0-6e3b-11ee-9637-5d3ccadf022e",
                            "file_name": "test images",
                            "url": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3f994840-6e3b-11ee-9637-5d3ccadf022e.jpeg",
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
                            "_id": "6530b63a0d8d103406ac12f9",
                            "created_at": "2023-10-19T04:53:14.995Z"
                          }
                        ],
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
                        "details_url": "https://staging.zuperpro.com/api/customer_portal/jobs?company_uid=6c287db0-ff7c-11e7-b3a8-29b417a4f3fa&job_uid=698d5560-6e3b-11ee-9637-5d3ccadf022e",
                        "feedback_url": "https://staging.zuperpro.com/api/customer_portal/feedback?company_uid=6c287db0-ff7c-11e7-b3a8-29b417a4f3fa&job_uid=698d5560-6e3b-11ee-9637-5d3ccadf022e",
                        "child_jobs": [],
                        "products": [
                          {
                            "line_item_uid": "4341d250-6e45-11ee-9637-5d3ccadf022e",
                            "line_item_type": "ITEM",
                            "product_ref_id": {
                              "product_category": {
                                "category_name": "Miscellaneous",
                                "category_uid": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7"
                              },
                              "product_uid": "022b9930-a96a-11e9-a952-716e2bba4402",
                              "updated_at": "2023-10-06T05:12:24.679Z",
                              "created_at": "2019-07-18T14:40:37.955Z",
                              "is_deleted": false,
                              "is_available": true,
                              "price": null,
                              "currency": "",
                              "quantity": 0,
                              "location_availability": [],
                              "meta_data": [
                                {
                                  "label": "l1",
                                  "value": "v1",
                                  "hide_to_fe": false,
                                  "_id": "5d3084e58083436bcb93f3b6"
                                },
                                {
                                  "label": "QB Product ID",
                                  "value": "2267",
                                  "hide_to_fe": false,
                                  "_id": "651f9738adacd7cfe1ef52f6"
                                }
                              ],
                              "product_description": "",
                              "product_id": "P020",
                              "has_custom_tax": false,
                              "product_type": "SERVICE",
                              "track_quantity": true,
                              "tax": {
                                "tax_exempt": false
                              }
                            },
                            "product_id": "P020",
                            "product_uid": "022b9930-a96a-11e9-a952-716e2bba4402",
                            "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                            "product_name": "Product#2",
                            "product_description": "",
                            "product_manual_link": "",
                            "quantity": 6,
                            "price": null,
                            "product_type": "SERVICE",
                            "meta_data": [],
                            "serial_nos": [],
                            "group_uid": "f2c59e40-cdee-11eb-b900-5d79c9f91d92",
                            "group": {
                              "product_group_name": "Test Product Group",
                              "product_group_uid": "f2c59e40-cdee-11eb-b900-5d79c9f91d92"
                            },
                            "discount": 0,
                            "discount_type": "FIXED",
                            "total": 0,
                            "_id": "6530c6c10d8d103406ac42b6",
                            "product": {
                              "product_uid": "022b9930-a96a-11e9-a952-716e2bba4402",
                              "is_deleted": false,
                              "is_available": true,
                              "price": null,
                              "currency": "",
                              "quantity": 0,
                              "location_availability": [],
                              "meta_data": [
                                {
                                  "label": "l1",
                                  "value": "v1",
                                  "hide_to_fe": false,
                                  "_id": "5d3084e58083436bcb93f3b6"
                                },
                                {
                                  "label": "QB Product ID",
                                  "value": "2267",
                                  "hide_to_fe": false,
                                  "_id": "651f9738adacd7cfe1ef52f6"
                                }
                              ],
                              "product_description": "",
                              "product_id": "P020",
                              "has_custom_tax": false,
                              "product_type": "SERVICE",
                              "track_quantity": true,
                              "tax": {
                                "tax_exempt": false
                              }
                            },
                            "dealer_markup": {
                              "markup_type": "FLAT",
                              "markup_value": 10,
                              "markup_price": 10
                            }
                          },
                          {
                            "line_item_uid": "4346b450-6e45-11ee-9637-5d3ccadf022e",
                            "line_item_type": "ITEM",
                            "product_ref_id": {
                              "product_category": {
                                "category_name": "Furniture",
                                "category_uid": "3e2b4520-81ce-11e9-b902-35bbc7d2063e"
                              },
                              "product_type": "PRODUCT",
                              "product_uid": "2a1ce610-d90d-11e9-956d-85e2bb929434",
                              "updated_at": "2023-10-14T03:10:34.336Z",
                              "created_at": "2019-09-17T05:36:57.588Z",
                              "is_deleted": false,
                              "is_available": true,
                              "price": 50,
                              "currency": "₹",
                              "quantity": 143,
                              "location_availability": [
                                {
                                  "location": {
                                    "location_name": "Location #1",
                                    "location_uid": "955447b0-85ee-11e9-834a-b9e1f8f2de14",
                                    "is_deleted": false
                                  },
                                  "quantity": 0,
                                  "min_quantity": 1,
                                  "serial_nos": [
                                    "121",
                                    "1",
                                    "2",
                                    "456",
                                    "1789",
                                    "23",
                                    "2532",
                                    "5858",
                                    "86785",
                                    "546",
                                    "76587",
                                    "25252",
                                    "75675"
                                  ],
                                  "_id": "64dd7e05a5f7ee4f80ec520d",
                                  "created_at": "2023-08-17T01:55:17.026Z"
                                },
                                {
                                  "location": {
                                    "location_name": "Location #2",
                                    "location_uid": "10964f30-ae9f-11e9-ad42-b5f50cbfc791",
                                    "is_deleted": false
                                  },
                                  "quantity": 90,
                                  "min_quantity": 1,
                                  "serial_nos": [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10"
                                  ],
                                  "_id": "64dd7e05a5f7ee4f80ec520e",
                                  "created_at": "2023-08-17T01:55:17.027Z"
                                },
                                {
                                  "location": {
                                    "is_deleted": false,
                                    "location_name": "Redmond Warehouse",
                                    "location_uid": "97faee90-de40-11eb-a52c-e53471055073"
                                  },
                                  "quantity": 53,
                                  "min_quantity": 1,
                                  "serial_nos": [],
                                  "_id": "64dd7e05a5f7ee4f80ec520f",
                                  "created_at": "2023-08-17T01:55:17.027Z"
                                }
                              ],
                              "meta_data": [
                                {
                                  "label": "Text Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51f6"
                                },
                                {
                                  "label": "Text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51f7"
                                },
                                {
                                  "label": "Select",
                                  "value": "",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51f8"
                                },
                                {
                                  "label": "Xero Item Account",
                                  "value": "610 - Accounts Receivable",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51f9"
                                },
                                {
                                  "label": "Radio",
                                  "value": "",
                                  "type": "RADIO",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fa"
                                },
                                {
                                  "label": "Date Input",
                                  "value": "",
                                  "type": "DATE",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fb"
                                },
                                {
                                  "label": "Time Input",
                                  "value": "",
                                  "type": "TIME",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fc"
                                },
                                {
                                  "label": "Checkbox",
                                  "value": "",
                                  "type": "MULTI_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fd"
                                },
                                {
                                  "label": "DateTime Input",
                                  "value": "",
                                  "type": "DATETIME",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fe"
                                },
                                {
                                  "label": "Part Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "64dd7e05a5f7ee4f80ec51ff"
                                },
                                {
                                  "label": "File Input",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "_id": "63f7463f4bdfc724d56ba71e"
                                },
                                {
                                  "label": "Sage Item ID",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "63aed5849662e00a0888e19a"
                                },
                                {
                                  "label": "Bin",
                                  "value": "Bin #1",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "61d554c8cfaf76cf8050f5ff"
                                },
                                {
                                  "label": "Unit",
                                  "value": "Metres",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "61d554c8cfaf76cf8050f600"
                                },
                                {
                                  "label": "Read only time",
                                  "value": "",
                                  "type": "TIME",
                                  "hide_to_fe": false,
                                  "_id": "61d554c8cfaf76cf8050f602"
                                },
                                {
                                  "label": "File Input 1",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "_id": "61d554c8cfaf76cf8050f605"
                                },
                                {
                                  "label": "QB Product ID",
                                  "value": "31",
                                  "hide_to_fe": false,
                                  "_id": "650d75129f104b3250eb676e"
                                },
                                {
                                  "label": "Text Input 1",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "Test",
                                  "group_uid": "8fb52760-5ece-11eb-b4f8-d3456c14207b",
                                  "_id": "61d554c8cfaf76cf8050f607"
                                },
                                {
                                  "label": "Test Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "Test",
                                  "group_uid": "8fb52760-5ece-11eb-b4f8-d3456c14207b",
                                  "_id": "61d554c8cfaf76cf8050f608"
                                },
                                {
                                  "label": "Text Input 2",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "666",
                                  "group_uid": "f59e6e00-46d2-11ec-8326-13db811ceb94",
                                  "_id": "61d554c8cfaf76cf8050f609"
                                },
                                {
                                  "label": "DateTime Input- group",
                                  "value": "",
                                  "type": "DATETIME",
                                  "hide_to_fe": false,
                                  "group_name": "666",
                                  "group_uid": "f59e6e00-46d2-11ec-8326-13db811ceb94",
                                  "_id": "61d554c8cfaf76cf8050f60a"
                                },
                                {
                                  "label": "Zoho Books Item ID",
                                  "value": "2677134000001517001",
                                  "hide_to_fe": false,
                                  "_id": "6272ee0f8d317e6f32c70883"
                                },
                                {
                                  "label": "Xero Item ID",
                                  "value": "Product No.2",
                                  "hide_to_fe": false,
                                  "_id": "645352d7771a8a12bd5f5faf"
                                }
                              ],
                              "product_description": "Pack Content & Dimensions\nMaterial: MDF\nDesign: Jigsaw\nDimensions: ~3.8\" inches\nThickness: 2.5 mm\nContent: 4 Pieces\n\nProduct Description\nSet of 4 MDF bases for decoupage, mixed media, acrylic painting, DIY, dot mandala art, Wall decor projects, and other art & craft forms.\nNot waterproof: Use a coat of waterproof varnish on your completed project.\nSmooth finish & easy to work with\nThere can be a slight colour variation from the displayed photographs.",
                              "product_id": "Product No.2",
                              "track_quantity": true,
                              "has_custom_tax": false,
                              "uom": "Litres",
                              "purchase_price": 50,
                              "prefix": "",
                              "tax": {
                                "tax_exempt": false
                              }
                            },
                            "product_id": "Product No.2",
                            "product_uid": "2a1ce610-d90d-11e9-956d-85e2bb929434",
                            "product_category": "3e2b4520-81ce-11e9-b902-35bbc7d2063e",
                            "product_name": "MDF Coasters",
                            "product_description": "Pack Content & Dimensions\nMaterial: MDF\nDesign: Jigsaw\nDimensions: ~3.8\" inches\nThickness: 2.5 mm\nContent: 4 Pieces\n\nProduct Description\nSet of 4 MDF bases for decoupage, mixed media, acrylic painting, DIY, dot mandala art, Wall decor projects, and other art & craft forms.\nNot waterproof: Use a coat of waterproof varnish on your completed project.\nSmooth finish & easy to work with\nThere can be a slight colour variation from the displayed photographs.",
                            "uom": "Litres",
                            "product_manual_link": "",
                            "quantity": 1,
                            "price": 50,
                            "product_type": "PRODUCT",
                            "meta_data": [],
                            "serial_nos": [],
                            "group_uid": "f2c59e40-cdee-11eb-b900-5d79c9f91d92",
                            "group": {
                              "product_group_name": "Test Product Group",
                              "product_group_uid": "f2c59e40-cdee-11eb-b900-5d79c9f91d92"
                            },
                            "discount": 0,
                            "discount_type": "FIXED",
                            "total": 50,
                            "_id": "6530c6c10d8d103406ac42b7",
                            "product": {
                              "product_type": "PRODUCT",
                              "product_uid": "2a1ce610-d90d-11e9-956d-85e2bb929434",
                              "is_deleted": false,
                              "is_available": true,
                              "price": 50,
                              "currency": "₹",
                              "quantity": 143,
                              "location_availability": [
                                {
                                  "location": {
                                    "location_name": "Location #1",
                                    "location_uid": "955447b0-85ee-11e9-834a-b9e1f8f2de14",
                                    "is_deleted": false
                                  },
                                  "quantity": 0,
                                  "min_quantity": 1,
                                  "serial_nos": [
                                    "121",
                                    "1",
                                    "2",
                                    "456",
                                    "1789",
                                    "23",
                                    "2532",
                                    "5858",
                                    "86785",
                                    "546",
                                    "76587",
                                    "25252",
                                    "75675"
                                  ],
                                  "_id": "64dd7e05a5f7ee4f80ec520d",
                                  "created_at": "2023-08-17T01:55:17.026Z"
                                },
                                {
                                  "location": {
                                    "location_name": "Location #2",
                                    "location_uid": "10964f30-ae9f-11e9-ad42-b5f50cbfc791",
                                    "is_deleted": false
                                  },
                                  "quantity": 90,
                                  "min_quantity": 1,
                                  "serial_nos": [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10"
                                  ],
                                  "_id": "64dd7e05a5f7ee4f80ec520e",
                                  "created_at": "2023-08-17T01:55:17.027Z"
                                },
                                {
                                  "location": {
                                    "is_deleted": false,
                                    "location_name": "Redmond Warehouse",
                                    "location_uid": "97faee90-de40-11eb-a52c-e53471055073"
                                  },
                                  "quantity": 53,
                                  "min_quantity": 1,
                                  "serial_nos": [],
                                  "_id": "64dd7e05a5f7ee4f80ec520f",
                                  "created_at": "2023-08-17T01:55:17.027Z"
                                }
                              ],
                              "meta_data": [
                                {
                                  "label": "Text Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51f6"
                                },
                                {
                                  "label": "Text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51f7"
                                },
                                {
                                  "label": "Select",
                                  "value": "",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51f8"
                                },
                                {
                                  "label": "Xero Item Account",
                                  "value": "610 - Accounts Receivable",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51f9"
                                },
                                {
                                  "label": "Radio",
                                  "value": "",
                                  "type": "RADIO",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fa"
                                },
                                {
                                  "label": "Date Input",
                                  "value": "",
                                  "type": "DATE",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fb"
                                },
                                {
                                  "label": "Time Input",
                                  "value": "",
                                  "type": "TIME",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fc"
                                },
                                {
                                  "label": "Checkbox",
                                  "value": "",
                                  "type": "MULTI_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fd"
                                },
                                {
                                  "label": "DateTime Input",
                                  "value": "",
                                  "type": "DATETIME",
                                  "hide_to_fe": false,
                                  "_id": "64dd7e05a5f7ee4f80ec51fe"
                                },
                                {
                                  "label": "Part Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "64dd7e05a5f7ee4f80ec51ff"
                                },
                                {
                                  "label": "File Input",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "_id": "63f7463f4bdfc724d56ba71e"
                                },
                                {
                                  "label": "Sage Item ID",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "63aed5849662e00a0888e19a"
                                },
                                {
                                  "label": "Bin",
                                  "value": "Bin #1",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "61d554c8cfaf76cf8050f5ff"
                                },
                                {
                                  "label": "Unit",
                                  "value": "Metres",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "61d554c8cfaf76cf8050f600"
                                },
                                {
                                  "label": "Read only time",
                                  "value": "",
                                  "type": "TIME",
                                  "hide_to_fe": false,
                                  "_id": "61d554c8cfaf76cf8050f602"
                                },
                                {
                                  "label": "File Input 1",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "_id": "61d554c8cfaf76cf8050f605"
                                },
                                {
                                  "label": "QB Product ID",
                                  "value": "31",
                                  "hide_to_fe": false,
                                  "_id": "650d75129f104b3250eb676e"
                                },
                                {
                                  "label": "Text Input 1",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "Test",
                                  "group_uid": "8fb52760-5ece-11eb-b4f8-d3456c14207b",
                                  "_id": "61d554c8cfaf76cf8050f607"
                                },
                                {
                                  "label": "Test Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "Test",
                                  "group_uid": "8fb52760-5ece-11eb-b4f8-d3456c14207b",
                                  "_id": "61d554c8cfaf76cf8050f608"
                                },
                                {
                                  "label": "Text Input 2",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "666",
                                  "group_uid": "f59e6e00-46d2-11ec-8326-13db811ceb94",
                                  "_id": "61d554c8cfaf76cf8050f609"
                                },
                                {
                                  "label": "DateTime Input- group",
                                  "value": "",
                                  "type": "DATETIME",
                                  "hide_to_fe": false,
                                  "group_name": "666",
                                  "group_uid": "f59e6e00-46d2-11ec-8326-13db811ceb94",
                                  "_id": "61d554c8cfaf76cf8050f60a"
                                },
                                {
                                  "label": "Zoho Books Item ID",
                                  "value": "2677134000001517001",
                                  "hide_to_fe": false,
                                  "_id": "6272ee0f8d317e6f32c70883"
                                },
                                {
                                  "label": "Xero Item ID",
                                  "value": "Product No.2",
                                  "hide_to_fe": false,
                                  "_id": "645352d7771a8a12bd5f5faf"
                                }
                              ],
                              "product_description": "Pack Content & Dimensions\nMaterial: MDF\nDesign: Jigsaw\nDimensions: ~3.8\" inches\nThickness: 2.5 mm\nContent: 4 Pieces\n\nProduct Description\nSet of 4 MDF bases for decoupage, mixed media, acrylic painting, DIY, dot mandala art, Wall decor projects, and other art & craft forms.\nNot waterproof: Use a coat of waterproof varnish on your completed project.\nSmooth finish & easy to work with\nThere can be a slight colour variation from the displayed photographs.",
                              "product_id": "Product No.2",
                              "track_quantity": true,
                              "has_custom_tax": false,
                              "uom": "Litres",
                              "purchase_price": 50,
                              "prefix": "",
                              "tax": {
                                "tax_exempt": false
                              }
                            },
                            "dealer_markup": {
                              "markup_type": "FLAT",
                              "markup_value": 10,
                              "markup_price": 10
                            }
                          },
                          {
                            "line_item_uid": "434b6f40-6e45-11ee-9637-5d3ccadf022e",
                            "line_item_type": "ITEM",
                            "product_ref_id": {
                              "product_category": {
                                "category_name": "Miscellaneous",
                                "category_uid": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7"
                              },
                              "product_uid": "535dcdf0-8228-11e9-851f-4dd105dd2b46",
                              "updated_at": "2023-10-05T07:40:59.366Z",
                              "created_at": "2019-05-29T15:42:12.048Z",
                              "is_deleted": false,
                              "is_available": true,
                              "price": 1780,
                              "currency": "",
                              "quantity": 2145,
                              "location_availability": [],
                              "product_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                              "product_id": "00052",
                              "meta_data": [
                                {
                                  "label": "Empty Text input",
                                  "value": "Break Cable",
                                  "type": "SINGLE_LINE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3bf"
                                },
                                {
                                  "label": "Part Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "6516c749f382394c1048c3c0"
                                },
                                {
                                  "label": "Text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c1"
                                },
                                {
                                  "label": "Text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "6516c749f382394c1048c3c2"
                                },
                                {
                                  "label": "Select",
                                  "value": "",
                                  "type": "SINGLE_ITEM",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c3"
                                },
                                {
                                  "label": "DateTime Input",
                                  "value": "",
                                  "type": "DATETIME",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "6516c749f382394c1048c3c4"
                                },
                                {
                                  "label": "Xero Item Account",
                                  "value": "800 - Accounts Payable",
                                  "type": "SINGLE_ITEM",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c5"
                                },
                                {
                                  "label": "Radio",
                                  "value": "",
                                  "type": "RADIO",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c6"
                                },
                                {
                                  "label": "Date Input",
                                  "value": "",
                                  "type": "DATE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c7"
                                },
                                {
                                  "label": "Time Input",
                                  "value": "",
                                  "type": "TIME",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c8"
                                },
                                {
                                  "label": "Checkbox",
                                  "value": "",
                                  "type": "MULTI_ITEM",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c9"
                                },
                                {
                                  "label": "DateTime Input",
                                  "value": "",
                                  "type": "DATETIME",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3ca"
                                },
                                {
                                  "label": "Text Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "649ff88cab237263a6d17f42"
                                },
                                {
                                  "label": "Custom Text Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4a"
                                },
                                {
                                  "label": "custom multi text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4b"
                                },
                                {
                                  "label": "Date Input",
                                  "value": "",
                                  "type": "DATE",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4c"
                                },
                                {
                                  "label": "File Input",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4d"
                                },
                                {
                                  "label": "LookUp",
                                  "value": "",
                                  "type": "LOOKUP",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4e"
                                },
                                {
                                  "label": "Sage Item ID",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "63c7bc2e57e88410abea1da0"
                                },
                                {
                                  "label": "Zoho Books Item ID",
                                  "value": "2657669000000121050",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577ee"
                                },
                                {
                                  "label": "Bin",
                                  "value": "Bin #1",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577ef"
                                },
                                {
                                  "label": "Unit",
                                  "value": "Metres",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577f0"
                                },
                                {
                                  "label": "Read only time",
                                  "value": "",
                                  "type": "TIME",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577f2"
                                },
                                {
                                  "label": "File Input 1",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577f5"
                                },
                                {
                                  "label": "QB Product ID",
                                  "value": "48",
                                  "hide_to_fe": false,
                                  "_id": "651e688b65e27e90e8da52f0"
                                },
                                {
                                  "label": "Brand",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577f7"
                                },
                                {
                                  "label": "Text Input 1",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "Test",
                                  "group_uid": "8fb52760-5ece-11eb-b4f8-d3456c14207b",
                                  "_id": "62eeabcd5f3f1e2995d577f8"
                                },
                                {
                                  "label": "Test Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "Test",
                                  "group_uid": "8fb52760-5ece-11eb-b4f8-d3456c14207b",
                                  "_id": "62eeabcd5f3f1e2995d577f9"
                                },
                                {
                                  "label": "Text Input 2",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "666",
                                  "group_uid": "f59e6e00-46d2-11ec-8326-13db811ceb94",
                                  "_id": "62eeabcd5f3f1e2995d577fa"
                                },
                                {
                                  "label": "DateTime Input- group",
                                  "value": "",
                                  "type": "DATETIME",
                                  "hide_to_fe": false,
                                  "group_name": "666",
                                  "group_uid": "f59e6e00-46d2-11ec-8326-13db811ceb94",
                                  "_id": "62eeabcd5f3f1e2995d577fb"
                                },
                                {
                                  "label": "Xero Item ID",
                                  "value": "",
                                  "hide_to_fe": false,
                                  "_id": "60b0a9cd2b21101569805ea7"
                                }
                              ],
                              "has_custom_tax": false,
                              "product_type": "SERVICE",
                              "track_quantity": true,
                              "uom": "",
                              "tax": {
                                "tax_exempt": false
                              },
                              "specification": "Break Cable",
                              "brand": "HAL"
                            },
                            "product_id": "00052",
                            "product_uid": "535dcdf0-8228-11e9-851f-4dd105dd2b46",
                            "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                            "product_name": "sample",
                            "product_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            "brand": "HAL",
                            "specification": "Break Cable",
                            "uom": "",
                            "product_manual_link": "",
                            "quantity": 1,
                            "price": 1780,
                            "product_type": "SERVICE",
                            "meta_data": [],
                            "serial_nos": [],
                            "group_uid": "f2c59e40-cdee-11eb-b900-5d79c9f91d92",
                            "group": {
                              "product_group_name": "Test Product Group",
                              "product_group_uid": "f2c59e40-cdee-11eb-b900-5d79c9f91d92"
                            },
                            "discount": 0,
                            "discount_type": "FIXED",
                            "total": 1780,
                            "_id": "6530c6c10d8d103406ac42b8",
                            "product": {
                              "product_uid": "535dcdf0-8228-11e9-851f-4dd105dd2b46",
                              "is_deleted": false,
                              "is_available": true,
                              "price": 1780,
                              "currency": "",
                              "quantity": 2145,
                              "location_availability": [],
                              "product_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                              "product_id": "00052",
                              "meta_data": [
                                {
                                  "label": "Empty Text input",
                                  "value": "Break Cable",
                                  "type": "SINGLE_LINE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3bf"
                                },
                                {
                                  "label": "Part Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "6516c749f382394c1048c3c0"
                                },
                                {
                                  "label": "Text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c1"
                                },
                                {
                                  "label": "Text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "6516c749f382394c1048c3c2"
                                },
                                {
                                  "label": "Select",
                                  "value": "",
                                  "type": "SINGLE_ITEM",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c3"
                                },
                                {
                                  "label": "DateTime Input",
                                  "value": "",
                                  "type": "DATETIME",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "6516c749f382394c1048c3c4"
                                },
                                {
                                  "label": "Xero Item Account",
                                  "value": "800 - Accounts Payable",
                                  "type": "SINGLE_ITEM",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c5"
                                },
                                {
                                  "label": "Radio",
                                  "value": "",
                                  "type": "RADIO",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c6"
                                },
                                {
                                  "label": "Date Input",
                                  "value": "",
                                  "type": "DATE",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c7"
                                },
                                {
                                  "label": "Time Input",
                                  "value": "",
                                  "type": "TIME",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c8"
                                },
                                {
                                  "label": "Checkbox",
                                  "value": "",
                                  "type": "MULTI_ITEM",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3c9"
                                },
                                {
                                  "label": "DateTime Input",
                                  "value": "",
                                  "type": "DATETIME",
                                  "module_name": "PRODUCT",
                                  "hide_to_fe": false,
                                  "_id": "6516c749f382394c1048c3ca"
                                },
                                {
                                  "label": "Text Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "649ff88cab237263a6d17f42"
                                },
                                {
                                  "label": "Custom Text Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4a"
                                },
                                {
                                  "label": "custom multi text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4b"
                                },
                                {
                                  "label": "Date Input",
                                  "value": "",
                                  "type": "DATE",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4c"
                                },
                                {
                                  "label": "File Input",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4d"
                                },
                                {
                                  "label": "LookUp",
                                  "value": "",
                                  "type": "LOOKUP",
                                  "hide_to_fe": false,
                                  "group_name": "new part 1",
                                  "group_uid": "03173300-cdff-11ed-bc3a-f7f182e72865",
                                  "_id": "649ff88cab237263a6d17f4e"
                                },
                                {
                                  "label": "Sage Item ID",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "63c7bc2e57e88410abea1da0"
                                },
                                {
                                  "label": "Zoho Books Item ID",
                                  "value": "2657669000000121050",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577ee"
                                },
                                {
                                  "label": "Bin",
                                  "value": "Bin #1",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577ef"
                                },
                                {
                                  "label": "Unit",
                                  "value": "Metres",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577f0"
                                },
                                {
                                  "label": "Read only time",
                                  "value": "",
                                  "type": "TIME",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577f2"
                                },
                                {
                                  "label": "File Input 1",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577f5"
                                },
                                {
                                  "label": "QB Product ID",
                                  "value": "48",
                                  "hide_to_fe": false,
                                  "_id": "651e688b65e27e90e8da52f0"
                                },
                                {
                                  "label": "Brand",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "62eeabcd5f3f1e2995d577f7"
                                },
                                {
                                  "label": "Text Input 1",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "Test",
                                  "group_uid": "8fb52760-5ece-11eb-b4f8-d3456c14207b",
                                  "_id": "62eeabcd5f3f1e2995d577f8"
                                },
                                {
                                  "label": "Test Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "Test",
                                  "group_uid": "8fb52760-5ece-11eb-b4f8-d3456c14207b",
                                  "_id": "62eeabcd5f3f1e2995d577f9"
                                },
                                {
                                  "label": "Text Input 2",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "666",
                                  "group_uid": "f59e6e00-46d2-11ec-8326-13db811ceb94",
                                  "_id": "62eeabcd5f3f1e2995d577fa"
                                },
                                {
                                  "label": "DateTime Input- group",
                                  "value": "",
                                  "type": "DATETIME",
                                  "hide_to_fe": false,
                                  "group_name": "666",
                                  "group_uid": "f59e6e00-46d2-11ec-8326-13db811ceb94",
                                  "_id": "62eeabcd5f3f1e2995d577fb"
                                },
                                {
                                  "label": "Xero Item ID",
                                  "value": "",
                                  "hide_to_fe": false,
                                  "_id": "60b0a9cd2b21101569805ea7"
                                }
                              ],
                              "has_custom_tax": false,
                              "product_type": "SERVICE",
                              "track_quantity": true,
                              "uom": "",
                              "tax": {
                                "tax_exempt": false
                              },
                              "specification": "Break Cable",
                              "brand": "HAL"
                            },
                            "dealer_markup": {
                              "markup_type": "FLAT",
                              "markup_value": 10,
                              "markup_price": 10
                            }
                          },
                          {
                            "line_item_uid": "43502a30-6e45-11ee-9637-5d3ccadf022e",
                            "line_item_type": "ITEM",
                            "product_ref_id": {
                              "product_no": 2,
                              "product_type": "SERVICE",
                              "product_category": {
                                "category_name": "Miscellaneous",
                                "category_uid": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7"
                              },
                              "product_uid": "b89fd290-35eb-11ea-b910-fd8a0dd6897e",
                              "updated_at": "2023-07-26T10:07:00.644Z",
                              "created_at": "2020-01-13T10:01:51.929Z",
                              "is_deleted": false,
                              "is_available": true,
                              "purchase_price": null,
                              "price": 1000,
                              "currency": "",
                              "quantity": 0,
                              "track_quantity": true,
                              "location_availability": [],
                              "meta_data": [
                                {
                                  "label": "Sage Item ID",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88202"
                                },
                                {
                                  "label": "Time Input",
                                  "value": "",
                                  "type": "TIME",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88203"
                                },
                                {
                                  "label": "Text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88204"
                                },
                                {
                                  "label": "Checkbox",
                                  "value": "",
                                  "type": "MULTI_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88205"
                                },
                                {
                                  "label": "File Input",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88206"
                                },
                                {
                                  "label": "Date Input",
                                  "value": "",
                                  "type": "DATE",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88207"
                                },
                                {
                                  "label": "DateTime Input",
                                  "value": "",
                                  "type": "DATETIME",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88208"
                                },
                                {
                                  "label": "Select",
                                  "value": "",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88209"
                                },
                                {
                                  "label": "Radio",
                                  "value": "",
                                  "type": "RADIO",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c8820a"
                                },
                                {
                                  "label": "Part Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "63bfea04da05c2e6b0c8820b"
                                },
                                {
                                  "label": "Bin",
                                  "value": "Bin #1",
                                  "hide_to_fe": false,
                                  "_id": "6037c429b466f17c23aa3de9"
                                },
                                {
                                  "label": "Unit",
                                  "value": "Metres",
                                  "hide_to_fe": false,
                                  "_id": "6037c429b466f17c23aa3dea"
                                },
                                {
                                  "label": "QB Product ID",
                                  "value": "32",
                                  "hide_to_fe": false,
                                  "_id": "641064c526d561a8b00048dc"
                                },
                                {
                                  "label": "Xero Item ID",
                                  "value": "001",
                                  "hide_to_fe": false,
                                  "_id": "645352d7771a8a12bd5f5fd9"
                                }
                              ],
                              "product_description": "",
                              "product_id": "001",
                              "has_custom_tax": false,
                              "tax": {},
                              "uom": ""
                            },
                            "product_id": "001",
                            "product_uid": "b89fd290-35eb-11ea-b910-fd8a0dd6897e",
                            "product_category": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7",
                            "product_name": "Cleaning of Water Tank",
                            "product_description": "",
                            "uom": "",
                            "product_manual_link": "",
                            "quantity": 1,
                            "price": 1000,
                            "product_type": "SERVICE",
                            "meta_data": [],
                            "serial_nos": [],
                            "group_uid": "f2c59e40-cdee-11eb-b900-5d79c9f91d92",
                            "group": {
                              "product_group_name": "Test Product Group",
                              "product_group_uid": "f2c59e40-cdee-11eb-b900-5d79c9f91d92"
                            },
                            "discount": 0,
                            "discount_type": "FIXED",
                            "total": 1000,
                            "_id": "6530c6c10d8d103406ac42b9",
                            "product": {
                              "product_no": 2,
                              "product_type": "SERVICE",
                              "product_uid": "b89fd290-35eb-11ea-b910-fd8a0dd6897e",
                              "is_deleted": false,
                              "is_available": true,
                              "purchase_price": null,
                              "price": 1000,
                              "currency": "",
                              "quantity": 0,
                              "track_quantity": true,
                              "location_availability": [],
                              "meta_data": [
                                {
                                  "label": "Sage Item ID",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88202"
                                },
                                {
                                  "label": "Time Input",
                                  "value": "",
                                  "type": "TIME",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88203"
                                },
                                {
                                  "label": "Text Area",
                                  "value": "",
                                  "type": "MULTI_LINE",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88204"
                                },
                                {
                                  "label": "Checkbox",
                                  "value": "",
                                  "type": "MULTI_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88205"
                                },
                                {
                                  "label": "File Input",
                                  "value": "",
                                  "type": "FILE",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88206"
                                },
                                {
                                  "label": "Date Input",
                                  "value": "",
                                  "type": "DATE",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88207"
                                },
                                {
                                  "label": "DateTime Input",
                                  "value": "",
                                  "type": "DATETIME",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88208"
                                },
                                {
                                  "label": "Select",
                                  "value": "",
                                  "type": "SINGLE_ITEM",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c88209"
                                },
                                {
                                  "label": "Radio",
                                  "value": "",
                                  "type": "RADIO",
                                  "hide_to_fe": false,
                                  "_id": "63bfea04da05c2e6b0c8820a"
                                },
                                {
                                  "label": "Part Input",
                                  "value": "",
                                  "type": "SINGLE_LINE",
                                  "hide_to_fe": false,
                                  "group_name": "New Part",
                                  "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                  "_id": "63bfea04da05c2e6b0c8820b"
                                },
                                {
                                  "label": "Bin",
                                  "value": "Bin #1",
                                  "hide_to_fe": false,
                                  "_id": "6037c429b466f17c23aa3de9"
                                },
                                {
                                  "label": "Unit",
                                  "value": "Metres",
                                  "hide_to_fe": false,
                                  "_id": "6037c429b466f17c23aa3dea"
                                },
                                {
                                  "label": "QB Product ID",
                                  "value": "32",
                                  "hide_to_fe": false,
                                  "_id": "641064c526d561a8b00048dc"
                                },
                                {
                                  "label": "Xero Item ID",
                                  "value": "001",
                                  "hide_to_fe": false,
                                  "_id": "645352d7771a8a12bd5f5fd9"
                                }
                              ],
                              "product_description": "",
                              "product_id": "001",
                              "has_custom_tax": false,
                              "tax": {},
                              "uom": ""
                            },
                            "dealer_markup": {
                              "markup_type": "FLAT",
                              "markup_value": 10,
                              "markup_price": 10
                            }
                          }
                        ],
                        "dealer_fee": {
                          "label": "Dealer fee",
                          "value": 120,
                          "percent": 20,
                          "type": "PERCENTAGE"
                        },
                        "assets": [],
                        "skills": [],
                        "created_at": "2023-10-19T04:53:14.996Z",
                        "updated_at": "2023-10-19T06:03:45.663Z",
                        "work_order_number": 13577,
                        "checklist": [],
                        "source": {
                          "source_uid": "53c9f94f-d7d2-4902-b4e6-e14412f2b6fe",
                          "source_name": "Website"
                        }
                      }
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
                            "no_of_customers": {
                              "type": "integer",
                              "example": 3,
                              "default": 0
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
                            "organization_billing_address": {
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
                            "custom_fields": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "Sage Customer ID"
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
                                    "example": "63d0ee1f2d8dc1a120429c1a"
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
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2023-01-25T08:53:51.507Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-09-26T07:01:51.454Z"
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
                        "job_description": {
                          "type": "string",
                          "example": ""
                        },
                        "job_category": {
                          "type": "object",
                          "properties": {
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
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
                              "done_by": {
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
                              "is_offline": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "_id": {
                                "type": "string",
                                "example": "6530b63a0d8d103406ac12f0"
                              },
                              "checklist": {
                                "type": "array"
                              },
                              "time_on_status": {
                                "type": "number"
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
                        "hide_to_fe": {
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
                        "attachments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attachment_uid": {
                                "type": "string",
                                "example": "69a941d0-6e3b-11ee-9637-5d3ccadf022e"
                              },
                              "file_name": {
                                "type": "string",
                                "example": "test images"
                              },
                              "url": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3f994840-6e3b-11ee-9637-5d3ccadf022e.jpeg"
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
                              "_id": {
                                "type": "string",
                                "example": "6530b63a0d8d103406ac12f9"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2023-10-19T04:53:14.995Z"
                              }
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
                        "details_url": {
                          "type": "string",
                          "example": "https://staging.zuperpro.com/api/customer_portal/jobs?company_uid=6c287db0-ff7c-11e7-b3a8-29b417a4f3fa&job_uid=698d5560-6e3b-11ee-9637-5d3ccadf022e"
                        },
                        "feedback_url": {
                          "type": "string",
                          "example": "https://staging.zuperpro.com/api/customer_portal/feedback?company_uid=6c287db0-ff7c-11e7-b3a8-29b417a4f3fa&job_uid=698d5560-6e3b-11ee-9637-5d3ccadf022e"
                        },
                        "child_jobs": {
                          "type": "array"
                        },
                        "products": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "line_item_uid": {
                                "type": "string",
                                "example": "4341d250-6e45-11ee-9637-5d3ccadf022e"
                              },
                              "line_item_type": {
                                "type": "string",
                                "example": "ITEM"
                              },
                              "product_ref_id": {
                                "type": "object",
                                "properties": {
                                  "product_category": {
                                    "type": "object",
                                    "properties": {
                                      "category_name": {
                                        "type": "string",
                                        "example": "Miscellaneous"
                                      },
                                      "category_uid": {
                                        "type": "string",
                                        "example": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7"
                                      }
                                    }
                                  },
                                  "product_uid": {
                                    "type": "string",
                                    "example": "022b9930-a96a-11e9-a952-716e2bba4402"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2023-10-06T05:12:24.679Z"
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2019-07-18T14:40:37.955Z"
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "is_available": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "price": {},
                                  "currency": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "quantity": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "location_availability": {
                                    "type": "array"
                                  },
                                  "meta_data": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "label": {
                                          "type": "string",
                                          "example": "l1"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": "v1"
                                        },
                                        "hide_to_fe": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "5d3084e58083436bcb93f3b6"
                                        }
                                      }
                                    }
                                  },
                                  "product_description": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "example": "P020"
                                  },
                                  "has_custom_tax": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "product_type": {
                                    "type": "string",
                                    "example": "SERVICE"
                                  },
                                  "track_quantity": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "tax": {
                                    "type": "object",
                                    "properties": {
                                      "tax_exempt": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      }
                                    }
                                  }
                                }
                              },
                              "product_id": {
                                "type": "string",
                                "example": "P020"
                              },
                              "product_uid": {
                                "type": "string",
                                "example": "022b9930-a96a-11e9-a952-716e2bba4402"
                              },
                              "product_category": {
                                "type": "string",
                                "example": "c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7"
                              },
                              "product_name": {
                                "type": "string",
                                "example": "Product#2"
                              },
                              "product_description": {
                                "type": "string",
                                "example": ""
                              },
                              "product_manual_link": {
                                "type": "string",
                                "example": ""
                              },
                              "quantity": {
                                "type": "integer",
                                "example": 6,
                                "default": 0
                              },
                              "price": {},
                              "product_type": {
                                "type": "string",
                                "example": "SERVICE"
                              },
                              "meta_data": {
                                "type": "array"
                              },
                              "serial_nos": {
                                "type": "array"
                              },
                              "group_uid": {
                                "type": "string",
                                "example": "f2c59e40-cdee-11eb-b900-5d79c9f91d92"
                              },
                              "group": {
                                "type": "object",
                                "properties": {
                                  "product_group_name": {
                                    "type": "string",
                                    "example": "Test Product Group"
                                  },
                                  "product_group_uid": {
                                    "type": "string",
                                    "example": "f2c59e40-cdee-11eb-b900-5d79c9f91d92"
                                  }
                                }
                              },
                              "discount": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "discount_type": {
                                "type": "string",
                                "example": "FIXED"
                              },
                              "total": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "_id": {
                                "type": "string",
                                "example": "6530c6c10d8d103406ac42b6"
                              },
                              "product": {
                                "type": "object",
                                "properties": {
                                  "product_uid": {
                                    "type": "string",
                                    "example": "022b9930-a96a-11e9-a952-716e2bba4402"
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "is_available": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "price": {},
                                  "currency": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "quantity": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "location_availability": {
                                    "type": "array"
                                  },
                                  "meta_data": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "label": {
                                          "type": "string",
                                          "example": "l1"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": "v1"
                                        },
                                        "hide_to_fe": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "5d3084e58083436bcb93f3b6"
                                        }
                                      }
                                    }
                                  },
                                  "product_description": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "example": "P020"
                                  },
                                  "has_custom_tax": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "product_type": {
                                    "type": "string",
                                    "example": "SERVICE"
                                  },
                                  "track_quantity": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "tax": {
                                    "type": "object",
                                    "properties": {
                                      "tax_exempt": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "assets": {
                          "type": "array"
                        },
                        "skills": {
                          "type": "array"
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2023-10-19T04:53:14.996Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2023-10-19T06:03:45.663Z"
                        },
                        "work_order_number": {
                          "type": "integer",
                          "example": 13577,
                          "default": 0
                        },
                        "checklist": {
                          "type": "array"
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
                    "value": "{\n      message: \"Job UID Missing\",\n      title: \"Missing Job UID\",\n      type: \"error\"\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"No Job found for given UID\",\n    \"title\": \"No Job found\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "message": {
                      "type": "string",
                      "example": "No Job found for given UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "No Job found"
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