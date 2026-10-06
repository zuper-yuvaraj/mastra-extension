---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get all Transfer Orders

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
    "/products/transfer_orders": {
      "get": {
        "summary": "Get all Transfer Orders",
        "description": "",
        "operationId": "transfer-order-get",
        "parameters": [
          {
            "name": "filter.keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.from_location",
            "in": "query",
            "description": "product location uid, multiple uid supported",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.to_location",
            "in": "query",
            "description": "product location uid, multiple uid supported",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_at_from",
            "in": "query",
            "description": "utc format ('YYYY-MM-DDTHH:mm:ssZ', 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DDTHH:mm:ss.SSSZ', 'YYYY-MM-DD HH:mm:ss.SSS')",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "filter.created_at_to",
            "in": "query",
            "description": "utc format ('YYYY-MM-DDTHH:mm:ssZ', 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DDTHH:mm:ss.SSSZ', 'YYYY-MM-DD HH:mm:ss.SSS')",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "filter.required_date_from",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.required_date_to",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.sent_date_to",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.received_date_from'",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.received_date_to",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "description": "user uid, multiple uids are supported",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.transfer_order_number",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.over_due",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "filter.transfer_order_status",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "DRAFT",
                "IN_TRANSIT",
                "COMPLETED",
                "VOIDED"
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
                    "value": "{\n    \"type\": \"success\",\n    \"current_page\": 1,\n    \"total_pages\": 2,\n    \"total_records\": 2,\n    \"data\": [\n        {\n            \"prefix\": \"V2-004\",\n            \"transfer_order_uid\": \"eb3fea4e-a78d-4c97-833f-9bf5047134b5\",\n            \"from_location\": {\n                \"location_uid\": \"1a570534-cbce-487f-9d5e-23912a1ec1c7\",\n                \"location_name\": \"black team only\"\n            },\n            \"to_location\": {\n                \"location_uid\": \"070df7e0-ea60-11ee-9d1c-3169492ff8f3\",\n                \"location_name\": \"Aluva\"\n            },\n            \"required_by\": \"2024-07-25T04:44:00.000Z\",\n            \"sent_date\": null,\n            \"received_date\": null,\n            \"transfer_order_status\": \"DRAFT\",\n            \"line_items_count\": 1,\n            \"created_by\": {\n                \"user_uid\": \"5c6f734f-999b-453c-89b9-c0a5c2f9b4d5\",\n                \"first_name\": \"Ashin\",\n                \"last_name\": \"Thankachan\",\n                \"email\": \"ashin.t@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"8301907278\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9600086457\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2024-01-25T05:30:47.000Z\",\n                \"updated_at\": \"2024-05-03T07:47:20.000Z\",\n                \"role\": {\n                    \"role_name\": \"Admin\",\n                    \"role_uid\": \"a355d556-6976-4e05-9842-fad5b9ebd081\"\n                }\n            },\n            \"created_at\": \"2024-06-07T05:36:04.386Z\",\n            \"updated_at\": \"2024-06-07T05:36:04.386Z\",\n            \"transfer_order_number\": 43,\n            \"id\": \"undefined\"\n        }\n    ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 2,
                      "default": 0
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 2,
                      "default": 0
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "prefix": {
                            "type": "string",
                            "example": "V2-004"
                          },
                          "transfer_order_uid": {
                            "type": "string",
                            "example": "eb3fea4e-a78d-4c97-833f-9bf5047134b5"
                          },
                          "from_location": {
                            "type": "object",
                            "properties": {
                              "location_uid": {
                                "type": "string",
                                "example": "1a570534-cbce-487f-9d5e-23912a1ec1c7"
                              },
                              "location_name": {
                                "type": "string",
                                "example": "black team only"
                              }
                            }
                          },
                          "to_location": {
                            "type": "object",
                            "properties": {
                              "location_uid": {
                                "type": "string",
                                "example": "070df7e0-ea60-11ee-9d1c-3169492ff8f3"
                              },
                              "location_name": {
                                "type": "string",
                                "example": "Aluva"
                              }
                            }
                          },
                          "required_by": {
                            "type": "string",
                            "example": "2024-07-25T04:44:00.000Z"
                          },
                          "sent_date": {},
                          "received_date": {},
                          "transfer_order_status": {
                            "type": "string",
                            "example": "DRAFT"
                          },
                          "line_items_count": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "5c6f734f-999b-453c-89b9-c0a5c2f9b4d5"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Ashin"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Thankachan"
                              },
                              "email": {
                                "type": "string",
                                "example": "ashin.t@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {
                                "type": "string",
                                "example": "8301907278"
                              },
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "001"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "9600086457"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": ""
                              },
                              "hourly_labor_charge": {},
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
                                "example": "2024-01-25T05:30:47.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-05-03T07:47:20.000Z"
                              },
                              "role": {
                                "type": "object",
                                "properties": {
                                  "role_name": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "role_uid": {
                                    "type": "string",
                                    "example": "a355d556-6976-4e05-9842-fad5b9ebd081"
                                  }
                                }
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-06-07T05:36:04.386Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-06-07T05:36:04.386Z"
                          },
                          "transfer_order_number": {
                            "type": "integer",
                            "example": 43,
                            "default": 0
                          },
                          "id": {
                            "type": "string",
                            "example": "undefined"
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