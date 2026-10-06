---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Customer Credit Histories

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
    "/accounting/credit_history": {
      "get": {
        "summary": "Get Customer Credit Histories",
        "description": "",
        "operationId": "get-customer-credit-histories",
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
                "created_at"
              ],
              "default": "created_at"
            }
          },
          {
            "name": "filter.customer_uid",
            "in": "query",
            "description": "Filter by Customers",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.credit_note_uid",
            "in": "query",
            "description": "Filter by Credit Notes",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.invoice_uid",
            "in": "query",
            "description": "Filter by Invoice",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.estimate_uid",
            "in": "query",
            "description": "Filter by Estimate/Quote",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.type",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "CREDIT",
                "DEBIT",
                "REFUND",
                "DELETE"
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
            "name": "filter.to_date",
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"credit_history_uid\": \"2ede6973-7dbb-468d-8829-6274a44aa160\",\n      \"customer\": {\n        \"customer_uid\": \"b96c9de9-8fa1-42b6-a37b-d94b5c460485\",\n        \"customer_first_name\": \"Credits \",\n        \"customer_last_name\": \"review\",\n        \"customer_company_name\": \"\",\n        \"customer_email\": \"jayasoorya.zuper@gmail.com\",\n        \"customer_contact_no\": {\n          \"mobile\": \"\",\n          \"home\": \"\",\n          \"work\": \"\"\n        },\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"customer_timezone\": null,\n        \"created_at\": \"2025-04-08T08:43:48.499Z\",\n        \"updated_at\": \"2025-04-16T13:28:08.459Z\"\n      },\n      \"invoice\": null,\n      \"estimate\": null,\n      \"opening_balance\": 272593.56,\n      \"closing_balance\": 272693.56,\n      \"applied_amount\": 100,\n      \"type\": \"CREDIT\",\n      \"remarks\": \"Credit Refund for invoice #8085\",\n      \"created_by\": {\n        \"user_uid\": \"57a967fe-30c1-41a6-a4e5-5a04c936\",\n        \"first_name\": \"ABC\",\n        \"last_name\": \"DEF\",\n        \"email\": \"abc@def.com\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Admin\",\n        \"emp_code\": \"Z200\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"hourly_labor_charge\": 20,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2023-09-08T07:13:05.000Z\",\n        \"updated_at\": \"2025-04-18T09:41:48.000Z\"\n      },\n      \"created_at\": \"2025-04-16T12:25:34.753Z\",\n      \"updated_at\": \"2025-04-16T12:25:34.756Z\",\n      \"__v\": 0,\n      \"credit_note_data\": {\n        \"credit_note_uid\": \"d9260e38-b373-47f7-9cd5-24a3d9e21f19\",\n        \"credit_note_date\": \"2025-04-16T00:00:00.000Z\",\n        \"total_amount\": 100,\n        \"remaining_amount\": 100,\n        \"used_amount\": 0,\n        \"remarks\": \"Credit Refund for invoice #8085\",\n        \"status\": \"UNAPPLIED\",\n        \"payment_method\": null,\n        \"is_deleted\": false,\n        \"created_at\": \"2025-04-16T12:25:34.718Z\",\n        \"updated_at\": \"2025-04-16T12:25:34.719Z\",\n        \"credit_note_number\": 296\n      }\n    }\n  ],\n  \"total_records\": 1,\n  \"current_page\": 1,\n  \"total_pages\": 1\n}"
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
                          "credit_history_uid": {
                            "type": "string",
                            "example": "2ede6973-7dbb-468d-8829-6274a44aa160"
                          },
                          "customer": {
                            "type": "object",
                            "properties": {
                              "customer_uid": {
                                "type": "string",
                                "example": "b96c9de9-8fa1-42b6-a37b-d94b5c460485"
                              },
                              "customer_first_name": {
                                "type": "string",
                                "example": "Credits "
                              },
                              "customer_last_name": {
                                "type": "string",
                                "example": "review"
                              },
                              "customer_company_name": {
                                "type": "string",
                                "example": ""
                              },
                              "customer_email": {
                                "type": "string",
                                "example": "jayasoorya.zuper@gmail.com"
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
                              "customer_timezone": {},
                              "created_at": {
                                "type": "string",
                                "example": "2025-04-08T08:43:48.499Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2025-04-16T13:28:08.459Z"
                              }
                            }
                          },
                          "invoice": {},
                          "estimate": {},
                          "opening_balance": {
                            "type": "number",
                            "example": 272593.56,
                            "default": 0
                          },
                          "closing_balance": {
                            "type": "number",
                            "example": 272693.56,
                            "default": 0
                          },
                          "applied_amount": {
                            "type": "integer",
                            "example": 100,
                            "default": 0
                          },
                          "type": {
                            "type": "string",
                            "example": "CREDIT"
                          },
                          "remarks": {
                            "type": "string",
                            "example": "Credit Refund for invoice #8085"
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "57a967fe-30c1-41a6-a4e5-5a04c936"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "ABC"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "DEF"
                              },
                              "email": {
                                "type": "string",
                                "example": "abc@def.com"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z200"
                              },
                              "prefix": {},
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
                                "example": "2023-09-08T07:13:05.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2025-04-18T09:41:48.000Z"
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2025-04-16T12:25:34.753Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2025-04-16T12:25:34.756Z"
                          },
                          "__v": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "credit_note_data": {
                            "type": "object",
                            "properties": {
                              "credit_note_uid": {
                                "type": "string",
                                "example": "d9260e38-b373-47f7-9cd5-24a3d9e21f19"
                              },
                              "credit_note_date": {
                                "type": "string",
                                "example": "2025-04-16T00:00:00.000Z"
                              },
                              "total_amount": {
                                "type": "integer",
                                "example": 100,
                                "default": 0
                              },
                              "remaining_amount": {
                                "type": "integer",
                                "example": 100,
                                "default": 0
                              },
                              "used_amount": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "remarks": {
                                "type": "string",
                                "example": "Credit Refund for invoice #8085"
                              },
                              "status": {
                                "type": "string",
                                "example": "UNAPPLIED"
                              },
                              "payment_method": {},
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2025-04-16T12:25:34.718Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2025-04-16T12:25:34.719Z"
                              },
                              "credit_note_number": {
                                "type": "integer",
                                "example": 296,
                                "default": 0
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
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n\ttype: \"error\",\n\ttitle: \"Error in getting customer credit history\",\n\tmessage: \"\",\n\tdata: \"\"\n}"
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