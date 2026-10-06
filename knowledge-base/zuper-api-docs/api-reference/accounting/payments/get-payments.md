---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get payments

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
    "/payments/transactions": {
      "get": {
        "summary": "Get payments",
        "description": "",
        "operationId": "get-payments",
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
                "updated_at"
              ],
              "default": "updated_at"
            }
          },
          {
            "name": "filter.customer_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.action_module",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.amount_from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.amount_to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.from_date",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.to_date",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.organization_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.payment_mode_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.payment_provider_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.payment_status",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.action_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_disputed",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.is_refunded",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "transaction_id",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.credit_used_uid",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.credit_issued_uid",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
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
            "name": "filter.payment_via",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "PAYMENT_METHOD",
                "CREDIT"
              ]
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"payment_transaction_uid\": \"9e8cdfcc-3e9d-4673-b4fc-0312b6f50c3b\",\n      \"currency\": \"USD\",\n      \"amount\": 120,\n      \"description\": \"Transaction via offline payment\",\n      \"payment_mode\": {\n        \"payment_mode_uid\": \"a3cde638-ec48-432d-9b7f-aefe94f4501d\",\n        \"payment_mode_name\": \"Cash\",\n        \"payment_mode_type\": \"OFFLINE\",\n        \"payment_mode_description\": \"cash\"\n      },\n      \"customer\": {\n        \"customer_uid\": \"2fe1af90-da07-11ee-9054-0be1fec3fea9\",\n        \"customer_first_name\": \"Arunkumar R R\",\n        \"customer_last_name\": \"\",\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"arunkumar.r@zuper.co\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"customer_contact_no\": {\n          \"mobile\": \"\",\n          \"home\": \"\",\n          \"work\": \"\"\n        }\n      },\n      \"organization\": {\n        \"organization_uid\": \"04a02310-b424-11ee-98b3-c914c66fec20\",\n        \"organization_name\": \"Ak's org\",\n        \"organization_email\": \"arunkumar.r@zuper.co\",\n        \"no_of_customers\": 6,\n        \"is_active\": true,\n        \"is_deleted\": false\n      },\n      \"action_module\": \"INVOICE\",\n      \"action_uid\": \"c8b0b9e8-6eba-4d68-86fb-277de371014a\",\n      \"type\": \"OFFLINE\",\n      \"source\": \"MOBILE_APP\",\n      \"status\": \"SUCCESS\",\n      \"created_at\": \"2024-07-02T09:48:20.308Z\",\n      \"updated_at\": \"2024-07-02T09:48:20.309Z\",\n      \"__v\": 0,\n      \"user\": {\n        \"user_uid\": \"d30d95ba-43fb-4568-9550-715858629f02\",\n        \"first_name\": \"Trevor\",\n        \"last_name\": \"Alan\",\n        \"email\": \"iOS.fe@zuper.co\",\n        \"external_login_id\": \"9789290838\",\n        \"home_phone_number\": \"9876543210\",\n        \"designation\": \"Technician\",\n        \"emp_code\": \"1234\",\n        \"prefix\": null,\n        \"work_phone_number\": \"9876543211\",\n        \"mobile_phone_number\": \"US, UK, CANADA\",\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2700dd00-df27-11ed-99a7-fb2773a094b7.png\",\n        \"hourly_labor_charge\": 120,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2018-07-26T04:26:24.000Z\",\n        \"updated_at\": \"2024-03-20T10:54:28.000Z\",\n        \"role\": {\n          \"role_id\": 3,\n          \"role_uid\": \"504e52bc-ff7d-11e7-8be5-0ed5f89f718b\",\n          \"role_name\": \"Field Executive\",\n          \"role_key\": \"FIELD_EXECUTIVE\",\n          \"created_at\": \"2018-01-22T00:00:00.000Z\",\n          \"updated_at\": \"2018-01-22T00:00:00.000Z\"\n        }\n      }\n    }\n  ],\n  \"total_records\": 1,\n  \"current_page\": 1,\n  \"total_pages\": 1\n}"
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
                          "payment_transaction_uid": {
                            "type": "string",
                            "example": "9e8cdfcc-3e9d-4673-b4fc-0312b6f50c3b"
                          },
                          "currency": {
                            "type": "string",
                            "example": "USD"
                          },
                          "amount": {
                            "type": "integer",
                            "example": 120,
                            "default": 0
                          },
                          "description": {
                            "type": "string",
                            "example": "Transaction via offline payment"
                          },
                          "payment_mode": {
                            "type": "object",
                            "properties": {
                              "payment_mode_uid": {
                                "type": "string",
                                "example": "a3cde638-ec48-432d-9b7f-aefe94f4501d"
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
                                "example": "cash"
                              }
                            }
                          },
                          "customer": {
                            "type": "object",
                            "properties": {
                              "customer_uid": {
                                "type": "string",
                                "example": "2fe1af90-da07-11ee-9054-0be1fec3fea9"
                              },
                              "customer_first_name": {
                                "type": "string",
                                "example": "Arunkumar R R"
                              },
                              "customer_last_name": {
                                "type": "string",
                                "example": ""
                              },
                              "customer_company_name": {
                                "type": "string",
                                "example": ""
                              },
                              "customer_email": {
                                "type": "string",
                                "example": "arunkumar.r@zuper.co"
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
                                    "example": ""
                                  },
                                  "home": {
                                    "type": "string",
                                    "example": ""
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
                              "organization_uid": {
                                "type": "string",
                                "example": "04a02310-b424-11ee-98b3-c914c66fec20"
                              },
                              "organization_name": {
                                "type": "string",
                                "example": "Ak's org"
                              },
                              "organization_email": {
                                "type": "string",
                                "example": "arunkumar.r@zuper.co"
                              },
                              "no_of_customers": {
                                "type": "integer",
                                "example": 6,
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
                              }
                            }
                          },
                          "action_module": {
                            "type": "string",
                            "example": "INVOICE"
                          },
                          "action_uid": {
                            "type": "string",
                            "example": "c8b0b9e8-6eba-4d68-86fb-277de371014a"
                          },
                          "type": {
                            "type": "string",
                            "example": "OFFLINE"
                          },
                          "source": {
                            "type": "string",
                            "example": "MOBILE_APP"
                          },
                          "status": {
                            "type": "string",
                            "example": "SUCCESS"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-07-02T09:48:20.308Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-07-02T09:48:20.309Z"
                          },
                          "__v": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "user": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "d30d95ba-43fb-4568-9550-715858629f02"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Trevor"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Alan"
                              },
                              "email": {
                                "type": "string",
                                "example": "iOS.fe@zuper.co"
                              },
                              "external_login_id": {
                                "type": "string",
                                "example": "9789290838"
                              },
                              "home_phone_number": {
                                "type": "string",
                                "example": "9876543210"
                              },
                              "designation": {
                                "type": "string",
                                "example": "Technician"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "1234"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "9876543211"
                              },
                              "mobile_phone_number": {
                                "type": "string",
                                "example": "US, UK, CANADA"
                              },
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2700dd00-df27-11ed-99a7-fb2773a094b7.png"
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
                                "example": "2018-07-26T04:26:24.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-03-20T10:54:28.000Z"
                              },
                              "role": {
                                "type": "object",
                                "properties": {
                                  "role_id": {
                                    "type": "integer",
                                    "example": 3,
                                    "default": 0
                                  },
                                  "role_uid": {
                                    "type": "string",
                                    "example": "504e52bc-ff7d-11e7-8be5-0ed5f89f718b"
                                  },
                                  "role_name": {
                                    "type": "string",
                                    "example": "Field Executive"
                                  },
                                  "role_key": {
                                    "type": "string",
                                    "example": "FIELD_EXECUTIVE"
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
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 1,
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