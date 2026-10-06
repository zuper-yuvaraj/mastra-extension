---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Request Details

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
    "/request/{request_uid}": {
      "get": {
        "summary": "Get Request Details",
        "description": "",
        "operationId": "get-customer-request-details",
        "parameters": [
          {
            "name": "request_uid",
            "in": "path",
            "description": "request uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"request_uid\": \"e8836fa0-78ac-11ee-9d12-6dfb540878cd\",\n        \"request_title\": \"testRequestService05\",\n        \"request_description\": \"testing Request Service\",\n        \"request_priority\": \"MEDIUM\",\n        \"request_due_date\": \"2022-12-12T00:10:00.000Z\",\n        \"request_preferred_date1\": {\n            \"start_time\": \"2022-12-12T00:10:00.000Z\",\n            \"end_time\": \"2022-12-12T20:10:00.000Z\"\n        },\n        \"request_preferred_date2\": \"2022-12-12T00:10:00.000Z\",\n        \"customer\": {\n            \"customer_uid\": \"c6d65b80-5f51-11ed-a1fa-8d475f25e205\",\n            \"customer_first_name\": \"Testcustomer\",\n            \"customer_last_name\": \"\",\n            \"customer_company_name\": \"\",\n            \"customer_email\": \"velmurugan.k@zuper.co\",\n            \"customer_address\": {\n                \"city\": \"Thoraipakkam \",\n                \"state\": \"Tamil Nadu \",\n                \"street\": \"Thuraipakkam\",\n                \"country\": \"India\",\n                \"landmark\": \"\",\n                \"geo_cordinates\": [\n                    12.9416037,\n                    80.2362096\n                ],\n                \"first_name\": \"Testcustomer\",\n                \"email\": \"velmurugan.k@zuper.co\",\n                \"phone_number\": \"9787890166\"\n            },\n            \"is_active\": true,\n            \"is_deleted\": false\n        },\n        \"organization\": {\n            \"organization_uid\": \"b5314550-6962-11ed-b4f7-05e31b544759\",\n            \"organization_name\": \"Test org\",\n            \"organization_logo\": null,\n            \"organization_description\": null,\n            \"organization_email\": \"richard.mathew@gmail.com\",\n            \"no_of_customers\": 0,\n            \"organization_address\": {\n                \"city\": \"Washington\",\n                \"state\": \"Pennsylvania\",\n                \"street\": \"202 North Main Street\"\n            },\n            \"is_deleted\": false\n        },\n        \"property\": {\n            \"property_uid\": \"ddf5ca90-9c90-11ed-9c19-a7dfd1a4da9c\",\n            \"property_name\": \"test org chennai\",\n            \"no_of_jobs\": 8,\n            \"property_address\": {\n                \"state\": \"Tamil nadu\",\n                \"street\": \"202 North Main Street\",\n                \"country\": \"India\",\n                \"zip_code\": \"600028\"\n            },\n            \"is_deleted\": false\n        },\n        \"asset\": {\n            \"asset_uid\": \"f1dbb6c0-5f3f-11ed-a1fa-8d475f25e205\",\n            \"asset_code\": \"MOB1\",\n            \"asset_name\": \"mobile\",\n            \"asset_image\": null,\n            \"asset_category\": {\n                \"category_uid\": \"2f7a7b10-5e64-11ed-9398-a5b74f408cf9\",\n                \"category_name\": \"new test2\",\n                \"is_deleted\": false\n            },\n            \"asset_status\": \"\",\n            \"asset_serial_number\": null,\n            \"asset_quantity\": 1,\n            \"custom_fields\": [],\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_at\": \"2022-11-08T08:32:56.375Z\",\n            \"updated_at\": \"2023-09-20T07:02:53.419Z\",\n            \"purchase_date\": \"2022-12-10T13:00:00.000Z\",\n            \"warranty_expiry_date\": \"2023-01-27T12:59:00.000Z\"\n        },\n        \"service_address\": {\n            \"landmark\": \"tst\",\n            \"city\": \"tst\",\n            \"state\": \"tst\",\n            \"street\": \"tst\",\n            \"country\": \"tst\",\n            \"zip_code\": \"tst\",\n            \"first_name\": \"tst\",\n            \"last_name\": \"tst\",\n            \"phone_number\": \"tst\",\n            \"email\": \"tst\"\n        },\n        \"billing_address\": {\n            \"landmark\": \"tst\",\n            \"city\": \"tst\",\n            \"state\": \"tst\",\n            \"street\": \"tst\",\n            \"country\": \"tst\",\n            \"zip_code\": \"tst\",\n            \"first_name\": \"tst\",\n            \"last_name\": \"tst\",\n            \"phone_number\": \"tst\",\n            \"email\": \"tst\"\n        },\n        \"request_status\": {\n            \"created_at\": \"2023-11-01T11:50:53.539Z\"\n        },\n        \"custom_fields\": [\n            {\n                \"label\": \"String\",\n                \"value\": \"String\",\n                \"type\": \"\",\n                \"ref_uid\": \"String\",\n                \"module_name\": \"String\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"group_name\": \"String\",\n                \"group_uid\": \"String\",\n                \"_id\": \"65423b9d00e9cd5ec9171000\"\n            }\n        ],\n        \"assigned_to_team\": [],\n        \"assigned_to\": [\n            {\n                \"user\": {\n                    \"user_uid\": \"dee40152-bf45-463c-92c3-eb62804490e2\",\n                    \"first_name\": \"test\",\n                    \"last_name\": \"f5\",\n                    \"email\": \"velu.k@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": null,\n                    \"designation\": \"FE\",\n                    \"emp_code\": \"FE5\",\n                    \"prefix\": null,\n                    \"work_phone_number\": null,\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                    \"hourly_labor_charge\": null,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2022-12-01T13:19:24.000Z\",\n                    \"updated_at\": \"2022-12-01T13:19:24.000Z\",\n                    \"role\": {\n                        \"role_uid\": \"37a7b7c4-e261-408e-9c7b-de6d784735c6\",\n                        \"role_name\": \"Field Executive\",\n                        \"role_key\": \"FIELD_EXECUTIVE\"\n                    }\n                },\n                \"team\": {\n                    \"team_uid\": \"4e1c409f-32fd-42fe-9be0-72f48e0467fa\",\n                    \"team_name\": \"Test Team 4\",\n                    \"team_color\": \"#4960a0\",\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                }\n            }\n        ],\n        \"created_by\": {\n            \"user_uid\": \"cfa78be2-b427-4d5a-89fe-7cf4a8e01352\",\n            \"first_name\": \"velmurugan\",\n            \"last_name\": \"k\",\n            \"email\": \"velmurugan.k@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": \"9600086457\",\n            \"designation\": \"Admin\",\n            \"emp_code\": \"001\",\n            \"prefix\": null,\n            \"work_phone_number\": \"9600086457\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"\",\n            \"hourly_labor_charge\": 20,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2022-11-03T11:33:22.000Z\",\n            \"updated_at\": \"2023-10-10T13:38:04.000Z\",\n            \"role\": {\n                \"role_uid\": \"83674ce3-58f7-4992-b126-2413ea72832d\",\n                \"role_name\": \"Admin\",\n                \"role_key\": \"ADMIN\"\n            }\n        },\n        \"is_deleted\": false,\n        \"status_history\": [],\n        \"attachments\": [],\n        \"created_at\": \"2023-11-01T11:50:53.539Z\",\n        \"updated_at\": \"2023-11-01T11:55:18.308Z\",\n        \"request_id\": 29\n    }\n}"
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
                        "request_uid": {
                          "type": "string",
                          "example": "e8836fa0-78ac-11ee-9d12-6dfb540878cd"
                        },
                        "request_title": {
                          "type": "string",
                          "example": "testRequestService05"
                        },
                        "request_description": {
                          "type": "string",
                          "example": "testing Request Service"
                        },
                        "request_priority": {
                          "type": "string",
                          "example": "MEDIUM"
                        },
                        "request_due_date": {
                          "type": "string",
                          "example": "2022-12-12T00:10:00.000Z"
                        },
                        "request_preferred_date1": {
                          "type": "object",
                          "properties": {
                            "start_time": {
                              "type": "string",
                              "example": "2022-12-12T00:10:00.000Z"
                            },
                            "end_time": {
                              "type": "string",
                              "example": "2022-12-12T20:10:00.000Z"
                            }
                          }
                        },
                        "request_preferred_date2": {
                          "type": "string",
                          "example": "2022-12-12T00:10:00.000Z"
                        },
                        "customer": {
                          "type": "object",
                          "properties": {
                            "customer_uid": {
                              "type": "string",
                              "example": "c6d65b80-5f51-11ed-a1fa-8d475f25e205"
                            },
                            "customer_first_name": {
                              "type": "string",
                              "example": "Testcustomer"
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
                              "example": "velmurugan.k@zuper.co"
                            },
                            "customer_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Thoraipakkam "
                                },
                                "state": {
                                  "type": "string",
                                  "example": "Tamil Nadu "
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Thuraipakkam"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "India"
                                },
                                "landmark": {
                                  "type": "string",
                                  "example": ""
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 12.9416037,
                                    "default": 0
                                  }
                                },
                                "first_name": {
                                  "type": "string",
                                  "example": "Testcustomer"
                                },
                                "email": {
                                  "type": "string",
                                  "example": "velmurugan.k@zuper.co"
                                },
                                "phone_number": {
                                  "type": "string",
                                  "example": "9787890166"
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
                            }
                          }
                        },
                        "organization": {
                          "type": "object",
                          "properties": {
                            "organization_uid": {
                              "type": "string",
                              "example": "b5314550-6962-11ed-b4f7-05e31b544759"
                            },
                            "organization_name": {
                              "type": "string",
                              "example": "Test org"
                            },
                            "organization_logo": {},
                            "organization_description": {},
                            "organization_email": {
                              "type": "string",
                              "example": "richard.mathew@gmail.com"
                            },
                            "no_of_customers": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "organization_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Washington"
                                },
                                "state": {
                                  "type": "string",
                                  "example": "Pennsylvania"
                                },
                                "street": {
                                  "type": "string",
                                  "example": "202 North Main Street"
                                }
                              }
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "property": {
                          "type": "object",
                          "properties": {
                            "property_uid": {
                              "type": "string",
                              "example": "ddf5ca90-9c90-11ed-9c19-a7dfd1a4da9c"
                            },
                            "property_name": {
                              "type": "string",
                              "example": "test org chennai"
                            },
                            "no_of_jobs": {
                              "type": "integer",
                              "example": 8,
                              "default": 0
                            },
                            "property_address": {
                              "type": "object",
                              "properties": {
                                "state": {
                                  "type": "string",
                                  "example": "Tamil nadu"
                                },
                                "street": {
                                  "type": "string",
                                  "example": "202 North Main Street"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "India"
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "600028"
                                }
                              }
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "asset": {
                          "type": "object",
                          "properties": {
                            "asset_uid": {
                              "type": "string",
                              "example": "f1dbb6c0-5f3f-11ed-a1fa-8d475f25e205"
                            },
                            "asset_code": {
                              "type": "string",
                              "example": "MOB1"
                            },
                            "asset_name": {
                              "type": "string",
                              "example": "mobile"
                            },
                            "asset_image": {},
                            "asset_category": {
                              "type": "object",
                              "properties": {
                                "category_uid": {
                                  "type": "string",
                                  "example": "2f7a7b10-5e64-11ed-9398-a5b74f408cf9"
                                },
                                "category_name": {
                                  "type": "string",
                                  "example": "new test2"
                                },
                                "is_deleted": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                }
                              }
                            },
                            "asset_status": {
                              "type": "string",
                              "example": ""
                            },
                            "asset_serial_number": {},
                            "asset_quantity": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "custom_fields": {
                              "type": "array"
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
                            "created_at": {
                              "type": "string",
                              "example": "2022-11-08T08:32:56.375Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-09-20T07:02:53.419Z"
                            },
                            "purchase_date": {
                              "type": "string",
                              "example": "2022-12-10T13:00:00.000Z"
                            },
                            "warranty_expiry_date": {
                              "type": "string",
                              "example": "2023-01-27T12:59:00.000Z"
                            }
                          }
                        },
                        "service_address": {
                          "type": "object",
                          "properties": {
                            "landmark": {
                              "type": "string",
                              "example": "tst"
                            },
                            "city": {
                              "type": "string",
                              "example": "tst"
                            },
                            "state": {
                              "type": "string",
                              "example": "tst"
                            },
                            "street": {
                              "type": "string",
                              "example": "tst"
                            },
                            "country": {
                              "type": "string",
                              "example": "tst"
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "tst"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "tst"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "tst"
                            },
                            "phone_number": {
                              "type": "string",
                              "example": "tst"
                            },
                            "email": {
                              "type": "string",
                              "example": "tst"
                            }
                          }
                        },
                        "billing_address": {
                          "type": "object",
                          "properties": {
                            "landmark": {
                              "type": "string",
                              "example": "tst"
                            },
                            "city": {
                              "type": "string",
                              "example": "tst"
                            },
                            "state": {
                              "type": "string",
                              "example": "tst"
                            },
                            "street": {
                              "type": "string",
                              "example": "tst"
                            },
                            "country": {
                              "type": "string",
                              "example": "tst"
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "tst"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "tst"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "tst"
                            },
                            "phone_number": {
                              "type": "string",
                              "example": "tst"
                            },
                            "email": {
                              "type": "string",
                              "example": "tst"
                            }
                          }
                        },
                        "request_status": {
                          "type": "object",
                          "properties": {
                            "created_at": {
                              "type": "string",
                              "example": "2023-11-01T11:50:53.539Z"
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
                                "example": "String"
                              },
                              "value": {
                                "type": "string",
                                "example": "String"
                              },
                              "type": {
                                "type": "string",
                                "example": ""
                              },
                              "ref_uid": {
                                "type": "string",
                                "example": "String"
                              },
                              "module_name": {
                                "type": "string",
                                "example": "String"
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
                              "group_name": {
                                "type": "string",
                                "example": "String"
                              },
                              "group_uid": {
                                "type": "string",
                                "example": "String"
                              },
                              "_id": {
                                "type": "string",
                                "example": "65423b9d00e9cd5ec9171000"
                              }
                            }
                          }
                        },
                        "assigned_to_team": {
                          "type": "array"
                        },
                        "assigned_to": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "user": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "dee40152-bf45-463c-92c3-eb62804490e2"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "test"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "f5"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "velu.k@zuper.co"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {},
                                  "designation": {
                                    "type": "string",
                                    "example": "FE"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "FE5"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {},
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
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
                                    "example": "2022-12-01T13:19:24.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2022-12-01T13:19:24.000Z"
                                  },
                                  "role": {
                                    "type": "object",
                                    "properties": {
                                      "role_uid": {
                                        "type": "string",
                                        "example": "37a7b7c4-e261-408e-9c7b-de6d784735c6"
                                      },
                                      "role_name": {
                                        "type": "string",
                                        "example": "Field Executive"
                                      },
                                      "role_key": {
                                        "type": "string",
                                        "example": "FIELD_EXECUTIVE"
                                      }
                                    }
                                  }
                                }
                              },
                              "team": {
                                "type": "object",
                                "properties": {
                                  "team_uid": {
                                    "type": "string",
                                    "example": "4e1c409f-32fd-42fe-9be0-72f48e0467fa"
                                  },
                                  "team_name": {
                                    "type": "string",
                                    "example": "Test Team 4"
                                  },
                                  "team_color": {
                                    "type": "string",
                                    "example": "#4960a0"
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
                              }
                            }
                          }
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "cfa78be2-b427-4d5a-89fe-7cf4a8e01352"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "velmurugan"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "k"
                            },
                            "email": {
                              "type": "string",
                              "example": "velmurugan.k@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {
                              "type": "string",
                              "example": "9600086457"
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
                              "example": "2022-11-03T11:33:22.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-10-10T13:38:04.000Z"
                            },
                            "role": {
                              "type": "object",
                              "properties": {
                                "role_uid": {
                                  "type": "string",
                                  "example": "83674ce3-58f7-4992-b126-2413ea72832d"
                                },
                                "role_name": {
                                  "type": "string",
                                  "example": "Admin"
                                },
                                "role_key": {
                                  "type": "string",
                                  "example": "ADMIN"
                                }
                              }
                            }
                          }
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "status_history": {
                          "type": "array"
                        },
                        "attachments": {
                          "type": "array"
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2023-11-01T11:50:53.539Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2023-11-01T11:55:18.308Z"
                        },
                        "request_id": {
                          "type": "integer",
                          "example": 29,
                          "default": 0
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