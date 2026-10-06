---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Requests

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
    "/request": {
      "get": {
        "summary": "Get Requests",
        "description": "",
        "operationId": "get-service-tasks-copy-1",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "limit",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
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
              ]
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "For search",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.request_priority",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "LOW",
                "MEDIUM",
                "HIGH",
                "URGENT"
              ]
            }
          },
          {
            "name": "filter.request_status",
            "in": "query",
            "description": "request status uids. Only the status uid works (not the status name) — sending a name like \"New\" returns 200 with 0 rows rather than resolving it or erroring. Get the uid from GET /request/status/.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer",
            "in": "query",
            "description": "customer uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.organization",
            "in": "query",
            "description": "organization uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.property",
            "in": "query",
            "description": "property uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.asset",
            "in": "query",
            "description": "asset uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_at_from",
            "in": "query",
            "description": "created at from date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.created_at_to",
            "in": "query",
            "description": "created at to date",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.due_date_from",
            "in": "query",
            "description": "due date from",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.due_date_to",
            "in": "query",
            "description": "due date to",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.preferred_date_from",
            "in": "query",
            "description": "preferred_date_from",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.preferred_date_to",
            "in": "query",
            "description": "preferred_date_to",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "description": "updated_at_from",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "description": "updated_at_to",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.assigned",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "ASSIGNED",
                "UNASSIGNED"
              ]
            }
          },
          {
            "name": "filter.assigned_to",
            "in": "query",
            "description": "user uids",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.assigned_to_team",
            "in": "query",
            "description": "team uids",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"request_uid\": \"e8836fa0-78ac-11ee-9d12-6dfb540878cd\",\n            \"request_title\": \"testRequestService05\",\n            \"request_description\": \"testing Request Service\",\n            \"request_priority\": \"MEDIUM\",\n            \"request_due_date\": \"2022-12-12T00:10:00.000Z\",\n            \"request_preferred_date1\": {\n                \"start_time\": \"2022-12-12T00:10:00.000Z\",\n                \"end_time\": \"2022-12-12T20:10:00.000Z\"\n            },\n            \"request_preferred_date2\": \"2022-12-12T00:10:00.000Z\",\n            \"customer\": {\n                \"customer_uid\": \"c6d65b80-5f51-11ed-a1fa-8d475f25e205\",\n                \"customer_first_name\": \"Testcustomer\",\n                \"customer_last_name\": \"\",\n                \"customer_company_name\": \"\",\n                \"customer_email\": \"velmurugan.k@zuper.co\",\n                \"is_active\": true,\n                \"is_deleted\": false\n            },\n            \"organization\": {\n                \"organization_name\": \"Test org\",\n                \"organization_email\": \"richard.mathew@gmail.com\",\n                \"is_active\": false,\n                \"is_deleted\": false\n            },\n            \"service_address\": {\n                \"landmark\": \"tst\",\n                \"city\": \"tst\",\n                \"state\": \"tst\",\n                \"street\": \"tst\",\n                \"country\": \"tst\",\n                \"zip_code\": \"tst\",\n                \"first_name\": \"tst\",\n                \"last_name\": \"tst\",\n                \"phone_number\": \"tst\",\n                \"email\": \"tst\"\n            },\n            \"billing_address\": {\n                \"landmark\": \"tst\",\n                \"city\": \"tst\",\n                \"state\": \"tst\",\n                \"street\": \"tst\",\n                \"country\": \"tst\",\n                \"zip_code\": \"tst\",\n                \"first_name\": \"tst\",\n                \"last_name\": \"tst\",\n                \"phone_number\": \"tst\",\n                \"email\": \"tst\"\n            },\n            \"request_status\": {\n                \"created_at\": \"2023-11-01T11:50:53.539Z\"\n            },\n            \"assigned_to_team\": [],\n            \"assigned_to\": [\n                {\n                    \"user\": {\n                        \"user_uid\": \"dee40152-bf45-463c-92c3-eb62804490e2\",\n                        \"first_name\": \"test\",\n                        \"last_name\": \"f5\",\n                        \"email\": \"velu.k@zuper.co\",\n                        \"external_login_id\": null,\n                        \"home_phone_number\": null,\n                        \"designation\": \"FE\",\n                        \"emp_code\": \"FE5\",\n                        \"prefix\": null,\n                        \"work_phone_number\": null,\n                        \"mobile_phone_number\": null,\n                        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                        \"hourly_labor_charge\": null,\n                        \"is_active\": true,\n                        \"is_deleted\": false,\n                        \"created_at\": \"2022-12-01T13:19:24.000Z\",\n                        \"updated_at\": \"2022-12-01T13:19:24.000Z\",\n                        \"role\": {\n                            \"role_id\": 3,\n                            \"role_uid\": \"37a7b7c4-e261-408e-9c7b-de6d784735c6\",\n                            \"role_name\": \"Field Executive\",\n                            \"role_key\": \"FIELD_EXECUTIVE\",\n                            \"created_at\": \"2022-11-02T13:31:29.000Z\",\n                            \"updated_at\": \"2022-11-02T13:31:29.000Z\"\n                        }\n                    },\n                    \"team\": {\n                        \"team_uid\": \"4e1c409f-32fd-42fe-9be0-72f48e0467fa\",\n                        \"team_name\": \"Test Team 4\",\n                        \"team_color\": \"#4960a0\",\n                        \"is_active\": true,\n                        \"is_deleted\": false\n                    }\n                }\n            ],\n            \"created_by\": {\n                \"user_uid\": \"cfa78be2-b427-4d5a-89fe-7cf4a8e01352\",\n                \"first_name\": \"velmurugan\",\n                \"last_name\": \"k\",\n                \"email\": \"velmurugan.k@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"9600086457\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9600086457\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-11-03T11:33:22.000Z\",\n                \"updated_at\": \"2023-10-10T13:38:04.000Z\",\n                \"role\": {\n                    \"role_id\": 1,\n                    \"role_uid\": \"83674ce3-58f7-4992-b126-2413ea72832d\",\n                    \"role_name\": \"Admin\",\n                    \"role_key\": \"ADMIN\",\n                    \"created_at\": \"2022-11-02T13:31:29.000Z\",\n                    \"updated_at\": \"2022-11-02T13:31:29.000Z\"\n                }\n            },\n            \"is_deleted\": false,\n            \"created_at\": \"2023-11-01T11:50:53.539Z\",\n            \"updated_at\": \"2023-11-01T11:55:18.308Z\",\n            \"request_id\": 29\n        }\n    ],\n    \"total_records\": 1,\n    \"current_page\": 1,\n    \"total_pages\": 1\n}"
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
                              "organization_name": {
                                "type": "string",
                                "example": "Test org"
                              },
                              "organization_email": {
                                "type": "string",
                                "example": "richard.mathew@gmail.com"
                              },
                              "is_active": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
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
                                        "role_id": {
                                          "type": "integer",
                                          "example": 3,
                                          "default": 0
                                        },
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
                                        },
                                        "created_at": {
                                          "type": "string",
                                          "example": "2022-11-02T13:31:29.000Z"
                                        },
                                        "updated_at": {
                                          "type": "string",
                                          "example": "2022-11-02T13:31:29.000Z"
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
                                  "role_id": {
                                    "type": "integer",
                                    "example": 1,
                                    "default": 0
                                  },
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
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2022-11-02T13:31:29.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2022-11-02T13:31:29.000Z"
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