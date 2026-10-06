---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Recurring Jobs

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
    "/recurring_jobs": {
      "get": {
        "summary": "Get Recurring Jobs",
        "description": "",
        "operationId": "get-all-recurring-jobs",
        "parameters": [
          {
            "name": "count",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job_category",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.keyword",
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"recurring_job_uid\": \"95b85570-d6e3-11ee-839f-418ff021ceed\",\n      \"duration\": {\n        \"value\": 2,\n        \"type\": \"MONTHS\"\n      },\n      \"repeat_frequency\": \"WEEKLY\",\n      \"repeat_every\": 1,\n      \"repeat_on\": {\n        \"byweekday\": [\n          {\n            \"weekday\": 6,\n            \"n\": null\n          }\n        ],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"FREQ=WEEKLY;INTERVAL=1;WKST=SU;BYDAY=SU;DTSTART=20240201T091500;UNTIL=20240401T102000\",\n      \"job_title\": \"New Job\",\n      \"job_category\": {\n        \"category_name\": \"Home Cleaning\",\n        \"category_description\": \"Home Cleaning for Service Square.\",\n        \"category_uid\": \"3fee25f0-74a1-11ea-8ca5-df1d176880cb\"\n      },\n      \"customer\": {\n        \"customer_first_name\": \"Jhon\",\n        \"customer_last_name\": \"ags 123\",\n        \"customer_email\": \"jhon@ags.co\",\n        \"customer_uid\": \"4185a6c0-58d0-11e8-a06a-f1f7062602d6\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"customer_category\": {\n          \"_id\": \"5ac9fa052fc7d975d4b52cda\",\n          \"category_name\": \"Commercial\",\n          \"category_uid\": \"441a6bc0-3b1e-11e8-b0f4-d549ff224ae8\"\n        },\n        \"customer_company_name\": \"\",\n        \"customer_contact_no\": {\n          \"mobile\": \"\",\n          \"home\": \"+919952147275\",\n          \"work\": \"+919952147275\"\n        },\n        \"customer_organization\": {\n          \"organization_uid\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n          \"organization_name\": \"0 4TH ST E, ST MN 55101 (PIN: 322922310026)\",\n          \"is_active\": true,\n          \"is_deleted\": false,\n          \"organization_address\": {\n            \"city\": \"Cupertino\",\n            \"state\": \"California\",\n            \"street\": \"6 Mariani Avenue\",\n            \"country\": \"\",\n            \"landmark\": \"\",\n            \"zip_code\": \"95014\",\n            \"geo_cordinates\": [\n              37.330544431296964,\n              -122.03058298677206\n            ],\n            \"first_name\": \"Test\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"organization_description\": null,\n          \"organization_email\": \"sabari@zuper.co\",\n          \"organization_logo\": null\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n        \"organization_name\": \"0 4TH ST E, ST MN 55101 (PIN: 322922310026)\",\n        \"no_of_customers\": 3,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"organization_address\": {\n          \"city\": \"Cupertino\",\n          \"state\": \"California\",\n          \"street\": \"6 Mariani Avenue\",\n          \"country\": \"\",\n          \"landmark\": \"\",\n          \"zip_code\": \"95014\",\n          \"geo_cordinates\": [\n            37.330544431296964,\n            -122.03058298677206\n          ],\n          \"first_name\": \"Test\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\"\n        },\n        \"organization_description\": null,\n        \"organization_email\": \"sabari@zuper.co\",\n        \"organization_logo\": null\n      },\n      \"property\": {\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"property_address\": {\n          \"city\": \"Chennai\",\n          \"state\": \"Tamil Nadu\",\n          \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar, Chennai, Tamil Nadu, India\",\n          \"country\": \"India\",\n          \"landmark\": null,\n          \"zip_code\": \"600017\",\n          \"geo_cordinates\": [\n            13.0494706,\n            80.24522139999999\n          ],\n          \"_id\": \"64df0dee7c0c9e18fa1777e1\"\n        },\n        \"property_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0d1d0360-35a3-11ed-b193-e956a56bc479.png\",\n        \"no_of_jobs\": 13,\n        \"property_name\": \"Testing_Sp\",\n        \"property_uid\": \"9d9a84f0-dbf6-11ec-8c58-0d3bf4d5a49f\"\n      },\n      \"service_contract\": {\n        \"prefix\": \"Q1\",\n        \"contract_uid\": \"8295b3f0-d172-11ee-8824-f378626de6e5\",\n        \"ref_no\": \"\",\n        \"contract_name\": \"contractsavebutton\",\n        \"description\": \"<p>contract</p>\",\n        \"start_date\": \"2024-02-21T18:30:00.000Z\",\n        \"end_date\": \"2025-06-21T18:29:59.000Z\",\n        \"approval_status\": \"APPROVED\",\n        \"created_by\": 19397,\n        \"is_active\": true,\n        \"is_expired\": false,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-02-22T11:07:04.501Z\",\n        \"contract_number\": 962\n      },\n      \"job_start\": \"2024-03-07T09:15:00.000Z\",\n      \"job_end\": \"2024-04-04T10:20:00.000Z\",\n      \"job_count\": 2,\n      \"created_by\": {\n        \"user_uid\": \"d083c6cb-9202-41fc-8ae2-e986939c5471\",\n        \"first_name\": \"Jerin\",\n        \"last_name\": \"Ajay\",\n        \"email\": \"jerin@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Admin\",\n        \"emp_code\": \"J001\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9f1e58b0-5396-11ee-af3b-ed82d39ae946.jpg\",\n        \"hourly_labor_charge\": 54.59,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2022-02-16T10:00:42.000Z\",\n        \"updated_at\": \"2024-01-23T08:35:19.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2024-02-29T09:19:05.288Z\",\n      \"updated_at\": \"2024-02-29T09:19:05.288Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"recurring_job_uid\": \"7be6b480-c0fd-11ee-8217-9bf65cb17269\",\n      \"duration\": {\n        \"value\": 6,\n        \"type\": \"YEARS\"\n      },\n      \"repeat_frequency\": \"WEEKLY\",\n      \"repeat_every\": 1,\n      \"repeat_on\": {\n        \"byweekday\": [\n          {\n            \"weekday\": 2,\n            \"n\": null\n          },\n          {\n            \"weekday\": 1,\n            \"n\": null\n          }\n        ],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"FREQ=WEEKLY;INTERVAL=1;WKST=SU;BYDAY=WE,TU;DTSTART=20220517T043000;UNTIL=20280517T123000\",\n      \"job_title\": \"WBE4CW Clone - TEst - feb28\",\n      \"job_category\": {\n        \"category_name\": \"Home Cleaning\",\n        \"category_description\": \"Home Cleaning for Service Square.\",\n        \"category_uid\": \"3fee25f0-74a1-11ea-8ca5-df1d176880cb\"\n      },\n      \"customer\": {\n        \"customer_first_name\": \"Charles\",\n        \"customer_last_name\": \"\",\n        \"customer_category\": {\n          \"_id\": \"5abb5a0d421b2c5ed273a3a7\",\n          \"category_name\": \"Residential\",\n          \"category_uid\": \"b02dba80-3266-11e8-8c01-4905acc8cfc0\"\n        },\n        \"customer_uid\": \"006acb10-7537-11e8-9980-7b1cf143cfae\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"customer_company_name\": \"zuper\",\n        \"customer_contact_no\": {\n          \"mobile\": \"1234567890\",\n          \"home\": \"1234567890\",\n          \"work\": \"1234567890\"\n        },\n        \"customer_email\": \"Charles@Zuper.co\",\n        \"customer_organization\": {\n          \"organization_uid\": \"9daa6410-6994-11ee-a8d5-f53a2c9a4252\",\n          \"organization_name\": \"ABCD\",\n          \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e7962790-a0bb-11ee-bb95-c34651a5686e.jpeg\",\n          \"organization_description\": \"<p>Test</p>\",\n          \"organization_email\": \"abcd@gmail.com\",\n          \"organization_address\": {\n            \"city\": \"Salem\",\n            \"state\": \"Tamil Nadu\",\n            \"street\": \"Seelanaickenpatti\",\n            \"country\": \"\",\n            \"landmark\": \"\",\n            \"zip_code\": \"636201\",\n            \"geo_cordinates\": [\n              11.6209373658852,\n              78.14379293471575\n            ],\n            \"first_name\": \"\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        }\n      },\n      \"job_start\": \"2022-05-17T17:30:00.000Z\",\n      \"job_end\": \"2028-05-17T07:00:00.000Z\",\n      \"job_count\": 635,\n      \"created_by\": {\n        \"user_uid\": \"db0b0c00-ee5b-466b-b348-f953e4723dd3\",\n        \"first_name\": \"Vigneshwaran\",\n        \"last_name\": \"V\",\n        \"email\": \"vigneshwaran.v@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Tech\",\n        \"emp_code\": \"001\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": null,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2023-05-03T06:10:14.000Z\",\n        \"updated_at\": \"2023-06-20T08:59:39.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2024-02-01T12:29:03.306Z\",\n      \"updated_at\": \"2024-02-28T07:52:33.827Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"recurring_job_uid\": \"79b99b50-c0fd-11ee-8217-9bf65cb17269\",\n      \"duration\": {\n        \"value\": 6,\n        \"type\": \"YEARS\"\n      },\n      \"repeat_frequency\": \"WEEKLY\",\n      \"repeat_every\": 4,\n      \"repeat_on\": {\n        \"byweekday\": [\n          {\n            \"weekday\": 1,\n            \"n\": null\n          }\n        ],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"DTSTART:20220517T000000Z\\nRRULE:FREQ=WEEKLY;INTERVAL=4;BYDAY=TU;UNTIL=20280517T000000Z\",\n      \"job_title\": \"WBE4CW Clone\",\n      \"job_category\": {\n        \"category_name\": \"Home Cleaning\",\n        \"category_description\": \"Home Cleaning for Service Square.\",\n        \"category_uid\": \"3fee25f0-74a1-11ea-8ca5-df1d176880cb\"\n      },\n      \"customer\": {\n        \"customer_first_name\": \"Charles\",\n        \"customer_last_name\": \"\",\n        \"customer_category\": {\n          \"_id\": \"5abb5a0d421b2c5ed273a3a7\",\n          \"category_name\": \"Residential\",\n          \"category_uid\": \"b02dba80-3266-11e8-8c01-4905acc8cfc0\"\n        },\n        \"customer_uid\": \"006acb10-7537-11e8-9980-7b1cf143cfae\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"customer_company_name\": \"zuper\",\n        \"customer_contact_no\": {\n          \"mobile\": \"1234567890\",\n          \"home\": \"1234567890\",\n          \"work\": \"1234567890\"\n        },\n        \"customer_email\": \"Charles@Zuper.co\",\n        \"customer_organization\": {\n          \"organization_uid\": \"9daa6410-6994-11ee-a8d5-f53a2c9a4252\",\n          \"organization_name\": \"ABCD\",\n          \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e7962790-a0bb-11ee-bb95-c34651a5686e.jpeg\",\n          \"organization_description\": \"<p>Test</p>\",\n          \"organization_email\": \"abcd@gmail.com\",\n          \"organization_address\": {\n            \"city\": \"Salem\",\n            \"state\": \"Tamil Nadu\",\n            \"street\": \"Seelanaickenpatti\",\n            \"country\": \"\",\n            \"landmark\": \"\",\n            \"zip_code\": \"636201\",\n            \"geo_cordinates\": [\n              11.6209373658852,\n              78.14379293471575\n            ],\n            \"first_name\": \"\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        }\n      },\n      \"job_start\": \"2022-05-17T03:30:00.000Z\",\n      \"job_end\": \"2028-05-09T11:30:00.000Z\",\n      \"job_count\": 78,\n      \"created_by\": {\n        \"user_uid\": \"db0b0c00-ee5b-466b-b348-f953e4723dd3\",\n        \"first_name\": \"Vigneshwaran\",\n        \"last_name\": \"V\",\n        \"email\": \"vigneshwaran.v@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Tech\",\n        \"emp_code\": \"001\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": null,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2023-05-03T06:10:14.000Z\",\n        \"updated_at\": \"2023-06-20T08:59:39.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2024-02-01T12:28:59.654Z\",\n      \"updated_at\": \"2024-02-04T16:59:31.504Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"recurring_job_uid\": \"79991b00-c0fd-11ee-8217-9bf65cb17269\",\n      \"duration\": {\n        \"value\": 6,\n        \"type\": \"YEARS\"\n      },\n      \"repeat_frequency\": \"WEEKLY\",\n      \"repeat_every\": 4,\n      \"repeat_on\": {\n        \"byweekday\": [\n          {\n            \"weekday\": 1,\n            \"n\": null\n          }\n        ],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"DTSTART:20220517T000000Z\\nRRULE:FREQ=WEEKLY;INTERVAL=4;BYDAY=TU;UNTIL=20280517T000000Z\",\n      \"job_title\": \"WBE4CW Clone\",\n      \"job_category\": {\n        \"category_name\": \"Home Cleaning\",\n        \"category_description\": \"Home Cleaning for Service Square.\",\n        \"category_uid\": \"3fee25f0-74a1-11ea-8ca5-df1d176880cb\"\n      },\n      \"customer\": {\n        \"customer_first_name\": \"Charles\",\n        \"customer_last_name\": \"\",\n        \"customer_category\": {\n          \"_id\": \"5abb5a0d421b2c5ed273a3a7\",\n          \"category_name\": \"Residential\",\n          \"category_uid\": \"b02dba80-3266-11e8-8c01-4905acc8cfc0\"\n        },\n        \"customer_uid\": \"006acb10-7537-11e8-9980-7b1cf143cfae\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"customer_company_name\": \"zuper\",\n        \"customer_contact_no\": {\n          \"mobile\": \"1234567890\",\n          \"home\": \"1234567890\",\n          \"work\": \"1234567890\"\n        },\n        \"customer_email\": \"Charles@Zuper.co\",\n        \"customer_organization\": {\n          \"organization_uid\": \"9daa6410-6994-11ee-a8d5-f53a2c9a4252\",\n          \"organization_name\": \"ABCD\",\n          \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e7962790-a0bb-11ee-bb95-c34651a5686e.jpeg\",\n          \"organization_description\": \"<p>Test</p>\",\n          \"organization_email\": \"abcd@gmail.com\",\n          \"organization_address\": {\n            \"city\": \"Salem\",\n            \"state\": \"Tamil Nadu\",\n            \"street\": \"Seelanaickenpatti\",\n            \"country\": \"\",\n            \"landmark\": \"\",\n            \"zip_code\": \"636201\",\n            \"geo_cordinates\": [\n              11.6209373658852,\n              78.14379293471575\n            ],\n            \"first_name\": \"\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        }\n      },\n      \"job_start\": \"2022-05-17T03:30:00.000Z\",\n      \"job_end\": \"2028-05-09T11:30:00.000Z\",\n      \"job_count\": 78,\n      \"created_by\": {\n        \"user_uid\": \"db0b0c00-ee5b-466b-b348-f953e4723dd3\",\n        \"first_name\": \"Vigneshwaran\",\n        \"last_name\": \"V\",\n        \"email\": \"vigneshwaran.v@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Tech\",\n        \"emp_code\": \"001\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": null,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2023-05-03T06:10:14.000Z\",\n        \"updated_at\": \"2023-06-20T08:59:39.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2024-02-01T12:28:59.441Z\",\n      \"updated_at\": \"2024-02-06T05:55:05.587Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"recurring_job_uid\": \"8b0d8e10-c01d-11ee-b2e4-e3e405249b9d\",\n      \"duration\": {\n        \"value\": 1,\n        \"type\": \"DAYS\"\n      },\n      \"repeat_frequency\": \"DAILY\",\n      \"repeat_every\": 1,\n      \"repeat_on\": {\n        \"byweekday\": [],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"FREQ=DAILY;INTERVAL=1;WKST=SU;DTSTART=20240121T133000;UNTIL=20240122T140000\",\n      \"job_title\": \"Recurring Job\",\n      \"job_category\": {\n        \"category_name\": \"Installation\",\n        \"category_uid\": \"c506e890-015e-11eb-99a8-e7fcc50f879e\",\n        \"category_description\": \"<p>Category Description</p>\"\n      },\n      \"customer\": {\n        \"customer_first_name\": \"Vidya\",\n        \"customer_category\": {\n          \"_id\": \"5abb5a0d421b2c5ed273a3a7\",\n          \"category_name\": \"Residential\",\n          \"category_uid\": \"b02dba80-3266-11e8-8c01-4905acc8cfc0\"\n        },\n        \"customer_last_name\": \"S\",\n        \"customer_company_name\": \"Zuper\",\n        \"customer_uid\": \"485da230-23a6-11e9-bf84-4363e6965871\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"customer_contact_no\": {\n          \"mobile\": \"+1483578923\",\n          \"home\": \"\",\n          \"work\": \"\"\n        },\n        \"customer_email\": \"sreevidya@zuper.co\",\n        \"customer_organization\": {\n          \"is_active\": true,\n          \"is_deleted\": false,\n          \"organization_address\": {\n            \"city\": \"San Marcos\",\n            \"state\": \"Texas\",\n            \"street\": \"Texas State University, University Drive\",\n            \"landmark\": \"\",\n            \"zip_code\": \"78666\",\n            \"geo_cordinates\": [\n              29.888411,\n              -97.938351\n            ],\n            \"first_name\": \"Org\",\n            \"last_name\": \"SC\",\n            \"phone_number\": \"8220131280\",\n            \"email\": \"orgsc@abc.com\"\n          },\n          \"organization_name\": \"Ascendas\",\n          \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg\",\n          \"organization_email\": \"zupertest23@gmail.com\",\n          \"organization_description\": null,\n          \"organization_uid\": \"11d86a70-8212-11eb-ab1f-1ddf213d24b4\"\n        }\n      },\n      \"organization\": {\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"organization_address\": {\n          \"city\": \"San Marcos\",\n          \"state\": \"Texas\",\n          \"street\": \"Texas State University, University Drive\",\n          \"landmark\": \"\",\n          \"zip_code\": \"78666\",\n          \"geo_cordinates\": [\n            29.888411,\n            -97.938351\n          ],\n          \"first_name\": \"Org\",\n          \"last_name\": \"SC\",\n          \"phone_number\": \"8220131280\",\n          \"email\": \"orgsc@abc.com\"\n        },\n        \"organization_name\": \"Ascendas\",\n        \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg\",\n        \"organization_email\": \"zupertest23@gmail.com\",\n        \"organization_description\": null,\n        \"organization_uid\": \"11d86a70-8212-11eb-ab1f-1ddf213d24b4\",\n        \"no_of_customers\": 45\n      },\n      \"job_start\": \"2024-01-21T08:00:00.000Z\",\n      \"job_end\": \"2024-01-22T08:30:00.000Z\",\n      \"job_count\": 2,\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"sreevidya@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"7010092903\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"7010092903\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2024-01-25T11:25:16.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2024-01-31T09:46:01.460Z\",\n      \"updated_at\": \"2024-01-31T09:46:01.461Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"recurring_job_uid\": \"35446d20-ba9e-11ee-bd57-0dd147025ec6\",\n      \"duration\": {\n        \"value\": 1,\n        \"type\": \"MONTHS\"\n      },\n      \"repeat_frequency\": \"WEEKLY\",\n      \"repeat_every\": 1,\n      \"repeat_on\": {\n        \"byweekday\": [\n          {\n            \"weekday\": 2,\n            \"n\": null\n          }\n        ],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"FREQ=WEEKLY;INTERVAL=1;WKST=SU;BYDAY=WE;DTSTART=20230620T091500;UNTIL=20230720T162400\",\n      \"job_title\": \"Akash recurring job\",\n      \"job_category\": {\n        \"category_name\": \"Installation\",\n        \"category_uid\": \"c506e890-015e-11eb-99a8-e7fcc50f879e\",\n        \"category_description\": \"<p>Category Description</p>\"\n      },\n      \"customer\": {\n        \"customer_uid\": \"2cfa9b80-aee1-11ee-806d-cd95ed12b0b1\",\n        \"customer_first_name\": \"Akashraj\",\n        \"customer_last_name\": \"\",\n        \"customer_category\": null,\n        \"customer_organization\": null,\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"akashraj@zuper.co\",\n        \"customer_contact_no\": {\n          \"mobile\": \"\",\n          \"home\": \"\",\n          \"work\": \"\"\n        },\n        \"is_active\": false,\n        \"is_deleted\": true\n      },\n      \"job_start\": \"2023-06-21T09:15:00.000Z\",\n      \"job_end\": \"2023-07-19T16:24:00.000Z\",\n      \"job_count\": 5,\n      \"created_by\": {\n        \"user_uid\": \"ecd961cb-7cee-4b2d-a837-213ca8b00b5a\",\n        \"first_name\": \"Guru\",\n        \"last_name\": \"Prasath\",\n        \"email\": \"gprasath630@gmail.com\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"8248958724\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"271120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"8248958724\",\n        \"mobile_phone_number\": \"8248958724\",\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/93d0b320-ac2c-11ed-a42c-1daa0c6a528f.jpg\",\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2020-11-27T10:32:45.000Z\",\n        \"updated_at\": \"2023-11-20T10:07:51.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2024-01-24T09:51:55.635Z\",\n      \"updated_at\": \"2024-01-24T09:51:55.637Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"recurring_job_uid\": \"8b961060-a3c0-11ee-a40a-3f13070c804a\",\n      \"duration\": {\n        \"value\": 1,\n        \"type\": \"MONTHS\"\n      },\n      \"repeat_frequency\": \"WEEKLY\",\n      \"repeat_every\": 1,\n      \"repeat_on\": {\n        \"byweekday\": [],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"FREQ=WEEKLY;INTERVAL=1;WKST=SU;DTSTART=20220517T090000;UNTIL=20220617T170000\",\n      \"job_title\": \"v3 recurring job dec 26\",\n      \"job_category\": {\n        \"category_name\": \"Home Cleaning\",\n        \"category_description\": \"Home Cleaning for Service Square.\",\n        \"category_uid\": \"3fee25f0-74a1-11ea-8ca5-df1d176880cb\"\n      },\n      \"customer\": {\n        \"customer_first_name\": \"Charles\",\n        \"customer_last_name\": \"\",\n        \"customer_category\": {\n          \"_id\": \"5abb5a0d421b2c5ed273a3a7\",\n          \"category_name\": \"Residential\",\n          \"category_uid\": \"b02dba80-3266-11e8-8c01-4905acc8cfc0\"\n        },\n        \"customer_uid\": \"006acb10-7537-11e8-9980-7b1cf143cfae\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"customer_company_name\": \"zuper\",\n        \"customer_contact_no\": {\n          \"mobile\": \"1234567890\",\n          \"home\": \"1234567890\",\n          \"work\": \"1234567890\"\n        },\n        \"customer_email\": \"Charles@Zuper.co\",\n        \"customer_organization\": {\n          \"organization_uid\": \"9daa6410-6994-11ee-a8d5-f53a2c9a4252\",\n          \"organization_name\": \"ABCD\",\n          \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e7962790-a0bb-11ee-bb95-c34651a5686e.jpeg\",\n          \"organization_description\": \"<p>Test</p>\",\n          \"organization_email\": \"abcd@gmail.com\",\n          \"organization_address\": {\n            \"city\": \"Salem\",\n            \"state\": \"Tamil Nadu\",\n            \"street\": \"Seelanaickenpatti\",\n            \"country\": \"\",\n            \"landmark\": \"\",\n            \"zip_code\": \"636201\",\n            \"geo_cordinates\": [\n              11.6209373658852,\n              78.14379293471575\n            ],\n            \"first_name\": \"\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        }\n      },\n      \"job_start\": \"2022-05-17T03:30:00.000Z\",\n      \"job_end\": \"2022-06-14T11:30:00.000Z\",\n      \"job_count\": 5,\n      \"created_by\": {\n        \"user_uid\": \"ab6d4ab2-19ee-4093-9995-025fa9f78273\",\n        \"first_name\": \"Sesha\",\n        \"last_name\": \"Madhav\",\n        \"email\": \"sesha@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Tech\",\n        \"emp_code\": \"2030303\",\n        \"prefix\": null,\n        \"work_phone_number\": \"9883733222\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2020-05-09T04:52:02.000Z\",\n        \"updated_at\": \"2022-07-28T10:21:40.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2023-12-26T07:29:46.601Z\",\n      \"updated_at\": \"2023-12-26T07:29:46.602Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"recurring_job_uid\": \"4420e980-a3c0-11ee-a40a-3f13070c804a\",\n      \"duration\": {\n        \"value\": 1,\n        \"type\": \"MONTHS\"\n      },\n      \"repeat_frequency\": \"WEEKLY\",\n      \"repeat_every\": 1,\n      \"repeat_on\": {\n        \"byweekday\": [],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"FREQ=WEEKLY;INTERVAL=1;WKST=SU;DTSTART=20240101T033000;UNTIL=20240201T043500\",\n      \"job_title\": \"Weekly, Biweekly, Every 4 weeks, Custom 3\",\n      \"job_category\": {\n        \"category_name\": \"Home Cleaning\",\n        \"category_description\": \"Home Cleaning for Service Square.\",\n        \"category_uid\": \"3fee25f0-74a1-11ea-8ca5-df1d176880cb\"\n      },\n      \"customer\": {\n        \"customer_first_name\": \"Charles\",\n        \"customer_last_name\": \"\",\n        \"customer_category\": {\n          \"_id\": \"5abb5a0d421b2c5ed273a3a7\",\n          \"category_name\": \"Residential\",\n          \"category_uid\": \"b02dba80-3266-11e8-8c01-4905acc8cfc0\"\n        },\n        \"customer_uid\": \"006acb10-7537-11e8-9980-7b1cf143cfae\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"customer_company_name\": \"zuper\",\n        \"customer_contact_no\": {\n          \"mobile\": \"1234567890\",\n          \"home\": \"1234567890\",\n          \"work\": \"1234567890\"\n        },\n        \"customer_email\": \"Charles@Zuper.co\",\n        \"customer_organization\": {\n          \"organization_uid\": \"9daa6410-6994-11ee-a8d5-f53a2c9a4252\",\n          \"organization_name\": \"ABCD\",\n          \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e7962790-a0bb-11ee-bb95-c34651a5686e.jpeg\",\n          \"organization_description\": \"<p>Test</p>\",\n          \"organization_email\": \"abcd@gmail.com\",\n          \"organization_address\": {\n            \"city\": \"Salem\",\n            \"state\": \"Tamil Nadu\",\n            \"street\": \"Seelanaickenpatti\",\n            \"country\": \"\",\n            \"landmark\": \"\",\n            \"zip_code\": \"636201\",\n            \"geo_cordinates\": [\n              11.6209373658852,\n              78.14379293471575\n            ],\n            \"first_name\": \"\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"is_active\": true,\n          \"is_deleted\": false\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"03853bc0-0ea5-11ee-9f8e-0f93d9851045\",\n        \"organization_name\": \"0 3RD ST E, ST PAUL MN 55119 (PIN: 352922240167)\",\n        \"no_of_customers\": 5,\n        \"is_active\": false,\n        \"is_deleted\": true\n      },\n      \"job_start\": \"2024-01-01T03:30:00.000Z\",\n      \"job_end\": \"2024-01-29T04:35:00.000Z\",\n      \"job_count\": 5,\n      \"created_by\": {\n        \"user_uid\": \"ab6d4ab2-19ee-4093-9995-025fa9f78273\",\n        \"first_name\": \"Sesha\",\n        \"last_name\": \"Madhav\",\n        \"email\": \"sesha@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Tech\",\n        \"emp_code\": \"2030303\",\n        \"prefix\": null,\n        \"work_phone_number\": \"9883733222\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2020-05-09T04:52:02.000Z\",\n        \"updated_at\": \"2022-07-28T10:21:40.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2023-12-26T07:27:46.714Z\",\n      \"updated_at\": \"2023-12-26T07:27:46.716Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"recurring_job_uid\": \"136b9520-8d03-11ee-996f-61df6f84f934\",\n      \"duration\": {\n        \"value\": 1,\n        \"type\": \"YEARS\"\n      },\n      \"repeat_frequency\": \"DAILY\",\n      \"repeat_every\": 30,\n      \"repeat_on\": {\n        \"byweekday\": [],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"FREQ=DAILY;INTERVAL=30;WKST=SU;DTSTART=20231127T084500;UNTIL=20241127T095000\",\n      \"job_title\": \"Cleaning washing machine\",\n      \"job_category\": {\n        \"category_name\": \"Home Cleaning\",\n        \"category_description\": \"Home Cleaning for Service Square.\",\n        \"category_uid\": \"3fee25f0-74a1-11ea-8ca5-df1d176880cb\"\n      },\n      \"customer\": {\n        \"customer_first_name\": \"Jhon\",\n        \"customer_last_name\": \"ags 123\",\n        \"customer_email\": \"jhon@ags.co\",\n        \"customer_uid\": \"4185a6c0-58d0-11e8-a06a-f1f7062602d6\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"customer_category\": {\n          \"_id\": \"5ac9fa052fc7d975d4b52cda\",\n          \"category_name\": \"Commercial\",\n          \"category_uid\": \"441a6bc0-3b1e-11e8-b0f4-d549ff224ae8\"\n        },\n        \"customer_company_name\": \"\",\n        \"customer_contact_no\": {\n          \"mobile\": \"\",\n          \"home\": \"+919952147275\",\n          \"work\": \"+919952147275\"\n        },\n        \"customer_organization\": {\n          \"organization_uid\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n          \"organization_name\": \"0 4TH ST E, ST MN 55101 (PIN: 322922310026)\",\n          \"is_active\": true,\n          \"is_deleted\": false,\n          \"organization_address\": {\n            \"city\": \"Cupertino\",\n            \"state\": \"California\",\n            \"street\": \"6 Mariani Avenue\",\n            \"country\": \"\",\n            \"landmark\": \"\",\n            \"zip_code\": \"95014\",\n            \"geo_cordinates\": [\n              37.330544431296964,\n              -122.03058298677206\n            ],\n            \"first_name\": \"Test\",\n            \"last_name\": \"\",\n            \"phone_number\": \"\",\n            \"email\": \"\"\n          },\n          \"organization_description\": null,\n          \"organization_email\": \"sabari@zuper.co\",\n          \"organization_logo\": null\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n        \"organization_name\": \"0 4TH ST E, ST MN 55101 (PIN: 322922310026)\",\n        \"no_of_customers\": 3,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"organization_address\": {\n          \"city\": \"Cupertino\",\n          \"state\": \"California\",\n          \"street\": \"6 Mariani Avenue\",\n          \"country\": \"\",\n          \"landmark\": \"\",\n          \"zip_code\": \"95014\",\n          \"geo_cordinates\": [\n            37.330544431296964,\n            -122.03058298677206\n          ],\n          \"first_name\": \"Test\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\"\n        },\n        \"organization_description\": null,\n        \"organization_email\": \"sabari@zuper.co\",\n        \"organization_logo\": null\n      },\n      \"property\": {\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"property_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Chennai \",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"geo_cordinates\": [\n            13.0826802,\n            80.2707184\n          ],\n          \"_id\": \"65449d046a9eb8ffa988ab6b\"\n        },\n        \"no_of_jobs\": 14,\n        \"property_name\": \"Crompton\",\n        \"property_uid\": \"24aa04f0-7a18-11ee-b037-6def2a19b728\"\n      },\n      \"job_start\": \"2023-11-27T08:45:00.000Z\",\n      \"job_end\": \"2024-11-21T09:50:00.000Z\",\n      \"job_count\": 12,\n      \"created_by\": {\n        \"user_uid\": \"501194d4-ab92-426c-ac64-b225f1104e62\",\n        \"first_name\": \"Aravindan\",\n        \"last_name\": \"U\",\n        \"email\": \"aravindan@zuper.co\",\n        \"external_login_id\": \"\",\n        \"home_phone_number\": null,\n        \"designation\": \"DESIGN\",\n        \"emp_code\": \"Z09123232\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2023-11-23T10:22:15.000Z\",\n        \"updated_at\": \"2023-11-23T10:22:15.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2023-11-27T08:58:04.533Z\",\n      \"updated_at\": \"2024-02-04T16:56:12.793Z\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"recurring_job_uid\": \"f4a940f0-7f9d-11ee-93cb-5be0a22f4e69\",\n      \"duration\": {\n        \"value\": 3,\n        \"type\": \"MONTHS\"\n      },\n      \"repeat_frequency\": \"WEEKLY\",\n      \"repeat_every\": 1,\n      \"repeat_on\": {\n        \"byweekday\": [\n          {\n            \"weekday\": 0,\n            \"n\": null\n          },\n          {\n            \"weekday\": 1,\n            \"n\": null\n          },\n          {\n            \"weekday\": 2,\n            \"n\": null\n          },\n          {\n            \"weekday\": 3,\n            \"n\": null\n          },\n          {\n            \"weekday\": 4,\n            \"n\": null\n          }\n        ],\n        \"bymonth\": [],\n        \"bymonthday\": []\n      },\n      \"rrule\": \"FREQ=WEEKLY;INTERVAL=1;WKST=SU;BYDAY=MO,TU,WE,TH,FR;DTSTART=20231101T080000;UNTIL=20240201T160000\",\n      \"job_title\": \"Nov 10 Recurring Test New\",\n      \"job_category\": {\n        \"category_name\": \"Installation\",\n        \"category_uid\": \"c506e890-015e-11eb-99a8-e7fcc50f879e\",\n        \"category_description\": \"<p>Category Description</p>\"\n      },\n      \"customer\": {\n        \"customer_last_name\": \"Blake\",\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"seshamadhav1998@gmail.com1\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"customer_first_name\": \"Sesha#\",\n        \"customer_category\": {\n          \"_id\": \"5abb5a0d421b2c5ed273a3a7\",\n          \"category_name\": \"Residential\",\n          \"category_uid\": \"b02dba80-3266-11e8-8c01-4905acc8cfc0\"\n        },\n        \"customer_uid\": \"2b7913c0-fd8e-11ea-abaf-7fac6d852c15\",\n        \"customer_contact_no\": {\n          \"mobile\": \"9994706475\",\n          \"home\": \"\",\n          \"work\": \"\"\n        },\n        \"customer_organization\": {\n          \"organization_uid\": \"0d64ea00-c793-11ec-bad4-49ff3910afe4\",\n          \"organization_name\": \"Sesha Test\",\n          \"organization_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar\",\n            \"landmark\": \"\",\n            \"geo_cordinates\": [\n              13.0494706,\n              80.2452214\n            ]\n          },\n          \"is_active\": false,\n          \"is_deleted\": false,\n          \"organization_email\": \"seshamadhav1998@gmail.com\",\n          \"organization_description\": \"Test\",\n          \"organization_logo\": null\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"0d64ea00-c793-11ec-bad4-49ff3910afe4\",\n        \"organization_name\": \"Sesha Test\",\n        \"no_of_customers\": 4,\n        \"organization_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar\",\n          \"landmark\": \"\",\n          \"geo_cordinates\": [\n            13.0494706,\n            80.2452214\n          ]\n        },\n        \"is_active\": false,\n        \"is_deleted\": false,\n        \"organization_email\": \"seshamadhav1998@gmail.com\",\n        \"organization_description\": \"Test\",\n        \"organization_logo\": null\n      },\n      \"job_start\": \"2023-11-03T08:00:00.000Z\",\n      \"job_end\": \"2024-02-01T16:00:00.000Z\",\n      \"job_count\": 65,\n      \"created_by\": {\n        \"user_uid\": \"ab6d4ab2-19ee-4093-9995-025fa9f78273\",\n        \"first_name\": \"Sesha\",\n        \"last_name\": \"Madhav\",\n        \"email\": \"sesha@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Tech\",\n        \"emp_code\": \"2030303\",\n        \"prefix\": null,\n        \"work_phone_number\": \"9883733222\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2020-05-09T04:52:02.000Z\",\n        \"updated_at\": \"2022-07-28T10:21:40.000Z\"\n      },\n      \"is_deleted\": false,\n      \"created_at\": \"2023-11-10T07:51:28.640Z\",\n      \"updated_at\": \"2023-11-10T07:51:28.641Z\",\n      \"id\": \"undefined\"\n    }\n  ],\n  \"total_records\": 221,\n  \"current_page\": 1,\n  \"total_pages\": 23\n}"
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
                          "recurring_job_uid": {
                            "type": "string",
                            "example": "95b85570-d6e3-11ee-839f-418ff021ceed"
                          },
                          "duration": {
                            "type": "object",
                            "properties": {
                              "value": {
                                "type": "integer",
                                "example": 2,
                                "default": 0
                              },
                              "type": {
                                "type": "string",
                                "example": "MONTHS"
                              }
                            }
                          },
                          "repeat_frequency": {
                            "type": "string",
                            "example": "WEEKLY"
                          },
                          "repeat_every": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "repeat_on": {
                            "type": "object",
                            "properties": {
                              "byweekday": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "weekday": {
                                      "type": "integer",
                                      "example": 6,
                                      "default": 0
                                    },
                                    "n": {}
                                  }
                                }
                              },
                              "bymonth": {
                                "type": "array"
                              },
                              "bymonthday": {
                                "type": "array"
                              }
                            }
                          },
                          "rrule": {
                            "type": "string",
                            "example": "FREQ=WEEKLY;INTERVAL=1;WKST=SU;BYDAY=SU;DTSTART=20240201T091500;UNTIL=20240401T102000"
                          },
                          "job_title": {
                            "type": "string",
                            "example": "New Job"
                          },
                          "job_category": {
                            "type": "object",
                            "properties": {
                              "category_name": {
                                "type": "string",
                                "example": "Home Cleaning"
                              },
                              "category_description": {
                                "type": "string",
                                "example": "Home Cleaning for Service Square."
                              },
                              "category_uid": {
                                "type": "string",
                                "example": "3fee25f0-74a1-11ea-8ca5-df1d176880cb"
                              }
                            }
                          },
                          "customer": {
                            "type": "object",
                            "properties": {
                              "customer_first_name": {
                                "type": "string",
                                "example": "Jhon"
                              },
                              "customer_last_name": {
                                "type": "string",
                                "example": "ags 123"
                              },
                              "customer_email": {
                                "type": "string",
                                "example": "jhon@ags.co"
                              },
                              "customer_uid": {
                                "type": "string",
                                "example": "4185a6c0-58d0-11e8-a06a-f1f7062602d6"
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
                              "customer_category": {
                                "type": "object",
                                "properties": {
                                  "_id": {
                                    "type": "string",
                                    "example": "5ac9fa052fc7d975d4b52cda"
                                  },
                                  "category_name": {
                                    "type": "string",
                                    "example": "Commercial"
                                  },
                                  "category_uid": {
                                    "type": "string",
                                    "example": "441a6bc0-3b1e-11e8-b0f4-d549ff224ae8"
                                  }
                                }
                              },
                              "customer_company_name": {
                                "type": "string",
                                "example": ""
                              },
                              "customer_contact_no": {
                                "type": "object",
                                "properties": {
                                  "mobile": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "home": {
                                    "type": "string",
                                    "example": "+919952147275"
                                  },
                                  "work": {
                                    "type": "string",
                                    "example": "+919952147275"
                                  }
                                }
                              },
                              "customer_organization": {
                                "type": "object",
                                "properties": {
                                  "organization_uid": {
                                    "type": "string",
                                    "example": "040c4610-0ea5-11ee-9f8e-0f93d9851045"
                                  },
                                  "organization_name": {
                                    "type": "string",
                                    "example": "0 4TH ST E, ST MN 55101 (PIN: 322922310026)"
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
                                  "organization_address": {
                                    "type": "object",
                                    "properties": {
                                      "city": {
                                        "type": "string",
                                        "example": "Cupertino"
                                      },
                                      "state": {
                                        "type": "string",
                                        "example": "California"
                                      },
                                      "street": {
                                        "type": "string",
                                        "example": "6 Mariani Avenue"
                                      },
                                      "country": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "landmark": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "zip_code": {
                                        "type": "string",
                                        "example": "95014"
                                      },
                                      "geo_cordinates": {
                                        "type": "array",
                                        "items": {
                                          "type": "number",
                                          "example": 37.330544431297,
                                          "default": 0
                                        }
                                      },
                                      "first_name": {
                                        "type": "string",
                                        "example": "Test"
                                      },
                                      "last_name": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "phone_number": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "email": {
                                        "type": "string",
                                        "example": ""
                                      }
                                    }
                                  },
                                  "organization_description": {},
                                  "organization_email": {
                                    "type": "string",
                                    "example": "sabari@zuper.co"
                                  },
                                  "organization_logo": {}
                                }
                              }
                            }
                          },
                          "organization": {
                            "type": "object",
                            "properties": {
                              "organization_uid": {
                                "type": "string",
                                "example": "040c4610-0ea5-11ee-9f8e-0f93d9851045"
                              },
                              "organization_name": {
                                "type": "string",
                                "example": "0 4TH ST E, ST MN 55101 (PIN: 322922310026)"
                              },
                              "no_of_customers": {
                                "type": "integer",
                                "example": 3,
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
                              "organization_address": {
                                "type": "object",
                                "properties": {
                                  "city": {
                                    "type": "string",
                                    "example": "Cupertino"
                                  },
                                  "state": {
                                    "type": "string",
                                    "example": "California"
                                  },
                                  "street": {
                                    "type": "string",
                                    "example": "6 Mariani Avenue"
                                  },
                                  "country": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "landmark": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "zip_code": {
                                    "type": "string",
                                    "example": "95014"
                                  },
                                  "geo_cordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "number",
                                      "example": 37.330544431297,
                                      "default": 0
                                    }
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Test"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "phone_number": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": ""
                                  }
                                }
                              },
                              "organization_description": {},
                              "organization_email": {
                                "type": "string",
                                "example": "sabari@zuper.co"
                              },
                              "organization_logo": {}
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
                              "is_active": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "property_address": {
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
                                    "example": "SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar, Chennai, Tamil Nadu, India"
                                  },
                                  "country": {
                                    "type": "string",
                                    "example": "India"
                                  },
                                  "landmark": {},
                                  "zip_code": {
                                    "type": "string",
                                    "example": "600017"
                                  },
                                  "geo_cordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "number",
                                      "example": 13.0494706,
                                      "default": 0
                                    }
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "64df0dee7c0c9e18fa1777e1"
                                  }
                                }
                              },
                              "property_image": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0d1d0360-35a3-11ed-b193-e956a56bc479.png"
                              },
                              "no_of_jobs": {
                                "type": "integer",
                                "example": 13,
                                "default": 0
                              },
                              "property_name": {
                                "type": "string",
                                "example": "Testing_Sp"
                              },
                              "property_uid": {
                                "type": "string",
                                "example": "9d9a84f0-dbf6-11ec-8c58-0d3bf4d5a49f"
                              }
                            }
                          },
                          "service_contract": {
                            "type": "object",
                            "properties": {
                              "prefix": {
                                "type": "string",
                                "example": "Q1"
                              },
                              "contract_uid": {
                                "type": "string",
                                "example": "8295b3f0-d172-11ee-8824-f378626de6e5"
                              },
                              "ref_no": {
                                "type": "string",
                                "example": ""
                              },
                              "contract_name": {
                                "type": "string",
                                "example": "contractsavebutton"
                              },
                              "description": {
                                "type": "string",
                                "example": "<p>contract</p>"
                              },
                              "start_date": {
                                "type": "string",
                                "example": "2024-02-21T18:30:00.000Z"
                              },
                              "end_date": {
                                "type": "string",
                                "example": "2025-06-21T18:29:59.000Z"
                              },
                              "approval_status": {
                                "type": "string",
                                "example": "APPROVED"
                              },
                              "created_by": {
                                "type": "integer",
                                "example": 19397,
                                "default": 0
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
                                "example": "2024-02-22T11:07:04.501Z"
                              },
                              "contract_number": {
                                "type": "integer",
                                "example": 962,
                                "default": 0
                              }
                            }
                          },
                          "job_start": {
                            "type": "string",
                            "example": "2024-03-07T09:15:00.000Z"
                          },
                          "job_end": {
                            "type": "string",
                            "example": "2024-04-04T10:20:00.000Z"
                          },
                          "job_count": {
                            "type": "integer",
                            "example": 2,
                            "default": 0
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "d083c6cb-9202-41fc-8ae2-e986939c5471"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Jerin"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Ajay"
                              },
                              "email": {
                                "type": "string",
                                "example": "jerin@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "J001"
                              },
                              "prefix": {},
                              "work_phone_number": {},
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9f1e58b0-5396-11ee-af3b-ed82d39ae946.jpg"
                              },
                              "hourly_labor_charge": {
                                "type": "number",
                                "example": 54.59,
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
                                "example": "2022-02-16T10:00:42.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-01-23T08:35:19.000Z"
                              }
                            }
                          },
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-02-29T09:19:05.288Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-02-29T09:19:05.288Z"
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
                      "example": 221,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 23,
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