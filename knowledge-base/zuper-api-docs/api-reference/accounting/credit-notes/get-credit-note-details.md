---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Credit Note Details

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
    "/accounting/credit_notes/{credit_note_uid}": {
      "get": {
        "summary": "Get Credit Note Details",
        "description": "",
        "operationId": "get-credit-note-details",
        "parameters": [
          {
            "name": "credit_note_uid",
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": {\n    \"credit_note_uid\": \"d2100749-3f19-4442-ae3a-219cd64b0e87\",\n    \"credit_note_date\": \"2025-04-18T00:00:00.000Z\",\n    \"module_name\": \"INVOICE\",\n    \"total_amount\": 31.4,\n    \"remaining_amount\": 31.4,\n    \"used_amount\": 0,\n    \"remarks\": null,\n    \"customer\": {\n      \"customer_uid\": \"a76394c8-0dc5-ad-b126-482012f3863b\",\n      \"customer_first_name\": \"Credits\",\n      \"customer_last_name\": \"\",\n      \"customer_company_name\": \"\",\n      \"customer_email\": \"jayasoorya.zuper@gmail.com\"\n    },\n    \"status\": \"UNAPPLIED\",\n    \"created_by\": {\n      \"user_uid\": \"4c80fba6-ee19-47ce-9058-51b4f24\",\n      \"first_name\": \"Jayasoorya\",\n      \"last_name\": \"R\",\n      \"email\": \"jayasoorya.r@zuper.co\",\n      \"external_login_id\": null,\n      \"home_phone_number\": null,\n      \"designation\": \"SE\",\n      \"emp_code\": \"Z311\",\n      \"prefix\": \"Z22\",\n      \"work_phone_number\": null,\n      \"mobile_phone_number\": null,\n      \"hourly_labor_charge\": 20,\n      \"is_active\": true,\n      \"is_deleted\": false,\n      \"created_at\": \"2024-06-12T08:55:40.000Z\",\n      \"updated_at\": \"2025-04-18T03:52:42.000Z\"\n    },\n    \"payment_method\": null,\n    \"is_deleted\": false,\n    \"created_at\": \"2025-04-18T04:16:59.848Z\",\n    \"updated_at\": \"2025-04-18T04:16:59.856Z\",\n    \"credit_note_number\": 333,\n    \"__v\": 0,\n    \"module_data\": {\n      \"invoice_uid\": \"40313fa4-d035-4a8b-a4be-fa89cc7e5af1\",\n      \"invoice_date\": \"2025-04-15T18:30:00.000Z\",\n      \"invoice_status\": \"PARTIALLY_PAID\",\n      \"is_deleted\": false,\n      \"created_at\": \"2025-04-16T12:16:21.089Z\",\n      \"updated_at\": \"2025-04-18T04:16:59.938Z\",\n      \"invoice_no\": 8155\n    }\n  }\n}"
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
                        "customer": {
                          "type": "object",
                          "properties": {
                            "customer_uid": {
                              "type": "string",
                              "example": "a76394c8-0dc5-ad-b126-482012f3863b"
                            },
                            "customer_first_name": {
                              "type": "string",
                              "example": "Credits"
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
                              "example": "jayasoorya.zuper@gmail.com"
                            }
                          }
                        },
                        "status": {
                          "type": "string",
                          "example": "UNAPPLIED"
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "4c80fba6-ee19-47ce-9058-51b4f24"
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
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
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
                        "__v": {
                          "type": "integer",
                          "example": 0,
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
                    "value": "{\n\ttype: \"error\",\n\ttitle: \"Error in getting credit note details\",\n\tmessage: \"\",\n\tdata: \"\"\n}"
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