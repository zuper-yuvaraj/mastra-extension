---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get all Products Transaction

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
    "/product/transaction": {
      "get": {
        "summary": "Get all Products Transaction",
        "description": "",
        "operationId": "get-all-products-copy",
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
                "ASC",
                "DESC"
              ]
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "quantity",
                "created_at"
              ]
            }
          },
          {
            "name": "type",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                ""
              ]
            }
          },
          {
            "name": "product_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "location_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "created_at",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "from_location",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "to_location",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "created_at_from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "created_at_to",
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"transaction_uid\": \"472633b0-ae0b-11e9-ad42-b5f50cbfc791\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"sion@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product#3\",\n        \"product_uid\": \"256d0500-a96a-11e9-a952-716e2bba4402\"\n      },\n      \"to_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"quantity\": 2,\n      \"type\": \"INWARD\",\n      \"created_at\": \"2019-07-24T12:05:07.307Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [\n        \"S001\",\n        \"S002\"\n      ],\n      \"remarks\": \"Incoming\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"transaction_uid\": \"b874be50-ae0c-11e9-ad42-b5f50cbfc791\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"simon@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product#3\",\n        \"product_uid\": \"256d0500-a96a-11e9-a952-716e2bba4402\"\n      },\n      \"to_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"quantity\": 1,\n      \"type\": \"INWARD\",\n      \"created_at\": \"2019-07-24T12:15:26.902Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [],\n      \"remarks\": \"f\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"transaction_uid\": \"51478e90-ae0e-11e9-ad42-b5f50cbfc791\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"simon@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product#3\",\n        \"product_uid\": \"256d0500-a96a-11e9-a952-716e2bba4402\"\n      },\n      \"to_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"quantity\": 2,\n      \"type\": \"INWARD\",\n      \"created_at\": \"2019-07-24T12:26:52.793Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [\n        \"S001\",\n        \"S002\"\n      ],\n      \"remarks\": \"incoming\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"transaction_uid\": \"c47b4960-ae0e-11e9-ad42-b5f50cbfc791\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"simon@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product#3\",\n        \"product_uid\": \"256d0500-a96a-11e9-a952-716e2bba4402\"\n      },\n      \"to_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"quantity\": 1,\n      \"type\": \"INWARD\",\n      \"created_at\": \"2019-07-24T12:30:06.070Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [],\n      \"remarks\": \"Incoming\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"transaction_uid\": \"d06e3750-ae0e-11e9-ad42-b5f50cbfc791\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"simon@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product#3\",\n        \"product_uid\": \"256d0500-a96a-11e9-a952-716e2bba4402\"\n      },\n      \"to_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"quantity\": 2,\n      \"type\": \"INWARD\",\n      \"created_at\": \"2019-07-24T12:30:26.118Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [\n        \"S001\",\n        \"S002\"\n      ],\n      \"remarks\": \"Incmig\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"transaction_uid\": \"f5115e20-ae9f-11e9-ad42-b5f50cbfc791\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"simon@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product#3\",\n        \"product_uid\": \"256d0500-a96a-11e9-a952-716e2bba4402\"\n      },\n      \"from_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"quantity\": 2,\n      \"type\": \"OUTWARD\",\n      \"created_at\": \"2019-07-25T05:49:24.610Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [\n        \"S001\",\n        \"S002\"\n      ],\n      \"remarks\": \"Outward\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"transaction_uid\": \"426e65d0-aeac-11e9-86dd-4fddb999f7ec\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"simon@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product#3\",\n        \"product_uid\": \"256d0500-a96a-11e9-a952-716e2bba4402\"\n      },\n      \"from_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"to_location\": {\n        \"location_name\": \"Location #2\",\n        \"location_uid\": \"10964f30-ae9f-11e9-ad42-b5f50cbfc791\"\n      },\n      \"quantity\": 2,\n      \"type\": \"TRANSFER\",\n      \"created_at\": \"2019-07-25T07:17:28.365Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [\n        \"S001\",\n        \"S002\"\n      ],\n      \"remarks\": \"Transfer\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"transaction_uid\": \"d9b89610-aeb4-11e9-86dd-4fddb999f7ec\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"simon@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product#3\",\n        \"product_uid\": \"256d0500-a96a-11e9-a952-716e2bba4402\"\n      },\n      \"from_location\": {\n        \"location_name\": \"Location #2\",\n        \"location_uid\": \"10964f30-ae9f-11e9-ad42-b5f50cbfc791\"\n      },\n      \"to_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"quantity\": 2,\n      \"type\": \"TRANSFER\",\n      \"created_at\": \"2019-07-25T08:18:58.162Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [],\n      \"remarks\": \"From 2 to 1\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"transaction_uid\": \"8f6daa20-af89-11e9-83bc-f9d48590bac4\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"simon@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product for trans\",\n        \"product_uid\": \"61bf7b30-af89-11e9-83bc-f9d48590bac4\"\n      },\n      \"to_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"quantity\": 2,\n      \"type\": \"INWARD\",\n      \"created_at\": \"2019-07-26T09:41:36.323Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [\n        \"12\",\n        \"122\"\n      ],\n      \"remarks\": \"inwrd\",\n      \"id\": \"undefined\"\n    },\n    {\n      \"transaction_uid\": \"d0275610-af89-11e9-83bc-f9d48590bac4\",\n      \"created_by\": {\n        \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n        \"first_name\": \"Simon\",\n        \"last_name\": \"V\",\n        \"email\": \"simon@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": \"1234567890\",\n        \"designation\": \"Admin\",\n        \"emp_code\": \"120\",\n        \"prefix\": null,\n        \"work_phone_number\": \"1234567890\",\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2019-01-21T07:24:22.000Z\",\n        \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n      },\n      \"product\": {\n        \"product_name\": \"Product for trans\",\n        \"product_uid\": \"61bf7b30-af89-11e9-83bc-f9d48590bac4\"\n      },\n      \"from_location\": {\n        \"location_name\": \"Location #1\",\n        \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n      },\n      \"quantity\": 10,\n      \"type\": \"OUTWARD\",\n      \"created_at\": \"2019-07-26T09:43:24.914Z\",\n      \"is_deleted\": false,\n      \"serial_nos\": [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\",\n        \"5\",\n        \"6\",\n        \"7\",\n        \"8\",\n        \"9\",\n        \"10\"\n      ],\n      \"remarks\": \"outwrd\",\n      \"id\": \"undefined\"\n    }\n  ],\n  \"total_records\": 4455,\n  \"current_page\": 1,\n  \"total_pages\": 446\n}"
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
                          "transaction_uid": {
                            "type": "string",
                            "example": "472633b0-ae0b-11e9-ad42-b5f50cbfc791"
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "71468f36-a847-49a6-b849-02b6992b2b08"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Simon"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "V"
                              },
                              "email": {
                                "type": "string",
                                "example": "sion@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {
                                "type": "string",
                                "example": "1234567890"
                              },
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "120"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "1234567890"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg"
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
                                "example": "2019-01-21T07:24:22.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-11-10T11:37:42.000Z"
                              }
                            }
                          },
                          "product": {
                            "type": "object",
                            "properties": {
                              "product_name": {
                                "type": "string",
                                "example": "Product#3"
                              },
                              "product_uid": {
                                "type": "string",
                                "example": "256d0500-a96a-11e9-a952-716e2bba4402"
                              }
                            }
                          },
                          "to_location": {
                            "type": "object",
                            "properties": {
                              "location_name": {
                                "type": "string",
                                "example": "Location #1"
                              },
                              "location_uid": {
                                "type": "string",
                                "example": "955447b0-85ee-11e9-834a-b9e1f8f2de14"
                              }
                            }
                          },
                          "quantity": {
                            "type": "integer",
                            "example": 2,
                            "default": 0
                          },
                          "type": {
                            "type": "string",
                            "example": "INWARD"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2019-07-24T12:05:07.307Z"
                          },
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "serial_nos": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "example": "S001"
                            }
                          },
                          "remarks": {
                            "type": "string",
                            "example": "Incoming"
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
                      "example": 4455,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 446,
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