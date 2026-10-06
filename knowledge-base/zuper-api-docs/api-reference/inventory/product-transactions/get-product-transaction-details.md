---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Product transaction details

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
    "/product/transaction/{transaction_uid}": {
      "get": {
        "summary": "Get Product transaction details",
        "description": "",
        "operationId": "get-product-transaction-details",
        "parameters": [
          {
            "name": "transaction_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"transaction_uid\": \"472633b0-ae0b-11e9-ad42-b5f50cbfc791\",\n        \"created_by\": {\n            \"user_uid\": \"71468f36-a847-49a6-b849-02b6992b2b08\",\n            \"first_name\": \"Simon\",\n            \"last_name\": \"V\",\n            \"email\": \"simon@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": \"1234567890\",\n            \"designation\": \"Admin\",\n            \"emp_code\": \"120\",\n            \"prefix\": null,\n            \"work_phone_number\": \"1234567890\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/6024fd20-080c-11ed-be73-8b6ed5c86b4b.jpg\",\n            \"hourly_labor_charge\": 120,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2019-01-21T07:24:22.000Z\",\n            \"updated_at\": \"2023-11-10T11:37:42.000Z\"\n        },\n        \"product\": {\n            \"product_name\": \"Product#3\",\n            \"product_uid\": \"256d0500-a96a-11e9-a952-716e2bba4402\"\n        },\n        \"to_location\": {\n            \"location_name\": \"Location #1\",\n            \"location_uid\": \"955447b0-85ee-11e9-834a-b9e1f8f2de14\"\n        },\n        \"quantity\": 2,\n        \"type\": \"INWARD\",\n        \"created_at\": \"2019-07-24T12:05:07.307Z\",\n        \"is_deleted\": false,\n        \"serial_nos\": [\n            \"S001\",\n            \"S002\"\n        ],\n        \"remarks\": \"Incoming\"\n    }\n}"
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
                              "example": "simon@zuper.co"
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