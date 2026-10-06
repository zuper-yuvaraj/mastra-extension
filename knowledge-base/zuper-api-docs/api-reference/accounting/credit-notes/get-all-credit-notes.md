---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Credit Notes

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
    "/accounting/credit_notes": {
      "get": {
        "summary": "Get All Credit Notes",
        "description": "",
        "operationId": "get-all-credit-notes",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "count",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "default": "DESC"
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "created_at",
                "credit_note_date"
              ],
              "default": "created_at"
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "Keyword search for credit_note_number and remarks",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer_uid",
            "in": "query",
            "description": "Filter by customers",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.status",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "UNAPPLIED",
                "PARTIALLY_APPLIED",
                "APPLIED"
              ]
            }
          },
          {
            "name": "filter.from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.end_date",
            "in": "query",
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"credit_note_uid\": \"d2100749-3f19-4442-ae3a-219cd64b0e87\",\n      \"credit_note_date\": \"2025-04-18T00:00:00.000Z\",\n      \"module_name\": \"INVOICE\",\n      \"total_amount\": 31.4,\n      \"remaining_amount\": 31.4,\n      \"used_amount\": 0,\n      \"remarks\": null,\n      \"status\": \"UNAPPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"4c80fba6-ee19-47ce-9058-51479308f2\",\n        \"first_name\": \"Jayasoorya\",\n        \"last_name\": \"R\",\n        \"email\": \"jayasoorya.r@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"SE\",\n        \"emp_code\": \"Z311\",\n        \"prefix\": \"Z22\",\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-06-12T08:55:40.000Z\",\n        \"updated_at\": \"2025-04-18T03:52:42.000Z\"\n      },\n      \"payment_method\": null,\n      \"created_at\": \"2025-04-18T04:16:59.848Z\",\n      \"updated_at\": \"2025-04-18T04:16:59.856Z\",\n      \"credit_note_number\": 333,\n      \"module_data\": {\n        \"invoice_uid\": \"40313fa4-d035-4a8b-a4be-fa89cc7e5af1\",\n        \"invoice_date\": \"2025-04-15T18:30:00.000Z\",\n        \"invoice_status\": \"PARTIALLY_PAID\",\n        \"is_deleted\": false,\n        \"created_at\": \"2025-04-16T12:16:21.089Z\",\n        \"updated_at\": \"2025-04-18T04:16:59.938Z\",\n        \"invoice_no\": 8155\n      }\n    },\n    {\n      \"credit_note_uid\": \"5307e1d6-30d7-455c-ade6-a512cfb8beb8\",\n      \"credit_note_date\": \"2025-04-18T00:00:00.000Z\",\n      \"total_amount\": 11,\n      \"remaining_amount\": 11,\n      \"used_amount\": 0,\n      \"remarks\": null,\n      \"status\": \"UNAPPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"4c80fba6-ee19-47ce-9058-51479308f2\",\n        \"first_name\": \"Jayasoorya\",\n        \"last_name\": \"R\",\n        \"email\": \"jayasoorya.r@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"SE\",\n        \"emp_code\": \"Z311\",\n        \"prefix\": \"Z22\",\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-06-12T08:55:40.000Z\",\n        \"updated_at\": \"2025-04-18T03:52:42.000Z\"\n      },\n      \"payment_method\": null,\n      \"created_at\": \"2025-04-18T04:14:21.986Z\",\n      \"updated_at\": \"2025-04-18T04:14:21.991Z\",\n      \"credit_note_number\": 332,\n      \"module_data\": null\n    },\n    {\n      \"credit_note_uid\": \"c8b1c7c7-bc62-4360-a459-4a2d7a09a630\",\n      \"credit_note_date\": \"2025-04-18T00:00:00.000Z\",\n      \"total_amount\": 1,\n      \"remaining_amount\": 1,\n      \"used_amount\": 0,\n      \"remarks\": \"1\",\n      \"status\": \"UNAPPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"4c80fba6-ee19-47ce-9058-51479308f2\",\n        \"first_name\": \"Jayasoorya\",\n        \"last_name\": \"R\",\n        \"email\": \"jayasoorya.r@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"SE\",\n        \"emp_code\": \"Z311\",\n        \"prefix\": \"Z22\",\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-06-12T08:55:40.000Z\",\n        \"updated_at\": \"2025-04-18T03:52:42.000Z\"\n      },\n      \"payment_method\": null,\n      \"created_at\": \"2025-04-18T04:05:19.352Z\",\n      \"updated_at\": \"2025-04-18T04:05:19.357Z\",\n      \"credit_note_number\": 331,\n      \"module_data\": null\n    },\n    {\n      \"credit_note_uid\": \"f50f2272-3337-4c9f-aa0a-fdd98edb0a24\",\n      \"credit_note_date\": \"2025-03-31T00:00:00.000Z\",\n      \"total_amount\": 100,\n      \"remaining_amount\": 100,\n      \"used_amount\": 0,\n      \"remarks\": null,\n      \"status\": \"UNAPPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"64c55f0b-8348-4617-9535-d6fc163737\",\n        \"first_name\": \"Bharath\",\n        \"last_name\": \"T\",\n        \"email\": \"bharath.t@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"ADMIN\",\n        \"emp_code\": \"BH\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": null,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-09-03T11:58:40.000Z\",\n        \"updated_at\": \"2025-04-16T06:44:43.000Z\"\n      },\n      \"payment_method\": {\n        \"payment_mode_uid\": \"d83a5bda-76bc-4dec-862c-d37162bde66e\",\n        \"payment_mode_name\": \"Google Pay\",\n        \"payment_mode_type\": \"ONLINE\",\n        \"payment_mode_description\": \"Google Pay\",\n        \"is_deleted\": false\n      },\n      \"created_at\": \"2025-04-17T12:26:37.939Z\",\n      \"updated_at\": \"2025-04-17T12:26:37.940Z\",\n      \"credit_note_number\": 330,\n      \"module_data\": null\n    },\n    {\n      \"credit_note_uid\": \"8f618585-347f-4d53-baff-18ba2dfa0ab3\",\n      \"credit_note_date\": \"2025-04-15T00:00:00.000Z\",\n      \"total_amount\": 100,\n      \"remaining_amount\": 100,\n      \"used_amount\": 0,\n      \"remarks\": null,\n      \"status\": \"UNAPPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"64c55f0b-8348-4617-9535-d6fc163737\",\n        \"first_name\": \"Bharath\",\n        \"last_name\": \"T\",\n        \"email\": \"bharath.t@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"ADMIN\",\n        \"emp_code\": \"BH\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": null,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-09-03T11:58:40.000Z\",\n        \"updated_at\": \"2025-04-16T06:44:43.000Z\"\n      },\n      \"payment_method\": {\n        \"payment_mode_uid\": \"98efbf53-b9b8-48ac-815d-2e01fb077fed\",\n        \"payment_mode_name\": \"Wisestack\",\n        \"payment_mode_type\": \"FINANCE\",\n        \"payment_mode_description\": \"Wisestack\",\n        \"is_deleted\": false\n      },\n      \"created_at\": \"2025-04-17T12:17:01.854Z\",\n      \"updated_at\": \"2025-04-17T12:17:01.856Z\",\n      \"credit_note_number\": 329,\n      \"module_data\": null\n    },\n    {\n      \"credit_note_uid\": \"b22e48b9-ecfc-4d86-96ca-be1bd298fa1d\",\n      \"credit_note_date\": \"2025-04-17T00:00:00.000Z\",\n      \"module_name\": \"INVOICE\",\n      \"total_amount\": 214,\n      \"remaining_amount\": 214,\n      \"used_amount\": 0,\n      \"remarks\": \"Credit Refund for invoice #8209\",\n      \"status\": \"UNAPPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"4c80fba6-ee19-47ce-9058-51479308f2\",\n        \"first_name\": \"Jayasoorya\",\n        \"last_name\": \"R\",\n        \"email\": \"jayasoorya.r@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"SE\",\n        \"emp_code\": \"Z311\",\n        \"prefix\": \"Z22\",\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-06-12T08:55:40.000Z\",\n        \"updated_at\": \"2025-04-18T03:52:42.000Z\"\n      },\n      \"payment_method\": null,\n      \"created_at\": \"2025-04-17T12:01:37.161Z\",\n      \"updated_at\": \"2025-04-17T12:01:37.161Z\",\n      \"credit_note_number\": 328,\n      \"module_data\": {\n        \"invoice_uid\": \"4de5a8a8-8a03-4c45-a834-ad07891acbbb\",\n        \"invoice_date\": \"2025-04-16T18:30:00.000Z\",\n        \"invoice_status\": \"AWAIT_PAYMENT\",\n        \"is_deleted\": false,\n        \"created_at\": \"2025-04-17T09:25:34.860Z\",\n        \"updated_at\": \"2025-04-17T17:40:26.494Z\",\n        \"invoice_no\": 8209\n      }\n    },\n    {\n      \"credit_note_uid\": \"63f266e5-679d-44a4-b90c-bd2206796526\",\n      \"credit_note_date\": \"2025-03-31T00:00:00.000Z\",\n      \"total_amount\": 1000,\n      \"remaining_amount\": 900,\n      \"used_amount\": 100,\n      \"remarks\": \"Money refunded\",\n      \"status\": \"PARTIALLY_APPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"64c55f0b-8348-4617-9535-d6fc163737\",\n        \"first_name\": \"Bharath\",\n        \"last_name\": \"T\",\n        \"email\": \"bharath.t@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"ADMIN\",\n        \"emp_code\": \"BH\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": null,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-09-03T11:58:40.000Z\",\n        \"updated_at\": \"2025-04-16T06:44:43.000Z\"\n      },\n      \"payment_method\": {\n        \"payment_mode_uid\": \"da5ecf9a-32d0-4af9-970d-e89ce9718f1f\",\n        \"payment_mode_name\": \"Customer Credit\",\n        \"payment_mode_type\": \"ONLINE\",\n        \"payment_mode_description\": \"using customer credit\",\n        \"is_deleted\": false\n      },\n      \"created_at\": \"2025-04-17T11:48:54.276Z\",\n      \"updated_at\": \"2025-04-17T11:48:54.277Z\",\n      \"credit_note_number\": 327,\n      \"module_data\": null\n    },\n    {\n      \"credit_note_uid\": \"d5fc6c42-448f-42e3-a4c1-ed1340a89980\",\n      \"credit_note_date\": \"2025-04-15T00:00:00.000Z\",\n      \"total_amount\": 1000,\n      \"remaining_amount\": 1000,\n      \"used_amount\": 0,\n      \"remarks\": null,\n      \"status\": \"UNAPPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"ccd2c2be-7b00-41ad-a7be-d6fc163737\",\n        \"first_name\": \"Akash\",\n        \"last_name\": \"Raj\",\n        \"email\": \"akashraj@zuper.co\",\n        \"external_login_id\": \"zuper-trainingg\",\n        \"home_phone_number\": null,\n        \"designation\": \"FE\",\n        \"emp_code\": \"1235\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-01-09T12:33:36.000Z\",\n        \"updated_at\": \"2025-04-17T11:02:08.000Z\"\n      },\n      \"payment_method\": {\n        \"payment_mode_uid\": \"602ac297-66b4-4aff-b950-ea78db7861a4\",\n        \"payment_mode_name\": \"LazyPay\",\n        \"payment_mode_type\": \"ONLINE\",\n        \"payment_mode_description\": \"Pay Now, Settle Later\",\n        \"is_deleted\": false\n      },\n      \"created_at\": \"2025-04-17T11:38:24.268Z\",\n      \"updated_at\": \"2025-04-17T11:38:24.269Z\",\n      \"credit_note_number\": 326,\n      \"module_data\": null\n    },\n    {\n      \"credit_note_uid\": \"3af796ad-4457-4a2d-b40e-cfa5b60421b7\",\n      \"credit_note_date\": \"2025-04-17T00:00:00.000Z\",\n      \"total_amount\": 100,\n      \"remaining_amount\": 0,\n      \"used_amount\": 100,\n      \"remarks\": \"Easy Money\",\n      \"status\": \"APPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"64c55f0b-8348-4617-9535-d6fc163737\",\n        \"first_name\": \"Bharath\",\n        \"last_name\": \"T\",\n        \"email\": \"bharath.t@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"ADMIN\",\n        \"emp_code\": \"BH\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": null,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-09-03T11:58:40.000Z\",\n        \"updated_at\": \"2025-04-16T06:44:43.000Z\"\n      },\n      \"payment_method\": {\n        \"payment_mode_uid\": \"453aa754-701a-46cc-87c9-e0a6efb549ba\",\n        \"payment_mode_name\": \"Gold Coins\",\n        \"payment_mode_type\": \"OFFLINE\",\n        \"payment_mode_description\": \"Gold Coins\",\n        \"is_deleted\": false\n      },\n      \"created_at\": \"2025-04-17T10:57:05.784Z\",\n      \"updated_at\": \"2025-04-17T10:57:05.787Z\",\n      \"credit_note_number\": 320,\n      \"module_data\": null\n    },\n    {\n      \"credit_note_uid\": \"466755f7-33d1-4e52-a3dc-5677b90a33af\",\n      \"credit_note_date\": \"2025-04-16T18:30:00.000Z\",\n      \"module_name\": \"INVOICE\",\n      \"total_amount\": 999.21,\n      \"remaining_amount\": 999.21,\n      \"used_amount\": 0,\n      \"remarks\": \"Refund\",\n      \"status\": \"UNAPPLIED\",\n      \"created_by\": {\n        \"user_uid\": \"4c80fba6-ee19-47ce-9058-51479308f2\",\n        \"first_name\": \"Jayasoorya\",\n        \"last_name\": \"R\",\n        \"email\": \"jayasoorya.r@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"SE\",\n        \"emp_code\": \"Z311\",\n        \"prefix\": \"Z22\",\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-06-12T08:55:40.000Z\",\n        \"updated_at\": \"2025-04-18T03:52:42.000Z\"\n      },\n      \"payment_method\": null,\n      \"created_at\": \"2025-04-17T06:53:08.157Z\",\n      \"updated_at\": \"2025-04-17T06:53:08.165Z\",\n      \"credit_note_number\": 309,\n      \"module_data\": {\n        \"invoice_uid\": \"c660ebbc-4acd-46f3-bb7e-d89d029ac70b\",\n        \"invoice_date\": \"2025-04-14T18:30:00.000Z\",\n        \"prefix\": \"\",\n        \"invoice_status\": \"PAID\",\n        \"is_deleted\": false,\n        \"created_at\": \"2025-04-15T13:23:33.917Z\",\n        \"updated_at\": \"2025-04-17T07:46:39.179Z\",\n        \"invoice_no\": 8119\n      }\n    }\n  ],\n  \"total_remaining_credit_amounts\": 28456200.2637,\n  \"total_records\": 250,\n  \"current_page\": 1,\n  \"total_pages\": 25\n}"
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
                          "credit_note_uid": {
                            "type": "string",
                            "example": "d2100749-3f19-4442-ae3a-219cd64b0e87"
                          },
                          "credit_note_date": {
                            "type": "string",
                            "example": "2025-04-18T00:00:00.000Z"
                          },
                          "module_name": {
                            "type": "string",
                            "example": "INVOICE"
                          },
                          "total_amount": {
                            "type": "number",
                            "example": 31.4,
                            "default": 0
                          },
                          "remaining_amount": {
                            "type": "number",
                            "example": 31.4,
                            "default": 0
                          },
                          "used_amount": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "remarks": {},
                          "status": {
                            "type": "string",
                            "example": "UNAPPLIED"
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "4c80fba6-ee19-47ce-9058-51479308f2"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Jayasoorya"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "R"
                              },
                              "email": {
                                "type": "string",
                                "example": "jayasoorya.r@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "SE"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z311"
                              },
                              "prefix": {
                                "type": "string",
                                "example": "Z22"
                              },
                              "work_phone_number": {},
                              "mobile_phone_number": {},
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
                                "example": "2024-06-12T08:55:40.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2025-04-18T03:52:42.000Z"
                              }
                            }
                          },
                          "payment_method": {},
                          "created_at": {
                            "type": "string",
                            "example": "2025-04-18T04:16:59.848Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2025-04-18T04:16:59.856Z"
                          },
                          "credit_note_number": {
                            "type": "integer",
                            "example": 333,
                            "default": 0
                          },
                          "module_data": {
                            "type": "object",
                            "properties": {
                              "invoice_uid": {
                                "type": "string",
                                "example": "40313fa4-d035-4a8b-a4be-fa89cc7e5af1"
                              },
                              "invoice_date": {
                                "type": "string",
                                "example": "2025-04-15T18:30:00.000Z"
                              },
                              "invoice_status": {
                                "type": "string",
                                "example": "PARTIALLY_PAID"
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2025-04-16T12:16:21.089Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2025-04-18T04:16:59.938Z"
                              },
                              "invoice_no": {
                                "type": "integer",
                                "example": 8155,
                                "default": 0
                              }
                            }
                          }
                        }
                      }
                    },
                    "total_remaining_credit_amounts": {
                      "type": "number",
                      "example": 28456200.2637,
                      "default": 0
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 250,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 25,
                      "default": 0
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
                    "value": "{\n\ttype:\"error\",\n  title:\"Error in getting credit notes\",\n\tmessage:\"\",\n\tdata:\"\"\n}"
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