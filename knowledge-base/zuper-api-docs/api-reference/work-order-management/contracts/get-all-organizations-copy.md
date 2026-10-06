---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Service Contracts

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
    "/service_contract": {
      "get": {
        "summary": "Get Service Contracts",
        "description": "",
        "operationId": "get-all-organizations-copy",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Page number to fetch",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "count",
            "in": "query",
            "description": "Number of contracts in the page",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "Sort order",
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
            "name": "sort_by",
            "in": "query",
            "description": "Sort type",
            "schema": {
              "type": "string",
              "enum": [
                "contract_number",
                "end_date",
                "created_at"
              ],
              "default": "contract_number"
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "Keyword search based on Service Contracts name,number,ref_no,customer address,billing address and email",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_active",
            "in": "query",
            "description": "Filter by active contracts",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "description": "Filter by deleted contracts",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.custom_field",
            "in": "query",
            "description": "Filter by contract's custom field",
            "schema": {
              "properties": {},
              "type": "object"
            }
          },
          {
            "name": "filter.organization_uid",
            "in": "query",
            "description": "Filter by organization uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "description": "Filter by contract updated date from",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "description": "Filter by contract updated date to",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.is_expired",
            "in": "query",
            "description": "Filter by contract's expire status",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.approval_status",
            "in": "query",
            "description": "Filter by approval status",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.contract_total_from",
            "in": "query",
            "description": "Filter by contract total amount",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "filter.contract_total_to",
            "in": "query",
            "description": "Filter by contract total amount",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "filter.await_approval_by",
            "in": "query",
            "description": "Filter by approver",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer",
            "in": "query",
            "description": "Filter by customer uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.end_from",
            "in": "query",
            "description": "Filter by contract end from",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.end_to",
            "in": "query",
            "description": "Filter by Contract end to",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.asset",
            "in": "query",
            "description": "Filter by asset uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at",
            "in": "query",
            "description": "Filter by contract updated date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.contract_uid",
            "in": "query",
            "description": "Filter by contract uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.expiring_fd",
            "in": "query",
            "description": "Filter by expiring from date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.expiring_td",
            "in": "query",
            "description": "Filter by expiring to date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.property",
            "in": "query",
            "description": "Filter by property uids",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"contract_uid\": \"32bc6a40-6f11-11ee-ab23-f576be9f85df\",\n            \"customer\": {\n                \"customer_uid\": \"bcf539f0-b75e-11ed-8a0f-090f81fad31e\",\n                \"customer_first_name\": \"velmurugan\",\n                \"customer_last_name\": \"k\",\n                \"customer_company_name\": \"\",\n                \"customer_email\": \"velmurugan.k@zuper.co\",\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"customer_contact_no\": {\n                    \"mobile\": \"+91303030303030\"\n                }\n            },\n            \"organization\": {\n                \"is_deleted\": false,\n                \"organization_address\": {\n                    \"city\": \"Chennai \",\n                    \"state\": \"Tamil Nadu \",\n                    \"street\": \"Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi\",\n                    \"country\": \"India\",\n                    \"landmark\": \"\",\n                    \"zip_code\": \"600041\",\n                    \"geo_cordinates\": [\n                        12.9733389,\n                        80.2508572\n                    ],\n                    \"first_name\": \"Org\",\n                    \"last_name\": \"SC\",\n                    \"phone_number\": \"8220131280\",\n                    \"email\": \"orgsc@abc.com\"\n                },\n                \"organization_name\": \"Ascendas\",\n                \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg\",\n                \"organization_email\": \"zupertest23@gmail.com\",\n                \"organization_description\": null,\n                \"organization_uid\": \"11d86a70-8212-11eb-ab1f-1ddf213d24b4\",\n                \"no_of_customers\": 58\n            },\n            \"ref_no\": \"SC01\",\n            \"contract_name\": \"CFM Basic\",\n            \"start_date\": \"2023-10-23T04:30:00.000Z\",\n            \"end_date\": \"2024-10-22T18:29:00.000Z\",\n            \"term_months\": 12,\n            \"activation_date\": \"2024-01-01T04:30:00.000Z\",\n            \"approval_status\": \"AWAIT_CUSTOMER_APPROVAL\",\n            \"await_approval_by\": {},\n            \"custom_fields\": [\n                {\n                    \"label\": \"Dealer\",\n                    \"value\": \"Test\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c8140e\"\n                },\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c8140f\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"11:51:00\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c81410\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"tt\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c81411\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"value one\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c81412\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"2023-10-20\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c81413\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-10-20 06:22:00\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c81414\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"value two\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c81415\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"value two\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c81416\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65321ce7e9dc3086d6c81417\"\n                },\n                {\n                    \"label\": \"Test Contract\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c81418\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c81419\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c8141a\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c8141b\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c8141c\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c8141d\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c8141e\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c8141f\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c81420\"\n                },\n                {\n                    \"label\": \"LookUp\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Contract Custom\",\n                    \"group_uid\": \"c7a630d0-8b52-11ed-a63c-7d46adaa7b2c\",\n                    \"_id\": \"65321ce7e9dc3086d6c81421\"\n                }\n            ],\n            \"invoice_settings\": {\n                \"auto_generate\": false,\n                \"billing_period\": {\n                    \"billing_period_uid\": \"e675db30-02ae-11ea-af45-bd1d48d9fadb\",\n                    \"billing_period_name\": \"Quarterly\",\n                    \"billing_period_type\": \"MONTHS\",\n                    \"billing_period_value\": 3,\n                    \"is_deleted\": false,\n                    \"is_active\": true\n                },\n                \"generate_invoice_days\": 2,\n                \"payment_term\": {\n                    \"payment_term_name\": \"ten day term\",\n                    \"no_of_days\": 10,\n                    \"payment_term_uid\": \"75afa880-db9f-11e9-a35c-3301ecc1dbf7\"\n                },\n                \"invoice_template\": \"5d83217cd32c2f2e7d78bab3\",\n                \"send_to_customer\": false\n            },\n            \"contract_subtotal\": 306,\n            \"contract_total\": 306,\n            \"created_by\": {\n                \"user_uid\": \"c425fe39-2309-4d2b-87b8-5b4b65546ccb\",\n                \"first_name\": \"Velmurugan\",\n                \"last_name\": \"K\",\n                \"email\": \"velmurugan.k@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z111\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-11-02T10:35:52.000Z\",\n                \"updated_at\": \"2023-01-23T09:20:16.000Z\"\n            },\n            \"is_active\": true,\n            \"is_expired\": false,\n            \"is_deleted\": false,\n            \"created_at\": \"2023-10-20T06:23:35.623Z\",\n            \"updated_at\": \"2023-10-20T07:02:41.950Z\",\n            \"contract_number\": 868,\n            \"id\": \"undefined\"\n        }\n     ],\n    \"total_records\": 397,\n    \"current_page\": 1,\n    \"total_pages\": 40\n}"
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
                          "contract_uid": {
                            "type": "string",
                            "example": "32bc6a40-6f11-11ee-ab23-f576be9f85df"
                          },
                          "customer": {
                            "type": "object",
                            "properties": {
                              "customer_uid": {
                                "type": "string",
                                "example": "bcf539f0-b75e-11ed-8a0f-090f81fad31e"
                              },
                              "customer_first_name": {
                                "type": "string",
                                "example": "velmurugan"
                              },
                              "customer_last_name": {
                                "type": "string",
                                "example": "k"
                              },
                              "customer_company_name": {
                                "type": "string",
                                "example": ""
                              },
                              "customer_email": {
                                "type": "string",
                                "example": "velmurugan.k@zuper.co"
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
                              "customer_contact_no": {
                                "type": "object",
                                "properties": {
                                  "mobile": {
                                    "type": "string",
                                    "example": "+91303030303030"
                                  }
                                }
                              }
                            }
                          },
                          "organization": {
                            "type": "object",
                            "properties": {
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
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
                                    "example": "Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi"
                                  },
                                  "country": {
                                    "type": "string",
                                    "example": "India"
                                  },
                                  "landmark": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "zip_code": {
                                    "type": "string",
                                    "example": "600041"
                                  },
                                  "geo_cordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "number",
                                      "example": 12.9733389,
                                      "default": 0
                                    }
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Org"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "SC"
                                  },
                                  "phone_number": {
                                    "type": "string",
                                    "example": "8220131280"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "orgsc@abc.com"
                                  }
                                }
                              },
                              "organization_name": {
                                "type": "string",
                                "example": "Ascendas"
                              },
                              "organization_logo": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg"
                              },
                              "organization_email": {
                                "type": "string",
                                "example": "zupertest23@gmail.com"
                              },
                              "organization_description": {},
                              "organization_uid": {
                                "type": "string",
                                "example": "11d86a70-8212-11eb-ab1f-1ddf213d24b4"
                              },
                              "no_of_customers": {
                                "type": "integer",
                                "example": 58,
                                "default": 0
                              }
                            }
                          },
                          "ref_no": {
                            "type": "string",
                            "example": "SC01"
                          },
                          "contract_name": {
                            "type": "string",
                            "example": "CFM Basic"
                          },
                          "start_date": {
                            "type": "string",
                            "example": "2023-10-23T04:30:00.000Z"
                          },
                          "end_date": {
                            "type": "string",
                            "example": "2024-10-22T18:29:00.000Z"
                          },
                          "term_months": {
                            "type": "integer",
                            "example": 12,
                            "default": 0
                          },
                          "activation_date": {
                            "type": "string",
                            "example": "2024-01-01T04:30:00.000Z"
                          },
                          "approval_status": {
                            "type": "string",
                            "example": "AWAIT_CUSTOMER_APPROVAL"
                          },
                          "await_approval_by": {
                            "type": "object",
                            "properties": {}
                          },
                          "custom_fields": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "example": "Dealer"
                                },
                                "value": {
                                  "type": "string",
                                  "example": "Test"
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
                                  "example": "65321ce7e9dc3086d6c8140e"
                                }
                              }
                            }
                          },
                          "invoice_settings": {
                            "type": "object",
                            "properties": {
                              "auto_generate": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "billing_period": {
                                "type": "object",
                                "properties": {
                                  "billing_period_uid": {
                                    "type": "string",
                                    "example": "e675db30-02ae-11ea-af45-bd1d48d9fadb"
                                  },
                                  "billing_period_name": {
                                    "type": "string",
                                    "example": "Quarterly"
                                  },
                                  "billing_period_type": {
                                    "type": "string",
                                    "example": "MONTHS"
                                  },
                                  "billing_period_value": {
                                    "type": "integer",
                                    "example": 3,
                                    "default": 0
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
                                  }
                                }
                              },
                              "generate_invoice_days": {
                                "type": "integer",
                                "example": 2,
                                "default": 0
                              },
                              "payment_term": {
                                "type": "object",
                                "properties": {
                                  "payment_term_name": {
                                    "type": "string",
                                    "example": "ten day term"
                                  },
                                  "no_of_days": {
                                    "type": "integer",
                                    "example": 10,
                                    "default": 0
                                  },
                                  "payment_term_uid": {
                                    "type": "string",
                                    "example": "75afa880-db9f-11e9-a35c-3301ecc1dbf7"
                                  }
                                }
                              },
                              "invoice_template": {
                                "type": "string",
                                "example": "5d83217cd32c2f2e7d78bab3"
                              },
                              "send_to_customer": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "contract_subtotal": {
                            "type": "integer",
                            "example": 306,
                            "default": 0
                          },
                          "contract_total": {
                            "type": "integer",
                            "example": 306,
                            "default": 0
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "c425fe39-2309-4d2b-87b8-5b4b65546ccb"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Velmurugan"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "K"
                              },
                              "email": {
                                "type": "string",
                                "example": "velmurugan.k@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z111"
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
                                "example": "2022-11-02T10:35:52.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-01-23T09:20:16.000Z"
                              }
                            }
                          },
                          "is_active": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "is_expired": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-10-20T06:23:35.623Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-10-20T07:02:41.950Z"
                          },
                          "contract_number": {
                            "type": "integer",
                            "example": 868,
                            "default": 0
                          },
                          "id": {
                            "type": "string",
                            "example": "undefined"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 397,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 40,
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
                    "value": "{\n      \"message\": \"\",\n      \"title\": \"\",\n      \"type\": \"\"\n }"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "type": {
                      "type": "string",
                      "example": ""
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
                    "value": "{\n      \"type\": \"\",\n      \"message\": \"\",\n      \"title\": \"\",\n      \"data\": \"\"\n }"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "data": {
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