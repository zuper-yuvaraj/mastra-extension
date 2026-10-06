---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get all Invoice

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
    "/invoice": {
      "get": {
        "summary": "Get all Invoice",
        "description": "",
        "operationId": "get-all-invoices",
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
            "name": "filter.is_paid",
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
            "name": "filter.estimate",
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
            "name": "filter.payment_term",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.payment_mode",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.due_from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.due_to_date",
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
            "name": "filter.invoice_from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.invoice_to_date",
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
              "type": "string",
              "enum": [
                "DRAFT",
                "AWAIT_PAYMENT",
                "PARTIALLY_PAID",
                "PAID",
                "BAD_DEBT",
                "ARCHIVED",
                "CLOSED",
                "CANCELED",
                "READY_TO_INVOICE"
              ]
            }
          },
          {
            "name": "filter.invoice_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.over_due",
            "in": "query",
            "schema": {
              "type": "boolean"
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
              "type": "boolean"
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
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"invoice_uid\": \"a53a5920-9a80-11ee-8a1f-49ba020888f8\",\n      \"invoice_date\": \"2023-12-13T18:30:00.000Z\",\n      \"due_date\": \"2024-02-12T18:29:59.000Z\",\n      \"customer\": {\n        \"customer_uid\": \"35279010-93bd-11ec-b675-b9a129ac10eb\",\n        \"customer_first_name\": \"Santhanapandian\",\n        \"customer_last_name\": \"\",\n        \"customer_organization\": {\n          \"is_deleted\": false,\n          \"is_active\": true,\n          \"organization_billing_address\": {\n            \"city\": \"Chennai\",\n            \"state\": \"Tamil Nadu\",\n            \"street\": \"Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India\",\n            \"landmark\": \"\",\n            \"_id\": \"6464bdc1eb32d67c9816b3d1\"\n          },\n          \"organization_address\": {\n            \"city\": \"Chennai\",\n            \"state\": \"Tamil Nadu\",\n            \"street\": \"Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India\",\n            \"landmark\": \"\",\n            \"geo_cordinates\": [\n              12.9733389,\n              80.2508572\n            ],\n            \"_id\": \"6464bdc1eb32d67c9816b3d2\"\n          },\n          \"organization_email\": null,\n          \"organization_description\": \"<p>Test Org Desc</p>\",\n          \"organization_logo\": null,\n          \"organization_name\": \"TEST ORG 0005\",\n          \"organization_uid\": \"becf61e0-b9b3-11ed-b623-1b22cc5dd28b\"\n        },\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"santhanapandian@zuper.co\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"customer_contact_no\": {\n          \"mobile\": \"9000932246\",\n          \"home\": \"9000932245\",\n          \"work\": \"\"\n        }\n      },\n      \"organization\": {\n        \"is_deleted\": false,\n        \"organization_billing_address\": {\n          \"city\": \"Chennai\",\n          \"state\": \"Tamil Nadu\",\n          \"street\": \"Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India\",\n          \"landmark\": \"\",\n          \"_id\": \"6464bdc1eb32d67c9816b3d1\"\n        },\n        \"organization_address\": {\n          \"city\": \"Chennai\",\n          \"state\": \"Tamil Nadu\",\n          \"street\": \"Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India\",\n          \"landmark\": \"\",\n          \"geo_cordinates\": [\n            12.9733389,\n            80.2508572\n          ],\n          \"_id\": \"6464bdc1eb32d67c9816b3d2\"\n        },\n        \"no_of_customers\": 4,\n        \"organization_email\": null,\n        \"organization_description\": \"<p>Test Org Desc</p>\",\n        \"organization_logo\": null,\n        \"organization_name\": \"TEST ORG 0005\",\n        \"organization_uid\": \"becf61e0-b9b3-11ed-b623-1b22cc5dd28b\"\n      },\n      \"property\": {\n        \"is_deleted\": false,\n        \"property_address\": {\n          \"city\": \"Bengaluru \",\n          \"state\": \"Karnataka \",\n          \"street\": \"Whitefield Main Road Pattandur Agrahara \",\n          \"country\": \"India\",\n          \"landmark\": \"Whitefield Bus stop\",\n          \"zip_code\": \"560066\",\n          \"geo_cordinates\": [\n            12.9874885,\n            77.736655\n          ],\n          \"_id\": \"64e4c0dc7c0c9e18fa178bac\"\n        },\n        \"property_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/361cf1c0-7d59-11eb-8302-750c30d4731b.jpg\",\n        \"no_of_jobs\": 80,\n        \"property_name\": \"Ascendas IT Park\",\n        \"property_uid\": \"6b33fd30-7d5a-11eb-8302-750c30d4731b\"\n      },\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"total\": 0,\n      \"tags\": [],\n      \"invoice_status\": \"PAID\",\n      \"custom_fields\": [],\n      \"service_contract\": {\n        \"contract_uid\": \"f1ae7dc0-a091-11ed-9cee-1d71b5cbf00e\",\n        \"ref_no\": \"\",\n        \"contract_name\": \"Contract\",\n        \"description\": \"<p>Contract Test</p>\",\n        \"start_date\": \"2023-01-31T18:30:00.000Z\",\n        \"end_date\": \"2024-01-31T18:29:59.000Z\",\n        \"is_deleted\": false,\n        \"contract_number\": 680\n      },\n      \"is_paid\": true,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"15e00bfa-fbcb-4d46-a7c1-c7b5910441c0\",\n        \"first_name\": \"Marlon\",\n        \"last_name\": \"S A\",\n        \"email\": \"santhanapandian@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Admin\",\n        \"emp_code\": \"Z082\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/80c94b80-20b1-11ee-9dcd-affe7f3e9b1d.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2022-02-22T06:03:54.000Z\",\n        \"updated_at\": \"2023-11-17T07:14:24.000Z\"\n      },\n      \"financing\": {\n        \"is_enabled\": true,\n        \"promo_message\": null\n      },\n      \"created_at\": \"2023-12-14T12:59:41.441Z\",\n      \"updated_at\": \"2023-12-14T13:07:29.582Z\",\n      \"invoice_no\": 4175,\n      \"id\": \"undefined\"\n    },\n    {\n      \"invoice_uid\": \"d509e580-9990-11ee-b319-e95620cd511d\",\n      \"reference_no\": \"1000\",\n      \"invoice_date\": \"2023-12-12T18:30:00.000Z\",\n      \"due_date\": \"2024-02-11T18:29:00.000Z\",\n      \"customer\": {\n        \"customer_uid\": \"8dbaa870-ccc4-11ed-9c4e-85c56d09fc18\",\n        \"customer_first_name\": \"test\",\n        \"customer_last_name\": \"krishna\",\n        \"customer_organization\": {\n          \"organization_uid\": \"d341ee20-b730-11ed-bf35-1d708e57cb5f\",\n          \"organization_name\": \"Address Check\",\n          \"organization_logo\": null,\n          \"organization_description\": \"<p>Test</p>\",\n          \"organization_email\": \"Org@zy.co\",\n          \"organization_address\": {\n            \"city\": \"Chennai\",\n            \"state\": \"Tamil Nadu\",\n            \"street\": \"SKCL Harmony Tower, Gangai Karai Puram, T. Nagar, India\",\n            \"landmark\": \"\",\n            \"geo_cordinates\": [\n              13.0494258,\n              80.2451968\n            ],\n            \"first_name\": \"\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"organization_billing_address\": {\n            \"city\": \"Chennai\",\n            \"state\": \"Tamil Nadu\",\n            \"street\": \"SKCL Harmony Tower, Gangai Karai Puram, T. Nagar, India\",\n            \"landmark\": \"\",\n            \"geo_cordinates\": [\n              13.0494258,\n              80.2451968\n            ],\n            \"first_name\": \"\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        },\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"j@j.com\",\n        \"customer_contact_no\": {\n          \"mobile\": \"sdfsdfd\",\n          \"home\": \"sdfdsfs\",\n          \"work\": \"sdfsdfsd\"\n        },\n        \"is_active\": true,\n        \"is_deleted\": false\n      },\n      \"organization\": {\n        \"organization_uid\": \"d341ee20-b730-11ed-bf35-1d708e57cb5f\",\n        \"organization_name\": \"Address Check\",\n        \"organization_logo\": null,\n        \"organization_description\": \"<p>Test</p>\",\n        \"organization_email\": \"Org@zy.co\",\n        \"no_of_customers\": 3,\n        \"organization_address\": {\n          \"city\": \"Chennai\",\n          \"state\": \"Tamil Nadu\",\n          \"street\": \"SKCL Harmony Tower, Gangai Karai Puram, T. Nagar, India\",\n          \"landmark\": \"\",\n          \"geo_cordinates\": [\n            13.0494258,\n            80.2451968\n          ],\n          \"first_name\": \"\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\"\n        },\n        \"organization_billing_address\": {\n          \"city\": \"Chennai\",\n          \"state\": \"Tamil Nadu\",\n          \"street\": \"SKCL Harmony Tower, Gangai Karai Puram, T. Nagar, India\",\n          \"landmark\": \"\",\n          \"geo_cordinates\": [\n            13.0494258,\n            80.2451968\n          ],\n          \"first_name\": \"\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\"\n        },\n        \"is_deleted\": false\n      },\n      \"property\": null,\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"estimate\": {\n        \"estimate_uid\": \"9bd85850-ff8a-11ed-9041-3dc554a0f8f9\",\n        \"prefix\": \"##\",\n        \"reference_no\": \"\",\n        \"estimate_date\": \"2023-05-31T08:09:32.000Z\",\n        \"expiry_date\": \"2023-06-10T08:09:32.000Z\",\n        \"estimate_status\": \"APPROVED\",\n        \"is_deleted\": false,\n        \"estimate_no\": 3834\n      },\n      \"job\": {\n        \"job_uid\": \"5da77790-df74-11ed-bbe6-97fd04d886da\",\n        \"prefix\": \"Q1-2023\",\n        \"job_title\": \"roue test\",\n        \"job_priority\": \"LOW\",\n        \"is_deleted\": false,\n        \"work_order_number\": 9110,\n        \"scheduled_end_time\": \"2023-05-02T06:39:00.000Z\",\n        \"scheduled_start_time\": \"2023-05-01T23:30:00.000Z\"\n      },\n      \"total\": 10800,\n      \"tags\": [\n        \"Invoice test tag\"\n      ],\n      \"invoice_status\": \"AWAIT_PAYMENT\",\n      \"custom_fields\": [\n        {\n          \"label\": \"Invoice Reference Number\",\n          \"value\": \"1234567\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"657969e9962229845cc864ce\"\n        }\n      ],\n      \"is_paid\": false,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"d083c6cb-9202-41fc-8ae2-e986939c5471\",\n        \"first_name\": \"Jerin\",\n        \"last_name\": \"Aj\",\n        \"email\": \"jerin@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Admin\",\n        \"emp_code\": \"J001\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9f1e58b0-5396-11ee-af3b-ed82d39ae946.jpg\",\n        \"hourly_labor_charge\": 54.59,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2022-02-16T10:00:42.000Z\",\n        \"updated_at\": \"2023-09-15T07:08:08.000Z\"\n      },\n      \"financing\": {\n        \"promo_message\": \"From $234.28/month based on a price of $10800.00 at 10.90% annual percentage rate (APR) for 60 months. Rates from 0% to 35.9%.*\",\n        \"is_enabled\": true\n      },\n      \"created_at\": \"2023-12-13T08:23:05.754Z\",\n      \"updated_at\": \"2023-12-13T10:30:28.830Z\",\n      \"invoice_no\": 4174,\n      \"id\": \"undefined\"\n    },\n    {\n      \"invoice_uid\": \"47a0ec20-9986-11ee-b32e-037519165e96\",\n      \"invoice_date\": \"2023-12-12T18:30:00.000Z\",\n      \"due_date\": \"2024-02-11T18:29:00.000Z\",\n      \"customer\": null,\n      \"organization\": {\n        \"organization_uid\": \"93ccf640-9984-11ee-b32e-037519165e96\",\n        \"organization_name\": \"Dec 13 Validation\",\n        \"organization_logo\": null,\n        \"organization_description\": null,\n        \"organization_email\": null,\n        \"no_of_customers\": 1,\n        \"organization_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Valasaravakkam\",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600087\",\n          \"geo_cordinates\": [\n            13.0402725,\n            80.1722913\n          ]\n        },\n        \"organization_billing_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Valasaravakkam\",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600087\",\n          \"geo_cordinates\": [\n            13.0402725,\n            80.1722913\n          ]\n        },\n        \"is_deleted\": false\n      },\n      \"property\": null,\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"estimate\": null,\n      \"job\": null,\n      \"total\": 0,\n      \"tags\": [],\n      \"invoice_status\": \"AWAIT_PAYMENT\",\n      \"custom_fields\": [\n        {\n          \"label\": \"Invoice Reference Number\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"65795834531042ca22270e07\"\n        }\n      ],\n      \"is_paid\": false,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"ab6d4ab2-19ee-4093-9995-025fa9f78273\",\n        \"first_name\": \"Sesha\",\n        \"last_name\": \"Madhav\",\n        \"email\": \"sesha@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Tech\",\n        \"emp_code\": \"2030303\",\n        \"prefix\": null,\n        \"work_phone_number\": \"9883733222\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2020-05-09T04:52:02.000Z\",\n        \"updated_at\": \"2022-07-28T10:21:40.000Z\"\n      },\n      \"financing\": {\n        \"is_enabled\": false\n      },\n      \"created_at\": \"2023-12-13T07:07:32.076Z\",\n      \"updated_at\": \"2023-12-13T07:07:42.400Z\",\n      \"invoice_no\": 4173,\n      \"id\": \"undefined\"\n    },\n    {\n      \"invoice_uid\": \"18d7fe60-9986-11ee-b32e-037519165e96\",\n      \"invoice_date\": \"2023-11-30T18:30:00.000Z\",\n      \"due_date\": \"2024-01-30T23:59:00.000Z\",\n      \"customer\": {\n        \"customer_uid\": \"54501010-9984-11ee-b32e-037519165e96\",\n        \"customer_first_name\": \"Dec 13 validation\",\n        \"customer_last_name\": \"\",\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"testzuper@yopmail.com\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"customer_organization\": {\n          \"organization_uid\": \"93ccf640-9984-11ee-b32e-037519165e96\",\n          \"organization_name\": \"Dec 13 Validation\",\n          \"organization_logo\": null,\n          \"organization_description\": null,\n          \"organization_email\": null,\n          \"organization_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Valasaravakkam\",\n            \"country\": \"India\",\n            \"landmark\": \"\",\n            \"zip_code\": \"600087\",\n            \"geo_cordinates\": [\n              13.0402725,\n              80.1722913\n            ]\n          },\n          \"organization_billing_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Valasaravakkam\",\n            \"country\": \"India\",\n            \"landmark\": \"\",\n            \"zip_code\": \"600087\",\n            \"geo_cordinates\": [\n              13.0402725,\n              80.1722913\n            ]\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        },\n        \"customer_contact_no\": null\n      },\n      \"organization\": {\n        \"organization_uid\": \"93ccf640-9984-11ee-b32e-037519165e96\",\n        \"organization_name\": \"Dec 13 Validation\",\n        \"organization_logo\": null,\n        \"organization_description\": null,\n        \"organization_email\": null,\n        \"no_of_customers\": 1,\n        \"organization_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Valasaravakkam\",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600087\",\n          \"geo_cordinates\": [\n            13.0402725,\n            80.1722913\n          ]\n        },\n        \"organization_billing_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Valasaravakkam\",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600087\",\n          \"geo_cordinates\": [\n            13.0402725,\n            80.1722913\n          ]\n        },\n        \"is_deleted\": false\n      },\n      \"property\": null,\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"estimate\": null,\n      \"job\": null,\n      \"total\": 1780,\n      \"tags\": [],\n      \"invoice_status\": \"AWAIT_PAYMENT\",\n      \"custom_fields\": [\n        {\n          \"label\": \"Invoice Reference Number\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"657958fc531042ca2227a570\"\n        }\n      ],\n      \"is_paid\": false,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"ab6d4ab2-19ee-4093-9995-025fa9f78273\",\n        \"first_name\": \"Sesha\",\n        \"last_name\": \"Madhav\",\n        \"email\": \"sesha@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Tech\",\n        \"emp_code\": \"2030303\",\n        \"prefix\": null,\n        \"work_phone_number\": \"9883733222\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2020-05-09T04:52:02.000Z\",\n        \"updated_at\": \"2022-07-28T10:21:40.000Z\"\n      },\n      \"financing\": {\n        \"is_enabled\": true,\n        \"promo_message\": \"From $81.24/month based on a price of $1780.00 at 8.90% annual percentage rate (APR) for 24 months. Rates from 0% to 35.9%.*\"\n      },\n      \"created_at\": \"2023-12-13T07:06:15.506Z\",\n      \"updated_at\": \"2023-12-13T07:12:46.240Z\",\n      \"invoice_no\": 4172,\n      \"id\": \"undefined\"\n    },\n    {\n      \"invoice_uid\": \"03fcd120-95ba-11ee-98bc-e77b9b7b972c\",\n      \"invoice_date\": \"2023-12-07T18:30:00.000Z\",\n      \"due_date\": \"2024-02-06T18:29:00.000Z\",\n      \"customer\": {\n        \"customer_last_name\": \"Blake\",\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"seshamadhav1998@gmail.com1\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"customer_first_name\": \"Sesha\",\n        \"customer_uid\": \"2b7913c0-fd8e-11ea-abaf-7fac6d852c15\",\n        \"customer_contact_no\": {\n          \"mobile\": \"9994706475\",\n          \"home\": \"\",\n          \"work\": \"\"\n        },\n        \"customer_organization\": {\n          \"organization_uid\": \"0d64ea00-c793-11ec-bad4-49ff3910afe4\",\n          \"organization_name\": \"Sesha Test\",\n          \"organization_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar\",\n            \"landmark\": \"\",\n            \"geo_cordinates\": [\n              13.0494706,\n              80.2452214\n            ]\n          },\n          \"organization_billing_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar\",\n            \"landmark\": \"\",\n            \"geo_cordinates\": [\n              13.0494706,\n              80.2452214\n            ]\n          },\n          \"is_active\": false,\n          \"is_deleted\": false,\n          \"organization_email\": \"seshamadhav1998@gmail.com\",\n          \"organization_description\": \"Test\",\n          \"organization_logo\": null\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"0d64ea00-c793-11ec-bad4-49ff3910afe4\",\n        \"organization_name\": \"Sesha Test\",\n        \"no_of_customers\": 4,\n        \"organization_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar\",\n          \"landmark\": \"\",\n          \"geo_cordinates\": [\n            13.0494706,\n            80.2452214\n          ]\n        },\n        \"organization_billing_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar\",\n          \"landmark\": \"\",\n          \"geo_cordinates\": [\n            13.0494706,\n            80.2452214\n          ]\n        },\n        \"is_deleted\": false,\n        \"organization_email\": \"seshamadhav1998@gmail.com\",\n        \"organization_description\": \"Test\",\n        \"organization_logo\": null\n      },\n      \"property\": null,\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"estimate\": null,\n      \"job\": null,\n      \"total\": 0,\n      \"tags\": [],\n      \"invoice_status\": \"DRAFT\",\n      \"custom_fields\": [\n        {\n          \"label\": \"Invoice Reference Number\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"6572f9034f8b4c2fa33ad8cc\"\n        }\n      ],\n      \"is_paid\": false,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"ab6d4ab2-19ee-4093-9995-025fa9f78273\",\n        \"first_name\": \"Sesha\",\n        \"last_name\": \"Madhav\",\n        \"email\": \"sesha@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Tech\",\n        \"emp_code\": \"2030303\",\n        \"prefix\": null,\n        \"work_phone_number\": \"9883733222\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2020-05-09T04:52:02.000Z\",\n        \"updated_at\": \"2022-07-28T10:21:40.000Z\"\n      },\n      \"financing\": {\n        \"is_enabled\": false,\n        \"promo_message\": null\n      },\n      \"created_at\": \"2023-12-08T11:07:47.801Z\",\n      \"updated_at\": \"2023-12-08T11:07:47.888Z\",\n      \"invoice_no\": 4171,\n      \"id\": \"undefined\"\n    },\n    {\n      \"invoice_uid\": \"28e0f4a0-95b3-11ee-98bc-e77b9b7b972c\",\n      \"reference_no\": \"\",\n      \"invoice_date\": \"2023-12-07T18:30:00.000Z\",\n      \"due_date\": \"2024-02-06T18:29:00.000Z\",\n      \"customer\": {\n        \"customer_uid\": \"68303f30-5067-11ee-8b57-95482c1cd01c\",\n        \"customer_first_name\": \"Lavanya\",\n        \"customer_last_name\": \"G\",\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"lavanya.g@zuper.co\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"customer_organization\": {\n          \"organization_uid\": \"4cb510d0-5b9a-11ee-b665-fff525290acf\",\n          \"organization_name\": \"Ranson Electric Vehicle Company\",\n          \"organization_logo\": null,\n          \"organization_description\": null,\n          \"organization_email\": null,\n          \"organization_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n            \"country\": \"India\",\n            \"landmark\": \"\",\n            \"zip_code\": \"600041\",\n            \"geo_cordinates\": [\n              12.9729537,\n              80.2512351\n            ],\n            \"first_name\": \"Lavanya\",\n            \"last_name\": \"govindd\"\n          },\n          \"organization_billing_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n            \"country\": \"India\",\n            \"landmark\": \"\",\n            \"zip_code\": \"600041\",\n            \"geo_cordinates\": [\n              12.9729537,\n              80.2512351\n            ],\n            \"first_name\": \"Lavanya\",\n            \"last_name\": \"govindd\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        },\n        \"customer_contact_no\": {\n          \"mobile\": \"\",\n          \"home\": \"\",\n          \"work\": \"\"\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"4cb510d0-5b9a-11ee-b665-fff525290acf\",\n        \"organization_name\": \"Ranson Electric Vehicle Company\",\n        \"organization_logo\": null,\n        \"organization_description\": null,\n        \"organization_email\": null,\n        \"no_of_customers\": 1,\n        \"organization_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600041\",\n          \"geo_cordinates\": [\n            12.9729537,\n            80.2512351\n          ],\n          \"first_name\": \"Lavanya\",\n          \"last_name\": \"govindd\"\n        },\n        \"organization_billing_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600041\",\n          \"geo_cordinates\": [\n            12.9729537,\n            80.2512351\n          ],\n          \"first_name\": \"Lavanya\",\n          \"last_name\": \"govindd\"\n        },\n        \"is_deleted\": false\n      },\n      \"property\": null,\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"estimate\": null,\n      \"job\": {\n        \"job_uid\": \"7c93f850-95b7-11ee-98bc-e77b9b7b972c\",\n        \"job_title\": \"Visit for Lavanya G\",\n        \"job_priority\": \"LOW\",\n        \"is_deleted\": false,\n        \"work_order_number\": 14332\n      },\n      \"total\": 2076.9,\n      \"tags\": [],\n      \"invoice_status\": \"AWAIT_PAYMENT\",\n      \"custom_fields\": [\n        {\n          \"label\": \"Invoice Reference Number\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"6572ed844f8b4c2fa339eedf\"\n        }\n      ],\n      \"is_paid\": false,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"57a967fe-30c1-41a6-a4e5-5a04f5b8c936\",\n        \"first_name\": \"Lavanya\",\n        \"last_name\": \"G\",\n        \"email\": \"lavanya.g@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Admin\",\n        \"emp_code\": \"Z200\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2023-09-08T07:13:05.000Z\",\n        \"updated_at\": \"2023-09-08T07:13:05.000Z\"\n      },\n      \"financing\": {\n        \"promo_message\": \"From $94.79/month based on a price of $2076.90 at 8.90% annual percentage rate (APR) for 24 months. Rates from 0% to 35.9%.*\",\n        \"is_enabled\": true\n      },\n      \"created_at\": \"2023-12-08T10:18:44.376Z\",\n      \"updated_at\": \"2023-12-08T10:49:40.985Z\",\n      \"invoice_no\": 4170,\n      \"id\": \"undefined\"\n    },\n    {\n      \"invoice_uid\": \"a31bf2b0-95ae-11ee-98bc-e77b9b7b972c\",\n      \"reference_no\": \"12121212121\",\n      \"invoice_date\": \"2023-12-07T18:30:00.000Z\",\n      \"due_date\": \"2024-02-06T18:29:00.000Z\",\n      \"customer\": {\n        \"customer_uid\": \"8860b9f0-9e0c-11ed-afcd-e3289b5f2d85\",\n        \"customer_first_name\": \"35956585754515352505 Anand Jino\",\n        \"customer_last_name\": \"Zuper\",\n        \"customer_organization\": {\n          \"organization_uid\": \"bc14ec50-68f8-11ee-a8d5-f53a2c9a4252\",\n          \"organization_name\": \"Ahimsa Entertaimment\",\n          \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/eff2bf00-68fa-11ee-a8d5-f53a2c9a4252.jpeg\",\n          \"organization_description\": \"Test\",\n          \"organization_email\": \"Test\",\n          \"organization_address\": {\n            \"city\": \"San Francisco\",\n            \"state\": \"California\",\n            \"street\": \"1800 Ellis Street\",\n            \"country\": \"\",\n            \"landmark\": \"\",\n            \"zip_code\": \"94115\",\n            \"geo_cordinates\": [\n              37.78583393502708,\n              -122.40641713142396\n            ],\n            \"first_name\": \"\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"organization_billing_address\": {\n            \"city\": \"San Francisco\",\n            \"state\": \"California\",\n            \"street\": \"1800 Ellis Street\",\n            \"country\": \"\",\n            \"landmark\": \"\",\n            \"zip_code\": \"94115\",\n            \"geo_cordinates\": [\n              37.78583393502708,\n              -122.40641713142396\n            ],\n            \"first_name\": \"\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        },\n        \"customer_company_name\": \"Zuper\",\n        \"customer_email\": \"Jino@gmail.com\",\n        \"customer_contact_no\": {\n          \"home\": \"7777777777\"\n        },\n        \"is_active\": true,\n        \"is_deleted\": false\n      },\n      \"organization\": {\n        \"organization_uid\": \"bc14ec50-68f8-11ee-a8d5-f53a2c9a4252\",\n        \"organization_name\": \"Ahimsa Entertaimment\",\n        \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/eff2bf00-68fa-11ee-a8d5-f53a2c9a4252.jpeg\",\n        \"organization_description\": \"Test\",\n        \"organization_email\": \"Test\",\n        \"no_of_customers\": 6,\n        \"organization_address\": {\n          \"city\": \"San Francisco\",\n          \"state\": \"California\",\n          \"street\": \"1800 Ellis Street\",\n          \"country\": \"\",\n          \"landmark\": \"\",\n          \"zip_code\": \"94115\",\n          \"geo_cordinates\": [\n            37.78583393502708,\n            -122.40641713142396\n          ],\n          \"first_name\": \"\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\"\n        },\n        \"organization_billing_address\": {\n          \"city\": \"San Francisco\",\n          \"state\": \"California\",\n          \"street\": \"1800 Ellis Street\",\n          \"country\": \"\",\n          \"landmark\": \"\",\n          \"zip_code\": \"94115\",\n          \"geo_cordinates\": [\n            37.78583393502708,\n            -122.40641713142396\n          ],\n          \"first_name\": \"\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\"\n        },\n        \"is_deleted\": false\n      },\n      \"property\": null,\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"estimate\": null,\n      \"job\": {\n        \"is_deleted\": false,\n        \"job_uid\": \"7e54a400-57b7-11eb-996b-777e5464499f\",\n        \"job_title\": \"At-Home Covid Test\",\n        \"job_priority\": \"LOW\",\n        \"scheduled_start_time\": \"2021-01-16T06:57:51.000Z\",\n        \"scheduled_end_time\": \"2021-01-16T08:57:51.000Z\",\n        \"prefix\": \"2021 -\",\n        \"work_order_number\": 427\n      },\n      \"total\": 243.1,\n      \"tags\": [\n        \"invoice - q4\",\n        \"CreateEdit\"\n      ],\n      \"invoice_status\": \"AWAIT_PAYMENT\",\n      \"custom_fields\": [\n        {\n          \"label\": \"Invoice Reference Number\",\n          \"value\": \"5511223344\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"6572e5ec4f8b4c2fa33955e0\"\n        }\n      ],\n      \"is_paid\": false,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"50689376-6348-41dd-81e3-9d75dc73027d\",\n        \"first_name\": \"Maruthu\",\n        \"last_name\": \"Raja\",\n        \"email\": \"Maruthu@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Test\",\n        \"emp_code\": \"5000\",\n        \"prefix\": null,\n        \"work_phone_number\": \"8220131280\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/04a37b90-9a53-11ee-8187-39c77e7ec503.webp\",\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2023-05-05T06:57:26.000Z\",\n        \"updated_at\": \"2023-12-14T07:33:04.000Z\"\n      },\n      \"financing\": {\n        \"promo_message\": null,\n        \"is_enabled\": true\n      },\n      \"created_at\": \"2023-12-08T09:46:20.901Z\",\n      \"updated_at\": \"2023-12-08T09:46:58.946Z\",\n      \"invoice_no\": 4169,\n      \"id\": \"undefined\"\n    },\n    {\n      \"invoice_uid\": \"28c3d4e0-95a1-11ee-98bc-e77b9b7b972c\",\n      \"reference_no\": \"\",\n      \"invoice_date\": \"2023-12-07T18:30:00.000Z\",\n      \"due_date\": \"2024-02-05T18:30:00.000Z\",\n      \"customer\": {\n        \"customer_first_name\": \"Aditya\",\n        \"customer_uid\": \"a1f7c060-a7ad-11e9-b0c5-f7f310761622\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"customer_contact_no\": null,\n        \"customer_email\": \"test@gmail.com\",\n        \"customer_company_name\": \"\",\n        \"customer_last_name\": \"\",\n        \"customer_organization\": {\n          \"organization_uid\": \"ebddd6b0-850c-11ee-88b5-cb1fb2c3a479\",\n          \"organization_name\": \"Create Test 2\",\n          \"organization_address\": {\n            \"street\": \"test\"\n          },\n          \"organization_billing_address\": {\n            \"street\": \"test\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"ebddd6b0-850c-11ee-88b5-cb1fb2c3a479\",\n        \"organization_name\": \"Create Test 2\",\n        \"no_of_customers\": 1,\n        \"organization_address\": {\n          \"street\": \"test\"\n        },\n        \"organization_billing_address\": {\n          \"street\": \"test\"\n        },\n        \"is_deleted\": false\n      },\n      \"property\": null,\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"estimate\": null,\n      \"job\": {\n        \"job_uid\": \"4b60cbe0-95b8-11ee-98bc-e77b9b7b972c\",\n        \"job_title\": \"Visit for Aditya\",\n        \"job_priority\": \"LOW\",\n        \"is_deleted\": false,\n        \"work_order_number\": 14333\n      },\n      \"total\": 100,\n      \"tags\": [],\n      \"invoice_status\": \"DRAFT\",\n      \"custom_fields\": [\n        {\n          \"label\": \"Invoice Reference Number\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"\",\n          \"group_uid\": \"\",\n          \"_id\": \"65672e49f1fc7f8a7264726a\"\n        }\n      ],\n      \"is_paid\": false,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n        \"first_name\": \"Raghav\",\n        \"last_name\": \"G\",\n        \"email\": \"raghav@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"7397722822\",\n        \"designation\": \"CTO\",\n        \"emp_code\": \"1234\",\n        \"prefix\": null,\n        \"work_phone_number\": \"7397722822\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n        \"hourly_labor_charge\": 500,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2018-01-22T13:59:11.000Z\",\n        \"updated_at\": \"2023-05-02T10:58:16.000Z\"\n      },\n      \"financing\": {\n        \"promo_message\": null,\n        \"is_enabled\": true\n      },\n      \"created_at\": \"2023-12-08T08:09:51.565Z\",\n      \"updated_at\": \"2023-12-08T10:55:27.929Z\",\n      \"invoice_no\": 4168,\n      \"id\": \"undefined\"\n    },\n    {\n      \"invoice_uid\": \"e4a504f0-95a0-11ee-98bc-e77b9b7b972c\",\n      \"reference_no\": \"\",\n      \"invoice_date\": \"2023-12-07T18:30:00.000Z\",\n      \"due_date\": \"2024-02-05T18:30:00.000Z\",\n      \"customer\": {\n        \"customer_uid\": \"b00f6f50-68cd-11ee-af3a-a79966abe7f6\",\n        \"customer_first_name\": \"Gojo\",\n        \"customer_last_name\": \"Satoru\",\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"jujutsuhigh@mail.com\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"customer_contact_no\": null,\n        \"customer_organization\": {\n          \"organization_uid\": \"3d6d35a0-943c-11ee-9659-ffd450ac6f83\",\n          \"organization_name\": \"Tokyo Tower 🗼\",\n          \"organization_logo\": \"OrganizationLogo(logoUri=https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/376c0a00-943c-11ee-9659-ffd450ac6f83.jpg, updatedAt=2023-12-06T19:07:17.897)\",\n          \"organization_description\": \"Tokyo tower is awesome!\",\n          \"organization_email\": \"tokyotower@jp.org\",\n          \"organization_address\": {\n            \"city\": \"Minato City\",\n            \"state\": \"Tokyo\",\n            \"street\": \"8, 4-chōme\",\n            \"zip_code\": \"105-0011\",\n            \"geo_cordinates\": [\n              35.6585805,\n              139.7454329\n            ],\n            \"email\": \"tokyotower@jp.org\"\n          },\n          \"organization_billing_address\": {\n            \"city\": \"Minato City\",\n            \"state\": \"Tokyo\",\n            \"street\": \"8, 4-chōme\",\n            \"zip_code\": \"105-0011\",\n            \"geo_cordinates\": [\n              35.6585805,\n              139.7454329\n            ],\n            \"email\": \"tokyotower@jp.org\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"c6951b90-837f-11ee-80ad-5f4695009335\",\n        \"organization_name\": \"Jujutsu High school \",\n        \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9eef60b0-837e-11ee-80ad-5f4695009335.webp\",\n        \"organization_description\": \"<p><strong>Tokyo Prefectural Jujutsu High School</strong>&nbsp;(<span class=\\\"t_nihongo_kanji\\\" lang=\\\"ja\\\"><ruby lang=\\\"ja\\\">東<rt>とう</rt></ruby><ruby lang=\\\"ja\\\">京<rt>きょう</rt></ruby><ruby lang=\\\"ja\\\">都<rt>と</rt></ruby><ruby lang=\\\"ja\\\">立<rt>りつ</rt></ruby><ruby lang=\\\"ja\\\">呪<rt>じゅ</rt></ruby><ruby lang=\\\"ja\\\">術<rt>じゅつ</rt></ruby><ruby lang=\\\"ja\\\">高<rt>こう</rt></ruby><ruby lang=\\\"ja\\\">等<rt>とう</rt></ruby><ruby lang=\\\"ja\\\">専<rt>せん</rt></ruby><ruby lang=\\\"ja\\\">門<rt>もん</rt></ruby><ruby lang=\\\"ja\\\">学<rt>がっ</rt></ruby><ruby lang=\\\"ja\\\">校<rt>こう</rt></ruby></span>&nbsp;<em><span class=\\\"t_nihongo_romaji\\\">Tōkyō Toritsu Jujutsu Kōtō Senmon Gakkō</span></em>, lit.&nbsp;<strong>Tokyo Metropolitan Curse Technical College</strong>), commonly referred to as&nbsp;<strong>Tokyo Jujutsu High</strong>, is one of only two jujutsu educational institutions in Japan dedicated to fostering the next generation of&nbsp;<a title=\\\"Jujutsu Sorcerer\\\" href=\\\"https://jujutsu-kaisen.fandom.com/wiki/Jujutsu_Sorcerer\\\">jujutsu sorcerers.</a></p>\",\n        \"organization_email\": \"jjkhigh@tokyo.com\",\n        \"no_of_customers\": 3,\n        \"organization_address\": {\n          \"city\": \"Shibuya City\",\n          \"state\": \"Tokyo\",\n          \"street\": \"Meiji Shrine, 1-1 Yoyogikamizonocho\",\n          \"landmark\": \"\",\n          \"zip_code\": \"151-8557\",\n          \"geo_cordinates\": [\n            35.67639760000001,\n            139.6993259\n          ],\n          \"first_name\": \"Masamichi\",\n          \"last_name\": \"Yaga\",\n          \"phone_number\": \"99999999\",\n          \"email\": \"jjkhighyaga@tokyo.com\"\n        },\n        \"organization_billing_address\": {\n          \"city\": \"Shibuya City\",\n          \"state\": \"Tokyo\",\n          \"street\": \"1 Chome Jingumae\",\n          \"landmark\": \"\",\n          \"zip_code\": \"150-0001\",\n          \"geo_cordinates\": [\n            0,\n            0\n          ],\n          \"first_name\": \"Gojo\",\n          \"last_name\": \"Satoru\",\n          \"phone_number\": \"999999999\",\n          \"email\": \"jjkhighgojo@tokyo.com\"\n        },\n        \"is_deleted\": false\n      },\n      \"property\": null,\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"estimate\": null,\n      \"job\": {\n        \"job_uid\": \"d72d3600-8ea0-11ee-9d86-55ae790a4dc5\",\n        \"prefix\": \"Q4_0001\",\n        \"job_title\": \"Visit for Gojo Satoru\",\n        \"job_priority\": \"LOW\",\n        \"is_deleted\": false,\n        \"work_order_number\": 14263\n      },\n      \"total\": 100,\n      \"tags\": [],\n      \"invoice_status\": \"DRAFT\",\n      \"custom_fields\": [\n        {\n          \"label\": \"Invoice Reference Number\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"6572cedd4f8b4c2fa3386a6a\"\n        }\n      ],\n      \"is_paid\": false,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"7f0d5b7a-b40a-4507-8de5-b8bd23c04b8c\",\n        \"first_name\": \"Manidevi\",\n        \"last_name\": \"Bezawada\",\n        \"email\": \"manidevi@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"\",\n        \"designation\": \"Android Developer\",\n        \"emp_code\": \"Z101\",\n        \"prefix\": null,\n        \"work_phone_number\": \"\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/1ba6af40-8e84-11ee-a91f-73760cd3ddca.jpg\",\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2022-02-22T07:10:39.000Z\",\n        \"updated_at\": \"2023-11-29T06:54:16.000Z\"\n      },\n      \"financing\": {\n        \"is_enabled\": false,\n        \"promo_message\": null\n      },\n      \"created_at\": \"2023-12-08T08:07:57.110Z\",\n      \"updated_at\": \"2023-12-08T08:08:18.945Z\",\n      \"invoice_no\": 4167,\n      \"id\": \"undefined\"\n    },\n    {\n      \"invoice_uid\": \"3b21df60-9597-11ee-98bc-e77b9b7b972c\",\n      \"reference_no\": \"\",\n      \"invoice_date\": \"2023-12-07T18:30:00.000Z\",\n      \"due_date\": \"2024-02-06T18:29:00.000Z\",\n      \"customer\": {\n        \"customer_uid\": \"68303f30-5067-11ee-8b57-95482c1cd01c\",\n        \"customer_first_name\": \"Lavanya\",\n        \"customer_last_name\": \"G\",\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"lavanya.g@zuper.co\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"customer_organization\": {\n          \"organization_uid\": \"4cb510d0-5b9a-11ee-b665-fff525290acf\",\n          \"organization_name\": \"Ranson Electric Vehicle Company\",\n          \"organization_logo\": null,\n          \"organization_description\": null,\n          \"organization_email\": null,\n          \"organization_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n            \"country\": \"India\",\n            \"landmark\": \"\",\n            \"zip_code\": \"600041\",\n            \"geo_cordinates\": [\n              12.9729537,\n              80.2512351\n            ],\n            \"first_name\": \"Lavanya\",\n            \"last_name\": \"govindd\"\n          },\n          \"organization_billing_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n            \"country\": \"India\",\n            \"landmark\": \"\",\n            \"zip_code\": \"600041\",\n            \"geo_cordinates\": [\n              12.9729537,\n              80.2512351\n            ],\n            \"first_name\": \"Lavanya\",\n            \"last_name\": \"govindd\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        },\n        \"customer_contact_no\": {\n          \"mobile\": \"\",\n          \"home\": \"\",\n          \"work\": \"\"\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"4cb510d0-5b9a-11ee-b665-fff525290acf\",\n        \"organization_name\": \"Ranson Electric Vehicle Company\",\n        \"organization_logo\": null,\n        \"organization_description\": null,\n        \"organization_email\": null,\n        \"no_of_customers\": 1,\n        \"organization_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600041\",\n          \"geo_cordinates\": [\n            12.9729537,\n            80.2512351\n          ],\n          \"first_name\": \"Lavanya\",\n          \"last_name\": \"govindd\"\n        },\n        \"organization_billing_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600041\",\n          \"geo_cordinates\": [\n            12.9729537,\n            80.2512351\n          ],\n          \"first_name\": \"Lavanya\",\n          \"last_name\": \"govindd\"\n        },\n        \"is_deleted\": false\n      },\n      \"property\": null,\n      \"prefix\": \"AC_Auto_Invoice\",\n      \"estimate\": null,\n      \"job\": null,\n      \"total\": 1922.4,\n      \"tags\": [],\n      \"invoice_status\": \"AWAIT_PAYMENT\",\n      \"custom_fields\": [\n        {\n          \"label\": \"Invoice Reference Number\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"6572bea84f8b4c2fa33804b2\"\n        }\n      ],\n      \"is_paid\": false,\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"57a967fe-30c1-41a6-a4e5-5a04f5b8c936\",\n        \"first_name\": \"Lavanya\",\n        \"last_name\": \"G\",\n        \"email\": \"lavanya.g@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Admin\",\n        \"emp_code\": \"Z200\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2023-09-08T07:13:05.000Z\",\n        \"updated_at\": \"2023-09-08T07:13:05.000Z\"\n      },\n      \"financing\": {\n        \"promo_message\": \"From $87.74/month based on a price of $1922.40 at 8.90% annual percentage rate (APR) for 24 months. Rates from 0% to 35.9%.*\",\n        \"is_enabled\": true\n      },\n      \"created_at\": \"2023-12-08T06:58:48.450Z\",\n      \"updated_at\": \"2023-12-08T11:12:02.199Z\",\n      \"invoice_no\": 4166,\n      \"id\": \"undefined\"\n    }\n  ],\n  \"total_records\": 4303,\n  \"current_page\": 1,\n  \"total_pages\": 431\n}"
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
                          "invoice_uid": {
                            "type": "string",
                            "example": "a53a5920-9a80-11ee-8a1f-49ba020888f8"
                          },
                          "invoice_date": {
                            "type": "string",
                            "example": "2023-12-13T18:30:00.000Z"
                          },
                          "due_date": {
                            "type": "string",
                            "example": "2024-02-12T18:29:59.000Z"
                          },
                          "customer": {
                            "type": "object",
                            "properties": {
                              "customer_uid": {
                                "type": "string",
                                "example": "35279010-93bd-11ec-b675-b9a129ac10eb"
                              },
                              "customer_first_name": {
                                "type": "string",
                                "example": "Santhanapandian"
                              },
                              "customer_last_name": {
                                "type": "string",
                                "example": ""
                              },
                              "customer_organization": {
                                "type": "object",
                                "properties": {
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
                                  "organization_billing_address": {
                                    "type": "object",
                                    "properties": {
                                      "city": {
                                        "type": "string",
                                        "example": "Chennai"
                                      },
                                      "state": {
                                        "type": "string",
                                        "example": "Tamil Nadu"
                                      },
                                      "street": {
                                        "type": "string",
                                        "example": "Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India"
                                      },
                                      "landmark": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "_id": {
                                        "type": "string",
                                        "example": "6464bdc1eb32d67c9816b3d1"
                                      }
                                    }
                                  },
                                  "organization_address": {
                                    "type": "object",
                                    "properties": {
                                      "city": {
                                        "type": "string",
                                        "example": "Chennai"
                                      },
                                      "state": {
                                        "type": "string",
                                        "example": "Tamil Nadu"
                                      },
                                      "street": {
                                        "type": "string",
                                        "example": "Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India"
                                      },
                                      "landmark": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "geo_cordinates": {
                                        "type": "array",
                                        "items": {
                                          "type": "number",
                                          "example": 12.9733389,
                                          "default": 0
                                        }
                                      },
                                      "_id": {
                                        "type": "string",
                                        "example": "6464bdc1eb32d67c9816b3d2"
                                      }
                                    }
                                  },
                                  "organization_email": {},
                                  "organization_description": {
                                    "type": "string",
                                    "example": "<p>Test Org Desc</p>"
                                  },
                                  "organization_logo": {},
                                  "organization_name": {
                                    "type": "string",
                                    "example": "TEST ORG 0005"
                                  },
                                  "organization_uid": {
                                    "type": "string",
                                    "example": "becf61e0-b9b3-11ed-b623-1b22cc5dd28b"
                                  }
                                }
                              },
                              "customer_company_name": {
                                "type": "string",
                                "example": ""
                              },
                              "customer_email": {
                                "type": "string",
                                "example": "santhanapandian@zuper.co"
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
                                    "example": "9000932246"
                                  },
                                  "home": {
                                    "type": "string",
                                    "example": "9000932245"
                                  },
                                  "work": {
                                    "type": "string",
                                    "example": ""
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
                              "organization_billing_address": {
                                "type": "object",
                                "properties": {
                                  "city": {
                                    "type": "string",
                                    "example": "Chennai"
                                  },
                                  "state": {
                                    "type": "string",
                                    "example": "Tamil Nadu"
                                  },
                                  "street": {
                                    "type": "string",
                                    "example": "Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India"
                                  },
                                  "landmark": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "6464bdc1eb32d67c9816b3d1"
                                  }
                                }
                              },
                              "organization_address": {
                                "type": "object",
                                "properties": {
                                  "city": {
                                    "type": "string",
                                    "example": "Chennai"
                                  },
                                  "state": {
                                    "type": "string",
                                    "example": "Tamil Nadu"
                                  },
                                  "street": {
                                    "type": "string",
                                    "example": "Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India"
                                  },
                                  "landmark": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "geo_cordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "number",
                                      "example": 12.9733389,
                                      "default": 0
                                    }
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "6464bdc1eb32d67c9816b3d2"
                                  }
                                }
                              },
                              "no_of_customers": {
                                "type": "integer",
                                "example": 4,
                                "default": 0
                              },
                              "organization_email": {},
                              "organization_description": {
                                "type": "string",
                                "example": "<p>Test Org Desc</p>"
                              },
                              "organization_logo": {},
                              "organization_name": {
                                "type": "string",
                                "example": "TEST ORG 0005"
                              },
                              "organization_uid": {
                                "type": "string",
                                "example": "becf61e0-b9b3-11ed-b623-1b22cc5dd28b"
                              }
                            }
                          },
                          "property": {
                            "type": "object",
                            "properties": {
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "property_address": {
                                "type": "object",
                                "properties": {
                                  "city": {
                                    "type": "string",
                                    "example": "Bengaluru "
                                  },
                                  "state": {
                                    "type": "string",
                                    "example": "Karnataka "
                                  },
                                  "street": {
                                    "type": "string",
                                    "example": "Whitefield Main Road Pattandur Agrahara "
                                  },
                                  "country": {
                                    "type": "string",
                                    "example": "India"
                                  },
                                  "landmark": {
                                    "type": "string",
                                    "example": "Whitefield Bus stop"
                                  },
                                  "zip_code": {
                                    "type": "string",
                                    "example": "560066"
                                  },
                                  "geo_cordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "number",
                                      "example": 12.9874885,
                                      "default": 0
                                    }
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "64e4c0dc7c0c9e18fa178bac"
                                  }
                                }
                              },
                              "property_image": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/361cf1c0-7d59-11eb-8302-750c30d4731b.jpg"
                              },
                              "no_of_jobs": {
                                "type": "integer",
                                "example": 80,
                                "default": 0
                              },
                              "property_name": {
                                "type": "string",
                                "example": "Ascendas IT Park"
                              },
                              "property_uid": {
                                "type": "string",
                                "example": "6b33fd30-7d5a-11eb-8302-750c30d4731b"
                              }
                            }
                          },
                          "prefix": {
                            "type": "string",
                            "example": "AC_Auto_Invoice"
                          },
                          "total": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "tags": {
                            "type": "array"
                          },
                          "invoice_status": {
                            "type": "string",
                            "example": "PAID"
                          },
                          "custom_fields": {
                            "type": "array"
                          },
                          "service_contract": {
                            "type": "object",
                            "properties": {
                              "contract_uid": {
                                "type": "string",
                                "example": "f1ae7dc0-a091-11ed-9cee-1d71b5cbf00e"
                              },
                              "ref_no": {
                                "type": "string",
                                "example": ""
                              },
                              "contract_name": {
                                "type": "string",
                                "example": "Contract"
                              },
                              "description": {
                                "type": "string",
                                "example": "<p>Contract Test</p>"
                              },
                              "start_date": {
                                "type": "string",
                                "example": "2023-01-31T18:30:00.000Z"
                              },
                              "end_date": {
                                "type": "string",
                                "example": "2024-01-31T18:29:59.000Z"
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "contract_number": {
                                "type": "integer",
                                "example": 680,
                                "default": 0
                              }
                            }
                          },
                          "is_paid": {
                            "type": "boolean",
                            "example": true,
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
                                "example": "15e00bfa-fbcb-4d46-a7c1-c7b5910441c0"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Marlon"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "S A"
                              },
                              "email": {
                                "type": "string",
                                "example": "santhanapandian@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z082"
                              },
                              "prefix": {},
                              "work_phone_number": {},
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/80c94b80-20b1-11ee-9dcd-affe7f3e9b1d.jpg"
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
                                "example": "2022-02-22T06:03:54.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-11-17T07:14:24.000Z"
                              }
                            }
                          },
                          "financing": {
                            "type": "object",
                            "properties": {
                              "is_enabled": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "promo_message": {}
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-12-14T12:59:41.441Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-12-14T13:07:29.582Z"
                          },
                          "invoice_no": {
                            "type": "integer",
                            "example": 4175,
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
                      "example": 4303,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 431,
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