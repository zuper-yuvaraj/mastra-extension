---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get all Quote

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
    "/estimate": {
      "get": {
        "summary": "Get all Quote",
        "description": "",
        "operationId": "get-all-quote",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "string",
              "default": "1"
            }
          },
          {
            "name": "count",
            "in": "query",
            "schema": {
              "type": "string",
              "default": "10"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "DESC",
                "ASC"
              ]
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "invoice_no",
                "reference_no",
                "created_at",
                "invoice_date",
                "due_date"
              ]
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.is_expired",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.is_active",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.job",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_converted",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.is_proposal",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.expiry_from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.expiry_to_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.created_from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.created_to_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.estimate_from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.estimate_to_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.sold_by_user",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.status",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.estimate_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.property",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.organization",
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
          },
          {
            "name": "filter.custom_field",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.has_card_on_file",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.financing",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.tags",
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
            "name": "deposit_status",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.service_contract",
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
            "name": "filter.business_unit",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.accepted_date_from",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.accepted_date_to",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "in": "query",
            "name": "filter.sent_date_from",
            "schema": {
              "type": "string",
              "format": "date"
            },
            "required": false
          },
          {
            "in": "query",
            "name": "filter.sent_date_to",
            "schema": {
              "type": "string",
              "format": "date"
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
                          "estimate_uid": "a40c6440-a3f3-11ee-a40a-3f13070c804a",
                          "prefix": "ACQ_Showroom_Quotes",
                          "reference_no": "6023",
                          "estimate_date": "2023-12-25T18:30:00.000Z",
                          "expiry_date": "2023-12-28T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": {
                            "customer_uid": "456f6c40-a3f1-11ee-a40a-3f13070c804a",
                            "customer_first_name": "BBC",
                            "customer_last_name": "News status",
                            "customer_organization": {
                              "organization_uid": "d5e5d810-77da-11ee-b547-03a1b712b698",
                              "organization_name": "ATT",
                              "organization_logo": null,
                              "organization_description": "",
                              "organization_email": "att@mail.com",
                              "organization_address": {
                                "city": "Amarillo ",
                                "state": "Texas ",
                                "street": "U.S. Route 66, USA",
                                "country": "United States",
                                "landmark": "",
                                "geo_cordinates": [
                                  35.22182613024961,
                                  -101.80201621163941
                                ]
                              },
                              "is_active": true,
                              "is_deleted": false
                            },
                            "customer_company_name": "",
                            "customer_email": "bbc@gmail.com",
                            "customer_contact_no": {
                              "mobile": "8796584566",
                              "home": "1111122222",
                              "work": "4444444444"
                            },
                            "is_active": false,
                            "is_deleted": false
                          },
                          "organization": {
                            "organization_uid": "d5e5d810-77da-11ee-b547-03a1b712b698",
                            "organization_name": "ATT",
                            "organization_logo": null,
                            "organization_description": "",
                            "organization_email": "att@mail.com",
                            "no_of_customers": 4,
                            "organization_address": {
                              "city": "Amarillo ",
                              "state": "Texas ",
                              "street": "U.S. Route 66, USA",
                              "country": "United States",
                              "landmark": "",
                              "geo_cordinates": [
                                35.22182613024961,
                                -101.80201621163941
                              ]
                            },
                            "is_deleted": false
                          },
                          "property": null,
                          "request": null,
                          "job": null,
                          "total": 323,
                          "total_discount": 0,
                          "tags": [
                            "test",
                            "test estimate",
                            "testEstimate"
                          ],
                          "tax": [],
                          "estimate_status": "DRAFT",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "555432",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ad6a5729f0b7d12d7ce44"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "Brigade",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ad6a5729f0b7d12d7ce45"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "2023-12-26 13:30:02",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ad6a5729f0b7d12d7ce46"
                            },
                            {
                              "label": "File Input",
                              "value": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/97a4bb80-a3f3-11ee-a40a-3f13070c804a.png",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ad6a5729f0b7d12d7ce47"
                            },
                            {
                              "label": "QB Estimate ID",
                              "value": "20637",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ad6af729f0b7d12d7cee9"
                            }
                          ],
                          "deposit": {},
                          "is_expired": false,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
                            "user_uid": "50689376-6348-41dd-81e3-9d75dc73027d",
                            "first_name": "Maruthu",
                            "last_name": "Raja",
                            "email": "Maruthu@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": null,
                            "designation": "Test",
                            "emp_code": "5000",
                            "prefix": null,
                            "work_phone_number": "8220131280",
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/04a37b90-9a53-11ee-8187-39c77e7ec503.webp",
                            "hourly_labor_charge": 20,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2023-05-05T06:57:26.000Z",
                            "updated_at": "2023-12-14T07:33:04.000Z"
                          },
                          "proposal_options": [],
                          "created_at": "2023-12-26T13:35:33.232Z",
                          "updated_at": "2023-12-26T13:35:43.536Z",
                          "estimate_no": 6023,
                          "id": "undefined"
                        },
                        {
                          "estimate_uid": "cbd73880-a3e2-11ee-a40a-3f13070c804a",
                          "prefix": "ACQ_Showroom_Quotes",
                          "reference_no": "6022",
                          "estimate_date": "2023-12-25T18:30:00.000Z",
                          "expiry_date": "2023-12-28T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": {
                            "customer_uid": "73d623a0-9ffd-11ee-907b-750c1afcb3a7",
                            "customer_first_name": "(AUS) Mr Breat",
                            "customer_last_name": "Lea",
                            "customer_company_name": "",
                            "customer_email": "lea@gmail.com",
                            "customer_contact_no": {
                              "home": "7777777777"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "organization": null,
                          "property": null,
                          "job": null,
                          "total": 103,
                          "total_discount": 0,
                          "tags": [],
                          "tax": [
                            {
                              "tax_id": {
                                "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                                "tax_name": "TEST",
                                "tax_applicable_to": [],
                                "tax_rate": 3,
                                "is_local_tax": false,
                                "applicable_to": [],
                                "is_active": true
                              },
                              "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                              "tax_name": "TEST",
                              "tax_percent": 3,
                              "tax_amount": 3,
                              "_id": "658aba62729f0b7d12d6bbeb"
                            }
                          ],
                          "estimate_status": "DRAFT",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aba62729f0b7d12d6bbec"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aba62729f0b7d12d6bbed"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aba62729f0b7d12d6bbee"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aba62729f0b7d12d6bbef"
                            },
                            {
                              "label": "QB Estimate ID",
                              "value": "20635",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aba6a729f0b7d12d6bc13"
                            }
                          ],
                          "deposit": {},
                          "is_expired": false,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
                            "user_uid": "fd34c81f-61d4-4a8f-8b57-f24769b40805",
                            "first_name": "Arun Kumar",
                            "last_name": "RR",
                            "email": "arunkumar.r@zuper.co",
                            "external_login_id": "",
                            "home_phone_number": null,
                            "designation": "Admin",
                            "emp_code": "1q234",
                            "prefix": null,
                            "work_phone_number": null,
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6abdb6a0-73ef-11ee-9f45-fd0a4f512ae1.jpg",
                            "hourly_labor_charge": 20,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2023-07-28T09:49:27.000Z",
                            "updated_at": "2023-12-19T07:04:41.000Z"
                          },
                          "proposal_options": [],
                          "created_at": "2023-12-26T11:34:58.438Z",
                          "updated_at": "2023-12-26T11:35:06.079Z",
                          "estimate_no": 6022,
                          "id": "undefined"
                        },
                        {
                          "estimate_uid": "6ad9ece0-a3e1-11ee-a40a-3f13070c804a",
                          "prefix": "ACQ_Showroom_Quotes",
                          "reference_no": "6021",
                          "estimate_date": "2023-12-25T18:30:00.000Z",
                          "expiry_date": "2023-12-28T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": {
                            "customer_uid": "73d623a0-9ffd-11ee-907b-750c1afcb3a7",
                            "customer_first_name": "(AUS) Mr Breat",
                            "customer_last_name": "Lea",
                            "customer_company_name": "",
                            "customer_email": "lea@gmail.com",
                            "customer_contact_no": {
                              "home": "7777777777"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "organization": null,
                          "property": null,
                          "job": null,
                          "total": 141.4,
                          "total_discount": 0,
                          "tags": [],
                          "tax": [
                            {
                              "tax_id": {
                                "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                                "tax_name": "TEST",
                                "tax_applicable_to": [],
                                "tax_rate": 3,
                                "is_local_tax": false,
                                "applicable_to": [],
                                "is_active": true
                              },
                              "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                              "tax_name": "TEST",
                              "tax_percent": 3,
                              "tax_amount": 0,
                              "_id": "658ab812729f0b7d12d6a9f0"
                            }
                          ],
                          "estimate_status": "DRAFT",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ab812729f0b7d12d6a9f1"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ab812729f0b7d12d6a9f2"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ab812729f0b7d12d6a9f3"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ab812729f0b7d12d6a9f4"
                            },
                            {
                              "label": "QB Estimate ID",
                              "value": "20634",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658ab81b729f0b7d12d6aa1c"
                            }
                          ],
                          "deposit": {},
                          "is_expired": false,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
                            "user_uid": "fd34c81f-61d4-4a8f-8b57-f24769b40805",
                            "first_name": "Arun Kumar",
                            "last_name": "RR",
                            "email": "arunkumar.r@zuper.co",
                            "external_login_id": "",
                            "home_phone_number": null,
                            "designation": "Admin",
                            "emp_code": "1q234",
                            "prefix": null,
                            "work_phone_number": null,
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6abdb6a0-73ef-11ee-9f45-fd0a4f512ae1.jpg",
                            "hourly_labor_charge": 20,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2023-07-28T09:49:27.000Z",
                            "updated_at": "2023-12-19T07:04:41.000Z"
                          },
                          "proposal_options": [],
                          "created_at": "2023-12-26T11:25:06.277Z",
                          "updated_at": "2023-12-26T11:25:15.883Z",
                          "estimate_no": 6021,
                          "id": "undefined"
                        },
                        {
                          "estimate_uid": "aad2efa0-a3db-11ee-a40a-3f13070c804a",
                          "prefix": "ACQ_Showroom_Quotes",
                          "reference_no": "6020",
                          "estimate_date": "2023-12-25T18:30:00.000Z",
                          "expiry_date": "2023-12-28T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": {
                            "customer_uid": "73d623a0-9ffd-11ee-907b-750c1afcb3a7",
                            "customer_first_name": "(AUS) Mr Breat",
                            "customer_last_name": "Lea",
                            "customer_company_name": "",
                            "customer_email": "lea@gmail.com",
                            "customer_contact_no": {
                              "home": "7777777777"
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "organization": null,
                          "property": null,
                          "job": null,
                          "total": 1974.8,
                          "total_discount": 0,
                          "tags": [],
                          "tax": [
                            {
                              "tax_id": {
                                "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                                "tax_name": "TEST",
                                "tax_applicable_to": [],
                                "tax_rate": 3,
                                "is_local_tax": false,
                                "applicable_to": [],
                                "is_active": true
                              },
                              "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                              "tax_name": "TEST",
                              "tax_percent": 3,
                              "tax_amount": 53.4,
                              "_id": "658aae6c729f0b7d12d64de9"
                            }
                          ],
                          "estimate_status": "DRAFT",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aae6c729f0b7d12d64dea"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aae6c729f0b7d12d64deb"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aae6c729f0b7d12d64dec"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aae6c729f0b7d12d64ded"
                            },
                            {
                              "label": "QB Estimate ID",
                              "value": "20633",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658aae74729f0b7d12d64e5b"
                            }
                          ],
                          "deposit": {
                            "total": 200,
                            "status": "NOT_COLLECTED"
                          },
                          "is_expired": false,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
                            "user_uid": "fd34c81f-61d4-4a8f-8b57-f24769b40805",
                            "first_name": "Arun Kumar",
                            "last_name": "RR",
                            "email": "arunkumar.r@zuper.co",
                            "external_login_id": "",
                            "home_phone_number": null,
                            "designation": "Admin",
                            "emp_code": "1q234",
                            "prefix": null,
                            "work_phone_number": null,
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6abdb6a0-73ef-11ee-9f45-fd0a4f512ae1.jpg",
                            "hourly_labor_charge": 20,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2023-07-28T09:49:27.000Z",
                            "updated_at": "2023-12-19T07:04:41.000Z"
                          },
                          "proposal_options": [],
                          "created_at": "2023-12-26T10:43:56.574Z",
                          "updated_at": "2023-12-26T10:44:04.665Z",
                          "estimate_no": 6020,
                          "id": "undefined"
                        },
                        {
                          "estimate_uid": "1a5eff00-a3b7-11ee-a40a-3f13070c804a",
                          "prefix": "ACQ_Showroom_Quotes",
                          "reference_no": "",
                          "estimate_date": "2023-12-25T18:30:00.000Z",
                          "expiry_date": "2023-12-28T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": {
                            "customer_uid": "4516def0-1c8c-11ee-abb2-d5844d0b768f",
                            "customer_first_name": "Santhanapandian",
                            "customer_last_name": "Quick Create",
                            "customer_organization": {
                              "organization_uid": "979f59a0-1cc2-11ee-bd31-09c5f89082fa",
                              "organization_name": "Testing Org",
                              "organization_logo": "",
                              "organization_description": "",
                              "organization_email": "",
                              "organization_address": {
                                "city": "Chennai",
                                "state": "Tamil Nadu",
                                "street": "Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi",
                                "landmark": "",
                                "zip_code": "600041",
                                "geo_cordinates": [
                                  0,
                                  0
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
                            "customer_email": "santhanapandian@zuper.co",
                            "customer_contact_no": {
                              "mobile": "",
                              "home": "+1 1234",
                              "work": ""
                            },
                            "is_active": true,
                            "is_deleted": false
                          },
                          "organization": {
                            "organization_uid": "979f59a0-1cc2-11ee-bd31-09c5f89082fa",
                            "organization_name": "Testing Org",
                            "organization_logo": "",
                            "organization_description": "",
                            "organization_email": "",
                            "no_of_customers": 2,
                            "organization_address": {
                              "city": "Chennai",
                              "state": "Tamil Nadu",
                              "street": "Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi",
                              "landmark": "",
                              "zip_code": "600041",
                              "geo_cordinates": [
                                0,
                                0
                              ],
                              "first_name": "",
                              "last_name": "",
                              "phone_number": "",
                              "email": ""
                            },
                            "is_deleted": false
                          },
                          "property": null,
                          "request": null,
                          "job": null,
                          "total": 0,
                          "total_discount": null,
                          "tags": [],
                          "tax": [
                            {
                              "tax_uid": "32b0dbf0-66d6-11ee-b779-5549f3a7367a",
                              "_id": "658a7114729f0b7d12d49eb0"
                            },
                            {
                              "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                              "_id": "658a7114729f0b7d12d49eb1"
                            }
                          ],
                          "estimate_status": "DRAFT",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658a7114729f0b7d12d49eb2"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658a7114729f0b7d12d49eb3"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658a7114729f0b7d12d49eb4"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658a7114729f0b7d12d49eb5"
                            }
                          ],
                          "deposit": {},
                          "is_expired": false,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
                            "user_uid": "e9e84847-faba-4848-b5ef-16956b1dd0c0",
                            "first_name": "Marlon",
                            "last_name": "Sp",
                            "email": "marlonsp@gmail.com",
                            "external_login_id": null,
                            "home_phone_number": null,
                            "designation": "ADMIN",
                            "emp_code": "12",
                            "prefix": null,
                            "work_phone_number": null,
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg",
                            "hourly_labor_charge": 20,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2023-08-31T10:53:49.000Z",
                            "updated_at": "2023-08-31T10:53:49.000Z"
                          },
                          "proposal_options": [],
                          "created_at": "2023-12-26T06:22:12.178Z",
                          "updated_at": "2023-12-26T06:22:12.710Z",
                          "estimate_no": 6019,
                          "id": "undefined"
                        },
                        {
                          "estimate_uid": "9d0dc3b0-a0af-11ee-bb95-c34651a5686e",
                          "prefix": "ACQ_Showroom_Quotes",
                          "reference_no": "",
                          "estimate_date": "2023-12-21T18:30:00.000Z",
                          "expiry_date": "2023-12-24T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": null,
                          "organization": {
                            "organization_uid": "93c4a910-9c71-11ed-9f13-9789cec5f4f1",
                            "organization_name": "2501nithintest",
                            "organization_logo": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/b5e57d90-77c6-11ee-b547-03a1b712b698.jpeg",
                            "organization_description": "test description&nbsp;",
                            "organization_email": "2501nithintest@mail.com",
                            "no_of_customers": 31,
                            "organization_address": {
                              "city": "Chennai ",
                              "state": "Tamil Nadu ",
                              "street": "Omr, Kamaraj Nagar, Semmancheri",
                              "landmark": "org landmark",
                              "zip_code": "600119",
                              "geo_cordinates": [
                                12.8702583,
                                80.22622249999999
                              ],
                              "first_name": "orgfirst",
                              "last_name": "orglast",
                              "phone_number": "00000000044",
                              "email": "orgmail@mail.com"
                            },
                            "is_deleted": false
                          },
                          "property": {
                            "is_deleted": false,
                            "property_address": {
                              "city": "",
                              "state": "",
                              "street": "",
                              "country": "",
                              "landmark": "",
                              "zip_code": "",
                              "_id": "652ce3b459d3b79988759564"
                            },
                            "no_of_jobs": 0,
                            "property_name": "property16test11",
                            "property_uid": "2a498e80-6bf4-11ee-a7f0-af2119a61bc8"
                          },
                          "request": null,
                          "job": null,
                          "total": 3113,
                          "total_discount": null,
                          "tags": [],
                          "tax": [],
                          "estimate_status": "AWAIT_RESPONSE",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855c06ba0f5e93c8196c9f"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855c06ba0f5e93c8196ca0"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "2023-12-26 18:30:00",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855c06ba0f5e93c8196ca1"
                            },
                            {
                              "label": "File Input",
                              "value": "property custome",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855c06ba0f5e93c8196ca2"
                            }
                          ],
                          "deposit": {},
                          "is_expired": true,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
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
                            "updated_at": "2023-11-20T10:07:51.000Z"
                          },
                          "is_proposal": true,
                          "proposal_title": "teewt",
                          "proposal_options": [
                            {
                              "option_uid": "9d4686f0-a0af-11ee-bb95-c34651a5686e",
                              "option_name": "Option 1"
                            },
                            {
                              "option_uid": "9d7426a0-a0af-11ee-bb95-c34651a5686e",
                              "option_name": "Option 2"
                            }
                          ],
                          "created_at": "2023-12-22T09:51:02.694Z",
                          "updated_at": "2023-12-24T18:29:00.260Z",
                          "estimate_no": 6018,
                          "id": "undefined"
                        },
                        {
                          "estimate_uid": "e1534af0-a0ae-11ee-bb95-c34651a5686e",
                          "prefix": "ACQ_Showroom_Quotes",
                          "reference_no": "",
                          "estimate_date": "2023-12-21T18:30:00.000Z",
                          "expiry_date": "2023-12-24T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": {
                            "customer_last_name": "V33",
                            "customer_company_name": "",
                            "customer_email": "hello@sample.co",
                            "is_active": true,
                            "is_deleted": false,
                            "customer_first_name": "123",
                            "customer_organization": {
                              "organization_uid": "e741d480-77d3-11ee-b547-03a1b712b698",
                              "organization_name": "Das & Co",
                              "organization_logo": null,
                              "organization_description": null,
                              "organization_email": "j@j.com",
                              "organization_address": {
                                "city": "San Francisco",
                                "state": "California",
                                "street": "Org Service Address",
                                "landmark": "",
                                "zip_code": "94115",
                                "geo_cordinates": [
                                  0,
                                  0
                                ],
                                "first_name": "",
                                "last_name": "",
                                "phone_number": "",
                                "email": ""
                              },
                              "is_active": true,
                              "is_deleted": false
                            },
                            "customer_contact_no": {
                              "mobile": "",
                              "home": "9626720760",
                              "work": ""
                            },
                            "customer_uid": "f4415c80-058b-11ec-adaf-cbc38b630fba"
                          },
                          "organization": {
                            "organization_uid": "e741d480-77d3-11ee-b547-03a1b712b698",
                            "organization_name": "Das & Co",
                            "organization_logo": null,
                            "organization_description": null,
                            "organization_email": "j@j.com",
                            "no_of_customers": 4,
                            "organization_address": {
                              "city": "San Francisco",
                              "state": "California",
                              "street": "Org Service Address",
                              "landmark": "",
                              "zip_code": "94115",
                              "geo_cordinates": [
                                0,
                                0
                              ],
                              "first_name": "",
                              "last_name": "",
                              "phone_number": "",
                              "email": ""
                            },
                            "is_deleted": false
                          },
                          "property": null,
                          "request": {
                            "request_uid": "b2746430-a0ae-11ee-bb95-c34651a5686e",
                            "request_title": "Spare problem",
                            "request_description": "<p>Test</p>",
                            "request_priority": "LOW",
                            "request_due_date": null,
                            "request_preferred_date1": {
                              "start_time": "2023-12-25T04:30:00.000Z",
                              "end_time": "2023-12-25T14:30:00.000Z"
                            },
                            "request_preferred_date2": {
                              "start_time": "2023-12-29T04:30:00.000Z",
                              "end_time": "2023-12-29T14:30:00.000Z"
                            },
                            "request_status": {
                              "status_type": "OPEN",
                              "status_uid": "26d89664-72c0-4280-b9fb-e9f4b38f8143",
                              "status_name": "New Request",
                              "status_color": "#3498db"
                            },
                            "created_at": "2023-12-22T09:44:27.584Z",
                            "updated_at": "2023-12-22T12:29:55.862Z",
                            "request_id": 300
                          },
                          "job": null,
                          "total": 0,
                          "total_discount": null,
                          "tags": [],
                          "tax": [
                            {
                              "tax_uid": "32b0dbf0-66d6-11ee-b779-5549f3a7367a",
                              "_id": "65855acbba0f5e93c81962f6"
                            },
                            {
                              "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                              "_id": "65855acbba0f5e93c81962f7"
                            }
                          ],
                          "estimate_status": "AWAIT_RESPONSE",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855acbba0f5e93c81962f8"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855acbba0f5e93c81962f9"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855acbba0f5e93c81962fa"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855acbba0f5e93c81962fb"
                            },
                            {
                              "label": "Text Input",
                              "value": "test",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Request new group",
                              "group_uid": "a3be7540-7d39-11ee-8171-2bfb257e2710",
                              "_id": "65855a7bba0f5e93c81960f0"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855a7bba0f5e93c81960f1"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Request new group",
                              "group_uid": "a3be7540-7d39-11ee-8171-2bfb257e2710",
                              "_id": "65855a7bba0f5e93c81960f2"
                            },
                            {
                              "label": "Text Area",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Request new group",
                              "group_uid": "a3be7540-7d39-11ee-8171-2bfb257e2710",
                              "_id": "65855a7bba0f5e93c81960f3"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855a7bba0f5e93c81960f5"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855a7bba0f5e93c81960f6"
                            },
                            {
                              "label": "Radio",
                              "value": "",
                              "type": "RADIO",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855a7bba0f5e93c81960f7"
                            },
                            {
                              "label": "Select",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855a7bba0f5e93c81960f9"
                            },
                            {
                              "label": "LookUp",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855a7bba0f5e93c81960fa"
                            }
                          ],
                          "deposit": {},
                          "is_expired": true,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
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
                            "updated_at": "2023-11-20T10:07:51.000Z"
                          },
                          "proposal_options": [],
                          "created_at": "2023-12-22T09:45:47.250Z",
                          "updated_at": "2023-12-24T18:29:00.260Z",
                          "estimate_no": 6017,
                          "id": "undefined"
                        },
                        {
                          "estimate_uid": "b2478f30-a0ab-11ee-bb95-c34651a5686e",
                          "prefix": "ACQ_Showroom_Quotes",
                          "reference_no": "",
                          "estimate_date": "2023-12-21T18:30:00.000Z",
                          "expiry_date": "2023-12-24T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": {
                            "customer_uid": "33849d60-6d7e-11ee-ad52-fb5442a7fc06",
                            "customer_first_name": "1 Arlenecccc",
                            "customer_last_name": "1 Klusman IOS",
                            "customer_company_name": "",
                            "customer_email": "kulasekaran.zuper@gmail.com1",
                            "is_active": true,
                            "is_deleted": false,
                            "customer_organization": {
                              "organization_uid": "5f5c6810-850b-11ee-88b5-cb1fb2c3a479",
                              "organization_name": "Create Test 1",
                              "organization_description": "Sample",
                              "organization_email": "testmail@mail.com",
                              "organization_address": {
                                "street": "test",
                                "email": "testmail@mail.com"
                              },
                              "is_active": true,
                              "is_deleted": false
                            },
                            "customer_contact_no": {
                              "mobile": "",
                              "home": "",
                              "work": ""
                            }
                          },
                          "organization": {
                            "organization_uid": "5f5c6810-850b-11ee-88b5-cb1fb2c3a479",
                            "organization_name": "Create Test 1",
                            "organization_description": "Sample",
                            "organization_email": "testmail@mail.com",
                            "no_of_customers": 2,
                            "organization_address": {
                              "street": "test",
                              "email": "testmail@mail.com"
                            },
                            "is_deleted": false
                          },
                          "property": null,
                          "request": {
                            "request_uid": "a494e220-a0a6-11ee-bb95-c34651a5686e",
                            "request_title": "Nokia phone repair",
                            "request_description": null,
                            "request_priority": "LOW",
                            "request_due_date": null,
                            "request_preferred_date1": {
                              "start_time": "2023-12-28T04:30:00.000Z",
                              "end_time": "2023-12-28T06:30:00.000Z"
                            },
                            "request_preferred_date2": {
                              "start_time": null,
                              "end_time": null
                            },
                            "request_status": {
                              "status_type": "ON_HOLD",
                              "status_uid": "cb578b8f-3b32-45d0-8d4f-8573000605b6",
                              "status_name": "Jobs | On Hold Status Request",
                              "status_color": "#ec27dc"
                            },
                            "created_at": "2023-12-22T08:46:48.291Z",
                            "updated_at": "2023-12-22T08:47:53.686Z",
                            "request_id": 299
                          },
                          "job": null,
                          "total": 0,
                          "total_discount": null,
                          "tags": [],
                          "tax": [
                            {
                              "tax_uid": "32b0dbf0-66d6-11ee-b779-5549f3a7367a",
                              "_id": "65855574ba0f5e93c8193c02"
                            },
                            {
                              "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                              "_id": "65855574ba0f5e93c8193c03"
                            }
                          ],
                          "estimate_status": "ARCHIVED",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855574ba0f5e93c8193c04"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855574ba0f5e93c8193c05"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855574ba0f5e93c8193c06"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65855574ba0f5e93c8193c07"
                            },
                            {
                              "label": "Text Input",
                              "value": "test",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Request new group",
                              "group_uid": "a3be7540-7d39-11ee-8171-2bfb257e2710",
                              "_id": "65854cf8ba0f5e93c818fff8"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65854cf8ba0f5e93c818fff9"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Request new group",
                              "group_uid": "a3be7540-7d39-11ee-8171-2bfb257e2710",
                              "_id": "65854cf8ba0f5e93c818fffa"
                            },
                            {
                              "label": "Text Area",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Request new group",
                              "group_uid": "a3be7540-7d39-11ee-8171-2bfb257e2710",
                              "_id": "65854cf8ba0f5e93c818fffb"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65854cf8ba0f5e93c818fffd"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65854cf8ba0f5e93c818fffe"
                            },
                            {
                              "label": "Radio",
                              "value": "",
                              "type": "RADIO",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65854cf8ba0f5e93c818ffff"
                            },
                            {
                              "label": "Select",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65854cf8ba0f5e93c8190001"
                            },
                            {
                              "label": "LookUp",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "65854cf8ba0f5e93c8190002"
                            }
                          ],
                          "deposit": {},
                          "is_expired": true,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
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
                            "updated_at": "2023-11-20T10:07:51.000Z"
                          },
                          "proposal_options": [],
                          "created_at": "2023-12-22T09:23:00.155Z",
                          "updated_at": "2023-12-24T18:29:00.278Z",
                          "estimate_no": 6016,
                          "id": "undefined"
                        },
                        {
                          "estimate_uid": "a34b7300-a076-11ee-87ff-b5d65a85d9cd",
                          "prefix": "ACQ_Showroom_Quotes",
                          "estimate_date": "2023-12-21T18:30:00.000Z",
                          "expiry_date": "2023-12-24T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": {
                            "customer_last_name": "Blake",
                            "customer_company_name": "",
                            "customer_email": "seshamadhav1998@gmail.com1",
                            "is_active": true,
                            "is_deleted": false,
                            "customer_first_name": "Sesha",
                            "customer_uid": "2b7913c0-fd8e-11ea-abaf-7fac6d852c15",
                            "customer_contact_no": {
                              "mobile": "9994706475",
                              "home": "",
                              "work": ""
                            },
                            "customer_organization": {
                              "organization_uid": "0d64ea00-c793-11ec-bad4-49ff3910afe4",
                              "organization_name": "Sesha Test",
                              "organization_address": {
                                "city": "Chennai ",
                                "state": "Tamil Nadu ",
                                "street": "SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar",
                                "landmark": "",
                                "geo_cordinates": [
                                  13.0494706,
                                  80.2452214
                                ]
                              },
                              "is_active": false,
                              "is_deleted": false,
                              "organization_email": "seshamadhav1998@gmail.com",
                              "organization_description": "Test",
                              "organization_logo": null
                            }
                          },
                          "organization": {
                            "organization_uid": "0d64ea00-c793-11ec-bad4-49ff3910afe4",
                            "organization_name": "Sesha Test",
                            "no_of_customers": 4,
                            "organization_address": {
                              "city": "Chennai ",
                              "state": "Tamil Nadu ",
                              "street": "SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar",
                              "landmark": "",
                              "geo_cordinates": [
                                13.0494706,
                                80.2452214
                              ]
                            },
                            "is_deleted": false,
                            "organization_email": "seshamadhav1998@gmail.com",
                            "organization_description": "Test",
                            "organization_logo": null
                          },
                          "property": null,
                          "job": {
                            "job_uid": "7af635e0-3517-11ee-9476-2b23ad35d032",
                            "prefix": "#Q3_0001",
                            "job_title": "Testing 123",
                            "work_order_number": 12021,
                            "job_priority": "LOW",
                            "scheduled_start_time": "2023-09-11T11:45:00.000Z",
                            "scheduled_end_time": "2023-09-11T14:45:00.000Z",
                            "is_deleted": false
                          },
                          "total": 3905.1,
                          "total_discount": null,
                          "tags": [],
                          "tax": [],
                          "estimate_status": "ARCHIVED",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6584fc70b7c9fc1c59b0f452"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "",
                              "type": "MULTI_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6584fc70b7c9fc1c59b0f453"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6584fc70b7c9fc1c59b0f454"
                            },
                            {
                              "label": "File Input",
                              "value": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/c93086a0-6473-11ec-ac20-bb01e9a572a2.png",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "6584fc70b7c9fc1c59b0f455"
                            }
                          ],
                          "deposit": {
                            "total": 200,
                            "status": "NOT_COLLECTED"
                          },
                          "is_expired": true,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
                            "user_uid": "ab6d4ab2-19ee-4093-9995-025fa9f78273",
                            "first_name": "Sesha",
                            "last_name": "Madhav",
                            "email": "sesha@zuper.co",
                            "external_login_id": null,
                            "home_phone_number": null,
                            "designation": "Tech",
                            "emp_code": "2030303",
                            "prefix": null,
                            "work_phone_number": "9883733222",
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg",
                            "hourly_labor_charge": 120,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2020-05-09T04:52:02.000Z",
                            "updated_at": "2022-07-28T10:21:40.000Z"
                          },
                          "is_proposal": true,
                          "proposal_title": "Test",
                          "proposal_options": [
                            {
                              "option_uid": "a3935170-a076-11ee-87ff-b5d65a85d9cd",
                              "option_name": "Option Job"
                            },
                            {
                              "option_uid": "a3b35c90-a076-11ee-87ff-b5d65a85d9cd",
                              "option_name": "Option 1"
                            },
                            {
                              "option_uid": "a3dc8f70-a076-11ee-87ff-b5d65a85d9cd",
                              "option_name": "Option 2"
                            }
                          ],
                          "created_at": "2023-12-22T03:03:12.917Z",
                          "updated_at": "2023-12-24T18:29:00.144Z",
                          "estimate_no": 6015,
                          "id": "undefined"
                        },
                        {
                          "estimate_uid": "d86385c0-9ffc-11ee-907b-750c1afcb3a7",
                          "prefix": "ACQ_Showroom_Quotes",
                          "reference_no": "",
                          "estimate_date": "2023-12-20T18:30:00.000Z",
                          "expiry_date": "2023-12-23T18:29:00.000Z",
                          "accepted_date": "2025-01-06T18:29:00.000Z",
                          "sent_date": "2025-01-05T18:29:00.000Z",
                          "customer": null,
                          "organization": null,
                          "property": null,
                          "request": null,
                          "job": null,
                          "total": 7238.7,
                          "total_discount": null,
                          "tags": [],
                          "tax": [
                            {
                              "tax_uid": "32b0dbf0-66d6-11ee-b779-5549f3a7367a",
                              "_id": "658430187276954d89e385ca"
                            },
                            {
                              "tax_uid": "5390efd0-6c13-11ee-89ed-1f56d0dbb4fe",
                              "_id": "658430187276954d89e385cb"
                            }
                          ],
                          "estimate_status": "ARCHIVED",
                          "custom_fields": [
                            {
                              "label": "Quatation Reference Number",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658430187276954d89e385cc"
                            },
                            {
                              "label": "Quote multiline",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658430187276954d89e385cd"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658430187276954d89e385ce"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "658430187276954d89e385cf"
                            }
                          ],
                          "deposit": {},
                          "is_expired": true,
                          "is_converted": false,
                          "is_deleted": false,
                          "is_active": true,
                          "created_by": {
                            "user_uid": "e9e84847-faba-4848-b5ef-16956b1dd0c0",
                            "first_name": "Marlon",
                            "last_name": "Sp",
                            "email": "marlonsp@gmail.com",
                            "external_login_id": null,
                            "home_phone_number": null,
                            "designation": "ADMIN",
                            "emp_code": "12",
                            "prefix": null,
                            "work_phone_number": null,
                            "mobile_phone_number": null,
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg",
                            "hourly_labor_charge": 20,
                            "is_active": true,
                            "is_deleted": false,
                            "created_at": "2023-08-31T10:53:49.000Z",
                            "updated_at": "2023-08-31T10:53:49.000Z"
                          },
                          "is_proposal": true,
                          "proposal_title": "Proposal Testing",
                          "proposal_options": [
                            {
                              "option_uid": "d8890f20-9ffc-11ee-907b-750c1afcb3a7",
                              "option_name": "Package 1"
                            }
                          ],
                          "created_at": "2023-12-21T12:31:20.883Z",
                          "updated_at": "2023-12-23T18:29:00.491Z",
                          "estimate_no": 6014,
                          "id": "undefined"
                        }
                      ],
                      "total_records": 6146,
                      "current_page": 1,
                      "total_pages": 615
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
                          "estimate_uid": {
                            "type": "string",
                            "example": "a40c6440-a3f3-11ee-a40a-3f13070c804a"
                          },
                          "prefix": {
                            "type": "string",
                            "example": "ACQ_Showroom_Quotes"
                          },
                          "reference_no": {
                            "type": "string",
                            "example": "6023"
                          },
                          "estimate_date": {
                            "type": "string",
                            "example": "2023-12-25T18:30:00.000Z"
                          },
                          "expiry_date": {
                            "type": "string",
                            "example": "2023-12-28T18:29:00.000Z"
                          },
                          "customer": {
                            "type": "object",
                            "properties": {
                              "customer_uid": {
                                "type": "string",
                                "example": "456f6c40-a3f1-11ee-a40a-3f13070c804a"
                              },
                              "customer_first_name": {
                                "type": "string",
                                "example": "BBC"
                              },
                              "customer_last_name": {
                                "type": "string",
                                "example": "News status"
                              },
                              "customer_organization": {
                                "type": "object",
                                "properties": {
                                  "organization_uid": {
                                    "type": "string",
                                    "example": "d5e5d810-77da-11ee-b547-03a1b712b698"
                                  },
                                  "organization_name": {
                                    "type": "string",
                                    "example": "ATT"
                                  },
                                  "organization_logo": {},
                                  "organization_description": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "organization_email": {
                                    "type": "string",
                                    "example": "att@mail.com"
                                  },
                                  "organization_address": {
                                    "type": "object",
                                    "properties": {
                                      "city": {
                                        "type": "string",
                                        "example": "Amarillo "
                                      },
                                      "state": {
                                        "type": "string",
                                        "example": "Texas "
                                      },
                                      "street": {
                                        "type": "string",
                                        "example": "U.S. Route 66, USA"
                                      },
                                      "country": {
                                        "type": "string",
                                        "example": "United States"
                                      },
                                      "landmark": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "geo_cordinates": {
                                        "type": "array",
                                        "items": {
                                          "type": "number",
                                          "example": 35.2218261302496,
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
                              "customer_company_name": {
                                "type": "string",
                                "example": ""
                              },
                              "customer_email": {
                                "type": "string",
                                "example": "bbc@gmail.com"
                              },
                              "customer_contact_no": {
                                "type": "object",
                                "properties": {
                                  "mobile": {
                                    "type": "string",
                                    "example": "8796584566"
                                  },
                                  "home": {
                                    "type": "string",
                                    "example": "1111122222"
                                  },
                                  "work": {
                                    "type": "string",
                                    "example": "4444444444"
                                  }
                                }
                              },
                              "is_active": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "organization": {
                            "type": "object",
                            "properties": {
                              "organization_uid": {
                                "type": "string",
                                "example": "d5e5d810-77da-11ee-b547-03a1b712b698"
                              },
                              "organization_name": {
                                "type": "string",
                                "example": "ATT"
                              },
                              "organization_logo": {},
                              "organization_description": {
                                "type": "string",
                                "example": ""
                              },
                              "organization_email": {
                                "type": "string",
                                "example": "att@mail.com"
                              },
                              "no_of_customers": {
                                "type": "integer",
                                "example": 4,
                                "default": 0
                              },
                              "organization_address": {
                                "type": "object",
                                "properties": {
                                  "city": {
                                    "type": "string",
                                    "example": "Amarillo "
                                  },
                                  "state": {
                                    "type": "string",
                                    "example": "Texas "
                                  },
                                  "street": {
                                    "type": "string",
                                    "example": "U.S. Route 66, USA"
                                  },
                                  "country": {
                                    "type": "string",
                                    "example": "United States"
                                  },
                                  "landmark": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "geo_cordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "number",
                                      "example": 35.2218261302496,
                                      "default": 0
                                    }
                                  }
                                }
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "property": {},
                          "request": {},
                          "job": {},
                          "total": {
                            "type": "integer",
                            "example": 323,
                            "default": 0
                          },
                          "total_discount": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "tags": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "example": "test"
                            }
                          },
                          "tax": {
                            "type": "array"
                          },
                          "estimate_status": {
                            "type": "string",
                            "example": "DRAFT"
                          },
                          "custom_fields": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "example": "Quatation Reference Number"
                                },
                                "value": {
                                  "type": "string",
                                  "example": "555432"
                                },
                                "type": {
                                  "type": "string",
                                  "example": "SINGLE_LINE"
                                },
                                "module_name": {
                                  "type": "string",
                                  "example": "PRODUCT"
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
                                  "example": "658ad6a5729f0b7d12d7ce44"
                                }
                              }
                            }
                          },
                          "deposit": {
                            "type": "object",
                            "properties": {}
                          },
                          "is_expired": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "is_converted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "is_active": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "50689376-6348-41dd-81e3-9d75dc73027d"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Maruthu"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Raja"
                              },
                              "email": {
                                "type": "string",
                                "example": "Maruthu@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Test"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "5000"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "8220131280"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/04a37b90-9a53-11ee-8187-39c77e7ec503.webp"
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
                                "example": "2023-05-05T06:57:26.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-12-14T07:33:04.000Z"
                              }
                            }
                          },
                          "sold_by_user": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "50689376-6348-41dd-81e3-9d75dc73027d"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Maruthu"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Raja"
                              },
                              "email": {
                                "type": "string",
                                "example": "Maruthu@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Test"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "5000"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "8220131280"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/04a37b90-9a53-11ee-8187-39c77e7ec503.webp"
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
                                "example": "2023-05-05T06:57:26.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-12-14T07:33:04.000Z"
                              }
                            }
                          },
                          "proposal_options": {
                            "type": "array"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-12-26T13:35:33.232Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-12-26T13:35:43.536Z"
                          },
                          "estimate_no": {
                            "type": "integer",
                            "example": 6023,
                            "default": 0
                          },
                          "id": {
                            "type": "string",
                            "example": "undefined"
                          },
                          "accepted_date": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "sent_date": {
                            "type": "string",
                            "format": "date-time"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 6146,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 615,
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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