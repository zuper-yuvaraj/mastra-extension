---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Invoice Details

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
    "/invoice/{invoice_uid}": {
      "get": {
        "summary": "Get Invoice Details",
        "description": "",
        "operationId": "get-invoice-details",
        "parameters": [
          {
            "name": "invoice_uid",
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
                        "invoice_uid": "a53a5920-9a80-11ee-8a1f-49ba020888f8",
                        "description": "Auto generated from Contract",
                        "invoice_date": "2023-12-13T18:30:00.000Z",
                        "due_date": "2024-02-12T18:29:59.000Z",
                        "customer": {
                          "customer_uid": "35279010-93bd-11ec-b675-b9a129ac10eb",
                          "customer_first_name": "Santhanapandian",
                          "customer_last_name": "",
                          "customer_category": {
                            "_id": "5abb5a0d421b2c5ed273a3a7",
                            "category_name": "Residential",
                            "category_uid": "b02dba80-3266-11e8-8c01-4905acc8cfc0"
                          },
                          "customer_organization": {
                            "updated_at": "2023-08-02T04:11:04.727Z",
                            "created_at": "2023-03-03T11:08:36.995Z",
                            "is_deleted": false,
                            "is_active": true,
                            "custom_fields": [
                              {
                                "label": "LookUp",
                                "value": "",
                                "type": "LOOKUP",
                                "module_name": "PRODUCT",
                                "hide_to_fe": false,
                                "_id": "6405855f380003cea418cac6"
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
                            "organization_billing_address": {
                              "city": "Chennai",
                              "state": "Tamil Nadu",
                              "street": "Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India",
                              "landmark": "",
                              "_id": "6464bdc1eb32d67c9816b3d1"
                            },
                            "organization_address": {
                              "city": "Chennai",
                              "state": "Tamil Nadu",
                              "street": "Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India",
                              "landmark": "",
                              "geo_cordinates": [
                                12.9733389,
                                80.2508572
                              ],
                              "_id": "6464bdc1eb32d67c9816b3d2"
                            },
                            "organization_email": null,
                            "organization_description": "<p>Test Org Desc</p>",
                            "organization_logo": null,
                            "organization_name": "TEST ORG 0005",
                            "organization_uid": "becf61e0-b9b3-11ed-b623-1b22cc5dd28b"
                          },
                          "customer_company_name": "",
                          "customer_email": "santhanapandian@zuper.co",
                          "customer_all_addresses": [
                            {
                              "first_name": "Santhanapandian",
                              "phone_number": "9000932246",
                              "email": "santhanapandian@zuper.co",
                              "city": "Chennai ",
                              "state": "Tamil Nadu ",
                              "street": "SKCL Harmony Tower, Gangai Karai Puram, T. Nagar",
                              "country": "India",
                              "landmark": "",
                              "zip_code": "600017",
                              "geo_cordinates": [
                                13.0494258,
                                80.2451968
                              ],
                              "is_primary": false,
                              "_id": "64c7a3b7ccb5f89a13dd3b42"
                            },
                            {
                              "first_name": "Santhanapandian",
                              "phone_number": "9000932246",
                              "email": "santhanapandian@zuper.co",
                              "city": "Chennai ",
                              "state": "Tamil Nadu ",
                              "street": "T. Nagar",
                              "country": "India",
                              "landmark": "",
                              "geo_cordinates": [
                                13.0417591,
                                80.2340761
                              ],
                              "is_primary": false,
                              "_id": "64c7a3b7ccb5f89a13dd3b43"
                            },
                            {
                              "first_name": "Santhanapandian",
                              "last_name": "",
                              "phone_number": "9000932246",
                              "email": "santhanapandian@zuper.co",
                              "city": "Cortland ",
                              "state": "New York ",
                              "street": "NY, USA",
                              "country": "United States",
                              "landmark": "",
                              "zip_code": "13045",
                              "geo_cordinates": [
                                42.6011813,
                                -76.1804843
                              ],
                              "is_primary": false,
                              "_id": "652cd055888b9b1b3cccfea8"
                            }
                          ],
                          "customer_address": {
                            "city": "Cortland ",
                            "state": "New York ",
                            "street": "NY, USA",
                            "country": "United States",
                            "landmark": "",
                            "zip_code": "13045",
                            "geo_cordinates": [
                              42.6011813,
                              -76.1804843
                            ],
                            "first_name": "Santhanapandian",
                            "last_name": "",
                            "phone_number": "9000932246",
                            "email": "santhanapandian@zuper.co"
                          },
                          "customer_billing_address": {
                            "city": "Cortland ",
                            "state": "New York ",
                            "street": "NY, USA",
                            "country": "United States",
                            "landmark": "",
                            "zip_code": "13045",
                            "geo_cordinates": [
                              42.6011813,
                              -76.1804843
                            ],
                            "first_name": "Santhanapandian",
                            "last_name": "",
                            "phone_number": "9000932246",
                            "email": "santhanapandian@zuper.co"
                          },
                          "custom_fields": [
                            {
                              "label": "default input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652cd055888b9b1b3cccfea9"
                            },
                            {
                              "label": "Invoice Frequency Weekly Value",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652cd055888b9b1b3cccfeaa"
                            },
                            {
                              "label": "Invoice Frequency Monthly Value",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "652cd055888b9b1b3cccfeab"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "652cd055888b9b1b3cccfeac"
                            },
                            {
                              "label": "Text Input2",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "652cd055888b9b1b3cccfead"
                            },
                            {
                              "label": "Quickbooks ID",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": true,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14ba5"
                            },
                            {
                              "label": "Number min max validation",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14ba6"
                            },
                            {
                              "label": "Text Area",
                              "value": "",
                              "type": "MULTI_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14ba7"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14ba8"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14ba9"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14baa"
                            },
                            {
                              "label": "Date And Time",
                              "value": "",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14bab"
                            },
                            {
                              "label": "LookUp",
                              "value": "",
                              "type": "LOOKUP",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14bac"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14bad"
                            },
                            {
                              "label": "Sage Contact ID",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14bae"
                            },
                            {
                              "label": "LookUp1",
                              "value": "",
                              "type": "LOOKUP",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14baf"
                            },
                            {
                              "label": "Select",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14bb0"
                            },
                            {
                              "label": "Checkbox2",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "64c7b8eeccb5f89a13e14bb1"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "64c7b8eeccb5f89a13e14bb2"
                            },
                            {
                              "label": "Select",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "64c7b8eeccb5f89a13e14bb3"
                            },
                            {
                              "label": "LookUp",
                              "value": "",
                              "type": "LOOKUP",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "64c7b8eeccb5f89a13e14bb4"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "64c7b8eeccb5f89a13e14bb5"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "64c7b8eeccb5f89a13e14bb6"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "64c7b8eeccb5f89a13e14bb7"
                            },
                            {
                              "label": "customer Field",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "64c7b8eeccb5f89a13e14bb8"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test123",
                              "group_uid": "17e21a10-7f6d-11ed-afd9-b91d9207a4f4",
                              "_id": "64c7b8eeccb5f89a13e14bb9"
                            },
                            {
                              "label": "Gorgias ID",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": true,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649e8559ab237263a6b33111"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Resedential",
                              "group_uid": "a6c27940-0e66-11ee-9f8e-0f93d9851045",
                              "_id": "649e8559ab237263a6b3311c"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test feb 17",
                              "group_uid": "aed7d5f0-aece-11ed-84d6-69719a49371e",
                              "_id": "649e8559ab237263a6b3311d"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Commercial",
                              "group_uid": "ae941f20-0e66-11ee-9f8e-0f93d9851045",
                              "_id": "649e8559ab237263a6b33126"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Resedential and commercial",
                              "group_uid": "ba1d9ce0-0e66-11ee-9f8e-0f93d9851045",
                              "_id": "649e8559ab237263a6b33127"
                            },
                            {
                              "label": "Text Area",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Resedential and commercial",
                              "group_uid": "ba1d9ce0-0e66-11ee-9f8e-0f93d9851045",
                              "_id": "649e8559ab237263a6b33128"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test cate",
                              "group_uid": "bf156ff0-0f44-11ee-9fe2-6b31c0478c87",
                              "_id": "649e8559ab237263a6b33129"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Test cate",
                              "group_uid": "bf156ff0-0f44-11ee-9fe2-6b31c0478c87",
                              "_id": "649e8559ab237263a6b3312b"
                            }
                          ],
                          "accounts": {
                            "ltv": 4300.1,
                            "receivables": 80000.7,
                            "credits": 600,
                            "tax": {
                              "tax_exempt": false
                            },
                            "billing_frequency": "623c04a7378fd521b0e340af",
                            "payment_term": "5d84c1693954a6638587479a",
                            "tax_group": "64c7982dccb5f89a13db03ca"
                          },
                          "is_active": true,
                          "is_deleted": false,
                          "has_card_on_file": true,
                          "created_at": "2022-02-22T08:55:39.170Z",
                          "updated_at": "2023-12-14T13:07:29.467Z",
                          "customer_contact_no": {
                            "mobile": "9000932246",
                            "home": "9000932245",
                            "work": ""
                          }
                        },
                        "organization": {
                          "updated_at": "2023-08-02T04:11:04.727Z",
                          "created_at": "2023-03-03T11:08:36.995Z",
                          "is_deleted": false,
                          "is_active": true,
                          "custom_fields": [
                            {
                              "label": "LookUp",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "_id": "6405855f380003cea418cac6"
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
                          "organization_billing_address": {
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India",
                            "landmark": "",
                            "_id": "6464bdc1eb32d67c9816b3d1"
                          },
                          "organization_address": {
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Turyaa Chennai, Rajiv Gandhi Salai, Elango Nagar, Perungudi, India",
                            "landmark": "",
                            "geo_cordinates": [
                              12.9733389,
                              80.2508572
                            ],
                            "_id": "6464bdc1eb32d67c9816b3d2"
                          },
                          "no_of_customers": 4,
                          "organization_email": null,
                          "organization_description": "<p>Test Org Desc</p>",
                          "organization_logo": null,
                          "organization_name": "TEST ORG 0005",
                          "organization_uid": "becf61e0-b9b3-11ed-b623-1b22cc5dd28b"
                        },
                        "property": {
                          "updated_at": "2023-11-03T10:42:18.434Z",
                          "created_at": "2023-08-21T11:58:00.578Z",
                          "is_deleted": false,
                          "is_active": true,
                          "custom_fields": [
                            {
                              "label": "DateTime Input",
                              "value": "2023-08-01 22:58:00",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b83"
                            },
                            {
                              "label": "Text Area",
                              "value": "",
                              "type": "MULTI_LINE",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b84"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b85"
                            },
                            {
                              "label": "Select",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b86"
                            },
                            {
                              "label": "Time Input",
                              "value": "04:31:00",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b87"
                            },
                            {
                              "label": "File Input",
                              "value": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/ccc290a0-a11d-11ed-9cee-1d71b5cbf00e.png",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b88"
                            },
                            {
                              "label": "Date Input",
                              "value": "2021-06-09",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b89"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b8a"
                            },
                            {
                              "label": "Radio",
                              "value": "Off",
                              "type": "RADIO",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b8b"
                            },
                            {
                              "label": "Custom Address Field",
                              "value": "bam",
                              "type": "MULTI_LINE",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b8c"
                            },
                            {
                              "label": "Text Input",
                              "value": "fsf",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "group_name": "Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178b8d"
                            },
                            {
                              "label": "Text Area",
                              "value": "nm",
                              "type": "MULTI_LINE",
                              "hide_to_fe": false,
                              "group_name": "Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178b8e"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "group_name": "Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178b8f"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "group_name": "Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178b90"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "2023-08-11 14:06:00",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "group_name": "Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178b91"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "group_name": "Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178b92"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "group_name": "Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178b93"
                            },
                            {
                              "label": "Radio",
                              "value": "",
                              "type": "RADIO",
                              "hide_to_fe": false,
                              "group_name": "Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178b94"
                            },
                            {
                              "label": "Land Range",
                              "value": "25% cents",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "group_name": "Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178b95"
                            },
                            {
                              "label": "Expectation",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "group_name": "Real Estate Property Details",
                              "group_uid": "891e27d0-3a9f-11ee-bf9b-c3f2de9f41da",
                              "_id": "64e4c0dc7c0c9e18fa178b96"
                            },
                            {
                              "label": "Address",
                              "value": "",
                              "type": "MULTI_LINE",
                              "hide_to_fe": false,
                              "group_name": "Real Estate Property Details",
                              "group_uid": "891e27d0-3a9f-11ee-bf9b-c3f2de9f41da",
                              "_id": "64e4c0dc7c0c9e18fa178b97"
                            },
                            {
                              "label": "Date Input",
                              "value": "2023-08-30",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "group_name": "Real Estate Property Details",
                              "group_uid": "891e27d0-3a9f-11ee-bf9b-c3f2de9f41da",
                              "_id": "64e4c0dc7c0c9e18fa178b98"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "group_name": "Real Estate Property Details",
                              "group_uid": "891e27d0-3a9f-11ee-bf9b-c3f2de9f41da",
                              "_id": "64e4c0dc7c0c9e18fa178b99"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "group_name": "Real Estate Property Details",
                              "group_uid": "891e27d0-3a9f-11ee-bf9b-c3f2de9f41da",
                              "_id": "64e4c0dc7c0c9e18fa178b9a"
                            },
                            {
                              "label": "Home Selection",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "group_name": "Real Estate Property Details",
                              "group_uid": "891e27d0-3a9f-11ee-bf9b-c3f2de9f41da",
                              "_id": "64e4c0dc7c0c9e18fa178b9b"
                            },
                            {
                              "label": "Radio",
                              "value": "",
                              "type": "RADIO",
                              "hide_to_fe": false,
                              "group_name": "Real Estate Property Details",
                              "group_uid": "891e27d0-3a9f-11ee-bf9b-c3f2de9f41da",
                              "_id": "64e4c0dc7c0c9e18fa178b9c"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "group_name": "Real Estate Property Details",
                              "group_uid": "891e27d0-3a9f-11ee-bf9b-c3f2de9f41da",
                              "_id": "64e4c0dc7c0c9e18fa178b9d"
                            },
                            {
                              "label": "PTI",
                              "value": "PTI",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b9e"
                            },
                            {
                              "label": "PTT",
                              "value": "",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178b9f"
                            },
                            {
                              "label": "PDD",
                              "value": "",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178ba0"
                            },
                            {
                              "label": "PC",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178ba1"
                            },
                            {
                              "label": "PDT",
                              "value": "",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178ba2"
                            },
                            {
                              "label": "Group Name",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "hide_to_fe": false,
                              "group_name": "Property Common Group",
                              "group_uid": "1e215b30-35a2-11ed-b193-e956a56bc479",
                              "_id": "64e4c0dc7c0c9e18fa178ba3"
                            },
                            {
                              "label": "Date test Input",
                              "value": "2021-06-17",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "_id": "64e4c0dc7c0c9e18fa178ba4"
                            },
                            {
                              "label": "Date Input",
                              "value": "2021-06-11",
                              "type": "DATE",
                              "hide_to_fe": false,
                              "group_name": "Group 1",
                              "group_uid": "9a28b170-b898-11eb-9ee9-33aaa1a2f3be",
                              "_id": "64e4c0dc7c0c9e18fa178ba5"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "2021-06-10 15:10:00",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "group_name": "Group 1",
                              "group_uid": "9a28b170-b898-11eb-9ee9-33aaa1a2f3be",
                              "_id": "64e4c0dc7c0c9e18fa178ba6"
                            },
                            {
                              "label": "Time Input",
                              "value": "20:40:00",
                              "type": "TIME",
                              "hide_to_fe": false,
                              "group_name": "Group 1",
                              "group_uid": "9a28b170-b898-11eb-9ee9-33aaa1a2f3be",
                              "_id": "64e4c0dc7c0c9e18fa178ba7"
                            },
                            {
                              "label": "Radio",
                              "value": "On",
                              "type": "RADIO",
                              "hide_to_fe": false,
                              "group_name": "Custom fields - Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178ba8"
                            },
                            {
                              "label": "File Input",
                              "value": " ",
                              "type": "FILE",
                              "hide_to_fe": false,
                              "group_name": "Custom fields - Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178ba9"
                            },
                            {
                              "label": "Custom Dropdown",
                              "value": "Aero",
                              "type": "SINGLE_ITEM",
                              "hide_to_fe": false,
                              "group_name": "Custom fields - Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178baa"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "2023-08-14 16:45:39",
                              "type": "DATETIME",
                              "hide_to_fe": false,
                              "group_name": "Custom fields - Test",
                              "group_uid": "3e057e40-7d4b-11ed-afd9-b91d9207a4f4",
                              "_id": "64e4c0dc7c0c9e18fa178bab"
                            }
                          ],
                          "property_address": {
                            "city": "Bengaluru ",
                            "state": "Karnataka ",
                            "street": "Whitefield Main Road Pattandur Agrahara ",
                            "country": "India",
                            "landmark": "Whitefield Bus stop",
                            "zip_code": "560066",
                            "geo_cordinates": [
                              12.9874885,
                              77.736655
                            ],
                            "_id": "64e4c0dc7c0c9e18fa178bac"
                          },
                          "property_image": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/361cf1c0-7d59-11eb-8302-750c30d4731b.jpg",
                          "no_of_jobs": 80,
                          "property_name": "Ascendas IT Park",
                          "property_uid": "6b33fd30-7d5a-11eb-8302-750c30d4731b"
                        },
                        "prefix": "AC_Auto_Invoice",
                        "customer_billing_address": {
                          "landmark": "",
                          "city": "Chennai ",
                          "state": "Tamil Nadu ",
                          "street": "T. Nagar",
                          "country": "",
                          "geo_cordinates": [
                            13.0417591,
                            80.2340761
                          ],
                          "first_name": "Santhanapandian",
                          "last_name": "",
                          "phone_number": "",
                          "email": "santhanapandian@zuper.co"
                        },
                        "customer_service_address": {
                          "landmark": "",
                          "city": "Chennai ",
                          "state": "Tamil Nadu ",
                          "street": "SKCL Harmony Tower, Gangai Karai Puram, T. Nagar",
                          "country": "",
                          "geo_cordinates": [
                            13.0494258,
                            80.2451968
                          ],
                          "first_name": "Santhanapandian",
                          "last_name": "",
                          "phone_number": "",
                          "email": "santhanapandian@zuper.co"
                        },
                        "sub_total": 0,
                        "total": 0,
                        "total_discount": null,
                        "template": {
                          "type": "INVOICE",
                          "template_name": "Invoice Hilton",
                          "template_description": "Invoice",
                          "template": "<meta charset=\"utf-8\">\n  <title>LinkNet\n  </title>\n  <!-- <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css\"> -->\n  <link href=\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,400;0,600;0,700;0,900;1,400&display=swap\" rel=\"stylesheet\">\n  \n  <style>\n\t  @page { margin: 0 }\n\t  body { margin: 0; font-family: \"Source Sans Pro\"; zoom: 0.85;}\n\t  .sheet {\n\t    margin: 0;\n\t    overflow: hidden;\n\t    position: relative;\n\t    box-sizing: border-box;\n\t    page-break-after: always;\n      \n\t  }\n\n\t  /** Paper sizes **/\n\t  body.A3               .sheet { width: 297mm; height: 419mm }\n\t  body.A3.landscape     .sheet { width: 420mm; height: 296mm }\n\t  body.A4               .sheet { width: 210mm; height: 296mm }\n\t  body.A4.landscape     .sheet { width: 297mm; height: 209mm }\n\t  body.A5               .sheet { width: 148mm; height: 209mm }\n\t  body.A5.landscape     .sheet { width: 210mm; height: 147mm }\n\t  body.letter           .sheet { width: 216mm; height: 279mm }\n\t  body.letter.landscape .sheet { width: 280mm; height: 215mm }\n\t  body.legal            .sheet { width: 216mm; height: 356mm }\n\t  body.legal.landscape  .sheet { width: 357mm; height: 215mm }\n\n\t  /** Padding area **/\n\t  .sheet.padding-10mm { padding: 10mm }\n\t  .sheet.padding-15mm { padding: 15mm }\n\t  .sheet.padding-20mm { padding: 20mm }\n\t  .sheet.padding-25mm { padding: 25mm }\n\n\t  /** For screen preview **/\n\t  @media screen {\n\t    body { background: #e0e0e0 }\n\t    .sheet {\n\t      background: white;\n\t      box-shadow: 0 .5mm 2mm rgba(0,0,0,.3);\n\t      margin: 5mm auto;\n\t    }\n\t  }\n\n\t  /** Fix for Chrome issue #273306 **/\n\t  @media print {\n\t             body.A3.landscape { width: 420mm }\n\t    body.A3, body.A4.landscape { width: 297mm }\n\t    body.A4, body.A5.landscape { width: 210mm }\n\t    body.A5                    { width: 148mm }\n\t    body.letter, body.legal    { width: 216mm }\n\t    body.letter.landscape      { width: 280mm }\n\t    body.legal.landscape       { width: 357mm }\n\t  }\n\n    .logo {\n      width: 50%;\n    }\n  </style>\n\n  <!-- Set page size here: A5, A4 or A3 -->\n  <!-- Set also \"landscape\" if you need -->\n  <style>  \n  @page { size: A4 }\n         *{font-size: 13px; font-family: \"Source Sans Pro\"; }\n         .invoice-box {\n         line-height: 24px;\n         color: #555;\n         }\n         table{\n         border-collapse: collapse;\n         border: 1px solid #5C5C5C;\n         font-weight: normal;\n         }\n         tr, th, td {  \n         border-collapse: collapse;\n         /*border: 1px solid #5C5C5C;*/\n         font-weight: normal;\n         }\n         tr{\n         text-align: left;\n         padding-top:5px;\n         }\n       table { overflow: visible !important; }\nthead { display: table-row-group }\ntfoot { display: table-row-group }\ntr { page-break-inside: avoid;}\n  </style>\n\n\n<body>\n  <!-- Each sheet element should have the class \"sheet\" -->\n  <!-- \"padding-**mm\" is optional: you can set 10, 15, 20 or 25 -->\n  <section class=\"sheet padding-10mm\">\n    <div id=\"\">\n        <!-- HEADER -->\n        <div style=\"\">\n          <table style=\"width: 100%; border: none;\">\n            <tbody>\n              <td style=\"width: 50%\">\n                <img class=\"logo\" src=\"https://s3.ap-south-1.amazonaws.com/images.zuper/icons/color_logo.png\" />\n              </td>\n              <td>\n              </td>\n              <td style=\"text-align: right; width: 50%\">\n                <h1 style=\"font-size: 25px; margin-bottom: 0\">Invoice</h1>\n                <p>Invoice # <b>{{invoice_no}}</b><br>Invoice Date : <b>{{formatDateWithTimeZone invoice_date 'DD/MM/YYYY' timezone}}</b><br>Due Date : <b>{{formatDateWithTimeZone due_date 'MM/DD/YYYY' timezone}}</b> \n              </td>\n            </tbody>\n          </table>\n          <hr style=\"margin-top: 20px; margin-bottom: 10px\">\n        </div>\n    </div>\n\n\n    <!-- BILL & SHIP TO -->\n    <!-- BILL & SHIP TO -->\n    <table style=\"width: 100%; border: none; margin-top: 20px;\">\n      <tbody>\n        <td style=\"width: 50%; vertical-align: top;\">\n          <b>Service Address:</b>\n          <p>{{customer.customer_first_name}} {{customer.customer_last_name}}<br>\n          {{customer_service_address.street}}, <br>{{customer_service_address.city}}, <br> {{customer_service_address.state}} {{customer_service_address.zip_code}} \n          {{#if customer_service_address.email}}<br><br><span> Email: </span>{{customer_service_address.email}}</span>{{/if}}\n          {{#if customer_service_address.phone_number}}<br><span> Phone: </span>{{customer_service_address.phone_number}}</span>{{/if}}\n        </p>\n        </td>\n        <td style=\"width: 50%\">\n          <b>Billing Address:</b>\n          <p>{{customer.customer_first_name}} {{customer.customer_last_name}}<br>\n          {{customer_billing_address.street}}, <br>{{customer_billing_address.city}}, <br> {{customer_billing_address.state}} {{customer_billing_address.zip_code}} \n          {{#if customer_billing_address.email}}<br><br><span> Email: </span>{{customer_billing_address.email}}</span>{{/if}}\n          {{#if customer_billing_address.phone_number}}<br><span> Phone: </span>{{customer_billing_address.phone_number}}</span>{{/if}}\n        </p>\n        </td>\n      </tbody>\n    </table>\n\n\n      \n        <table style=\"width: 100%;margin-top: 35px;\">\n          <thead>\n          <tr style=\"border: 1px solid #5C5C5C; background: #25262a; color: #FFF\">\n            <th style=\"width: 5%;text-align: center;\">#</th>\n            <th style=\"width: 41%;text-align: center;\">Description</th>\n            <th style=\"width: 10%;text-align: center;\">QTY</th>\n            <th style=\"width: 10%;text-align: center;\">Unit Price</th>\n            <th style=\"width: 15%;text-align: center;\">Amount</th>\n          </tr>\n              </thead>\n              <tbody>\n                  \t{{#each line_items}}\n                      <tr>\n                        <td style=\"border: 1px solid #5C5C5C;padding-left: 5px;\">{{add @index 1}}</td>\n                        <td style=\"border: 1px solid #5C5C5C;padding-left: 5px;\">{{name}}<br> {{description}}</td>\n                        <td style=\"text-align: center;border: 1px solid #5C5C5C;\">{{quantity}}</td>\n                        <td style=\"text-align: center;border: 1px solid #5C5C5C;\">${{roundNumber unit_price 2}}</td>\n                        <td style=\"text-align: center;border: 1px solid #5C5C5C;\">${{roundNumber total 2}}</td>\n                      </tr>\n                  {{/each}}             \n           \n      </tbody></table>\n\n      <table style=\"width: 100%;margin-top: 15px; border: none\">\n        <tbody>\n          <tr>\n            <td style=\"width: 40%\">\n                {{#if remarks}}\n                    <b>Remarks:</b>{{remarks}}\n                {{/if}}\n            </td>\n            <td style=\"width: 50%\">\n\n              <table style=\"width: 100%; border: none\">\n                <tbody>\n                  <tr>\n                    <td style=\"text-align: right; width: 85%\">Subtotal</td>\n                    <td style=\"text-align: right;\">${{roundNumber sub_total 2}}</td>          \n                    </tr>\n                    {{#each tax}}\n                    <tr>\n                      <td style=\"text-align: right; width: 85%\">{{tax_name}} at {{tax_percent}}%</td>\n                      <td style=\"text-align: right;\">${{roundNumber tax_amount 2}}</td> \n                    </tr> \n                    {{/each}}\n                    <tr>\n                      <td style=\"text-align: right; width: 85%; font-weight: bold;\">Total Amount</td>\n                      <td style=\"text-align: right; font-weight: bold;\">${{roundNumber total 2}}</td> \n                    </tr>   \n\n                    \n                    {{#each payment_history}}\n                    <tr>\n                      <td style=\"text-align: right;  width: 85%\">Payment Received - {{formatDateWithTimeZone created_at 'MM/DD/YYYY' 'America/New_York'}}</td>\n                      <td style=\"text-align: right;\">\n                        ${{roundNumber amount 2}}\n                      </td> \n                    </tr>\n                    {{/each}}\n                    {{#if amount_due}}\n                    <tr style=\"margin-top: 20px\">\n                      <td style=\"text-align: right; font-weight: bold;\">Total Due as of {{now \"%d/%m/%Y\"}} :</td>\n                      <td style=\"text-align: right; font-weight: bold;\">${{roundNumber amount_due 2}}</td> \n                    </tr>          \n                    {{/if}}\n        \n                </tbody>\n              </table> \n\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n  </section>\n\n  <div id=\"pageFooter\" style=\"width: 100%;\">\n    <p style=\"font-size: 9px; margin-top: 0px; text-align: center\">\n     Link Net | <a href=\"http://www.linknet.co.id\" style=\"font-size: 9px;\">http://www.linknet.co.id</a>\n    </p>\n  </div>\n \n</body>\n</html>",
                          "template_uid": "1ed34d90-e4ec-11e9-9b2d-3bcbe98b969e",
                          "is_deleted": false,
                          "template_options": {
                            "format": "A4",
                            "orientation": "portrait",
                            "border": {
                              "top": "10",
                              "right": "10",
                              "bottom": "10",
                              "left": "10"
                            }
                          },
                          "render_engine": "PHANTOM"
                        },
                        "tags": [],
                        "invoice_status": "PAID",
                        "custom_fields": [],
                        "status_history": [
                          {
                            "status_name": "DRAFT",
                            "done_by": {
                              "user_uid": "15e00bfa-fbcb-4d46-a7c1-c7b5910441c0",
                              "first_name": "Marlon",
                              "last_name": "S A",
                              "email": "santhanapandian@zuper.co",
                              "external_login_id": null,
                              "home_phone_number": null,
                              "designation": "Admin",
                              "emp_code": "Z082",
                              "prefix": null,
                              "work_phone_number": null,
                              "mobile_phone_number": null,
                              "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/80c94b80-20b1-11ee-9dcd-affe7f3e9b1d.jpg",
                              "hourly_labor_charge": 120,
                              "is_active": true,
                              "is_deleted": false,
                              "created_at": "2022-02-22T06:03:54.000Z",
                              "updated_at": "2023-11-17T07:14:24.000Z"
                            },
                            "done_by_type": "EMPLOYEE",
                            "_id": "657afc3d989f0dfd8de3430a",
                            "created_at": "2023-12-14T12:59:41.438Z"
                          },
                          {
                            "status_name": "PAID",
                            "remarks": "Paid",
                            "done_by": {
                              "user_uid": "15e00bfa-fbcb-4d46-a7c1-c7b5910441c0",
                              "first_name": "Marlon",
                              "last_name": "S A",
                              "email": "santhanapandian@zuper.co",
                              "external_login_id": null,
                              "home_phone_number": null,
                              "designation": "Admin",
                              "emp_code": "Z082",
                              "prefix": null,
                              "work_phone_number": null,
                              "mobile_phone_number": null,
                              "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/80c94b80-20b1-11ee-9dcd-affe7f3e9b1d.jpg",
                              "hourly_labor_charge": 120,
                              "is_active": true,
                              "is_deleted": false,
                              "created_at": "2022-02-22T06:03:54.000Z",
                              "updated_at": "2023-11-17T07:14:24.000Z"
                            },
                            "done_by_type": "EMPLOYEE",
                            "_id": "657afe1110cd290f1abcbed7",
                            "created_at": "2023-12-14T13:07:29.535Z"
                          }
                        ],
                        "payment_term": {
                          "payment_term_name": "two month term",
                          "no_of_days": 60,
                          "payment_term_uid": "82f0e860-db9f-11e9-a35c-3301ecc1dbf7"
                        },
                        "service_contract": {
                          "contract_uid": "f1ae7dc0-a091-11ed-9cee-1d71b5cbf00e",
                          "ref_no": "",
                          "contract_name": "Contract",
                          "description": "<p>Contract Test</p>",
                          "start_date": "2023-01-31T18:30:00.000Z",
                          "end_date": "2024-01-31T18:29:59.000Z",
                          "custom_fields": [
                            {
                              "label": "Dealer",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed87b"
                            },
                            {
                              "label": "Test Contract",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed87c"
                            },
                            {
                              "label": "Text Input",
                              "value": "",
                              "type": "SINGLE_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed87d"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed87e"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed87f"
                            },
                            {
                              "label": "Time Input",
                              "value": "",
                              "type": "TIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed880"
                            },
                            {
                              "label": "Text Area",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed881"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed882"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed883"
                            },
                            {
                              "label": "Text Area",
                              "value": "",
                              "type": "MULTI_LINE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed884"
                            },
                            {
                              "label": "Date Input",
                              "value": "",
                              "type": "DATE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed885"
                            },
                            {
                              "label": "Select",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed886"
                            },
                            {
                              "label": "DateTime Input",
                              "value": "2022-09-20 12:48:00",
                              "type": "DATETIME",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed887"
                            },
                            {
                              "label": "Checkbox",
                              "value": "",
                              "type": "MULTI_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed888"
                            },
                            {
                              "label": "Select",
                              "value": "",
                              "type": "SINGLE_ITEM",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed889"
                            },
                            {
                              "label": "Radio",
                              "value": "",
                              "type": "RADIO",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed88a"
                            },
                            {
                              "label": "Radio",
                              "value": "",
                              "type": "RADIO",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed88b"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed88c"
                            },
                            {
                              "label": "File Input",
                              "value": "",
                              "type": "FILE",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "_id": "649beb5665b54d91fa9ed88d"
                            },
                            {
                              "label": "LookUp",
                              "value": "",
                              "type": "LOOKUP",
                              "module_name": "PRODUCT",
                              "hide_to_fe": false,
                              "hide_field": false,
                              "read_only": false,
                              "group_name": "Contract Custom",
                              "group_uid": "c7a630d0-8b52-11ed-a63c-7d46adaa7b2c",
                              "_id": "649beb5665b54d91fa9ed88e"
                            }
                          ],
                          "is_deleted": false,
                          "created_at": "2023-01-30T11:33:40.800Z",
                          "updated_at": "2023-12-14T13:07:29.622Z",
                          "contract_number": 680
                        },
                        "amount_due": 0,
                        "is_paid": true,
                        "is_deleted": false,
                        "is_active": true,
                        "created_by": {
                          "user_uid": "15e00bfa-fbcb-4d46-a7c1-c7b5910441c0",
                          "first_name": "Marlon",
                          "last_name": "S A",
                          "email": "santhanapandian@zuper.co",
                          "external_login_id": null,
                          "home_phone_number": null,
                          "designation": "Admin",
                          "emp_code": "Z082",
                          "prefix": null,
                          "work_phone_number": null,
                          "mobile_phone_number": null,
                          "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/80c94b80-20b1-11ee-9dcd-affe7f3e9b1d.jpg",
                          "hourly_labor_charge": 120,
                          "is_active": true,
                          "is_deleted": false,
                          "created_at": "2022-02-22T06:03:54.000Z",
                          "updated_at": "2023-11-17T07:14:24.000Z"
                        },
                        "financing": {
                          "is_enabled": true,
                          "promo_message": null
                        },
                        "line_items": [],
                        "tax": [],
                        "attachments": [],
                        "notes": [],
                        "payment_history": [
                          {
                            "amount": 0,
                            "payment_mode": {
                              "_id": "5d84c1ac3954a6638587479e",
                              "payment_mode_name": "Cash",
                              "payment_mode_type": "OFFLINE",
                              "payment_mode_description": "Cash",
                              "payment_mode_uid": "9de42b50-db9f-11e9-a35c-3301ecc1dbf7"
                            },
                            "payment_transaction": {
                              "payment_transaction_uid": "bc434d10-9a81-11ee-adeb-6fa559e432e0",
                              "id": null
                            },
                            "remarks": "Paid",
                            "reference_no": "",
                            "done_by": {
                              "user_uid": "15e00bfa-fbcb-4d46-a7c1-c7b5910441c0",
                              "first_name": "Marlon",
                              "last_name": "S A",
                              "email": "santhanapandian@zuper.co",
                              "external_login_id": null,
                              "home_phone_number": null,
                              "designation": "Admin",
                              "emp_code": "Z082",
                              "prefix": null,
                              "work_phone_number": null,
                              "mobile_phone_number": null,
                              "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/80c94b80-20b1-11ee-9dcd-affe7f3e9b1d.jpg",
                              "hourly_labor_charge": 120,
                              "is_active": true,
                              "is_deleted": false,
                              "created_at": "2022-02-22T06:03:54.000Z",
                              "updated_at": "2023-11-17T07:14:24.000Z"
                            },
                            "is_void": false,
                            "payment_date": "2023-12-14T13:07:21.000Z",
                            "done_by_type": "EMPLOYEE",
                            "_id": "657afe1110cd290f1abcbed6",
                            "created_at": "2023-12-14T13:07:29.534Z"
                          }
                        ],
                        "created_at": "2023-12-14T12:59:41.441Z",
                        "updated_at": "2023-12-14T13:07:29.582Z",
                        "invoice_no": 4175,
                        "amount_paid": 0,
                        "fees": [],
                        "payment_mode": {
                          "payment_mode_name": "Cash",
                          "payment_mode_type": "OFFLINE",
                          "payment_mode_description": "Cash",
                          "payment_mode_uid": "9de42b50-db9f-11e9-a35c-3301ecc1dbf7"
                        },
                        "dealer_fee": {
                          "label": "Dealer fee",
                          "value": 120,
                          "percent": 20,
                          "type": "PERCENTAGE"
                        },
                        "taxation_meta": {
                          "status_history": []
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
                        "invoice_uid": {
                          "type": "string",
                          "example": "a53a5920-9a80-11ee-8a1f-49ba020888f8"
                        },
                        "description": {
                          "type": "string",
                          "example": "Auto generated from Contract"
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
                            "customer_category": {
                              "type": "object",
                              "properties": {
                                "_id": {
                                  "type": "string",
                                  "example": "5abb5a0d421b2c5ed273a3a7"
                                },
                                "category_name": {
                                  "type": "string",
                                  "example": "Residential"
                                },
                                "category_uid": {
                                  "type": "string",
                                  "example": "b02dba80-3266-11e8-8c01-4905acc8cfc0"
                                }
                              }
                            },
                            "customer_organization": {
                              "type": "object",
                              "properties": {
                                "updated_at": {
                                  "type": "string",
                                  "example": "2023-08-02T04:11:04.727Z"
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2023-03-03T11:08:36.995Z"
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
                                "custom_fields": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string",
                                        "example": "LookUp"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "LOOKUP"
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
                                      "_id": {
                                        "type": "string",
                                        "example": "6405855f380003cea418cac6"
                                      }
                                    }
                                  }
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
                            "customer_all_addresses": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "first_name": {
                                    "type": "string",
                                    "example": "Santhanapandian"
                                  },
                                  "phone_number": {
                                    "type": "string",
                                    "example": "9000932246"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "santhanapandian@zuper.co"
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
                                    "example": "SKCL Harmony Tower, Gangai Karai Puram, T. Nagar"
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
                                    "example": "600017"
                                  },
                                  "geo_cordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "number",
                                      "example": 13.0494258,
                                      "default": 0
                                    }
                                  },
                                  "is_primary": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "64c7a3b7ccb5f89a13dd3b42"
                                  }
                                }
                              }
                            },
                            "customer_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Cortland "
                                },
                                "state": {
                                  "type": "string",
                                  "example": "New York "
                                },
                                "street": {
                                  "type": "string",
                                  "example": "NY, USA"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "United States"
                                },
                                "landmark": {
                                  "type": "string",
                                  "example": ""
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "13045"
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 42.6011813,
                                    "default": 0
                                  }
                                },
                                "first_name": {
                                  "type": "string",
                                  "example": "Santhanapandian"
                                },
                                "last_name": {
                                  "type": "string",
                                  "example": ""
                                },
                                "phone_number": {
                                  "type": "string",
                                  "example": "9000932246"
                                },
                                "email": {
                                  "type": "string",
                                  "example": "santhanapandian@zuper.co"
                                }
                              }
                            },
                            "customer_billing_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Cortland "
                                },
                                "state": {
                                  "type": "string",
                                  "example": "New York "
                                },
                                "street": {
                                  "type": "string",
                                  "example": "NY, USA"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "United States"
                                },
                                "landmark": {
                                  "type": "string",
                                  "example": ""
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "13045"
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 42.6011813,
                                    "default": 0
                                  }
                                },
                                "first_name": {
                                  "type": "string",
                                  "example": "Santhanapandian"
                                },
                                "last_name": {
                                  "type": "string",
                                  "example": ""
                                },
                                "phone_number": {
                                  "type": "string",
                                  "example": "9000932246"
                                },
                                "email": {
                                  "type": "string",
                                  "example": "santhanapandian@zuper.co"
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
                                    "example": "default input"
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
                                    "example": "652cd055888b9b1b3cccfea9"
                                  }
                                }
                              }
                            },
                            "accounts": {
                              "type": "object",
                              "properties": {
                                "ltv": {
                                  "type": "number",
                                  "example": 4300.1,
                                  "default": 0
                                },
                                "receivables": {
                                  "type": "number",
                                  "example": 80000.7,
                                  "default": 0
                                },
                                "credits": {
                                  "type": "integer",
                                  "example": 600,
                                  "default": 0
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
                                },
                                "billing_frequency": {
                                  "type": "string",
                                  "example": "623c04a7378fd521b0e340af"
                                },
                                "payment_term": {
                                  "type": "string",
                                  "example": "5d84c1693954a6638587479a"
                                },
                                "tax_group": {
                                  "type": "string",
                                  "example": "64c7982dccb5f89a13db03ca"
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
                            "has_card_on_file": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2022-02-22T08:55:39.170Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-12-14T13:07:29.467Z"
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
                            "updated_at": {
                              "type": "string",
                              "example": "2023-08-02T04:11:04.727Z"
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2023-03-03T11:08:36.995Z"
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
                            "custom_fields": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "LookUp"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "LOOKUP"
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
                                  "_id": {
                                    "type": "string",
                                    "example": "6405855f380003cea418cac6"
                                  }
                                }
                              }
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
                            "updated_at": {
                              "type": "string",
                              "example": "2023-11-03T10:42:18.434Z"
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2023-08-21T11:58:00.578Z"
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
                            "custom_fields": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "DateTime Input"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": "2023-08-01 22:58:00"
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "DATETIME"
                                  },
                                  "hide_to_fe": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "64e4c0dc7c0c9e18fa178b83"
                                  }
                                }
                              }
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
                              "example": "T. Nagar"
                            },
                            "country": {
                              "type": "string",
                              "example": ""
                            },
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 13.0417591,
                                "default": 0
                              }
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Santhanapandian"
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
                              "example": "santhanapandian@zuper.co"
                            }
                          }
                        },
                        "customer_service_address": {
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
                              "example": "SKCL Harmony Tower, Gangai Karai Puram, T. Nagar"
                            },
                            "country": {
                              "type": "string",
                              "example": ""
                            },
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 13.0494258,
                                "default": 0
                              }
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Santhanapandian"
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
                              "example": "santhanapandian@zuper.co"
                            }
                          }
                        },
                        "sub_total": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "total": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "total_discount": {},
                        "template": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string",
                              "example": "INVOICE"
                            },
                            "template_name": {
                              "type": "string",
                              "example": "Invoice Hilton"
                            },
                            "template_description": {
                              "type": "string",
                              "example": "Invoice"
                            },
                            "template": {
                              "type": "string",
                              "example": "<meta charset=\"utf-8\">\n  <title>LinkNet\n  </title>\n  <!-- <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css\"> -->\n  <link href=\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,400;0,600;0,700;0,900;1,400&display=swap\" rel=\"stylesheet\">\n  \n  <style>\n\t  @page { margin: 0 }\n\t  body { margin: 0; font-family: \"Source Sans Pro\"; zoom: 0.85;}\n\t  .sheet {\n\t    margin: 0;\n\t    overflow: hidden;\n\t    position: relative;\n\t    box-sizing: border-box;\n\t    page-break-after: always;\n      \n\t  }\n\n\t  /** Paper sizes **/\n\t  body.A3               .sheet { width: 297mm; height: 419mm }\n\t  body.A3.landscape     .sheet { width: 420mm; height: 296mm }\n\t  body.A4               .sheet { width: 210mm; height: 296mm }\n\t  body.A4.landscape     .sheet { width: 297mm; height: 209mm }\n\t  body.A5               .sheet { width: 148mm; height: 209mm }\n\t  body.A5.landscape     .sheet { width: 210mm; height: 147mm }\n\t  body.letter           .sheet { width: 216mm; height: 279mm }\n\t  body.letter.landscape .sheet { width: 280mm; height: 215mm }\n\t  body.legal            .sheet { width: 216mm; height: 356mm }\n\t  body.legal.landscape  .sheet { width: 357mm; height: 215mm }\n\n\t  /** Padding area **/\n\t  .sheet.padding-10mm { padding: 10mm }\n\t  .sheet.padding-15mm { padding: 15mm }\n\t  .sheet.padding-20mm { padding: 20mm }\n\t  .sheet.padding-25mm { padding: 25mm }\n\n\t  /** For screen preview **/\n\t  @media screen {\n\t    body { background: #e0e0e0 }\n\t    .sheet {\n\t      background: white;\n\t      box-shadow: 0 .5mm 2mm rgba(0,0,0,.3);\n\t      margin: 5mm auto;\n\t    }\n\t  }\n\n\t  /** Fix for Chrome issue #273306 **/\n\t  @media print {\n\t             body.A3.landscape { width: 420mm }\n\t    body.A3, body.A4.landscape { width: 297mm }\n\t    body.A4, body.A5.landscape { width: 210mm }\n\t    body.A5                    { width: 148mm }\n\t    body.letter, body.legal    { width: 216mm }\n\t    body.letter.landscape      { width: 280mm }\n\t    body.legal.landscape       { width: 357mm }\n\t  }\n\n    .logo {\n      width: 50%;\n    }\n  </style>\n\n  <!-- Set page size here: A5, A4 or A3 -->\n  <!-- Set also \"landscape\" if you need -->\n  <style>  \n  @page { size: A4 }\n         *{font-size: 13px; font-family: \"Source Sans Pro\"; }\n         .invoice-box {\n         line-height: 24px;\n         color: #555;\n         }\n         table{\n         border-collapse: collapse;\n         border: 1px solid #5C5C5C;\n         font-weight: normal;\n         }\n         tr, th, td {  \n         border-collapse: collapse;\n         /*border: 1px solid #5C5C5C;*/\n         font-weight: normal;\n         }\n         tr{\n         text-align: left;\n         padding-top:5px;\n         }\n       table { overflow: visible !important; }\nthead { display: table-row-group }\ntfoot { display: table-row-group }\ntr { page-break-inside: avoid;}\n  </style>\n\n\n<body>\n  <!-- Each sheet element should have the class \"sheet\" -->\n  <!-- \"padding-**mm\" is optional: you can set 10, 15, 20 or 25 -->\n  <section class=\"sheet padding-10mm\">\n    <div id=\"\">\n        <!-- HEADER -->\n        <div style=\"\">\n          <table style=\"width: 100%; border: none;\">\n            <tbody>\n              <td style=\"width: 50%\">\n                <img class=\"logo\" src=\"https://s3.ap-south-1.amazonaws.com/images.zuper/icons/color_logo.png\" />\n              </td>\n              <td>\n              </td>\n              <td style=\"text-align: right; width: 50%\">\n                <h1 style=\"font-size: 25px; margin-bottom: 0\">Invoice</h1>\n                <p>Invoice # <b>{{invoice_no}}</b><br>Invoice Date : <b>{{formatDateWithTimeZone invoice_date 'DD/MM/YYYY' timezone}}</b><br>Due Date : <b>{{formatDateWithTimeZone due_date 'MM/DD/YYYY' timezone}}</b> \n              </td>\n            </tbody>\n          </table>\n          <hr style=\"margin-top: 20px; margin-bottom: 10px\">\n        </div>\n    </div>\n\n\n    <!-- BILL & SHIP TO -->\n    <!-- BILL & SHIP TO -->\n    <table style=\"width: 100%; border: none; margin-top: 20px;\">\n      <tbody>\n        <td style=\"width: 50%; vertical-align: top;\">\n          <b>Service Address:</b>\n          <p>{{customer.customer_first_name}} {{customer.customer_last_name}}<br>\n          {{customer_service_address.street}}, <br>{{customer_service_address.city}}, <br> {{customer_service_address.state}} {{customer_service_address.zip_code}} \n          {{#if customer_service_address.email}}<br><br><span> Email: </span>{{customer_service_address.email}}</span>{{/if}}\n          {{#if customer_service_address.phone_number}}<br><span> Phone: </span>{{customer_service_address.phone_number}}</span>{{/if}}\n        </p>\n        </td>\n        <td style=\"width: 50%\">\n          <b>Billing Address:</b>\n          <p>{{customer.customer_first_name}} {{customer.customer_last_name}}<br>\n          {{customer_billing_address.street}}, <br>{{customer_billing_address.city}}, <br> {{customer_billing_address.state}} {{customer_billing_address.zip_code}} \n          {{#if customer_billing_address.email}}<br><br><span> Email: </span>{{customer_billing_address.email}}</span>{{/if}}\n          {{#if customer_billing_address.phone_number}}<br><span> Phone: </span>{{customer_billing_address.phone_number}}</span>{{/if}}\n        </p>\n        </td>\n      </tbody>\n    </table>\n\n\n      \n        <table style=\"width: 100%;margin-top: 35px;\">\n          <thead>\n          <tr style=\"border: 1px solid #5C5C5C; background: #25262a; color: #FFF\">\n            <th style=\"width: 5%;text-align: center;\">#</th>\n            <th style=\"width: 41%;text-align: center;\">Description</th>\n            <th style=\"width: 10%;text-align: center;\">QTY</th>\n            <th style=\"width: 10%;text-align: center;\">Unit Price</th>\n            <th style=\"width: 15%;text-align: center;\">Amount</th>\n          </tr>\n              </thead>\n              <tbody>\n                  \t{{#each line_items}}\n                      <tr>\n                        <td style=\"border: 1px solid #5C5C5C;padding-left: 5px;\">{{add @index 1}}</td>\n                        <td style=\"border: 1px solid #5C5C5C;padding-left: 5px;\">{{name}}<br> {{description}}</td>\n                        <td style=\"text-align: center;border: 1px solid #5C5C5C;\">{{quantity}}</td>\n                        <td style=\"text-align: center;border: 1px solid #5C5C5C;\">${{roundNumber unit_price 2}}</td>\n                        <td style=\"text-align: center;border: 1px solid #5C5C5C;\">${{roundNumber total 2}}</td>\n                      </tr>\n                  {{/each}}             \n           \n      </tbody></table>\n\n      <table style=\"width: 100%;margin-top: 15px; border: none\">\n        <tbody>\n          <tr>\n            <td style=\"width: 40%\">\n                {{#if remarks}}\n                    <b>Remarks:</b>{{remarks}}\n                {{/if}}\n            </td>\n            <td style=\"width: 50%\">\n\n              <table style=\"width: 100%; border: none\">\n                <tbody>\n                  <tr>\n                    <td style=\"text-align: right; width: 85%\">Subtotal</td>\n                    <td style=\"text-align: right;\">${{roundNumber sub_total 2}}</td>          \n                    </tr>\n                    {{#each tax}}\n                    <tr>\n                      <td style=\"text-align: right; width: 85%\">{{tax_name}} at {{tax_percent}}%</td>\n                      <td style=\"text-align: right;\">${{roundNumber tax_amount 2}}</td> \n                    </tr> \n                    {{/each}}\n                    <tr>\n                      <td style=\"text-align: right; width: 85%; font-weight: bold;\">Total Amount</td>\n                      <td style=\"text-align: right; font-weight: bold;\">${{roundNumber total 2}}</td> \n                    </tr>   \n\n                    \n                    {{#each payment_history}}\n                    <tr>\n                      <td style=\"text-align: right;  width: 85%\">Payment Received - {{formatDateWithTimeZone created_at 'MM/DD/YYYY' 'America/New_York'}}</td>\n                      <td style=\"text-align: right;\">\n                        ${{roundNumber amount 2}}\n                      </td> \n                    </tr>\n                    {{/each}}\n                    {{#if amount_due}}\n                    <tr style=\"margin-top: 20px\">\n                      <td style=\"text-align: right; font-weight: bold;\">Total Due as of {{now \"%d/%m/%Y\"}} :</td>\n                      <td style=\"text-align: right; font-weight: bold;\">${{roundNumber amount_due 2}}</td> \n                    </tr>          \n                    {{/if}}\n        \n                </tbody>\n              </table> \n\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n  </section>\n\n  <div id=\"pageFooter\" style=\"width: 100%;\">\n    <p style=\"font-size: 9px; margin-top: 0px; text-align: center\">\n     Link Net | <a href=\"http://www.linknet.co.id\" style=\"font-size: 9px;\">http://www.linknet.co.id</a>\n    </p>\n  </div>\n \n</body>\n</html>"
                            },
                            "template_uid": {
                              "type": "string",
                              "example": "1ed34d90-e4ec-11e9-9b2d-3bcbe98b969e"
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "template_options": {
                              "type": "object",
                              "properties": {
                                "format": {
                                  "type": "string",
                                  "example": "A4"
                                },
                                "orientation": {
                                  "type": "string",
                                  "example": "portrait"
                                },
                                "border": {
                                  "type": "object",
                                  "properties": {
                                    "top": {
                                      "type": "string",
                                      "example": "10"
                                    },
                                    "right": {
                                      "type": "string",
                                      "example": "10"
                                    },
                                    "bottom": {
                                      "type": "string",
                                      "example": "10"
                                    },
                                    "left": {
                                      "type": "string",
                                      "example": "10"
                                    }
                                  }
                                }
                              }
                            },
                            "render_engine": {
                              "type": "string",
                              "example": "PHANTOM"
                            }
                          }
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
                        "status_history": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "status_name": {
                                "type": "string",
                                "example": "DRAFT"
                              },
                              "done_by": {
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
                              "done_by_type": {
                                "type": "string",
                                "example": "EMPLOYEE"
                              },
                              "_id": {
                                "type": "string",
                                "example": "657afc3d989f0dfd8de3430a"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2023-12-14T12:59:41.438Z"
                              }
                            }
                          }
                        },
                        "payment_term": {
                          "type": "object",
                          "properties": {
                            "payment_term_name": {
                              "type": "string",
                              "example": "two month term"
                            },
                            "no_of_days": {
                              "type": "integer",
                              "example": 60,
                              "default": 0
                            },
                            "payment_term_uid": {
                              "type": "string",
                              "example": "82f0e860-db9f-11e9-a35c-3301ecc1dbf7"
                            }
                          }
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
                                    "example": ""
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
                                    "example": "649beb5665b54d91fa9ed87b"
                                  }
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
                              "example": "2023-01-30T11:33:40.800Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-12-14T13:07:29.622Z"
                            },
                            "contract_number": {
                              "type": "integer",
                              "example": 680,
                              "default": 0
                            }
                          }
                        },
                        "amount_due": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
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
                        "line_items": {
                          "type": "array"
                        },
                        "tax": {
                          "type": "array"
                        },
                        "attachments": {
                          "type": "array"
                        },
                        "notes": {
                          "type": "array"
                        },
                        "payment_history": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "amount": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "payment_mode": {
                                "type": "object",
                                "properties": {
                                  "_id": {
                                    "type": "string",
                                    "example": "5d84c1ac3954a6638587479e"
                                  },
                                  "payment_mode_name": {
                                    "type": "string",
                                    "example": "Cash"
                                  },
                                  "payment_mode_type": {
                                    "type": "string",
                                    "example": "OFFLINE"
                                  },
                                  "payment_mode_description": {
                                    "type": "string",
                                    "example": "Cash"
                                  },
                                  "payment_mode_uid": {
                                    "type": "string",
                                    "example": "9de42b50-db9f-11e9-a35c-3301ecc1dbf7"
                                  }
                                }
                              },
                              "payment_transaction": {
                                "type": "object",
                                "properties": {
                                  "payment_transaction_uid": {
                                    "type": "string",
                                    "example": "bc434d10-9a81-11ee-adeb-6fa559e432e0"
                                  },
                                  "id": {}
                                }
                              },
                              "remarks": {
                                "type": "string",
                                "example": "Paid"
                              },
                              "reference_no": {
                                "type": "string",
                                "example": ""
                              },
                              "done_by": {
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
                              "is_void": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "payment_date": {
                                "type": "string",
                                "example": "2023-12-14T13:07:21.000Z"
                              },
                              "done_by_type": {
                                "type": "string",
                                "example": "EMPLOYEE"
                              },
                              "_id": {
                                "type": "string",
                                "example": "657afe1110cd290f1abcbed6"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2023-12-14T13:07:29.534Z"
                              }
                            }
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
                        "amount_paid": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "fees": {
                          "type": "array"
                        },
                        "payment_mode": {
                          "type": "object",
                          "properties": {
                            "payment_mode_name": {
                              "type": "string",
                              "example": "Cash"
                            },
                            "payment_mode_type": {
                              "type": "string",
                              "example": "OFFLINE"
                            },
                            "payment_mode_description": {
                              "type": "string",
                              "example": "Cash"
                            },
                            "payment_mode_uid": {
                              "type": "string",
                              "example": "9de42b50-db9f-11e9-a35c-3301ecc1dbf7"
                            }
                          }
                        },
                        "taxation_meta": {
                          "type": "object",
                          "properties": {
                            "status_history": {
                              "type": "array"
                            }
                          }
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